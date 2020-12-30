from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'users/index.html',  {'title':"Welcome|CollabCenter"})

def door_in(request):
    return render(request, 'users/door_in.html', {'title':"Door In|CollabCenter"})

def login(request):
    return render(request, 'users/login.html', {'title':"Login|CollabCenter"})


@login_required
def homeUser(request):
    return render(request, 'users/home.html', {'title':"Home|CollabCenter"})
