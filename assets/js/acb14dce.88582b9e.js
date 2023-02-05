"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[2174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Staging server",sidebar_position:4},i="Staging server",l={unversionedId:"dev/contribute/staging-server",id:"dev/contribute/staging-server",title:"Staging server",description:"Available at dev.nantral-platform.fr.",source:"@site/docs/dev/contribute/staging-server.md",sourceDirName:"dev/contribute",slug:"/dev/contribute/staging-server",permalink:"/docs/dev/contribute/staging-server",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/contribute/staging-server.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Staging server",sidebar_position:4},sidebar:"devSidebar",previous:{title:"Debugging",permalink:"/docs/dev/contribute/debugging"},next:{title:"Database",permalink:"/docs/dev/contribute/database"}},s={},p=[{value:"1. Purpose",id:"1-purpose",level:2},{value:"2. How to test my code on the staging server",id:"2-how-to-test-my-code-on-the-staging-server",level:2},{value:"3. How to remove modifications on the staging server",id:"3-how-to-remove-modifications-on-the-staging-server",level:2},{value:"How to reset the staging branch (advanced)",id:"how-to-reset-the-staging-branch-advanced",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"staging-server"},"Staging server"),(0,n.kt)("p",null,"Available at ",(0,n.kt)("a",{parentName:"p",href:"https://dev.nantral-platform.fr"},"dev.nantral-platform.fr"),"."),(0,n.kt)("h2",{id:"1-purpose"},"1. Purpose"),(0,n.kt)("p",null,"The purpose of this staging server is to test modifications (and especially database modifications) before adding them to the main server. This is organised that way:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Github branch"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Address"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"master"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.nantral-platform.fr"},"www.nantral-platform.fr")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The main site for users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"staging"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://dev.nantral-platform.fr"},"dev.nantral-platform.fr")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The dev site for testing")))),(0,n.kt)("h2",{id:"2-how-to-test-my-code-on-the-staging-server"},"2. How to test my code on the staging server"),(0,n.kt)("p",null,"If you want to test your code on the staging server, you just have to create a pull request on Github, and select the branch ",(0,n.kt)("inlineCode",{parentName:"p"},"staging")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," to merge in."),(0,n.kt)("p",null,"Then github automatically deploys your code on the staging server, the same way it does for the main server."),(0,n.kt)("p",null,"Note that each time you deploy a new version on the staging server, the database of the staging server is deleted: it is replaced by a ",(0,n.kt)("strong",{parentName:"p"},"copy")," of the ",(0,n.kt)("strong",{parentName:"p"},"database")," from the main server. That way, you can test your modifications to check if your code is compatible with the main server database and will not erased some part of this database."),(0,n.kt)("h2",{id:"3-how-to-remove-modifications-on-the-staging-server"},"3. How to remove modifications on the staging server"),(0,n.kt)("p",null,"Sometimes, you might want to remove the modifications you have pushed on the staging server (but not on the main server). You have two ways to do this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create new commits which revert your previous commits, and merge them on the staging branch"),(0,n.kt)("li",{parentName:"ol"},"If you have way too much commits, you may prefer to reset the staging branch (see below).")),(0,n.kt)("h3",{id:"how-to-reset-the-staging-branch-advanced"},"How to reset the staging branch (advanced)"),(0,n.kt)("p",null,"You have to do it directly on the production server, so please be carefull!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect to the server via ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh")),(0,n.kt)("li",{parentName:"ul"},"Go to the staging directory: ",(0,n.kt)("inlineCode",{parentName:"li"},"cd nantralPlatform-staging/")),(0,n.kt)("li",{parentName:"ul"},"Update the master branch: ",(0,n.kt)("inlineCode",{parentName:"li"},"git checkout master")," then ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")),(0,n.kt)("li",{parentName:"ul"},"And then reset the staging branch on the server:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git checkout staging")," then"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard master"))))),(0,n.kt)("p",null,"Then on your own computer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update the master branch: ",(0,n.kt)("inlineCode",{parentName:"li"},"git checkout master")," then ",(0,n.kt)("inlineCode",{parentName:"li"},"git pull")),(0,n.kt)("li",{parentName:"ul"},"And then reset the staging branch again on your computer:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git checkout staging")," then"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard master")))),(0,n.kt)("li",{parentName:"ul"},"Finally send the reset operation to the github repository: ",(0,n.kt)("inlineCode",{parentName:"li"},"git push --force")),(0,n.kt)("li",{parentName:"ul"},"Then you can go to see the ",(0,n.kt)("em",{parentName:"li"},"Actions")," page on Github: it should redeploys automatically the staging server")))}m.isMDXComponent=!0}}]);