from django.shortcuts import render
from rest_framework import generics
from .models import AntiHero
from .serializer import AntiHeroSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets

def home(request):
    return render(request, 'index.html')

#

def selectAntiHero(request):
    return render(request, 'select-antihero.html')

#

def listAntiHeroes(request):
    return render(request, 'list-antiheroes.html')

#

@api_view(['GET'])
def antihero_detail(request, selectname):
    antihero = get_object_or_404(AntiHero, name=selectname)
    serializer = AntiHeroSerializer(antihero)
    return Response(serializer.data)

#

class AntiHeroList(generics.ListCreateAPIView):
    queryset = AntiHero.objects.all()
    serializer_class = AntiHeroSerializer
 
#

def acessAntihero(request):
    return render(request, 'acess-antihero.html')

#

@api_view(['GET'])
def acess_antihero_page(request, antihero_pk):
    antihero = get_object_or_404(AntiHero, pk=antihero_pk)
    return render(request, 'acess-antihero.html', {'antihero' : antihero})

#

@api_view(['GET'])
def acess_antihero_data(request, antihero_pk):
    antihero = get_object_or_404(AntiHero, pk=antihero_pk)
    serializer = AntiHeroSerializer(antihero)
    return Response(serializer.data)

#

def create_antihero_page(request):
    return render(request, 'create-antihero.html')

#

@api_view(['POST'])
def create_antihero_api(request):
        name = request.data.get('name')
        history = request.data.get('history')

        if name and history:
            antihero = AntiHero(name = name, history = history)
            antihero.save()
            return Response(
                {"message" : "Anti-heroi criado",
                 "id" : antihero.antihero_id,
                 "url" : f"/acess-antihero/{antihero.antihero_id}"}, status=status.HTTP_201_CREATED)
        return Response({"Erro" : "Dado invalido"}, status=status.HTTP_400_BAD_REQUEST)

#

class AntiHeroViewSet(viewsets.ModelViewSet):
    queryset = AntiHero.objects.all()
    serializer_class = AntiHeroSerializer
