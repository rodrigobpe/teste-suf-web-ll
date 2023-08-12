from django.urls import path, include
from album.views import AlbumAPIView


urlpatterns = [
    path('albums', AlbumAPIView.as_view()),
]
