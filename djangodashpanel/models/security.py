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


class SecurityLoginAttemptManager(models.Manager):
    def put(self, dt, value):
        if dt and isinstance(dt, datetime) and value:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 5)) * 5))
            obj = SecurityLoginAttemptIncorrect()
            obj.id = obj_id
            obj.time = dt
            obj.value = value
            obj.save()
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

    objects = SecurityLoginAttemptManager()

    class Meta:
        verbose_name = u'Security login attempt incorrect'
        verbose_name_plural = u'Security login attempt incorrect'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)


@python_2_unicode_compatible
class SecurityLoginAttemptCorrect(models.Model):
    """
    each 30 minutes
    total have to be = 7 day of the week * 24 hour * 2 records in one hour = 336 records
    """
    time = models.DateTimeField(u'date', null=True)
    value = models.TextField(u'value', null=True)

    objects = SecurityLoginAttemptManager()

    class Meta:
        verbose_name = u'Security login attempt correct'
        verbose_name_plural = u'Security login attempt correct'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)
