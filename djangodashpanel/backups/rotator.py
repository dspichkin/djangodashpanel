import sys
import os
import json
import shutil
import time
import zipfile
from datetime import datetime, timedelta

from django.conf import settings
from django.utils import timezone
from django.core.management import call_command

from djangodashpanel.models import BackupData

DATE_FORMATS = {
    'daily': {
        'format': '%m%d%Y-T%H%M%S',
        'count': 7
    },
    'weekly': {
        'format': '%m%d%Y-W%W',
        'count': 4
    },
    'monthly': {
        'format': '%m%d%Y-M%m',
        'count': 12
    }
}

file_extantions = '.json'
zip_file_extantion = '.gz'
FILE_EXT = file_extantions + zip_file_extantion


class FileRotator:
    backup_files = []

    def __init__(self):

        if not hasattr(settings, 'DJANGODASHPANEL_BACKUP_DIR'):
            return False

        self.base_dest_dir = settings.DJANGODASHPANEL_BACKUP_DIR
        self.files = []
        self.setdata = BackupData.get_solo()

        if not self.setdata.backups_enable:
            return

        self.__check_base_path()
        self.__make_rotate_file()
        self.__make_backup()
        self.__make_media_backup()

        self.setdata.last_run_backup = timezone.now()
        self.setdata.result = True
        self.setdata.save()

        self.__verb("Backup finish")

    def __verb(self, msg):
        print msg

    def __check_base_path(self):
        # Check Base dir path
        for d in DATE_FORMATS:
            temp_dir = os.path.join(settings.DJANGODASHPANEL_BACKUP_DIR, d)
            if not os.path.exists(temp_dir):
                print "create dir: ", temp_dir
                os.mkdir(temp_dir)

    def __make_daily(self):
        _file_name = timezone.localtime(timezone.now()).strftime(DATE_FORMATS['daily']['format'])
        _file_name += FILE_EXT

        _file_path = os.path.join(self.base_dest_dir, 'daily')
        _backup_file = os.path.join(_file_path, _file_name)

        self.backup_files.append(_backup_file)
        self.__verb("we will make daily backup: {}\n".format(_backup_file))

        for dirpath, dirnames, filenames in os.walk(_file_path):
            # take into account only file with extension FILE_EXT
            filenames = [f for f in filenames if f.endswith(FILE_EXT)]

            if len(filenames) >= DATE_FORMATS['daily']['count']:
                self.__remove_oldest_file(dirpath, filenames)

    def __make_weekly(self):
        _file_name = timezone.localtime(timezone.now()).strftime(DATE_FORMATS['weekly']['format'])
        _file_name += FILE_EXT
        _file_path = os.path.join(self.base_dest_dir, 'weekly')
        _backup_file = os.path.join(_file_path, _file_name)

        # check current folder if files not exists copy new file
        for dirpath, dirnames, filenames in os.walk(_file_path):
            # take into account only file with extension FILE_EXT
            filenames = [f for f in filenames if f.endswith(FILE_EXT)]

            if (len(filenames) == 0):
                self.backup_files.append(_backup_file)
                self.__verb("we will make weekly backup: {}\n".format(_backup_file))
            else:
                # if files exist and time of the most new file older then one week copy new file
                # and delete the most older file

                # find the most new file
                _youngest_file = self.__find_youngest_file(dirpath, filenames)
                # compare yangest file with current date
                if datetime.now() - _youngest_file['file_modified'] > timedelta(weeks=1):
                    # make weekly backup
                    self.backup_files.append(_backup_file)
                    self.__verb("we will make weekly backup: {}\n".format(_backup_file))

                    # if files more the 4
                    # remove the oldest file
                    if (len(filenames) >= DATE_FORMATS['weekly']['count']):
                        self.__remove_oldest_file(dirpath, filenames)

    def __make_monthly(self):
        _file_name = timezone.localtime(timezone.now()).strftime(DATE_FORMATS['monthly']['format'])
        _file_name += FILE_EXT
        _file_path = os.path.join(self.base_dest_dir, 'monthly')
        _backup_file = os.path.join(_file_path, _file_name)

        # check current folder if files not exists copy new file
        for dirpath, dirnames, filenames in os.walk(_file_path):
            # take into account only file with extension FILE_EXT
            filenames = [f for f in filenames if f.endswith(FILE_EXT)]

            if (len(filenames) == 0):
                self.backup_files.append(_backup_file)
                self.__verb("we will make monthly backup: {}\n".format(_backup_file))
            else:
                # if files exist and time of the most new file older then one month copy new file
                # and delete the most older file

                # find the most new file
                _youngest_file = self.__find_youngest_file(dirpath, filenames)
                # compare yangest file with current date
                if datetime.now() - _youngest_file['file_modified'] > timedelta(weeks=4):
                    # make weekly backup
                    self.backup_files.append(_backup_file)
                    self.__verb("we will make monthly backup: {}\n".format(_backup_file))

                    # if files more the 4
                    # remove the oldest file
                    if (len(filenames) >= DATE_FORMATS['monthly']['count']):
                        self.__remove_oldest_file(dirpath, filenames)

    def __find_youngest_file(self, dirpath, files):
        _files = []
        _youngest_file = {}
        for f in files:
            curpath = os.path.join(dirpath, f)
            file_modified = datetime.fromtimestamp(os.path.getmtime(curpath))
            _files.append({
                'path': curpath,
                'file_modified': file_modified
            })
        _youngest_time = max([f['file_modified'] for f in _files])
        for f in _files:
            if _youngest_time == f['file_modified']:
                _youngest_file = f
        if _youngest_file:
            return _youngest_file
        else:
            return None

    def __remove_oldest_file(self, dirpath, files):
        # remove the oldest file
        _files = []
        _oldest_file = {}
        for f in files:
            curpath = os.path.join(dirpath, f)
            file_modified = datetime.fromtimestamp(os.path.getmtime(curpath))
            _files.append({
                'path': curpath,
                'file_modified': file_modified
            })

        _oldest_time = min([f['file_modified'] for f in _files])
        for f in _files:
            if _oldest_time == f['file_modified']:
                _oldest_file = f
        if _oldest_file:
            os.remove(_oldest_file['path'])
            self.__verb("remove oldest file {}".format(_oldest_file['path']))

    def __make_rotate_file(self):
        self.__make_daily()
        self.__make_weekly()
        self.__make_monthly()

    def __make_media_backup(self):
        self.__verb("Run media backup")
        MEDIA_DIR = os.path.join(settings.DJANGODASHPANEL_BACKUP_DIR, 'media')
        if not os.path.exists(MEDIA_DIR):
            os.mkdir(MEDIA_DIR)

        try:
            directories = json.loads(self.setdata.media_directories)
        except:
            directories = []

        dirs = []
        for obj in directories:
            directory = obj.get("path")
            if obj.get("checked", False) is True and os.path.exists(directory):
                dirs.append(directory)

        if len(dirs) > 0:
            filename = os.path.join(MEDIA_DIR, 'media.zip')
            zf = zipfile.ZipFile(filename, mode='w')

            count = 0
            for directory in dirs:
                count += 1
                for root, dirs, files in os.walk(directory):
                    for file in files:
                        filename = os.path.join(root, file)
                        if os.path.isfile(filename):
                            arcname = os.path.join("media_dir_" + str(count), os.path.relpath(root, directory), file)
                            first_dir = arcname.split("/")[0]
                            if first_dir == "cache":
                                continue
                            zf.write(os.path.join(root, file), arcname='%s' % arcname, compress_type=zipfile.ZIP_DEFLATED)
            zf.close()

    def __make_backup(self):

        self.__verb("Make dump data for database ...")

        TEMP_DIR = os.path.join(settings.DJANGODASHPANEL_BACKUP_DIR, 'temp')
        if not os.path.exists(TEMP_DIR):
            os.mkdir(TEMP_DIR)
        file_name = str(int(time.mktime(timezone.now().timetuple()))) + '.json'
        file_distination = os.path.join(TEMP_DIR, file_name)

        with open(file_distination, 'w') as f:
            call_command('dumpdata', exclude=['contenttypes'], indent=4, use_natural_keys=True, stdout=f)

        gzipcmd = "gzip -f %s" % (file_distination)
        os.system(gzipcmd)
        zip_file = file_distination + '.gz'

        if zip_file:
            for f in self.backup_files:
                shutil.copy2(zip_file, f)
        os.remove(zip_file)

        