"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[8699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={last_update:{date:"2023-10-05 11:35:07 +0200",author:"Alexis Delage"},sidebar_position:3},i="Staging server",s={unversionedId:"dev/advanced-guides/staging-server",id:"dev/advanced-guides/staging-server",title:"Staging server",description:"Available at dev.nantral-platform.fr.",source:"@site/docs/dev/advanced-guides/staging-server.md",sourceDirName:"dev/advanced-guides",slug:"/dev/advanced-guides/staging-server",permalink:"/dev/advanced-guides/staging-server",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/advanced-guides/staging-server.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1696498507,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:3,frontMatter:{last_update:{date:"2023-10-05 11:35:07 +0200",author:"Alexis Delage"},sidebar_position:3},sidebar:"sidebar",previous:{title:"Database",permalink:"/dev/advanced-guides/database/"},next:{title:"Using Docker",permalink:"/dev/advanced-guides/using-docker"}},l={},d=[{value:"1. Purpose",id:"1-purpose",level:2},{value:"2. How to test my code on the staging server",id:"2-how-to-test-my-code-on-the-staging-server",level:2},{value:"3. How to remove modifications on the staging server",id:"3-how-to-remove-modifications-on-the-staging-server",level:2},{value:"How to reset the staging branch (advanced)",id:"how-to-reset-the-staging-branch-advanced",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"staging-server"},"Staging server"),(0,n.kt)("p",null,"Available at ",(0,n.kt)("a",{parentName:"p",href:"https://dev.nantral-platform.fr"},"dev.nantral-platform.fr"),"."),(0,n.kt)("h2",{id:"1-purpose"},"1. Purpose"),(0,n.kt)("p",null,"The purpose of this staging server is to test modifications (and especially database modifications) before adding them to the main server. This is organised that way:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Github branch"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"master"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.nantral-platform.fr"},"www.nantral-platform.fr")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The main site for users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"staging"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://dev.nantral-platform.fr"},"dev.nantral-platform.fr")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The dev site for testing")))),(0,n.kt)("h2",{id:"2-how-to-test-my-code-on-the-staging-server"},"2. How to test my code on the staging server"),(0,n.kt)("p",null,"If you want to test your code on the staging server, you just have to create a pull request on Github, and select the branch ",(0,n.kt)("inlineCode",{parentName:"p"},"staging")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," to merge in."),(0,n.kt)("p",null,"Then github automatically deploys your code on the staging server, the same way it does for the main server."),(0,n.kt)("p",null,"Note that each time you deploy a new version on the staging server, the database of the staging server is deleted: it is replaced by a ",(0,n.kt)("strong",{parentName:"p"},"copy")," of the ",(0,n.kt)("strong",{parentName:"p"},"database")," from the main server. That way, you can test your modifications to check if your code is compatible with the main server database and will not erased some part of this database."),(0,n.kt)("h2",{id:"3-how-to-remove-modifications-on-the-staging-server"},"3. How to remove modifications on the staging server"),(0,n.kt)("p",null,"Sometimes, you might want to remove the modifications you have pushed on the staging server (but not on the main server). You have two ways to do this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create new commits which revert your previous commits, and merge them on the staging branch"),(0,n.kt)("li",{parentName:"ol"},"If you have way too much commits, you may prefer to reset the staging branch (see below).")),(0,n.kt)("h3",{id:"how-to-reset-the-staging-branch-advanced"},"How to reset the staging branch (advanced)"),(0,n.kt)("p",null,"You have to do it directly on the production server, so please be carefull!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect to the server via ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh")),(0,n.kt)("li",{parentName:"ul"},"Go to the staging directory: ",(0,n.kt)("inlineCode",{parentName:"li"},"cd nantralPlatform-staging/")),(0,n.kt)("li",{parentName:"ul"},"Update the master branch: ",(0,n.kt)("inlineCode",{parentName:"li"},"git checkout master")," then ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")),(0,n.kt)("li",{parentName:"ul"},"And then reset the staging branch on the server:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git checkout staging")," then"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard master"))))),(0,n.kt)("p",null,"Then on your own computer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update the master branch: ",(0,n.kt)("inlineCode",{parentName:"li"},"git checkout master")," then ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")),(0,n.kt)("li",{parentName:"ul"},"And then reset the staging branch again on your computer:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git checkout staging")," then"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard master")))),(0,n.kt)("li",{parentName:"ul"},"Finally send the reset operation to the github repository: ",(0,n.kt)("inlineCode",{parentName:"li"},"git push --force")),(0,n.kt)("li",{parentName:"ul"},"Then you can go to see the ",(0,n.kt)("em",{parentName:"li"},"Actions")," page on Github: it should redeploys automatically the staging server")))}m.isMDXComponent=!0}}]);