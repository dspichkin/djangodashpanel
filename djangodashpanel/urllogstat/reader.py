import os
import re
from django.utils import timezone

from djangodashpanel.models.urllogstat import UrlLogStat


def read_log_file(filepath):
    if os.path.exists(filepath):
        filename = 'urlstat.stat'
        filenamepath = os.path.join(filepath, filename)
        with open(filenamepath, 'r') as the_file:
            for line in the_file.readlines():
                print "!!!!", line
                data = line.split('\t')
                request_start = data[0]
                request_duration = data[1]
                request_method = data[2]
                request_url = data[3]
                request_code = data[4]
                request_sql_count = data[5]
                request_sql_time = data[6]
                value = {
                    "request_start": request_start,
                    "request_duration": request_duration,
                    "request_method": request_method,
                    "request_url": request_url,
                    "request_code": request_code,
                    "request_sql_count": request_sql_count,
                    "request_sql_time": request_sql_time
                }
                UrlLogStat.objects.put(timezone.now(), value)

        with open(filenamepath, 'w') as the_file:
            the_file.write("")

