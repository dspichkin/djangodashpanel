import time
import logging
import os
import re
from django.db import connection
from django.utils.encoding import smart_str
from django.utils import timezone
from django.conf import settings


class URLLogStatMiddleware(object):
    def __init__(self, get_response=None):
        self.get_response = get_response

    def __call__(self, request):
        _start = time.time()
        response = self.get_response(request)

        if not settings.DJANGODASHPANEL_URLSTAT_DIR:
            return response

        if hasattr(settings, 'DJANGODASHPANEL_URLSTAT_EXCLUDES'):
            for pattern in settings.DJANGODASHPANEL_URLSTAT_EXCLUDES:
                if re.match(pattern, request.path_info):
                    return response

        sqltime = 0.0
        queries = connection.queries
        for q in queries:
            sqltime += float(getattr(q, 'time', 0.0))

        d = {
            'start': int(time.mktime(timezone.now().timetuple())),
            'method': request.method,
            'time': time.time() - _start,
            'code': response.status_code,
            'url': smart_str(request.path_info),
            'sql': len(queries),
            'sqltime': sqltime,
        }
        msg = '%(start)d\t%(time).2f\t%(method)s\t%(url)s\t%(code)s\t%(sql)d\t%(sqltime).4f\n' % d
        filepath = settings.DJANGODASHPANEL_URLSTAT_DIR
        if os.path.exists(filepath):
            filename = 'urlstat.stat'
            filenamepath = os.path.join(filepath, filename)
            with open(filenamepath, 'a') as the_file:
                the_file.write(msg)
        return response
