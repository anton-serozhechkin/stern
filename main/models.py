from django.db import models
from django.urls import reverse
from django.conf import settings
from user.models import *
from django.utils import timezone
from embed_video.fields import EmbedVideoField

class Review(models.Model):
    user = models.CharField('Кто оставил отзыв', max_length=50)
    review = models.CharField('Текст отзыва', max_length=200)
    data_created = models.DateTimeField('Дата создания отзыва', default=timezone.now)
    
    def __str__(self):
        return "Отзыв от {}, оставленный {}".format(self.user, self.data_created)

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

class VideoReview(models.Model):
    url = models.CharField('Ссылка', max_length=200, help_text='URL-страницы')
    video = EmbedVideoField('Загрузить видео', help_text='Заходим на страницу видео-Поделиться-Встроить-Копируем link, содержащий строку embeded')
    data_created = models.DateTimeField('Дата создания отзыва', default=timezone.now)
    
    def __str__(self):
        return "Видеоотзыв, оставленный {}".format(self.data_created)

    class Meta:
        verbose_name = 'Видеоотзыв'
        verbose_name_plural = 'Видеоотзывы'