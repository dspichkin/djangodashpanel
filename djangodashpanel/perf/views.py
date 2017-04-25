import time
from datetime import datetime, timedelta
from django.utils import timezone

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models.perf import (
    PerfCpu, PerfMemory
)


@api_view(['GET'])
def cpu_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start = None
    date_end = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start = now - timedelta(hours=4)
        date_end = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_end = datetime.fromtimestamp(int(date_end_raw))
    if date_start == date_end:
        now = timezone.now()
        date_start = now - timedelta(hours=4)
        date_end = now

    values = []
    dates = []
    cpu_values = PerfCpu.objects.filter(time__range=[date_start, date_end])
    for p in cpu_values:
        values.append(round(p.value, 2))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))
    date_range = {
        "start": time.mktime(timezone.localtime(cpu_values[0].time).timetuple())
    }
    start_obj = PerfCpu.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfCpu.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())
    return Response({
        "values": [{
            "data": values,
            "label": 'Cpu perfomance'
        }],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def memory_data(request):
    def human_size(size_bytes):
        """
        format a size in bytes into a 'human' file size, e.g. bytes, KB, MB, GB, TB, PB
        Note that bytes/KB will be reported in whole numbers but MB and above will have greater precision
        e.g. 1 byte, 43 bytes, 443 KB, 4.3 MB, 4.43 GB, etc
        """
        if size_bytes == 1:
            # because I really hate unnecessary plurals
            return "1 byte"

        suffixes_table = [('bytes',0),('KB',0),('MB',1),('GB',2),('TB',2), ('PB',2)]

        num = float(size_bytes)
        for suffix, precision in suffixes_table:
            if num < 1024.0:
                break
            num /= 1024.0

        if precision == 0:
            formatted_size = "%d" % num
        else:
            formatted_size = str(round(num, ndigits=precision))

        return "%s %s" % (formatted_size, suffix)


    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start = None
    date_end = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start = now - timedelta(hours=4)
        date_end = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_end = datetime.fromtimestamp(int(date_end_raw))
    if date_start == date_end:
        now = timezone.now()
        date_start = now - timedelta(hours=4)
        date_end = now

    used = []
    swap_used = []
    dates = []
    memory_values = PerfMemory.objects.filter(time__range=[date_start, date_end])
    for p in memory_values:
        used.append(round(p.used, 2))
        swap_used.append(round(p.swap_used, 2))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))

    date_range = {
        "start": time.mktime(timezone.localtime(memory_values[0].time).timetuple())
    }
    start_obj = PerfMemory.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfMemory.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())
    return Response({
        "values": [{
            "data": used,
            "label": 'Memory used'
        }, {
            "data": swap_used,
            "label": 'Swap memory used'
        }
        ],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)
