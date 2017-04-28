# -*- coding: utf-8 -*-
import math
import json

from datetime import datetime

from django.utils.encoding import python_2_unicode_compatible
from django.contrib.gis.db import models
from django.utils import timezone

from ..solo.models import SingletonModel


@python_2_unicode_compatible
class BackupData(SingletonModel):
    backups_enable = models.BooleanField(u'backups enable', default=True)
    last_run_backup = models.DateTimeField(u'last run backup', null=True, blank=True)
    result = models.NullBooleanField(u'result of last backup')
    run_time = models.DateTimeField(u'every day time for run', null=True, blank=True)
    media_directories = models.TextField(u'directories', default="[]")

    class Meta:
        verbose_name = u'Backup data'
        verbose_name_plural = u'Backup data'

    def __str__(self):
        return "%s %s" % (self.backups_enable, self.run_time)
