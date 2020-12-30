from django.urls import path
from .views import door_in, login, homeUser
from .apis import CreateUser, LoginUser
from .payment_views import payment,successful_payment
urlpatterns = [
    ##HTTP CONTROLLERS
    path('door_in', door_in , name="door in"),
    path('login', login, name="login"),
    path('home', homeUser, name="home"),
    
    ##PAYMENT API
    path('payment',payment, name="payment"),
    path("successful_payment/<int:amount>", successful_payment,name="successful_payment"),
    
    
    ##API CONTROLLERS
    path('create', CreateUser.as_view()),
    path('loginUser', LoginUser.as_view())
]