"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[8453],{2623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(5893),i=n(1151),s=n(2991);const a={sidebar_position:4},c="Administrator Guides",o={id:"dev/admin/index",title:"Administrator Guides",description:"More advanced guides for Nantral Platform administrators, to deal with",source:"@site/docs/dev/admin/index.md",sourceDirName:"dev/admin",slug:"/dev/admin/",permalink:"/dev/admin/",draft:!1,unlisted:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/admin/index.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1697063901,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Manage dependencies",permalink:"/dev/advanced-guides/dependencies"},next:{title:"Backup the database",permalink:"/dev/admin/backup-db"}},d={},l=[];function m(e){const t={em:"em",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"administrator-guides",children:"Administrator Guides"}),"\n",(0,r.jsxs)(t.p,{children:["More advanced guides for ",(0,r.jsx)(t.em,{children:"Nantral Platform"})," administrators, to deal with\nthe server."]}),"\n","\n","\n",(0,r.jsx)(s.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var r=n(512),i=n(3438),s=n(3692),a=n(3919),c=n(5999),o=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:i,description:s}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);