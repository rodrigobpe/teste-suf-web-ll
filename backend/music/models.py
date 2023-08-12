from django.db import models
from album.models import Album 
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
        return self.name