"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[8562],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={last_update:{date:1694267720816}},u=void 0,l={unversionedId:"codeing/crack/\u6a21\u62df\u8f93\u5165",id:"codeing/crack/\u6a21\u62df\u8f93\u5165",title:"\u6a21\u62df\u8f93\u5165",description:"",source:"@site/docs/09-codeing/04-crack/02-\u6a21\u62df\u8f93\u5165.md",sourceDirName:"09-codeing/04-crack",slug:"/codeing/crack/\u6a21\u62df\u8f93\u5165",permalink:"/codeing/crack/\u6a21\u62df\u8f93\u5165",draft:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/04-crack/02-\u6a21\u62df\u8f93\u5165.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1694267720.816,formattedLastUpdatedAt:"2023\u5e749\u67089\u65e5",sidebarPosition:2,frontMatter:{last_update:{date:1694267720816}},sidebar:"tutorialSidebar",previous:{title:"\u65e0\u9650 debugger",permalink:"/codeing/crack/\u65e0\u9650 debugger"},next:{title:"\u9632\u6b62\u5f3a\u5236\u8df3\u8f6c",permalink:"/codeing/crack/\u9632\u6b62\u5f3a\u5236\u8df3\u8f6c"}},p={},s=[],d={toc:s},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} text\n * @param {HTMLInputElement} element\n */\nfunction input(text, element) {\n  element.value = text;\n  element.dispatchEvent(new Event("input", { bubbles: true }));\n  element.dispatchEvent(new Event("change", { bubbles: true }));\n}\n')))}m.isMDXComponent=!0}}]);