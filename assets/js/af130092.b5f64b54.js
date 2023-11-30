"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[623],{3316:function(e,n,d){d.r(n),d.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return t},toc:function(){return r}});var o=d(85893),s=d(11151);const c={last_update:{date:1700892148151}},l="uTools DB API",t={id:"codeing/utools/db",title:"uTools DB API",description:"\u4f20\u7edf\u7684 B/S \u7ed3\u6784\u7684\u7a0b\u5e8f\u4e2d\uff0c\u9664\u4e86\u524d\u7aef\u7684\u5f00\u53d1\u4e4b\u5916\uff0c\u53ef\u80fd\u8fd8\u9700\u8981\u6709\u4e00\u53f0\u670d\u52a1\u5668\u3001\u4e00\u95e8\u540e\u7aef\u8bed\u8a00\u548c\u4e00\u4e2a\u6570\u636e\u5e93\u6765\u5904\u7406\u548c\u5b58\u50a8\u7528\u6237\u6570\u636e\uff0c\u8fd9\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u7ef4\u62a4\u6210\u672c\u548c\u53ef\u7528\u6027\u7684\u95ee\u9898\u3002",source:"@site/docs/09-codeing/11-utools/06-db.md",sourceDirName:"09-codeing/11-utools",slug:"/codeing/utools/db",permalink:"/codeing/utools/db",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/11-utools/06-db.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1700892148.151,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",sidebarPosition:6,frontMatter:{last_update:{date:1700892148151}},sidebar:"tutorialSidebar",previous:{title:"uTools API",permalink:"/codeing/utools/api"},next:{title:"ubrowser API",permalink:"/codeing/utools/ubrowser"}},i={},r=[{value:"\u672c\u5730\u6570\u636e\u5e93",id:"\u672c\u5730\u6570\u636e\u5e93",level:2},{value:"<code>utools.db.put(doc)</code>",id:"utoolsdbputdoc",level:3},{value:"<code>utools.db.get(id)</code>",id:"utoolsdbgetid",level:3},{value:"<code>utools.db.remove(doc)</code>",id:"utoolsdbremovedoc",level:3},{value:"<code>utools.db.bulkDocs(docs)</code>",id:"utoolsdbbulkdocsdocs",level:3},{value:"<code>utools.db.allDocs(key)</code>",id:"utoolsdballdocskey",level:3},{value:"<code>utools.db.postAttachment(docId, attachment, type)</code>",id:"utoolsdbpostattachmentdocid-attachment-type",level:3},{value:"<code>utools.db.getAttachment(docId)</code>",id:"utoolsdbgetattachmentdocid",level:3},{value:"<code>utools.db.getAttachmentType(docId)</code>",id:"utoolsdbgetattachmenttypedocid",level:3},{value:"<code>utools.db.replicateStateFromCloud()</code>",id:"utoolsdbreplicatestatefromcloud",level:3},{value:"dbStorage",id:"dbstorage",level:2},{value:"<code>utools.dbStorage.setItem(key, value)</code>",id:"utoolsdbstoragesetitemkey-value",level:3},{value:"<code>utools.dbStorage.getItem(key)</code>",id:"utoolsdbstoragegetitemkey",level:3},{value:"<code>utools.dbStorage.removeItem(key)</code>",id:"utoolsdbstorageremoveitemkey",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"utools-db-api",children:"uTools DB API"}),"\n",(0,o.jsx)(n.p,{children:"\u4f20\u7edf\u7684 B/S \u7ed3\u6784\u7684\u7a0b\u5e8f\u4e2d\uff0c\u9664\u4e86\u524d\u7aef\u7684\u5f00\u53d1\u4e4b\u5916\uff0c\u53ef\u80fd\u8fd8\u9700\u8981\u6709\u4e00\u53f0\u670d\u52a1\u5668\u3001\u4e00\u95e8\u540e\u7aef\u8bed\u8a00\u548c\u4e00\u4e2a\u6570\u636e\u5e93\u6765\u5904\u7406\u548c\u5b58\u50a8\u7528\u6237\u6570\u636e\uff0c\u8fd9\u4f1a\u5e26\u6765\u5f88\u5927\u7684\u7ef4\u62a4\u6210\u672c\u548c\u53ef\u7528\u6027\u7684\u95ee\u9898\u3002"}),"\n",(0,o.jsx)(n.p,{children:"uTools \u7684\u5f88\u591a\u63d2\u4ef6\u5e94\u7528\u5c31\u50cf\u662f\u4e00\u4e2a\u8f7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u603b\u662f\u4f1a\u78b0\u5230\u4e00\u4e9b\u6570\u636e\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\u7684\u573a\u666f\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a nosql \u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4f7f\u7528\uff0c\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u8ba1\u7b97\u673a\u7cfb\u7edf\uff0c\u5982\u679c\u7528\u6237\u5f00\u542f\u540c\u6b65\uff0c\u53ef\u5728\u591a\u4e2a\u8bbe\u5907\u4e4b\u95f4\u5b9e\u73b0\u79d2\u7ea7\u540c\u6b65\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u6570\u636e\u5e93\u8bbe\u8ba1\u4e3a\u79bb\u7ebf\u4f18\u5148\uff0c\u5728\u6ca1\u6709\u7f51\u7edc\u65f6\u7a0b\u5e8f\u4f9d\u7136\u53ef\u4ee5\u63d0\u4f9b\u5b8c\u6574\u7684\u670d\u52a1\u3002\u4f46\u5728\u591a\u4e2a\u8bbe\u5907\u7f16\u8f91\u540c\u4e00\u4e2a\u6587\u6863\u65f6\uff0c\u5c06\u4ea7\u751f\u51b2\u7a81\uff0c\u6570\u636e\u5e93\u4f1a\u7edf\u4e00\u9009\u62e9\u4e00\u4e2a\u7248\u672c\u4f5c\u4e3a\u6700\u7ec8\u7248\u672c\uff0c\u4e3a\u4e86\u5c3d\u53ef\u80fd\u907f\u514d\u51b2\u7a81\uff0c\u5e94\u8be5\u5c06\u5185\u5bb9\u5408\u7406\u7684\u5206\u6563\u5728\u591a\u4e2a\u6587\u6863\uff0c\u800c\u4e0d\u662f\u90fd\u5b58\u653e\u5728\u4e00\u4e2a\u6587\u6863\u4e2d\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u800c\u4e14\u6570\u636e\u5e93\u4ee5\u6587\u6863\u4e3a\u6700\u5c0f\u5355\u4f4d\uff0c\u6bcf\u6b21\u53d8\u66f4\uff0c\u90fd\u4f1a\u89e6\u53d1\u540c\u6b65\u3002\u5408\u7406\u8bbe\u8ba1\u7684\u6587\u6863\u7ed3\u6784\uff0c\u53ef\u4ee5\u51cf\u5c11\u9700\u8981\u540c\u6b65\u7684\u6587\u6863\u6570\u636e\u91cf\uff0c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u672c\u5730\u6570\u636e\u5e93",children:"\u672c\u5730\u6570\u636e\u5e93"}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbputdoc",children:(0,o.jsx)(n.code,{children:"utools.db.put(doc)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"doc"})," Object"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Object"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u521b\u5efa\u6216\u66f4\u65b0\u6570\u636e\u5e93\u6587\u6863\uff0c\u6587\u6863\u5185\u5bb9\u4e0d\u8d85\u8fc7 1M"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.put(doc)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// \u521b\u5efa\nutools.db.put({\n  _id: "demo",\n  data: "demo",\n});\n// \u8fd4\u56de {id: "demo", ok: true, rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8"}\n\n// \u66f4\u65b0\nutools.db.put({\n  _id: "demo",\n  data: "demo",\n  _rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8",\n});\n\n// \u5f02\u6b65\u65b9\u5f0f\u66f4\u65b0\nutools.db.promises.put({\n  _id: "demo",\n  data: "demo",\n  _rev: "1-05c9b92e6f24287dc1f4ec79d9a34fa8",\n});\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"_id"})," \u4ee3\u8868\u8fd9\u4e2a\u6587\u6863\u5728\u6570\u636e\u5e93\u4e2d\u552f\u4e00\u503c\uff0c\u5982\u679c\u503c\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u6863\uff0c\u5982\u679c\u503c\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4f1a\u8fdb\u884c\u66f4\u65b0\u3002\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u8fd4\u56de\u5bf9\u8c61\u4e2d\u5305\u542b\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"rev"})," \u5c5e\u6027\uff0c\u8fd9\u662f\u4ee3\u8868\u6b64\u6587\u6863\u7684\u7248\u672c\uff0c\u6bcf\u6b21\u5bf9\u6587\u6863\u8fdb\u884c\u66f4\u65b0\u65f6\uff0c\u90fd\u8981\u5e26\u4e0a\u6700\u65b0\u7684\u7248\u672c\u53f7\uff0c\u5426\u5219\u66f4\u65b0\u5c06\u5931\u8d25\uff0c\u7248\u672c\u5316\u7684\u610f\u4e49\u5728\u4e8e\u89e3\u51b3\u540c\u6b65\u65f6\u6570\u636e\u51b2\u7a81\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u53e6\u5916\u9700\u8981\u6ce8\u610f\uff0c\u6bcf\u6b21\u66f4\u65b0\u65f6\u90fd\u8981\u4f20\u5165\u5b8c\u6574\u7684\u6587\u6863\u6570\u636e\uff0c\u65e0\u6cd5\u5bf9\u5355\u4e2a\u5b57\u6bb5\u8fdb\u884c\u66f4\u65b0\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbgetid",children:(0,o.jsx)(n.code,{children:"utools.db.get(id)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"id"})," String"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Object"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u6839\u636e\u6587\u6863 ID \u83b7\u53d6\u6570\u636e"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.get(id)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.db.get("demo");\n// \u8fd4\u56de {_id: "demo", _rev: "3-9836c5c68af5aef618e17d615882942a", data: "demo"}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbremovedoc",children:(0,o.jsx)(n.code,{children:"utools.db.remove(doc)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"doc"})," String | Object"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Object"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u5220\u9664\u6570\u636e\u5e93\u6587\u6863\uff0c\u53ef\u4ee5\u4f20\u5165\u6587\u6863\u5bf9\u8c61\u6216\u6587\u6863 id \u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.remove(doc)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.db.remove("demo");\n// \u8fd4\u56de {id: "demo", ok: true, rev: "2-effe5dbc23dffc180d8411b23f3108fb"}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbbulkdocsdocs",children:(0,o.jsx)(n.code,{children:"utools.db.bulkDocs(docs)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"docs"})," Array"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Array"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u6279\u91cf\u66f4\u65b0\u6570\u636e\u5e93\u6587\u6863\uff0c\u4f20\u5165\u9700\u8981\u66f4\u6539\u7684\u6587\u6863\u5bf9\u8c61\u5408\u5e76\u6210\u6570\u7ec4\u8fdb\u884c\u6279\u91cf\u66f4\u65b0\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.bulkDocs(docs)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.db.bulkDocs([\n  {\n    _id: "demo1",\n    data: "demo",\n    _rev: "1-c8817a74e292eda4cba1a45924853af6",\n  },\n  {\n    _id: "demo2",\n    data: "demo",\n    _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7",\n  },\n]);\n/* \u8fd4\u56de\n[{\n  id: "demo1", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"\n}, {\n  id: "demo2", ok: true, rev: "2-7857b2801bc0303d2cc0bb82e8afd796"\n}]\n*/\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdballdocskey",children:(0,o.jsx)(n.code,{children:"utools.db.allDocs(key)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"key"})," String | Array"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Array"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6267\u884c\u8be5\u65b9\u6cd5\u5c06\u4f1a\u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\u6587\u6863\uff0c\u5982\u679c\u4f20\u5165\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u8fd4\u56de\u4ee5\u5b57\u7b26\u4e32\u5f00\u5934\u7684\u6587\u6863\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u6307\u5b9a ID \u7684\u6570\u7ec4\uff0c\u4e0d\u4f20\u5165\u5219\u4e3a\u83b7\u53d6\u6240\u6709\u6587\u6863\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.allDocs(key)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// \u5f02\u6b65\u65b9\u5f0f\u83b7\u53d6\u6240\u6709\u6587\u6863\nutools.db.promises.allDocs().then((docs) => {\n  console.log(docs);\n});\n\n// \u4f20\u5165\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56deid\u4ee5 demo \u5f00\u5934\u7684\u6587\u6863\nutools.db.allDocs("demo");\n/* \u8fd4\u56de\n[{\n  _id: "demo/123", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"\n}, {\n  _id: "demo/124", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"\n}, {\n  _id: "demo/125", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"\n}]\n*/\n// \u6839\u636eid\u6570\u7ec4\u8bf7\u6c42\nutools.db.allDocs(["demo1", "demo2"]);\n/* \u8fd4\u56de\n[{\n  _id: "demo1", _rev: "2-7857b2801bc0303d2cc0bb82e8afd796", data: "demo"\n}, {\n  _id: "demo2", _rev: "1-f0399b42cc6123a9cc8503632ba7b3a7", data: "demo"\n}]\n*/\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbpostattachmentdocid-attachment-type",children:(0,o.jsx)(n.code,{children:"utools.db.postAttachment(docId, attachment, type)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"docId"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6587\u6863 ID"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"attachment"})," Buffer | Uint8Array"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u9644\u4ef6\uff0c\u6700\u5927 10M"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"type"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u9644\u4ef6\u7c7b\u578b\uff0c\u6bd4\u5982\uff1aimage/png, text/plain"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Object"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5b58\u50a8\u9644\u4ef6\u5230\u65b0\u6587\u6863\uff0c\u53ea\u80fd\u65b0\u5efa\u5b58\u50a8\u9644\u4ef6\u4e0d\u80fd\u7528\u4e8e\u66f4\u65b0\uff0c\u9644\u4ef6\u6700\u5927\u4e0d\u8d85\u8fc7 10M"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.postAttachment(docId, attachment, type)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const testTxtBuffer = require("fs").readFileSync("/path/to/test.txt");\nutools.db.postAttachment("demo", testTxtBuffer, "text/plain");\n// \u8fd4\u56de {id: "demo", ok: true, rev: "1-44055137915c41c080fc920a8470e14b"}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbgetattachmentdocid",children:(0,o.jsx)(n.code,{children:"utools.db.getAttachment(docId)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"docId"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6587\u6863 ID"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Unit8Array"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u83b7\u53d6\u9644\u4ef6"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.getAttachment(docId)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const buf = utools.db.getAttachment("demo");\nconsole.log(buf);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbgetattachmenttypedocid",children:(0,o.jsx)(n.code,{children:"utools.db.getAttachmentType(docId)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"docId"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6587\u6863 ID"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," String"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u83b7\u53d6\u9644\u4ef6\u7c7b\u578b"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.getAttachmentType(docId)"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"utools.db.getAttachmentType(\"demo\");\n// \u8fd4\u56de 'text/plain'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbreplicatestatefromcloud",children:(0,o.jsx)(n.code,{children:"utools.db.replicateStateFromCloud()"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," null | 0 | 1"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u4e91\u7aef\u590d\u5236\u6570\u636e\u72b6\u6001 (null: \u672a\u5f00\u542f\u6570\u636e\u540c\u6b65\u30010: \u5df2\u5b8c\u6210\u590d\u5236\u30011\uff1a\u590d\u5236\u4e2d)"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f02\u6b65\u65b9\u5f0f\uff1a",(0,o.jsx)(n.code,{children:"utools.db.promises.replicateStateFromCloud()"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'if (utools.db.replicateStateFromCloud()) {\n  console.log("\u6570\u636e\u53ef\u80fd\u4e0d\u5b8c\u6574\uff0c\u8fd8\u5728\u4ece\u4e91\u7aef\u590d\u5236\u4e2d");\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"dbstorage",children:"dbStorage"}),"\n",(0,o.jsx)(n.p,{children:"\u5728 \u672c\u5730\u6570\u636e\u5e93 api \u57fa\u7840\u4e0a\u5c01\u88c5\u7684\u503c\u952e\u5bf9\u5b58\u50a8\u65b9\u5f0f\uff0c\u4f9b\u5feb\u901f\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbstoragesetitemkey-value",children:(0,o.jsx)(n.code,{children:"utools.dbStorage.setItem(key, value)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u952e\u540d(\u540c\u65f6\u4e3a\u6587\u6863 ID)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"value"})," Any"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u952e\u503c(\u4efb\u610f\u7c7b\u578b)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u952e\u503c\u5bf9\u5b58\u50a8\uff0c\u5982\u679c\u952e\u540d\u5b58\u5728\uff0c\u5219\u66f4\u65b0\u5176\u5bf9\u5e94\u7684\u503c"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.dbStorage.setItem("pai", 3.1415926);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbstoragegetitemkey",children:(0,o.jsx)(n.code,{children:"utools.dbStorage.getItem(key)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u952e\u540d(\u540c\u65f6\u4e3a\u6587\u6863 ID)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"\u8fd4\u56de"})," Any"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u83b7\u53d6\u952e\u540d\u5bf9\u5e94\u7684\u503c"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.dbStorage.getItem("pai");\n// \u8fd4\u56de 3.1415926\n'})}),"\n",(0,o.jsx)(n.h3,{id:"utoolsdbstorageremoveitemkey",children:(0,o.jsx)(n.code,{children:"utools.dbStorage.removeItem(key)"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"})," String"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u952e\u540d(\u540c\u65f6\u4e3a\u6587\u6863 ID)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5220\u9664\u952e\u503c\u5bf9(\u5220\u9664\u6587\u6863)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'utools.dbStorage.removeItem("pai");\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return l}});var o=d(67294);const s={},c=o.createContext(s);function l(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);