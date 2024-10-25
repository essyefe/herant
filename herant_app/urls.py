from django.contrib import admin

from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AntiHeroViewSet

router = DefaultRouter()
router.register(r'antiheroes', AntiHeroViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('search-antihero/', views.selectAntiHero, name='search-antihero'),
    path('list-antiheroes/', views.listAntiHeroes, name='list-antiheroes'),
    path('antihero/<str:selectname>/', views.antihero_detail, name='antihero-detail'),
    path('antihero/', views.AntiHeroList.as_view(), name='antihero-json'),
    path('acess-antihero/', views.acessAntihero, name='acess-antihero'),
    path('acess-antihero/<int:antihero_pk>', views.acess_antihero_page, name='acesso-page'),
    path('acess-antihero/<int:antihero_pk>/data', views.acess_antihero_data, name='acesso-data'),
    path('create-antihero/', views.create_antihero_page, name='create-antihero-page'),
    path('api/create-antihero/', views.create_antihero_api, name='create-antihero-api'),
    path('', include(router.urls)),
]
