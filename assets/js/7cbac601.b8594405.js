"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[6587],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,m=l["".concat(p,".").concat(d)]||l[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99552:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={last_update:{date:1696239854575}},p=void 0,u={unversionedId:"\u7f16\u7a0b/JavaScript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",id:"\u7f16\u7a0b/JavaScript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",title:"\u83b7\u5f97\u6240\u6709\u6587\u4ef6",description:"",source:"@site/docs/09.\u7f16\u7a0b/03.JavaScript/04.\u83b7\u5f97\u6240\u6709\u6587\u4ef6.md",sourceDirName:"09.\u7f16\u7a0b/03.JavaScript",slug:"/\u7f16\u7a0b/JavaScript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",permalink:"/\u7f16\u7a0b/JavaScript/\u83b7\u5f97\u6240\u6709\u6587\u4ef6",draft:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09.\u7f16\u7a0b/03.JavaScript/04.\u83b7\u5f97\u6240\u6709\u6587\u4ef6.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1696239854.575,formattedLastUpdatedAt:"2023\u5e7410\u67082\u65e5",sidebarPosition:4,frontMatter:{last_update:{date:1696239854575}},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4",permalink:"/\u7f16\u7a0b/JavaScript/\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4"},next:{title:"\u83b7\u5f97\u6570\u636e\u7c7b\u578b",permalink:"/\u7f16\u7a0b/JavaScript/\u83b7\u5f97\u6570\u636e\u7c7b\u578b"}},s={},l=[],f={toc:l},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u83b7\u53d6\u6240\u6709\u6587\u4ef6\n * @param {...string} paths\n * @returns {AsyncGenerator<string, void, void>}\n */\nasync function* getAllFiles(...paths) {\n  const temp = [...paths];\n  while (temp.length) {\n    const dirPath = temp.pop();\n    for (const file of (await fss.readdir(dirPath)).map((file) =>\n      path.join(dirPath, file)\n    ))\n      if ((await fss.stat(file)).isDirectory()) temp.push(file);\n      else yield file;\n  }\n}\n")))}m.isMDXComponent=!0}}]);