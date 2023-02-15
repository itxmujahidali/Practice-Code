from django.contrib import admin
from django.urls import path
from school_app.api import views
from school_app.api.views import random

urlpatterns = [
    path('random/', views.random, name='random'),

]