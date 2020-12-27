from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import User

class Authenticator(BaseBackend):
    def getUser(self, email):
        user = User.objects.get(email = email)
        if user :
            return user
        return None
    
    def authenticate(self,request, email, password):
        user = self.getUser(email)
        
        if user is not None:
            password_data = user.password
            if  not check_password(password,password_data):
                return None
            else:
                return user
        else:
            return None
        
authenticator = Authenticator()