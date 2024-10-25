from django.db import models

class AntiHero(models.Model):
    class Meta:
        db_table : 'AntiHero'
        
    antihero_id = models.AutoField(primary_key=True) 
    name = models.CharField(max_length=255)
    history = models.CharField(max_length=500)

    def __str__(self):
        return self.name
    
