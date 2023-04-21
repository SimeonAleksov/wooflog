from django.db import models


class Currency(models.IntegerChoices):
    USD = 0
    EUR = 1
    ETH = 2
