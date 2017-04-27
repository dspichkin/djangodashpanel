# -*- coding: utf-8 -*-
import math
import json

from datetime import datetime

from django.utils.encoding import python_2_unicode_compatible
from django.contrib.gis.db import models
from django.utils import timezone

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
            obj.time = dt_last_tz

            if obj.value:
                data = json.loads(obj.value)

                if host in data.get("hosts", {}):
                    data["hosts"][host] = data["hosts"][host] + 1
                else:
                    data["hosts"][host] = 1
                if user in data.get("users", {}):
                    data["users"][user] += 1
                else:
                    data["users"][user] = 1
            else:
                data = {
                    "hosts": {
                        host: 1
                    },
                    "users": {
                        user: 1
                    }
                }
            try:
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
            #tzdt = timezone.localtime(dt)

            obj_id = int(str(dt_last_tz.weekday()) + str(dt_last_tz.hour) + str(int(math.ceil(dt_last_tz.minute / 5)) * 5))
            obj, created = SecurityLoginAttemptCorrect.objects.get_or_create(pk=obj_id)
            obj.time = dt_last_tz

            if obj.value:
                data = json.loads(obj.value)

                if host in data.get("hosts", {}):
                    data["hosts"][host] = data["hosts"][host] + 1
                else:
                    data["hosts"][host] = 1
                if user in data.get("users", {}):
                    data["users"][user] += 1
                else:
                    data["users"][user] = 1
            else:
                data = {
                    "hosts": {
                        host: 1
                    },
                    "users": {
                        user: 1
                    }
                }
            try:
                obj.value = json.dumps(data)
                obj.save()
            except:
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
