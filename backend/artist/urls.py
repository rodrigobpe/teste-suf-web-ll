from django.urls import path,include
from artist.views import ArtistAPIView

urlpatterns = [
    path('artists',ArtistAPIView.as_view())
]
