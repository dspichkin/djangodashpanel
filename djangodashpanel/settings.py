from django.conf import settings
import os

# Number of seconds that a lock file must be "stale" for a Job to be considered
# "dead".  Default is 1 minute (60 seconds)
# LOCK_TIMEOUT = getattr(settings, 'DJSECURITY_LOCK_TIMEOUT', 60)

settings.INSTALLED_APPS.append(
    'rest_framework'
    )

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH_TEMPLATE = os.path.join(BASE_DIR, 'djangodashpanel', 'frontend', 'dist')

settings.TEMPLATES.append({
    'NAME': 'DJSecurity',
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [PATH_TEMPLATE],
    'APP_DIRS': True,
    'OPTIONS': {
        'context_processors': [
            'django.template.context_processors.debug',
            'django.template.context_processors.request',
            'django.contrib.auth.context_processors.auth',
            'django.contrib.messages.context_processors.messages',
        ],
    }
})

PATH_STATIC = os.path.join(BASE_DIR, 'djangodashpanel', 'frontend', 'dist')
settings.STATICFILES_DIRS.append(PATH_STATIC)


PATH_LOGIN_ATTEMPT_INCORRECT = os.path.join(BASE_DIR, '..', 'btmp')
PATH_LOGIN_ATTEMPT_CORRECT = os.path.join(BASE_DIR, '..', 'wtmp')

#setattr(settings, 'PATH_LOGIN_ATTEMPT_INCORRECT', PATH_LOGIN_ATTEMPT_INCORRECT)
#setattr(settings, 'PATH_LOGIN_ATTEMPT_CORRECT', PATH_LOGIN_ATTEMPT_CORRECT)
