from django.urls import path
from .views import CoursesView, addFinishedCourseToUser

urlpatterns = [
    path('courses', CoursesView.as_view(), name='courses'),
    path('addfinishedcourse', addFinishedCourseToUser.as_view(),
         name='addfinishedcourse')
]
