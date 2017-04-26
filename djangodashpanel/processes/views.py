

import time
import json

from datetime import datetime, timedelta
from django.utils import timezone
from django.utils.translation import ngettext

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models.perf import (
    PerfProcess
)


@api_view(['GET'])
def processes_data(request):
    date_start_raw = request.GET.get('date_start')
    date_end_raw = request.GET.get('date_end')

    date_start = None
    date_end = None

    if not date_start_raw or not date_end_raw:
        now = timezone.now()
        date_start = now - timedelta(hours=8)
        date_end = now
    else:
        date_start = datetime.fromtimestamp(int(date_start_raw))
        date_end = datetime.fromtimestamp(int(date_end_raw))
    if date_start == date_end:
        now = timezone.now()
        date_start = now - timedelta(hours=8)
        date_end = now

    processes = []
    dates = []
    values = PerfProcess.objects.filter(time__range=[date_start, date_end])
    for p in values:
        d = json.loads(p.processes)
        processes.append(len(d))
        dates.append(timezone.localtime(p.time).strftime("%b %d %H:%M"))
    date_range = {
        "start": time.mktime(timezone.localtime(values[0].time).timetuple())
    }
    start_obj = PerfProcess.objects.all().first()
    if start_obj:
        date_range["start_date"] = time.mktime(timezone.localtime(start_obj.time).timetuple())
    end_obj = PerfProcess.objects.all().last()
    if end_obj:
        date_range["end_date"] = time.mktime(timezone.localtime(end_obj.time).timetuple())
    return Response({
        "values": [{
            "data": processes,
            "label": 'Number of processes'
        }],
        "dates": dates,
        "date_range": date_range
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def processes_number_data(request):
    now = timezone.now()
    hours = request.GET.get("hours", 8)
    date_start = now - timedelta(hours=hours)
    date_end = now

    count = 0
    temp = 0
    for p in PerfProcess.objects.filter(time__range=[date_start, date_end]):
        d = json.loads(p.processes)
        temp += len(d)
        count += 1
    avarage_number = round(float(temp) / count, 2)

    return Response({
        "hours": hours,
        "avarage_number": avarage_number,
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def processes_last_data(request):
    data = {}
    last = PerfProcess.objects.all().last()
    time = timezone.localtime(timezone.now()).strftime("%b %d %H:%M")
    if last:
        data = json.loads(last.processes)
        time = last.time
        data.sort(key=lambda x: x.get('cpu', 0), reverse=True)

    return Response({
        "time": timezone.localtime(time).strftime("%b %d %H:%M"),
        "processes": data,
    }, status=status.HTTP_200_OK)

