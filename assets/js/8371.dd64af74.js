"use strict";(self.webpackChunkany_doc=self.webpackChunkany_doc||[]).push([[8371],{43349:function(e,t,n){n.d(t,{a:function(){return l}});var r=n(96225);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},96225:function(e,t,n){n.d(t,{$p:function(){return d},O1:function(){return a},WR:function(){return p},bF:function(){return o},bg:function(){return c}});var r=n(37514),l=n(73234);function o(e,t){return!!e.children(t).length}function a(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.Z(n)){var o=n.transition;if(l.Z(o))return o(e)}return e}},18371:function(e,t,n){n.d(t,{diagram:function(){return a}});var r=n(75254),l=n(38621),o=n(56363);n(64218),n(45625),n(41644),n(39354),n(27484),n(17967),n(27856);const a={parser:r.p,db:r.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),r.f.clear(),r.f.setGen("gen-2")}}},38621:function(e,t,n){n.d(t,{a:function(){return h},f:function(){return w}});var r=n(45625),l=n(64218),o=n(56363),a=n(90360),i=n(43349),s=n(61691),c=n(71610);var d=(e,t)=>s.Z.lang.round(c.Z.parse(e)[t]),p=n(51117);const b={},u=function(e,t,n,r,l,a){const s=r.select(`[id="${n}"]`);Object.keys(e).forEach((function(n){const r=e[n];let c="default";r.classes.length>0&&(c=r.classes.join(" ")),c+=" flowchart-label";const d=(0,o.k)(r.styles);let p,b=void 0!==r.text?r.text:r.id;if(o.l.info("vertex",r,r.labelType),"markdown"===r.labelType)o.l.info("vertex",r,r.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,i.a)(s,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}p=e}let u=0,f="";switch(r.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}t.setNode(r.id,{labelStyle:d.labelStyle,shape:f,labelText:b,labelType:r.labelType,rx:u,ry:u,class:c,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||"",domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:f,labelText:b,rx:u,ry:u,class:c,style:d.style,id:r.id,domId:a.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,o.c)().flowchart.padding})}))},f=function(e,t,n){o.l.info("abc78 edges = ",e);let r,a,i=0,s={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);r=t.style,a=t.labelStyle}e.forEach((function(n){i++;const c="L-"+n.start+"-"+n.end;void 0===s[c]?(s[c]=0,o.l.info("abc78 new entry",c,s[c])):(s[c]++,o.l.info("abc78 new entry",c,s[c]));let d=c+"-"+s[c];o.l.info("abc78 new link id to be used is",c,d,s[c]);const p="LS-"+n.start,u="LE-"+n.end,f={style:"",labelStyle:""};switch(f.minlen=n.length||1,"arrow_open"===n.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let w="",h="";switch(n.stroke){case"normal":w="fill:none;",void 0!==r&&(w=r),void 0!==a&&(h=a),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,o.k)(n.style);w=e.style,h=e.labelStyle}f.style=f.style+=w,f.labelStyle=f.labelStyle+=h,void 0!==n.interpolate?f.curve=(0,o.n)(n.interpolate,l.c_6):void 0!==e.defaultInterpolate?f.curve=(0,o.n)(e.defaultInterpolate,l.c_6):f.curve=(0,o.n)(b.curve,l.c_6),void 0===n.text?void 0!==n.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=n.labelType,f.label=n.text.replace(o.e.lineBreakRegex,"\n"),void 0===n.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=d,f.classes="flowchart-link "+p+" "+u,t.setEdge(n.start,n.end,f,i)}))},w={setConf:function(e){const t=Object.keys(e);for(const n of t)b[n]=e[n]},addVertices:u,addEdges:f,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,i){o.l.info("Drawing flowchart");let s=i.db.getDirection();void 0===s&&(s="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),p=d.nodeSpacing||50,b=d.rankSpacing||50;let w;"sandbox"===c&&(w=(0,l.Ys)("#i"+t));const h="sandbox"===c?(0,l.Ys)(w.nodes()[0].contentDocument.body):(0,l.Ys)("body"),g="sandbox"===c?w.nodes()[0].contentDocument:document,y=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=i.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let r=x.length-1;r>=0;r--)k=x[r],o.l.info("Subgraph - ",k),i.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=i.db.getVertices(),m=i.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.td_)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}u(v,y,t,h,g,i),f(m,y);const T=h.select(`[id="${t}"]`),_=h.select("#"+t+" g");if(await(0,a.r)(_,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(T,"flowchartTitleText",d.titleTopMargin,i.db.getDiagramTitle()),(0,o.o)(y,T,d.diagramPadding,d.useMaxWidth),i.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=g.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(v).forEach((function(e){const n=v[e];if(n.link){const r=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(r){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},h=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=d,r=n(e,"r"),l=n(e,"g"),o=n(e,"b");return p.Z(r,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);