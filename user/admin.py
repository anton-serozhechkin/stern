from django.contrib import admin
from .models import *

class StudentAdmin(admin.ModelAdmin):
    list_filter = ('class_number__name', 'is_parent',)
    search_fields = ('middle_name', 'telephone_number', 'name_school', 'children_telephone_number', )
    

class TeachersAdmin(admin.ModelAdmin):
    search_fields = ('short_info', 'full_info', )
    

admin.site.register(Student, StudentAdmin)
admin.site.register(Teachers, TeachersAdmin)
