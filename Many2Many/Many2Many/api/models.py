import json
import numpy as np
from django.db import models

# Create your models here.

class Teacher (models.Model):
    t_name = models.CharField(max_length=30)
    t_roll = models.IntegerField()
    t_city = models.CharField(max_length=30)

    def __str__(self):
        return self.t_name

    @property
    def enrolled_student(self):
        data = Student.objects.filter(student_m2m__id=self.id).values
        # print(f'---------------->',data)
        return data

class Student (models.Model):
    student_m2m = models.ManyToManyField(Teacher)
    s_name = models.CharField(max_length=30)
    s_roll = models.IntegerField()
    s_city = models.CharField(max_length=30)

    def __str__(self):
        return self.s_name

    # @property
    # def teacher_alot(self):
    #     x = Teacher.objects.filter()
    #     print(f'----------------->', x)
    #     return x
