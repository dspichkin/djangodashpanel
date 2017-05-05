# -*- coding: utf-8 -*-
import math
import json
import time

from datetime import datetime, timedelta

from django.utils.encoding import python_2_unicode_compatible
from django.db import models

from ..solo.models import SingletonModel


@python_2_unicode_compatible
class SecurityData(SingletonModel):
    run_last_login_attempt_incorrect = models.DateTimeField(u'run last login attempt incorrect', null=True, blank=True)
    run_last_login_attempt_correct = models.DateTimeField(u'run last login attempt correct', null=True, blank=True)

    class Meta:
        verbose_name = u'Security data'
        verbose_name_plural = u'Security data'

    def __str__(self):
        return "%s %s" % (self.run_last_login_attempt_correct, self.run_last_login_attempt_incorrect)


class SecurityLoginIncorrectAttemptManager(models.Manager):
    def put(self, dt_last_tz, host, user):
        if dt_last_tz and isinstance(dt_last_tz, datetime) and host and user:
            obj_id = int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = SecurityLoginAttemptIncorrect.objects.get_or_create(pk=obj_id)

            if obj.value and obj.time and dt_last_tz < obj.time + timedelta(minutes=60):

                data = json.loads(obj.value)

                if host in data.get("hosts", {}):
                    data["hosts"][host]["count"] = data["hosts"][host]["count"] + 1
                    data["hosts"][host]["last_date"] = time.mktime(dt_last_tz.timetuple())
                else:
                    data["hosts"][host] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple())
                    }

                if user in data.get("users", {}):
                    data["users"][user]["count"] = data["users"][user]["count"] + 1
                else:
                    data["users"][user] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple())
                    }

            else:
                data = {
                    "hosts": {},
                    "users": {}
                }
                data["hosts"][host] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple())
                }
                data["users"][user] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple())
                }

            try:
                obj.time = dt_last_tz
                obj.value = json.dumps(data)
                obj.save()
            except:
                return False
            return True
        return False


@python_2_unicode_compatible
class SecurityLoginAttemptIncorrect(models.Model):
    """
    each 30 minutes
    total have to be = 7 day of the week * 24 hour * 2 records in one hour = 336 records
    """
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = SecurityLoginIncorrectAttemptManager()

    class Meta:
        verbose_name = u'Security login attempt incorrect'
        verbose_name_plural = u'Security login attempt incorrect'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)


class SecurityLoginCorrectAttemptManager(models.Manager):
    def put(self, dt_last_tz, host, user):
        if dt_last_tz and isinstance(dt_last_tz, datetime) and host and user:

            obj_id = int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = SecurityLoginAttemptCorrect.objects.get_or_create(pk=obj_id)
            obj.time = dt_last_tz

            data = None
            if obj.value and obj.time and dt_last_tz < obj.time + timedelta(minutes=60):
                data = json.loads(obj.value)
                if host in data.get("hosts"):
                    data["hosts"][host]["count"] = data["hosts"][host]["count"] + 1
                    data["hosts"][host]["last_date"] = time.mktime(dt_last_tz.timetuple())
                else:
                    data["hosts"][host] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple())
                    }

                if user in data.get("users"):
                    data["users"][user]["count"] = data["users"][user]["count"] + 1
                    data["users"][user]["last_date"] = time.mktime(dt_last_tz.timetuple())
                else:
                    data["users"][user] = {
                        "count": 1,
                        "last_date": time.mktime(dt_last_tz.timetuple())
                    }
            else:
                data = {
                    "hosts": {},
                    "users": {}
                }
                data["hosts"][host] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple())
                }
                data["users"][user] = {
                    "count": 1,
                    "last_date": time.mktime(dt_last_tz.timetuple())
                }
            try:
                obj.value = json.dumps(data)
                obj.save()
            except Exception as e:
                print e
                return False
            return True
        return False


@python_2_unicode_compatible
class SecurityLoginAttemptCorrect(models.Model):
    """
    each 30 minutes
    total have to be = 7 day of the week * 24 hour * 2 records in one hour = 336 records
    """
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = SecurityLoginCorrectAttemptManager()

    class Meta:
        verbose_name = u'Security login attempt correct'
        verbose_name_plural = u'Security login attempt correct'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)
