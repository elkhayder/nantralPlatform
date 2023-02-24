from rest_framework.routers import DefaultRouter

from .api_views import (
    MembershipViewSet,
    GroupViewSet)

app_name = 'api_group'


# rooter for API: it creates all urls for a viewSet at once
# see https://www.django-rest-framework.org/api-guide/routers/#simplerouter
router = DefaultRouter()
router.register('membership', MembershipViewSet, basename='membership')
router.register('group', GroupViewSet, basename='group')

urlpatterns = router.urls
