from django.shortcuts import render

""""def signin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('payment')
    else:
        return render(request, 'signin.html')
    return render(request, 'signin.html')
"""

def not_found_view(request, exception):
    return render(request, 'main/templates/errors/404.html')
    
def error_view(request):
    return render(request, 'main/templates/errors/500.html')
    
def permission_denied_view(request, exception):
    return render(request, 'main/templates/errors/403.html')
    
def bad_request_view(request, exception):
    return render(request, 'main/templates/errors/400.html')