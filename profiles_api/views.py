
# rest
import jwt
from .serializer import HelloSerializer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import filters
from rest_framework import permissions as p 
from drf_yasg.utils import swagger_auto_schema

# Local
from .models import NewUser
from .serializer import UserProfileSerializer
from .permissions import UpdateOwnProfile


class Hello(APIView):
    serializer_class = HelloSerializer

    def get(self, request):
        return Response({
            'message': 'Hello APIView'
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            msg = f'Hello {name}'
            return Response({'message':msg})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

class UserProfile(ModelViewSet):
    queryset = NewUser.objects.all()
    serializer_class = UserProfileSerializer
    # permission_classes = (p.IsAuthenticated, ) 
    permission_classes = (UpdateOwnProfile, ) 
    # authentication_classes = (jwt, )
    filter_backends = (filters.SearchFilter, )
    search_fields = ('user_name', 'email',)

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.user_name

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





