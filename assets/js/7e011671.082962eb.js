"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[4437],{4087:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=a(5893),i=a(1151);const r={description:"A comprehensive description of how mails are handled on the server"},s="Email server",l={id:"dev/admin/emails",title:"Email server",description:"A comprehensive description of how mails are handled on the server",source:"@site/docs/dev/admin/emails.md",sourceDirName:"dev/admin",slug:"/dev/admin/emails",permalink:"/dev/admin/emails",draft:!1,unlisted:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/admin/emails.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1706649003,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{description:"A comprehensive description of how mails are handled on the server"},sidebar:"sidebar",previous:{title:"Debugging in production",permalink:"/dev/admin/debugging"},next:{title:"List of websites",permalink:"/dev/admin/website-list"}},d={},o=[{value:"Accessing the webmail",id:"accessing-the-webmail",level:2},{value:"Accessing the webmail administration page",id:"accessing-the-webmail-administration-page",level:2},{value:"Architecture details",id:"architecture-details",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"email-server",children:"Email server"}),"\n",(0,t.jsxs)(n.p,{children:["To be able to send and receive emails with the ",(0,t.jsx)(n.code,{children:"@nantral-platform.fr"})," domain,\nwe need an email server. This server runs on the same server as the Nantral\nPlatform website."]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-webmail",children:"Accessing the webmail"}),"\n",(0,t.jsxs)(n.p,{children:["The webmail is available at ",(0,t.jsx)(n.a,{href:"https://webmail.nantral-platform.fr/",children:(0,t.jsx)(n.code,{children:"https://webmail.nantral-platform.fr/"})}),". There are currently 3 email accounts:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:contact@nantral-platform.fr",children:"contact@nantral-platform.fr"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:group-manager@nantral-platform.fr",children:"group-manager@nantral-platform.fr"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:admin@nantral-platform.fr",children:"admin@nantral-platform.fr"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-webmail-administration-page",children:"Accessing the webmail administration page"}),"\n",(0,t.jsxs)(n.p,{children:["The webmail administration page is available at ",(0,t.jsx)(n.a,{href:"https://webmail.nantral-platform.fr/admin",children:(0,t.jsx)(n.code,{children:"https://webmail.nantral-platform.fr/admin"})})," with the ",(0,t.jsx)(n.code,{children:"admin@nantral-platform.fr"})," email."]}),"\n",(0,t.jsxs)(n.p,{children:["To manage the accounts, you can login into this interface and go to ",(0,t.jsx)(n.code,{children:"domains -> users (mail icon)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Detailed administration on this interface is available ",(0,t.jsx)(n.a,{href:"https://mailu.io/1.9/webadministration.html",children:"on the Mailu website"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"architecture-details",children:"Architecture details"}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.a,{href:"https://mailu.io/",children:"Mailu 1.9"})," with Docker to handle our emails. This includes the following Docker containers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"front"}),"\n",(0,t.jsx)(n.li,{children:"resolver"}),"\n",(0,t.jsx)(n.li,{children:"admin"}),"\n",(0,t.jsx)(n.li,{children:"imap"}),"\n",(0,t.jsx)(n.li,{children:"smtp"}),"\n",(0,t.jsx)(n.li,{children:"antispam"}),"\n",(0,t.jsx)(n.li,{children:"fetchmail"}),"\n",(0,t.jsx)(n.li,{children:"webmail"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The SSL certificates are the ones used by our entire platform. We pass them to the container ",(0,t.jsx)(n.a,{href:"https://github.com/3cn-ecn/nantralPlatform/blob/da9649ad35d4379293d7ee0dbc6e921c490596dd/deployment/certbot-renew.sh#L27-L28",children:"when they are updated with Certbot"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/3cn-ecn/nantralPlatform/blob/da9649ad35d4379293d7ee0dbc6e921c490596dd/.github/workflows/deploy.yml#L139-L140",children:"during deployment"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The emails and accounts are stored on our Postgresql database."}),"\n",(0,t.jsxs)(n.p,{children:["There is no authentification between Django and the SMTP server as they both operate on the same host. This means that any email adress ending in ",(0,t.jsx)(n.code,{children:"@nantral-platform.fr"})," is valid (",(0,t.jsx)(n.code,{children:"foo@nantral-platform.fr"}),", ",(0,t.jsx)(n.code,{children:"bar@nantral-platform.fr"}),", etc). You do not need to create it in order to use it."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);