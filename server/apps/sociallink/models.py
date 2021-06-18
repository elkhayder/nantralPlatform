from django.db import models
#from apps.group.models import Group


class SocialNetwork(models.Model):
    name = models.CharField(verbose_name='Nom', max_length=20)
    color = models.CharField(
        verbose_name='Couleur en hexadécimal', max_length=7)
    icon_name = models.CharField(
        verbose_name="Nom Bootstrap de l'icône", max_length=20)

    class Meta:
        verbose_name = "Réseau Social"
        verbose_name_plural = "Réseaux Sociaux"

    def __str__(self):
        return self.name


class SocialLink(models.Model):
    url = models.CharField(verbose_name='URL', max_length=200)
    reseau = models.ForeignKey(SocialNetwork, on_delete=models.CASCADE)
    slug = models.SlugField(verbose_name='Slug du lien', unique=True, null=True)
    #group = models.ForeignKey('Group', on_delete=models.CASCADE)

    def __str__(self):
        return self.url
