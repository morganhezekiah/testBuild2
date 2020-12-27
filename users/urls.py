from django.urls import path
from .views import door_in, login, homeUser
from .apis import CreateUser, LoginUser
urlpatterns = [
    ##HTTP CONTROLLERS
    path('door_in', door_in , name="door in"),
    path('login', login, name="login"),
    path('home', homeUser, name="home"),
    
    
    ##API CONTROLLERS
    path('create', CreateUser.as_view()),
    path('loginUser', LoginUser.as_view())
]