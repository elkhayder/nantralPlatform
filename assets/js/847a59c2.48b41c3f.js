"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[8153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var f=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",N.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},7523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const o={last_update:{date:"2023-10-05 11:35:07 +0200",author:"Alexis Delage"},sidebar_position:3},l="Run the project",i={unversionedId:"dev/get-started/setup-project/setup-project",id:"dev/get-started/setup-project/setup-project",title:"Run the project",description:"It's time to run Nantral Platform on your computer!",source:"@site/docs/dev/get-started/setup-project/setup-project.md",sourceDirName:"dev/get-started/setup-project",slug:"/dev/get-started/setup-project/",permalink:"/dev/get-started/setup-project/",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/dev/get-started/setup-project/setup-project.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1696498507,formattedLastUpdatedAt:"Oct 5, 2023",sidebarPosition:3,frontMatter:{last_update:{date:"2023-10-05 11:35:07 +0200",author:"Alexis Delage"},sidebar_position:3},sidebar:"sidebar",previous:{title:"Configure your tools",permalink:"/dev/get-started/config-tools/"},next:{title:"Last things to know",permalink:"/dev/get-started/last-things"}},s={},p=[{value:"First launch",id:"first-launch",level:2},{value:"Start the server",id:"start-the-server",level:2},{value:"Create your account",id:"create-your-account",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-the-project"},"Run the project"),(0,r.kt)("p",null,"It's time to run ",(0,r.kt)("em",{parentName:"p"},"Nantral Platform")," on your computer!"),(0,r.kt)("h2",{id:"first-launch"},"First launch"),(0,r.kt)("p",null,"Open a terminal in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nantralPlatform")," directory (for convenience, you can\nopen this terminal inside of VS Code but it also works if you use your regular\nterminal), and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,r.kt)("p",null,"It creates a new virtual environment and installs all the dependencies for the\n",(0,r.kt)("em",{parentName:"p"},"back end")," and the ",(0,r.kt)("em",{parentName:"p"},"front end"),", and creates a new database for you with a\ndefault ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Help! The ",(0,r.kt)("code",null,"make")," command does not work with me! \ud83d\ude25"),(0,r.kt)("p",null,"Well, sorry you're not lucky! But don't worry, here are all the steps you can do\nto install everything."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go into the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend/config/settings")," directory, create a copy of the file\n",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," and rename it ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," only.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install dependencies and create a virtuel environment for python:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv install --dev\n")),(0,r.kt)("p",{parentName:"li"},"If you get an error with the Python version, install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create your database for django:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django migrate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an administrator account on this database:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pipenv run django createsuperuser\n")),(0,r.kt)("p",{parentName:"li"},"When asked, complete as follow:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"email: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin@ec-nantes.fr")),(0,r.kt)("li",{parentName:"ul"},"password: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Note: if ",(0,r.kt)("inlineCode",{parentName:"em"},"admin")," already exists, run ",(0,r.kt)("inlineCode",{parentName:"em"},"pipenv run django changepassword admin"),"\nto change the password of the admin account to ",(0,r.kt)("inlineCode",{parentName:"em"},"admin"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, change your working directory to the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," one:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../frontend\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))),(0,r.kt)("p",null,"Congratulations, you did it all \ud83e\udd73")),(0,r.kt)("h2",{id:"start-the-server"},"Start the server"),(0,r.kt)("p",null,"Now it's time to launch the website! To do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go into the frontend directory and launch the frontend server (react):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend/\nnpm run start\n"))),(0,r.kt)("li",{parentName:"ol"},"In another terminal, go into the backend directory and launch the backend server (django):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend/\npipenv run start\n"))),(0,r.kt)("li",{parentName:"ol"},"Open this address in your browser: ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000"))),(0,r.kt)("p",null,"And that's it! You should now see the login page of Nantral Platform:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The login page",src:a(2283).Z,width:"1219",height:"653"})),(0,r.kt)("h2",{id:"create-your-account"},"Create your account"),(0,r.kt)("p",null,"Since we have created your own database, you do ",(0,r.kt)("strong",{parentName:"p"},"not")," have an account yet\non this particular database. So let's create one!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the login page, ",(0,r.kt)("strong",{parentName:"p"},"click the ",(0,r.kt)("em",{parentName:"strong"},'"No Account?"'))," button, and fill in your\ninfo to create your personal account."),(0,r.kt)("admonition",{parentName:"li",title:"Note",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Your password will be only stored on your computer: this is not really secure,\nso do not use a password similar to your real online accounts!\nYou can instead use a dummy password like ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," for example."),(0,r.kt)("li",{parentName:"ul"},"The email will not really be checked, so you can use a dummy one too\n(it must only finish with ",(0,r.kt)("inlineCode",{parentName:"li"},"ec-nantes.fr"),"). This allows you to create\nmultiple accounts, to test your code later \ud83d\ude09"),(0,r.kt)("li",{parentName:"ul"},"At the end of the process, the website will ask you to validate your account:\njust ignore it for the moment.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, open the admin panel (",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/admin"},"http://localhost:8000/admin"),"),\nand ",(0,r.kt)("strong",{parentName:"p"},"log in")," with the fake ",(0,r.kt)("strong",{parentName:"p"},"admin account")," created by default\n(",(0,r.kt)("em",{parentName:"p"},"username: ",(0,r.kt)("inlineCode",{parentName:"em"},"admin"),", password: ",(0,r.kt)("inlineCode",{parentName:"em"},"admin")),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: if the password does not work, you can reset the password:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend\npipenv run django changepassword admin\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once connected, open ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},'"Authentication and authorization > Users"')),"\n(or ",(0,r.kt)("em",{parentName:"p"},'"Authentification et Autorisation > Utilisateurs"')," in French)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Search")," for your personal account (the one you created a few minutes ago)\nand ",(0,r.kt)("strong",{parentName:"p"},"open")," it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Permissions"))," section, and check the 3 checkboxes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Active")," (",(0,r.kt)("em",{parentName:"li"},"Actif"),"): this will validate your account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Staff status")," (",(0,r.kt)("em",{parentName:"li"},"Statut \xe9quipe"),"): this allows you to connect to the admin panel\nwith your personnal account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Superuser status")," (",(0,r.kt)("em",{parentName:"li"},"Statut super-utilisateur"),"): this transforms your personnal\naccount into an admin account!"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save")," your modifications with the button at the bottom.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Log out")," from the admin interface.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, go back to ",(0,r.kt)("em",{parentName:"p"},"Nantral Platform"),"\n(",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),"), and ",(0,r.kt)("strong",{parentName:"p"},"log in")," with\nyour personal account!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congratulations, you now have a personal admin account on your database \ud83e\udd73"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To go further...")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Why can I not directly use the ",(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"admin")," account?"),(0,r.kt)("p",{parentName:"admonition"},"In facts, on Nantral Platform, we have 2 tables in our database for representing\na user: the first one is called ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", and the second one ",(0,r.kt)("inlineCode",{parentName:"p"},"Student"),". The\n",(0,r.kt)("inlineCode",{parentName:"p"},"User")," table is made for the authentification and permissions processes, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Student")," one is made for the profile of the user."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"admin")," account is only created during the installation process as an\nelement of the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," table, and has no equivalent in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Student")," table:\nhence, the ",(0,r.kt)("em",{parentName:"p"},"admin")," account will not really work on Nantral Platform. That's why\nyou need to create your account with the login page, to have both enabled.")))}m.isMDXComponent=!0},2283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-page-22cae92bf3d97d2886180034866d90a4.png"}}]);