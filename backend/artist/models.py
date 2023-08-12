from django.db import models


# Create your models here.
class Artist(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def get_name(self) -> str:
        """Method that returns the name of artist

        Returns:
            str: the name of the artist
        """
        return self.name

    def __str__(self) -> str:
        return self.get_name()

    class Meta:
        db_table = 'artist'
