
from .models import Student, Teacher
from rest_framework import serializers


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['enrolled_student','id','t_name', 't_roll', 't_city']

class TeacherSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id','t_name', 't_roll', 't_city']



class StudentSerializer(serializers.ModelSerializer):
    student_m2m = TeacherSerializer2(many=True)

    class Meta:
        model = Student
        fields = ['student_m2m','s_name', 's_roll', 's_city',]

