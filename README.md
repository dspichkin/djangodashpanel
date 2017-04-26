Django dashboard panel
======================

# In progress 
# under development do not use it yet

### Run frontend watcher

```
ng build -w -d /static/
```


### Install


```

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