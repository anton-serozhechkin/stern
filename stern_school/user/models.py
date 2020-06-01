from django.db import models
from django.contrib.auth.models import User

class StudentParent(models.Model):
    #user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Пользователь')
    telephone_number = models.CharField('Телефонный номер', max_length=12)
    #class_number = models.ForeignKey(ClassNumber, on_delete=models.CASCADE, verbose_name='Номер класса')
    name_school = models.CharField('Название школы', max_length=50)

    #def __str__(self):
    #    return self.user.username
        
    class Meta:
        verbose_name = 'Школьник или Родитель'
        verbose_name_plural = 'Школьники или Родители'
