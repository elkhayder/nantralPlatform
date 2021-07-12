from datetime import date

from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth.models import User
from django.views.generic.base import TemplateView, View
from django.views.generic import UpdateView, FormView
from django.contrib.auth.decorators import login_required

from .models import *
from .forms import EventForm, EventFormSet

from apps.group.models import Group
from apps.group.views import GroupSlugFonctions
from apps.utils.accessMixins import LoginRequiredAccessMixin, UserIsAdmin

# Application Event

class EventDetailView(LoginRequiredAccessMixin, TemplateView):
    template_name = 'event/detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        self.object = BaseEvent.get_event_by_slug(self.kwargs.get('event_slug'))
        context['object'] = self.object
        context['group'] = self.object.get_group
        context['is_participating'] = self.object.is_participating(
            self.request.user)
        return context



# Application Group

class UpdateGroupCreateEventView(GroupSlugFonctions, UserIsAdmin, FormView):
    """In the context of edit group, create event view."""
    template_name = 'group/event/create.html'
    form_class = EventForm

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object'] = Group.get_group_by_slug(self.get_slug)
        return context

    def form_valid(self, form, **kwargs):
        event = form.save(commit=False)
        event.group = Group.get_group_by_slug(
            slug=self.get_slug
        ).slug
        event.save()
        group_type = self.kwargs.get('group_type')
        mini_slug = self.kwargs.get('mini_slug')
        return redirect(group_type+':create-event', mini_slug)


class EventUpdateView(GroupSlugFonctions, UserIsAdmin, UpdateView):
    '''In the context of edit group, update an event'''
    template_name = 'event/update.html'
    fields = ['title', 'description', 'location',
              'date', 'publicity', 'color', 'image']

    def test_func(self) -> bool:
        self.kwargs['group_type'] = self.object.get_group.group_type
        self.kwargs['mini_slug']  = self.object.get_group.mini_slug
        return super().test_func()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object'] = self.object.get_group
        context['event'] = self.object
        return context

    def get_object(self, **kwargs):
        return BaseEvent.get_event_by_slug(self.kwargs['event_slug'])

    def dispatch(self, request, *args, **kwargs):
        self.object = BaseEvent.get_event_by_slug(self.kwargs['event_slug'])
        self.kwargs['group_type'] = self.object.get_group.group_type
        self.kwargs['mini_slug']  = self.object.get_group.mini_slug
        if isinstance(self.object, EatingEvent):
            self.fields = ['title', 'description', 'location',
                           'date', 'publicity', 'color', 'image', 'menu']
        return super().dispatch(request, *args, **kwargs)


class UpdateGroupEventsView(GroupSlugFonctions, UserIsAdmin, View):
    '''In the context of edit group, show planned events'''
    template_name = 'group/event/planned_edit.html'

    def get_context_data(self, **kwargs):
        context = {}
        context['object'] = Group.get_group_by_slug(self.get_slug)
        context['events'] = BaseEvent.objects.filter(
            group=self.get_slug, date__gte=date.today())
        context['form'] = EventFormSet(queryset=context['events'])
        return context

    def get(self, request, **kwargs):
        context=self.get_context_data()
        return render(request, self.template_name, context)

    def post(self, request,  **kwargs):
        object = Group.get_group_by_slug(self.get_slug)
        return edit_events(request, object)


class UpdateGroupArchivedEventsView(GroupSlugFonctions, UserIsAdmin, View):
    '''In the context of edit group, show archived events'''
    template_name = 'group/event/archived_edit.html'

    def get_context_data(self, **kwargs):
        context = {}
        context['object'] = Group.get_group_by_slug(self.get_slug)
        context['events'] = BaseEvent.objects.filter(
            group=self.get_slug, date__lte=date.today())
        context['form'] = EventFormSet(queryset=context['events'])
        return context

    def get(self, request, **kwargs):
        context=self.get_context_data()
        return render(request, self.template_name, context)

    def post(self, request,  **kwargs):
        object = Group.get_group_by_slug(self.get_slug)
        return edit_events(request, object)


@login_required
def add_participant(request, event_slug):
    """Adds the user to the list of participants."""
    event = BaseEvent.get_event_by_slug(event_slug)
    event.participants.add(request.user.student)
    if request.GET.get('redirect'):
        return redirect('home:home')
    return redirect(event.get_absolute_url())


@login_required
def remove_participant(request, event_slug):
    """Removes the user from the list of participants."""
    event = BaseEvent.get_event_by_slug(event_slug)
    event.participants.remove(request.user.student)
    if request.GET.get('redirect'):
        return redirect('home:home')
    return redirect(event.get_absolute_url())


@login_required
def edit_events(request, group):
    form = EventFormSet(request.POST)
    if form.is_valid():
        events = form.save(commit=False)
        # Link each event to the group
        for event in events:
            event.group = group.slug
            event.save()
        # Delete  missing events
        for event in form.deleted_objects:
            event.delete()
        messages.success(request, 'Events  modifies')
        return redirect(group.group_type+':update-events', group.mini_slug)
    else:
        messages.warning(request, form.errors)
        return redirect(group.group_type+':update-events', group.mini_slug)
