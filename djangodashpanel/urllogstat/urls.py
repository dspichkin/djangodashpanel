from django.conf.urls import url

from djangodashpanel.urllogstat.views import (
    urlstat_data)

urlpatterns = [
    url(r'^$', urlstat_data, name="urlstat_data"),
    #url(r'^hours/?$', processes_number_data, name="processes_number_data"),
    #url(r'^last/?$', processes_last_data, name="processes_last_data"),
]

