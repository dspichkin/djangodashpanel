import time
import json
import pytz

from datetime import datetime, timedelta
from django.utils import timezone
from django.conf import settings

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from ..models.security import (
    SecurityLoginAttemptIncorrect, SecurityLoginAttemptCorrect
)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def correctlogins_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=24)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)
    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=24)
        date_end_tz = now

    count_hosts = []
    temp_hosts = {}
    temp_users = {}
    dates = []
    values = SecurityLoginAttemptCorrect.objects.filter(time__range=[date_start_tz, date_end_tz])
    count_correct_attempt = 0
    for p in values:
        value = json.loads(p.value)
        attempt_count = 0

        for host, v in value.get("hosts", {}).items():
            attempt_count += v.get("count", 0)
            count_correct_attempt += attempt_count
            raw_date = v.get("last_date")
            date_tz = None 

            if raw_date:
                date = datetime.fromtimestamp(int(raw_date))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

            if host in temp_hosts:
                temp_hosts[host]["count"] = temp_hosts[host]["count"] + v.get("count", 0)
                temp_hosts[host]["last_date"] = date_tz.strftime("%b %d %H:%M")
            else:
                temp_hosts[host] = {
                    "host": host,
                    "count": v.get("count", 0),
                    "last_date": date_tz.strftime("%b %d %H:%M")
                }
        for username, v in value.get("users", {}).items():
            attempt_count += v.get("count", 0)
            raw_date = v.get("last_date")
            date_tz = None 

            if raw_date:
                date = datetime.fromtimestamp(int(raw_date))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

            if username in temp_users:
                temp_users[username]["count"] = temp_users[username]["count"] + v.get("count", 0)
                temp_users[username]["last_date"] = date_tz.strftime("%b %d %H:%M")
            else:
                temp_users[username] = {
                    "username": username,
                    "count": v.get("count", 0),
                    "last_date": date_tz.strftime("%b %d %H:%M")
                }

        count_hosts.append(attempt_count)
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    hosts = []
    for i in temp_hosts:
        hosts.append(temp_hosts[i])
    if hosts:
        hosts.sort(key=lambda x: x["count"], reverse=True)
        hosts = hosts[:100]

    users = []
    for i in temp_users:
        users.append(temp_users[i])
    if users:
        users.sort(key=lambda x: x["count"], reverse=True)
        users = users[:100]

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }
    if values:
        date_range["start"] = time.mktime(timezone.localtime(values[0].time).timetuple())

    start_obj = SecurityLoginAttemptCorrect.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "values": [{
            "data": count_hosts,
            "label": 'Number of login'
        }],
        "dates": dates,
        "date_range": date_range,
        "count_correct_attempt": count_correct_attempt,
        "hosts": hosts,
        "users": users
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def incorrectlogins_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=24)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)
    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=24)
        date_end_tz = now

    count_incorrect_attepmt = 0
    count_hosts = []
    temp_hosts = {}
    temp_users = {}
    dates = []
    values = SecurityLoginAttemptIncorrect.objects.filter(time__range=[date_start_tz, date_end_tz])

    for p in values:
        value = json.loads(p.value)
        attempt_count = 0

        for host, v in value.get("hosts", {}).items():
            attempt_count += v.get("count", 0)
            raw_date = v.get("last_date")
            date_tz = None

            if raw_date:
                date = datetime.fromtimestamp(int(raw_date))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

            if host in temp_hosts:
                temp_hosts[host]["count"] = temp_hosts[host]["count"] + v.get("count", 0)
                temp_hosts[host]["last_date"] = date_tz.strftime("%b %d %H:%M")
            else:
                temp_hosts[host] = {
                    "host": host,
                    "count": v.get("count", 0),
                    "last_date": date_tz.strftime("%b %d %H:%M")
                }

        for user, v in value.get("users", {}).items():
            attempt_count += v.get("count")
            raw_date = v.get("last_date")
            date_tz = None

            if raw_date:
                date = datetime.fromtimestamp(int(raw_date))
                date_tz = pytz.timezone(settings.TIME_ZONE).localize(date, is_dst=None)

            if user in temp_users:
                temp_users[user]["count"] = temp_users[user]["count"] + v.get("count")
                temp_users[user]["last_date"] = date_tz.strftime("%b %d %H:%M")
            else:
                temp_users[user] = {
                    "username": user,
                    "count": v.get("count"),
                    "last_date": date_tz.strftime("%b %d %H:%M")
                }

        count_incorrect_attepmt += attempt_count
        count_hosts.append(attempt_count)
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    hosts = []
    for i in temp_hosts:
        hosts.append(temp_hosts[i])
    if hosts:
        hosts.sort(key=lambda x: x["count"], reverse=True)
        hosts = hosts[:100]

    users = []
    for i in temp_users:
        users.append(temp_users[i])
    if users:
        users.sort(key=lambda x: x["count"], reverse=True)
        users = users[:100]

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,  # time.mktime(timezone.localtime(timezone.now()).timetuple()),
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }
    if values:
        date_range["start"] = time.mktime(timezone.localtime(values[0].time).timetuple())

    start_obj = SecurityLoginAttemptIncorrect.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10
    return Response({
        "values": [{
            "data": count_hosts,
            "label": 'Number of attempt incorrect login'
        }],
        "dates": dates,
        "date_range": date_range,
        "count_incorrect_attepmt": count_incorrect_attepmt,
        "hosts": hosts,
        "users": users
    }, status=status.HTTP_200_OK)
