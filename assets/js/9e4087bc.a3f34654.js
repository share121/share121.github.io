"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[3608],{28151:function(e,r,a){a.r(r),a.d(r,{default:function(){return o}});a(67294);var t=a(83699),s=a(97325),i=a(35463),n=a(94306),c=a(13899),l=a(85893);function d(e){var r=e.year,a=e.posts;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:a.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)}))})]})}function h(e){var r=e.years;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map((function(e,r){return(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,Object.assign({},e))},r)}))})})})}function o(e){var r,a,t=e.archive,d=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(r=t.blogPosts,a=r.reduce((function(e,r){var a,t=r.metadata.date.split("-")[0],s=null!=(a=e.get(t))?a:[];return e.set(t,[r].concat(s))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:d,description:o}),(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h1",className:"hero__title",children:d}),(0,l.jsx)("p",{className:"hero__subtitle",children:o})]})}),(0,l.jsx)("main",{children:m.length>0&&(0,l.jsx)(h,{years:m})})]})]})}}}]);