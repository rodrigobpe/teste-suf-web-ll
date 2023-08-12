from rest_framework.response import Response
import rest_framework.status as status
from rest_framework.views import APIView
from .serializer import ArtistSerializer
from .models import Artist


# Create your views here.
class ArtistAPIView(APIView):
    serializer_class = ArtistSerializer

    def get(self, request):
        artists = Artist.objects.all()
        if artists:
            artist_serializer = self.serializer_class(artists, many=True)
            return Response(artist_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'artist not found'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        name = request.data.get('name', None)
        post_data = {
            'name': name
        }

        serializer = self.serializer_class(data=post_data)
        if serializer.is_valid(raise_exception=True):
            artist = serializer.save()

        if artist:
            return Response({'message': 'Artist created'}, status=status.HTTP_201_CREATED)

        return Response({'message': 'Something went Wrong'}, status=status.HTTP_400_BAD_REQUEST)

# class ArtistByIdAPIView(APIView):
#         serializer_class = ArtistSerializer
#         def get(self, request,*args,**kwargs):
#             artist_id = self.kwargs['id']
#             artist = Artist.objects.filter(id=artist_id)
            
#             if artist:
#                 artist_serializer = self.serializer_class(artist,many=True)
#                 return Response(artist_serializer.data,status=status.HTTP_200_OK)
#             else:
#                 return Response({'message':'Artist not found'},status=status.HTTP_404_NOT_FOUND)
