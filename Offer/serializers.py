from rest_framework import serializers, status
from django.contrib.auth.models import User, Group
from rest_framework.response import Response

from .models import Category, Offer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'ordering']


class OfferSerializer(serializers.ModelSerializer):
    #category = CategorySerializer(many=False)

    class Meta:
        model = Offer
        fields = ['id', 'title', 'description', 'price', 'category']




