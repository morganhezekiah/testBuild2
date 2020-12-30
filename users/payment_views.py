from django.conf import settings
from django.contrib.auth.decorators import login_required
import stripe
from django.shortcuts import redirect
from django.urls import reverse
from django.http import HttpResponse
stripe.api_key =settings.STRIPE_KEY


@login_required
def payment(request):
    paymentAmount = 10
    stripetoken = request.POST['stripeToken']
    customer = stripe.Customer.create(email="morganhezekiah1@gmail.com",description="My First Test Charge (created for API docs)")
    stripe.Charge.create(amount=2000,currency="usd",source=stripetoken,description="My First Test Charge (created for API docs)")
    
    return redirect(reverse('successful_payment', kwargs={'amount':paymentAmount}))
    
    
    
@login_required   
def successful_payment(request,amount):
    return HttpResponse("senr")
    