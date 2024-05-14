from django.urls import path
from . import views
from django.conf.urls.static import static


urlpatterns = [
     path('index1/', views.index1, name='index1'),
     path('userlist/', views.userlist, name='userlist'),
     path('patientlist/', views.patientlist, name='patientlist'),
    
]