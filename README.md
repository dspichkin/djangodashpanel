Django dashboard panel
======================

# In progress 
# under development do not use it yet

### Run frontend watcher

```
ng build -w -d /static/
```



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




