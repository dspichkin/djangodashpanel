# -*- coding: utf-8 -*-

import logging
import os
import json
import math
import utmp
import psutil
import pytz

from datetime import timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.conf import settings


from djangodashpanel.models.perf import (
    PerfData, PerfCpu, PerfMemory, PerfDisk, PerfNetwork, PerfProcess,
    PerfSystem)
from djangodashpanel.models.security import (
    SecurityData, SecurityLoginAttemptIncorrect, SecurityLoginAttemptCorrect)


PATH_LOGIN_ATTEMPT_INCORRECT = None
PATH_LOGIN_ATTEMPT_CORRECT = None
if hasattr(settings, "PATH_LOGIN_ATTEMPT_INCORRECT"):
    PATH_LOGIN_ATTEMPT_INCORRECT = settings.PATH_LOGIN_ATTEMPT_INCORRECT
if hasattr(settings, "PATH_LOGIN_ATTEMPT_INCORRECT"):
    PATH_LOGIN_ATTEMPT_CORRECT = settings.PATH_LOGIN_ATTEMPT_INCORRECT


class Command(BaseCommand):
    help = 'Runs all jobs that are due.'

    def handle(self, *args, **options):

        perf = PerfData.get_solo()
        now = timezone.now()

        self.set_cpu()
        self.set_network()

        if not perf.run_last_time_10m or perf.run_last_time_10m + timedelta(minutes=10) < now:
            perf.run_last_time_10m = timezone.now()
            self.set_memory()

        if not perf.run_last_time_30m or perf.run_last_time_30m + timedelta(minutes=30) < now:
            perf.run_last_time_30m = timezone.now()
            self.set_disk()
            self.set_system()

        if not perf.run_last_time_1h or perf.run_last_time_1h + timedelta(minutes=60) < now:
            perf.run_last_time_1h = timezone.now()
            self.set_process()
            self.set_login_attempt_correct()
            self.set_login_attempt_incorrect()

        perf.run_last_time_5m = timezone.now()
        perf.save()

    def set_cpu(self):
        print "cpu"
        num = []
        for x in range(3):
            value = psutil.cpu_percent(interval=1)
            num.append(value)
        m = 0
        for x in num:
            m += x
        data = round(float(m) / len(num), 2)
        PerfCpu.objects.put(timezone.now(), data)

    def set_memory(self):
        print "memory"
        vm = psutil.virtual_memory()
        sm = psutil.swap_memory()
        PerfMemory.objects.put(timezone.now(), vm, sm)

    def set_disk(self):
        print "disk"
        dsk = psutil.disk_usage('/')
        PerfDisk.objects.put(timezone.now(), dsk)

    def set_network(self):
        print "network"
        net = psutil.net_io_counters()
        PerfNetwork.objects.put(timezone.now(), net)

    def set_process(self):
        print "process"
        processes = []
        for p in psutil.pids():
            try:
                pr = psutil.Process(p)
                t = {
                    "name": pr.name()
                }
                try:
                    t["cpu"] = pr.cpu_percent(interval=1.0)
                except:
                    t["cpu"] = 0.0
                processes.append(t)
            except:
                pass
        PerfProcess.objects.put(timezone.now(), processes)

    def set_system(self):
        print "system"
        systems = []
        for user in psutil.users():
            u = user
            t = {
                "name": u.name,
                "terminal": u.terminal,
                "host": u.host,
                "started": u.started
            }
            systems.append(t)

        PerfSystem.objects.put(timezone.now(), systems)

    def set_login_attempt_incorrect(self):
        if not PATH_LOGIN_ATTEMPT_INCORRECT or os.path.exists(PATH_LOGIN_ATTEMPT_INCORRECT):
            return

        sec = SecurityData.get_solo()
        with open(PATH_LOGIN_ATTEMPT_INCORRECT, 'rb') as fd:
            buf = fd.read()
            for entry in utmp.read(buf):
                dt = entry.time
                dt_last_tz = pytz.timezone(settings.TIME_ZONE).localize(dt, is_dst=None)
                if not sec.run_last_login_attemp_incorrect or sec.run_last_login_attemp_incorrect < dt_last_tz:
                    obj_id = int(str(dt.weekday()) + str(dt.hour) + str(int(math.ceil(dt.minute / 5)) * 5))
                    obj, created = SecurityLoginAttemptIncorrect.objects.get_or_create(pk=obj_id)
                    obj.time = dt

                    if obj.value:
                        data = json.loads(obj.value)

                        if entry.host in data.get("hosts", {}):
                            data["hosts"][entry.host] = data["hosts"][entry.host] + 1
                        else:
                            data["hosts"][entry.host] = 1
                        if entry.user in data.get("users", {}):
                            data["users"][entry.user] += 1
                        else:
                            data["users"][entry.user] = 1
                    else:
                        data = {
                            "hosts": {
                                entry.host: 1
                            },
                            "users": {
                                entry.user: 1
                            }
                        }
                    obj.value = json.dumps(data)
                    obj.save()
                    if not sec.run_last_login_attemp_incorrect or dt_last_tz > sec.run_last_login_attemp_incorrect:
                        sec.run_last_login_attemp_incorrect = dt_last_tz
                        sec.save()

    def set_login_attempt_correct(self):
        if not PATH_LOGIN_ATTEMPT_CORRECT or os.path.exists(PATH_LOGIN_ATTEMPT_CORRECT):
            return

        sec = SecurityData.get_solo()
        with open(PATH_LOGIN_ATTEMPT_CORRECT, 'rb') as fd:
            buf = fd.read()
            for entry in utmp.read(buf):
                dt = entry.time
                dt_last_tz = pytz.timezone(settings.TIME_ZONE).localize(dt, is_dst=None)
                if not sec.run_last_login_attemp_correct or sec.run_last_login_attemp_correct < dt_last_tz:
                    obj_id = int(str(dt.weekday()) + str(dt.hour) + str(int(math.ceil(dt.minute / 5)) * 5))
                    obj, created = SecurityLoginAttemptCorrect.objects.get_or_create(pk=obj_id)
                    obj.time = dt
                    if obj.value:
                        data = json.loads(obj.value)

                        if entry.host in data.get("hosts", {}):
                            data["hosts"][entry.host] = data["hosts"][entry.host] + 1
                        else:
                            data["hosts"][entry.host] = 1
                        if entry.user in data.get("users", {}):
                            data["users"][entry.user] += 1
                        else:
                            data["users"][entry.user] = 1
                    else:
                        data = {
                            "hosts": {
                                entry.host: 1
                            },
                            "users": {
                                entry.user: 1
                            }
                        }
                    obj.value = json.dumps(data)
                    obj.save()
                    if not sec.run_last_login_attemp_correct or dt_last_tz > sec.run_last_login_attemp_correct:
                        sec.run_last_login_attemp_correct = dt_last_tz
                        sec.save()
