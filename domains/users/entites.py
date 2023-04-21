import typing


User = typing.NamedTuple(
    "User",
    [
        ("id", int),
        ("username", str),
    ],
)
