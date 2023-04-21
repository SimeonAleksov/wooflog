import uuid

from django.db import models
from django.contrib.auth import get_user_model

from apps.giftcards import enums


class GiftCardRequest(models.Model):
    external_id = models.UUIDField(default=uuid.uuid4, editable=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)
    to_email = models.EmailField()
    description = models.TextField()

    currency = models.PositiveSmallIntegerField(choices=enums.Currency.choices)
    amount = models.DecimalField(max_digits=22, decimal_places=8)

    confirmed = models.BooleanField(default=False)
    confirmed_at = models.DateTimeField(null=True)

    created = models.DateTimeField(auto_now_add=True)


class GiftCard(models.Model):
    external_id = models.UUIDField(default=uuid.uuid4, editable=False)
    gift_card_request = models.ForeignKey(GiftCardRequest, on_delete=models.PROTECT)

    is_claimed = models.BooleanField(default=False)
    claimed = models.DateTimeField(null=True)

    created = models.DateTimeField(auto_now_add=True)


class ClaimedGiftCard(models.Model):
    external_id = models.UUIDField(default=uuid.uuid4, editable=False)
    gift_card = models.ForeignKey(GiftCard, on_delete=models.PROTECT)

    address = models.CharField(max_length=42)

    created = models.DateTimeField(auto_now_add=True)
