from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from news.views import NewsViewSet, CategoryViewSet, NotificationViewSet
from django.conf import settings
from django.conf.urls.static import static
# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)