from django.conf.urls import url

from djangodashpanel.perf.views import (
    cpu_data, memory_data)

urlpatterns = [
    url(r'^cpu/?$', cpu_data, name="perf_cpu_data"),
    url(r'^memory/?$', memory_data, name="perf_memory_data"),
]
