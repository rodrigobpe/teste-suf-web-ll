from django.contrib import admin
from .models import Music, Music_has_artist
# Register your models here.

admin.site.register(Music)
admin.site.register(Music_has_artist)
