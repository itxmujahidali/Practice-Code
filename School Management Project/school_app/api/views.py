from django.http import HttpResponse

# Create your views here.

def random(request):
    return HttpResponse('Random Function Worked!')