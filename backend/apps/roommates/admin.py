from django.contrib import admin
from django.db.models import Q
from django.utils import timezone
from .models import Roommates, Housing, NamedMembershipRoommates


class OccupiedFilter(admin.SimpleListFilter):
    """
    This filter is being used in django admin panel in profile model.
    """
    title = 'Date'
    parameter_name = 'occupation'

    def lookups(self, request, model_admin):
        return (
            ('occupied', 'Est occupée'),
            ('non_occupied', 'N\'est plus occupée')
        )

    def queryset(self, request, queryset):
        if not self.value():
            return queryset
        if self.value().lower() == 'occupied':
            now = timezone.now()
            return Roommates.objects.filter(Q(Q(begin_date__lte=now) & (
                Q(end_date__gte=now) | Q(end_date=None))))
        elif self.value().lower() == 'non_occupied':
            now = timezone.now()
            return Roommates.objects.exclude(Q(Q(begin_date__lte=now) & (
                Q(end_date__gte=now) | Q(end_date=None))))


class MemberRoommatesInline(admin.TabularInline):
    model = NamedMembershipRoommates
    extra = 0


class RoommatesAdmin(admin.ModelAdmin):
    list_display = ['name', 'begin_date', 'end_date',
                    'colocathlon_agree', 'colocathlon_hours']
    list_filter = [OccupiedFilter, 'colocathlon_agree']
    inlines = [MemberRoommatesInline]


admin.site.register(Roommates, RoommatesAdmin)
admin.site.register(Housing)
admin.site.register(NamedMembershipRoommates)
