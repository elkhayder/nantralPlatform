# Generated by Django 3.2.3 on 2021-06-16 18:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('club', '0006_transfer_admin_in_membership'),
    ]

    operations = [
        migrations.RenameField(
            model_name='namedmembershipclub',
            old_name='club',
            new_name='group',
        ),
    ]
