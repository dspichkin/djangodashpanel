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

from ..models.urllogstat import (
    UrlLogStat
)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def urlstat_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=8)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=8)
        date_end_tz = now

    urlstat = []
    sql_count = []
    sql_duration = []
    request_duration = []
    dates = []
    values = UrlLogStat.objects.filter(time__range=[date_start_tz, date_end_tz])

    raw_all_requests = {}

    for p in values:
        value = json.loads(p.value)
        number_of_request = 0
        request_sql_count = 0
        last_sql_duration = 0
        last_request_duration = 0
        for k, v in value.items():
            if k not in raw_all_requests:
                raw_all_requests[k] = v

            for k1, v1 in value[k].items():
                raw_all_requests[k][k1] = v1
                raw_all_requests[k][k1]["method"] = k1
                raw_all_requests[k][k1]["url"] = k

                number_of_request += v1.get("count", 0)
                request_sql_count += v1.get("request_sql_count", 0)
                if v1.get("request_sql_time", 0) > last_sql_duration:
                    last_sql_duration = v1.get("request_sql_time", 0)
                if v1.get("request_duration", 0) > last_request_duration:
                    last_request_duration = v1.get("request_duration", 0)

        sql_duration.append(last_sql_duration)
        request_duration.append(last_request_duration)
        sql_count.append(request_sql_count)
        urlstat.append(number_of_request)
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }

    if values:
        date_range["start"] = time.mktime(timezone.localtime(values[0].time).timetuple())

    start_obj = UrlLogStat.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = UrlLogStat.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    all_requests = []
    for k, v in raw_all_requests.items():
        for k1, v1 in raw_all_requests[k].items():
            all_requests.append(v1)
    all_requests.sort(key=lambda x: x.get('count', 0), reverse=True)

    return Response({
        "values": [{
            "data": urlstat,
            "label": 'Number of reqs.'
        }, {
            "data": sql_count,
            "label": 'Number of sql queries'
        }],
        "values_time": [{
            "data": request_duration,
            "label": 'Max duration req.'
        }, {
            "data": sql_duration,
            "label": 'Max duration SQL query'
        }],
        "dates": dates,
        "all_requests": all_requests,
        "date_range": date_range,
        "last_time": timezone.localtime(timezone.now()).strftime("%b %d %H:%M"),
    }, status=status.HTTP_200_OK)
