"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[7920],{23777:function(e,r,t){t.d(r,{c:function(){return o}});var n=t(67294),a=t(39962),s=["zero","one","two","few","many","other"];function c(e){return s.filter((function(r){return e.includes(r)}))}var u={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,a.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:c(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),u}var r,t}),[e])}function o(){var e=l();return{selectMessage:function(r,t){return function(e,r,t){var n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=t.select(r),s=t.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(t,r,e)}}}},97604:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(67855),a=t(74165),s=t(15861),c=t(67294),u=t(39962),l=t(94306),o=t(31514),i=t(83699),h=t(97325),m=t(23777),d=t(1728),p=t(16550),f=t(36136);var g=function(){var e=(0,p.k6)(),r=(0,p.TH)(),t=(0,u.Z)().siteConfig.baseUrl,n=f.Z.canUseDOM?new URLSearchParams(r.search):null,a=(null==n?void 0:n.get("q"))||"",s=(null==n?void 0:n.get("ctx"))||"",c=(null==n?void 0:n.get("version"))||"",l=function(e){var t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:a,searchContext:s,searchVersion:c,updateSearchPath:function(r){var t=l(r);e.replace({search:t.toString()})},updateSearchContext:function(t){var n=new URLSearchParams(r.search);n.set("ctx",t),e.replace({search:n.toString()})},generateSearchPageLink:function(e){var r=l(e);return t+"search?"+r.toString()}}},x=t(5202),v=t(76654),y=t(21523),S=t(77976),C=t(79395),j=t(64056),I=t(70318),w=t(5901),R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"},P=t(85893);function _(){var e,r=(0,u.Z)().siteConfig.baseUrl,t=(0,m.c)().selectMessage,n=g(),l=n.searchValue,i=n.searchContext,p=n.searchVersion,f=n.updateSearchPath,y=n.updateSearchContext,S=(0,c.useState)(l),C=S[0],I=S[1],_=(0,c.useState)(),b=_[0],F=_[1],k=(0,c.useState)(),N=k[0],q=k[1],A=""+r+p,T=(0,c.useMemo)((function(){return C?(0,h.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:C}):(0,h.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[C]);(0,c.useEffect)((function(){f(C),b&&(C?b(C,(function(e){q(e)})):q(void 0))}),[C,b]);var U=(0,c.useCallback)((function(e){I(e.target.value)}),[]);return(0,c.useEffect)((function(){l&&l!==C&&I(l)}),[l]),(0,c.useEffect)((function(){function e(){return(e=(0,s.Z)((0,a.Z)().mark((function e(){var r,t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.w)(A,i);case 2:r=e.sent,t=r.wrappedIndexes,n=r.zhDictionary,F((function(){return(0,v.v)(t,n,100)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,A]),(0,P.jsxs)(c.Fragment,{children:[(0,P.jsxs)(o.Z,{children:[(0,P.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,P.jsx)("title",{children:T})]}),(0,P.jsxs)("div",{className:"container margin-vert--lg",children:[(0,P.jsx)("h1",{children:T}),(0,P.jsxs)("div",{className:"row",children:[(0,P.jsx)("div",{className:(0,d.Z)("col",(e={},e[R.searchQueryColumn]=Array.isArray(w.Kc),e["col--9"]=Array.isArray(w.Kc),e["col--12"]=!Array.isArray(w.Kc),e)),children:(0,P.jsx)("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:U,value:C,autoComplete:"off",autoFocus:!0})}),Array.isArray(w.Kc)?(0,P.jsx)("div",{className:(0,d.Z)("col","col--3","padding-left--none",R.searchContextColumn),children:(0,P.jsxs)("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:i,onChange:function(e){return y(e.target.value)},children:[(0,P.jsx)("option",{value:"",children:w.pQ?(0,h.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),w.Kc.map((function(e){return(0,P.jsx)("option",{value:e,children:e},e)}))]})}):null]}),!b&&C&&(0,P.jsx)("div",{children:(0,P.jsx)(j.Z,{})}),N&&(N.length>0?(0,P.jsx)("p",{children:t(N.length,(0,h.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:N.length}))}):(0,P.jsx)("p",{children:(0,h.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,P.jsx)("section",{children:N&&N.map((function(e){return(0,P.jsx)(Z,{searchResult:e},e.document.i)}))})]})]})}function Z(e){var r=e.searchResult,t=r.document,a=r.type,s=r.page,c=r.tokens,u=r.metadata,l=0===a,o=2===a,h=(l?t.b:s.b).slice(),m=o?t.s:t.t;l||h.push(s.t);var d="";if(w.vc&&c.length>0){for(var p,f=new URLSearchParams,g=(0,n.Z)(c);!(p=g()).done;){var x=p.value;f.append("_highlight",x)}d="?"+f.toString()}return(0,P.jsxs)("article",{className:R.searchResultItem,children:[(0,P.jsx)("h2",{children:(0,P.jsx)(i.Z,{to:t.u+d+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,y.C)(m,c):(0,S.o)(m,(0,C.m)(u,"t"),c,100)}})}),h.length>0&&(0,P.jsx)("p",{className:R.searchResultItemPath,children:(0,I.e)(h)}),o&&(0,P.jsx)("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,C.m)(u,"t"),c,100)}})]})}var b=function(){return(0,P.jsx)(l.Z,{children:(0,P.jsx)(_,{})})}}}]);