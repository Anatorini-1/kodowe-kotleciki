from django.db import models


class Courses(models.Model):
    name = models.CharField(max_length=55)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=55)
    content = models.TextField(blank=True)
    quiz = models.TextField(blank=True)
    score = models.IntegerField(default=0)
