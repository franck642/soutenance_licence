from django.urls import path
from . import views
from django.conf.urls.static import static


urlpatterns = [
    path('index/', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('patient/', views.patient, name='patient'),
    path('error404/', views.error404, name='error404'),
    path('qrcode/', views.qrcode, name='qrcode'),
    path('appointment/', views.appointment, name='appointment'),
    path('detailpatient/', views.detailpatient, name='detailpatient'),
    # Autres URLS peuvent être ajoutées ici
]
