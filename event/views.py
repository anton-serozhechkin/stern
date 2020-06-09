from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import *

def news_events(request):
    news = News.objects.filter(is_active=True).order_by('-data_created')
    #if request.user.is_authenticated:
    events = Event.objects.filter(is_active=True).order_by('-data_created')
    #else:
    #    events = Event.objects.filter(classes=request.user.)
    return render(request, 'main/templates/news/index.html', locals())