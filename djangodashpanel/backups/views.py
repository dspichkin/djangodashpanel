import time
import json
import os
import pytz
import zipfile

from datetime import datetime

from django.utils import timezone
from django.conf import settings
from django.core.management import call_command
from django.http import HttpResponse
from wsgiref.util import FileWrapper

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from rotator import DATE_FORMATS, FILE_EXT

from djangodashpanel.models import BackupData


def convert_bytes(num):
    """
    this function will convert bytes to MB.... GB... etc
    """
    for x in ['bytes', 'KB', 'MB', 'GB', 'TB']:
        if num < 1024.0:
            return "%3.1f %s" % (num, x)
        num /= 1024.0


def file_size(file_path):
    """
    this function will return the file size
    """
    if os.path.isfile(file_path):
        file_info = os.stat(file_path)
        return convert_bytes(file_info.st_size)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_backups_data(request):
    if not hasattr(settings, 'DJANGODASHPANEL_BACKUP_DIR'):
        return Response(False, status=status.HTTP_200_OK)

    base_file_path = settings.DJANGODASHPANEL_BACKUP_DIR
    backups = {}
    for d, value in DATE_FORMATS.items():
        _path = os.path.join(base_file_path, d)

        for dirpath, dirnames, filenames in os.walk(_path):
            files_in_dir = []
            # take into account only file with extension self.ext
            for f in filenames:
                if f.endswith(FILE_EXT):
                    files_in_dir.append({
                        "filename": f,
                        "size": file_size(os.path.join(dirpath, f)),
                        "created_at": os.path.getmtime(os.path.join(dirpath, f))
                    })
            backups[d] = files_in_dir

    setdata = BackupData.get_solo()

    data = {
        "backups": backups,
        "enable": setdata.backups_enable,
        "last_run_backup": setdata.last_run_backup,
        "result": setdata.result,
        "run_time": setdata.run_time,
    }
    try:
        media_directories = json.loads(setdata.media_directories)
    except:
        media_directories = []
    data["media_directories"] = media_directories

    return Response(data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def make_backup(request):
    if not hasattr(settings, 'DJANGODASHPANEL_BACKUP_DIR'):
        return Response(False, status=status.HTTP_200_OK)

    TEMP_DIR = os.path.join(settings.DJANGODASHPANEL_BACKUP_DIR, 'temp')
    if not os.path.exists(TEMP_DIR):
        os.mkdir(TEMP_DIR)

    file_name = str(int(time.mktime(timezone.now().timetuple()))) + '.json'
    file_distination = os.path.join(TEMP_DIR, file_name)
    with open(file_distination, 'w') as f:
        call_command('dumpdata', exclude=['contenttypes'], indent=4, use_natural_keys=True, stdout=f)

    response = HttpResponse(FileWrapper(file(file_distination, 'r')), content_type='application/json')
    response['Content-Disposition'] = 'attachment; filename=backup.json'
    os.remove(file_distination)
    return response


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def make_media_backup(request):
    if not hasattr(settings, 'DJANGODASHPANEL_BACKUP_DIR'):
        return Response(False, status=status.HTTP_200_OK)

    TEMP_DIR = os.path.join(settings.DJANGODASHPANEL_BACKUP_DIR, 'temp')
    if not os.path.exists(TEMP_DIR):
        os.mkdir(TEMP_DIR)

    setdata = BackupData.get_solo()

    try:
        directories = json.loads(setdata.media_directories)
    except:
        directories = []

    dirs = []
    for obj in directories:
        directory = obj.get("path")
        if obj.get("checked", False) is True and os.path.exists(directory):
            dirs.append(directory)

    backup_filename = None
    if len(dirs) > 0:
        backup_filename = os.path.join(TEMP_DIR, str(int(time.mktime(timezone.now().timetuple()))) + '.zip')
        zf = zipfile.ZipFile(backup_filename, mode='w')

        count = 0
        for directory in dirs:
            count += 1
            for root, dirs, files in os.walk(directory):
                for f in files:
                    filename = os.path.join(root, f)
                    if os.path.isfile(filename):
                        arcname = os.path.join("media_dir_" + str(count), os.path.relpath(root, directory), f)
                        first_dir = arcname.split("/")[0]
                        if first_dir == "cache":
                            continue
                        zf.write(os.path.join(root, f), arcname='%s' % arcname, compress_type=zipfile.ZIP_DEFLATED)
        zf.close()
    response = None
    if os.path.exists(backup_filename):
        response = HttpResponse(FileWrapper(file(backup_filename, 'rb')), content_type='application/zip')
        response['Content-Disposition'] = 'attachment; filename=media.zip'
        os.remove(backup_filename)
    else:
        response = HttpResponse()
    return response


@api_view(['POST'])
@permission_classes((IsAdminUser, ))
def stoprun_backup(request):
    setdata = BackupData.get_solo()
    setdata.backups_enable = not setdata.backups_enable
    setdata.save()
    return Response({
        "enable": setdata.backups_enable,
        "last_run_backup": setdata.last_run_backup
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsAdminUser, ))
def settime_backup(request):
    raw_time = request.data.get('time')
    if not raw_time:
        return Response({"error": u"time is required"}, status=status.HTTP_400_BAD_REQUEST)

    date_time = datetime.fromtimestamp(int(raw_time))
    date_time_tz = pytz.timezone(settings.TIME_ZONE).localize(date_time, is_dst=None)
    setdata = BackupData.get_solo()
    setdata.run_time = date_time_tz
    setdata.save()

    return Response({
        "run_time": date_time_tz,
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes((IsAdminUser, ))
def setdirs_backup(request):
    raw_dirs = request.data.get('dirs')

    setdata = BackupData.get_solo()
    # checking dirs
    try:
        media_directories = raw_dirs
        for d in media_directories:
            if os.path.exists(d.get("path")):
                d["checked"] = True
            else:
                d["checked"] = False

        setdata.media_directories = json.dumps(media_directories)
        setdata.save()
    except Exception as e:
        print e
        pass

    return Response({
        "media_directories": json.loads(setdata.media_directories),
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes((IsAdminUser, ))
def get_file_backup(request, filename):
    file_backup = None
    base_file_path = settings.DJANGODASHPANEL_BACKUP_DIR
    for d, value in DATE_FORMATS.items():
        _path = os.path.join(base_file_path, d)

        for dirpath, dirnames, filenames in os.walk(_path):
            for f in filenames:
                if f.endswith(FILE_EXT):
                    if f == filename:
                        file_backup = os.path.join(dirpath, f)
                        break

    if file_backup:
        response = HttpResponse(FileWrapper(file(file_backup, 'r')), content_type='application/json')
        response['Content-Disposition'] = 'attachment; filename=' + filename
    else:
        response = HttpResponse()
    return response


