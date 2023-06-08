"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[8786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),p=a(7392),u=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},9317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const o={last_update:{date:"2023-06-08 14:03:06 +0200",author:"Alexis Delage"},sidebar_position:3,description:"The Web framework for perfectionists with deadlines."},l="Django",i={unversionedId:"dev/guides/django",id:"dev/guides/django",title:"Django",description:"The Web framework for perfectionists with deadlines.",source:"@site/docs/dev/guides/django.md",sourceDirName:"dev/guides",slug:"/dev/guides/django",permalink:"/dev/guides/django",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/guides/django.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1686225786,formattedLastUpdatedAt:"Jun 8, 2023",sidebarPosition:3,frontMatter:{last_update:{date:"2023-06-08 14:03:06 +0200",author:"Alexis Delage"},sidebar_position:3,description:"The Web framework for perfectionists with deadlines."},sidebar:"sidebar",previous:{title:"Git Tutorial",permalink:"/dev/guides/git/"},next:{title:"React",permalink:"/dev/guides/react"}},s={},p=[{value:"Basic commands",id:"basic-commands",level:2},{value:"Database, models and migrations",id:"database-models-and-migrations",level:2},{value:"Create a new app",id:"create-a-new-app",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"django"},"Django"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django"},"Recommended Tutorial (MDN)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.djangoproject.com/"},"Official Documentation"))," (tip: the downloadable PDF is easier to use)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/django/django"},"Source Code"))," (tip: on Github, use the ",(0,r.kt)("kbd",null,".")," shortcut to open the code in VSCode)")),(0,r.kt)("h2",{id:"basic-commands"},"Basic commands"),(0,r.kt)("admonition",{title:"Reminder",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All the commands for django should be run from the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," directory.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Start the server:")," (the website is then accessible at ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000"),")",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run start\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run the django tests:")," (optionally for one app only)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run test [app_label]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create the database migration files:")," (optionally for one app only)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run makemigrations [app_label]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apply the migration files and update your database:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run migrate\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run any ",(0,r.kt)("inlineCode",{parentName:"strong"},"django")," command:")," (this command replace ",(0,r.kt)("inlineCode",{parentName:"li"},"django-admin")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"python manage.py"),"):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django <command>\n")))),(0,r.kt)("h2",{id:"database-models-and-migrations"},"Database, models and migrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structure of the database is defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"models.py")," files: each\n",(0,r.kt)("em",{parentName:"li"},"django app")," can have multiple tables, defined as python classes."),(0,r.kt)("li",{parentName:"ul"},"Whenever you make a change to your database's structure (basically each time\nyou modify one of the ",(0,r.kt)("inlineCode",{parentName:"li"},"models.py")," file), you need to create a migration file\nto detect the changes in the database structure. Hopefully, django can create\nthese files automatically with this command (replace ",(0,r.kt)("inlineCode",{parentName:"li"},"[app_label]")," with the\nlabel of your django app):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run makemigrations [app_label]\n"))),(0,r.kt)("li",{parentName:"ul"},"Then, you can apply these changes to your own database by running:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run migrate\n")))),(0,r.kt)("admonition",{title:"Some good practices",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Try to ",(0,r.kt)("strong",{parentName:"li"},"merge")," migration files into one file as much as possible: we\ntry to have as few migration files as possible (to do so, just ",(0,r.kt)("em",{parentName:"li"},"unapply"),"\nyour last migrations files, delete them, and recreate a new migration file)."),(0,r.kt)("li",{parentName:"ul"},"Be careful: you can't change migration files once they are uploaded to\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch on the server."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More on migrations..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Write custom migrations"),": you can write custom migrations, for example\nto transfer or copy data from one ",(0,r.kt)("em",{parentName:"li"},"table")," to another. First, create an empty\nmigration file with:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run makemigrations <app_label> --empty --name <file_name>\n")),"Then, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"migrations")," directory, and edit the new created file\nto implement your custom migrations (see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.1/howto/writing-migrations/"},"this documentation"),"\nabout how to write custom migrations)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apply only some migrations"),": you can specify\nwhich migration files to apply by specifying the app or the file:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run migrate <app_label> [migration_name]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unapply a migration"),": you can unapply a migration and reverse your database\nto the previous state. This is very useful when you want to merge migrations,\nfor example. To do so, just run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run migrate <app_label> <migration_name>\n")),"where ",(0,r.kt)("inlineCode",{parentName:"li"},"<migration_name>")," is the name of the migration just before the one\nyou want to unapply: this will reverse the state of your database to the state\njust after this migration. Note that you can also only specify the number of the\nmigration, and not the full name (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv run migrate event 0004"),"\nworks)."))),(0,r.kt)("h2",{id:"create-a-new-app"},"Create a new app"),(0,r.kt)("p",null,"In django, all functionalities are separated into ",(0,r.kt)("strong",{parentName:"p"},"apps"),". Each app correspond\nto a directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/apps")," folder."),(0,r.kt)("p",null,"To create a new app:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new empty app folder with the django command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django startapp <app_name>\n"))),(0,r.kt)("li",{parentName:"ol"},"Then move this new app folder to the main ",(0,r.kt)("inlineCode",{parentName:"li"},"apps")," folder, so as to have all\napps in the same place."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Inside your new app folder:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"urls.py")," script. You can copy the structure of ",(0,r.kt)("inlineCode",{parentName:"li"},"urls.py")," from other apps."),(0,r.kt)("li",{parentName:"ul"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"apps.py")," script, by replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"name = 'app_name'")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"name = 'apps.app_name'")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"strong"},"backend/config")," folder:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"urls.py")," script, add a namespace for your app like this:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"url('app_name/', include('apps.app_name.urls', namespace='app_name')),\n")),"This will link the url router to your urls.py script in the app you created."),(0,r.kt)("li",{parentName:"ul"},"Then add your app in ",(0,r.kt)("inlineCode",{parentName:"li"},"settings/base.py"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"COMMON_APPS = [ 'apps.app_name', ]\n"))))),(0,r.kt)("li",{parentName:"ol"},"Finally, we need to update your database:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run migrate\n")))))}c.isMDXComponent=!0}}]);