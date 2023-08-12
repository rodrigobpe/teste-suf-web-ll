from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.views import APIView
from .serializer import AlbumSerializer
from .models import Album


# Create your views here.
class AlbumAPIView(APIView):
    serializer_class = AlbumSerializer

    def get(self, request):
        albums = Album.objects.all()
        if albums:
            album_serializer = self.serializer_class(albums, many=True)
            return Response(album_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'album not found'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        album_name = request.data.get('album_name', None)
        release_date = request.data.get('release_date', None)
        genre = request.data.get('genre', None)
        is_favorite = request.data.get('is_favorite', None)
        id_artist = request.data.get('id_artist', None)
        post_data = {
            'album_name': album_name,
            'release_date': release_date,
            'genre': genre,
            'is_favorite': is_favorite,
            'id_artist': id_artist
        }

        serializer = self.serializer_class(data=post_data)
        if serializer.is_valid(raise_exception=True):
            artist = serializer.save()

        if artist:
            return Response({'message': 'Album created'}, status=status.HTTP_201_CREATED)

        return Response({'message': 'Something went Wrong'}, status=status.HTTP_400_BAD_REQUEST)
