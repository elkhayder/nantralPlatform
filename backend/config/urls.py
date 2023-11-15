"""Nantral Platform URL Configuration.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/

Examples:
---------
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# pour importer les fichiers en dev local
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

import debug_toolbar

urlpatterns = [
    path("admin/doc/", include("django.contrib.admindocs.urls")),
    path("admin/", admin.site.urls),
    # default and third-party apps
    path("__debug__/", include(debug_toolbar.urls)),
    path("ckeditor5/", include("django_ckeditor_5.urls")),
    # apps
    path("account/", include("apps.account.urls", namespace="account")),
    path("student/", include("apps.student.urls", namespace="student")),
    path("group/", include("apps.group.urls", namespace="group")),
    path("club/", include("apps._archived.club.urls", namespace="club")),
    path("colocs/", include("apps.roommates.urls", namespace="roommates")),
    path(
        "colocs/admin",
        include("apps.roommates.admin_urls", namespace="roommates-admin"),
    ),
    path("parrainage/", include("apps.family.urls", namespace="family")),
    path(
        "parrainage/admin/",
        include("apps.family.admin_urls", namespace="family-admin"),
    ),
    path(
        "notification/",
        include("apps.notification.urls", namespace="notification"),
    ),
    # api
    path(
        "api/account/",
        include("apps.account.api_urls", namespace="account-api"),
    ),
    path(
        "api/student/",
        include("apps.student.api_urls", namespace="student_api"),
    ),
    path(
        "api/colocs/",
        include("apps.roommates.api_urls", namespace="roommates_api"),
    ),
    path("api/post/", include("apps.post.api_urls", namespace="post_api")),
    path("api/event/", include("apps.event.api_urls", namespace="event_api")),
    path(
        "api/notification/",
        include("apps.notification.api_urls", namespace="notification_api"),
    ),
    path("api/group/", include("apps.group.api_urls", namespace="group_api")),
    path(
        "api/signature/",
        include("apps.signature.api_urls", namespace="signature_api"),
    ),
    path("api/home/", include("apps.home.api_urls", namespace="home_api")),
    # homepage
    path("", include("apps.home.urls", namespace="home")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler403 = "apps.home.views.handler403"
handler404 = "apps.home.views.handler404"
handler500 = "apps.home.views.handler500"
handler404 = "apps.home.views.handler404"
handler500 = "apps.home.views.handler500"
