# -*- coding: utf-8 -*-
import math
import json

from datetime import datetime

from django.utils.encoding import python_2_unicode_compatible
from django.contrib.gis.db import models
from django.utils import timezone

from ..solo.models import SingletonModel


@python_2_unicode_compatible
class PerfData(SingletonModel):
    run_last_time_5m = models.DateTimeField(u'last run 5m', null=True, blank=True)
    run_last_time_10m = models.DateTimeField(u'last run 10m', null=True, blank=True)
    run_last_time_30m = models.DateTimeField(u'last run 30m', null=True, blank=True)
    run_last_time_1h = models.DateTimeField(u'last run 1h', null=True, blank=True)

    class Meta:
        verbose_name = u'Perfomance data'
        verbose_name_plural = u'Perfomance data'

    def __str__(self):
        return "%s" % (self.run_last_time_5m)


class PerfCpuManager(models.Manager):
    def put(self, dt, value):
        if dt and isinstance(dt, datetime) and value:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 5)) * 5))
            obj = PerfCpu()
            obj.id = obj_id
            obj.time = dt
            obj.value = value
            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfCpu(models.Model):
    """
    each 5 minutes
    total have to be = 7 day of the week * 24 hour * 12 records in one hour = 2016 records
    """
    time = models.DateTimeField(u'дата')
    value = models.FloatField(u'значение')

    objects = PerfCpuManager()

    class Meta:
        verbose_name = u'Perfomance cpu'
        verbose_name_plural = u'Perfomance cpu'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)


class PerfMemoryManager(models.Manager):
    def put(self, dt, vm, sm):
        if dt and isinstance(dt, datetime) and vm and sm:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 10)) * 10))
            obj = PerfMemory()
            obj.id = obj_id
            obj.time = dt

            obj.total = vm.total
            obj.available = vm.available
            obj.percent = vm.percent
            obj.used = vm.used
            obj.free = vm.free
            obj.active = vm.active
            obj.inactive = vm.inactive
            obj.swap_total = sm.total
            obj.swap_used = sm.used
            obj.swap_free = sm.free
            obj.swap_percent = sm.percent

            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfMemory(models.Model):
    """
    each 10 minutes
    total have to be = 7 day of the week * 24 hour * 6 records in one hour = 1008 records
    """
    time = models.DateTimeField(u'date')
    total = models.BigIntegerField(u'total')
    available = models.BigIntegerField(u'available')
    percent = models.IntegerField(u'percent')
    used = models.BigIntegerField(u'used')
    free = models.BigIntegerField(u'free')
    active = models.BigIntegerField(u'active')
    inactive = models.BigIntegerField(u'inactive')
    swap_total = models.BigIntegerField(u'swap total')
    swap_used = models.BigIntegerField(u'swap used')
    swap_free = models.BigIntegerField(u'swap free')
    swap_percent = models.IntegerField(u'swap percent')

    objects = PerfMemoryManager()

    class Meta:
        verbose_name = u'Perfomance memory'
        verbose_name_plural = u'Perfomance memory'
        ordering = ('time',)

    def __str__(self):
        return "%s" % (self.time)


class PerfDiskManager(models.Manager):
    def put(self, dt, dsk):
        if dt and isinstance(dt, datetime) and dsk:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 30)) * 30))
            obj = PerfDisk()
            obj.id = obj_id
            obj.time = dt
            obj.total = dsk.total
            obj.used = dsk.used
            obj.free = dsk.free
            obj.percent = dsk.percent
            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfDisk(models.Model):
    """
    each 10 minutes
    total have to be = 7 day of the week * 24 hour * 2 in one hour = 336 records
    """
    time = models.DateTimeField(u'date')
    total = models.BigIntegerField(u'total')
    used = models.BigIntegerField(u'used')
    free = models.BigIntegerField(u'free')
    percent = models.IntegerField(u'percent')

    objects = PerfDiskManager()

    class Meta:
        verbose_name = u'Perfomance disk'
        verbose_name_plural = u'Perfomance disk'
        ordering = ('time',)

    def __str__(self):
        return "%s %s" % (self.time, self.value)


class PerfNetworkManager(models.Manager):
    def put(self, dt, net):
        if dt and isinstance(dt, datetime) and net:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 5)) * 5))
            obj = PerfNetwork()
            obj.id = obj_id
            obj.time = dt
            obj.bytes_sent = net.bytes_sent
            obj.bytes_recv = net.bytes_recv
            obj.packets_sent = net.packets_sent
            obj.packets_recv = net.packets_recv
            obj.errin = net.errin
            obj.errout = net.errout
            obj.dropin = net.dropin
            obj.dropout = net.dropout
            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfNetwork(models.Model):
    """
    each 10 minutes
    total have to be = 7 day of the week * 24 hour * 12 records in one hour = 2016 records
    """
    time = models.DateTimeField(u'date')
    bytes_sent = models.BigIntegerField(u'bytes sent')
    bytes_recv = models.BigIntegerField(u'bytes recv')
    packets_sent = models.BigIntegerField(u'packets sent')
    packets_recv = models.IntegerField(u'packets recv')

    errin = models.BigIntegerField(u'errin')
    errout = models.BigIntegerField(u'errout')
    dropin = models.BigIntegerField(u'dropin')
    dropout = models.BigIntegerField(u'dropout')

    objects = PerfNetworkManager()

    class Meta:
        verbose_name = u'Perfomance network'
        verbose_name_plural = u'Perfomance network'
        ordering = ('time',)

    def __str__(self):
        return "%s" % (self.time)


class PerfProcessManager(models.Manager):
    def put(self, dt, pr):
        if dt and isinstance(dt, datetime) and pr:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 30)) * 30))
            obj = PerfProcess()
            obj.id = obj_id
            obj.time = dt
            obj.processes = json.dumps(pr)
            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfProcess(models.Model):
    """
    each 30 minutes
    total have to be = 7 day of the week * 24 hour * 2 records in one hour = 336 records
    """
    time = models.DateTimeField(u'date')
    processes = models.TextField()

    objects = PerfProcessManager()

    class Meta:
        verbose_name = u'Perfomance processes'
        verbose_name_plural = u'Perfomance processes'
        ordering = ('time',)

    def __str__(self):
        return "%s" % (self.time)


class PerfSystemManager(models.Manager):
    def put(self, dt, sys):
        if dt and isinstance(dt, datetime) and sys:
            tzdt = timezone.localtime(dt)
            obj_id = int(str(tzdt.weekday()) + str(tzdt.hour) + str(int(math.ceil(tzdt.minute / 30)) * 30))
            obj = PerfSystem()
            obj.id = obj_id
            obj.time = dt
            obj.users = json.dumps(sys)
            obj.save()
            return True
        return False


@python_2_unicode_compatible
class PerfSystem(models.Model):
    """
    each 1 minutes
    total have to be = 7 day of the week * 24 hour * 2 records in one hour = 336 records
    """
    time = models.DateTimeField(u'date')
    users = models.TextField()

    objects = PerfSystemManager()

    class Meta:
        verbose_name = u'Perfomance system'
        verbose_name_plural = u'Perfomance system'
        ordering = ('time',)

    def __str__(self):
        return "%s" % (self.time)
