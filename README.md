Django dashboard panel
======================

# In progress 
# under development do not use it yet

Version Django 1.9 

### Requirements

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

and set temp folder (and exlude urls if it required) also in your settings file:
```
DJANGODASHPANEL_URLSTAT_DIR = os.path.join(BASE_DIR, '..', 'temp')
DJANGODASHPANEL_URLSTAT_EXCLUDES = [
    "/api/user/new_count_messages/"
]
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




