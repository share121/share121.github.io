"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[7460],{52743:function(e,n,s){s.r(n),s.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return x},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return h}});var l=s(11527),c=s(7502);const r={last_update:{date:1700895493331}},i="ubrowser API",d={id:"codeing/utools/ubrowser",title:"ubrowser API",description:"uTools browser \u7b80\u79f0 ubrowser\uff0c\u662f\u6839\u636e uTools \u7684\u7279\u6027\uff0c\u91cf\u8eab\u6253\u9020\u7684\u4e00\u4e2a\u53ef\u7f16\u7a0b\u6d4f\u89c8\u5668\u3002\u5229\u7528 ubrowser \u53ef\u4ee5\u8f7b\u800c\u6613\u4e3e\u8fde\u63a5\u4e00\u5207\u4e92\u8054\u7f51\u670d\u52a1\uff0c\u4e14\u4e0e uTools \u5b8c\u7f8e\u7ed3\u5408\u3002",source:"@site/docs/09-codeing/11-utools/07-ubrowser.md",sourceDirName:"09-codeing/11-utools",slug:"/codeing/utools/ubrowser",permalink:"/codeing/utools/ubrowser",draft:!1,unlisted:!1,editUrl:"https://github.com/share121/share121.github.io/edit/main/docs/09-codeing/11-utools/07-ubrowser.md",tags:[],version:"current",lastUpdatedBy:"share121",lastUpdatedAt:1700895493.331,formattedLastUpdatedAt:"2023\u5e7411\u670825\u65e5",sidebarPosition:7,frontMatter:{last_update:{date:1700895493331}},sidebar:"tutorialSidebar",previous:{title:"uTools DB API",permalink:"/codeing/utools/db"},next:{title:"uTools Server API",permalink:"/codeing/utools/server-api"}},o={},h=[{value:"API \u5217\u8868",id:"api-\u5217\u8868",level:2},{value:"<code>useragent(userAgent)</code>",id:"useragentuseragent",level:3},{value:"<code>goto(url, headers, timeout)</code>",id:"gotourl-headers-timeout",level:3},{value:"<code>viewport(width, height)</code>",id:"viewportwidth-height",level:3},{value:"<code>hide()</code>",id:"hide",level:3},{value:"<code>show()</code>",id:"show",level:3},{value:"<code>css(cssCode)</code>",id:"csscsscode",level:3},{value:"<code>press(key, ...modifier)</code>",id:"presskey-modifier",level:3},{value:"<code>paste(text)</code>",id:"pastetext",level:3},{value:"<code>screenshot(arg, savePath)</code>",id:"screenshotarg-savepath",level:3},{value:"<code>pdf(options, savePath)</code>",id:"pdfoptions-savepath",level:3},{value:"<code>device(arg)</code>",id:"devicearg",level:3},{value:"<code>cookies(name)</code>",id:"cookiesname",level:3},{value:"<code>setCookies(name, value)</code>",id:"setcookiesname-value",level:3},{value:"<code>setCookies(cookies)</code>",id:"setcookiescookies",level:3},{value:"<code>removeCookies(name)</code>",id:"removecookiesname",level:3},{value:"<code>clearCookies(url)</code>",id:"clearcookiesurl",level:3},{value:"<code>devTools(mode)</code>",id:"devtoolsmode",level:3},{value:"<code>evaluate(func, ...params)</code>",id:"evaluatefunc-params",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"<code>wait(ms)</code>",id:"waitms",level:3},{value:"<code>wait(selector, timeout)</code>",id:"waitselector-timeout",level:3},{value:"<code>wait(func, timeout\uff0c...params)</code>",id:"waitfunc-timeoutparams",level:3},{value:"<code>when(selector)</code>",id:"whenselector",level:3},{value:"<code>when(func, ...params)</code>",id:"whenfunc-params",level:3},{value:"<code>end()</code>",id:"end",level:3},{value:"<code>click(selector)</code>",id:"clickselector",level:3},{value:"<code>mousedown(selector)</code>",id:"mousedownselector",level:3},{value:"<code>mouseup(selector)</code>",id:"mouseupselector",level:3},{value:"<code>file(selector, payload)</code>",id:"fileselector-payload",level:3},{value:"<code>value(selector, val)</code>",id:"valueselector-val",level:3},{value:"<code>check(selector, checked)</code>",id:"checkselector-checked",level:3},{value:"<code>focus(selector)</code>",id:"focusselector",level:3},{value:"<code>scroll(selector)</code>",id:"scrollselector",level:3},{value:"<code>scroll(y)</code>",id:"scrolly",level:3},{value:"<code>scroll(x, y)</code>",id:"scrollx-y",level:3},{value:"<code>download(url, savePath)</code>",id:"downloadurl-savepath",level:3},{value:"<code>run(options)</code>",id:"runoptions",level:3},{value:"<code>run(ubrowserId)</code>",id:"runubrowserid",level:3},{value:"ubrowser \u7ba1\u7406",id:"ubrowser-\u7ba1\u7406",level:2},{value:"<code>getIdleUBrowsers()</code>",id:"getidleubrowsers",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"<code>setUBrowserProxy(config)</code>",id:"setubrowserproxyconfig",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"<code>clearUBrowserCache()</code>",id:"clearubrowsercache",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"ubrowser-api",children:"ubrowser API"}),"\n",(0,l.jsx)(n.p,{children:"uTools browser \u7b80\u79f0 ubrowser\uff0c\u662f\u6839\u636e uTools \u7684\u7279\u6027\uff0c\u91cf\u8eab\u6253\u9020\u7684\u4e00\u4e2a\u53ef\u7f16\u7a0b\u6d4f\u89c8\u5668\u3002\u5229\u7528 ubrowser \u53ef\u4ee5\u8f7b\u800c\u6613\u4e3e\u8fde\u63a5\u4e00\u5207\u4e92\u8054\u7f51\u670d\u52a1\uff0c\u4e14\u4e0e uTools \u5b8c\u7f8e\u7ed3\u5408\u3002"}),"\n",(0,l.jsx)(n.p,{children:"ubrowser \u62e5\u6709\u4f18\u96c5\u7684\u94fe\u5f0f\u8c03\u7528\u63a5\u53e3\uff0c\u53ef\u4ee5\u7528\u53e3\u8bed\u5316\u7684\u6570\u884c\u4ee3\u7801\uff0c\u5b9e\u73b0\u4e00\u7cfb\u5217\u532a\u5937\u6240\u601d\u7684\u64cd\u4f5c\u3002\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"1\u3001RPA \u81ea\u52a8\u5316\u811a\u672c"}),"\n",(0,l.jsx)(n.p,{children:"2\u3001\u7f51\u9875\u9b54\u6539"}),"\n",(0,l.jsx)(n.p,{children:"3\u3001\u7f51\u9875\u6293\u53d6"}),"\n",(0,l.jsx)(n.p,{children:"\u57fa\u672c demo\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'// \u6253\u5f00"\u5fc5\u5e94" \u5e76\u641c\u7d22 "uTools"\nutools.ubrowser\n  .goto("https://cn.bing.com")\n  .value("#sb_form_q", "uTools")\n  .click("#sb_form_go")\n  .run({ width: 1000, height: 600 });\n'})}),"\n",(0,l.jsx)(n.h2,{id:"api-\u5217\u8868",children:"API \u5217\u8868"}),"\n",(0,l.jsx)(n.h3,{id:"useragentuseragent",children:(0,l.jsx)(n.code,{children:"useragent(userAgent)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"userAgent"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e User-Agent"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"gotourl-headers-timeout",children:(0,l.jsx)(n.code,{children:"goto(url, headers, timeout)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"url"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"headers"})," Object (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"{ Referer: string, userAgent: string }"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"timeout"})," Integer (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8d85\u65f6 \u9ed8\u8ba4 60000 ms"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u524d\u5f80"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"viewportwidth-height",children:(0,l.jsx)(n.code,{children:"viewport(width, height)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"width"})," Integer"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"height"})," Integer"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u9875\u9762\u5927\u5c0f"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hide",children:(0,l.jsx)(n.code,{children:"hide()"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u9690\u85cf ubrowser \u7a97\u53e3"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"show",children:(0,l.jsx)(n.code,{children:"show()"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u663e\u793a ubrowser \u7a97\u53e3"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"csscsscode",children:(0,l.jsx)(n.code,{children:"css(cssCode)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cssCode"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u5165\u6837\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"presskey-modifier",children:(0,l.jsx)(n.code,{children:"press(key, ...modifier)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"modifier"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"ctrl | shift | alt | meta"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u952e\u76d8\u6309\u952e"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"pastetext",children:(0,l.jsx)(n.code,{children:"paste(text)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"text"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6587\u672c\u5b57\u7b26\u4e32 | \u56fe\u7247 base64"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u7c98\u8d34"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"screenshotarg-savepath",children:(0,l.jsx)(n.code,{children:"screenshot(arg, savePath)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"arg"})," String | Object (\u53ef\u9009)"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"String - \u8981\u622a\u53d6\u7684 DOM \u5143\u7d20"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Object - \u622a\u56fe\u4f4d\u7f6e\u548c\u5927\u5c0f { x: Integer, y: Integer, width: Integer, height: Integer }"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3a\u7a7a \u622a\u53d6\u6574\u4e2a\u7a97\u53e3"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"savePath"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u56fe\u7247\u4fdd\u5b58\u8def\u5f84,\uff0c\u4e5f\u53ef\u4ee5\u662f\u5b8c\u6574 PNG \u6587\u4ef6\u8def\u5f84\uff08\u9ed8\u8ba4\u5b58\u50a8\u5728\u4e34\u65f6\u76ee\u5f55\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u90e8\u5206\u7f51\u9875\u622a\u56fe"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"pdfoptions-savepath",children:(0,l.jsx)(n.code,{children:"pdf(options, savePath)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"options"})," Object (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"{ marginsType: 0 | 1 | 2, pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | { width: Integer, height: Integer } }"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0e ",(0,l.jsx)(n.a,{href:"https://www.electronjs.org/docs/api/web-contents#contentsprinttopdfoptions",children:"Electron APIopen in new window"})," \u4e00\u81f4"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"savePath"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u56fe\u7247\u4fdd\u5b58\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u5b8c\u6574 pdf \u6587\u4ef6\u8def\u5f84\uff08\u9ed8\u8ba4\u5b58\u50a8\u5728\u4e34\u65f6\u76ee\u5f55\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4fdd\u5b58\u9875\u9762\u4e3a PDF"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"devicearg",children:(0,l.jsx)(n.code,{children:"device(arg)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"arg"})," String | Object"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"String - 'iPhone 11' | 'iPhone X' | 'iPad' | 'iPhone 6/7/8 Plus' | 'iPhone 6/7/8' | 'iPhone 5/SE' | 'HUAWEI Mate10' | 'HUAWEI Mate20' | 'HUAWEI Mate30' | 'HUAWEI Mate30 Pro'"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Object - { size: { width: Integer, height: Integer }, useragent: String }"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6a21\u62df\u8bbe\u5907"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"cookiesname",children:(0,l.jsx)(n.code,{children:"cookies(name)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," String (\u53ef\u9009)"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3a\u7a7a\u83b7\u53d6\u5168\u90e8 cookie \u83b7\u53d6 cookie"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"setcookiesname-value",children:(0,l.jsx)(n.code,{children:"setCookies(name, value)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," String"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"value"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e cookie"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"setcookiescookies",children:(0,l.jsx)(n.code,{children:"setCookies(cookies)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"cookies"})," Array"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"[{ name: String, value: String }, { name: String1, value: String1 }]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e cookie"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"removecookiesname",children:(0,l.jsx)(n.code,{children:"removeCookies(name)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5220\u9664 cookie"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clearcookiesurl",children:(0,l.jsx)(n.code,{children:"clearCookies(url)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"url"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:'\u5982\u679c\u5728\u6267\u884c"goto"\u524d\u6267\u884c url \u53c2\u6570\u5fc5\u9700'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6e05\u7a7a cookie"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"devtoolsmode",children:(0,l.jsx)(n.code,{children:"devTools(mode)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"mode"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"'right' | 'bottom' | 'undocked' | 'detach' \u9ed8\u8ba4\u4e3a 'detach'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"evaluatefunc-params",children:(0,l.jsx)(n.code,{children:"evaluate(func, ...params)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"func"})," Function"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u7f51\u9875\u5185\u6267\u884c\u7684\u51fd\u6570"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"param"})," Any (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f20\u9012\u7ed9 func \u7684\u53c2\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6267\u884c JS \u51fd\u6570\uff0c\u5982\u679c\u6709\u8fd4\u56de\u503c\u5c06\u52a0\u5165\u5230\u8fd4\u56de\u7ed3\u679c\u4e2d"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'evaluate(\n  (param1, param2) => {\n    return document.querySelector("div").innerText;\n  },\n  "param1",\n  "param2"\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"waitms",children:(0,l.jsx)(n.code,{children:"wait(ms)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ms"})," Integer"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85\u7684\u6beb\u79d2\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"waitselector-timeout",children:(0,l.jsx)(n.code,{children:"wait(selector, timeout)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"DOM \u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"timeout"})," Integer (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8d85\u65f6 \u9ed8\u8ba4 60000 ms"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85 DOM \u5143\u7d20\u51fa\u73b0"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"waitfunc-timeoutparams",children:(0,l.jsx)(n.code,{children:"wait(func, timeout\uff0c...params)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"func"})," Function"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u7f51\u9875\u5185\u6267\u884c\u7684\u51fd\u6570\uff0c\u8fd4\u56de true \u7ed3\u675f\u7b49\u5f85"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"timeout"})," Integer (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8d85\u65f6 \u9ed8\u8ba4 60000 ms"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"param"})," Any (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f20\u9012\u7ed9 func \u7684\u53c2\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85 JS \u51fd\u6570\u6267\u884c\u8fd4\u56de true"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"whenselector",children:(0,l.jsx)(n.code,{children:"when(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"DOM \u5143\u7d20"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5f53\u5143\u7d20\u5b58\u5728\u65f6\u6267\u884c\u76f4\u5230\u78b0\u5230 end() \u65b9\u6cd5"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"whenfunc-params",children:(0,l.jsx)(n.code,{children:"when(func, ...params)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"func"})," Function"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u7f51\u9875\u5185\u6267\u884c\u7684\u51fd\u6570\uff0c\u8fd4\u56de true \u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"param"})," Any (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f20\u9012\u7ed9 func \u7684\u53c2\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5f53 JS \u51fd\u6570\u6267\u884c\u8fd4\u56de true \u65f6\u6267\u884c, \u76f4\u5230\u78b0\u5230 end() \u65b9\u6cd5"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"end",children:(0,l.jsx)(n.code,{children:"end()"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e0e when \u914d\u5957\u4f7f\u7528"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clickselector",children:(0,l.jsx)(n.code,{children:"click(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5355\u51fb\u5143\u7d20"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mousedownselector",children:(0,l.jsx)(n.code,{children:"mousedown(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u89e6\u53d1\u6309\u4e0b\u9f20\u6807\u5de6\u952e"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mouseupselector",children:(0,l.jsx)(n.code,{children:"mouseup(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u89e6\u53d1\u91ca\u653e\u9f20\u6807\u5de6\u952e"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"fileselector-payload",children:(0,l.jsx)(n.code,{children:"file(selector, payload)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"input type='file' \u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"payload"})," String | Array | Buffer"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6587\u4ef6\u8def\u5f84 \u6216 \u8def\u5f84\u96c6\u5408 \u6216 \u6587\u4ef6 Buffer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3a\u7f51\u9875\u4e2d\u7684 file input \u8d4b\u503c"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"valueselector-val",children:(0,l.jsx)(n.code,{children:"value(selector, val)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"input textarea select \u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"val"})," String"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3a\u7f51\u9875\u4e2d\u7684 input textarea select \u5143\u7d20\u8d4b\u503c"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"checkselector-checked",children:(0,l.jsx)(n.code,{children:"check(selector, checked)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"checkbox radio \u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"checked"})," Boolean"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u662f\u5426\u9009\u4e2d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"checkbox radio \u5143\u7d20\u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"focusselector",children:(0,l.jsx)(n.code,{children:"focus(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5143\u7d20\u83b7\u5f97\u7126\u70b9"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"scrollselector",children:(0,l.jsx)(n.code,{children:"scroll(selector)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"selector"})," String"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6eda\u52a8\u5230\u5143\u7d20\u4f4d\u7f6e"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"scrolly",children:(0,l.jsx)(n.code,{children:"scroll(y)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"y"})," Integer"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Y \u8f74\u6eda\u52a8"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"scrollx-y",children:(0,l.jsx)(n.code,{children:"scroll(x, y)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"x"})," Integer"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"y"})," Integer"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"X \u8f74\u548c Y \u8f74\u6eda\u52a8"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"downloadurl-savepath",children:(0,l.jsx)(n.code,{children:"download(url, savePath)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"url"})," String"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e0b\u8f7d\u6587\u4ef6\u7684 URL"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"savePath"})," String (\u53ef\u9009)"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4fdd\u5b58\u8def\u5f84(\u4fdd\u5b58\u6240\u5728\u6587\u4ef6\u5939\u6216\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6587\u4ef6\u4e0b\u8f7d"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"runoptions",children:(0,l.jsx)(n.code,{children:"run(options)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"options"})," Object"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Object"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"show Boolean (\u53ef\u9009) \u662f\u5426\u663e\u793a"}),"\n",(0,l.jsx)(n.li,{children:"width Integer (\u53ef\u9009) \u5bbd\u5ea6 \u9ed8\u8ba4\u4e3a 800"}),"\n",(0,l.jsx)(n.li,{children:"height Integer (\u53ef\u9009) \u9ad8\u5ea6 \u9ed8\u8ba4\u4e3a 600"}),"\n",(0,l.jsx)(n.li,{children:"x Integer (\u53ef\u9009) \u4f4d\u7f6e X"}),"\n",(0,l.jsx)(n.li,{children:"y Integer (\u53ef\u9009) \u4f4d\u7f6e Y"}),"\n",(0,l.jsx)(n.li,{children:"center Boolean (\u53ef\u9009) \u7a97\u53e3\u5728\u5c4f\u5e55\u5c45\u4e2d"}),"\n",(0,l.jsx)(n.li,{children:"minWidth Integer (\u53ef\u9009) \u7a97\u53e3\u7684\u6700\u5c0f\u5bbd\u5ea6\u3002\u9ed8\u8ba4\u503c\u4e3a 0"}),"\n",(0,l.jsx)(n.li,{children:"minHeight Integer (\u53ef\u9009) \u7a97\u53e3\u7684\u6700\u5c0f\u9ad8\u5ea6\u3002\u9ed8\u8ba4\u503c\u4e3a 0"}),"\n",(0,l.jsx)(n.li,{children:"maxWidth Integer (\u53ef\u9009) \u7a97\u53e3\u7684\u6700\u5927\u5bbd\u5ea6\u3002\u9ed8\u8ba4\u65e0\u9650\u5236"}),"\n",(0,l.jsx)(n.li,{children:"maxHeight Integer (\u53ef\u9009) \u7a97\u53e3\u7684\u6700\u5927\u9ad8\u5ea6\u3002\u9ed8\u8ba4\u65e0\u9650\u5236"}),"\n",(0,l.jsx)(n.li,{children:"resizable Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u53ef\u4ee5\u6539\u53d8\u5c3a\u5bf8\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,l.jsx)(n.li,{children:"movable Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u53ef\u4ee5\u79fb\u52a8\uff0c\u5728 Linux \u4e2d\u65e0\u6548\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,l.jsx)(n.li,{children:"minimizable Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u53ef\u4ee5\u6700\u5c0f\u5316\uff0c\u5728 Linux \u4e2d\u65e0\u6548\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,l.jsx)(n.li,{children:"maximizable Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u53ef\u4ee5\u6700\u5927\u5316\u52a8\uff0c\u5728 Linux \u4e2d\u65e0\u6548\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,l.jsx)(n.li,{children:"alwaysOnTop Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u6c38\u8fdc\u7f6e\u9876\u3002\u9ed8\u8ba4\u503c\u4e3a false"}),"\n",(0,l.jsx)(n.li,{children:"fullscreen Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u5168\u5c4f\u3002\u9ed8\u8ba4\u503c\u4e3a false"}),"\n",(0,l.jsx)(n.li,{children:"fullscreenable Boolean (\u53ef\u9009) \u7a97\u53e3\u662f\u5426\u53ef\u4ee5\u8fdb\u5165\u5168\u5c4f\u72b6\u6001\u3002\u9ed8\u8ba4\u503c\u4e3a true"}),"\n",(0,l.jsx)(n.li,{children:"enableLargerThanScreen Boolean (\u53ef\u9009) \u662f\u5426\u5141\u8bb8\u6539\u53d8\u7a97\u53e3\u7684\u5927\u5c0f\u4f7f\u4e4b\u5927\u4e8e\u5c4f\u5e55\u7684\u5c3a\u5bf8\uff0c\u4ec5\u9002\u7528\u4e8e macOS\uff0c\u56e0\u4e3a\u5176\u5b83\u64cd\u4f5c\u7cfb\u7edf\u9ed8\u8ba4\u5141\u8bb8 \u5927\u4e8e\u5c4f\u5e55\u7684\u7a97\u53e3\u3002 \u9ed8\u8ba4\u503c\u4e3a false"}),"\n",(0,l.jsx)(n.li,{children:"opacity Number (\u53ef\u9009) \u8bbe\u7f6e\u7a97\u53e3\u521d\u59cb\u7684\u4e0d\u900f\u660e\u5ea6\uff0c\u4ecb\u4e8e 0.0 (\u5b8c\u5168\u900f\u660e) \u548c 1.0 (\u5b8c\u5168\u4e0d\u900f\u660e) \u4e4b\u95f4\u3002\u4ec5\u652f\u6301 Windows \u548c macOS \u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\u8fd4\u56de"})," Promise"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u542f\u52a8 ubrowser \u8fd0\u884c\u5b9e\u4f8b"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"runubrowserid",children:(0,l.jsx)(n.code,{children:"run(ubrowserId)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ubrowserId"})," Integer"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"run(options) \u8fd0\u884c\u7ed3\u675f\u540e, \u5f53 ubrowser \u5b9e\u4f8b\u7a97\u53e3\u4ecd\u7136\u663e\u793a\u65f6\u8fd4\u56de"}),"\n",(0,l.jsx)(n.li,{children:"utools.getIdleUBrowsers() \u4e2d\u83b7\u5f97"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\u8fd4\u56de"})," Promise"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u5728\u95f2\u7f6e\u72b6\u6001(\u5df2\u8fd0\u884c\u7ed3\u675f\uff0c\u672a\u5173\u95ed)\u7684 ubrowser \u5b9e\u4f8b\u4e0a"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ubrowser-\u7ba1\u7406",children:"ubrowser \u7ba1\u7406"}),"\n",(0,l.jsx)(n.h3,{id:"getidleubrowsers",children:(0,l.jsx)(n.code,{children:"getIdleUBrowsers()"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"\u8fd4\u56de"})," Array"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u83b7\u53d6\u95f2\u7f6e\u7684 ubrowser"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.log(utools.getIdleUBrowsers());\n// [{ id: number, title: string, url: string, x: number, y: number, width: number, height: number }]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"setubrowserproxyconfig",children:(0,l.jsx)(n.code,{children:"setUBrowserProxy(config)"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"config"})," Object"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e0e ",(0,l.jsx)(n.a,{href:"https://www.electronjs.org/docs/api/session#sessetproxyconfig",children:"Electron APIopen in new window"})," \u4e00\u81f4"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\u8fd4\u56de"})," Boolean"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e ubrowser \u4ee3\u7406"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'utools.setUBrowserProxy({\n  proxyRules: "http=foopy:80;ftp=foopy2",\n});\n'})}),"\n",(0,l.jsx)(n.h3,{id:"clearubrowsercache",children:(0,l.jsx)(n.code,{children:"clearUBrowserCache()"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"\u8fd4\u56de"})," Boolean"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6e05\u7a7a ubrowser \u7f13\u5b58"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"utools.clearUBrowserCache();\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},7502:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var l=s(50959);const c={},r=l.createContext(c);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);