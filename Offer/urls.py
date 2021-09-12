
from django.urls import path, include
from rest_framework import routers
from .views import CategoryViewSet , OfferViewSet
router = routers.DefaultRouter()
router.register('category', CategoryViewSet)
router.register('offers', OfferViewSet)
urlpatterns = [
    path('', include(router.urls))
]