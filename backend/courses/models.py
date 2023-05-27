from django.db import models
import uuid


class Courses(models.Model):
    name = models.CharField(max_length=55)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=55)
    content = models.JSONField(blank=True, null=True)
    quiz = models.JSONField(blank=True, null=True)
    score = models.IntegerField(default=0)


class Certificate(models.Model):
    uuid = models.UUIDField(primary_key=True, editable=False,
                            unique=True, default=uuid.uuid4)
    user_id = models.IntegerField()
    course = models.ForeignKey(Courses, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField(auto_now_add=True)
