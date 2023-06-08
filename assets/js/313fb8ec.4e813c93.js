"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={last_update:{date:"2023-02-09 10:22:46 +0100",author:"Alexis Delage"},title:"Parrainage",description:"Documentation sur l'algorithme de parrainage",published:!0,date:new Date("2021-10-29T10:07:18.413Z"),editor:"markdown",dateCreated:new Date("2021-10-12T16:15:59.459Z")},l="Parrainage",s={unversionedId:"user/mentorship/parrainage/parrainage",id:"user/mentorship/parrainage/parrainage",title:"Parrainage",description:"Documentation sur l'algorithme de parrainage",source:"@site/docs/user/mentorship/parrainage/parrainage.md",sourceDirName:"user/mentorship/parrainage",slug:"/user/mentorship/parrainage/",permalink:"/user/mentorship/parrainage/",draft:!1,editUrl:"https://github.com/3cn-ecn/nantralPlatform/tree/master/docs/docs/user/mentorship/parrainage/parrainage.md",tags:[],version:"current",lastUpdatedBy:"Alexis Delage",lastUpdatedAt:1675934566,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{last_update:{date:"2023-02-09 10:22:46 +0100",author:"Alexis Delage"},title:"Parrainage",description:"Documentation sur l'algorithme de parrainage",published:!0,date:"2021-10-29T10:07:18.413Z",editor:"markdown",dateCreated:"2021-10-12T16:15:59.459Z"},sidebar:"sidebar",previous:{title:"Mentorship (parrainage)",permalink:"/category/mentorship-parrainage"},next:{title:"Developer Documentation",permalink:"/dev/"}},o={},u=[{value:"1. Contexte",id:"1-contexte",level:2},{value:"1.1 Lexique",id:"11-lexique",level:3},{value:"1.2 D\xe9roulement",id:"12-d\xe9roulement",level:3},{value:"2. Utilisation de Nantral Platform pour le parrainage",id:"2-utilisation-de-nantral-platform-pour-le-parrainage",level:2},{value:"2.1 Pourquoi utiliser Nantral Platform ?",id:"21-pourquoi-utiliser-nantral-platform-",level:3},{value:"2.2 Interface Admin",id:"22-interface-admin",level:3},{value:"2.3 Changer la phase",id:"23-changer-la-phase",level:3},{value:"2.4 Ajouter ou modifier des questions",id:"24-ajouter-ou-modifier-des-questions",level:3},{value:"3. Fonctionnement des algorithmes et choix de conceptions",id:"3-fonctionnement-des-algorithmes-et-choix-de-conceptions",level:2},{value:"Algorithme initial",id:"algorithme-initial",level:3},{value:"Algorithme delta",id:"algorithme-delta",level:3},{value:"Algorithme ITII",id:"algorithme-itii",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parrainage"},"Parrainage"),(0,r.kt)("p",null,"Cette page se destine \xe0 fournir des explications sur l'algorithme de parrainage pour Centrale Nantes, utilis\xe9 et mis en place par le BDE. Elle pourra notamment servir au p\xf4le int\xe9 ou aux futurs DSI de l'association."),(0,r.kt)("h2",{id:"1-contexte"},"1. Contexte"),(0,r.kt)("h3",{id:"11-lexique"},"1.1 Lexique"),(0,r.kt)("p",null,"Chaque ann\xe9e, le BDE organise \"le parrainage\", c'est-\xe0-dire que des nouveaux \xe9tudiants sont parrain\xe9s par les plus anciens afin de s'int\xe9grer plus facilement dans l'\xe9cole.\nOn distingue deux types de personnes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"les 1A :")," ce terme regroupe les \xe9tudiants effectuant leur premi\xe8re ann\xe9e \xe0 Centrale Nantes, plus souvent d\xe9nomm\xe9s les fillots. Le terme regroupe donc les EI1, mais aussi les ITII de 1\xe8re ann\xe9e, ainsi que les \xe9tudiants \xe9trangers en Double Dipl\xf4me en EI1 (DD) et les \xe9tudiants en mobilit\xe9 intercentrale (qui sont donc en EI3)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"les 2A+ :"),' ce terme regroupe les \xe9tudiants ayant d\xe9j\xe0 effectu\xe9 une ann\xe9e \xe0 Centrale Nantes. Ceux-ci se r\xe9unissent en groupes de 2A+, appel\xe9s "familles".')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Actuellement (en 2021), seules les fili\xe8res ing\xe9nieurs g\xe9n\xe9raliste et de sp\xe9cialit\xe9 sont concern\xe9es par le parrainage. Les masters, bachelors et doctorants sont consid\xe9r\xe9s "\xe0 part" et ne sont pas parrain\xe9s.')),(0,r.kt)("h3",{id:"12-d\xe9roulement"},"1.2 D\xe9roulement"),(0,r.kt)("p",null,"Le parrainage s'effctue g\xe9n\xe9ralement en plusieurs phases :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 1 : Questionnaires 2A+ (mi-ao\xfbt \xe0 fin ao\xfbt)")," - Les 2A+ remplissent les questionnaires familles et questionnaires individuels pour d\xe9clarer leur souhait de parrainer des 1A"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 2 : Questionnaires 1A (fin ao\xfbt \xe0 d\xe9but septembre)")," - Les 1A remplissent \xe0 leur tour le questionnaire"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 3 : La soir\xe9e de parrainage")," - On lance l'algorithme qui permet de r\xe9partir les 1A dans les diff\xe9rentes familles de 2A+, puis les 1A doivent se r\xe9unir avec les autres 1A de la m\xeame famille et partir \xe0 la recherche de leurs parrains (les 2A+)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 4 : Premi\xe8re fin du parrainage")," - Le parrainage est termin\xe9 et tous les 1A connaissent leurs parrains 2A+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 5 : Questionnaires ITII (d\xe9but octobre)")," - Les ITII faisant leur rentr\xe9e d\xe9but octobre, une nouvelle phase de parrainage est mise en place. Il s'agit ici de seulement r\xe9colter leurs questionnaires pour ensuite les placer dans les familles d\xe9j\xe0 existantes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 6 : Attibution des ITII aux familles (mi-octobre)")," - On place les ITII dans des familles. Fin du processus de parrainage.")),(0,r.kt)("h2",{id:"2-utilisation-de-nantral-platform-pour-le-parrainage"},"2. Utilisation de Nantral Platform pour le parrainage"),(0,r.kt)("h3",{id:"21-pourquoi-utiliser-nantral-platform-"},"2.1 Pourquoi utiliser Nantral Platform ?"),(0,r.kt)("p",null,"Avant d'utiliser Nantral Platform, les questionnaires \xe9taient con\xe7us sous Google Form, et les r\xe9ponses \xe9taient ensuite r\xe9cup\xe9r\xe9es puis entr\xe9es dans un script Python pour faire les attributions. Ce mode de fonctionnement, simple \xe0 mettre en place, pr\xe9sentait n\xe9anmoins quelques inconv\xe9nients :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"une inconsistence des donn\xe9es :")," pour les 2A+, deux formulaires \xe9taient distribu\xe9s, un pour d\xe9clarer les familles et le second pour chaque 2A+. Le probl\xe8me \xe9tait que tout le monde ne mettait pas forc\xe9ment le m\xeame nom pour la famille ou pour l'\xe9tudiant 2A+ (diff\xe9rences d'accents et d'espaces, d'ordre nom/pr\xe9nom, etc...), ce qui rendait tr\xe8s compliqu\xe9 le traitement ensuite (il fallait juste tout reprendre \xe0 la main, ce qui \xe9tait \xe0 la fois long et fastidieux). Nantral Platform permet de r\xe9soudre ce probl\xe8me en utilisant le compte personnel de chaque utilisateur pour lier ces deux questionnaires."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"un risque \xe9lev\xe9 de leak des familles :")," avec l'ancienne m\xe9thode, la liste des attributions 1A/2A+ \xe9taient publi\xe9es en public sur un site, dont le lien \xe9tait seulement partag\xe9 aux parrains pendant la phase 3. N\xe9anmoins certains 1A pouvaient aussi acc\xe9der \xe0 ce lien et ainsi d\xe9couvrir leur famille. Avec Nantral Platform les acc\xe8s aux donn\xe9es restent priv\xe9es, ce qui limite les possibilit\xe9s de leak.")),(0,r.kt)("p",null,"D'autre part, le fait de basculer cette proc\xe9dure sur Nantral Platform permet d'autres avantages :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"un contr\xf4le total des donn\xe9es et du processus :")," on ne vend plus nos donn\xe9es \xe0 Google !"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"une motivation pour les 1A pour s'inscrire sur Nantral Platform :")," cela permet d'\xeatre s\xfbr qu'ils recevront bien ensuite toutes les infos sur les clubs et assos de l'\xe9cole et facilitera la suite de leur scolarit\xe9 !")),(0,r.kt)("h3",{id:"22-interface-admin"},"2.2 Interface Admin"),(0,r.kt)("p",null,"Si vous devez participer \xe0 l'organisation du parrainage, vous pouvez faire une demande aupr\xe8s des administrateurs de Nantral Platform (en cas de doutes, adressez-vous au DSI du BDE) pour avoir acc\xe8s \xe0 l'interface admin du parrainage."),(0,r.kt)("admonition",{title:"Note aux admins de Nantral Platform",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Les droits d'acc\xe8s sont accord\xe9s en ajoutant l'utilisateur dans le groupe ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-family")," et en lui accordant le ",(0,r.kt)("strong",{parentName:"p"},"statut \xe9quipe")," dans l'interface administrateur de Django.")),(0,r.kt)("p",null,"L'interface admin se pr\xe9sente ainsi :\n",(0,r.kt)("img",{src:a(5896).Z,width:"918",height:"632"})),(0,r.kt)("p",null,"Cette page est accessible via le lien suivant : ",(0,r.kt)("a",{parentName:"p",href:"https://nantral-platform.fr/parrainage/admin/"},"nantral-platform.fr/parrainage/admin"),". Vous avez acc\xe8s \xe0 :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"des ",(0,r.kt)("strong",{parentName:"li"},"statistiques")," d\xe9taill\xe9es sur le remplissage des questionnaires : pour donner un ordre d'id\xe9e, on avait eu en 2021 65 familles de cr\xe9\xe9es avec ",(0,r.kt)("inlineCode",{parentName:"li"},"341")," 1A et ",(0,r.kt)("inlineCode",{parentName:"li"},"319")," 2A+."),(0,r.kt)("li",{parentName:"ul"},"des ",(0,r.kt)("strong",{parentName:"li"},"outils")," pour op\xe9rer des changements :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lancer l'algorithme initial :")," Permet de lancer l'algorithme principal de mariage stable, pour attribuer des 1A dans des familles de 2A+ (cf. partie 3). Cet algo est lanc\xe9 juste avant la phase 3, mais il peut aussi \xeatre lanc\xe9 avant pour tester."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lancer l'algorithme delta :")," au cas o\xf9 des 1A n'ont pas rempli leur questionnaire avant que vous ayez lanc\xe9 l'algorithme initial, vous pouvez quand m\xeame leur dire de remplir le questionnaire sur place pendant la phase 3, puis lancer l'algorithme delta pour les attribuer \xe0 une famille adapt\xe9e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Voir les affectations")," : permet de voir les attributions 1A-2A+ enregistr\xe9es dans la base de donn\xe9es."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modifier les questions et l'affichage")," : permet d'acc\xe9der \xe0 l'interface de gestion de la base de donn\xe9es pour modifier la ",(0,r.kt)("strong",{parentName:"li"},"phase")," en cours d'ex\xe9cution et les diff\xe9rentes questions des questionnaires.")))),(0,r.kt)("h3",{id:"23-changer-la-phase"},"2.3 Changer la phase"),(0,r.kt)("p",null,"Pour changer la phase, connectez-vous \xe0 l'interface admin du site en ligne.\nPuis, dans la section ",(0,r.kt)("strong",{parentName:"p"},"EXTRA SETTINGS"),", s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Param\xe8tres"),". Vous\npouvez alors changez la valeur du param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"PHASE_PARRAINAGE")," d'apr\xe8s le\ncode suivant (cf la section 1.2) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),": Tout masquer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),": Questionnaires 2A+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2"),": Questionnaires 1A et 2A+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3"),": Soir\xe9e de parrainage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4"),": R\xe9sultats du parrainage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"5"),": Questionnaires ITII"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"6"),": R\xe9sultats ITII")),(0,r.kt)("h3",{id:"24-ajouter-ou-modifier-des-questions"},"2.4 Ajouter ou modifier des questions"),(0,r.kt)("h2",{id:"3-fonctionnement-des-algorithmes-et-choix-de-conceptions"},"3. Fonctionnement des algorithmes et choix de conceptions"),(0,r.kt)("h3",{id:"algorithme-initial"},"Algorithme initial"),(0,r.kt)("h3",{id:"algorithme-delta"},"Algorithme delta"),(0,r.kt)("h3",{id:"algorithme-itii"},"Algorithme ITII"))}m.isMDXComponent=!0},5896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parrainage_admin-0aa7868d8cd04e9bee73d69c011dcf33.png"}}]);