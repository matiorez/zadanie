from django.contrib import admin
from .models import Category, Offer
class OfferAdmin(admin.ModelAdmin):
    fields = ['title','description','price','category']
    list_display = ('id','title', 'description','price','category')
    list_display_links = ['id','title']
admin.site.register(Offer, OfferAdmin)

class CategoryAdmin(admin.ModelAdmin):
    fields = ['name','ordering']
    list_display = ['id','name','ordering']
    list_display_links = ['id','name']
admin.site.register(Category, CategoryAdmin)

