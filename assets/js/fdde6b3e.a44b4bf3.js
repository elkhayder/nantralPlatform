"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[7547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={last_update:{date:"2023-02-18 19:28:38 +0100",author:"Alexis Delage"},sidebar_position:5,description:"How to share data between the front and the back end"},l="Rest API",o={unversionedId:"dev/guides/rest-api",id:"dev/guides/rest-api",title:"Rest API",description:"How to share data between the front and the back end",source:"@site/docs/dev/guides/rest-api.md",sourceDirName:"dev/guides",slug:"/dev/guides/rest-api",permalink:"/dev/guides/rest-api",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/guides/rest-api.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1676744918,formattedLastUpdatedAt:"Feb 18, 2023",sidebarPosition:5,frontMatter:{last_update:{date:"2023-02-18 19:28:38 +0100",author:"Alexis Delage"},sidebar_position:5,description:"How to share data between the front and the back end"},sidebar:"sidebar",previous:{title:"React",permalink:"/dev/guides/react"},next:{title:"Tests",permalink:"/dev/guides/tests"}},s={},d=[{value:"How to create an API endpoint",id:"how-to-create-an-api-endpoint",level:2},{value:"The Model",id:"the-model",level:3},{value:"The Serializer",id:"the-serializer",level:3},{value:"The ViewSet",id:"the-viewset",level:3},{value:"The urls",id:"the-urls",level:3},{value:"How to use an API endpoint",id:"how-to-use-an-api-endpoint",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-api"},"Rest API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://blog.logrocket.com/creating-an-app-with-react-and-django/"},"Quick tutorial on the Django REST Framework")))),(0,r.kt)("iframe",{class:"youtube",src:"https://www.youtube-nocookie.com/embed/-MTSQjw5DrM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"how-to-create-an-api-endpoint"},"How to create an API endpoint"),(0,r.kt)("p",null,"Let's see how to create an API endpoint with the example of events."),(0,r.kt)("h3",{id:"the-model"},"The Model"),(0,r.kt)("p",null,"First, create a simple model in the database with some fields. We will use here the example of events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="models.py"',title:'"models.py"'},'from django.db import models\n\nclass Event(models.Model):\n    title = models.CharField("Titre", max_length=50)\n    begin_date = models.DateTimeField("D\xe9but")\n    end_date = models.DateTimeField("Fin")\n    participants = models.ManyToManyField(\n        to=Student, verbose_name=\'Participants\', blank=True)\n')),(0,r.kt)("h3",{id:"the-serializer"},"The Serializer"),(0,r.kt)("p",null,"The serializer is an object which will transform the data from our database\nto JSON so that they can be sent to the front end. We can add extra fields\n(like ",(0,r.kt)("inlineCode",{parentName:"p"},"is_participating")," here), and add a custom validation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="serializers.py"',title:'"serializers.py"'},"from rest_framework import serializers, exceptions\nfrom .models import Event\n\nclass EventSerializer(serializers.ModelSerializer):\n    is_participating = serializers.SerializerMethodField()\n\n    class Meta:\n        model = Event\n        fields = ['title', 'begin_date', 'end_date', 'is_participating']\n\n    def get_is_participating(self, obj: Event) -> bool:\n        # get the 'is_participating' field\n        student = self.context['request'].user.student\n        return obj.participants.contains(student)\n\n    def validate(self, data: dict[str, any]) -> dict[str, any]:\n        \"\"\"Check that end_date is after begin_date\"\"\"\n        if data['begin_date'] > data['end_date']:\n            # raise exception if not valid\n            raise exceptions.ValidationError(\n                \"The end date must be after the begin date.\")\n        # if valid, returns data\n        return data\n")),(0,r.kt)("p",null,"For more details about Serializers, read the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/serializers/"},"Django REST Framework Documentation"),"."),(0,r.kt)("h3",{id:"the-viewset"},"The ViewSet"),(0,r.kt)("p",null,"Then, we will create a ViewSet to have all views to manipulate the serializer.\nWe add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Permission")," class, which allows to manage the event only if the\nuser is a superadmin."),(0,r.kt)("p",null,"The ViewSet will automatically creates default views for the Events (see the\ntable below)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="api_views.py"',title:'"api_views.py"'},"from rest_framework import permissions, viewsets\nfrom django.db import QuerySet\nfrom .models import Event\nfrom .serializers import EventSerializer\n\n\nclass EventPermission(permissions.BasePermission):\n\n    def has_permission(self, request, view) -> bool:\n        # permission check run for all views, optional\n        return True\n\n    def has_object_permission(self, request, view, obj: Event) -> bool:\n        # this method is only called on views that make actions on ONE object.\n        if request.method in permissions.SAFE_METHODS:\n            # if the method is a safe method (GET, HEAD, OPTIONS), i.e. it\n            # does not modify the database, then allow\n            return True\n        # else, if the method ask to modify the database (POST, PUT, PATCH, DELETE),\n        # then check that the user is an admin\n        return request.user.is_superuser\n\n\nclass EventViewSet(viewsets.ModelViewSet):\n    # check the custom permission and the default authentification permission\n    permission_classes = [permissions.IsAuthenticated, EventPermission]\n    serializer_class = EventSerializer\n\n    def get_queryset(self) -> QuerySet[Event]:\n        # which objects to get for all views (when we call a view on one object,\n        # the object is selected in this list of objects)\n        return Event.objects.all()\n")),(0,r.kt)("p",null,"For more details about ViewSet, read the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/viewsets/"},"Django REST Framework Documentation"),"."),(0,r.kt)("h3",{id:"the-urls"},"The urls"),(0,r.kt)("p",null,"Finally, let's create urls to access our views (we suppose that these urls\nare in the ",(0,r.kt)("inlineCode",{parentName:"p"},"api_urls.py")," file of the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," app)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="api_urls.py"',title:'"api_urls.py"'},"from rest_framework import routers\nfrom .api_views import EventViewSet\n\nrouter = routers.DefaultRouter()\nrouter.register('event', EventViewSet, basename='event')\nurlpatterns = router.urls\n")),(0,r.kt)("p",null,"So what are the available urls now?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method and URL"),(0,r.kt)("th",{parentName:"tr",align:null},"View (or\xa0action)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"(1)"),(0,r.kt)("th",{parentName:"tr",align:null},"(2)"),(0,r.kt)("th",{parentName:"tr",align:null},"(3)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET ",(0,r.kt)("inlineCode",{parentName:"td"},"/api/event/event/")),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the list of all events defined by the queryset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST ",(0,r.kt)("inlineCode",{parentName:"td"},"/api/event/event/")),(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new Event object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET ",(0,r.kt)("inlineCode",{parentName:"td"},"/api/event/event/<id>/")),(0,r.kt)("td",{parentName:"tr",align:null},"retrieve"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the data of one event by its id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT ",(0,r.kt)("inlineCode",{parentName:"td"},"/api/event/event/<id>/")),(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the data of an event"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE ",(0,r.kt)("inlineCode",{parentName:"td"},"/api/event/event/<id>/")),(0,r.kt)("td",{parentName:"tr",align:null},"destroy"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the event from the database"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(1) Views that call the ",(0,r.kt)("inlineCode",{parentName:"li"},"has_permission")," method of the Permission class."),(0,r.kt)("li",{parentName:"ul"},"(2) Views that call the ",(0,r.kt)("inlineCode",{parentName:"li"},"has_object_permission")," method of the Permission class."),(0,r.kt)("li",{parentName:"ul"},"(3) Views that call the ",(0,r.kt)("inlineCode",{parentName:"li"},"validate")," method of the Serializer class.")),(0,r.kt)("admonition",{title:"Custom views",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also add your custom actions (or views) on a ViewSet: see the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing"},"Django REST Framework documentation"),".")),(0,r.kt)("h2",{id:"how-to-use-an-api-endpoint"},"How to use an API endpoint"),(0,r.kt)("p",null,"Now, let's see how to use our new API endpoint in a React component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'},"import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\nimport snakeToCamelCase from '../utils/snakeToCamelCase';\n\ninterface Event {\n    title: string;\n    beginDate: Date;\n    endDate: Date;\n    isParticipating: boolean;\n}\n\nfunction MyComponent(props: {}): JSX.Element {\n    const [ events, setEvents ] = useState<Event[]>([]);\n    const [ loadState, setLoadState ] = useState<'load' | 'success' | 'fail'>('load');\n\n    // use useEffect to fetch the API only the first time the component is rendered\n    useEffect(() => {\n        axios.get<Event[]>('/api/event/event/')\n        .then((res) => {\n            // get data\n            const eventList = res.data;\n            // convert the format of the keys from snake_case to camelCase, and convert\n            // dates to Date objects (other types are automatically converted)\n            snakeToCamelCase(eventList, {beginDate: 'Date', endDate: 'Date'});\n            // update the state variables\n            setEvents(eventList);\n            setLoadState('success');\n        })\n        .catch(() => setLoadState('fail'));  // if error\n    }, []);\n\n    if (loadState === 'load')\n        return <p>Chargement en cours... \u23f3</p>\n\n    if (loadState === 'fail')\n        return <p>\xc9chec du chargement \ud83d\ude22</p>\n    \n    // render the list of titles of the events\n    return (\n        <ul>\n            {events.map((e) =>\n                <li>{e.title}</li>\n            )}\n        </ul>\n    );\n}\n")),(0,r.kt)("p",null,"Some explanations on this code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we declare the imports and interfaces."),(0,r.kt)("li",{parentName:"ul"},"Then, we declare the state variable (",(0,r.kt)("inlineCode",{parentName:"li"},"events"),") where we will stock the result of the API call."),(0,r.kt)("li",{parentName:"ul"},"Then we call our API with ",(0,r.kt)("inlineCode",{parentName:"li"},"axios"),". We obtain a list like this:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[ { title: 'Title 1', begin_date: '2022-01-01T16:54:000Z', ...}, ...]\n"))),(0,r.kt)("li",{parentName:"ul"},"To respect javascript conventions, we change the format of the keys\nand convert dates from string to Date objects with the ",(0,r.kt)("inlineCode",{parentName:"li"},"snakeToCamelCase")," function:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[ { title: 'Title 1', beginDate: Date('2022-01-01T16:54:000Z'), ...}, ...]\n"))),(0,r.kt)("li",{parentName:"ul"},"And finally we render the data.")))}u.isMDXComponent=!0}}]);