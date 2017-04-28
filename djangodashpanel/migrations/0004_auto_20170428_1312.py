# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-28 10:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangodashpanel', '0003_settingsdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='BackupData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('backups_enable', models.BooleanField(default=True, verbose_name='backups enable')),
                ('last_run_backup', models.DateTimeField(blank=True, null=True, verbose_name='last run backup')),
            ],
            options={
                'verbose_name': 'Settings data',
                'verbose_name_plural': 'Settings data',
            },
        ),
        migrations.DeleteModel(
            name='SettingsData',
        ),
    ]
