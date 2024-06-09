from django.contrib import admin
from .models import News, Category, Notification

# Register your models here.

admin.site.register(News)
admin.site.register(Category)
admin.site.register(Notification)
