from django.db import models
from album.models import Album
from artist.models import Artist


# Create your models here.
class Music(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_album = models.ForeignKey(Album, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    duration = models.IntegerField()
    is_favorite = models.BooleanField()

    class Meta:
        db_table = 'music'

    def __str__(self) -> str:
        return f"{self.id_album.id_artist.get_name()} - {self.name}"


class Music_has_artist(models.Model):
    id_artist = models.On(Artist)

    class Meta:
        db_table = 'music_has_artist'
