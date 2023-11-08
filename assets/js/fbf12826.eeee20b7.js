"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[8856],{4519:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return a}});var s=i(85893),t=i(11151),d=i(54277);const l={last_update:{date:1699453750805}},o="\u624e\u5b9e\u7684\u601d\u7ef4",r={id:"codeing/solidjs/thinking-solid",title:"\u624e\u5b9e\u7684\u601d\u7ef4",description:"Solid \u7684\u8bbe\u8ba1\u878d\u5408\u4e86\u5404\u79cd\u5173\u4e8e\u539f\u5219\u548c\u4ef7\u503c\u89c2\u7684\u89c2\u70b9\uff0c\u5e2e\u52a9\u6211\u4eec\u521b\u5efa\u66f4\u597d\u7684\u7f51\u7ad9\u548c\u5e94\u7528\u7a0b\u5e8f\u3002\u4e86\u89e3\u8fd9\u4e9b\u57fa\u672c\u539f\u7406\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u5b66\u4e60\u548c\u4f7f\u7528 Solid\u3002",source:"@site/docs/09-codeing/09-solidjs/02-thinking-solid.mdx",sourceDirName:"09-codeing/09-solidjs",slug:"/codeing/solidjs/thinking-solid",permalink:"/codeing/solidjs/thinking-solid",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/09-solidjs/02-thinking-solid.mdx",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1699453750.805,formattedLastUpdatedAt:"2023\u5e7411\u67088\u65e5",sidebarPosition:2,frontMatter:{last_update:{date:1699453750805}},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Solid \uff1f",permalink:"/codeing/solidjs/why-solid"},next:{title:"\u5355\u6587\u4ef6\u5236\u4f5c",permalink:"/technology/\u5355\u6587\u4ef6\u5236\u4f5c/"}},c={},a=[{value:"\u58f0\u660e\u5f0f\u7f16\u7a0b",id:"\u58f0\u660e\u5f0f\u7f16\u7a0b",level:2},{value:"\u58f0\u660e\u5f0f",id:"\u58f0\u660e\u5f0f",level:3},{value:"\u547d\u4ee4\u5f0f",id:"\u547d\u4ee4\u5f0f",level:3},{value:"\u6d88\u5931\u7684\u7ec4\u4ef6",id:"\u6d88\u5931\u7684\u7ec4\u4ef6",level:2},{value:"\u8bfb / \u5199\u5206\u79bb",id:"\u8bfb--\u5199\u5206\u79bb",level:2},{value:"\u7b80\u5355\u603b\u6bd4\u5bb9\u6613\u597d",id:"\u7b80\u5355\u603b\u6bd4\u5bb9\u6613\u597d",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u624e\u5b9e\u7684\u601d\u7ef4",children:"\u624e\u5b9e\u7684\u601d\u7ef4"}),"\n",(0,s.jsx)(n.p,{children:"Solid \u7684\u8bbe\u8ba1\u878d\u5408\u4e86\u5404\u79cd\u5173\u4e8e\u539f\u5219\u548c\u4ef7\u503c\u89c2\u7684\u89c2\u70b9\uff0c\u5e2e\u52a9\u6211\u4eec\u521b\u5efa\u66f4\u597d\u7684\u7f51\u7ad9\u548c\u5e94\u7528\u7a0b\u5e8f\u3002\u4e86\u89e3\u8fd9\u4e9b\u57fa\u672c\u539f\u7406\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u5b66\u4e60\u548c\u4f7f\u7528 Solid\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u8282\u5c06\u4ecb\u7ecd\u8fd9\u4e9b\u7279\u5b9a\u539f\u5219\u3002\u4e3a\u4e86\u786e\u4fdd\u6bcf\u4e2a\u4eba\u90fd\u7406\u89e3\u8fd9\u4e9b\u6982\u5ff5\uff0c\u6211\u4eec\u5c06\u5728\u9ad8\u5c42\u6b21\u4e0a\u8ba8\u8bba\u5b83\u4eec\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u58f0\u660e\u5f0f\u7f16\u7a0b",children:"\u58f0\u660e\u5f0f\u7f16\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u58f0\u660e\u5f0f\u7f16\u7a0b\u662f\u6307\u7f16\u5199\u8ba1\u7b97\u673a\u4ee3\u7801\u7684\u505a\u6cd5\uff0c\u8be5\u4ee3\u7801\u89e3\u91ca\u4e86\u8ba1\u7b97\u673a\u5e94\u8be5\u505a\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u5982\u4f55\u5b8c\u6210\u5b83\u3002\u8fd9\u5c31\u50cf\u544a\u8bc9\u53a8\u5e08\u505a\u714e\u86cb\u5377\u4e00\u6837\u2014\u2014\u4ed6\u4eec\u77e5\u9053\u8be5\u600e\u4e48\u505a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\u5f0f\u7f16\u7a0b\u544a\u8bc9\u8ba1\u7b97\u673a\u5982\u4f55\u4e00\u6b65\u4e00\u6b65\u5730\u505a\u67d0\u4e8b\u3002\u8fd9\u5c31\u50cf\u544a\u8bc9\u522b\u4eba\u5982\u4f55\u505a\u714e\u86cb\u5377\uff1a\u201c\u9996\u5148\uff0c\u62ff\u4e24\u4e2a\u9e21\u86cb\u3002\u7136\u540e\uff0c\u7528\u53c9\u5b50\u5c06\u9e21\u86cb\u6253\u5165\u7897\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5e73\u5e95\u9505\u4e2d\u878d\u5316\u4e00\u4e9b\u9ec4\u6cb9\uff0c\u7136\u540e\u52a0\u5165\u9e21\u86cb\u3002\u60a8\u6b63\u5728\u5c31\u5982\u4f55\u5236\u4f5c\u714e\u86cb\u5377\u7ed9\u51fa\u5177\u4f53\u8bf4\u660e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u7b80\u8981\u4e86\u89e3\u4e00\u4e0b\u8fd9\u4e9b\u65b9\u6cd5\u4e2d\u7684\u6bcf\u4e00\u79cd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u58f0\u660e\u5f0f",children:"\u58f0\u660e\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let numbers = [1, 2, 3, 4, 5];\nlet double = numbers.map((value, i) => value * 2);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"numbers"})," \u7684\u6570\u5b57\u6570\u7ec4\u3002\u7136\u540e\u6211\u4eec\u4f7f\u7528\u8be5 ",(0,s.jsx)(n.code,{children:"map"})," \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a \u4e58\u4ee5 2 \u7684\u503c ",(0,s.jsx)(n.code,{children:"numbers"})," \u7684\u65b0\u6570\u7ec4 ",(0,s.jsx)(n.code,{children:"double"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u662f\u4e00\u4e2a\u58f0\u660e\u6027\u51fd\u6570\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u60a8\u6307\u5b9a\u8981\u5e94\u7528\u4e8e\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u7684\u8f6c\u6362\uff0c\u800c\u4e0d\u5fc5\u6307\u5b9a\u5982\u4f55\u5b9e\u73b0\u8be5 ",(0,s.jsx)(n.code,{children:"map"})," \u8f6c\u6362\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u547d\u4ee4\u5f0f",children:"\u547d\u4ee4\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let numbers = [1, 2, 3, 4, 5];\nlet double = [];\nfor (let i = 0; i < numbers.length; i++) {\n  double.push(numbers[i] * 2);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 for \u5faa\u73af\u6765\u904d\u5386\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u4e00\u6b21\u4e00\u4e2a\u3002\u5728\u5faa\u73af\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u8be5 ",(0,s.jsx)(n.code,{children:"push"})," \u65b9\u6cd5\u5c06\u6bcf\u4e2a\u6570\u5b57\u52a0\u500d\u7684\u7ed3\u679c\u6dfb\u52a0\u5230\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"double"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u88ab\u8ba4\u4e3a\u662f\u52bf\u5728\u5fc5\u884c\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u6545\u610f\u904d\u5386\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6570\u5b57\uff0c\u5e76\u5c06\u52a0\u500d\u7684\u7ed3\u679c\u63a8\u9001\u5230\u65b0\u6570\u7ec4\u3002\u5b8c\u6210\u4e86\u540c\u6837\u7684\u4efb\u52a1\uff0c\u4f46\u4ee3\u7801\u66f4\u52a0\u590d\u6742\u548c\u4e4f\u5473\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Solid \u5728\u5404\u4e2a\u9886\u57df\u5229\u7528\u58f0\u660e\u5f0f\u7f16\u7a0b\u65b9\u6cd5\uff0c\u4f7f\u5176\u66f4\u52a0\u7528\u6237\u53cb\u597d\u548c\u6613\u4e8e\u7406\u89e3\u3002\u8fd9\u79cd\u65b9\u6cd5\u5f3a\u8c03\u8bf4\u660e\u671f\u671b\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u5982\u4f55\u5b9e\u73b0\u5b83\uff0c\u4f7f\u5176\u4e0d\u90a3\u4e48\u590d\u6742\uff0c\u5b66\u4e60\u548c\u4f7f\u7528\u8d77\u6765\u66f4\u5feb\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6d88\u5931\u7684\u7ec4\u4ef6",children:"\u6d88\u5931\u7684\u7ec4\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0d\u8003\u8651\u66f4\u65b0\u7684\u60c5\u51b5\u4e0b\uff0c\u6784\u5efa\u7ec4\u4ef6\u5df2\u7ecf\u8db3\u591f\u5177\u6709\u6311\u6218\u6027\u4e86\u3002Solid \u4e2d\u7684\u66f4\u65b0\u72ec\u7acb\u4e8e\u7ec4\u4ef6\u8fdb\u884c\u5904\u7406\u3002\u7ec4\u4ef6\u51fd\u6570\u5728\u6d88\u5931\u4e4b\u524d\u53ea\u88ab\u8c03\u7528\u4e00\u6b21\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7ec4\u4ef6\u7684\u5b58\u5728\u662f\u4e3a\u4e86\u7ec4\u7ec7\u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u5904\u7406\u66f4\u65b0\u6216\u91cd\u65b0\u6e32\u67d3\u3002\u4e0b\u9762\u662f\u6b64\u8fc7\u7a0b\u7684\u5feb\u901f\u56fe\uff1a"}),"\n",(0,s.jsx)(d.Z,{alt:"Solid simple state update",sources:{light:"https://docs.solidjs.com/images/foundations/thinking-solid/solid-simple-state-update-light.svg",dark:"https://docs.solidjs.com/images/foundations/thinking-solid/solid-simple-state-update-dark.svg"}}),"\n",(0,s.jsx)(n.h2,{id:"\u8bfb--\u5199\u5206\u79bb",children:"\u8bfb / \u5199\u5206\u79bb"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6784\u5efa\u7cfb\u7edf\u65f6\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u7cbe\u786e\u63a7\u5236\u548c\u53ef\u9884\u6d4b\u6027\u53ef\u4ee5\u6539\u5584\u5f00\u53d1\u4eba\u5458\u5728\u4f7f\u7528\u8fd9\u4e9b\u7cfb\u7edf\u65f6\u7684\u4f53\u9a8c \uff08DX\uff09\u3002\u4e3a\u4e86\u5728\u8fd9\u4e9b\u7cfb\u7edf\u4e2d\u5f3a\u5236\u6267\u884c\u5355\u5411\u6d41\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5b8c\u5168\u4e0d\u53ef\u53d8\u6027\uff0c\u800c\u53ea\u9700\u8981\u63a7\u5236\u8c01\u53ef\u4ee5\u6216\u4e0d\u80fd\u5199\u5165\u6216\u4fee\u6539\u6570\u636e\u7684\u80fd\u529b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Solid \u901a\u8fc7\u5b9e\u73b0\u5176\u539f\u8bed\u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002\u8fd9\u4e9b\u57fa\u5143\u7684\u793a\u4f8b\u5305\u62ec ",(0,s.jsx)(n.code,{children:"createStore"}),"\u3001",(0,s.jsx)(n.code,{children:"createSignal"})," \u548c\u66f4\u591a\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8bf4\u660e\u6211\u4eec\u6240\u8bf4\u7684\u8bfb/\u5199\u9694\u79bb\u662f\u4ec0\u4e48\u610f\u601d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const [name, setName] = createSignal("");\nconst valueOfName = name(); // \ud83d\udc48 \u8bfb\u53d6\nfunction setValueOfName(text) {\n  setName(text); // \ud83d\udc48 \u5199\u5165\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"createSignal"})," \u6211\u4eec\u4f7f\u7528\u4e86 Solids \u57fa\u5143\u4e4b\u4e00\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u8c03\u7528\u6b64\u539f\u8bed\u4f1a\u521b\u5efa\u4e00\u4e2a\u53cd\u5e94\u5f0f\u503c\uff1b\u8c03\u7528\u8fd9\u4e2a\u539f\u8bed\u8fd4\u56de\u7684\u4e24\u4ef6\u4e8b\u662f getter \u548c setter\u3002\u8bf7\u6ce8\u610f\uff0c",(0,s.jsx)(n.code,{children:"name"}),"\uff08getter\uff09\u4e0e ",(0,s.jsx)(n.code,{children:"setName"}),"\uff08setter\uff09\u662f\u5206\u5f00\u7684\u3002\u8fd9\u53ea\u662f Solid \u5206\u79bb\u4e8b\u7269\u7684\u65b9\u5f0f\u4e4b\u4e00\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u5355\u603b\u6bd4\u5bb9\u6613\u597d",children:"\u7b80\u5355\u603b\u6bd4\u5bb9\u6613\u597d"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u663e\u5f0f\u548c\u4e00\u81f4\u7684\u7ea6\u5b9a\uff0c\u5373\u4f7f\u5b83\u4eec\u9700\u8981\u66f4\u591a\u7684\u52aa\u529b\uff0c\u4e5f\u6709\u5229\u4e8e\u6784\u5efa\u5065\u58ee\u7684\u7cfb\u7edf\u3002\u8fd9\u662f\u7ec6\u7c92\u5ea6\u53cd\u5e94\u6027\u7684\u91cd\u8981\u4e00\u8bfe\u3002Solid \u65e8\u5728\u63d0\u4f9b\u6700\u5c11\u7684\u5de5\u5177\uff0c\u4e3a\u8fdb\u4e00\u6b65\u5f00\u53d1\u5960\u5b9a\u57fa\u7840\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e0e Solid \u91c7\u7528\u66f4\u5177\u58f0\u660e\u6027\u7684\u65b9\u6cd5\u800c\u4e0d\u662f\u547d\u4ee4\u5f0f\u65b9\u6cd5\u7684\u539f\u56e0\u4e00\u81f4\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var s=i(67294);const t={},d=s.createContext(t);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);