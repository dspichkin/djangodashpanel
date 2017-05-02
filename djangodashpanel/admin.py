from django.contrib import admin
from django.contrib.admin import DateFieldListFilter

from models.perf import (
    PerfData, PerfCpu, PerfMemory, PerfDisk, PerfNetwork, PerfProcess,
    PerfSystem)

from models.security import (
    SecurityData, SecurityLoginAttemptIncorrect, SecurityLoginAttemptCorrect
)

from models.backups import BackupData
from models.urllogstat import UrlLogStat

admin.site.index_template = 'index_dash_admin.html'


class PerfDataAdmin(admin.ModelAdmin):
    list_display = ('run_last_time_5m', 'run_last_time_10m', 'run_last_time_30m',)


class PerfCpuAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class PerfMemoryAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'total', 'available', 'percent', 'used', 'free', 'swap_total', 'swap_percent')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class PerfDiskAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'total', 'used', 'free', 'percent')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class PerfNetworkAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'bytes_sent', 'bytes_recv', 'packets_sent', 'packets_recv', 'errin', 'errout', 'dropin', 'dropout')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class PerfProcessAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class PerfSystemAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class SecurityDataAdmin(admin.ModelAdmin):
    list_display = ('run_last_login_attempt_correct', 'run_last_login_attempt_incorrect')


class SecurityLoginAttemptIncorrectAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class SecurityLoginAttemptCorrectAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')
    list_filter = (
        ('time', DateFieldListFilter),
    )


class BackupDataAdmin(admin.ModelAdmin):
    list_display = ('backups_enable', 'run_time')


class UrlLogStatAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')
    list_filter = (
        ('time', DateFieldListFilter),
    )


admin.site.register(PerfData, PerfDataAdmin)
admin.site.register(PerfCpu, PerfCpuAdmin)
admin.site.register(PerfMemory, PerfMemoryAdmin)
admin.site.register(PerfDisk, PerfDiskAdmin)
admin.site.register(PerfNetwork, PerfNetworkAdmin)
admin.site.register(PerfProcess, PerfProcessAdmin)
admin.site.register(PerfSystem, PerfSystemAdmin)
admin.site.register(SecurityData, SecurityDataAdmin)
admin.site.register(SecurityLoginAttemptIncorrect, SecurityLoginAttemptIncorrectAdmin)
admin.site.register(SecurityLoginAttemptCorrect, SecurityLoginAttemptCorrectAdmin)
admin.site.register(BackupData, BackupDataAdmin)
admin.site.register(UrlLogStat, UrlLogStatAdmin)

