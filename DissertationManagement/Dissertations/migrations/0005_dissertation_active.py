# Generated by Django 4.1.7 on 2023-04-10 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dissertations', '0004_alter_user_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='dissertation',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
