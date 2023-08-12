from django.db import models
from artist.models import Artist


# Create your models here.
class Album(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album_name = models.CharField(max_length=100)
    release_date = models.DateField()
    genre = models.CharField(max_length=50)
    is_favorite = models.BooleanField()

    class Meta:
        db_table = 'album'
