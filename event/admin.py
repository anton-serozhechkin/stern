from django.contrib import admin
from .models import *

class EventAdmin(admin.ModelAdmin):
    list_filter = ('is_active', 'category', 'price')
    search_fields = ('title', 'short_description', 'content', 'price', )# 'author')
    prepopulated_fields = {'slug': ('title', )}
    fieldsets = (
        (None, {
            'fields':(
                'title',
                'slug',
                'short_description',
                'content',
                'category',
                'teacher'
            )
        }),
        ('Дополнительные опции',
            {
            'classes': ('collapse', ),
            'fields': ('price', 'main_image', 'is_active', 'data_created', 'data_event')
            }
            )
    )


class NewsAdmin(admin.ModelAdmin):
    list_filter = ('is_active', )
    search_fields = ('title', 'short_description', 'content', )# 'author')
    prepopulated_fields = {'slug': ('title', )}
    fieldsets = (
        (None, {
            'fields':(
                'title',
                'slug',
                'short_description',
                'content',
                'teacher'
            )
        }),
        ('Дополнительные опции',
            {
            'classes': ('collapse', ),
            'fields': ('main_image', 'is_active', 'data_created', )
            }
            )
    )


class CategoryEventAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title', )}


admin.site.register(CategoryEvent, CategoryEventAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Event, EventAdmin)