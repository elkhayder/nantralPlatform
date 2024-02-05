"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[6408],{5574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(5893),i=n(1151),r=n(2991);const o={sidebar_position:7},c="Testing",a={id:"dev/guides/tests/index",title:"Testing",description:"Everything you need to know to test your code!",source:"@site/docs/dev/guides/tests/index.md",sourceDirName:"dev/guides/tests",slug:"/dev/guides/tests/",permalink:"/dev/guides/tests/",draft:!1,unlisted:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/guides/tests/index.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1697123156,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"I18n",permalink:"/dev/guides/i18n"},next:{title:"Types",permalink:"/dev/guides/tests/types"}},d={},l=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(t.p,{children:"Everything you need to know to test your code!"}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"You can run all the tests at once with the command:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"make test\n"})})]}),"\n",(0,s.jsx)("br",{}),"\n","\n","\n",(0,s.jsx)(r.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(512),i=n(3438),r=n(3692),o=n(3919),c=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(r.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:r}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),r&&(0,l.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const r=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,s.Z)("row",n),children:r.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);