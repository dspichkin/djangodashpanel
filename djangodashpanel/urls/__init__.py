# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url, include
from django.http import HttpResponseRedirect

from djangodashpanel.views import HomePageView


def sredirect(request, url):
    return HttpResponseRedirect("/%s" % url)


urlpatterns = [
    url(r'^$', HomePageView.as_view(), name='home'),
    url(r'^api/security/', include('djangodashpanel.urls.security')),
    url(r'^api/perf/', include('djangodashpanel.urls.perf')),

    url(r'^(?P<url>.*)$', sredirect),
]
