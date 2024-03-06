from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def patient(request):
    return render(request, 'patient.html')

def error404(request):
    return render(request, 'error404.html')

def qrcode(request):
    return render(request, 'qrcode.html')

def appointment(request):
    return render(request, 'appointment.html')

def detailpatient(request):
    return render(request, 'detailpatient.html')