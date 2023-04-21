from django.contrib import admin

from apps.giftcards.models import GiftCardRequest, GiftCard, ClaimedGiftCard


@admin.register(GiftCardRequest)
class GiftCardRequestAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "external_id",
        "user",
        "to_email",
        "description",
        "currency",
        "amount",
        "confirmed",
        "confirmed_at",
        "created",
    )
    list_filter = ("user", "confirmed", "confirmed_at", "created")


@admin.register(GiftCard)
class GiftCardAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "external_id",
        "gift_card_request",
        "is_claimed",
        "claimed",
        "created",
    )
    list_filter = ("gift_card_request", "is_claimed", "claimed", "created")


@admin.register(ClaimedGiftCard)
class ClaimedGiftCardAdmin(admin.ModelAdmin):
    list_display = ("id", "external_id", "gift_card", "address", "created")
    list_filter = ("gift_card", "created")
