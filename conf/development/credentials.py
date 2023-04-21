import os


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get("DATABASE_NAME", "bitgift"),
        "USER": os.environ.get("DATABASE_USER", "bitgift"),
        "PASSWORD": os.environ.get("DATABASE_PASSWORD", "bitgift"),
        "HOST": os.environ.get("DATABASE_HOST", "localhost"),
        "PORT": "",
    }
}
