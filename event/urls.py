from django.urls import path
from .views import *

urlpatterns = [
    path('', news_events, name='news_events')
]