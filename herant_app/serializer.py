from rest_framework import serializers
from .models import AntiHero

class AntiHeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = AntiHero
        fields = '__all__'

        