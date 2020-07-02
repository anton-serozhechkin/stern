from django.contrib import admin
from .models import *

class ReviewAdmin(admin.ModelAdmin):
    search_fields = ('review', 'user', )


admin.site.register(VideoReview)
admin.site.register(Review, ReviewAdmin)
