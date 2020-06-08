from django.shortcuts import render

def not_found_view(request, exception):
    return render(request, 'errors/404.html')
    
def error_view(request):
    return render(request, 'errors/500.html')
    
def permission_denied_view(request, exception):
    return render(request, 'errors/403.html')
    
def bad_request_view(request, exception):
    return render(request, 'errors/400.html')