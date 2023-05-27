from django.urls import path
from .views import CoursesView, addFinishedCourseToUser, categoryList, certificate

urlpatterns = [
    path('courses', CoursesView.as_view(), name='courses'),
    path('addfinishedcourse', addFinishedCourseToUser.as_view(),
         name='addfinishedcourse'),
    path('categoryList', categoryList.as_view()),
    path('certificate', certificate.as_view(), name='certificate')
]
