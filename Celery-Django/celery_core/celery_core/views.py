from django.http.response import HttpResponse
from .celery import sender_func

def celery_task(request):
    sender_func.delay()
    return HttpResponse("Email Has Been Sent")