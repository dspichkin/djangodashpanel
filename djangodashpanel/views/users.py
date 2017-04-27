import time
import json
import pytz

from datetime import datetime, timedelta
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from ..models.perf import (
    PerfProcess
)


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
            }
        }
    return Response(data, status=status.HTTP_200_OK)

