# -*- coding: utf-8 -*-
import math
import json

from datetime import datetime

from django.utils.encoding import python_2_unicode_compatible
from django.contrib.gis.db import models
from django.utils import timezone


class UrlLogStatManager(models.Manager):
    def put(self, dt_last_tz, value):
        if dt_last_tz and isinstance(dt_last_tz, datetime) and value:
            obj_id = int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = UrlLogStat.objects.get_or_create(pk=obj_id)
            obj.time = dt_last_tz

            if obj.value:
                data = json.loads(obj.value)
                request_url = value["request_url"]
                request_method = value["request_method"]

                if request_url in data:
                    if request_method in data[request_url]:
                        data[request_url][request_method]["count"] += 1
                        data[request_url][request_method]["last_time_request"] = value["request_start"]
                        data[request_url][request_method]["request_duration"] = value["request_duration"]
                        data[request_url][request_method]["request_code"] = value["request_code"]
                        data[request_url][request_method]["request_sql_time"] = value["request_sql_time"]
                    else:
                        data[request_url] = {}
                        data[request_url][request_method] = {
                            "count": 1,
                            "last_time_request": value["request_start"],
                            "request_duration": value["request_duration"],
                            "request_code": value["request_code"],
                            "request_sql_count": value["request_sql_count"],
                            "request_sql_time": value["request_sql_time"],
                        }
                else:
                    data[request_url] = {}
                    data[request_url][request_method] = {
                        "count": 1,
                        "last_time_request": value["request_start"],
                        "request_duration": value["request_duration"],
                        "request_code": value["request_code"],
                        "request_sql_count": value["request_sql_count"],
                        "request_sql_time": value["request_sql_time"],
                    }
                obj.value = json.dumps(data)
            else:
                request_url = value["request_url"]
                request_method = value["request_method"]
                data = {}
                data[request_url] = {}
                data[request_url][request_method] = {
                    "count": 1,
                    "last_time_request": value["request_start"],
                    "request_duration": value["request_duration"],
                    "request_code": value["request_code"],
                    "request_sql_count": value["request_sql_count"],
                    "request_sql_time": value["request_sql_time"],
                }
                obj.value = json.dumps(data)

            obj.save()
            return True
        return False


@python_2_unicode_compatible
class UrlLogStat(models.Model):
    """
    each 5 minutes
    total have to be = 7 day of the week * 24 hour * 12 records in one hour = 2016 records
    """
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = UrlLogStatManager()

    class Meta:
        verbose_name = u'Url requests statistics'
        verbose_name_plural = u'Url requests statistics'
        ordering = ('time',)

    def __str__(self):
        return "%s" % (self.time)
