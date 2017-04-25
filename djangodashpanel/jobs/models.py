from django.contrib.auth.models import User
from django.conf import settings
from django.db import models
from django.utils.translation import ungettext, ugettext, ugettext_lazy as _


class Job(models.Model):
    """
    A recurring ``django-admin`` command to be run.
    """

    name = models.CharField(_("name"), max_length=200)

    class Meta:
        #ordering = ('disabled', 'next_run',)
        pass