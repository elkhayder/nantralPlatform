from django.contrib import admin
from .models import Club, NamedMembership

class ClubAdmin(admin.ModelAdmin):
    list_display = ['name', 'bdx_type']

class ClubMembershipsAdmin(admin.ModelAdmin):
    list_display =  ['student', 'group', 'function', 'year']

admin.site.register(Club, ClubAdmin)
admin.site.register(NamedMembership, ClubMembershipsAdmin)