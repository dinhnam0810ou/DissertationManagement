# Generated by Django 4.1.7 on 2023-04-03 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dissertations', '0002_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_role',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
