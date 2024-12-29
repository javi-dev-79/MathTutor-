from rest_framework import permissions

class IsAdminUser(permissions.BasePermission):
    """
        Custom permission to verify that the user has the 'admin' role
    """
    def has_permission(self, request, view):
        return request.user.role == 'admin'