from django.db.models import Q
from rest_framework import permissions
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer, WritePostSerializer
from apps.group.api_views import Group
from apps.student.api_views import Student
from apps.post.models import VISIBILITY
from apps.event.api_views import TRUE_ARGUMENTS
from django.utils import timezone


class PostAdminPermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj: Post):
        if request.method in permissions.SAFE_METHODS:
            return obj.can_view(request.user)
        else:
            return obj.group.is_admin(request.user)


class PostViewSet(viewsets.ModelViewSet):
    """An API endpoint for post
    Query Parameters
    ----------------
    - order_by : list[str] = date ->
    list of attributes to order the result in the form "order=a,b,c".
    In ascending order by defaut. Add "-" in front of row name without
    spaces to sort by descending order
    - group : list[str] = None ->
    the slug list of organizers of the form "organizer=a,b,c"
    - from_date : 'yyyy-MM-dd' = None ->
    filter post whose date is greater or equal to from_date
    - to_date : 'yyyy-MM-dd' = None ->
    filter post whose date is less or equal to to_date
    - is_member : bool = None ->
    whether user is member of the group
    - publicity : 'Mem' | 'Pub' = None ->
    visibility of the post

    Actions
    -------
    - GET .../post/ : get the list of post
    - POST .../post/ : create a new post
    - GET .../post/<id>/ : get a post
    - PUT .../post/<id>/ : update a post
    - DELETE .../post/<id>/ : delete a post
    """
    permission_classes = [permissions.IsAuthenticated, PostAdminPermission]
    serializer_class = PostSerializer

    def get_serializer_class(self):
        if self.request.method in ["POST", "PUT"]:
            return WritePostSerializer
        else:
            return PostSerializer

    def get_queryset(self) -> list[Post]:
        if not hasattr(self.request.user, 'student'):
            return []
        # query params
        order_by: list[str] = self.request.query_params.get(
            'order_by', '-created_at').split(',')
        groups: str = self.request.query_params.get('group')
        visibility: str = self.request.query_params.get('publicity')
        organizers_slug: list[str] = groups.split(',') if groups else []
        is_member: bool = self.request.query_params.get(
            'is_member') in TRUE_ARGUMENTS
        from_date: str = self.request.query_params.get(
            'from_date')
        to_date: str = self.request.query_params.get(
            'to_date')
        pinned: str = self.request.query_params.get(
            'pinned')
        # query
        today = timezone.now()
        student: Student = self.request.user.student
        my_groups = Group.objects.filter(members=student)
        # filtering
        posts = (
            Post.objects
            .annotate(member=Q(group__in=my_groups))
            .filter(
                Q(member=True) if is_member else Q())
            .filter(Q(group__slug__in=organizers_slug)
                    if len(organizers_slug) > 0 else Q())
            .filter(Q(created_at__gte=from_date) if from_date else Q())
            .filter(Q(created_at__lte=to_date)
                    if to_date
                    else Q(created_at__lte=today) | Q(member=True))
            .filter(Q(publicity=visibility) if visibility in
                    [VISIBILITY[i][0] for i in range(len(VISIBILITY))] else Q())
            .filter(Q(publicity=VISIBILITY[0][0]) | Q(member=True))
            .filter(Q(pinned=True) if pinned in ['true', ''] else Q())
            .filter(Q(pinned=False) if pinned == 'false' else Q())
            .order_by(*order_by)
            .distinct()
        )
        return posts
