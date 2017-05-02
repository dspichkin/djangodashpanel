# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url, include
from django.http import HttpResponseRedirect

from djangodashpanel.users.views import HomePageView
from djangodashpanel.users.views import get_current_user_data


def sredirect(request, url):
    return HttpResponseRedirect("/dash/#/%s" % url)


urlpatterns = [
    url(r'^$', HomePageView.as_view(), name='home'),
    url(r'^api/user/', get_current_user_data, name="get_current_user_data"),
    url(r'^api/security/', include('djangodashpanel.security.urls')),
    url(r'^api/perf/', include('djangodashpanel.perf.urls')),
    url(r'^api/processes/', include('djangodashpanel.processes.urls')),
    url(r'^api/backups/', include('djangodashpanel.backups.urls')),
    url(r'^api/urlstat/', include('djangodashpanel.urllogstat.urls')),

    url(r'^(?P<url>.*)$', sredirect),
]
