from conf.development import credentials
from conf.development import settings

for setting in dir(settings):
    if setting == setting.upper():
        globals()[setting] = getattr(settings, setting)

for setting in dir(credentials):
    if setting == setting.upper():
        globals()[setting] = getattr(credentials, setting)
