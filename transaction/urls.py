from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from django.urls import path
from . import views

urlpatterns = [
    path("transaction/", views.TransactionAllView.as_view()),
    path("transaction/delete/", views.TransactionAllDeleteView.as_view()),
    path("transaction/file-scan/", views.TransactionUploadView.as_view()),
    path("transaction/store/<str:store>/", views.TransactionStoreView.as_view()),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
