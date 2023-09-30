# Generated by Django 4.2.5 on 2023-09-26 14:02

from django.db import migrations, models
import django_ckeditor_5.fields


class Migration(migrations.Migration):

    dependencies = [
        ("post", "0009_alter_post_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="description_en",
            field=django_ckeditor_5.fields.CKEditor5Field(
                blank=True, null=True, verbose_name="Description"
            ),
        ),
        migrations.AddField(
            model_name="post",
            name="description_fr",
            field=django_ckeditor_5.fields.CKEditor5Field(
                blank=True, null=True, verbose_name="Description"
            ),
        ),
        migrations.AddField(
            model_name="post",
            name="title_en",
            field=models.CharField(
                max_length=200, null=True, verbose_name="Title"
            ),
        ),
        migrations.AddField(
            model_name="post",
            name="title_fr",
            field=models.CharField(
                max_length=200, null=True, verbose_name="Title"
            ),
        ),
    ]
