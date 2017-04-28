from django.conf.urls import url

from djangodashpanel.processes.views import (
    processes_data, processes_number_data, processes_last_data)

urlpatterns = [
    url(r'^$', processes_data, name="processes_data"),
    url(r'^hours/?$', processes_number_data, name="processes_number_data"),
    url(r'^last/?$', processes_last_data, name="processes_last_data"),
]

