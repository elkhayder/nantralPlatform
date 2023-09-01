from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
from django.utils.timezone import get_current_timezone

from rest_framework import status

from apps.group.models import Group, GroupType
from apps.utils.utest import TestMixin

from .models import Event


class EventTestCase(TestCase, TestMixin):
    def setUp(self) -> None:
        self.user_setup()
        t = GroupType.objects.create(name="T1", slug="t1")
        self.g = Group.objects.create(name="TestClubForEvents", group_type=t)
        self.g.members.add(
            self.u2.student,
            through_defaults={'admin': True}
        )
        self.event1 = Event.objects.create(
            title="A test event 1",
            group=self.g,
            start_date=timezone.now(),
            description="Test Desc",
            location="Amphi A")

        self.event2 = Event.objects.create(
            title="A test event 2",
            group=self.g,
            start_date=timezone.datetime(
                2020, 1, 2, 3, 4, tzinfo=get_current_timezone()),
            description="Test Desc",
            location="Amphi C")

    def tearDown(self):
        self.user_teardown()
        GroupType.objects.filter(slug="t1").delete()
        Event.objects.all().delete()

    def test_list(self):
        url = reverse("event:event-list")
        # test non-authenticated
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        # test authenticated user
        self.client.force_login(self.u2)
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        self.assertEqual(len(res.data.get('results')), 2)

    def test_detail(self):
        url = reverse("event:event-detail", args=[self.event1.pk])
        # test non-authenticated
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        # test authenticated user
        self.client.force_login(self.u2)
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_post(self):
        url = reverse("event:event-list")
        data = {
            'title': 'test',
            'description': 'this is a description',
            'location': 'here',
            'start_date': timezone.datetime(
                2023, 7, 2, 10, 30,
                tzinfo=get_current_timezone()),
            'end_date': timezone.datetime(
                2023, 7, 2, 11, 30,
                tzinfo=get_current_timezone()),
            'publicity': 'Pub',
            'group': self.g.pk,
            'max_participant': 20,
            'start_registration': timezone.datetime(
                2023, 7, 1, 10, 0,
                tzinfo=get_current_timezone()),
            'end_registration': timezone.datetime(
                2023, 7, 1, 11, 0,
                tzinfo=get_current_timezone()),
            'form_url': 'http://localhost:8000'
        }
        # test non-authenticated
        res = self.client.post(url, data=data)
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        # test authenticated but not admin
        self.client.force_login(self.u3)
        res = self.client.post(url, data=data)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        # test authenticated
        self.client.force_login(self.u2)
        res = self.client.post(url, data=data)
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        # test wrong end_date
        res = self.client.post(
            url,
            data={**data, 'end_date': timezone.datetime(2023, 7, 2, 9, 30)})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        # test wrong end_registration
        res = self.client.post(
            url,
            data={**data, 'end_registration': timezone.datetime(2023, 7, 1, 9)})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        # test wrong max_participant
        res = self.client.post(
            url,
            data={**data, 'max_participant': -3})
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_put(self):
        url = reverse("event:event-detail", args=[self.event1.pk])
        data = {
            'title': 'test',
            'description': 'this is a description',
            'location': 'here',
            'publicity': 'Pub',
            'group': self.g.pk,
            'max_participant': 20,
            'form_url': 'http://localhost:8000'
        }
        # test non-authenticated
        res = self.client.put(url, files=data)
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        # test authenticated user
        self.client.force_login(self.u2)
        res = self.client.put(url, data=data)
        print(res.json())
        self.assertEqual(res.status_code, status.HTTP_200_OK)
