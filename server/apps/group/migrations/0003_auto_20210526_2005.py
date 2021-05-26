# Generated by Django 3.0.14 on 2021-05-26 18:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0002_auto_20210524_2349'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReseauSocial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Nom')),
                ('color', models.CharField(max_length=6, verbose_name='Couleur en hexadécimal')),
                ('icon_name', models.CharField(max_length=20, verbose_name="Nom Bootstrap de l'icône")),
            ],
            options={
                'verbose_name': 'Réseau Social',
                'verbose_name_plural': 'Réseaux Sociaux',
            },
        ),
        migrations.CreateModel(
            name='LienSocialClub',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=200, verbose_name='URL')),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='group.Club')),
                ('reseau', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='group.ReseauSocial')),
            ],
        ),
        migrations.AddField(
            model_name='club',
            name='social',
            field=models.ManyToManyField(through='group.LienSocialClub', to='group.ReseauSocial'),
        ),
    ]
