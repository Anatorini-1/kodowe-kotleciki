from django.db import models
from registration.models import User


class Courses(models.Model):
    name = models.CharField(max_length=55)
    description = models.TextField()
    category = models.CharField(max_length=55)
    content = models.TextField()
    score = models.IntegerField(default=0)


class FinalisedCourses(models.Model):
    user_id = models.ForeignKey(User)
    course_id = models.
