from rest_framework.views import APIView
from .serializers import CoursesSerializer, CertificateSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import Courses, Certificate
from registration.models import User
import jwt


class CoursesView(APIView):
    def post(self, request):
        print(request.data)
        token = request.data['jwt']
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthorized!')
        # check if user is is admin access has value 0 or 1
        user = User.objects.filter(id=payload['id']).first()
        if user.access != 0 and user.access != 1:
            raise AuthenticationFailed('Unauthorized!')
        serializer = CoursesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self, request):
        courses = Courses.objects.all()
        serializer = CoursesSerializer(courses, many=True)
        return Response(serializer.data)


class addFinishedCourseToUser(APIView):
    def post(self, request):
        print(request.data)
        token = request.data['jwt']
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthorized!')
        print(request.data)
        user = User.objects.filter(id=payload['id']).first()
        course = Courses.objects.filter(id=request.data['course_id']).first()
        certificat = Certificate(user_id=user.id, course_id=course.id)
        certificat.save()
        user.certificats.add(certificat)
        user.finalised_courses.add(course)
        user.save()
        return Response('Course added to user!')


class categoryList(APIView):
    def get(self, request):
        categories = Courses.objects.values_list(
            'category', flat=True).distinct()
        return Response(categories)


class certificate(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthorized!')
        user = User.objects.filter(id=payload['id']).first()
        certificats = Certificate.objects.all()
        serializer = CertificateSerializer(certificats, many=True)
        return Response(serializer.data)
