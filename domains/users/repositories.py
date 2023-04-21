import typing

from apps.users import models
from domains.users import entities


def create_user(data: dict[str, typing.Any]) -> entities.User:
    user = models.User.objects.create(**data)
    return entities.User(id=user.id, username=user.username)
