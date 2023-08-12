from django.db import models


# Create your models here.
class Artist(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    
    class Meta:
        db_table = 'artist'

    def __str__(self) -> str:
        return self.name
