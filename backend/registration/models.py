from django.db import models
from django.contrib.auth.models import AbstractUser
from courses.models import Courses


class User(AbstractUser):
    name = models.CharField(max_length=55)
    email = models.EmailField(max_length=55, unique=True)
    password = models.CharField(max_length=255)
    username = None

    f_name = models.CharField(max_length=55)
    l_name = models.CharField(max_length=55)
    age = models.IntegerField()
    score = models.IntegerField(default=0)
    access = models.IntegerField(default=2)

    finalised_courses = models.ManyToManyField(Courses, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
