from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import User

class Authenticator(BaseBackend):
    def getUser(self, acct_no):
        user = User.objects.get(acct_no = acct_no)
        if user :
            return user
        return None
    
    def authenticate(self,request, acct_no, password):
        user = self.getUser(acct_no)
        
        if user is not None:
            password_data = user.password
            if  not check_password(password,password_data):
                return None
            else:
                return user
        else:
            return None
        
authenticator = Authenticator()