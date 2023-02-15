from rest_framework import routers
from api import views
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'students', views.StudentViewSet)
router.register(r'teachers', views.TeacherViewSet)

#localhost:8000/api/
urlpatterns = [
    path('', include(router.urls)),
]
