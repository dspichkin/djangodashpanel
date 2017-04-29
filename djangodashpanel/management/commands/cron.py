# -*- coding: utf-8 -*-

import os
import psutil
import pytz
from ..readxtmppython import read_xtmp

from datetime import datetime, timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.conf import settings

from djangodashpanel.backups.rotator import FileRotator
from djangodashpanel.models.perf import (
    PerfData, PerfCpu, PerfMemory, PerfDisk, PerfNetwork, PerfProcess,
    PerfSystem)
from djangodashpanel.models.security import (
    SecurityData, SecurityLoginAttemptIncorrect, SecurityLoginAttemptCorrect)
from djangodashpanel.models.backups import BackupData


class Command(BaseCommand):
    help = 'Runs all jobs that are due.'

    def handle(self, *args, **options):

        perf = PerfData.get_solo()
        sec = SecurityData.get_solo()
        backup = BackupData.get_solo()
        now = timezone.localtime(timezone.now())

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
            perf.save()

        if not sec.run_last_login_attempt_correct or sec.run_last_login_attempt_correct + timedelta(minutes=60) < now:
            sec.run_last_login_attempt_correct = timezone.now()
            sec.save()
            self.set_login_attempt_correct()

        if not sec.run_last_login_attempt_incorrect or sec.run_last_login_attempt_incorrect + timedelta(minutes=60) < now:
            sec.run_last_login_attempt_incorrect = timezone.now()
            sec.save()
            self.set_login_attempt_incorrect()

        if backup.backups_enable and backup.run_time:

            run_time = timezone.localtime(backup.run_time)
            run_time = run_time.replace(year=now.year, month=now.month, day=now.day)
            last_run_backup_tz = timezone.localtime(backup.last_run_backup)

            if now >= run_time and now <= run_time + timedelta(minutes=30):
                if not backup.last_run_backup:
                    self.backup()
                elif last_run_backup_tz + timedelta(minutes=35) < now:
                    self.backup()

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
                    "pid": p,
                    "name": pr.name(),
                }
                try:
                    t["cpu"] = pr.cpu_percent(interval=1.0)
                except:
                    t["cpu"] = 0.0
                try:
                    t["status"] = pr.status()
                except:
                    t["status"] = None
                try:
                    t["create_time"] = p.create_time()
                except:
                    t["create_time"] = None
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
        print "login attempt incorrect"

        PATH_LOGIN_ATTEMPT_INCORRECT = None
        if hasattr(settings, "PATH_LOGIN_ATTEMPT_INCORRECT"):
            PATH_LOGIN_ATTEMPT_INCORRECT = settings.PATH_LOGIN_ATTEMPT_INCORRECT
        if not PATH_LOGIN_ATTEMPT_INCORRECT or not os.path.exists(PATH_LOGIN_ATTEMPT_INCORRECT):
            return

        last_record = SecurityLoginAttemptIncorrect.objects.all().order_by('time').last()
        last_record_tz = None
        if last_record:
            last_record_tz = timezone.locatime(last_record.time)
        data = read_xtmp(PATH_LOGIN_ATTEMPT_INCORRECT)
        for i in data:
            dt = datetime.fromtimestamp(float(i[9]))
            host = i[5]
            user = i[4]
            dt_last_tz = pytz.timezone(settings.TIME_ZONE).localize(dt, is_dst=None)
            if not last_record_tz or last_record_tz < dt_last_tz:
                SecurityLoginAttemptIncorrect.objects.put(dt_last_tz, host, user)

    def set_login_attempt_correct(self):

        print "login attempt correct"
        PATH_LOGIN_ATTEMPT_CORRECT = None

        if hasattr(settings, "PATH_LOGIN_ATTEMPT_CORRECT"):
            PATH_LOGIN_ATTEMPT_CORRECT = settings.PATH_LOGIN_ATTEMPT_CORRECT

        if not PATH_LOGIN_ATTEMPT_CORRECT or not os.path.exists(PATH_LOGIN_ATTEMPT_CORRECT):
            return

        last_record = SecurityLoginAttemptCorrect.objects.all().order_by('time').last()
        last_record_tz = None
        if last_record:
            last_record_tz = timezone.locatime(last_record.time)

        data = read_xtmp(PATH_LOGIN_ATTEMPT_CORRECT)
        for i in data:
            dt = datetime.fromtimestamp(float(i[9]))
            host = i[5]
            user = i[4]
            dt_last_tz = pytz.timezone(settings.TIME_ZONE).localize(dt, is_dst=None)
            if not last_record_tz or last_record_tz < dt_last_tz:
                SecurityLoginAttemptCorrect.objects.put(dt_last_tz, host, user)

    def backup(self):
        print "run backup"
        FileRotator()
