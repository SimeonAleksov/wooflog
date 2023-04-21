from conf import settings_base


for setting in dir(settings_base):
    if setting == setting.upper():
        globals()[setting] = getattr(settings_base, setting)

DEBUG = True

THIRD_PARTY_APPS = [
    "django_extensions",
]

INSTALLED_APPS += THIRD_PARTY_APPS
