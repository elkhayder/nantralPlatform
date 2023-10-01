from typing import Union

from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpRequest
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from apps.account.models import TemporaryAccessRequest
from apps.utils.send_email import send_email

from .forms import SignUpForm, TemporaryRequestSignUpForm
from .tokens import account_activation_token

User = get_user_model()


def user_creation(
    form: Union[SignUpForm, TemporaryRequestSignUpForm], request: HttpRequest
) -> User:
    # save with username = email by default
    user: User = form.instance
    user.username = user.email
    user.save()

    user.student.promo = form.cleaned_data.get("promo")
    user.student.faculty = form.cleaned_data.get("faculty")
    user.student.path = form.cleaned_data.get("path")
    if user.first_name is not None:
        user.first_name = user.first_name.lower()
    if user.last_name is not None:
        user.last_name = user.last_name.lower()
    # create a unique user name
    first_name = "".join(e for e in user.first_name if e.isalnum())
    last_name = "".join(e for e in user.last_name if e.isalnum())
    promo = user.student.promo
    user.username = f"{first_name}.{last_name}{promo}-{user.id}"
    # user can't login until link confirmed
    user.is_active = False
    user.save()
    if isinstance(form, TemporaryRequestSignUpForm):
        temporary_access_request = TemporaryAccessRequest(user=user)
        domain = get_current_site(request).domain
        temporary_access_request.save(domain=domain)
    send_email_confirmation(
        user, request, isinstance(form, TemporaryRequestSignUpForm)
    )
    return user


def send_email_confirmation(
    user: User,
    request: HttpRequest,
    temporary_access: bool = False,
    send_to: str = None,
) -> None:
    domain = get_current_site(request).domain
    path = reverse(
        "account:confirm",
        kwargs={
            "uid": urlsafe_base64_encode(force_bytes(user.pk)),
            "token": account_activation_token.make_token(user),
        },
    )
    context = {
        "first_name": user.first_name,
        "validation_link": f"https://{domain}{path}",
    }

    send_email(
        subject="Activation de votre compte Nantral Platform",
        to_email=send_to or user.email,
        template_name="email-confirmation",
        context=context,
    )

    if temporary_access:
        messages.success(
            request,
            (
                "Un mail vous a été envoyé pour confirmer "
                "votre adresse mail personnelle."
            ),
        )
    else:
        messages.success(
            request,
            (
                "Un mail vous a été envoyé pour confirmer votre adresse mail "
                "Centrale Nantes.\nVous pouvez accéder à votre boîte mail "
                'école <a href="https://webmail.ec-nantes.fr">ici</a>.'
            ),
        )
