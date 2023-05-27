from .models import User
from courses.models import Certificate
from courses.serializers import CertificateSerializer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    certificats = CertificateSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password',
                  'f_name', 'l_name', 'age', 'score', 'access', 'finalised_courses', 'certificats']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['score']

    def update(self, instance, validated_data):
        instance.score = validated_data.get('score', instance.score)
        instance.save()
        return instance
