from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.sites.shortcuts import get_current_site
from django.core import mail
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from apps.student.admin import StudentInline

from .models import IdRegistration

User = get_user_model()


@admin.register(IdRegistration)
class IdRegistrationAdmin(admin.ModelAdmin):
    list_display = ["id", "expires_at"]
    readonly_fields = ["invitation_url"]

    def invitation_url(self, obj: IdRegistration):
        return reverse("account:temp-registration-choice", args=[obj.id])


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    actions = ["send_reminder"]
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (
            _("Info personnelles"),
            {"fields": ("first_name", "last_name", "email")},
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_email_valid",
                    "is_staff",
                    "is_superuser",
                    "invitation",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Dates Importantes"), {"fields": ("last_login", "date_joined")}),
    )
    list_filter = (
        "is_staff",
        "is_superuser",
        "is_active",
        "groups",
        "invitation",
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    readonly_fields = ("date_joined", "last_login")
    inlines = (StudentInline,)

    @admin.action(description="Send reminder to upgrade account.")
    def send_reminder(self, request, queryset):
        connection = mail.get_connection()
        current_site = get_current_site(request)
        mails = []
        for user in queryset:
            email_html = render_to_string(
                "account/mail/reminder_upgrade.html",
                context={
                    "tempAccess": user,
                    "deadline": user.invitation.expires_at,
                    "domain": current_site.domain,
                },
            )
            email = mail.EmailMultiAlternatives(
                subject="[Nantral Platform] Votre compte expire bientôt !",
                body=email_html,
                to=[user.email],
            )
            email.attach_alternative(content=email_html, mimetype="text/html")
            mails.append(email)
        connection.send_messages(mails)
