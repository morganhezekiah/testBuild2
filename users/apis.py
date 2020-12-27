from django.contrib.auth.hashers import make_password
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.http import JsonResponse
from .utils import authenticator
from django.contrib import auth


class CreateUser(APIView):
    def post(self, request):
        data = request.data
        email = data.get("email")
        password = data.get("password")
        description = data.get("description")
        fieldset = data.get("fieldset")
        niche = data.get("niche")
        fullName = data.get("fullName")
        dateOfBirth = data.get("dateOfBirth")
        sex = data.get("sex")
        
        if email and password and description and fieldset and niche and fullName and dateOfBirth and sex:
            data = {
                "email":email,
                'password':make_password(password),
                'description':description,
                'fieldSet':fieldset,
                'niche':niche,
                'fullName':fullName,
                'dateOfBirth':dateOfBirth,
                'gender':sex,
                'username':fullName
            }
            
            serialize = UserSerializer(data= data)
            if serialize.is_valid():
                serialize.save()
                return JsonResponse({'message':"Valid","data":serialize.data,'status':True }, status = 200)
            else:
                return JsonResponse({"message":serialize.errors, 'status':False}, status = 400)
        else:
            return JsonResponse({"message":"Please enter all the fields ", 'status':False}, status = 400)
        
        
        
class LoginUser(APIView):
    def post(self, request):
        data = request.data
        email = data.get("email")
        password = data.get("password")
        
        if email and password:
            
            authen = authenticator.authenticate(request, email, password)

            if authen is not None:
                auth.login(request, authen)
                return JsonResponse({'message':"User authenticated", "status":True}, status= 200)
            else:
                return JsonResponse({'message':"User not authenticated", "status":False}, status= 400)
        else:
            return JsonResponse({'message':"please enter all the fields", "status":False}, status= 400)