from django.conf.urls import url

from djangodashpanel.perf.views import (
    cpu_data, memory_data, disk_data, network_data, boottime_data,
    users_data, info_data, dash_info_data)

urlpatterns = [
    url(r'^info/?$', info_data, name="info_data"),
    url(r'^dash/?$', dash_info_data, name="dash_info_data"),
    url(r'^cpu/?$', cpu_data, name="perf_cpu_data"),
    url(r'^memory/?$', memory_data, name="perf_memory_data"),
    url(r'^disk/?$', disk_data, name="perf_disk_data"),
    url(r'^network/?$', network_data, name="perf_network_data"),
    url(r'^boottime/?$', boottime_data, name="boottime_data"),
    url(r'^users/?$', users_data, name="users_data"),
]
