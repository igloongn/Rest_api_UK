# Generated by Django 4.0.2 on 2022-04-10 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]
