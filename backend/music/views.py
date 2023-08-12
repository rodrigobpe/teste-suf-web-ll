from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.views import APIView
from .serializer import MusicSerializer
from .models import Music


# Create your views here.
class MusicAPIView(APIView):
    serializer_class = MusicSerializer

    def get(self, request):
        musics = Music.objects.all()
        if musics:
            music_serializer = self.serializer_class(musics, many=True)
            return Response(music_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'music not found'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        name = request.data.get('name', None)
        duration = request.data.get('duration', None)
        is_favorite = request.data.get('is_favorite', None)
        id_album = request.data.get('id_album', None)
        id_artist = request.data.get('id_artist', None)
        post_data = {
            'name': name,
            'duration': duration,
            'is_favorite': is_favorite,
            'id_album': id_album,
            'id_artist': id_artist
        }

        serializer = self.serializer_class(data=post_data)
        if serializer.is_valid(raise_exception=True):
            artist = serializer.save()

        if artist:
            return Response({'message': 'Music created'}, status=status.HTTP_201_CREATED)

        return Response({'message': 'Something went Wrong'}, status=status.HTTP_400_BAD_REQUEST)
