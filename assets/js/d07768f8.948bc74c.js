"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[6990],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={last_update:{date:1694267720814}},l=void 0,c={unversionedId:"\u7f16\u7a0b/JavaScript/\u89c2\u5bdf\u5143\u7d20\u66f4\u6539",id:"\u7f16\u7a0b/JavaScript/\u89c2\u5bdf\u5143\u7d20\u66f4\u6539",title:"\u89c2\u5bdf\u5143\u7d20\u66f4\u6539",description:"",source:"@site/docs/09.\u7f16\u7a0b/03.JavaScript/02.\u89c2\u5bdf\u5143\u7d20\u66f4\u6539.md",sourceDirName:"09.\u7f16\u7a0b/03.JavaScript",slug:"/\u7f16\u7a0b/JavaScript/\u89c2\u5bdf\u5143\u7d20\u66f4\u6539",permalink:"/docs/\u7f16\u7a0b/JavaScript/\u89c2\u5bdf\u5143\u7d20\u66f4\u6539",draft:!1,editUrl:"https://github.com/share121/any-doc/edit/main/docs/09.\u7f16\u7a0b/03.JavaScript/02.\u89c2\u5bdf\u5143\u7d20\u66f4\u6539.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1694267720.814,formattedLastUpdatedAt:"2023\u5e749\u67089\u65e5",sidebarPosition:2,frontMatter:{last_update:{date:1694267720814}},sidebar:"tutorialSidebar",previous:{title:"scope \u4f2a\u7c7b",permalink:"/docs/\u7f16\u7a0b/JavaScript/scope \u4f2a\u7c7b"},next:{title:"\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4",permalink:"/docs/\u7f16\u7a0b/JavaScript/\u4fee\u6539\u6587\u4ef6\u8bbf\u95ee\u65f6\u95f4\u3001\u4fee\u6539\u65f6\u95f4"}},d={},s=[],p={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function observe(\n  callback: (\n    mutations: {\n      addedNodes: Node[];\n      targetNodes: Node[];\n      attributeName: string | null;\n      attributeNamespace: string | null;\n      nextSibling: Node | null;\n      oldValue: string | null;\n      previousSibling: Node | null;\n      removedNodes: Node[];\n      target: Node;\n      type: MutationRecordType;\n    }[],\n    observer: MutationObserver\n  ) => void,\n  target: Node,\n  options?: MutationObserverInit\n) {\n  function getAll(...nodes: Node[]) {\n    const tmp = [...nodes];\n    for (let i = 0; i < tmp.length; i++) {\n      tmp.push(...tmp[i].childNodes);\n    }\n    return tmp;\n  }\n  const observer = new MutationObserver((mutationsList) => {\n    callback(\n      mutationsList.map((mutation) => {\n        let _addedNodes: Node[] | null = null;\n        let _removedNodes: Node[] | null = null;\n        let _targetNodes: Node[] | null = null;\n        return {\n          type: mutation.type,\n          target: mutation.target,\n          attributeName: mutation.attributeName,\n          attributeNamespace: mutation.attributeNamespace,\n          oldValue: mutation.oldValue,\n          nextSibling: mutation.nextSibling,\n          previousSibling: mutation.previousSibling,\n          get addedNodes() {\n            _addedNodes ??= getAll(...mutation.addedNodes);\n            return _addedNodes;\n          },\n          get removedNodes() {\n            _removedNodes ??= getAll(...mutation.removedNodes);\n            return _removedNodes;\n          },\n          get targetNodes() {\n            _targetNodes ??= getAll(mutation.target);\n            return _targetNodes;\n          },\n        };\n      }),\n      observer\n    );\n  });\n  observer.observe(target, options);\n  return observer;\n}\n")))}f.isMDXComponent=!0}}]);