# -*- coding: utf-8 -*-
#
import os

from django.conf import settings
from django.views.generic.base import TemplateView

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class HomePageView(TemplateView):
    template_name = 'djangodashpanel.html'


@api_view(['GET'])
def get_current_user_data(request):

    data = {
        "is_authenticated": False
    }
    if request.user.is_authenticated():

        data = {
            "is_authenticated": True,
            "user": {
                "username": request.user.username,
                "email": request.user.email
            },
            "apps": {
                "backup": False
            }
        }

        if hasattr(settings, 'DJANGODASHPANEL_BACKUP_DIR'):
            if not os.path.exists(settings.DJANGODASHPANEL_BACKUP_DIR):
                os.mkdir(settings.DJANGODASHPANEL_BACKUP_DIR)
            data["apps"]["backup"] = True

        if hasattr(settings, 'DJANGODASHPANEL_URLSTAT') and settings.DJANGODASHPANEL_URLSTAT:
            data["apps"]["urlstat"] = True

    return Response(data, status=status.HTTP_200_OK)

