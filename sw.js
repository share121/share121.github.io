(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c06f865a256b51c120205709fdfd661d","url":"404.html"},{"revision":"e058eb41a0358d3f23eb4904d6ff4ae6","url":"assets/css/styles.19fb2a74.css"},{"revision":"a06a8d197b9d74216a78bbefb2cf402e","url":"assets/js/0c785e48.d2f61fec.js"},{"revision":"68d8afa0ad9645f23dd885b7f1d79e60","url":"assets/js/0cb09af9.2c3aa190.js"},{"revision":"484aacf6cd19b07c6cb973ee8c2256a1","url":"assets/js/0e14d4f8.37ad2637.js"},{"revision":"587125804de8db70ef6f3b2586089777","url":"assets/js/1138.c62a2918.js"},{"revision":"3b09869d5a814d1b1fad54b872656c78","url":"assets/js/13c8fe7d.3160fa81.js"},{"revision":"e6bc4d86ce0de928e2e3e0d01206ab85","url":"assets/js/17896441.53ef540a.js"},{"revision":"1c006828431cbcfa4f1a7e2a86b02e2e","url":"assets/js/1a4e3797.3da22084.js"},{"revision":"b9f4c64d4437223f3c87eff3afe6558a","url":"assets/js/1be78505.589623e1.js"},{"revision":"dabb87cdd4f44801cf783e3925d4e0cb","url":"assets/js/1df93b7f.2f0814c8.js"},{"revision":"2c19ffb437bfd7943e49c4ea83fba800","url":"assets/js/1f3cbf67.9a0618c8.js"},{"revision":"dd8217e4e674a25d2dbf39127fa92792","url":"assets/js/207.bf4953fa.js"},{"revision":"00a2f0a4aa2016c45aff2d6a03223ff7","url":"assets/js/20c240d3.05396c0b.js"},{"revision":"41385878bfba69806e84d6ddcb356301","url":"assets/js/24008d23.40c4f229.js"},{"revision":"cc5ec238622b51aabbdf745ea1cd0139","url":"assets/js/25f96342.f6461f78.js"},{"revision":"d997fa9861f7e3c27674a305b0edb34d","url":"assets/js/2b16541f.d1d32b92.js"},{"revision":"9913f054f55ff722d3d1f2abc0f88613","url":"assets/js/316.9d21afdb.js"},{"revision":"f407e548e5b3e691e038e5132374fb0e","url":"assets/js/33075979.1aeadf8a.js"},{"revision":"cb8ab7ceaee847a8fe5138d8a8187506","url":"assets/js/33f2f4f1.a5518410.js"},{"revision":"d78af54fcdba1d439432ca5ba8e4b87a","url":"assets/js/363.20c6d85f.js"},{"revision":"e64f5f04e08f634d7c8093d39092b1da","url":"assets/js/3791.21dc852a.js"},{"revision":"edc3739220d509ca8a51b3d3ccc2e086","url":"assets/js/37d61417.c570b1e3.js"},{"revision":"72aed176eaf95bbf3437464c44af9b6a","url":"assets/js/39e32f8a.1967ddf6.js"},{"revision":"268d39921aa2117f99348d18b50ed732","url":"assets/js/3ca3e92c.9fee65a2.js"},{"revision":"38eb7a2d755e35260f22ae2c7ac8ac56","url":"assets/js/3d3e7f22.d8577196.js"},{"revision":"504a783479eefda484c3424366f0f268","url":"assets/js/3dbbcbdf.ef3d01ab.js"},{"revision":"26884de13ed78fa05c90a6c00f648aa1","url":"assets/js/3e56afba.596537af.js"},{"revision":"50e3c8372f8130af204199aacc7f56ee","url":"assets/js/40c810b2.c7b619ba.js"},{"revision":"0f1357dcf8b24b8a96f95d1c7731abdb","url":"assets/js/4248.379860b5.js"},{"revision":"3b65faffea2bd669c3d68160668d62ad","url":"assets/js/46e9591c.54eea64f.js"},{"revision":"e95edcb5ab0eb6aa43c2478e55e67dfe","url":"assets/js/487.95e2457d.js"},{"revision":"699133ef274b57d6b9545fb99183c4de","url":"assets/js/4cb54dcb.95869552.js"},{"revision":"57d16ea361346e5103c1f7e2a93f5aac","url":"assets/js/5053be19.5ab7a253.js"},{"revision":"c450ea94836227f448b00c5e768efc85","url":"assets/js/50ffc208.c191cc5a.js"},{"revision":"e339a593b9dce7993ee1842adfb7bc00","url":"assets/js/5131.a35e73e6.js"},{"revision":"9c8158b43f18cb221e98ddfe154215a5","url":"assets/js/5525.3bb6479b.js"},{"revision":"8b50cab85198bbb2cb0d2ebe9ced657b","url":"assets/js/5637da06.bf7aa6e0.js"},{"revision":"43b7e6b4e0b1d8e9a2c68a1e9a996771","url":"assets/js/5c4f1305.71f52158.js"},{"revision":"818c6fd49e796ad37e3feb63ab88d3d6","url":"assets/js/6316.ea0c85aa.js"},{"revision":"bef5dcf5bdc2bdee1cf8bae480f6176f","url":"assets/js/67598532.ee734742.js"},{"revision":"7ad4ac118a7c7e1bdc4a762a3e1574cd","url":"assets/js/681acf92.7b59201e.js"},{"revision":"444720b1883d59316a1f8aecbb9a0343","url":"assets/js/68833ae8.91ebfa85.js"},{"revision":"cdf08195ddec0d10836b5525b612ef14","url":"assets/js/6902b5ea.1f76a5f4.js"},{"revision":"0ae03b5e9e570ce29da16e9c5ed20b8b","url":"assets/js/6b044817.3ad2e54d.js"},{"revision":"3bf8681664c3c71769e29149657c21e3","url":"assets/js/6c78810f.6769c06a.js"},{"revision":"80bc85b6045fea31d9f41b26aebc1252","url":"assets/js/71f1bd9c.54b8151d.js"},{"revision":"7ae9d2628d31d6c9a547b3f2845fa2dd","url":"assets/js/724.59a8e02f.js"},{"revision":"b636322aeeed9a281d205ccd3d4f916d","url":"assets/js/7724.1d2affff.js"},{"revision":"689e4ff6adf72293d16e437fcab31c8a","url":"assets/js/7b894e8c.8070b315.js"},{"revision":"68693c3d891d4de32f81c7f022141df7","url":"assets/js/7d6ec10b.cd2312e0.js"},{"revision":"63c5281fdccae6ddd5de40d4d45d56d1","url":"assets/js/7e3e7cb3.57fe98a5.js"},{"revision":"1a1e54959e886b6ff69c6aca9f46672d","url":"assets/js/80f30a24.1717d49d.js"},{"revision":"cd61a63c4352697dab9cbf649d48a9ea","url":"assets/js/814f3328.dc82ca75.js"},{"revision":"b7f0182d7b57ef94a30b6ea9d37af2a6","url":"assets/js/8443.6848c300.js"},{"revision":"3c1babd4d953f4a073e71b38e1e24a37","url":"assets/js/895be03a.bcd918b9.js"},{"revision":"a8a4756dbeda5580dddeeb2775946432","url":"assets/js/8fa680c9.d080be15.js"},{"revision":"9632e95d6766456c7562d1bc9497c056","url":"assets/js/9190.5fc3a56a.js"},{"revision":"4365bfd23b0f9ed7b8fd7e362b7d379e","url":"assets/js/91e52de9.bb5b21c0.js"},{"revision":"e485aa0994d8a03994c00413c1753813","url":"assets/js/92d50dd3.61f0f987.js"},{"revision":"80ed0c7a9071afb7e520792e64ab28bf","url":"assets/js/935f2afb.a4137c94.js"},{"revision":"b74dceb77da146dd81eafb2c43f9f310","url":"assets/js/9485646a.424716bd.js"},{"revision":"204c78f5cbd28db80198d674806c5c69","url":"assets/js/9487.7e91e8b6.js"},{"revision":"6afeff6e2f18ce4ff34052ad88635bce","url":"assets/js/95f7942c.dad448ce.js"},{"revision":"1f9c34243c7951a40e714403f919ac0e","url":"assets/js/99f79593.27acc64b.js"},{"revision":"df6efa000af953c0dde920c42bad8c63","url":"assets/js/9e4087bc.a16f97c2.js"},{"revision":"803395a2196a36b7e745602b172ef413","url":"assets/js/a3c3e067.c46e0c39.js"},{"revision":"cf19027eb4e24e5107362b33cd740bd4","url":"assets/js/a6aa9e1f.f615f617.js"},{"revision":"2504c20df3ff2502764cb96a258f0b2c","url":"assets/js/a8654ddc.47ede4cd.js"},{"revision":"2b8928e01a8fdb4a6ca13a4351b3b56c","url":"assets/js/a91371d6.b60723a0.js"},{"revision":"d0f93edaebba66c56d17e02d6dc5a47d","url":"assets/js/ac802a0b.3da3ea1b.js"},{"revision":"1dfea9019a49fb7086c85d1045daca65","url":"assets/js/aec16d82.fcab01e4.js"},{"revision":"3b377d08ac86c680d3564bd6ca633efd","url":"assets/js/b2b675dd.fd2e9df3.js"},{"revision":"45122c1115ffab2ddc876ce4e7d0ad84","url":"assets/js/b2f554cd.168794c1.js"},{"revision":"f6fbed93eab1fd3f5abd6f05fb1f1e9e","url":"assets/js/b58d9fa9.03b0b2f3.js"},{"revision":"8c271b71074648fd2bf84a909832b1db","url":"assets/js/ba973bc6.4fc3f37a.js"},{"revision":"cf9c74abb605ccf5fbf8c26e9fb22ff8","url":"assets/js/be2bb396.591aa20d.js"},{"revision":"81d9a1040984c75cdc95aa27f1ac5579","url":"assets/js/c740c349.9288e6da.js"},{"revision":"6002ccff677a51dcbefb5dcc78e308de","url":"assets/js/ccc49370.1868521e.js"},{"revision":"520fa7c0dd5704eb99165e8351fa0d46","url":"assets/js/cda8b387.b4ba9cbc.js"},{"revision":"e09bd3f823c8579e04b89eada393eb29","url":"assets/js/cf647be7.2a254efe.js"},{"revision":"9847b5d6ea5457119a930603c44f5f18","url":"assets/js/d43ab880.6e3de690.js"},{"revision":"980ba0930fd8cc453ff73c981d481ed1","url":"assets/js/d5c1cbc8.6a19a5a3.js"},{"revision":"87f9c8e751fad76b5efc61c5237fe4df","url":"assets/js/d99d400d.9a1a4a0a.js"},{"revision":"a6ca1ad0c2b1ae38e05f664fc218a811","url":"assets/js/e17d04fc.f696b9a4.js"},{"revision":"1fb9bc781a2bcd779a67f11aade4f99d","url":"assets/js/e236aa13.c99ec7a1.js"},{"revision":"1d48932bed68e0c1e5af0b139bd45eb7","url":"assets/js/e4050dc8.515f23d9.js"},{"revision":"d1c23fa2f1b8b2d357f5d638876d6876","url":"assets/js/e4a39437.099abea5.js"},{"revision":"8538077d97f9f96f7287e3aa932c9dc6","url":"assets/js/e531813d.565d8b47.js"},{"revision":"e5acd6451c22906e3e8e30b5577468c2","url":"assets/js/e5a39133.22670cc9.js"},{"revision":"9e6b6aae7cff1283462cba6161aac5a2","url":"assets/js/e6af6758.3c25c19e.js"},{"revision":"7c1b2f4668022ce675e1b3e72dd440ed","url":"assets/js/ec5b21df.6aa58c90.js"},{"revision":"f97fbfb5ce1ba4fdb7fc9450fc4462eb","url":"assets/js/f5fc6299.8eb248cf.js"},{"revision":"48450efd297726061d25aefcb3221fe6","url":"assets/js/f649247f.485f049d.js"},{"revision":"5bf7738a43b5b2bd6bcbd263c6133375","url":"assets/js/f9b60e75.7e9e4055.js"},{"revision":"ec16e5fac55b1d233e7ad07b48bf67e2","url":"assets/js/fa4c27df.1773d7a8.js"},{"revision":"2f7559a72f66a408942b1d67dcd90ad5","url":"assets/js/fd7aa01a.bc411d9b.js"},{"revision":"817cd839caf5fb765324a7a82892c4d3","url":"assets/js/fed7d42c.5cd17e51.js"},{"revision":"3cbd397baed057ed80a19f0904cc4741","url":"assets/js/main.1276b2bd.js"},{"revision":"7f297ad761fd4be4c0c951c99525819e","url":"assets/js/runtime~main.d4db7981.js"},{"revision":"81517573493f03829e77927904482414","url":"blog.html"},{"revision":"122f8fe5120b5fe258a64c31d7675370","url":"blog/2023/10/1/2023 年广州市政府工作报告.html"},{"revision":"749ded27daa4b417e9a2133d963c1efa","url":"blog/2023/10/1/cppcc.html"},{"revision":"5c242cb1837f88a6def65d15bd38bc12","url":"blog/2023/10/24/时政点评.html"},{"revision":"a158c82475ad26afc9dbe2e2b17b4722","url":"blog/2023/7/21/这是我的第一个博客.html"},{"revision":"3c653f3e8d6beea32b7c095b14379023","url":"blog/2023/7/24/宪法读后感.html"},{"revision":"abac82bfdc1cf2cafd413ab327454f10","url":"blog/2023/7/25/党和国家维护社会公平的措施.html"},{"revision":"24b957ec6717393afc505cc4e631c00a","url":"blog/2023/7/25/参加志愿活动的体会.html"},{"revision":"3712b2ce96fd792c8c8ee54cbb1673d2","url":"blog/2023/7/25/时政点评.html"},{"revision":"572809c31d42be06128125b9174eaf55","url":"blog/2023/9/25/学生会检讨书.html"},{"revision":"bde52065f6aa42da095d9a777cf8fcbe","url":"blog/2023/9/25/时政点评.html"},{"revision":"6df4ab3ad501b6466b9fecddfdbe4959","url":"blog/archive.html"},{"revision":"b70e4ca89625a5bf7afc3b3b39c31e4e","url":"chemistry/初识化学.html"},{"revision":"473f1f631aab78052e5404c6ffb4d09d","url":"chemistry/实验探究初步.html"},{"revision":"24f6392cc8a9fb236bb3c944c6322622","url":"chemistry/氧气的制备综合.html"},{"revision":"68405fa92b3e38580c22d4cb1204600a","url":"chemistry/物质的变化和性质.html"},{"revision":"0a16eca312f41369ba71e8a9c46a6cba","url":"chemistry/空气和氧气.html"},{"revision":"67d24d981bcf4b56be12595b7024db22","url":"chemistry/走进化学实验室.html"},{"revision":"dec3e86bcc31aeff6dd4848292eb32e9","url":"chinese/传统文化类作文.html"},{"revision":"b125227f927bc334d46239fd2ee80eda","url":"chinese/梦想励志类作文.html"},{"revision":"a2c884dc66793f9fc896311ef3a94b30","url":"chinese/议论文作文.html"},{"revision":"3d518f7e68cd1ad5fdd294d13db9ddf6","url":"codeing/crack/无限 debugger.html"},{"revision":"df3848087140bc90188fec7e16c0ec32","url":"codeing/crack/模拟输入.html"},{"revision":"24bf34d4fba8f740eaee664335354cc9","url":"codeing/crack/防止强制跳转.html"},{"revision":"b5d80b1fd5613bc162394e80d2a0d15a","url":"codeing/dart/线程管理.html"},{"revision":"85756ac0e60cbcf3ccffa4298178ae0c","url":"codeing/html/HTML 语法.html"},{"revision":"111a94eecc9f39c601ec7ee03869551f","url":"codeing/javascript/scope 伪类.html"},{"revision":"310d87d3d6d323c3a8742abe6cbcea7d","url":"codeing/javascript/修改文件访问时间、修改时间.html"},{"revision":"87883b755b21ec52ff6237ffa89f934f","url":"codeing/javascript/获得所有文件.html"},{"revision":"a1a27485a8c74f4bbeb99fc46c56a8c2","url":"codeing/javascript/获得数据类型.html"},{"revision":"06e1b55fc9b86ec31f34178c1f939e8e","url":"codeing/javascript/观察元素更改.html"},{"revision":"6777a4a4027925c106fb6af3be60c1af","url":"codeing/nuxtjs/启动项目.html"},{"revision":"aa83216ab063ae28dbd0e1636a334933","url":"codeing/Python/OpenCV.html"},{"revision":"d9e785416f66ef864df71734125a38fb","url":"codeing/Python/后台操作键鼠.html"},{"revision":"cabb7f4d81c635949c0d21230f896f76","url":"english/student-times/第 1 期.html"},{"revision":"249fd6e49b85e12c533dd19854b6cf9f","url":"english/student-times/第 2 期.html"},{"revision":"f7269ac9dbdcf49ae503dab4f738d173","url":"english/student-times/第 5 期.html"},{"revision":"4e625079206cdb1c044605c3b4f27cde","url":"english/student-times/第 6 期.html"},{"revision":"cd4d8edb36b115db8f0757d40567b1f0","url":"english/定语从句.html"},{"revision":"731d9fdb2b3af1b0aec9541b8f0656e2","url":"english/开学考笔记.html"},{"revision":"f1f303b8c1caaddc90fdf59711083f4d","url":"history/三大改造.html"},{"revision":"887cb8d89bd4985e50cbc9907f6bf652","url":"history/中华人民共和国成立.html"},{"revision":"1ed5872decdcda5e9e7fe81d5e8a66e0","url":"history/伟大的历史转折.html"},{"revision":"8307383c92a6bda5ebfcbb6397c5e229","url":"history/土地改革.html"},{"revision":"8b4a7999bf4848ad31500b413c51c2fc","url":"history/抗美援朝.html"},{"revision":"0a12fa0d6718b881b74a267c9a4ac8ed","url":"history/新中国工业化的起步和人民代表大会制度的确立.html"},{"revision":"8a3b0bc4103b6cb24dcfffc1a2aa81d0","url":"history/经济体制改革.html"},{"revision":"76579cf180927f0a7249a27c7709c62a","url":"history/艰辛探索与建设成就.html"},{"revision":"0135c0ce2c1ada4f54b0d3b843f003d3","url":"index.html"},{"revision":"dd99d71094356216a9e9b4096e3c797a","url":"intro.html"},{"revision":"4c04642e8b2c190a9a2cf376dbb69022","url":"math/二次函数.html"},{"revision":"2e5a9a42808888043ccc65a508ab633e","url":"math/反比例函数.html"},{"revision":"24436347fcc3a1a5414e420643b5f64b","url":"math/圆.html"},{"revision":"f0cc351d32202375ca106820dbc3df6f","url":"math/相似三角形.html"},{"revision":"18a5d8b5228d2c50242590438f61becd","url":"physics/内能.html"},{"revision":"01684957fb5c57c5797e9c01857e2e73","url":"physics/分子热运动.html"},{"revision":"5782d9f0d8f8801efb80c7d33abc9459","url":"physics/电的起源.html"},{"revision":"b773a465bd04135b9b990f09786af572","url":"search-index.json"},{"revision":"fa4de2da2edfb61d557fee95fdfdd00b","url":"search.html"},{"revision":"77f9acc22615ebe6250b993473a19f9f","url":"technology/单文件制作.html"},{"revision":"efcef15b0bebd52a2ba7b9cb726e7502","url":"technology/白嫖 Office 365.html"},{"revision":"96ed8fc8e0a021b1140ba47ea52bbf97","url":"assets/images/02-OpenCV_10_0-1e5ab7fb73460afa29f9e899e7f94202.svg"},{"revision":"aa50194fe1fb448e53f26737b2803c9c","url":"assets/images/02-OpenCV_12_0-a7d1e76c878802a9d5308db58b2cd892.svg"},{"revision":"d5f7cda1de7487925b8c9b961bf70df9","url":"assets/images/02-OpenCV_14_0-bda1d78d1a747b1ae67683e7c716b37f.svg"},{"revision":"b94a2836c793b6443ab89328eda5ba88","url":"assets/images/02-OpenCV_20_0-bd66b2834e57fe77b94342e23209186d.svg"},{"revision":"60d53118573ae57ce068660d3213c512","url":"assets/images/02-OpenCV_22_0-346a3b80cca873ee89b3eaf6060d39f9.svg"},{"revision":"adaf5e39dcffd982d3d86a0e408d6d3c","url":"assets/images/02-OpenCV_24_0-807e0c2aa77959fe247f0d21b0c9f6d6.svg"},{"revision":"5d298cf1bb4a9de82deb4cd4f75fe8c4","url":"assets/images/02-OpenCV_28_0-44e51bac0ac8b7dc984b1cc92eb739c1.svg"},{"revision":"54a9e5067dae37b74b542917163b178f","url":"assets/images/02-OpenCV_33_0-a0196a0f1b2ee68a6926565893edf730.svg"},{"revision":"3eab89618ad80b5706fc9921dba9a64f","url":"assets/images/02-OpenCV_37_0-6f8b8785cbf28f7a5eac03812b0a93db.svg"},{"revision":"e27386eb0d9cd640407d3e2a61da573e","url":"assets/images/02-OpenCV_39_0-ce70d7cbd8276a7790df423956941992.svg"},{"revision":"6bc19fa2adcae081a77713ce5664b31a","url":"assets/images/02-OpenCV_42_0-4cbe804a5b421e2260d061040ceb5023.svg"},{"revision":"ad5bd739245d2efb12cb857b6f04f8b2","url":"assets/images/02-OpenCV_44_0-88f3bf28441eeac1b3abe9d008c3b760.svg"},{"revision":"95f4ba379d61b3437caf37571fe00c0d","url":"assets/images/02-OpenCV_46_0-b3092850d26191941caa3b48243a8694.svg"},{"revision":"6460c99e6e963e1ed15a5c9c9590fbfe","url":"assets/images/02-OpenCV_48_0-b52a4919c70e7196b2a4518975dbdc8e.svg"},{"revision":"8f95727e0b3cc921f48b501bbac80572","url":"assets/images/02-OpenCV_50_0-ac33f17331ce6ec73a563e1965731167.svg"},{"revision":"50bac21e10dff75206549470f6812136","url":"assets/images/02-OpenCV_53_0-cf04ce58aa33a3953e28df506892a08c.svg"},{"revision":"90ffe0704ddef510306f01de7444a4aa","url":"assets/images/02-OpenCV_54_0-1ff5c52b8ca977d1d81aaa8b270db326.svg"},{"revision":"3dad22a67ee25586a9637b18dc0be26d","url":"assets/images/02-OpenCV_56_0-de6960ef63aa4f63091c33bd382d6835.svg"},{"revision":"5154c8846169c44b3e3d69641adc4555","url":"assets/images/02-OpenCV_58_0-b6457bdf6dd73def5cd38fd1fa8d10f5.svg"},{"revision":"d0faf64c7192fbefabbf6d053c29af55","url":"assets/images/02-OpenCV_61_0-0a40018cc32dcfe155d492e9cf200563.svg"},{"revision":"8eeca45c5ebe48b488492c2d116a75b6","url":"assets/images/02-OpenCV_63_0-bd506d2e3253c034b262749ad728cb06.svg"},{"revision":"c1d29e4582e3fb44d2d0fd97a9ffde4a","url":"assets/images/02-OpenCV_65_0-29211feb43911364e238f918323c6dfa.svg"},{"revision":"5ca83a0bfd74e43788e2b91c77faed88","url":"assets/images/02-OpenCV_67_0-3ab8a2f646cab84dd7a1db07e328bafe.svg"},{"revision":"6a33b0c53e4a01e9f6c4f66483b74a2e","url":"assets/images/02-OpenCV_70_0-873dedb62f510e32d9b7901ecda353dd.svg"},{"revision":"c660290e32ebb9d79999ab3360f018c6","url":"assets/images/Enter Output File Name-bc389f8259114522178ad5fd9066707c.png"},{"revision":"073f03dcc796d2c3e79715c3e0e72b0c","url":"assets/images/tmp5700-448f4c2d9980edfbd60c136b98045ab2.png"},{"revision":"b6bbefaa79dc71ab75c5f1c32e465ed1","url":"assets/images/tmp9D37-adf40bc9e2b74439d948764d8bec1994.png"},{"revision":"1a817bbf162c683b8dae7b4fdede1d04","url":"assets/images/tmpC4CC-ae0b7c7cef063f6dddc85193c4222f4c.png"},{"revision":"885538fce225b48e717faa46c43f0305","url":"assets/images/一线三垂直相似模型-3fec0c3f75015ca3735577ce4d56a76f.jpg"},{"revision":"286a042db4174d32bf98819d7370b19a","url":"assets/images/二次函数一般式求顶点坐标-ed898d00c303860dd83b3b4085e7f6b8.png"},{"revision":"a116654754efe69622e0af2134bc9894","url":"assets/images/其他常见化学仪器-36fc814055d1bf1d275b01c0b59963af.jpg"},{"revision":"a00f59435b3137db7e192c3d9a9ec3c2","url":"assets/images/化合反应与氧化反应的关系示意图-37a2d86b9ed6d92489989f24f7f13ec0.jpg"},{"revision":"d50e8eed0ae0f5d8b243fe70141241f8","url":"assets/images/双阈值检查示意图-2b48c0bd93d71f997ff47eb68c66b83e.png"},{"revision":"e4b7a49d0ee6276acbebea24827d2452","url":"assets/images/发生装置的选择-fd558f446958dae86dda29c6974291fe.jpg"},{"revision":"899ce6fb49e56275a0f73f22ee551821","url":"assets/images/吴明毅-a2ed3d08bfb31b49148d992eeebdfe43.jpg"},{"revision":"11b95d6ec7ee8431be7628d7aad92f76","url":"assets/images/圆周角-7bdc00bdced36f5cea12c2bc4a0bed3a.jpg"},{"revision":"6973e1b58ed70260f3ea0a67d061a6a5","url":"assets/images/圆周角定理推理2-57904120c0af7ed55d2348a621c50fc6.jpg"},{"revision":"afe51a69e02223467431d4d666afc2c5","url":"assets/images/圆周角定理推论3-d55781ccc22172b7bb6cc0c3a3491cbe.jpg"},{"revision":"6556a09f51943685451c7ea9472cd9fe","url":"assets/images/垂径定理-675902440dc57391cdd240d891484606.jpg"},{"revision":"c24c437282a9cacd54b8ee059d6a2284","url":"assets/images/子母火焰-1d9dd12a68a357ec3b1e1bd233aa3f18.jpg"},{"revision":"25ba0e9a319e5eebf0ef1f5becf5bae9","url":"assets/images/平行线分线段成比例例子-e27694301a61a09aa4878ec1b7e54898.jpg"},{"revision":"cafe4edc1ef675c06886e9f770900fad","url":"assets/images/平行线分线段成比例示意图-a1105c951d150970dafba392ef8da922.jpg"},{"revision":"8022b045ebe9b7f972d897b9dd5fece6","url":"assets/images/开启文件压缩-9cb67c43b4f261f35417d8f8d7276e52.png"},{"revision":"078098daafb08c838d2b68b9a1f6b783","url":"assets/images/弦-b13e6e163405e5dc98517911b5e6bd9b.jpg"},{"revision":"052ccc3e04b11c21b0416749c204df03","url":"assets/images/弦心距-d3ec3a3b632a8848fbbd1a0c9beeb80e.jpg"},{"revision":"e8441197b03bb02c41646260a26c1dae","url":"assets/images/手拉手模型-34d6d9485c6abce2ec5851055066fa00.jpg"},{"revision":"81e9d3b70c282cfb2c6a6dc6731080eb","url":"assets/images/拖入文件-0d69303ca4553a187e3bdba2381a2fc4.png"},{"revision":"56574b01a054d58f74bb46fa3968db67","url":"assets/images/新界面-6a57f49104ec30ddd1e6de5496d52505.png"},{"revision":"f19d1b148c1b480cd05b3e62ad00b57c","url":"assets/images/点击 Browse-020a1c2fdd280be72929abf9cde0745d.png"},{"revision":"ea1f45ede7337c17cfdbf12772946e5b","url":"assets/images/点击 Process-c72c4a4d9bb6db4fddc0c7f5a5f469b9.png"},{"revision":"215e6faef16499e29c562a95e7fe1ee2","url":"assets/images/相似三角形的判定-6c8704d2ebcdc54b25df4683a3ec8569.jpg"},{"revision":"4c19aacb08cc2598cb1cf96100a95303","url":"assets/images/空气中氧气含量的测定示意图-7acd02b69e7a9c38d1d10722e6b46467.jpg"},{"revision":"ea687c92b9d4ef3decb0842f7d0c5cbe","url":"assets/images/软件界面-773c19ce43f33cb70f9fd66e7925619c.png"},{"revision":"049cb334612fff0d817d98488fea8e98","url":"assets/images/邱涵-3b88807b54352d737c87e3c555fed3dd.jpg"},{"revision":"1fc786b2d982f2860e24cfd3e0546cd6","url":"assets/images/鸡在河上-8d48de6ac081f5ccac372507f47b7757.jpg"},{"revision":"cd0d762734515370061697c8485c15bc","url":"img/docusaurus-1024.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"444099656c08bb0fe138f2a750a6cabd","url":"img/profile_photo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();