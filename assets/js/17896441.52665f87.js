"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[7918],{49327:function(e,t,r){r.r(t),r.d(t,{default:function(){return me}});var a=r(50959),o=r(92270),s=r(22316),n=r(11527),l=a.createContext(null);function i(e){var t=e.children,r=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,n.jsx)(l.Provider,{value:r,children:t})}function c(){var e=(0,a.useContext)(l);if(null===e)throw new s.i6("DocProvider");return e}function d(){var e,t=c(),r=t.metadata,a=t.frontMatter,s=t.assets;return(0,n.jsx)(o.d,{title:r.title,description:r.description,keywords:a.keywords,image:null!=(e=s.image)?e:a.image})}var b=r(86259),g=r(13973),h=r(68759),m=r(20207);function u(e){var t=e.previous,r=e.next;return(0,n.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,n.jsx)(m.Z,Object.assign({},t,{subLabel:(0,n.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),r&&(0,n.jsx)(m.Z,Object.assign({},r,{subLabel:(0,n.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function p(){var e=c().metadata;return(0,n.jsx)(u,{previous:e.previous,next:e.next})}var f=r(37499);function x(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,Object.assign({},e)),(0,n.jsx)(f.Z,{})]})}var A=r(25464),y=r(86867),B=r(49734),v=r(87401),C=r(85535),j=r(57839);var k={unreleased:function(e){var t=e.siteTitle,r=e.versionMetadata;return(0,n.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,n.jsx)("b",{children:r.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,r=e.versionMetadata;return(0,n.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,n.jsx)("b",{children:r.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){var t=k[e.versionMetadata.banner];return(0,n.jsx)(t,Object.assign({},e))}function Z(e){var t=e.versionLabel,r=e.to,a=e.onClick;return(0,n.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,n.jsx)("b",{children:(0,n.jsx)(y.Z,{to:r,onClick:a,children:(0,n.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function w(e){var t,r=e.className,a=e.versionMetadata,o=(0,A.Z)().siteConfig.title,s=(0,B.gA)({failfast:!0}).pluginId,l=(0,C.J)(s).savePreferredVersionName,i=(0,B.Jo)(s),c=i.latestDocSuggestion,d=i.latestVersionSuggestion,g=null!=c?c:(t=d).docs.find((function(e){return e.id===t.mainDocId}));return(0,n.jsxs)("div",{className:(0,b.Z)(r,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,n.jsx)("div",{children:(0,n.jsx)(N,{siteTitle:o,versionMetadata:a})}),(0,n.jsx)("div",{className:"margin-top--md",children:(0,n.jsx)(Z,{versionLabel:d.label,to:g.path,onClick:function(){return l(d.name)}})})]})}function L(e){var t=e.className,r=(0,j.E)();return r.banner?(0,n.jsx)(w,{className:t,versionMetadata:r}):null}function U(e){var t=e.className,r=(0,j.E)();return r.badge?(0,n.jsx)("span",{className:(0,b.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,n.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:r.label},children:"Version: {versionLabel}"})}):null}function _(e){var t=e.lastUpdatedAt,r=e.formattedLastUpdatedAt;return(0,n.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,n.jsx)("b",{children:(0,n.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:r})})},children:" on {date}"})}function T(e){var t=e.lastUpdatedBy;return(0,n.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,n.jsx)("b",{children:t})},children:" by {user}"})}function M(e){var t=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,n.jsxs)("span",{className:v.k.common.lastUpdated,children:[(0,n.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&r?(0,n.jsx)(_,{lastUpdatedAt:t,formattedLastUpdatedAt:r}):"",byUser:a?(0,n.jsx)(T,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var F=r(32489),I=r(14550),D={lastUpdated:"lastUpdated_lGQT"};function O(e){return(0,n.jsx)("div",{className:(0,b.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(I.Z,Object.assign({},e))})})}function S(e){var t=e.editUrl,r=e.lastUpdatedAt,a=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return(0,n.jsxs)("div",{className:(0,b.Z)(v.k.docs.docFooterEditMetaRow,"row"),children:[(0,n.jsx)("div",{className:"col",children:t&&(0,n.jsx)(F.Z,{editUrl:t})}),(0,n.jsx)("div",{className:(0,b.Z)("col",D.lastUpdated),children:(r||a)&&(0,n.jsx)(M,{lastUpdatedAt:r,formattedLastUpdatedAt:o,lastUpdatedBy:a})})]})}function H(){var e=c().metadata,t=e.editUrl,r=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,o=e.lastUpdatedBy,s=e.tags,l=s.length>0,i=!!(t||r||o);return l||i?(0,n.jsxs)("footer",{className:(0,b.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,n.jsx)(O,{tags:s}),i&&(0,n.jsx)(S,{editUrl:t,lastUpdatedAt:r,lastUpdatedBy:o,formattedLastUpdatedAt:a})]}):null}var P=r(22053),E=r(63413),V=r(60685),z={tocCollapsibleButton:"tocCollapsibleButton_rtNr",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Mn6C"},R=["collapsed"];function K(e){var t=e.collapsed,r=(0,V.Z)(e,R);return(0,n.jsx)("button",Object.assign({type:"button"},r,{className:(0,b.Z)("clean-btn",z.tocCollapsibleButton,!t&&z.tocCollapsibleButtonExpanded,r.className),children:(0,n.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}var Q={tocCollapsible:"tocCollapsible_rv3C",tocCollapsibleContent:"tocCollapsibleContent_yiMz",tocCollapsibleExpanded:"tocCollapsibleExpanded_gxVg"};function G(e){var t=e.toc,r=e.className,a=e.minHeadingLevel,o=e.maxHeadingLevel,s=(0,P.u)({initialState:!0}),l=s.collapsed,i=s.toggleCollapsed;return(0,n.jsxs)("div",{className:(0,b.Z)(Q.tocCollapsible,!l&&Q.tocCollapsibleExpanded,r),children:[(0,n.jsx)(K,{collapsed:l,onClick:i}),(0,n.jsx)(P.z,{lazy:!0,className:Q.tocCollapsibleContent,collapsed:l,children:(0,n.jsx)(E.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o})})]})}var J={tocMobile:"tocMobile_IMBO"};function W(){var e=c(),t=e.toc,r=e.frontMatter;return(0,n.jsx)(G,{toc:t,minHeadingLevel:r.toc_min_heading_level,maxHeadingLevel:r.toc_max_heading_level,className:(0,b.Z)(v.k.docs.docTocMobile,J.tocMobile)})}var q=r(98776);function X(){var e=c(),t=e.toc,r=e.frontMatter;return(0,n.jsx)(q.Z,{toc:t,minHeadingLevel:r.toc_min_heading_level,maxHeadingLevel:r.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var Y=r(35162),$=r(66095);function ee(e){var t,r,a,o,s=e.children,l=(t=c(),r=t.metadata,a=t.frontMatter,o=t.contentTitle,a.hide_title||void 0!==o?null:r.title);return(0,n.jsxs)("div",{className:(0,b.Z)(v.k.docs.docMarkdown,"markdown"),children:[l&&(0,n.jsx)("header",{children:(0,n.jsx)(Y.Z,{as:"h1",children:l})}),(0,n.jsx)($.Z,{children:s})]})}var te=r(37571),re=r(30575),ae=r(96474);function oe(e){return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,n.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}var se={breadcrumbHomeIcon:"breadcrumbHomeIcon_H4cx"};function ne(){var e=(0,ae.Z)("/");return(0,n.jsx)("li",{className:"breadcrumbs__item",children:(0,n.jsx)(y.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,n.jsx)(oe,{className:se.breadcrumbHomeIcon})})})}var le={breadcrumbsContainer:"breadcrumbsContainer_ZUsR"};function ie(e){var t=e.children,r=e.href,a="breadcrumbs__link";return e.isLast?(0,n.jsx)("span",{className:a,itemProp:"name",children:t}):r?(0,n.jsx)(y.Z,{className:a,href:r,itemProp:"item",children:(0,n.jsx)("span",{itemProp:"name",children:t})}):(0,n.jsx)("span",{className:a,children:t})}function ce(e){var t=e.children,r=e.active,a=e.index,o=e.addMicrodata;return(0,n.jsxs)("li",Object.assign({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,b.Z)("breadcrumbs__item",{"breadcrumbs__item--active":r}),children:[t,(0,n.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function de(){var e=(0,te.s1)(),t=(0,re.Ns)();return e?(0,n.jsx)("nav",{className:(0,b.Z)(v.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,n.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,n.jsx)(ne,{}),e.map((function(t,r){var a=r===e.length-1,o="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,n.jsx)(ce,{active:a,index:r,addMicrodata:!!o,children:(0,n.jsx)(ie,{href:o,isLast:a,children:t.label})},r)}))]})}):null}var be=r(23717),ge={docItemContainer:"docItemContainer_dgjs",docItemCol:"docItemCol_kItF"};function he(e){var t,r,a,o,s,l,i=e.children,d=(t=c(),r=t.frontMatter,a=t.toc,o=(0,g.i)(),s=r.hide_table_of_contents,l=!s&&a.length>0,{hidden:s,mobile:l?(0,n.jsx)(W,{}):void 0,desktop:!l||"desktop"!==o&&"ssr"!==o?void 0:(0,n.jsx)(X,{})}),h=c().metadata.unlisted;return(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:(0,b.Z)("col",!d.hidden&&ge.docItemCol),children:[h&&(0,n.jsx)(be.Z,{}),(0,n.jsx)(L,{}),(0,n.jsxs)("div",{className:ge.docItemContainer,children:[(0,n.jsxs)("article",{children:[(0,n.jsx)(de,{}),(0,n.jsx)(U,{}),d.mobile,(0,n.jsx)(ee,{children:i}),(0,n.jsx)(H,{})]}),(0,n.jsx)(x,{})]})]}),d.desktop&&(0,n.jsx)("div",{className:"col col--3",children:d.desktop})]})}function me(e){var t="docs-doc-id-"+e.content.metadata.id,r=e.content;return(0,n.jsx)(i,{content:e.content,children:(0,n.jsxs)(o.FG,{className:t,children:[(0,n.jsx)(d,{}),(0,n.jsx)(he,{children:(0,n.jsx)(r,{})})]})})}},37499:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(8175),o=r(13636),s=r(11527);function n(){return"dark"===(0,o.I)().colorMode?(0,s.jsx)("div",{style:{marginTop:"2em",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",userSelect:"none"},className:"giscus-container",children:(0,s.jsx)(a.Z,{repo:"share121/share121.github.io",repoId:"R_kgDOKawuNQ",category:"Announcements",categoryId:"DIC_kwDOKawuNc4CZyP8",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"data:text/css,main%7B--color-prettylights-syntax-comment%3A%238b949e%3B--color-prettylights-syntax-constant%3A%2379c0ff%3B--color-prettylights-syntax-entity%3A%23d2a8ff%3B--color-prettylights-syntax-storage-modifier-import%3A%23c9d1d9%3B--color-prettylights-syntax-entity-tag%3A%237ee787%3B--color-prettylights-syntax-keyword%3A%23ff7b72%3B--color-prettylights-syntax-string%3A%23a5d6ff%3B--color-prettylights-syntax-variable%3A%23ffa657%3B--color-prettylights-syntax-brackethighlighter-unmatched%3A%23f85149%3B--color-prettylights-syntax-invalid-illegal-text%3A%23f0f6fc%3B--color-prettylights-syntax-invalid-illegal-bg%3A%238e1519%3B--color-prettylights-syntax-carriage-return-text%3A%23f0f6fc%3B--color-prettylights-syntax-carriage-return-bg%3A%23b62324%3B--color-prettylights-syntax-string-regexp%3A%237ee787%3B--color-prettylights-syntax-markup-list%3A%23f2cc60%3B--color-prettylights-syntax-markup-heading%3A%231f6feb%3B--color-prettylights-syntax-markup-italic%3A%23c9d1d9%3B--color-prettylights-syntax-markup-bold%3A%23c9d1d9%3B--color-prettylights-syntax-markup-deleted-text%3A%23ffdcd7%3B--color-prettylights-syntax-markup-deleted-bg%3A%2367060c%3B--color-prettylights-syntax-markup-inserted-text%3A%23aff5b4%3B--color-prettylights-syntax-markup-inserted-bg%3A%23033a16%3B--color-prettylights-syntax-markup-changed-text%3A%23ffdfb6%3B--color-prettylights-syntax-markup-changed-bg%3A%235a1e02%3B--color-prettylights-syntax-markup-ignored-text%3A%23c9d1d9%3B--color-prettylights-syntax-markup-ignored-bg%3A%231158c7%3B--color-prettylights-syntax-meta-diff-range%3A%23d2a8ff%3B--color-prettylights-syntax-brackethighlighter-angle%3A%238b949e%3B--color-prettylights-syntax-sublimelinter-gutter-mark%3A%23484f58%3B--color-prettylights-syntax-constant-other-reference-link%3A%23a5d6ff%3B--color-btn-text%3A%23c9d1d9%3B--color-btn-bg%3A%2321262d%3B--color-btn-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-shadow%3A0%200%20transparent%3B--color-btn-inset-shadow%3A0%200%20transparent%3B--color-btn-hover-bg%3A%2330363d%3B--color-btn-hover-border%3A%238b949e%3B--color-btn-active-bg%3A%23282e33%3B--color-btn-active-border%3A%236e7681%3B--color-btn-selected-bg%3A%23161b22%3B--color-btn-primary-text%3A%23fff%3B--color-btn-primary-bg%3A%23238636%3B--color-btn-primary-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-primary-shadow%3A0%200%20transparent%3B--color-btn-primary-inset-shadow%3A0%200%20transparent%3B--color-btn-primary-hover-bg%3A%232ea043%3B--color-btn-primary-hover-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-btn-primary-selected-bg%3A%23238636%3B--color-btn-primary-selected-shadow%3A0%200%20transparent%3B--color-btn-primary-disabled-text%3Ahsla%280%2C%200%25%2C%20100%25%2C%200.5%29%3B--color-btn-primary-disabled-bg%3Argba%2835%2C%20134%2C%2054%2C%200.6%29%3B--color-btn-primary-disabled-border%3Argba%28240%2C%20246%2C%20252%2C%200.1%29%3B--color-action-list-item-default-hover-bg%3Argba%28177%2C%20186%2C%20196%2C%200.12%29%3B--color-segmented-control-bg%3Ahsla%28215%2C%208%25%2C%2047%25%2C%200.1%29%3B--color-segmented-control-button-bg%3A%230d1117%3B--color-segmented-control-button-selected-border%3A%236e7681%3B--color-fg-default%3A%23e6edf3%3B--color-fg-muted%3A%237d8590%3B--color-fg-subtle%3A%236e7681%3B--color-canvas-default%3A%230d1117%3B--color-canvas-overlay%3A%23161b22%3B--color-canvas-inset%3A%23010409%3B--color-canvas-subtle%3A%23161b22%3B--color-border-default%3A%2330363d%3B--color-border-muted%3A%2321262d%3B--color-neutral-muted%3Ahsla%28215%2C%208%25%2C%2047%25%2C%200.4%29%3B--color-accent-fg%3A%232f81f7%3B--color-accent-emphasis%3A%231f6feb%3B--color-accent-muted%3Argba%2856%2C%20139%2C%20253%2C%200.4%29%3B--color-accent-subtle%3Argba%2856%2C%20139%2C%20253%2C%200.1%29%3B--color-success-fg%3A%233fb950%3B--color-attention-fg%3A%23d29922%3B--color-attention-muted%3Argba%28187%2C%20128%2C%209%2C%200.4%29%3B--color-attention-subtle%3Argba%28187%2C%20128%2C%209%2C%200.15%29%3B--color-danger-fg%3A%23f85149%3B--color-danger-muted%3Argba%28248%2C%2081%2C%2073%2C%200.4%29%3B--color-danger-subtle%3Argba%28248%2C%2081%2C%2073%2C%200.1%29%3B--color-primer-shadow-inset%3A0%200%20transparent%3B--color-scale-gray-7%3A%2321262d%3B--color-scale-blue-8%3A%230c2d6b%3B--color-social-reaction-bg-hover%3Avar%28--color-scale-gray-7%29%3B--color-social-reaction-bg-reacted-hover%3Avar%28--color-scale-blue-8%29%7Dmain%20.pagination-loader-container%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.com%2Fimages%2Fmodules%2Fpulls%2Fprogressive-disclosure-line-dark.svg%29%7Dmain%20.gsc-loading-image%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fmona-loading-dark.gif%29%7Dhtml%7Bbackground-color%3A%231b1b1d%7D",lang:"zh-CN",loading:"lazy"})}):(0,s.jsx)("div",{style:{marginTop:"2em",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",userSelect:"none"},className:"giscus-container",children:(0,s.jsx)(a.Z,{repo:"share121/share121.github.io",repoId:"R_kgDOKawuNQ",category:"Announcements",categoryId:"DIC_kwDOKawuNc4CZyP8",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"data:text/css,main%7B--color-prettylights-syntax-comment%3A%236e7781%3B--color-prettylights-syntax-constant%3A%230550ae%3B--color-prettylights-syntax-entity%3A%238250df%3B--color-prettylights-syntax-storage-modifier-import%3A%2324292f%3B--color-prettylights-syntax-entity-tag%3A%23116329%3B--color-prettylights-syntax-keyword%3A%23cf222e%3B--color-prettylights-syntax-string%3A%230a3069%3B--color-prettylights-syntax-variable%3A%23953800%3B--color-prettylights-syntax-brackethighlighter-unmatched%3A%2382071e%3B--color-prettylights-syntax-invalid-illegal-text%3A%23f6f8fa%3B--color-prettylights-syntax-invalid-illegal-bg%3A%2382071e%3B--color-prettylights-syntax-carriage-return-text%3A%23f6f8fa%3B--color-prettylights-syntax-carriage-return-bg%3A%23cf222e%3B--color-prettylights-syntax-string-regexp%3A%23116329%3B--color-prettylights-syntax-markup-list%3A%233b2300%3B--color-prettylights-syntax-markup-heading%3A%230550ae%3B--color-prettylights-syntax-markup-italic%3A%2324292f%3B--color-prettylights-syntax-markup-bold%3A%2324292f%3B--color-prettylights-syntax-markup-deleted-text%3A%2382071e%3B--color-prettylights-syntax-markup-deleted-bg%3A%23ffebe9%3B--color-prettylights-syntax-markup-inserted-text%3A%23116329%3B--color-prettylights-syntax-markup-inserted-bg%3A%23dafbe1%3B--color-prettylights-syntax-markup-changed-text%3A%23953800%3B--color-prettylights-syntax-markup-changed-bg%3A%23ffd8b5%3B--color-prettylights-syntax-markup-ignored-text%3A%23eaeef2%3B--color-prettylights-syntax-markup-ignored-bg%3A%230550ae%3B--color-prettylights-syntax-meta-diff-range%3A%238250df%3B--color-prettylights-syntax-brackethighlighter-angle%3A%2357606a%3B--color-prettylights-syntax-sublimelinter-gutter-mark%3A%238c959f%3B--color-prettylights-syntax-constant-other-reference-link%3A%230a3069%3B--color-btn-text%3A%2324292f%3B--color-btn-bg%3A%23f6f8fa%3B--color-btn-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-shadow%3A0%201px%200%20rgb%2831%2035%2040%2F4%25%29%3B--color-btn-inset-shadow%3Ainset%200%201px%200%20hsla%280%2C%200%25%2C%20100%25%2C%200.25%29%3B--color-btn-hover-bg%3A%23f3f4f6%3B--color-btn-hover-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-active-bg%3A%23ebecf0%3B--color-btn-active-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-selected-bg%3A%23eeeff2%3B--color-btn-primary-text%3A%23fff%3B--color-btn-primary-bg%3A%231f883d%3B--color-btn-primary-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-primary-shadow%3A0%201px%200%20rgba%2831%2C%2035%2C%2040%2C%200.1%29%3B--color-btn-primary-inset-shadow%3Ainset%200%201px%200%20hsla%280%2C%200%25%2C%20100%25%2C%200.03%29%3B--color-btn-primary-hover-bg%3A%231a7f37%3B--color-btn-primary-hover-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-btn-primary-selected-bg%3A%23187733%3B--color-btn-primary-selected-shadow%3Ainset%200%201px%200%20rgba%280%2C%2045%2C%2017%2C%200.2%29%3B--color-btn-primary-disabled-text%3Ahsla%280%2C%200%25%2C%20100%25%2C%200.8%29%3B--color-btn-primary-disabled-bg%3A%2394d3a2%3B--color-btn-primary-disabled-border%3Argba%2831%2C%2035%2C%2040%2C%200.15%29%3B--color-action-list-item-default-hover-bg%3Argba%28208%2C%20215%2C%20222%2C%200.32%29%3B--color-segmented-control-bg%3A%23eaeef2%3B--color-segmented-control-button-bg%3A%23fff%3B--color-segmented-control-button-selected-border%3A%238c959f%3B--color-fg-default%3A%231f2328%3B--color-fg-muted%3A%23656d76%3B--color-fg-subtle%3A%236e7781%3B--color-canvas-default%3A%23fff%3B--color-canvas-overlay%3A%23fff%3B--color-canvas-inset%3A%23f6f8fa%3B--color-canvas-subtle%3A%23f6f8fa%3B--color-border-default%3A%23d0d7de%3B--color-border-muted%3A%23d8dee4%3B--color-neutral-muted%3Argba%28175%2C%20184%2C%20193%2C%200.2%29%3B--color-accent-fg%3A%230969da%3B--color-accent-emphasis%3A%230969da%3B--color-accent-muted%3Argba%2884%2C%20174%2C%20255%2C%200.4%29%3B--color-accent-subtle%3A%23ddf4ff%3B--color-success-fg%3A%231a7f37%3B--color-attention-fg%3A%239a6700%3B--color-attention-muted%3Argba%28212%2C%20167%2C%2044%2C%200.4%29%3B--color-attention-subtle%3A%23fff8c5%3B--color-danger-fg%3A%23d1242f%3B--color-danger-muted%3Argba%28255%2C%20129%2C%20130%2C%200.4%29%3B--color-danger-subtle%3A%23ffebe9%3B--color-primer-shadow-inset%3Ainset%200%201px%200%20rgba%28208%2C%20215%2C%20222%2C%200.2%29%3B--color-scale-gray-1%3A%23eaeef2%3B--color-scale-blue-1%3A%23b6e3ff%3B--color-social-reaction-bg-hover%3Avar%28--color-scale-gray-1%29%3B--color-social-reaction-bg-reacted-hover%3Avar%28--color-scale-blue-1%29%7Dmain%20.pagination-loader-container%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.com%2Fimages%2Fmodules%2Fpulls%2Fprogressive-disclosure-line.svg%29%7Dmain%20.gsc-loading-image%7Bbackground-image%3Aurl%28https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fmona-loading-default.gif%29%7Dhtml%7Bbackground-color%3A%23fff%7D",lang:"zh-CN",loading:"lazy"})})}}}]);