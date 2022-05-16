"use strict";(self.webpackChunknantralplatform_docs=self.webpackChunknantralplatform_docs||[]).push([[9292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Using Docker in development",sidebar_position:1},l=void 0,s={unversionedId:"docker/using-docker-in-development",id:"docker/using-docker-in-development",title:"Using Docker in development",description:"This section doesn't work at the moment, as some dependencies seem to be missing.",source:"@site/docs/docker/using-docker-in-development.md",sourceDirName:"docker",slug:"/docker/using-docker-in-development",permalink:"/docs/docker/using-docker-in-development",draft:!1,editUrl:"https://github.com/nantral-platform/nantralPlatform/tree/master/docs/docs/docker/using-docker-in-development.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using Docker in development",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/category/docker"},next:{title:"Deployment",permalink:"/docs/category/deployment"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This section doesn't work at the moment, as some dependencies seem to be missing.\n{.is-danger}")),(0,i.kt)("h1",{id:"using-docker-in-development"},"Using Docker in development"),(0,i.kt)("p",null,"Rather than using the stock Django development server, you can use Docker instead, in order to emulate the production environment. This might be useful for debugging serving static files, but that's it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In deployement_templates/local start the database with ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")),(0,i.kt)("li",{parentName:"ul"},"In the server folder activate your env with ",(0,i.kt)("inlineCode",{parentName:"li"},"source env/bin/activate"),"."),(0,i.kt)("li",{parentName:"ul"},"Start the server with ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 manage.py runserver"),".")))}m.isMDXComponent=!0}}]);