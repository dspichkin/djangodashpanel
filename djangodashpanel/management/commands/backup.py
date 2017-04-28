from django.core.management.base import BaseCommand

from djangodashpanel.backups.rotator import FileRotator


class Command(BaseCommand):
    help = 'Runs all jobs that are due.'

    def handle(self, *args, **options):
        FileRotator()
