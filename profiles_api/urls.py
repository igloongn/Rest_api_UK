from django.urls import path, re_path
from . import views as v
from rest_framework import routers


router = routers.DefaultRouter()
router.register('', v.UserProfile)
 
urlpatterns = [
    path('view/', v.Hello.as_view())    
]
urlpatterns += router.urls