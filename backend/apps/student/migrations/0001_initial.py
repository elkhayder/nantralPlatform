# Generated by Django 3.0.5 on 2020-06-26 18:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models

import apps.utils.upload


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('promo', models.IntegerField(blank=True, null=True, verbose_name='Année de promotion entrante')),
                ('picture', models.ImageField(blank=True, null=True, upload_to=apps.utils.upload.PathAndRename('students/profile_pictures'), verbose_name='Photo de profil')),
                ('first_name', models.CharField(max_length=200, null=True, verbose_name='Prénom')),
                ('last_name', models.CharField(max_length=200, null=True, verbose_name='Nom de famille')),
                ('faculty', models.CharField(choices=[('Gen', 'Élève Ingénieur Généraliste'), ('Iti', 'Élève Ingénieur de Specialité (ITII)'), ('Mas', 'Élève en Master'), ('Doc', 'Doctorant')], max_length=200, verbose_name='Filière')),
                ('double_degree', models.CharField(blank=True, choices=[('Cla', ''), ('I-A', 'Ingénieur-Architecte'), ('A-I', 'Architecte-Ingénieur'), ('I-M', 'Ingénieur-Manager'), ('M-I', 'Manager-Ingénieur'), ('I-O', 'Ingénieur-Officier'), ('O-I', 'Officier-Ingénieur')], max_length=200, null=True, verbose_name='Double cursus')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
