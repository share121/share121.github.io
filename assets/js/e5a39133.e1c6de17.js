"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[361],{23097:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(11527),o=n(7502);const a={last_update:{date:1696239884893}},c=void 0,i={id:"codeing/javascript/\u83b7\u5f97\u6570\u636e\u7c7b\u578b",title:"\u83b7\u5f97\u6570\u636e\u7c7b\u578b",description:"",source:"@site/docs/09-codeing/03-javascript/05-\u83b7\u5f97\u6570\u636e\u7c7b\u578b.md",sourceDirName:"09-codeing/03-javascript",slug:"/codeing/javascript/\u83b7\u5f97\u6570\u636e\u7c7b\u578b",permalink:"/codeing/javascript/\u83b7\u5f97\u6570\u636e\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/03-javascript/05-\u83b7\u5f97\u6570\u636e\u7c7b\u578b.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1696239884.893,formattedLastUpdatedAt:"2023\u5e7410\u67082\u65e5",sidebarPosition:5,frontMatter:{last_update:{date:1696239884893}},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u5f97\u6240\u6709\u6587\u4ef6",permalink:"/codeing/javascript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6"},next:{title:"\u5224\u65ad\u5b57\u4f53\u662f\u5426\u53ef\u7528",permalink:"/codeing/javascript/\u5224\u65ad\u5b57\u4f53\u662f\u5426\u53ef\u7528"}},s={},u=[];function d(t){const e={code:"code",pre:"pre",...(0,o.a)(),...t.components};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'/**\n * \u83b7\u5f97\u6570\u636e\u7c7b\u578b\n * @param {*} target\n * @param {boolean} [lowerCase=true] \u63a7\u5236\u662f\u5426\u8f6c\u4e3a\u5c0f\u5199\n * @returns {string}\n */\nfunction getType(target, lowerCase = true) {\n  const t = Object.prototype.toString\n    .call(target)\n    .replace(/\\[object (\\w+)\\]/, "$1");\n  return lowerCase ? t.toLowerCase() : t;\n}\n'})})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},7502:function(t,e,n){n.d(e,{Z:function(){return i},a:function(){return c}});var r=n(50959);const o={},a=r.createContext(o);function c(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);