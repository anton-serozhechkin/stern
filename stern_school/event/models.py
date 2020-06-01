from django.db import models
from tinymce.models import HTMLField
from django.urls import reverse


class Category_Event(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=30)
    slug = models.SlugField(verbose_name='Ссылка')

class Event(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=50)
    slug = models.SlugField(verbose_name='Ссылка')
    main_image = models.ImageField(verbose_name='Заставка', upload_to='events/%Y/%m/%h/')
    content = HTMLField(verbose_name='Контент', blank=True, null=True)
    short_description = HTMLField(verbose_name='Краткое описание', blank=True, null=True)
    data_created = models.DateTimeField(verbose_name='Дата создания', auto_now_add=True)
    data_modifed = models.DateTimeField(verbose_name='Дата изменения', auto_now=True)
    data_event = models.DateTimeField(verbose_name='Дата мероприятия')
    #classes = models.ManyToManyField(Classes, verbose_name='Принимающие участие классы')
    is_active = models.BooleanField(default=True, verbose_name='Активность мероприятия')
    price = models.FloatField(verbose_name='Цены', blank=True, null=True, default=0)
    #teachers = models.ManyToManyField(Teachers, verbose_name='Преподаватели')
    category = models.ForeignKey(Category_Event, on_delete=models.DO_NOTHING, verbose_name='Категория')

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
    main_image = models.ImageField(verbose_name='Заставка', upload_to='events/%Y/%m/%h/')
    content = HTMLField(verbose_name='Контент', blank=True, null=True)
    short_description = HTMLField(verbose_name='Краткое описание', blank=True, null=True)
    data_created = models.DateTimeField(verbose_name='Дата создания', auto_now_add=True)
    data_modifed = models.DateTimeField(verbose_name='Дата изменения', auto_now=True)
    is_active = models.BooleanField(default=True, verbose_name='Активность мероприятия')
    #teachers = models.ManyToManyField(Teachers, verbose_name='Преподаватели')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
    
    def __str__(self):
        return '{}. Категория: {}. Дата создания: {}.'.format(self.title, self.data_created)
    
    def get_absolute_url(self):
        return reverse('news_detail', kwargs={'slug': self.slug})

