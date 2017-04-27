import time
import psutil
import platform
import socket
import sys
import pytz

from datetime import datetime, timedelta
from django.utils import timezone
from django.utils.translation import ngettext
from django.conf import settings

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from ..models.perf import (
    PerfCpu, PerfMemory, PerfDisk, PerfNetwork
)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def info_data(request):
    data = {
        "name": socket.gethostname(),
        "fqdn": socket.getfqdn(),
        "system platform": sys.platform,
        "machine": platform.machine(),
        "node": platform.node(),
        "platform": platform.platform(),
        "processor": platform.processor(),
        "system": platform.system(),
        "release": platform.release(),
        "version": platform.version(),
        "cpus": str(psutil.cpu_count()),
        # "linux_distribution": platform.linux_distribution(),
        "physicalCpu": str(psutil.cpu_count(logical=False))
    }

    return Response({
        "info": data
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def dash_info_data(request):
    now = timezone.now()
    hours = request.GET.get("hours", 8)
    date_start_tz = now - timedelta(hours=hours)
    date_end_tz = now

    count = 0
    cpu_temp = 0
    for cpu in PerfCpu.objects.filter(time__range=[date_start_tz, date_end_tz]):
        cpu_temp += cpu.value
        count += 1
    avarage_cpu = round(float(cpu_temp) / count, 2)

    count = 0
    memory_temp = 0
    for m in PerfMemory.objects.filter(time__range=[date_start_tz, date_end_tz]):
        memory_temp += m.percent
        count += 1

    avarage_memory = round(float(memory_temp) / count, 2)

    count = 0
    disk_temp = 0
    for m in PerfDisk.objects.filter(time__range=[date_start_tz, date_end_tz]):
        disk_temp += m.percent
        count += 1

    avarage_disk = round(float(disk_temp) / count, 2)

    return Response({
        "hours": hours,
        "avarage_cpu": avarage_cpu,
        "avarage_memory": avarage_memory,
        "avarage_disk": avarage_disk
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def cpu_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    values = []
    dates = []
    cpu_values = PerfCpu.objects.filter(time__range=[date_start_tz, date_end_tz])
    for p in cpu_values:
        values.append(round(p.value, 2))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    # date_range = {
    #    "start": time.mktime(timezone.localtime(cpu_values[0].time).timetuple())
    # }

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }

    if cpu_values:
        date_range["start"] = time.mktime(timezone.localtime(cpu_values[0].time).timetuple())

    start_obj = PerfCpu.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfCpu.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "values": [{
            "data": values,
            "label": 'Cpu perfomance'
        }],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def memory_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)
    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    used = []
    free = []
    swap_used = []
    dates = []
    memory_values = PerfMemory.objects.filter(time__range=[date_start_tz, date_end_tz])
    for p in memory_values:
        used.append(round(p.used, 2))
        free.append(round(p.available, 2))
        swap_used.append(round(p.swap_used, 2))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    # date_range = {
    #    "start": time.mktime(timezone.localtime(memory_values[0].time).timetuple())
    # }
    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }

    if memory_values:
        date_range["start"] = time.mktime(timezone.localtime(memory_values[0].time).timetuple())

    start_obj = PerfMemory.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfMemory.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "values": [{
            "data": used,
            "label": 'Memory used'
        }, {
            "data": free,
            "label": 'Memory free '
        }, {
            "data": swap_used,
            "label": 'Swap memory used'
        }
        ],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def disk_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)
    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    used_percent = []
    dates = []
    disk_values = PerfDisk.objects.filter(time__range=[date_start_tz, date_end_tz])
    for p in disk_values:
        used_percent.append(round(p.percent, 2))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    # date_range = {
    #    "start": time.mktime(timezone.localtime(disk_values[0].time).timetuple())
    # }

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }

    if disk_values:
        date_range["start"] = time.mktime(timezone.localtime(disk_values[0].time).timetuple())

    start_obj = PerfMemory.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfMemory.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "values": [{
            "data": used_percent,
            "label": 'Disk used %'
        }],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def network_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start_tz = None
    date_end_tz = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_start_tz = pytz.timezone(settings.TIME_ZONE).localize(date_start, is_dst=None)
        date_end = datetime.fromtimestamp(int(date_end_raw))
        date_end_tz = pytz.timezone(settings.TIME_ZONE).localize(date_end, is_dst=None)

    if date_start_tz == date_end_tz:
        now = timezone.now()
        date_start_tz = now - timedelta(hours=4)
        date_end_tz = now

    bytes_sent = []
    bytes_recv = []
    dates = []
    values = PerfNetwork.objects.filter(time__range=[date_start_tz, date_end_tz])

    old_value_bytes_sent = None
    old_value_bytes_recv = None
    for p in values:
        if old_value_bytes_sent:
            current_bytes_sent = p.bytes_sent - old_value_bytes_sent
            bytes_sent.append(round(current_bytes_sent, 2))

        if old_value_bytes_recv:
            current_bytes_recv = p.bytes_recv - old_value_bytes_recv
            bytes_recv.append(round(current_bytes_recv, 2))

        if old_value_bytes_sent and old_value_bytes_recv:
            dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))
        old_value_bytes_sent = p.bytes_sent
        old_value_bytes_recv = p.bytes_recv

    # date_range = {
    #    "start": time.mktime(timezone.localtime(disk_values[0].time).timetuple())
    # }

    date_range = {
        "start":  time.mktime(timezone.localtime(date_start_tz).timetuple()),
        "start_date": time.mktime(timezone.localtime(date_start_tz).timetuple()) + 10,
        "end_date": time.mktime(timezone.localtime(date_end_tz).timetuple()),
    }

    if values:
        date_range["start"] = time.mktime(timezone.localtime(values[0].time).timetuple())

    start_obj = PerfNetwork.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfNetwork.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())

    if date_range["start_date"] == date_range["end_date"]:
        date_range["end_date"] += 10

    return Response({
        "values": [{
            "data": bytes_sent,
            "label": 'Bytes send %'
        }, {
            "data": bytes_recv,
            "label": 'Bytes receive %'
        }],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def boottime_data(request):
    def localize_timedelta(delta):
        ret = []
        num_years = int(delta.days / 365)
        if num_years > 0:
            delta -= timedelta(days=num_years * 365)
            ret.append(ngettext('%d year', '%d years', num_years) % num_years)

        if delta.days > 0:
            ret.append(ngettext('%d day', '%d days', delta.days) % delta.days)

        num_hours = int(delta.seconds / 3600)
        if num_hours > 0:
            delta -= timedelta(hours=num_hours)
            ret.append(ngettext('%d hour', '%d hours', num_hours) % num_hours)

        num_minutes = int(delta.seconds / 60)
        if num_minutes > 0:
            ret.append(ngettext('%d minute', '%d minutes', num_minutes) % num_minutes)

        return ' '.join(ret)

    date = datetime.now() - datetime.fromtimestamp(psutil.boot_time())
    return Response({"boottime": localize_timedelta(date)}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def users_data(request):
    return Response({"users": psutil.users()}, status=status.HTTP_200_OK)
