from django.db import models
from tinymce.models import HTMLField
from django.urls import reverse
from django.conf import settings
from user.models import *
from django.utils import timezone

class CategoryEvent(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=30)
    slug = models.SlugField(verbose_name='Ссылка')

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
    
    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=50)
    slug = models.SlugField(verbose_name='Ссылка')
    main_image = models.ImageField(verbose_name='Заставка', upload_to='events/%Y/%m/%h/', blank=True, null=True)
    content = HTMLField(verbose_name='Контент', blank=True, null=True)
    short_description = HTMLField(verbose_name='Краткое описание', blank=True, null=True)
    data_created = models.DateTimeField(verbose_name='Дата создания', default=timezone.now)
    data_event = models.DateTimeField(verbose_name='Дата мероприятия')
    #classes = models.ManyToManyField(Classes, verbose_name='Принимающие участие классы')
    is_active = models.BooleanField(default=True, verbose_name='Активность мероприятия')
    price = models.FloatField(verbose_name='Цены', blank=True, null=True, default=0)
    teacher = models.ForeignKey(Teachers, on_delete=models.DO_NOTHING, verbose_name='Преподаватель')
    category = models.ForeignKey(CategoryEvent, on_delete=models.DO_NOTHING, verbose_name='Категория')

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
    
    def __str__(self):
        return '{}. Категория: {}. Дата создания: {}. Дата проведения: {}'.format(self.title, 
                    self.category, self.data_created, self.data_event)
    
    def get_absolute_url(self):
        return reverse('event_detail', kwargs={'category_slug': self.category.slug, 'slug': self.slug})


class News(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=50)
    slug = models.SlugField(verbose_name='Ссылка')
    main_image = models.ImageField(verbose_name='Заставка', upload_to='events/%Y/%m/%h/', blank=True, null=True )
    content = HTMLField(verbose_name='Контент', blank=True, null=True)
    short_description = HTMLField(verbose_name='Краткое описание', blank=True, null=True)
    data_created = models.DateTimeField(verbose_name='Дата создания', default=timezone.now)
    is_active = models.BooleanField(default=True, verbose_name='Активность мероприятия')
    teacher = models.ForeignKey(Teachers, on_delete=models.DO_NOTHING, verbose_name='Преподаватель')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
    
    def __str__(self):
        return '{}. Дата создания: {}.'.format(self.title, self.data_created)
    
    def get_absolute_url(self):
        return reverse('news_detail', kwargs={'slug': self.slug})


class UserInEvent(models.Model):
    user = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name='Пользователь')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name='Мероприятие')
    paid = models.BooleanField(default=False, verbose_name='Оплатил ли пользователь участие')
    active = models.BooleanField(default=True, verbose_name='Будет ли принимать участие пользователь')
    date_registration = models.DateTimeField(auto_now_add=True, verbose_name='Дата регистрации на мероприятие')

    class Meta:
        verbose_name = 'Пользователь, принимающий участие в мероприятии'
        verbose_name_plural = 'Пользователи, принимающие участие в мероприятиях'
    
    def __str__(self):
        return 'Пользователь {} {} в мероприятии {}. Оплата: {}.'.format(self.user.user.last_name, self.user.user.first_name, self.event, self.paid)

    