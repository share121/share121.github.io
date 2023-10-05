(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"ff95ca3f50b967e23aa7cf9f4f615212","url":"404.html"},{"revision":"36374208133d32895fdb773cd42e77ae","url":"assets/css/styles.6a4a5884.css"},{"revision":"587125804de8db70ef6f3b2586089777","url":"assets/js/1138.c62a2918.js"},{"revision":"6bc14c81e06f5e192fffe5f4e7e75952","url":"assets/js/17034def.d2c00ea2.js"},{"revision":"e6bc4d86ce0de928e2e3e0d01206ab85","url":"assets/js/17896441.53ef540a.js"},{"revision":"1c006828431cbcfa4f1a7e2a86b02e2e","url":"assets/js/1a4e3797.3da22084.js"},{"revision":"b9f4c64d4437223f3c87eff3afe6558a","url":"assets/js/1be78505.589623e1.js"},{"revision":"dabb87cdd4f44801cf783e3925d4e0cb","url":"assets/js/1df93b7f.2f0814c8.js"},{"revision":"2c19ffb437bfd7943e49c4ea83fba800","url":"assets/js/1f3cbf67.9a0618c8.js"},{"revision":"dd8217e4e674a25d2dbf39127fa92792","url":"assets/js/207.bf4953fa.js"},{"revision":"40ba4156059ef50fa3e1b86c7bd1ed82","url":"assets/js/219e63bb.bf4c8f39.js"},{"revision":"09af889390402e81954c084e6d4f34c8","url":"assets/js/22f74bde.e6b7d3a9.js"},{"revision":"cc5ec238622b51aabbdf745ea1cd0139","url":"assets/js/25f96342.f6461f78.js"},{"revision":"f184d07d490dfb6a6ee2b092176e31d1","url":"assets/js/281c41d9.ca5ef0f8.js"},{"revision":"d997fa9861f7e3c27674a305b0edb34d","url":"assets/js/2b16541f.d1d32b92.js"},{"revision":"93e8ee17ce48a839aea10e544d3b9259","url":"assets/js/2b35cd3f.baed46e2.js"},{"revision":"02664c4505be945c719f41e5d9e5a911","url":"assets/js/2baf8c01.2188809f.js"},{"revision":"4377cfb228a947133464f7daf812da40","url":"assets/js/2ede0392.0a3f12a3.js"},{"revision":"698e2b394756d526620980cbb55df9a8","url":"assets/js/2f296ae8.9d4b9059.js"},{"revision":"9913f054f55ff722d3d1f2abc0f88613","url":"assets/js/316.9d21afdb.js"},{"revision":"d78af54fcdba1d439432ca5ba8e4b87a","url":"assets/js/363.20c6d85f.js"},{"revision":"e64f5f04e08f634d7c8093d39092b1da","url":"assets/js/3791.21dc852a.js"},{"revision":"cba303163c1b98d8bc72d9546c3434b5","url":"assets/js/3b9cebc8.2919a0b4.js"},{"revision":"38eb7a2d755e35260f22ae2c7ac8ac56","url":"assets/js/3d3e7f22.d8577196.js"},{"revision":"c1215abfde00201b045616726efc9ed8","url":"assets/js/4162da2f.d47a040e.js"},{"revision":"0f1357dcf8b24b8a96f95d1c7731abdb","url":"assets/js/4248.379860b5.js"},{"revision":"e95edcb5ab0eb6aa43c2478e55e67dfe","url":"assets/js/487.95e2457d.js"},{"revision":"e339a593b9dce7993ee1842adfb7bc00","url":"assets/js/5131.a35e73e6.js"},{"revision":"9c8158b43f18cb221e98ddfe154215a5","url":"assets/js/5525.3bb6479b.js"},{"revision":"0c7c5fd463c37e166993e2489a906c40","url":"assets/js/56e0b206.e3e1877a.js"},{"revision":"53bf7276abc3cd7d751f1d23503383c8","url":"assets/js/5c7b1457.96b5f85d.js"},{"revision":"e3ee3b2bfa0b29e6dc8e84ef2bb867cb","url":"assets/js/5ce6d5b5.0a250f2a.js"},{"revision":"90da8ea8a0a22c572c7e969985050618","url":"assets/js/5fe16d1f.c5885b05.js"},{"revision":"ea64214dabfce2d036a4044f7ebc5b6a","url":"assets/js/62175bee.b0ff01ab.js"},{"revision":"818c6fd49e796ad37e3feb63ab88d3d6","url":"assets/js/6316.ea0c85aa.js"},{"revision":"cc02f9193ab0d839f0f389af2c2d67c2","url":"assets/js/6689b0e4.0ee50a7a.js"},{"revision":"444720b1883d59316a1f8aecbb9a0343","url":"assets/js/68833ae8.91ebfa85.js"},{"revision":"cdf08195ddec0d10836b5525b612ef14","url":"assets/js/6902b5ea.1f76a5f4.js"},{"revision":"4febe210dbdd5cc994d98af06fa30cc6","url":"assets/js/6a0f555b.700ad876.js"},{"revision":"0ae03b5e9e570ce29da16e9c5ed20b8b","url":"assets/js/6b044817.3ad2e54d.js"},{"revision":"8b62498caf72e7228ead297011ab88cd","url":"assets/js/6bfaa9a0.658d5144.js"},{"revision":"3bf8681664c3c71769e29149657c21e3","url":"assets/js/6c78810f.6769c06a.js"},{"revision":"ec857f73ac31bd2f3e781e709e150d2f","url":"assets/js/71f1bd9c.1d0c375e.js"},{"revision":"7ae9d2628d31d6c9a547b3f2845fa2dd","url":"assets/js/724.59a8e02f.js"},{"revision":"e5158180c719b6fc8b2e467a53680bff","url":"assets/js/76ada2e7.5eebcaed.js"},{"revision":"b636322aeeed9a281d205ccd3d4f916d","url":"assets/js/7724.1d2affff.js"},{"revision":"63c5281fdccae6ddd5de40d4d45d56d1","url":"assets/js/7e3e7cb3.57fe98a5.js"},{"revision":"0a2614ff694d5573293885dbe8979fd8","url":"assets/js/814f3328.e7e6c12a.js"},{"revision":"b7f0182d7b57ef94a30b6ea9d37af2a6","url":"assets/js/8443.6848c300.js"},{"revision":"b8d021f7df1e3ce7a2ad56bb6642fe6d","url":"assets/js/884acb8d.61db71f9.js"},{"revision":"52fe0a2bb188382e4d33a33ba382c3e4","url":"assets/js/8ac6eb04.068d4f98.js"},{"revision":"4acc1a6805f688cc408cbb29d2b317e9","url":"assets/js/8dd709c8.0d61d6a3.js"},{"revision":"a8a4756dbeda5580dddeeb2775946432","url":"assets/js/8fa680c9.d080be15.js"},{"revision":"9632e95d6766456c7562d1bc9497c056","url":"assets/js/9190.5fc3a56a.js"},{"revision":"3c1643ca279fff9e2b9a038d84f6bd17","url":"assets/js/91e52de9.b1a28ea4.js"},{"revision":"6e43de5badd2a6b5871ef60d4cb7dd9c","url":"assets/js/935f2afb.ec5cf457.js"},{"revision":"204c78f5cbd28db80198d674806c5c69","url":"assets/js/9487.7e91e8b6.js"},{"revision":"6afeff6e2f18ce4ff34052ad88635bce","url":"assets/js/95f7942c.dad448ce.js"},{"revision":"df6efa000af953c0dde920c42bad8c63","url":"assets/js/9e4087bc.a16f97c2.js"},{"revision":"ace3ce83002161d4e5b4c9b3167c7a2b","url":"assets/js/9fce0aa0.05d08889.js"},{"revision":"b9c37db059aca0262b94a13dec84f8ac","url":"assets/js/a3564f55.b7fc5d55.js"},{"revision":"f5eecfc0188e671324061a11aceaa779","url":"assets/js/a6633344.e5c1fee8.js"},{"revision":"cf19027eb4e24e5107362b33cd740bd4","url":"assets/js/a6aa9e1f.f615f617.js"},{"revision":"5009a20237cc6b48ea4bcc099ffbdce5","url":"assets/js/a7d65892.dc836f1c.js"},{"revision":"13ec634b22f8ab77172489d3443c9461","url":"assets/js/a9124c48.84b58dc7.js"},{"revision":"d0f93edaebba66c56d17e02d6dc5a47d","url":"assets/js/ac802a0b.3da3ea1b.js"},{"revision":"279079dedf4ead44969e2be9d54794c1","url":"assets/js/ad0506e3.c479442b.js"},{"revision":"2ff6e0dae41658b3bcfed53fea9240c3","url":"assets/js/af76dbb9.ca53568e.js"},{"revision":"ae52ad6e5cb903047345395a9cbe79b1","url":"assets/js/b2b675dd.ab225789.js"},{"revision":"83eea1dfbb4f7eb129a9b5c3866764ed","url":"assets/js/b2f554cd.3cf0d204.js"},{"revision":"61552caf075b86f6cc3ab14ed68f13cb","url":"assets/js/b657be04.6f54045c.js"},{"revision":"78796e33f541b07c9bd59b484a4dd4d6","url":"assets/js/ba7cfe64.82e3750b.js"},{"revision":"81d9a1040984c75cdc95aa27f1ac5579","url":"assets/js/c740c349.9288e6da.js"},{"revision":"b0abdc58073a72d33d875ecbc22ebef7","url":"assets/js/c771f994.57b576a4.js"},{"revision":"34b3edcec72c919815752ab4cde490ec","url":"assets/js/ca9df395.2f4e2470.js"},{"revision":"6002ccff677a51dcbefb5dcc78e308de","url":"assets/js/ccc49370.1868521e.js"},{"revision":"0e1bc4b79e3432273ebd0ab46c0dc2ab","url":"assets/js/cda8b387.4a96e615.js"},{"revision":"9847b5d6ea5457119a930603c44f5f18","url":"assets/js/d43ab880.6e3de690.js"},{"revision":"5afac3ed37df16543d117ef5a0541f2c","url":"assets/js/d8434f85.39d4dd63.js"},{"revision":"e5b95ede9a019d83e07b2b2a3ad55a8a","url":"assets/js/ded649c0.12a41427.js"},{"revision":"7c23adffbbdf9121da196339f75e3863","url":"assets/js/e0a5bfeb.fd0c1dbc.js"},{"revision":"d684d4e57abc662b2f6c7ea1bf307521","url":"assets/js/e236aa13.037bb33e.js"},{"revision":"2361442425df2554cd72543e790308d2","url":"assets/js/e2e4044a.098e4b57.js"},{"revision":"1d48932bed68e0c1e5af0b139bd45eb7","url":"assets/js/e4050dc8.515f23d9.js"},{"revision":"8538077d97f9f96f7287e3aa932c9dc6","url":"assets/js/e531813d.565d8b47.js"},{"revision":"5845f1ecc947aae2940d603a58af8530","url":"assets/js/eb35ed5a.4ec0ee94.js"},{"revision":"6b1c49666d751c1d1d606b6dfd9031b4","url":"assets/js/f0e631ab.28ffc360.js"},{"revision":"f97fbfb5ce1ba4fdb7fc9450fc4462eb","url":"assets/js/f5fc6299.8eb248cf.js"},{"revision":"4b070929d026607ce2d8736a50cd9ca3","url":"assets/js/f77d02ac.b5ded86c.js"},{"revision":"8c29c8b740add3aafaf2ef06451946c1","url":"assets/js/f94808a4.0d61ec92.js"},{"revision":"2f7559a72f66a408942b1d67dcd90ad5","url":"assets/js/fd7aa01a.bc411d9b.js"},{"revision":"cf3fda715d2b27bedcf470c8749fa85c","url":"assets/js/fd885a91.a62f0fa9.js"},{"revision":"3ef59330462012344bf08521c7b3e80d","url":"assets/js/fed7d42c.13a87534.js"},{"revision":"bbcaf63ce26fa037fa124d44001c174d","url":"assets/js/main.4733f813.js"},{"revision":"ec51dcf29224eb881b9e331cba73f1c6","url":"assets/js/runtime~main.fa531fb1.js"},{"revision":"86811ff93d1b5d005ed17ac8712be795","url":"blog.html"},{"revision":"54c34d2d6275376c58ba30fbbcd2d1cf","url":"blog/2023/10/1/2023 年广州市政府工作报告.html"},{"revision":"899f40680275dcc8546d8668ec34cfe2","url":"blog/2023/10/1/cppcc.html"},{"revision":"33ef76db9ee0a3cbb6d6900204d867b1","url":"blog/2023/7/21/这是我的第一个博客.html"},{"revision":"567323430ef2d529345b584750f84a9f","url":"blog/2023/7/24/宪法读后感.html"},{"revision":"2f627ba49f66c1cc39d903fd49094556","url":"blog/2023/7/25/党和国家维护社会公平的措施.html"},{"revision":"791b6d1e58da9dc9fca23b545c2eee44","url":"blog/2023/7/25/参加志愿活动的体会.html"},{"revision":"5a0b0b9c271a1594de292f6046b3dda8","url":"blog/2023/7/25/时政点评.html"},{"revision":"b1fee6196830458753b0acc4bbf29e10","url":"blog/2023/9/25/学生会检讨书.html"},{"revision":"cbf1d31dbfac684157a2e1cff19924f1","url":"blog/2023/9/25/时政点评.html"},{"revision":"cbb6113cf7bb5da1140c3a5a61c7e7d0","url":"blog/archive.html"},{"revision":"bbddb785ce208351c2e1aaea8cdc77ee","url":"index.html"},{"revision":"dc7b80ea0451f3fa19b9e2b41cc9de1e","url":"intro.html"},{"revision":"cbee9471aa5a6505dd69475fbeb485cc","url":"search-index.json"},{"revision":"5b7e4cd926f49db205eac188de50a8a2","url":"search.html"},{"revision":"c1fd202c39c25ed6beea14934f3a4feb","url":"化学/初识化学.html"},{"revision":"1a27057d78fabda5651bef14aa0e195f","url":"化学/实验探究初步.html"},{"revision":"b6509d029f65b5eb92de181c1a8b82b8","url":"化学/氧气的制备综合.html"},{"revision":"54fdede34d6ece68ee37393b204025ed","url":"化学/物质的变化和性质.html"},{"revision":"dc2d2571c80ae58dcdd6589c798389dd","url":"化学/空气和氧气.html"},{"revision":"e0eb576230b5c353af6707f2b267b30c","url":"化学/走进化学实验室.html"},{"revision":"8ef5a035b3ea5277a8a4d9ccfb719bfc","url":"历史/三大改造.html"},{"revision":"e8f45356e8469a96cea324bc76e9d994","url":"历史/中华人民共和国成立.html"},{"revision":"cfee1770afaa19a7f20c1d611dd42175","url":"历史/伟大的历史转折.html"},{"revision":"0ce0e51bcedd0444535c00d63f9caf8a","url":"历史/土地改革.html"},{"revision":"b2deeb0a80f383415440a0216afd3381","url":"历史/抗美援朝.html"},{"revision":"12b16803f3140b284abdf4c9098b1c43","url":"历史/新中国工业化的起步和人民代表大会制度的确立.html"},{"revision":"576d993d4dd32a1facc6ee337f51a4bd","url":"历史/经济体制改革.html"},{"revision":"b73dcc7c5a76c50d5935e06068738b6c","url":"历史/艰辛探索与建设成就.html"},{"revision":"b02f921b15e32eb46b64428bc5e604fa","url":"数学/二次函数.html"},{"revision":"39d1ece6a264e0cc112314dacbc0a199","url":"数学/反比例函数.html"},{"revision":"bf0015a8d80c8abd518299872c8ddf12","url":"数学/圆.html"},{"revision":"3469950317799f1e0a640b962d89e2bb","url":"数学/相似三角形.html"},{"revision":"583227bf6532448c9660191364664a56","url":"物理/内能.html"},{"revision":"77bdd043c29e97c225737bb2672586aa","url":"物理/分子热运动.html"},{"revision":"3d16ba62a90e7a4078e9f27867117fb8","url":"物理/电的起源.html"},{"revision":"071cc2d4e28e668bcb822d112a91e666","url":"编程/HTML/HTML 语法.html"},{"revision":"7890ac90107f60a484bf806b499861a3","url":"编程/JavaScript/scope 伪类.html"},{"revision":"5a26215a4f5d962c73d59d14e98d18ec","url":"编程/JavaScript/修改文件访问时间、修改时间.html"},{"revision":"e3d3f05683bfb2c1b8bdedd13c0b1e18","url":"编程/JavaScript/获得所有文件.html"},{"revision":"ecb8d8571fe63771afab1e73197120f6","url":"编程/JavaScript/获得数据类型.html"},{"revision":"f88e8e48c8cbdd4d369e3abc296b654d","url":"编程/JavaScript/观察元素更改.html"},{"revision":"bd090751de917dd0c7823197b4c93118","url":"编程/Python/OpenCV.html"},{"revision":"e18c784263fe04458cb2c34cbf4f25a6","url":"编程/Python/后台操作键鼠.html"},{"revision":"6fe2cea1b6094a611fb2c7eed68708c0","url":"编程/单文件制作.html"},{"revision":"19b262a82065dcb4ebdc9e748958b498","url":"编程/逆向/无限 debugger.html"},{"revision":"4c3149edc59609953b3722f4780e2d0b","url":"编程/逆向/模拟输入.html"},{"revision":"0a126aa9e156d3dceb67a1ed3c940544","url":"编程/逆向/防止强制跳转.html"},{"revision":"5843419fb7989b66fb5d5709d882876e","url":"英语/周报/第 1 期.html"},{"revision":"5b476b7c4744963c90a7d6c8fb5f87fd","url":"英语/周报/第 2 期.html"},{"revision":"bdd8cc010f89e73cc847df1027160348","url":"英语/周报/第 5 期.html"},{"revision":"285e326fd4501ae40593989b795a599e","url":"英语/周报/第 6 期.html"},{"revision":"6ed0cad5fa664fdd5f3298524ed740e5","url":"英语/定语从句.html"},{"revision":"6946fccd7a21c9e9d06d8961eda47715","url":"英语/开学考笔记.html"},{"revision":"542c8584b7a577dcad5bb0e19c59a333","url":"语文/传统文化类作文.html"},{"revision":"50428fe236359ee03b16d416e4358f18","url":"语文/梦想励志类作文.html"},{"revision":"e5adb7a7c4b1c9d77bbc5e36b086723a","url":"语文/议论文作文.html"},{"revision":"96ed8fc8e0a021b1140ba47ea52bbf97","url":"assets/images/02-OpenCV_10_0-1e5ab7fb73460afa29f9e899e7f94202.svg"},{"revision":"aa50194fe1fb448e53f26737b2803c9c","url":"assets/images/02-OpenCV_12_0-a7d1e76c878802a9d5308db58b2cd892.svg"},{"revision":"d5f7cda1de7487925b8c9b961bf70df9","url":"assets/images/02-OpenCV_14_0-bda1d78d1a747b1ae67683e7c716b37f.svg"},{"revision":"b94a2836c793b6443ab89328eda5ba88","url":"assets/images/02-OpenCV_20_0-bd66b2834e57fe77b94342e23209186d.svg"},{"revision":"60d53118573ae57ce068660d3213c512","url":"assets/images/02-OpenCV_22_0-346a3b80cca873ee89b3eaf6060d39f9.svg"},{"revision":"adaf5e39dcffd982d3d86a0e408d6d3c","url":"assets/images/02-OpenCV_24_0-807e0c2aa77959fe247f0d21b0c9f6d6.svg"},{"revision":"5d298cf1bb4a9de82deb4cd4f75fe8c4","url":"assets/images/02-OpenCV_28_0-44e51bac0ac8b7dc984b1cc92eb739c1.svg"},{"revision":"54a9e5067dae37b74b542917163b178f","url":"assets/images/02-OpenCV_33_0-a0196a0f1b2ee68a6926565893edf730.svg"},{"revision":"3eab89618ad80b5706fc9921dba9a64f","url":"assets/images/02-OpenCV_37_0-6f8b8785cbf28f7a5eac03812b0a93db.svg"},{"revision":"e27386eb0d9cd640407d3e2a61da573e","url":"assets/images/02-OpenCV_39_0-ce70d7cbd8276a7790df423956941992.svg"},{"revision":"6bc19fa2adcae081a77713ce5664b31a","url":"assets/images/02-OpenCV_42_0-4cbe804a5b421e2260d061040ceb5023.svg"},{"revision":"ad5bd739245d2efb12cb857b6f04f8b2","url":"assets/images/02-OpenCV_44_0-88f3bf28441eeac1b3abe9d008c3b760.svg"},{"revision":"95f4ba379d61b3437caf37571fe00c0d","url":"assets/images/02-OpenCV_46_0-b3092850d26191941caa3b48243a8694.svg"},{"revision":"6460c99e6e963e1ed15a5c9c9590fbfe","url":"assets/images/02-OpenCV_48_0-b52a4919c70e7196b2a4518975dbdc8e.svg"},{"revision":"8f95727e0b3cc921f48b501bbac80572","url":"assets/images/02-OpenCV_50_0-ac33f17331ce6ec73a563e1965731167.svg"},{"revision":"50bac21e10dff75206549470f6812136","url":"assets/images/02-OpenCV_53_0-cf04ce58aa33a3953e28df506892a08c.svg"},{"revision":"90ffe0704ddef510306f01de7444a4aa","url":"assets/images/02-OpenCV_54_0-1ff5c52b8ca977d1d81aaa8b270db326.svg"},{"revision":"3dad22a67ee25586a9637b18dc0be26d","url":"assets/images/02-OpenCV_56_0-de6960ef63aa4f63091c33bd382d6835.svg"},{"revision":"5154c8846169c44b3e3d69641adc4555","url":"assets/images/02-OpenCV_58_0-b6457bdf6dd73def5cd38fd1fa8d10f5.svg"},{"revision":"d0faf64c7192fbefabbf6d053c29af55","url":"assets/images/02-OpenCV_61_0-0a40018cc32dcfe155d492e9cf200563.svg"},{"revision":"8eeca45c5ebe48b488492c2d116a75b6","url":"assets/images/02-OpenCV_63_0-bd506d2e3253c034b262749ad728cb06.svg"},{"revision":"c1d29e4582e3fb44d2d0fd97a9ffde4a","url":"assets/images/02-OpenCV_65_0-29211feb43911364e238f918323c6dfa.svg"},{"revision":"5ca83a0bfd74e43788e2b91c77faed88","url":"assets/images/02-OpenCV_67_0-3ab8a2f646cab84dd7a1db07e328bafe.svg"},{"revision":"6a33b0c53e4a01e9f6c4f66483b74a2e","url":"assets/images/02-OpenCV_70_0-873dedb62f510e32d9b7901ecda353dd.svg"},{"revision":"c660290e32ebb9d79999ab3360f018c6","url":"assets/images/Enter Output File Name-bc389f8259114522178ad5fd9066707c.png"},{"revision":"073f03dcc796d2c3e79715c3e0e72b0c","url":"assets/images/tmp5700-448f4c2d9980edfbd60c136b98045ab2.png"},{"revision":"b6bbefaa79dc71ab75c5f1c32e465ed1","url":"assets/images/tmp9D37-adf40bc9e2b74439d948764d8bec1994.png"},{"revision":"1a817bbf162c683b8dae7b4fdede1d04","url":"assets/images/tmpC4CC-ae0b7c7cef063f6dddc85193c4222f4c.png"},{"revision":"885538fce225b48e717faa46c43f0305","url":"assets/images/一线三垂直相似模型-3fec0c3f75015ca3735577ce4d56a76f.jpg"},{"revision":"286a042db4174d32bf98819d7370b19a","url":"assets/images/二次函数一般式求顶点坐标-ed898d00c303860dd83b3b4085e7f6b8.png"},{"revision":"a116654754efe69622e0af2134bc9894","url":"assets/images/其他常见化学仪器-36fc814055d1bf1d275b01c0b59963af.jpg"},{"revision":"a00f59435b3137db7e192c3d9a9ec3c2","url":"assets/images/化合反应与氧化反应的关系示意图-37a2d86b9ed6d92489989f24f7f13ec0.jpg"},{"revision":"d50e8eed0ae0f5d8b243fe70141241f8","url":"assets/images/双阈值检查示意图-2b48c0bd93d71f997ff47eb68c66b83e.png"},{"revision":"e4b7a49d0ee6276acbebea24827d2452","url":"assets/images/发生装置的选择-fd558f446958dae86dda29c6974291fe.jpg"},{"revision":"899ce6fb49e56275a0f73f22ee551821","url":"assets/images/吴明毅-a2ed3d08bfb31b49148d992eeebdfe43.jpg"},{"revision":"11b95d6ec7ee8431be7628d7aad92f76","url":"assets/images/圆周角-7bdc00bdced36f5cea12c2bc4a0bed3a.jpg"},{"revision":"6973e1b58ed70260f3ea0a67d061a6a5","url":"assets/images/圆周角定理推理2-57904120c0af7ed55d2348a621c50fc6.jpg"},{"revision":"afe51a69e02223467431d4d666afc2c5","url":"assets/images/圆周角定理推论3-d55781ccc22172b7bb6cc0c3a3491cbe.jpg"},{"revision":"6556a09f51943685451c7ea9472cd9fe","url":"assets/images/垂径定理-675902440dc57391cdd240d891484606.jpg"},{"revision":"c24c437282a9cacd54b8ee059d6a2284","url":"assets/images/子母火焰-1d9dd12a68a357ec3b1e1bd233aa3f18.jpg"},{"revision":"25ba0e9a319e5eebf0ef1f5becf5bae9","url":"assets/images/平行线分线段成比例例子-e27694301a61a09aa4878ec1b7e54898.jpg"},{"revision":"cafe4edc1ef675c06886e9f770900fad","url":"assets/images/平行线分线段成比例示意图-a1105c951d150970dafba392ef8da922.jpg"},{"revision":"8022b045ebe9b7f972d897b9dd5fece6","url":"assets/images/开启文件压缩-9cb67c43b4f261f35417d8f8d7276e52.png"},{"revision":"078098daafb08c838d2b68b9a1f6b783","url":"assets/images/弦-b13e6e163405e5dc98517911b5e6bd9b.jpg"},{"revision":"052ccc3e04b11c21b0416749c204df03","url":"assets/images/弦心距-d3ec3a3b632a8848fbbd1a0c9beeb80e.jpg"},{"revision":"e8441197b03bb02c41646260a26c1dae","url":"assets/images/手拉手模型-34d6d9485c6abce2ec5851055066fa00.jpg"},{"revision":"81e9d3b70c282cfb2c6a6dc6731080eb","url":"assets/images/拖入文件-0d69303ca4553a187e3bdba2381a2fc4.png"},{"revision":"56574b01a054d58f74bb46fa3968db67","url":"assets/images/新界面-6a57f49104ec30ddd1e6de5496d52505.png"},{"revision":"f19d1b148c1b480cd05b3e62ad00b57c","url":"assets/images/点击 Browse-020a1c2fdd280be72929abf9cde0745d.png"},{"revision":"ea1f45ede7337c17cfdbf12772946e5b","url":"assets/images/点击 Process-c72c4a4d9bb6db4fddc0c7f5a5f469b9.png"},{"revision":"215e6faef16499e29c562a95e7fe1ee2","url":"assets/images/相似三角形的判定-6c8704d2ebcdc54b25df4683a3ec8569.jpg"},{"revision":"4c19aacb08cc2598cb1cf96100a95303","url":"assets/images/空气中氧气含量的测定示意图-7acd02b69e7a9c38d1d10722e6b46467.jpg"},{"revision":"ea687c92b9d4ef3decb0842f7d0c5cbe","url":"assets/images/软件界面-773c19ce43f33cb70f9fd66e7925619c.png"},{"revision":"049cb334612fff0d817d98488fea8e98","url":"assets/images/邱涵-3b88807b54352d737c87e3c555fed3dd.jpg"},{"revision":"1fc786b2d982f2860e24cfd3e0546cd6","url":"assets/images/鸡在河上-8d48de6ac081f5ccac372507f47b7757.jpg"},{"revision":"cd0d762734515370061697c8485c15bc","url":"img/docusaurus-1024.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"444099656c08bb0fe138f2a750a6cabd","url":"img/profile_photo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();