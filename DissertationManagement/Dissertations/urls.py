from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

r = routers.DefaultRouter()
r.register('users', views.UserViewSet)
r.register('councils', views.CouncilViewSet)
r.register('dissertations', views.DissertationViewSet)
r.register('targets', views.TargetViewSet)
r.register('members', views.MemberViewSet)

urlpatterns = [
    path('', include(r.urls)),
]