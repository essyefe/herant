
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path(r'', include('herant_app.urls')),
    path(r'admin/', admin.site.urls),
]
