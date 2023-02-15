from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.core.mail import send_mail
from celery.schedules import crontab

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'celery_core.settings')


# PROJECT NAME IS celery_core, be sure where celery_core word is use replace this word accroding to your project name
app = Celery('celery_core')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `celery_coreCELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

#
#
#
#

# Celery Beat Settings
app.conf.beat_schedule = {
    'send-mail-every-day-at-8': {
        'task': 'celery_core.celery.sender_func',
        # 'schedule': crontab(hour=0, minute=40, day_of_month=19, month_of_year = 6),
        'schedule': crontab(hour=0, minute=54),

    }
    
}

#
#
#
#

#TASK
@app.task(bind=True)
def sender_func(self):
    # send_mail(
    #     'Subject',
    #     'Message',
    #     'from@email.com',
    #     ['to@email.com'],
    #     fail_silently=False,
    #     )
    for i in range(999):
        print('------>',i)
    return "Email Has Been Sent!"