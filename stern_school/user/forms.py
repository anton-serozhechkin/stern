from django.forms import ModelForm
from .models import *
from django import forms
from django.conf import settings
from django.contrib.auth.forms import UserCreationForm


class SignUpStudentForm(forms.ModelForm):
    telephone_number = forms.CharField(max_length=11, help_text='Телефонный номер')
    class_number = forms.ModelChoiceField(queryset=ClassNumber.objects.all(), help_text='Год обучения')
    name_school = forms.CharField(max_length=50, help_text='Название текущего учебного заведения')

    class Meta:
        model = Student
        fields = ['telephone_number', 'class_number',
                  'name_school']

class SignUpUserForm(UserCreationForm):
    
    email = forms.EmailField(label='email address', unique=True)
    middle_name = forms.CharField(label='Отчество', max_length=50)
    telephone_number = forms.CharField(label='Телефонный номер', max_length=12)
    class_number = forms.ForeignKey(ClassNumber, label='Номер класса')
    name_school = forms.CharField(label='Название школы', max_length=50)
    date_birthday = forms.DateField(label='День рождения')
    is_parent = forms.BooleanField(label='Родитель', default=False, blank=True, null=True)
    children_telephone_number = models.CharField(label='Телефонный номер', max_length=12, blank=True, null=True)
    question = forms.CharField(max_length=300, label='Вопросы')
    
    class Meta:
        model = settings.User
        fields = ['email', 'first_name',
                  'last_name', 'middle_name',
                  'telephone_number', 'date_birthday',
                  'class_number', 'name_school',
                  'password1', 'password2']