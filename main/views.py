from django.shortcuts import render
from event.models import *

def main(request):
    event = Event.objects.filter(is_active=True).latest('data_created')
    last_events = Event.objects.filter(is_active=True).order_by('-data_created')[0:3]
    last_news = News.objects.filter(is_active=True).order_by('-data_created')[0:3]
    return render(request, 'index/index.html', locals())