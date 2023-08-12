from django.urls import path,include
from artist.views import ArtistAPIView,ArtistByIdAPIView

urlpatterns = [
    path('artists/<int:id>',ArtistByIdAPIView.as_view()),
    path('artists',ArtistAPIView.as_view()),
]
