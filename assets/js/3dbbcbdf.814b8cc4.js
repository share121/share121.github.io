"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[3963],{85237:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var i=e(11527),r=e(47214);const a={last_update:{date:1696239854575}},o=void 0,s={id:"codeing/javascript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",title:"\u83b7\u5f97\u6240\u6709\u6587\u4ef6",description:"",source:"@site/docs/09-codeing/03-javascript/04-\u83b7\u5f97\u6240\u6709\u6587\u4ef6.md",sourceDirName:"09-codeing/03-javascript",slug:"/codeing/javascript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",permalink:"/codeing/javascript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/03-javascript/04-\u83b7\u5f97\u6240\u6709\u6587\u4ef6.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1696239854.575,formattedLastUpdatedAt:"2023\u5e7410\u67082\u65e5",sidebarPosition:4,frontMatter:{last_update:{date:1696239854575}},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4",permalink:"/codeing/javascript/\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4"},next:{title:"\u83b7\u5f97\u6570\u636e\u7c7b\u578b",permalink:"/codeing/javascript/\u83b7\u5f97\u6570\u636e\u7c7b\u578b"}},c={},d=[];function u(t){const n={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * \u83b7\u53d6\u6240\u6709\u6587\u4ef6\n * @param {...string} paths\n * @returns {AsyncGenerator<string, void, void>}\n */\nasync function* getAllFiles(...paths) {\n  const temp = [...paths];\n  while (temp.length) {\n    const dirPath = temp.pop();\n    for (const file of (await fss.readdir(dirPath)).map((file) =>\n      path.join(dirPath, file)\n    ))\n      if ((await fss.stat(file)).isDirectory()) temp.push(file);\n      else yield file;\n  }\n}\n"})})}function p(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},47214:function(t,n,e){e.d(n,{Z:function(){return s},a:function(){return o}});var i=e(50959);const r={},a=i.createContext(r);function o(t){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(a.Provider,{value:n},t.children)}}}]);