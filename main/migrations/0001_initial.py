# Generated by Django 2.2 on 2020-07-02 15:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=50, verbose_name='Кто оставил отзыв')),
                ('review', models.CharField(max_length=200, verbose_name='Текст отзыва')),
                ('data_created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания отзыва')),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
            },
        ),
    ]
