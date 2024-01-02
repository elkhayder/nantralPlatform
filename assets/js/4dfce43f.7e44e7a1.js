"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[5432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"I18n",last_update:{date:"2023-12-12 20:33:14 +0100",author:"Alexis Delage"},sidebar_position:6,description:"Translations and Internationalisation"},s="Translation and Internationalisation (i18n)",u={unversionedId:"dev/guides/i18n",id:"dev/guides/i18n",title:"I18n",description:"Translations and Internationalisation",source:"@site/docs/dev/guides/i18n.md",sourceDirName:"dev/guides",slug:"/dev/guides/i18n",permalink:"/dev/guides/i18n",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/guides/i18n.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1702409594,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:6,frontMatter:{title:"I18n",last_update:{date:"2023-12-12 20:33:14 +0100",author:"Alexis Delage"},sidebar_position:6,description:"Translations and Internationalisation"},sidebar:"sidebar",previous:{title:"Rest API",permalink:"/dev/guides/frameworks/rest-api"},next:{title:"Testing",permalink:"/dev/guides/tests/"}},p={},d=[{value:"Translations in React",id:"translations-in-react",level:2},{value:"1. Translate a text",id:"1-translate-a-text",level:3},{value:"2. Format dates",id:"2-format-dates",level:3},{value:"3. Format numbers",id:"3-format-numbers",level:3},{value:"Translations in Django",id:"translations-in-django",level:2},{value:"1. Use the <code>gettext</code> method for all texts",id:"1-use-the-gettext-method-for-all-texts",level:3},{value:"2. Write the Translations",id:"2-write-the-translations",level:3},{value:"3. Compile the translations",id:"3-compile-the-translations",level:3},{value:"Adding a new language",id:"adding-a-new-language",level:2},{value:"Add the language in the front end",id:"add-the-language-in-the-front-end",level:3},{value:"Add the language in the back end",id:"add-the-language-in-the-back-end",level:3}],m={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"translation-and-internationalisation-i18n"},"Translation and Internationalisation (i18n)"),(0,r.kt)("p",null,"Internationalisation (or i18n for short) is the concept of adapting a website\nfor another country, language or culture. It regroups the translations of text,\nbut also the format of dates and hours for example."),(0,r.kt)("h2",{id:"translations-in-react"},"Translations in React"),(0,r.kt)("h3",{id:"1-translate-a-text"},"1. Translate a text"),(0,r.kt)("p",null,"In the front end, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://react.i18next.com/"},"i18next")," library to make translations.\nTo use it, just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTranslation")," hook in your component and then use it to call a key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// do not use { useTranslation } from \'react-i18next\'!!!\nimport { useTranslation } from "#shared/i18n/useTranslation";\n\nfunction HomePage(): JSX.Element {\n  const { t } = useTranslation();\n  const myName = "John";\n\n  return <p>{t("home.welcome", { firstName: myName })}</p>;\n}\n')),(0,r.kt)("p",null,"Then, add your translations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend/src/translations/<lang>.json")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// fr-FR.json\n{\n  "home": {\n    "welcome": "Bienvenue {{firstName}}\xa0!"\n  }\n}\n')),(0,r.kt)("h3",{id:"2-format-dates"},"2. Format dates"),(0,r.kt)("p",null,"To format a date, use the method ",(0,r.kt)("inlineCode",{parentName:"p"},"formatDate(date: Date, options: Intl.DateTimeFormatOptions)"),"\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTranslation")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslation } from "#shared/i18n/useTranslation";\n\nfunction MyComponent(): JSX.Element {\n  const { formatDate } = useTranslation();\n  const today = new Date(); // get the date of today\n\n  return <p>{formatDate(today, { dateStyle: "long" })}</p>;\n}\n\n// returns "17 f\xe9vrier 2023"\n')),(0,r.kt)("p",null,"The available options for formatting are listed here:\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options"},"DateTimeFormatOptions"),"."),(0,r.kt)("h3",{id:"3-format-numbers"},"3. Format numbers"),(0,r.kt)("p",null,"There are also a method ",(0,r.kt)("inlineCode",{parentName:"p"},"formatNumber")," in the hook that you can use, to format\nnumber with units, currency, or as ordinals (first, second, etc...). See the\nMDN reference for the options here: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options"},"NumberFormatOptions"),"."),(0,r.kt)("h2",{id:"translations-in-django"},"Translations in Django"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.1/topics/i18n/translation/"},"Django Documentation on Text Translation"))),(0,r.kt)("h3",{id:"1-use-the-gettext-method-for-all-texts"},"1. Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"gettext")," method for all texts"),(0,r.kt)("p",null,"In your code, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gettext")," method to signal to django that the text should\nbe translated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from django.utils.translation import gettext as _\n\ndef my_view(request):\n    output = (\n      _("Welcome on Nantral Platform %(name)s!")\n      % {\'name\': request.user.first_name}\n    )\n    return HttpResponse(output)\n\n# returns "Welcome on Nantral Platform John!"\n')),(0,r.kt)("p",null,"For texts that are ",(0,r.kt)("strong",{parentName:"p"},"NOT inside a function"),", you must use\n",(0,r.kt)("inlineCode",{parentName:"p"},"gettext_lazy")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"gettext"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"{2}","{2}":!0},'# use gettext_lazy instead of gettext!\nfrom django.utils.translation import gettext_lazy as _\n\nclass Group(models.Model):\n    name = models.CharField(_("Group Name"))\n')),(0,r.kt)("admonition",{title:"Conventions",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"In your code, write texts in ",(0,r.kt)("strong",{parentName:"li"},"English")),(0,r.kt)("li",{parentName:"ul"},"For other languages, like ",(0,r.kt)("strong",{parentName:"li"},"French"),", write the translations in the ",(0,r.kt)("inlineCode",{parentName:"li"},".po")," files\n(see the following section)"))),(0,r.kt)("h3",{id:"2-write-the-translations"},"2. Write the Translations"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"First run: install ",(0,r.kt)("code",null,"gettext"),"!!!"),(0,r.kt)("p",null,"To use the django commands for translations, you have to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"gettext")," program."),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gettext")," utility is not really supported on Windows. You can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.1/topics/i18n/translation/#gettext-on-windows"},"django documentation"),",\nwhich proposes some alternatives. However, we strongly recommend you to use\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/windows/wsl/install"},"WSL")," instead, so as to run\n",(0,r.kt)("em",{parentName:"p"},"Nantral Platform")," in a Linux machine (in your Windows).")),(0,r.kt)(l.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},(0,r.kt)("p",null,"Run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install gettext\n"))),(0,r.kt)(l.Z,{value:"lin",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"Run these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install gettext\n"))))),(0,r.kt)("p",null,"First, create or update the ",(0,r.kt)("inlineCode",{parentName:"p"},".po")," file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go into the app where you want to add translations:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/<app_name>\n"))),(0,r.kt)("li",{parentName:"ul"},"Create or update the ",(0,r.kt)("inlineCode",{parentName:"li"},".po")," files for the French translations:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django-admin makemessages -l fr\n"))),(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},".po")," file created in ",(0,r.kt)("inlineCode",{parentName:"li"},"locale/fr/LC_MESSAGES"),",\nand fill in all the translations. You can also use a graphical editor,\nlike ",(0,r.kt)("a",{parentName:"li",href:"https://poedit.net/"},"Poedit"),".")),(0,r.kt)("h3",{id:"3-compile-the-translations"},"3. Compile the translations"),(0,r.kt)("p",null,"Once you have finished, it's time to compile the translations! Just run, in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django compilemessages -l fr\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use ",(0,r.kt)("a",{parentName:"p",href:"https://poedit.net/"},"Poedit"),", the compilation is automatically\ndone when you save your modifications.")),(0,r.kt)("p",null,"That's it! You can now run the website, and the translations should adapt to the\nselected language!"),(0,r.kt)("h2",{id:"adding-a-new-language"},"Adding a new language"),(0,r.kt)("p",null,"If you want to add a new language, read carefully the following steps."),(0,r.kt)("h3",{id:"add-the-language-in-the-front-end"},"Add the language in the front end"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new file in ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend/src/translations/<lang>.json")," with the\ninternational code of the language (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"fr-FR.json")," for French).\nMake a copy of one of the existing file and translate all texts."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"src/shared/i18n/config.ts"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add the language code in the ",(0,r.kt)("inlineCode",{parentName:"li"},"languages")," array:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const languages = ["fr-FR", "en-GB", "en-US"] as const;\n'))),(0,r.kt)("li",{parentName:"ul"},"Import the JSON file:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import translationFr from "./fr-FR.json";\n'))),(0,r.kt)("li",{parentName:"ul"},"Add it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," key:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"resources: {\n 'fr-FR': { translation: translationFr },\n},\n"))))),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"src/shared/i18n/useTranslation.ts"),", import the locale from ",(0,r.kt)("inlineCode",{parentName:"li"},"date-fns")," and\nmap it to the language previously defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"languages")," array."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"src/theme.ts"),", import the locale from ",(0,r.kt)("inlineCode",{parentName:"li"},"@mui/x-date-pickers")," and map it\nagain to the same language."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"src/shared/ckeditor/getCKEditorLanguage.ts"),", map again the language to\na CKEditor language."),(0,r.kt)("li",{parentName:"ol"},"Finally, in ",(0,r.kt)("inlineCode",{parentName:"li"},"vite.config.ts"),", declare the ckeditor language to import in the\n",(0,r.kt)("inlineCode",{parentName:"li"},"ckeditor5()")," function from the CKEditor5 plugin.")),(0,r.kt)("h3",{id:"add-the-language-in-the-back-end"},"Add the language in the back end"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"config/settings/base.py"),", update the ",(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGES")," key:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"LANGUAGES = [\n   ('fr', \"Fran\xe7ais\"),\n   ('en', \"English\"),\n   # your language here\n]\n"))),(0,r.kt)("li",{parentName:"ol"},"Then create all the new ",(0,r.kt)("inlineCode",{parentName:"li"},".po")," files for each app:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/<app_name>\npipenv run django-admin makemessages -l <your_language_code>\n"))),(0,r.kt)("li",{parentName:"ol"},"Write all the translations, and finally compile them:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django compilemessages -l <you_language_code>\n")))),(0,r.kt)("p",null,"Congratulations \ud83e\udd73 You added a new language!"))}h.isMDXComponent=!0}}]);