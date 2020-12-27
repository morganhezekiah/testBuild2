
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):           
    fullName = models.CharField(max_length=500,null=False, blank=False)
    gender = models.CharField(max_length=500,null=False, blank=False)
    dateOfBirth = models.CharField(max_length=500,null=False, blank=False)
    fieldSet = models.CharField(max_length=500,null=False, blank=False)
    niche = models.CharField(max_length=500,null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    location = models.CharField(max_length=500,null=True, blank=True)
    
    
    def __str__(self):
        return self.fullName
    
    
    
    
    