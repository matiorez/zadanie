from rest_framework import viewsets, status, permissions
from django_filters import rest_framework as filters
from .models import Category, Offer
from .serializers import CategorySerializer, OfferSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (permissions.AllowAny,)


class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
    permission_classes = (permissions.AllowAny,)
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('category',)