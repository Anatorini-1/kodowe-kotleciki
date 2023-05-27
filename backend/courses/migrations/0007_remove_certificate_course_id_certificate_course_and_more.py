# Generated by Django 4.1.5 on 2023-05-27 03:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0006_alter_courses_content_alter_courses_quiz'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certificate',
            name='course_id',
        ),
        migrations.AddField(
            model_name='certificate',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='courses.courses'),
        ),
        migrations.AlterField(
            model_name='courses',
            name='content',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='courses',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='courses',
            name='quiz',
            field=models.JSONField(blank=True, null=True),
        ),
    ]