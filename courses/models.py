from django.db import models
from tinymce.models import HTMLField
from django.urls import reverse
from django.conf import settings
from user.models import *
from django.utils import timezone

class FrequentQuestion(models.Model):
    ask = models.CharField(verbose_name='Вопрос', primary_key=True, max_length=100)
    answer = models.CharField(verbose_name='Ответ', max_length=400)
    data_created = models.DateTimeField(verbose_name='Дата создания', default=timezone.now)
    is_active = models.BooleanField(default=True, verbose_name='Активность вопроса')

    def __str__(self):
        return self.ask

    def get_absolute_url(self):
        return reverse('frequent_question', kwargs={'id': self.id})
        
    class Meta:
        verbose_name = 'Часто задаваемый вопрос'
        verbose_name_plural = 'Часто задаваемые вопросы'


class Test(models.Model):
    title = models.CharField(verbose_name='Название', primary_key=True, max_length=50)
    teachers = models.ForeignKey(Teachers, on_delete=models.DO_NOTHING, verbose_name='Преподаватель')
    data_created = models.DateTimeField(verbose_name='Дата создания', default=timezone.now)
    is_active = models.BooleanField(default=True, verbose_name='Активность вопроса')
    #classes = models.ManyToManyField(Classes, verbose_name='Принимающие участие классы')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('frequent_question', kwargs={'id': self.id})
        
    class Meta:
        verbose_name = 'Тест'
        verbose_name_plural = 'Тесты'

class Question(models.Model):
    test = models.ManyToManyField(Test, verbose_name='Тест')
    question = models.CharField('Вопрос', max_length=1000)
    image = models.ImageField('Фото', upload_to='pictures/', blank=True, null=True)

    def __str__(self):
        return self.question

    def get_absolute_url(self):
        return reverse('answer', kwargs={'id': self.id})
        
    class Meta:
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name='Вопрос')
    text = models.CharField('Ответ', max_length=1000)
    balls = models.IntegerField('Баллов за ответ', default=0)

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Ответ'
        verbose_name_plural = 'Ответы'
        
class UserAnswer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name='Вопрос')
    answer = models.CharField(verbose_name='Ответ', max_length=1000)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name='Школьник')

    class Meta:
        verbose_name = 'Ответ пользователя'
        verbose_name_plural = 'Ответы пользователей'


class Contact(models.Model):
    title = models.CharField(verbose_name='Название', max_length=50)
    link = models.CharField(verbose_name='Ссылка', max_length=100)

    def __str__(self):
        return 'Ссылка на социальную сеть {}'.format(self.title)

    class Meta:
        verbose_name = 'Ответ пользователя'
        verbose_name_plural = 'Ответы пользователей'