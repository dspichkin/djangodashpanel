from django.conf.urls import url

from djangodashpanel.security.views import (
    correctlogins_data, incorrectlogins_data)

urlpatterns = [
    url(r'^correctlogins/?$', correctlogins_data, name="correctlogins_data"),
    url(r'^incorrectlogins/?$', incorrectlogins_data, name="incorrectlogins_data"),
]
