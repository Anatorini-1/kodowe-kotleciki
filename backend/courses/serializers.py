from .models import Courses, Certificate
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


class ShortCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ['id', 'name',
                  'category', 'score']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance


class CertificateSerializer(serializers.ModelSerializer):
    course = ShortCoursesSerializer()

    class Meta:
        model = Certificate
        fields = ['uuid', 'user_id', 'course', 'date']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
