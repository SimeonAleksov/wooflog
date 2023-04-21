from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class GiftCardsConfig(AppConfig):
    name = "apps.giftcards"
    verbose_name = _("GiftCards")

    def ready(self):
        try:
            import apps.giftcards.signals  # noqa F401
        except ImportError:
            pass
