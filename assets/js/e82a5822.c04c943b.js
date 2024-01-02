"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8,last_update:{date:"2023-12-12 20:33:14 +0100",author:"Alexis Delage"}},l="Debugging",o={unversionedId:"dev/guides/debugging",id:"dev/guides/debugging",title:"Debugging",description:"Welcome to the hell of all programmers! Don't worry, we will help you to get out",source:"@site/docs/dev/guides/debugging.md",sourceDirName:"dev/guides",slug:"/dev/guides/debugging",permalink:"/dev/guides/debugging",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/guides/debugging.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1702409594,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,last_update:{date:"2023-12-12 20:33:14 +0100",author:"Alexis Delage"}},sidebar:"sidebar",previous:{title:"Integration Tests",permalink:"/dev/guides/tests/integration-tests"},next:{title:"Advanced Guides",permalink:"/dev/advanced-guides/"}},s={},u=[{value:"Common issues on the backend",id:"common-issues-on-the-backend",level:2},{value:"Check-list",id:"check-list",level:3},{value:"If you&#39;re still stuck",id:"if-youre-still-stuck",level:3},{value:"Common issues on the frontend",id:"common-issues-on-the-frontend",level:2},{value:"Check-list",id:"check-list-1",level:3},{value:"If you&#39;re still stuck",id:"if-youre-still-stuck-1",level:3},{value:"Other issues",id:"other-issues",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Welcome to the hell of all programmers! Don't worry, we will help you to get out\nof your bug."),(0,r.kt)("admonition",{title:"The Debugging Guide",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you didn't read this guide before, well, you ",(0,r.kt)("strong",{parentName:"p"},"MUST")," begin with it. It will\nsave you a lot of time!"),(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://debug.guide/"},"The Debugging Guide: 20 simple steps to debug anything"))," \ud83d\udc48")),(0,r.kt)("h2",{id:"common-issues-on-the-backend"},"Common issues on the backend"),(0,r.kt)("p",null,"Here is a list of common problems you should check if you encounter a problem."),(0,r.kt)("h3",{id:"check-list"},"Check-list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Did you launch the backend with ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv run start")," ?"),(0,r.kt)("li",{parentName:"ul"},"Did you install the latest dependencies with ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv install"),"?"),(0,r.kt)("li",{parentName:"ul"},"Did you apply the latest migrations with ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv run migrate"),"?"),(0,r.kt)("li",{parentName:"ul"},"Is the server running?")),(0,r.kt)("h3",{id:"if-youre-still-stuck"},"If you're still stuck"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reset the dependencies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"remove the ",(0,r.kt)("inlineCode",{parentName:"li"},".venv")," folder and all of its content"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv install")))),(0,r.kt)("li",{parentName:"ul"},"Reset the database:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rename your database file (for example ",(0,r.kt)("inlineCode",{parentName:"li"},"db.sqlite3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"db.old.sqlite3"),")"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv run migrate")," to create a new database"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pipenv run django createsuperuser")," to create a new admin user"),(0,r.kt)("li",{parentName:"ul"},"Follow ",(0,r.kt)("a",{parentName:"li",href:"/dev/get-started/setup-project/#start-the-server"},"this guide")," to recreate your account")))),(0,r.kt)("h2",{id:"common-issues-on-the-frontend"},"Common issues on the frontend"),(0,r.kt)("p",null,"Here is a list of common problems you should check if you encounter a problem."),(0,r.kt)("h3",{id:"check-list-1"},"Check-list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Did you launch the frontend with ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," ?"),(0,r.kt)("li",{parentName:"ul"},"Did you install the latest dependencies with ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install"),"?"),(0,r.kt)("li",{parentName:"ul"},"Is the server running?")),(0,r.kt)("h3",{id:"if-youre-still-stuck-1"},"If you're still stuck"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reset the ",(0,r.kt)("em",{parentName:"li"},"vite")," builder:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"remove the ",(0,r.kt)("inlineCode",{parentName:"li"},".vite")," folder (sometimes in ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),") and all of its content"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," to make a clean build"))),(0,r.kt)("li",{parentName:"ul"},"Reset the dependencies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," folder and all of its content"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm ci")," to make a clean Install")))),(0,r.kt)("h2",{id:"other-issues"},"Other issues"),(0,r.kt)("p",null,"Local issues can be hard to track down. Don't hesitate to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ask Google/StackOverflow"),": you will likely find an answer there.\nBe sure to make your search in English to get more results."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ask an IA like ",(0,r.kt)("em",{parentName:"strong"},"ChatGPT")),": if you give enough context, it can\nbe very useful and save you a lot of time!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ask a human"),": if you are stuck, you can ask for help on the Discord server\nin the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"#je-gal\xe8re-avec-un-truc"))," channel.\nBe sure to give enough context to your issue, and explain what you have\nalready tried.\nYou can also ask a teacher.")))}m.isMDXComponent=!0}}]);