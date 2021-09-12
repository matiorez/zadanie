from django.test import TestCase

from .models import Offer, Category
from django.test import Client


class CategoryAPITest(TestCase):
    def test_get_categories(self):
        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, 200)

    def test_post_category(self):
        self.client.post('/api/categories/', {
            "name": "ne",
            "ordering": "1"
        })
        cat = Category.objects.get(name="ne", ordering="1")
        response = self.client.get('/api/categories/{}/'.format(cat.id))
        self.assertEqual(response.status_code, 200)
    def test_put_category(self):
        self.client.post('/api/categories/', {
            "name": "ne",
            "ordering": "1"
        })
        data = {"name": "xd","ordering": "2"}
        cat = Category.objects.get(name="ne", ordering="1")
        response = self.client.put('/api/categories/{}'.format(cat.id), data)
        self.assertEqual(response.status_code, 200)


class CategoryORMTest(TestCase):
    def setUp(self):
        Category.objects.create(name="testCat", ordering="1")

    def test_created_category(self):
        category = Category.objects.get(name="testCat")
        self.assertEqual(category.name, "testCat")
        self.assertEqual(category.ordering, "1")

    def test_update_category(self):
        category = Category.objects.get(name="testCat")
        category.name = "testCat2"
        category.save()
        category_updated = Category.objects.get(name="testCat2")
        self.assertEqual(category_updated.name, "testCat2")


class OfferORMTest(TestCase):
    def setUp(self):
        Category.objects.create(name="testCat", ordering="1")
        category = Category.objects.get(name="testCat")
        Offer.objects.create(title="testOffer", description="Testowy opis!", price=10.04, category=category)

    def test_created_offer(self):
        offer = Offer.objects.get(title="testOffer")
        self.assertEqual(offer.title, "testOffer")

    def test_update_category(self):
        offer = Offer.objects.get(title="testOffer")
        offer.title = "testOffer2"
        offer.save()
        category_updated = Offer.objects.get(title="testOffer2")
        self.assertEqual(category_updated.title, "testOffer2")



