# Generated by Django 4.1.5 on 2023-05-26 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_certificat_alter_courses_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='category',
            field=models.CharField(max_length=55),
        ),
    ]