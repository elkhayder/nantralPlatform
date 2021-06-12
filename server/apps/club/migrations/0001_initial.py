# Generated by Django 3.2.3 on 2021-06-12 21:40

import apps.utils.upload
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('student', '0003_alter_student_options'),
        ('group', '0006_move_club')
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.CreateModel(
                    name='Club',
                    fields=[
                        ('id', models.AutoField(auto_created=True,
                                                primary_key=True, serialize=False, verbose_name='ID')),
                        ('name', models.CharField(max_length=200,
                                                  unique=True, verbose_name='Nom du groupe')),
                        ('description', models.TextField(
                            blank=True, verbose_name='Description du groupe')),
                        ('slug', models.SlugField(
                            blank=True, max_length=40, unique=True)),
                        ('parent', models.SlugField(
                            blank=True, max_length=40, null=True)),
                        ('modified_date', models.DateTimeField(auto_now=True)),
                        ('alt_name', models.CharField(blank=True,
                                                      max_length=200, null=True, verbose_name='Nom abrégé')),
                        ('bdx_type', models.CharField(choices=[('BDA', 'Bureau des Arts'), ('BDE', 'Bureau des Élèves'), (
                            'BDS', 'Bureau des Sports'), ('Asso', 'Association')], max_length=60, verbose_name='Type de club BDX')),
                        ('logo', models.ImageField(blank=True, null=True, upload_to=apps.utils.upload.PathAndRename(
                            'groups/logo/club'), verbose_name='Logo du club')),
                        ('banniere', models.ImageField(blank=True, null=True, upload_to=apps.utils.upload.PathAndRename(
                            'groups/banniere/club'), verbose_name='Bannière')),
                        ('admins', models.ManyToManyField(blank=True, related_name='club_admins',
                                                          to='student.Student', verbose_name='Admins du groupe')),
                    ],
                    options={
                        'abstract': False,
                    },
                ),
                migrations.CreateModel(
                    name='NamedMembershipClub',
                    fields=[
                        ('id', models.AutoField(auto_created=True,
                                                primary_key=True, serialize=False, verbose_name='ID')),
                        ('function', models.CharField(blank=True,
                                                      max_length=200, verbose_name='Poste occupé')),
                        ('year', models.IntegerField(blank=True,
                                                     null=True, verbose_name='Année du poste')),
                        ('club', models.ForeignKey(
                            on_delete=django.db.models.deletion.CASCADE, to='club.club')),
                        ('student', models.ForeignKey(
                            on_delete=django.db.models.deletion.CASCADE, to='student.student')),
                    ],
                    options={
                        'unique_together': {('function', 'year', 'student', 'club')},
                    },
                ), ],
            database_operations=[
            ],
        ),
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.AddField(
                    model_name='club',
                    name='members',
                    field=models.ManyToManyField(
                        through='club.NamedMembershipClub', to='student.Student'),
                ),
            ],
            database_operations=[
            ],
        ),
    ]
