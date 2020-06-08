from django.db import models
from django.contrib.auth.models import AbstractUser

class ClassNumber(models.Model):
    name = models.CharField('Номер класса', max_length=8, default=' класс')

    def __str__(self):
        return self.name
        
    class Meta:
        verbose_name = 'Номер класса'
        verbose_name_plural = 'Номера классов'


class User(AbstractUser):
    username = None
    email = models.EmailField(verbose_name='email address', unique=True)
    middle_name = models.CharField('Отчество', max_length=50)
    telephone_number = models.CharField('Телефонный номер', max_length=12)
    class_number = models.ForeignKey(ClassNumber, on_delete=models.CASCADE, verbose_name='Номер класса')
    name_school = models.CharField('Название школы', max_length=50)
    date_birthday = models.DateField(verbose_name='День рождения')
    is_parent = models.BooleanField('Родитель', default=False, blank=True, null=True)
    children_telephone_number = models.CharField('Телефонный номер', max_length=12, blank=True, null=True)
    short_info = models.CharField('Краткая информация', max_length=100, blank=True, null=True)
    full_info = models.CharField('Полная информация', max_length=2000, blank=True, null=True)
    image = models.ImageField('Фото преподавателя', upload_to='pictures/teachers/', blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
