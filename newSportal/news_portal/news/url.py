from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, CategoryViewSet, NotificationViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]
