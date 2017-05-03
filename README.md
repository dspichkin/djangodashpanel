Django dashboard panel
======================

# In progress 
# under development do not use it yet

Version Django 1.10 

### Requirements

psutil
zipfile


### Install


```
pip install psutil
pip install djangorestframework

pip install git+https://github.com/dspichkin/djangodashpanel

...

INSTALLED_APPS = [
    ...
    'djangodashpanel',
    ...
]

...

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    ...
    url(r'^dash/', include('djangodashpanel.urls')),
    ...
]
```


If you want getting url statistics you need add the middleware to your MIDDLEWARE_CLASSES in your settings file.

```
MIDDLEWARE_CLASSES = (
  'djangodashpanel.middleware.urllogstat.URLLogStatMiddleware',
```

Turn on url statisctics in your settings file:
```
DJANGODASHPANEL_URLSTAT = True
```

add exclude urls:
```
DJANGODASHPANEL_URLSTAT_EXCLUDES = [
    "/admin/"
]
```

and/or add include urls:
```
DJANGODASHPANEL_URLSTAT_INCLUDES = [
    "/admin/"
]
```

add backup function add folder for backups in settings file
```
DJANGODASHPANEL_BACKUP_DIR = os.path.join(BASE_DIR, '..', 'backups')
```


```
python manage.py makemigrations djangodashpanel
python manage.py migrate

```


### Make cron task

File example run_cron.sh with virtual envirement

```
#!/bin/bash

ROOT=`pwd`

/Home dir/.virtualenvs/name_virtual_envirement/bin/python /Home dir/Project dir/manage.py cron  > /dev/null

```

### add task into cron
note: for runing script user has to have enough right usually it is root right

```
sudo crontab -e


*/5 * * * * /Home dir/Project dir/run_cron.sh
```

### Attempts to ssh

data take from btmp and wtmp
to access these files you need set files path in settings.py :
values by default
PATH_LOGIN_ATTEMPT_CORRECT = '/var/log/btmp'
PATH_LOGIN_ATTEMPT_INCORRECT = '/var/log/wtmp'




