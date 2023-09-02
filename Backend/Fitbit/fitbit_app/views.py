from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        if not username or not password or not email:
            return JsonResponse({'error': 'All fields are required'}, status=400)

        hashed_password = make_password(password)
        user = User(username=username, password=hashed_password, email=email)
        user.save()

        return JsonResponse({'message': 'Registration successful'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

        if not user.check_password(password):
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

        # You can generate and return a JWT token for authentication here

        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
