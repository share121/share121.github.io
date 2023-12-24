"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[5929],{53053:function(e,n,c){c.r(n),c.d(n,{assets:function(){return o},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return l}});var i=c(11527),t=c(47214);const r={last_update:{date:1700137651710}},s="\u5b9e\u4f53\u57fa\u5143",d={id:"codeing/solidjs/solid-primitives",title:"\u5b9e\u4f53\u57fa\u5143",description:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u89e3\u91ca\u5f00\u59cb\u4f7f\u7528 Solid \u57fa\u5143\u4ee5\u53ca\u5728\u7ec4\u4ef6\u5185\u90e8\u548c\u5916\u90e8\u4f7f\u7528 Solid \u57fa\u5143\u9700\u8981\u4e86\u89e3\u7684\u5185\u5bb9\u3002",source:"@site/docs/09-codeing/09-solidjs/03-solid-primitives.md",sourceDirName:"09-codeing/09-solidjs",slug:"/codeing/solidjs/solid-primitives",permalink:"/codeing/solidjs/solid-primitives",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/09-solidjs/03-solid-primitives.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1700137651.71,formattedLastUpdatedAt:"2023\u5e7411\u670816\u65e5",sidebarPosition:3,frontMatter:{last_update:{date:1700137651710}},sidebar:"tutorialSidebar",previous:{title:"\u624e\u5b9e\u7684\u601d\u7ef4",permalink:"/codeing/solidjs/thinking-solid"},next:{title:"Solid \u7684 TypeScript \u6307\u5357",permalink:"/codeing/solidjs/typescript-for-solid"}},o={},l=[{value:"\u5b9e\u4f53\u57fa\u5143",id:"\u5b9e\u4f53\u57fa\u5143-1",level:2},{value:"<code>createSignal</code>",id:"createsignal",level:2},{value:"<code>createMemo</code>",id:"creatememo",level:2},{value:"<code>createEffect</code>",id:"createeffect",level:2},{value:"<code>createResource</code>",id:"createresource",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5b9e\u4f53\u57fa\u5143",children:"\u5b9e\u4f53\u57fa\u5143"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u5c06\u89e3\u91ca\u5f00\u59cb\u4f7f\u7528 Solid \u57fa\u5143\u4ee5\u53ca\u5728\u7ec4\u4ef6\u5185\u90e8\u548c\u5916\u90e8\u4f7f\u7528 Solid \u57fa\u5143\u9700\u8981\u4e86\u89e3\u7684\u5185\u5bb9\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9e\u4f53\u57fa\u5143-1",children:"\u5b9e\u4f53\u57fa\u5143"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u4ece Solid primitves \u5f00\u59cb\u3002\u4ec0\u4e48\u662f\u539f\u8bed\uff1f\u57fa\u5143\u662f\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u3001\u6846\u67b6\u6216\u5e93\u4e2d\u53ef\u7528\u7684\u6700\u7b80\u5355\u7684\u5143\u7d20\u3001\u51fd\u6570\u6216\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Solid \u4e2d\uff0c\u57fa\u5143\u662f\u8d1f\u8d23\u7ba1\u7406 Solid \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u53cd\u5e94\u6027\u7684\u6784\u5efa\u5757\u3002\u4ee5\u4e0b\u662f Solid \u57fa\u5143\u7684\u5217\u8868\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#createsignal",children:(0,i.jsx)(n.code,{children:"createSignal"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#createeffect",children:(0,i.jsx)(n.code,{children:"createEffect"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#creatememo",children:(0,i.jsx)(n.code,{children:"createMemo"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#createresource",children:(0,i.jsx)(n.code,{children:"createResource"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createRoot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createRenderEffect"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createDeferred"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createComputed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createContext"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createMutable"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createStore"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u5b9e\u4f53\u57fa\u5143\u53ef\u4ee5\u5728\u4efb\u4f55\u8303\u56f4\u5185\u4f7f\u7528\uff0c\u5b83\u4eec\u4e0d\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\u5b9e\u4f53\u7ec4\u4ef6\u4e0d\u62e5\u6709\u5176\u72b6\u6001\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ea\u662f\u8bbe\u7f6e\u51fd\u6570\uff0c\u4e0e\u8bbe\u7f6e\u540e\u7684\u53cd\u5e94\u7cfb\u7edf\u65e0\u5173\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd\u6700\u5e38\u7528\u7684\u57fa\u5143 ",(0,i.jsx)(n.code,{children:"createSignal"}),"\u3001",(0,i.jsx)(n.code,{children:"createMemo"}),"\u3001",(0,i.jsx)(n.code,{children:"createEffect"})," \u548c ",(0,i.jsx)(n.code,{children:"createResource"}),"\u3002\u8981\u66f4\u6df1\u5165\u5730\u4e86\u89e3 Solid \u62e5\u6709\u7684\u6240\u6709\u57fa\u5143\uff0c\u8bf7\u67e5\u770b",(0,i.jsx)(n.a,{href:"https://docs.solidjs.com/references/concepts",children:"\u6982\u5ff5\u9875\u9762"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"createsignal",children:(0,i.jsx)(n.code,{children:"createSignal"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createSignal"})," \u662f Solid \u4e2d\u6700\u5e38\u7528\u7684\u539f\u8bed\u3002\u5b83\u7528\u4e8e\u521b\u5efa\u53cd\u5e94\u5f0f\u72b6\u6001\u53d8\u91cf\u3002\u5b83\u91c7\u7528\u4e00\u4e2a\u53ef\u9009\u7684\u521d\u59cb\u503c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\uff0c\u5176\u4e2d\u5305\u542b getter \u51fd\u6570\u6765\u83b7\u53d6\u5f53\u524d\u503c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a setter \u51fd\u6570\u6765\u8bbe\u7f6e\u503c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createSignal"})," \u53ef\u7528\u4e8e\u5b58\u50a8\u51e0\u4e4e\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5305\u62ec\u5bf9\u8c61\u548c\u6570\u7ec4\u3002\u4f46\u662f\uff0c\u5728 Solid \u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createStore"})," \u539f\u8bed\u6765\u5b58\u50a8\u5bf9\u8c61\u548c\u6570\u7ec4\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"createStore"})," \u7ecf\u8fc7\u4f18\u5316\u4ee5\u5904\u7406\u5d4c\u5957\u53cd\u5e94\u6027\u7684\u60c5\u51b5\u3002\u6709\u5173\u6b64\u5185\u5bb9\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u53c2\u8003\u90e8\u5206\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createSignal } from "solid-js";\n\n// highlight-next-line\nconst [count, setCount] = createSignal(0);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createSignal"})," \u4e0d\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\u5b83\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528\u3002\u65e0\u8bba\u662f\u5728\u7ec4\u4ef6\u3001\u51fd\u6570\u4e2d\uff0c\u8fd8\u662f\u5728\u7ec4\u4ef6\u6216\u51fd\u6570\u4e4b\u5916\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createSignal } from "solid-js";\n\n// highlight-next-line\nconst [count, setCount] = createSignal(0);\n\nfunction increment() {\n  setCount(count() + 1);\n}\n\nfunction decrement() {\n  setCount(count() - 1);\n}\n\nfunction Counter() {\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count()}</span>\n      <button onClick={increment}>+</button>\n    </div>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"count"})," \u72b6\u6001\u53d8\u91cf\uff0c\u7528\u4e8e\u8ddf\u8e2a\u5f53\u524d\u8ba1\u6570\u3002\u6211\u4eec\u6709\u4e24\u4e2a\u51fd\u6570\uff0c",(0,i.jsx)(n.code,{children:"increment"})," \u548c ",(0,i.jsx)(n.code,{children:"decrement"})," \u7528\u4e8e\u66f4\u65b0 ",(0,i.jsx)(n.code,{children:"count"})," \u72b6\u6001\u53d8\u91cf\u3002\u6211\u4eec\u8fd8\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c",(0,i.jsx)(n.code,{children:"Counter"})," \u5b83\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"count"})," \u72b6\u6001\u53d8\u91cf\u6765\u663e\u793a\u5f53\u524d\u8ba1\u6570\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6b63\u5982\u60a8\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\u6ce8\u610f\u5230\u7684\uff0c\u6211\u4eec\u5728\u7ec4\u4ef6\u5916\u90e8\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createSignal"}),"\u3002\u8fd9\u5b8c\u5168\u6ca1\u95ee\u9898\uff0c\u751a\u81f3\u53ef\u4ee5\u4ece\u53e6\u4e00\u4e2a\u6587\u4ef6\u5bfc\u5165\u4fe1\u53f7\u5e76\u4f7f\u5176\u4ecd\u7136\u5177\u6709\u53cd\u5e94\u6027\u3002\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createSignal"}),"\uff0c\u56e0\u4e3a\u5728 Solid \u4e2d\uff0c\u7ec4\u4ef6\u4e0d\u62e5\u6709\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0cSolid \u5185\u7f6e\u4e86\u72b6\u6001\u7ba1\u7406\uff0c\u5e76\u4e14\u4e0d\u9700\u8981 Redux \u6216\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u9664\u975e\u60a8\u60f3\u4f7f\u7528\u7279\u5b9a\u4e8e\u5b83\u4eec\u7684\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u4e0e\u6b64\u76f8\u5bf9\u5e94\u7684 Vue \u662f ",(0,i.jsx)(n.code,{children:"ref"})," \u51fd\u6570\u3002\u8be5 ",(0,i.jsx)(n.code,{children:"ref"})," \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u7ec4\u4ef6\u7684\u672c\u5730\u72b6\u6001\u53d8\u91cf\u3002\u8fd9\u610f\u5473\u7740\u5728\u5378\u8f7d\u7ec4\u4ef6\u65f6\uff0c\u72b6\u6001\u53d8\u91cf\u5c06\u88ab\u9500\u6bc1\u3002\u5728 Solid \u4e2d\uff0c\u7ec4\u4ef6\u4e0d\u62e5\u6709\u81ea\u5df1\u7684\u72b6\u6001\u3002"]}),(0,i.jsx)(n.p,{children:"\u8fd9\u610f\u5473\u7740\u5728\u5378\u8f7d\u7ec4\u4ef6\u65f6\u4e0d\u4f1a\u9500\u6bc1\u72b6\u6001\u53d8\u91cf\u3002\u8fd9\u662f\u56e0\u4e3a\u5b9e\u4f53\u7ec4\u4ef6\u53ea\u662f\u8bbe\u7f6e\u51fd\u6570\uff0c\u4e0e\u8bbe\u7f6e\u540e\u7684\u53cd\u5e94\u7cfb\u7edf\u65e0\u5173\u3002"})]}),"\n",(0,i.jsx)(n.h2,{id:"creatememo",children:(0,i.jsx)(n.code,{children:"createMemo"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createMemo"})," \u7528\u4e8e\u521b\u5efa\u4ece\u5176\u4ed6\u53cd\u5e94\u5f0f\u72b6\u6001\u53d8\u91cf\u6d3e\u751f\u7684\u53cd\u5e94\u5f0f\u72b6\u6001\u53d8\u91cf\u3002\u5b83\u91c7\u7528\u4e00\u4e2a\u8fd4\u56de\u72b6\u6001\u53d8\u91cf\u503c\u7684\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a getter \u51fd\u6570\u6765\u83b7\u53d6\u5f53\u524d\u503c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createSignal, createMemo } from "solid-js";\n\nconst [count, setCount] = createSignal(0);\n\n// highlight-next-line\nconst double = createMemo(() => count() * 2);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"count"})," \u72b6\u6001\u53d8\u91cf\uff0c\u7528\u4e8e\u8ddf\u8e2a\u5f53\u524d\u8ba1\u6570\u3002\u6211\u4eec\u8fd8\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"double"})," \u72b6\u6001\u53d8\u91cf\uff0c",(0,i.jsx)(n.code,{children:"double"})," \u72b6\u6001\u53d8\u91cf\u662f ",(0,i.jsx)(n.code,{children:"count"})," \u72b6\u6001\u53d8\u91cf\u7684\u8bb0\u5fc6\u7248\u672c\u3002\u8fd9\u610f\u5473\u7740 ",(0,i.jsx)(n.code,{children:"count"})," \u53ea\u6709\u5f53\u72b6\u6001\u53d8\u91cf\u66f4\u6539\u65f6\uff0c",(0,i.jsx)(n.code,{children:"double"})," \u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u72b6\u6001\u53d8\u91cf\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u5feb\u901f\u793a\u4f8b\uff0c\u8bf4\u660e\u5982\u4f55\u5229 ",(0,i.jsx)(n.code,{children:"createMemo"})," \u7528\u5b83\u6765\u521b\u5efa\u8bb0\u5fc6\u6d3e\u751f\u72b6\u6001\u5e76\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createMemo } from "solid-js";\n\nconst [count, setCount] = createSignal(0);\n\n// highlight-next-line\nconst double = createMemo(() => count() * 2);\n\nfunction Counter() {\n  return (\n    <div>\n      <button onClick={() => setCount(count() - 1)}>-</button>\n      <span>This is the base value : {count()}</span>\n      <span>This is the doubled value : {double()}</span>\n      <button onClick={() => setCount(count() + 1)}>+</button>\n    </div>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"createMemo"})," \u80cc\u540e\u7528\u5230\u4e86 ",(0,i.jsx)(n.code,{children:"createComputed"})," \u521b\u5efa\u8ba1\u7b97\u503c\u3002\u6709\u5173 ",(0,i.jsx)(n.code,{children:"createComputed"})," \u539f\u8bed\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u53c2\u8003\u90e8\u5206\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u4e0e\u6b64\u76f8\u5bf9\u5e94\u7684 Vue \u662f ",(0,i.jsx)(n.code,{children:"computed"})," \u51fd\u6570\u3002",(0,i.jsx)(n.code,{children:"computed"})," \u5f53\u4f9d\u8d56\u7684\u72b6\u6001\u53d8\u91cf\u6539\u53d8\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u5b83\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"createeffect",children:(0,i.jsx)(n.code,{children:"createEffect"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createEffect"})," \u7528\u4e8e\u521b\u5efa\u53cd\u5e94\u6548\u679c\u3002\u5b83\u91c7\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u6bcf\u5f53\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u53cd\u5e94\u6027\u72b6\u6001\u53d8\u91cf\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u8be5\u51fd\u6570\u5c31\u4f1a\u6267\u884c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createSignal, createEffect } from "solid-js";\n\nconst [count, setCount] = createSignal(0);\n\n// highlight-start\ncreateEffect(() => {\n  console.log("Count has been updated:", count());\n});\n// highlight-end\n\nfunction Counter() {\n  return (\n    <div>\n      <button onClick={() => setCount(count() - 1)}>-</button>\n      <span>{count()}</span>\n      <button onClick={() => setCount(count() + 1)}>+</button>\n    </div>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u6b21\u72b6\u6001 ",(0,i.jsx)(n.code,{children:"count"})," \u53d1\u751f\u53d8\u5316\u65f6\uff0c\u90fd\u4f1a\u6267\u884c\u6548\u679c\u3002\u8fd9\u5bf9\u4e8e\u65e5\u5fd7\u8bb0\u5f55\u3001\u8fdb\u884c API \u8c03\u7528\u7b49\u5f88\u6709\u7528\u3002\u6bcf\u5f53\u53cd\u5e94\u6027\u72b6\u6001\u53d8\u91cf\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u60a8\u5e0c\u671b\u8fd0\u884c\u7684\u4efb\u4f55\u526f\u4f5c\u7528\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createEffect"})," \u6765\u5b8c\u6210\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u4e0e\u6b64\u76f8\u5bf9\u5e94\u7684 Vue \u662f ",(0,i.jsx)(n.code,{children:"watch"})," \u51fd\u6570\u3002\u8be5\u51fd\u6570\u7528\u4e8e\u521b\u5efa\u526f\u4f5c\u7528\uff0c\u6bcf\u5f53\u72b6\u6001\u53d8\u91cf\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5c31\u4f1a\u6267\u884c\u8be5 ",(0,i.jsx)(n.code,{children:"watch"})," \u526f\u4f5c\u7528\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"createresource",children:(0,i.jsx)(n.code,{children:"createResource"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createResource"})," \u662f\u4e00\u4e2a\u7b80\u5355\u4f46\u975e\u5e38\u6709\u7528\u7684\u57fa\u5143\uff0c\u5b83\u521b\u5efa\u4e00\u4e2a\u53cd\u6620\u5f02\u6b65\u51fd\u6570\u503c\u7684\u4fe1\u53f7\u3002\u5b83\u63a5\u53d7\u5f02\u6b65\u51fd\u6570\u3001\u53ef\u9009\u9009\u9879\u548c\u53ef\u9009\u6e90\u4fe1\u53f7\uff0c\u7528\u4e8e\u586b\u5145\u5f02\u6b65\u51fd\u6570\u7684\u53c2\u6570\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u5feb\u901f\u793a\u4f8b\uff0c\u8bf4\u660e ",(0,i.jsx)(n.code,{children:"createResource"})," \u5982\u4f55\u4f7f\u7528\u4ece API \u83b7\u53d6\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { createResource, Show } from "solid-js";\n\nasync function fetchUser(id) {\n  const response = await fetch(\n    `https://jsonplaceholder.typicode.com/users/${id}`\n  );\n  return await response.json();\n}\n\nfunction User({ id }) {\n  const [id, setId] = createSignal(1);\n\n  // highlight-next-line\n  const [user] = createResource(id, fetchUser);\n\n  return (\n    <div>\n      <Show when={!user.loading} fallback={<LoadingComponent />}>\n        <div>\u59d3\u540d\uff1a{user().name}</div>\n        <div>\u6635\u79f0\uff1a{user().username}</div>\n        <div>\u90ae\u7bb1\uff1a{user().email}</div>\n        <div>\u624b\u673a\uff1a{user().phone}</div>\n        <div>\u7f51\u7ad9\uff1a{user().website}</div>\n      </Show>\n    </div>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createResource"})," \u8fd4\u56de\u4e00\u4e9b\u975e\u5e38\u9177\u7684\u4e1c\u897f\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u4eec\u6765\u88ab\u52a8\u5730\u663e\u793a\u8d44\u6e90\u7684\u72b6\u6001\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u770b\u5230\u5b83\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"loading"})," \u5e03\u5c14\u5c5e\u6027\uff0c\u5f53\u8d44\u6e90\u6b63\u5728\u52a0\u8f7d\u65f6\u4e3a true\uff0c\u5f53\u5b83\u4e0d\u52a0\u8f7d\u65f6\u4e3a false\u3002\u5b83\u8fd8\u5177\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"error"})," \u5c5e\u6027\uff0c\u5982\u679c\u5728\u83b7\u53d6\u8d44\u6e90\u65f6\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u8be5\u5c5e\u6027\u662f\u9519\u8bef\u5bf9\u8c61\u3002",(0,i.jsx)(n.code,{children:"createResource"})," \u8fd8\u6709\u4e00\u4e9b\u9009\u9879\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u6765\u81ea\u5b9a\u4e49\u884c\u4e3a\u3002\u4ee5\u4e0b\u662f\u5b83\u4eec\u7684\u5217\u8868\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u7528\u7684\u7b80\u77ed\u63cf\u8ff0\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initialValue"}),"\uff1a\u8d44\u6e90\u7684\u521d\u59cb\u503c\u3002\u5982\u679c\u8981\u5728\u52a0\u8f7d\u8d44\u6e90\u65f6\u663e\u793a\u67d0\u4e9b\u5185\u5bb9\uff0c\u8fd9\u5c06\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),"\uff1a\u8d44\u6e90\u7684\u540d\u79f0\u3002\u8fd9\u5bf9\u4e8e\u8c03\u8bd5\u5f88\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"deferStream"}),"\uff1a\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u786e\u5b9a\u60a8\u7684\u5e94\u7528\u5728\u5448\u73b0\u5230\u6d41\u4e4b\u524d\u662f\u5426\u5e94\u7b49\u5f85\u8d44\u6e90\u5b8c\u6210\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4ec5\u5728\u4f7f\u7528\u8be5 ",(0,i.jsx)(n.code,{children:"renderToStream"})," \u51fd\u6570\u65f6\u624d\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssrLoadFrom"}),"\uff1a\u8fd9\u53ef\u7528\u4e8e\u544a\u8bc9\u8d44\u6e90\u662f\u5426\u5e94\u8be5\u4ece\u670d\u52a1\u5668\u52a0\u8f7d\u5176\u521d\u59cb\u6570\u636e\u6216\u4ece ",(0,i.jsx)(n.code,{children:"initialValue"})," \u670d\u52a1\u5668\u52a0\u8f7d\u521d\u59cb\u6570\u636e\u3002\u5982\u679c\u60a8\u6709\u4e00\u4e9b\u670d\u52a1\u5668\u7aef\u6570\u636e\u8981\u5206\u914d\u7ed9\u6b64\u8d44\u6e90\uff0c\u8fd9\u5c06\u975e\u5e38\u6709\u7528\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,i.jsx)(n.code,{children:"'initial'"})," \u6216 ",(0,i.jsx)(n.code,{children:"'server'"})," \u4f20\u9012\u7ed9\u6b64\u9009\u9879\u6765\u4f7f\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"storage"}),"\uff1a\u6b64\u9009\u9879\u7528\u4f5c\u5b58\u50a8\u8d44\u6e90\u6570\u636e\u7684\u58f0\u660e\u6027\u65b9\u5f0f\u3002\u5982\u679c\u60a8\u60f3\u5c06\u6570\u636e\u5b58\u50a8\u5728\u7f13\u5b58\u6216\u7c7b\u4f3c\u7684\u4e1c\u897f\u4e2d\uff0c\u8fd9\u5c06\u975e\u5e38\u6709\u7528\u3002\u6b64\u9009\u9879\u91c7\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u51fd\u6570\u7684\u5143\u7ec4\uff0c\u4e00\u4e2a\u662f Accessor \u548c\u4e00\u4e2a Either\uff0c\u7c7b\u578b\u4e3a any\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u5982\u4f55\u4f7f\u7528\u6b64\u9009\u9879\u7684\u793a\u4f8b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { createResource } from "solid-js";\n\nasync function fetcherFunc(id: number) {\n  const response = await fetch(\n    `https://jsonplaceholder.typicode.com/users/${id}`\n  );\n  return await response.json();\n}\n\nconst [id, setId] = createSignal(1);\nconst [data, setData] = createSignal({});\n\n// highlight-start\nconst [user] = createResource(id, fetcherFunc, {\n  storage: (init: any) => [data, setData],\n});\n// highlight-end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u65e6\u8d44\u6e90\u7684\u6570\u636e\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u88ab\u89e3\u6790\u51fa\u6765\uff0c\u5b83\u5c06\u81ea\u52a8\u5b58\u50a8\u5728\u4fe1\u53f7\u4e2d ",(0,i.jsx)(n.code,{children:"data"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8981\u5728\u5355\u4e2a\u8d44\u6e90\u4e2d\u4f7f\u7528\u591a\u4e2a\u4fe1\u53f7\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createMemo"})," \u57fa\u5143\u521b\u5efa\u6d3e\u751f\u72b6\u6001\u6765\u5b9e\u73b0\u3002\u60a8\u53ef\u80fd\u60f3\u77e5\u9053\u4e3a\u4ec0\u4e48\u6211\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"createMemo"})," \u539f\u8bed\u800c\u4e0d\u662f\u4ec5\u4ec5\u521b\u5efa\u6807\u51c6\u6d3e\u751f\u72b6\u6001\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"createMemo"})," \u8fd9\u5c06\u6709\u52a9\u4e8e\u4fdd\u6301\u6d3e\u751f\u72b6\u6001\u7684\u54cd\u5e94\u6027\uff0c\u800c\u5982\u679c\u521b\u5efa\u6b63\u5e38\u6d3e\u751f\u72b6\u6001\uff0c\u5219\u5982\u679c\u72b6\u6001\u503c\u66f4\u6539\uff0c\u5219\u6d3e\u751f\u72b6\u6001\u5c06\u4e0d\u4f1a\u66f4\u65b0\u3002\u4ee5\u4e0b\u662f\u5b83\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u7684\u6837\u5b50\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { createResource, createMemo } from "solid-js";\n\n// \u83b7\u53d6\u51fd\u6570\u66f4\u6539\u4e3a\u63a5\u53d7\u5bf9\u8c61\nasync function fetcherFunc(info: { id: number; name: string }) {\n  const response = await fetch(\n    `https://jsonplaceholder.typicode.com/users/${info.id}/posts?name=${info.name}`\n  );\n  return await response.json();\n}\n\nconst [id, setId] = createSignal(1);\nconst [name, setName] = createSignal("");\n\n// \u4f7f\u7528 createMemo \u521b\u5efa\u7684\u6d3e\u751f\u72b6\u6001\nconst derivedState = createMemo(() => ({ id: id(), name: name() }));\n\n// highlight-next-line\nconst [posts] = createResource(derivedState, fetcherFunc);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u53ea\u662f\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"createResource"})," \u4e2d\u4f7f\u7528\u591a\u4e2a\u4fe1\u53f7\u503c\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u8981\u4e86\u89e3\u6709\u5173 Solid \u57fa\u5143\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b Solid \u6df1\u5165\u63a2\u7a76\u90e8\u5206"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},47214:function(e,n,c){c.d(n,{Z:function(){return d},a:function(){return s}});var i=c(50959);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);