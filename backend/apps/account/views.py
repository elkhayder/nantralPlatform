import uuid
from typing import Any, Dict
from urllib.parse import urlparse

from django.conf import settings
from django.contrib import messages
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.forms import SetPasswordForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import PasswordResetConfirmView
from django.contrib.sites.shortcuts import get_current_site
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.template.loader import render_to_string
from django.urls import reverse, reverse_lazy
from django.utils import timezone
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.views import View
from django.views.decorators.http import require_http_methods
from django.views.generic import FormView, TemplateView

from apps.student.models import Student

from .forms import (
    ForgottenPassForm,
    LoginForm,
    SignUpForm,
    TemporaryRequestSignUpForm,
    UpgradePermanentAccountForm,
)
from .models import IdRegistration, TemporaryAccessRequest
from .tokens import account_activation_token
from .utils import send_email_confirmation, user_creation

User = get_user_model()
AUTH_BACKEND = "apps.account.emailAuthBackend.EmailBackend"


class RegistrationView(FormView):
    template_name = "account/registration.html"
    form_class = SignUpForm

    def get_context_data(self, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["temporary_registration"] = (
            settings.TEMPORARY_ACCOUNTS_DATE_LIMIT >= timezone.now().today()
        )
        return context

    def form_valid(self, form):
        user_creation(form, self.request)
        return redirect("home:home")


class TemporaryRegistrationView(FormView):
    form_class = TemporaryRequestSignUpForm
    template_name = "account/temporary_registration.html"

    def get(self, request, invite_id: uuid.UUID, *args, **kwargs):
        # Do not allow to use this view outside of allowed.
        # temporary accounts windows.
        invitation = IdRegistration.objects.filter(id=invite_id).first()
        if invitation is None or timezone.now() > invitation.expires_at:
            messages.error(
                request, "Invitation invalide : le lien d'invitation a expiré."
            )
            return redirect("account:registration-choice")
        return super().get(request, *args, **kwargs)

    def get_initial(self) -> Dict[str, Any]:
        initial = super().get_initial()
        initial["invite_id"] = self.kwargs["invite_id"]
        return initial

    def get_context_data(self, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context[
            "DEADLINE_TEMPORARY_REGISTRATION"
        ] = settings.TEMPORARY_ACCOUNTS_DATE_LIMIT
        return context

    def form_valid(self, form) -> HttpResponse:
        user_creation(form, self.request)
        return redirect("account:login")


class ConfirmUser(View):
    def get(self, request, uidb64, token):
        # get the user
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return render(self.request, "account/activation_invalid.html")
        # get the associated temporary object if it exists
        invitation = user.invitation is not None
        # checking if the token is valid.
        if account_activation_token.check_token(user, token):
            # if valid set active true
            user.is_active = True
            user.is_email_valid = True
            if invitation and user.email_next:
                user.email = user.email_next
                user.email_next = None
                user.invitation = None
                messages.warning(
                    request,
                    f"Dorénavant vous devez utiliser {user.email} pour vous "
                    "connecter.",
                )
            user.save()
            login(self.request, user, backend=AUTH_BACKEND)
            messages.success(request, "Votre compte est désormais actif !")
            return redirect("home:home")
        else:
            return render(self.request, "account/activation_invalid.html")


class AuthView(FormView):
    template_name = "account/login.html"
    form_class = LoginForm

    def get(self, request):
        if request.user.is_authenticated:
            # we send back the user to where he wanted to go or to home page
            url = self.request.GET.get("next", "/")
            parsed_uri = urlparse(url)
            if parsed_uri.scheme != "" or parsed_uri.netloc != "":
                url = "/"
            user = request.user
            message = (
                "Vous êtes déjà connecté en tant que "
                f"{user.first_name.title()}."
            )
            messages.warning(request, message)
            return redirect(url)

        return super().get(self, request)

    def form_invalid(self, form):
        message = "Veuillez vous connecter avec votre adresse mail ECN."
        messages.warning(self.request, message)
        return redirect("account:login")

    def form_valid(self, form):
        username = form.cleaned_data["email"]
        password = form.cleaned_data["password"]
        user = authenticate(self.request, email=username, password=password)

        url = self.request.GET.get("next", "/")
        parsed_uri = urlparse(url)
        if parsed_uri.scheme != "" or parsed_uri.netloc != "":
            url = "/"

        # Wrong credentials or expired invitation
        if user is None or (
            user.invitation is not None
            and user.invitation.expires_at < timezone.now()
        ):
            messages.error(
                self.request, "Identifiant inconnu ou mot de passe invalide."
            )
            return redirect("account:login")

        # Not verified email
        if not user.is_email_valid:
            self.request.session["email"] = username
            return redirect("account:confirm-email")

        # Temporary account
        if (
            user.invitation is not None
            and user.invitation.expires_at > timezone.now()
        ):
            message = (
                "Votre compte n'est pas encore définitif. "
                'Veuillez le valider <a href="'
                f'{reverse("account:upgrade-permanent")}">ici</a>. '
                "Attention après le "
                f"{user.invitation.expires_at} vous ne "
                "pourrez plus vous connecter si vous n'avez pas "
                "renseigné votre adresse Centrale."
            )
            messages.warning(self.request, message)
            login(
                self.request,
                user,
                backend=AUTH_BACKEND,
            )
            # We send back the user to where he wanted to go or to home page
            return redirect(url)

        # Normal case
        message = f"Bonjour {user.first_name.title()} !"
        messages.success(self.request, message)
        login(
            self.request,
            user,
            backend=AUTH_BACKEND,
        )
        # We send back the user to where he wanted to go or to home page
        return redirect(url)


class LogoutView(View):
    def get(self, request):
        logout(request)
        messages.success(request, "Vous avez été déconnecté.")
        return redirect("account:login")


class ForgottenPassView(FormView):
    form_class = ForgottenPassForm
    template_name = "account/forgotten_pass.html"

    def form_valid(self, form):
        try:
            user = User.objects.get(email=form.cleaned_data["email"])
            if user is not None:
                subject = (
                    "[Nantral Platform] Réinitialisation de votre mot de passe"
                )
                current_site = get_current_site(self.request)
                message = render_to_string(
                    "account/mail/password_request.html",
                    {
                        "user": user,
                        "domain": current_site.domain,
                        "uidb64": urlsafe_base64_encode(force_bytes(user.pk)),
                        # method will generate a hash value with user data
                        "token": account_activation_token.make_token(user),
                    },
                )
                user.email_user(subject, message, html_message=message)
        except User.DoesNotExist:
            pass
        messages.success(
            self.request,
            "Un email de récuperation a été envoyé si cette adresse existe.",
        )
        return redirect("account:login")


class PasswordResetConfirmCustomView(PasswordResetConfirmView):
    template_name = "account/reset_password.html"
    post_reset_login = True
    post_reset_login_backend = AUTH_BACKEND
    form_class = SetPasswordForm
    token_generator = account_activation_token
    success_url = reverse_lazy("home:home")


@require_http_methods(["GET"])
def redirect_to_student(request, user_id):
    user = User.objects.get(id=user_id)
    student = Student.objects.get(user=user)
    return redirect("student:update", student.pk)


class PermanentAccountUpgradeView(LoginRequiredMixin, FormView):
    form_class = UpgradePermanentAccountForm
    template_name = "account/permanent_account_upgrade.html"
    success_url = reverse_lazy("home:home")

    def get(self, request):
        if request.user.invitation is None:
            redirect("/")
        return super().get(request=request)

    def form_valid(self, form: UpgradePermanentAccountForm) -> HttpResponse:
        new_email = form.cleaned_data["email"]
        self.request.user.email_next = new_email
        self.request.user.save()
        send_email_confirmation(
            self.request.user, self.request, send_to=new_email
        )
        return super().form_valid(form)


class RegistrationChoice(TemplateView):
    template_name = "account/registration-choice.html"


class TemporaryRegistrationChoice(TemplateView):
    template_name = "account/temp-registration-choice.html"

    def get_context_data(self, invite_id, **kwargs: Any) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["invite_id"] = invite_id
        return context


class ConfirmEmail(TemplateView):
    template_name = "account/confirm-email.html"

    def get(self, request, *args: Any, **kwargs: Any) -> HttpResponse:
        try:
            User.objects.get(email=request.session["email"])
        except (User.DoesNotExist, KeyError):
            return redirect("account:login")
        return super().get(request, *args, **kwargs)

    def post(self, request):
        user = User.objects.get(email=request.session["email"])
        mail = user.email
        temp_access = TemporaryAccessRequest.objects.filter(
            user=user.pk
        ).exists()
        send_email_confirmation(
            user, self.request, temporary_access=temp_access, send_to=mail
        )
        del self.request.session["email"]
        return redirect("account:login")
