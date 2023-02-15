from argparse import Action
from rest_framework.response import Response
from django.shortcuts import render
from .models import Student, Teacher
from rest_framework import viewsets, status
from rest_framework import permissions
from .serializers import StudentSerializer, TeacherSerializer
from rest_framework.decorators import action

# Create your views here.

class TeacherViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class StudentViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer