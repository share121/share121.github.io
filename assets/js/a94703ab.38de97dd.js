"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[4368],{55989:function(e,n,t){t.r(n),t.d(n,{default:function(){return fe}});var a=t(50959),i=t(86259),r=t(92270),o=t(87401),s=t(37571),l=t(76396),c=t(68759),d=t(59030),u=t(38469);var m={backToTopButton:"backToTopButton_Cdwr",backToTopButtonShow:"backToTopButtonShow_kc7L"},b=t(11527);function h(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],r=t[1],o=(0,a.useRef)(!1),s=(0,d.Ct)(),l=s.startScroll,c=s.cancelScroll;return(0,d.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(o.current?o.current=!1:a>=i?(c(),r(!1)):a<n?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,u.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,m.backToTopButton,n&&m.backToTopButtonShow),type:"button",onClick:t})}var p=t(73466),v=t(28903),x=t(13973),f=t(12865),j=t(78982);function g(e){return(0,b.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var k={collapseSidebarButton:"collapseSidebarButton_J4As",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_sEbR"};function _(e){var n=e.onClick;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",k.collapseSidebarButton),onClick:n,children:(0,b.jsx)(g,{className:k.collapseSidebarButtonIcon})})}var C=t(79689),S=t(60685),I=t(22316),N=Symbol("EmptyContext"),T=a.createContext(N);function Z(e){var n=e.children,t=(0,a.useState)(null),i=t[0],r=t[1],o=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:r}}),[i]);return(0,b.jsx)(T.Provider,{value:o,children:n})}var A=t(22053),y=t(30575),B=t(86867),L=t(26523),w=["item","onItemClick","activePath","level","index"];function E(e){var n=e.collapsed,t=e.categoryLabel,a=e.onClick;return(0,b.jsx)("button",{"aria-label":n?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){var n=e.item,t=e.onItemClick,r=e.activePath,l=e.level,c=e.index,d=(0,S.Z)(e,w),u=n.items,m=n.label,h=n.collapsible,p=n.className,v=n.href,x=(0,f.L)().docs.sidebar.autoCollapseCategories,j=function(e){var n=(0,L.Z)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!n&&e.collapsible?(0,s.LM)(e):void 0}),[e,n])}(n),g=(0,s._F)(n,r),k=(0,y.Mg)(v,r),_=(0,A.u)({initialState:function(){return!!h&&(!g&&n.collapsed)}}),C=_.collapsed,Z=_.setCollapsed,H=function(){var e=(0,a.useContext)(T);if(e===N)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),M=H.expandedItem,P=H.setExpandedItem,R=function(e){void 0===e&&(e=!C),P(e?null:c),Z(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,r=(0,I.D9)(n);(0,a.useEffect)((function(){n&&!r&&t&&i(!1)}),[n,r,t,i])}({isActive:g,collapsed:C,updateCollapsed:R}),(0,a.useEffect)((function(){h&&null!=M&&M!==c&&x&&Z(!0)}),[h,M,c,Z,x]),(0,b.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},p),children:[(0,b.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,b.jsx)(B.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":g}),onClick:h?function(e){null==t||t(n),v?R(!1):(e.preventDefault(),R())}:function(){null==t||t(n)},"aria-current":k?"page":void 0,"aria-expanded":h?!C:void 0,href:h?null!=j?j:"#":j},d,{children:m})),v&&h&&(0,b.jsx)(E,{collapsed:C,categoryLabel:m,onClick:function(e){e.preventDefault(),R()}})]}),(0,b.jsx)(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,b.jsx)(G,{items:u,tabIndex:C?-1:0,onItemClick:t,activePath:r,level:l+1})})]})}var M=t(33730),P=t(83559),R={menuExternalLink:"menuExternalLink_dE8L"},F=["item","onItemClick","activePath","level","index"];function W(e){var n=e.item,t=e.onItemClick,a=e.activePath,r=e.level,l=(e.index,(0,S.Z)(e,F)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,h=(0,s._F)(n,a),p=(0,M.Z)(c);return(0,b.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),children:(0,b.jsxs)(B.Z,Object.assign({className:(0,i.Z)("menu__link",!p&&R.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:c},p&&{onClick:t?function(){return t(n)}:void 0},l,{children:[d,!p&&(0,b.jsx)(P.Z,{})]}))},d)}var D={menuHtmlItem:"menuHtmlItem_dguY"};function O(e){var n=e.item,t=e.level,a=e.index,r=n.value,s=n.defaultStyle,l=n.className;return(0,b.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),s&&[D.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:r}},a)}var V=["item"];function U(e){var n=e.item,t=(0,S.Z)(e,V);switch(n.type){case"category":return(0,b.jsx)(H,Object.assign({item:n},t));case"html":return(0,b.jsx)(O,Object.assign({item:n},t));default:return(0,b.jsx)(W,Object.assign({item:n},t))}}var Y=["items"];function z(e){var n=e.items,t=(0,S.Z)(e,Y),a=(0,s.f)(n,t.activePath);return(0,b.jsx)(Z,{children:a.map((function(e,n){return(0,b.jsx)(U,Object.assign({item:e,index:n},t),n)}))})}var G=(0,a.memo)(z),q={menu:"menu_uSXb",menuWithAnnouncementBar:"menuWithAnnouncementBar_IqLs"};function K(e){var n=e.path,t=e.sidebar,r=e.className,s=function(){var e=(0,C.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,d.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",q.menu,s&&q.menuWithAnnouncementBar,r),children:(0,b.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(G,{items:t,activePath:n,level:1})})})}var J="sidebar_ecwY",Q="sidebarWithHideableNavbar_imFs",X="sidebarHidden_H1hV",$="sidebarLogo__kP_";function ee(e){var n=e.path,t=e.sidebar,a=e.onCollapse,r=e.isHidden,o=(0,f.L)(),s=o.navbar.hideOnScroll,l=o.docs.sidebar.hideable;return(0,b.jsxs)("div",{className:(0,i.Z)(J,s&&Q,r&&X),children:[s&&(0,b.jsx)(j.Z,{tabIndex:-1,className:$}),(0,b.jsx)(K,{path:n,sidebar:t}),l&&(0,b.jsx)(_,{onClick:a})]})}var ne=a.memo(ee),te=t(94245),ae=t(19126),ie=function(e){var n=e.sidebar,t=e.path,a=(0,ae.e)();return(0,b.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(G,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function re(e){return(0,b.jsx)(te.Zo,{component:ie,props:e})}var oe=a.memo(re);function se(e){var n=(0,x.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)(ne,Object.assign({},e)),a&&(0,b.jsx)(oe,Object.assign({},e))]})}var le={expandButton:"expandButton_vPbA",expandButtonIcon:"expandButtonIcon_isjM"};function ce(e){var n=e.toggleSidebar;return(0,b.jsx)("div",{className:le.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,b.jsx)(g,{className:le.expandButtonIcon})})}var de={docSidebarContainer:"docSidebarContainer_kHjG",docSidebarContainerHidden:"docSidebarContainerHidden_GfF2",sidebarViewport:"sidebarViewport_fQcA"};function ue(e){var n,t=e.children,i=(0,l.V)();return(0,b.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function me(e){var n=e.sidebar,t=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,s=(0,v.TH)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),!c&&(0,p.n)()&&d(!0),r((function(e){return!e}))}),[r,c]);return(0,b.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,de.docSidebarContainer,t&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&t&&d(!0)},children:(0,b.jsx)(ue,{children:(0,b.jsxs)("div",{className:(0,i.Z)(de.sidebarViewport,c&&de.sidebarViewportHidden),children:[(0,b.jsx)(se,{sidebar:n,path:s,onCollapse:u,isHidden:c}),c&&(0,b.jsx)(ce,{toggleSidebar:u})]})})})}var be={docMainContainer:"docMainContainer_NKt2",docMainContainerEnhanced:"docMainContainerEnhanced_EAy2",docItemWrapperEnhanced:"docItemWrapperEnhanced__gHl"};function he(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,l.V)();return(0,b.jsx)("main",{className:(0,i.Z)(be.docMainContainer,(n||!a)&&be.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,n&&be.docItemWrapperEnhanced),children:t})})}var pe={docRoot:"docRoot_UMDq",docsWrapper:"docsWrapper_i41V"};function ve(e){var n=e.children,t=(0,l.V)(),i=(0,a.useState)(!1),r=i[0],o=i[1];return(0,b.jsxs)("div",{className:pe.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:pe.docRoot,children:[t&&(0,b.jsx)(me,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,b.jsx)(he,{hiddenSidebarContainer:r,children:n})]})]})}var xe=t(13975);function fe(e){var n=(0,s.SN)(e);if(!n)return(0,b.jsx)(xe.Z,{});var t=n.docElement,a=n.sidebarName,c=n.sidebarItems;return(0,b.jsx)(r.FG,{className:(0,i.Z)(o.k.page.docsDocPage),children:(0,b.jsx)(l.b,{name:a,items:c,children:(0,b.jsx)(ve,{children:t})})})}},13975:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var a=t(86259),i=t(68759),r=t(35162),o=t(11527);function s(e){var n=e.className;return(0,o.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",n),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)(r.Z,{as:"h1",className:"hero__title",children:(0,o.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);