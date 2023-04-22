from rest_framework import permissions


class MinistryPermission(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        return request.user and request.user.user_role == 'MINISTRY'
