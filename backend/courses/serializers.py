from .models import Courses
from rest_framework import serializers


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['id', 'name', 'description',
                  'category', 'content', 'quiz', 'score']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
