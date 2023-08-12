from django.urls import path, include
from music.views import MusicAPIView


urlpatterns = [
    path('musics', MusicAPIView.as_view()),
]
