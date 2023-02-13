# Generated by Django 4.1.6 on 2023-02-13 21:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0006_alter_student_faculty'),
        ('sociallink', '0005_alter_sociallink_label_alter_sociallink_url'),
        ('group', '0010_group_membership_grouptype'),
        ('maps', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='grouptype',
            name='map',
            field=models.ForeignKey(blank=True, default=False, help_text='Groups can have a place only if a map is associated.', null=True, on_delete=django.db.models.deletion.SET_NULL, to='maps.map', verbose_name='Associated map'),
        ),
        migrations.AddField(
            model_name='group',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='student.student'),
        ),
        migrations.AddField(
            model_name='group',
            name='group_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='group.grouptype', verbose_name='Type of group'),
        ),
        migrations.AddField(
            model_name='group',
            name='members',
            field=models.ManyToManyField(blank=True, related_name='groups', through='group.Membership', to='student.student', verbose_name='Members'),
        ),
        migrations.AddField(
            model_name='group',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='group.group', verbose_name='Parent group'),
        ),
        migrations.AddField(
            model_name='group',
            name='place',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='maps.place', verbose_name='Place attached to the group'),
        ),
        migrations.AddField(
            model_name='group',
            name='social_links',
            field=models.ManyToManyField(blank=True, related_name='+', to='sociallink.sociallink', verbose_name='Social networks'),
        ),
        migrations.AddField(
            model_name='group',
            name='subscribers',
            field=models.ManyToManyField(blank=True, related_name='subscriptions', to='student.student', verbose_name='Subscribers'),
        ),
        migrations.AddField(
            model_name='group',
            name='updated_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='student.student'),
        ),
        migrations.AlterUniqueTogether(
            name='membership',
            unique_together={('student', 'group')},
        ),
    ]
