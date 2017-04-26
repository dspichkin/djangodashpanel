from django.contrib import admin

from models.perf import (
    PerfData, PerfCpu, PerfMemory, PerfDisk, PerfNetwork, PerfProcess,
    PerfSystem)

from models.security import (
    SecurityData, SecurityLoginAttemptIncorrect, SecurityLoginAttemptCorrect
)

#admin.site.index_template = 'index.html'


class PerfDataAdmin(admin.ModelAdmin):
    list_display = ('run_last_time_5m', 'run_last_time_10m', 'run_last_time_30m',)


class PerfCpuAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')


class PerfMemoryAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'total', 'available', 'percent', 'used', 'free', 'swap_total', 'swap_percent')


class PerfDiskAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'total', 'used', 'free', 'percent')


class PerfNetworkAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'bytes_sent', 'bytes_recv', 'packets_sent', 'packets_recv', 'errin', 'errout', 'dropin', 'dropout')


class PerfProcessAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time')


class PerfSystemAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time')


class SecurityDataAdmin(admin.ModelAdmin):
    list_display = ('run_last_login_attemp_correct', 'run_last_login_attemp_incorrect')


class SecurityLoginAttemptIncorrectAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')


class SecurityLoginAttemptCorrectAdmin(admin.ModelAdmin):
    list_display = ('pk', 'time', 'value')


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



