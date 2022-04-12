from rest_framework import permissions as p


class UpdateOwnProfile(p.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in p.SAFE_METHODS:
            return True
        return obj.id == request.user.id
