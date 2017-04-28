from django.conf.urls import url

from djangodashpanel.backups.views import (
    get_backups_data, make_backup, stoprun_backup, settime_backup,
    setdirs_backup, make_media_backup)

urlpatterns = [
    url(r'^$', get_backups_data, name="get_backups_data"),
    url(r'^make/?$', make_backup, name="make_backup"),
    url(r'^make/media/?$', make_media_backup, name="make_media_backup"),
    url(r'^stoprun/?$', stoprun_backup, name="stoprun_backup"),
    url(r'^time/?$', settime_backup, name="settime_backup"),
    url(r'^dirs/?$', setdirs_backup, name="setdirs_backup"),
]

