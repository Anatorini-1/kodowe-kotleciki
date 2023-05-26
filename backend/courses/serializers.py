from .models import Courses, FinalisedCourses
from rest_framework import serializers


class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['id', 'name', 'description', 'category', 'content']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class FinalisedCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinalisedCourses
        fields = ['user_id', 'course_id']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
