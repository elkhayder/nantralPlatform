# Generated by Django 3.2.3 on 2021-07-31 15:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0003_auto_20210724_2236'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='proposed_by',
            new_name='group',
        ),
    ]
