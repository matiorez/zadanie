from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50,null=False,blank=False)
    ordering = models.CharField(max_length=50,null=False,blank=False)
    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        ordering = ('ordering',)
class Offer(models.Model):
    title = models.CharField(max_length=50,null=False,blank=False)
    description = models.TextField(max_length=500,null=False,blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return "{}".format(self.title)
