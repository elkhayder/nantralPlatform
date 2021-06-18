# Generated by Django 3.2.3 on 2021-06-12 09:54

from django.db import migrations


class Migration(migrations.Migration):
    #atomic=False
    dependencies = [
        ('group', '0004_move_social_network'),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[migrations.AlterUniqueTogether(
                name='namedmembershiplist',
                unique_together=None,
            ),
                migrations.RemoveField(
                model_name='namedmembershiplist',
                name='liste',
            ),
                migrations.RemoveField(
                model_name='namedmembershiplist',
                name='student',
            ), ],
            database_operations=[],
        ),
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.DeleteModel(
                    name='Liste',
                ),
                migrations.DeleteModel(
                    name='NamedMembershipList',
                ), ],
            database_operations=[
                migrations.AlterModelTable(
                    name='Liste',
                    table='liste_liste'),
                migrations.AlterModelTable(
                    name='NamedMembershipList',
                    table='liste_namedmembershiplist'
                )
            ],
        ),
    ]
