from django.shortcuts import render

def index1(request):
    return render(request, 'index1.html')

def userlist(request):
    return render(request, 'userlist.html')

def patientlist(request):
    return render(request, 'patientlist.html')