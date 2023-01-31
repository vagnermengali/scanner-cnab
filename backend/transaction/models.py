from django.db import models
import uuid

class Transaction(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    transaction = models.CharField(max_length=1)
    date = models.CharField(max_length=8)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    cpf = models.CharField(max_length=11)
    card = models.CharField(max_length=12)
    hour = models.CharField(max_length=6)
    owner = models.CharField(max_length=14)
    store = models.CharField(max_length=19)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

