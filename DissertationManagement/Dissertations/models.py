from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    avatar = models.ImageField(upload_to='users/%Y/%m')
    user_role = models.CharField(max_length=50, null=True)


class Council(models.Model):
    name = models.CharField(max_length=50, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    finished_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    user = models.ForeignKey(User, related_name="council", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Dissertation(models.Model):
    name = models.CharField(max_length=50, null=False)
    score = models.FloatField()
    date = models.DateTimeField()
    council = models.ForeignKey(Council, related_name='dissertation', on_delete=models.SET_NULL, null=True)
    users = models.ManyToManyField(User, related_name='dissertation', blank=True, null=True, through='UserDissertation')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class UserDissertation(models.Model):
    user = models.ForeignKey(User, related_name="user_dissertation", on_delete=models.SET_NULL, null=True)
    dissertation = models.ForeignKey(Dissertation, related_name="user_dissertation",
                                     on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)


class MemberRole(models.Model):
    name = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.name


class Target(models.Model):
    name = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.name


class Member(models.Model):
    member_role = models.ForeignKey(MemberRole, related_name='member', on_delete=models.SET_NULL, null=True)
    score = models.FloatField()
    user = models.ForeignKey(User, related_name='member', on_delete=models.SET_NULL, null=True)
    council = models.ForeignKey(Council, related_name='member', on_delete=models.SET_NULL, null=True)
    target = models.ManyToManyField(Target, related_name='member', blank=True, null=True, through='TargetMember')

    def __str__(self):
        return self.member_role


class TargetMember(models.Model):
    target = models.ForeignKey(Target, related_name='target_member', on_delete=models.SET_NULL, null=True)
    member = models.ForeignKey(Member, related_name='target_member', on_delete=models.SET_NULL, null=True)
    score = models.FloatField()



