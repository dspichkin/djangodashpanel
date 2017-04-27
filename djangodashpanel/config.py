from django.contrib.admin import ModelAdmin
from django.conf import settings
from . import VERSION

def default_config():
    return {
        'VERSION': VERSION,

        # configurable
        'ADMIN_NAME': 'Django Dashboard Panel',

    }


def get_config(param=None):
    config_key = 'DJANGODASHPANEL_CONFIG'
    if hasattr(settings, config_key):
        config = getattr(settings, config_key, {})
    else:
        config = default_config()
    if param:
        value = config.get(param)
        if value is None:
            value = default_config().get(param)
        return value
    return config