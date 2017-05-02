import time
import logging
import os
import re
from threading import Thread

from django.db import connection
from django.utils.encoding import smart_str
from django.utils import timezone
from django.conf import settings

from djangodashpanel.models.urllogstat import UrlLogStat


def threaded_function(value):
    UrlLogStat.objects.put(timezone.now(), value)


class URLLogStatMiddleware(object):
    def __init__(self, get_response=None):
        self.get_response = get_response

    def process_request(self, request):
        """Let's handle old-style request processing here, as usual."""
        # Do something with request
        # Probably return None
        # Or return an HttpResponse in some cases
        self._start = time.time()

    def process_response(self, request, response):
        """Let's handle old-style response processing here, as usual."""
        if hasattr(self, 'get_response'):
            response = self.get_response(request)

        if not hasattr(settings, 'DJANGODASHPANEL_URLSTAT') or not settings.DJANGODASHPANEL_URLSTAT:
            return response

        if hasattr(settings, 'DJANGODASHPANEL_URLSTAT_EXCLUDES'):
            for pattern in settings.DJANGODASHPANEL_URLSTAT_EXCLUDES:
                if re.match(pattern, request.path_info):
                    return response

        if hasattr(settings, 'DJANGODASHPANEL_URLSTAT_INCLUDES'):
            for pattern in settings.DJANGODASHPANEL_URLSTAT_INCLUDES:
                if not re.match(pattern, request.path_info):
                    return response

        sqltime = 0.0
        queries = connection.queries
        for q in queries:
            sqltime += float(getattr(q, 'time', 0.0))

        d = {
            'request_start': int(time.mktime(timezone.now().timetuple())),
            'request_method': request.method,
            'request_duration': time.time() - self._start,
            'request_code': response.status_code,
            'request_url': smart_str(request.path_info),
            'request_sql_count': len(queries),
            'request_sql_time': sqltime,
        }
        #msg = '%(start)d\t%(time).2f\t%(method)s\t%(url)s\t%(code)s\t%(sql)d\t%(sqltime).4f\n' % d
        #filepath = settings.DJANGODASHPANEL_URLSTAT_DIR
        print "!!!!!"
        thread = Thread(target=threaded_function, args=(d, ))
        thread.start()

        #if os.path.exists(filepath):
        #    filename = 'urlstat.stat'
        #    filenamepath = os.path.join(filepath, filename)
        #    with open(filenamepath, 'a') as the_file:
        #        the_file.write(msg)
        return response

    def __call__(self, request):
        """Handle new-style middleware here."""
        response = self.process_request(request)
        if response is None:
            self._start = time.time()
            # If process_request returned None, we must call the next middleware or
            # the view. Note that here, we are sure that self.get_response is not
            # None because this method is executed only in new-style middlewares.
            response = self.get_response(request)
        response = self.process_response(request, response)
        return response
