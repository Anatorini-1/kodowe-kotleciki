# Generated by Django 4.1.5 on 2023-05-27 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_certificate_delete_certificat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='content',
            field=models.JSONField(blank=True),
        ),
        migrations.AlterField(
            model_name='courses',
            name='quiz',
            field=models.JSONField(blank=True),
        ),
    ]
