"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[756],{56563:function(n,e,o){o.r(e),o.d(e,{assets:function(){return i},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return a}});var t=o(85893),r=o(11151);const d={last_update:{date:1700887880054}},s="preload.js",c={id:"codeing/utools/preload",title:"preload.js",description:"\u5f53\u4f60\u5728 plugin.json \u4e2d\u914d\u7f6e\u4e86 preload \u5c5e\u6027\uff0c\u5c06\u8f7d\u5165\u5bf9\u5e94\u7684\u9884\u52a0\u8f7d\u811a\u672c\u3002",source:"@site/docs/09-codeing/11-utools/03-preload.md",sourceDirName:"09-codeing/11-utools",slug:"/codeing/utools/preload",permalink:"/codeing/utools/preload",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/11-utools/03-preload.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1700887880.054,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",sidebarPosition:3,frontMatter:{last_update:{date:1700887880054}},sidebar:"tutorialSidebar",previous:{title:"\u5b8c\u6574\u914d\u7f6e",permalink:"/codeing/utools/config"},next:{title:"\u6a21\u677f\u63d2\u4ef6\u5e94\u7528",permalink:"/codeing/utools/template"}},i={},a=[];function l(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"preloadjs",children:"preload.js"}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53\u4f60\u5728 ",(0,t.jsx)(e.code,{children:"plugin.json"})," \u4e2d\u914d\u7f6e\u4e86 ",(0,t.jsx)(e.code,{children:"preload"})," \u5c5e\u6027\uff0c\u5c06\u8f7d\u5165\u5bf9\u5e94\u7684\u9884\u52a0\u8f7d\u811a\u672c\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4f20\u7edf\u7684 Web \u5f00\u53d1\u4e2d\uff0c\u6240\u6709\u7684 JavaScript \u811a\u672c\u90fd\u5728\u6d4f\u89c8\u5668\u6c99\u76d2\u4e2d\u8fd0\u884c\uff0c\u6743\u9650\u88ab\u4e25\u683c\u9650\u5236\uff0c\u6240\u80fd\u5b9e\u73b0\u7684\u529f\u80fd\u975e\u5e38\u6709\u9650\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"preload.js"})," \u80fd\u591f\u5e2e\u4f60\u7a81\u7834\u6c99\u76d2\u9650\u5236\uff0c\u8fdb\u5165\u4e00\u4e2a\u5d2d\u65b0\u7684 JavaScript \u4e16\u754c\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"preload.js"})," \u662f\u4e00\u4e2a\u7279\u6b8a\u4e14\u5355\u72ec\u7684\u6587\u4ef6\uff0c\u4e0d\u9700\u8981\u4e0e\u5176\u4ed6\u4e1a\u52a1\u4ee3\u7801\u7f16\u8bd1\u5728\u4e00\u8d77\uff0c\u5728\u6b64\u6587\u4ef6\u4e2d\u53ef\u4ee5\u8bbf\u95ee ",(0,t.jsx)(e.code,{children:"nodejs"}),"\u3001",(0,t.jsx)(e.code,{children:"electron"}),"\u3001",(0,t.jsx)(e.code,{children:"uTools"})," \u63d0\u4f9b\u7684 api\uff0c\u5e76\u6302\u8f7d\u5230 ",(0,t.jsx)(e.code,{children:"window"})," \u5bf9\u8c61\u4e2d\uff0c\u4f60\u5176\u4ed6\u7684\u666e\u901a JavaScript \u4ee3\u7801\u5c31\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b api\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'// \u5f00\u53d1\u8005\u53ef\u4ee5\u66b4\u9732\u81ea\u5b9a\u4e49 API \u4f9b\u540e\u52a0\u8f7d\u811a\u672c\u4f7f\u7528\n\n// preload.js \u4e2d\u4f7f\u7528 nodejs\nconst { readFileSync } = require("fs");\n\nwindow.readConfig = function () {\n  const data = readFileSync("./config.json");\n  return data;\n};\n\n// index.html \u540e\u52a0\u8f7d\u7684\u5185\u5bb9\u53ef\u4ee5\u4f7f\u7528 window.readConfig() \u65b9\u6cd5\uff0c\u4f46\u4e0d\u80fd\u4f7f\u7528 Node.js \u7279\u6027\nconsole.log(window.readConfig()); // \u6b63\u5e38\u6267\u884c\nconsole.log(readFileSync("./config.json")); // \u62a5\u9519\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u83b7\u5f97\u5f3a\u5927\u7684\u5e95\u5c42\u80fd\u529b\uff0c\u914d\u5408 HTML\u3001CSS \u4e30\u5bcc\u7684\u8868\u73b0\u529b\uff0c\u5b8c\u5168\u53ef\u4ee5\u6309\u4f60\u7406\u60f3\u4e2d\u7684\u6837\u5b50\u53bb\u8bbe\u8ba1\u7a0b\u5e8f\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u66f4\u5f3a\u5927\u7684\u80fd\u529b\u5982\u679c\u4e0d\u53d7\u7ea6\u675f\u5c31\u4f1a\u4f34\u968f\u7740\u66f4\u5927\u98ce\u9669\uff0c\u5728\u4f7f\u7528\u9884\u52a0\u8f7d\u811a\u672c\u65f6\uff0c\u5e94\u8be5\u65f6\u523b\u6ce8\u610f\u53ea\u63d0\u4f9b\u5fc5\u8981\u4e14\u6700\u5c0f\u6743\u9650\u7684 api \u4f9b\u540e\u52a0\u8f7d\u811a\u672c\u4f7f\u7528\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\uff08\u5982\u679c\u4f60\u60f3\u628a\u63d2\u4ef6\u5e94\u7528\u63d0\u4ea4\u5230 uTools \u63d2\u4ef6\u5e94\u7528\u5e02\u573a\u4f9b\u5176\u4ed6\u7528\u6237\u4e0b\u8f7d\u4f7f\u7528\uff0c",(0,t.jsx)(e.code,{children:"preload.js"})," \u5fc5\u987b\u662f\u660e\u6587\u4ee3\u7801\uff0c\u4e14\u7cbe\u7b80\u6e05\u6670\u53ef\u8bfb\uff09"]})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11151:function(n,e,o){o.d(e,{Z:function(){return c},a:function(){return s}});var t=o(67294);const r={},d=t.createContext(r);function s(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);