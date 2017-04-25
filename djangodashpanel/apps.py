from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class DJSecurityConfig(AppConfig):
    """
    Config for Zinnia application.
    """
    name = 'djangodashpanel'
    label = 'djangodashpanel'
    verbose_name = _('djangodashpanel')
