from django.urls import path
from .views import RegisterView, LoginView, UserView, LogutView, ListUsersView, UpdateUserView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('user', UserView.as_view(), name='user'),
    path('logout', LogutView.as_view(), name='logout'),
    path('userList', ListUsersView.as_view(), name='userList'),
    path('updateUser', UpdateUserView.as_view(), name='updateUser'),
]
