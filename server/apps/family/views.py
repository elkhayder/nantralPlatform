from django.shortcuts import redirect, render
from django.views.generic import TemplateView, CreateView, DetailView, FormView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from datetime import date

from apps.utils.accessMixins import UserIsAdmin
from .models import Affichage, QuestionMember, QuestionFamily, AnswerMember, Family, MembershipFamily, QuestionPage
from .forms import CreateFamilyForm, UpdateFamilyForm, Member2AFormset, FamilyQuestionsForm, MemberQuestionsForm


# Create your views here.

class HomeFamilyView(LoginRequiredMixin, TemplateView):
    """Page d'accueil de l'appli Parrainage"""

    template_name = 'family/home.html'

    def get_context_data(self, **kwargs):
        student = self.request.user.student
        try:
            phase = Affichage.objects.first().phase
        except Exception:
            Affichage().save()
            phase = Affichage.objects.first().phase
        context = {}
        context['phase'] = phase
        context['user_family'] = student.family_set.filter(year=date.today().year).first()
        if context['user_family']:
            context['is_2Aplus'] = (context['user_family'].memberships.filter(student=student).first().role == '2A+')
            context['1A_members'] = context['user_family'].memberships.filter(role='1A')
        else:
            context['is_2Aplus'] = (student.promo < date.today().year)
            context['1A_members'] = None
        # nombre de questions complétées
        nb_done = AnswerMember.objects.filter(member__student=student).count()
        nb_tot = QuestionMember.objects.all().count()
        nb_fam_only = QuestionFamily.objects.filter(quota=100).count()
        context['form_complete'] = (nb_done >= (nb_tot - nb_fam_only*int(context['is_2Aplus'])))

        return context


class ListFamilyView(LoginRequiredMixin, TemplateView):
    template_name = 'family/list.html'

    def get_context_data(*args, **kwargs):
        list_family = [
            {
                'name':f.name, 
                'url':f.get_absolute_url,
            } 
            for f in Family.objects.all()
        ]
        list_2A = [
            {
                'name': m.student.alphabetical_name, 
                'family': m.group.name,
                'url': m.group.get_absolute_url,
            }
            for m in MembershipFamily.objects.filter(role='2A+')  
        ]
        list_1A = [
            {
                'name': m.student.alphabetical_name, 
                'family': m.group.name,
                'url': m.group.get_absolute_url,
            }
            for m in MembershipFamily.objects.filter(role='1A')  
        ]
        context = {
            'list_family': list_family,
            'list_2A': list_2A,
            'list_1A': list_1A,
        }
        return context



class CreateFamilyView(LoginRequiredMixin, CreateView):
    """Vue pour créer une nouvelle famille"""
    template_name = 'family/create.html'
    form_class = CreateFamilyForm

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.year = date.today().year
        self.object.save()
        MembershipFamily.objects.create(
            group=self.object,
            student=self.request.user.student,
            role='2A+'
        )
        return redirect('family:update', self.object.pk)
    


class DetailFamilyView(LoginRequiredMixin, DetailView):
    pass


class UpdateFamilyView(UserIsAdmin, TemplateView):
    template_name = 'family/edit.html'

    def get_family(self):
        return Family.objects.get(pk=self.kwargs['pk'])

    def test_func(self):
        self.kwargs['slug'] = self.get_family().slug
        return super().test_func()
    
    def get(self, request, *args, **kwargs):
        context = {}
        context['update_form'] = UpdateFamilyForm(
            instance=self.get_family())
        context['members_form'] = Member2AFormset(
            instance=self.get_family(),
            queryset=MembershipFamily.objects.filter(role='2A+'))
        context['question_form'] = FamilyQuestionsForm(
            initial = self.get_family().get_answers_dict())
        return render(request, self.template_name, context=context)
    
    def post(self, request, *args, **kwargs):
        forms = [
            UpdateFamilyForm(request.POST, instance=self.get_family()),
            Member2AFormset(request.POST, instance=self.get_family(), queryset=MembershipFamily.objects.filter(role='2A+')),
            FamilyQuestionsForm(request.POST)]
        if forms[0].is_valid() and forms[1].is_valid() and forms[2].is_valid():
            # on vérifie le nb de membres
            non_subscribed_list = forms[0].cleaned_data['non_subscribed_members']
            if non_subscribed_list:
                nb_non_subscribed = len((non_subscribed_list).split(','))
            else:
                nb_non_subscribed = 0
            nb_subscribed = 0
            for form in forms[1]:
                if hasattr(form.instance,'student'): nb_subscribed += 1
            nb_tot = nb_subscribed + nb_non_subscribed
            if nb_tot <= 7 and nb_tot >= 3:
                # on vérifie que les membres ne sont pas déjà dans une famille
                membres_doublon = []
                for form in forms[1]:
                    if hasattr(form.instance,'student'):
                        if form.instance.student.family_set.filter(year=date.today().year).exclude(pk=self.get_family().pk):
                            membres_doublon.append(form.instance.student.alphabetical_name)
                if not membres_doublon:
                    # c'est bon on sauvegarde !
                    for form in forms[1]: 
                        form.instance.role = '2A+'
                        form.instance.admin = True
                    forms[0].save()
                    forms[1].save()
                    forms[2].save(self.get_family())
                    messages.success(request, "Les informations ont bien été enregistrées !")
                    return redirect('family:update', self.get_family().pk)
                else:
                    messages.error(request, "Erreur : les membres suivants sont déjà dans une famille : "
                        + ', '.join(membres_doublon))
            else:
                messages.error(request, 'Erreur : une famille doit avoir minimum 3 membres \
                    et maximum 7 membres (vérifiez les noms du champ "Autres parrains")')
        else:
            messages.error(request, "OOOOUPS !!! Il y a une erreur...")
            print(forms[1].errors)
        context={'update_form':forms[0], 'members_form':forms[1], 'question_form':forms[2]}
        return render(request, self.template_name, context=context)



class QuestionnaryHomeView(LoginRequiredMixin, FormView):
    pass



class QuestionnaryPageView(LoginRequiredMixin, FormView):
    form_class = MemberQuestionsForm
    template_name = 'family/questionnary-page.html'

    def get_member(self):
        m = MembershipFamily.objects.get(
            student = self.request.user.student,
            group__year = date.today().year
        )
        return m
    
    def get_page(self):
        return QuestionPage.objects.get(order=self.kwargs['id'])
    
    def get_initial(self):
        self.intial = self.get_member().get_answers_dict(self.get_page())
        return self.intial
    
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs.update({'page': self.get_page()})
        return kwargs
    
    def form_valid(self, form):
        form.save(self.get_member())
        try:
            next_page = QuestionPage.objects.get(order=self.get_page().order + 1)
            return redirect('family:questionnary-page', next_page.order)
        except QuestionPage.DoesNotExist:
            messages.success(self.request, "🥳 Merci beaucoup ! Vos réponses ont bien été enregistrées !")
            return redirect('family:home')
    
    def form_invalid(self, form):
        messages.error(self.request, "OOOOUPS !!! Il y a une erreur...")
        return super().form_invalid(form)
    
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['page'] = self.get_page()
        return context

    
