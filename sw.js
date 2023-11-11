(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"43eed6b3dd1802b1c77f08a56972865f","url":"404.html"},{"revision":"e27ce9c4252957eb27bcf40094d1fd76","url":"assets/css/styles.fd2de1dd.css"},{"revision":"51e52e56bfba4f5520820ba67bb4cc63","url":"assets/js/0139283d.cde14cb2.js"},{"revision":"47c077974ce386118e0222b8ed408562","url":"assets/js/01c147df.3a8cfc63.js"},{"revision":"01745262ff77a139224278f5aa9a0570","url":"assets/js/0c785e48.845efbb3.js"},{"revision":"d1112fd5cc68678ee9ddb074c5cc9a26","url":"assets/js/0cb09af9.308098cf.js"},{"revision":"26e9b53ad60eb6109b5663462e3bcf8e","url":"assets/js/0e14d4f8.eb30de41.js"},{"revision":"d623849bdc98c039bb117d9aa029fa79","url":"assets/js/111.1a77f36c.js"},{"revision":"0707918549e04b087cb719c1c5974801","url":"assets/js/13c8fe7d.db9dbeeb.js"},{"revision":"8ce961c0636bfa9c3926f8b0a9340470","url":"assets/js/1644.7be9edad.js"},{"revision":"4bbac39f200dce68f4f8dbc09c2c66b6","url":"assets/js/1688.3f56fb08.js"},{"revision":"bac6a6184acf75a7db3ddea61c28a585","url":"assets/js/17896441.8e64dea4.js"},{"revision":"f20b8eceaa2267fffd3b078f57d73d27","url":"assets/js/189.5aec15e9.js"},{"revision":"167bae8b80ee3fcd81c029495cb6005a","url":"assets/js/1a4e3797.c26adfb5.js"},{"revision":"6b41ad0cf9b26b6b66f81d75e4bb5103","url":"assets/js/1bb34a36.46c1020a.js"},{"revision":"9d2d6d42a50bd9c11e378f0bf210de26","url":"assets/js/1ccf0166.a1ea9856.js"},{"revision":"c07e405b194645135164be41ff8ab496","url":"assets/js/1df93b7f.1410b7fd.js"},{"revision":"2c19ffb437bfd7943e49c4ea83fba800","url":"assets/js/1f3cbf67.9a0618c8.js"},{"revision":"0757eee0236386fd9a4096cda99d7eea","url":"assets/js/2027.903447c2.js"},{"revision":"5bcc847e042d708e0547d577eb2bff83","url":"assets/js/205.7869e876.js"},{"revision":"d7a9c8a51c507048369330b20ed17125","url":"assets/js/20c240d3.bc3dd17d.js"},{"revision":"6e889cc052e54190564b9f7d79ac881f","url":"assets/js/2127.8c67694f.js"},{"revision":"9e8595d7ce653950ddb279a5944d0a4e","url":"assets/js/2244.b249318d.js"},{"revision":"fb2e3d2b159be5e69d2bf771165b227c","url":"assets/js/254.da0a5da3.js"},{"revision":"ace8c97530253565807a8e4c56298626","url":"assets/js/25f96342.f1812815.js"},{"revision":"24d16ffe770d6f65746ec132ccf6c4b5","url":"assets/js/27.96a4e28f.js"},{"revision":"3c0c7dae0d8d210607cdfc47869a132b","url":"assets/js/278.c18a43f9.js"},{"revision":"466c264a813a92ea9e72fb63bb6cf8ed","url":"assets/js/284.3fed8770.js"},{"revision":"e2db1ef33777ede77d4dc1590f9a3cd6","url":"assets/js/2b16541f.82f7437c.js"},{"revision":"32846c6c900987cc5c90fc96789e05ba","url":"assets/js/33075979.837fb496.js"},{"revision":"6b5ec899c51dc1f07e171242aa8a9e03","url":"assets/js/33f2f4f1.2089a4b2.js"},{"revision":"9473fdd953541e52afd31a6c80c03177","url":"assets/js/3506.e3ba9d52.js"},{"revision":"8256793206c63eae94598fd18d212ec0","url":"assets/js/360.3b3a9351.js"},{"revision":"9e233e17f9e9bc19f6f3ee1cfff18344","url":"assets/js/3601.e8e8c9bb.js"},{"revision":"b0ea9668535376fc3c063fd1ae4d4f13","url":"assets/js/363.0156fa41.js"},{"revision":"f2378835a3d149624c6291b14780d50d","url":"assets/js/365.da569cd3.js"},{"revision":"3a761c59da7286bdbd27ced7b2114d8a","url":"assets/js/371.f68dddeb.js"},{"revision":"398fbacbbc2dce4074746f7749ee8bbc","url":"assets/js/37d61417.5e62ae99.js"},{"revision":"cb87f5f8bab066d46fd30018db05e904","url":"assets/js/39e32f8a.cc8b1b4c.js"},{"revision":"73b7d6f90495f5c7c70c7afa6b12ffba","url":"assets/js/3d3e7f22.45e3d55b.js"},{"revision":"8ae1c8f7b284e63fb80749b3212e3170","url":"assets/js/3dbbcbdf.e88286ea.js"},{"revision":"8a77a3293a27ae8ce172d70f025263cd","url":"assets/js/3e56afba.142907e1.js"},{"revision":"294b2926b8e2c46fee04cda21486d02c","url":"assets/js/40c810b2.8e6ae803.js"},{"revision":"976f349d2847f5cc23620f3a9380416e","url":"assets/js/419c08b5.9af10b35.js"},{"revision":"b09c31dba180f8b5e9cbe13fca0c5591","url":"assets/js/4389.c083b63b.js"},{"revision":"9e02b44d10dd34a06c1b88a773cee0a0","url":"assets/js/46.53124cb6.js"},{"revision":"c7f92d92b4d64f98e2df19e573350329","url":"assets/js/469.66086d5a.js"},{"revision":"c1619a09abd80a57f914e334cc1c97f1","url":"assets/js/46e9591c.25066fb1.js"},{"revision":"70908b52e7987320d5ac79a73efd7057","url":"assets/js/4cb54dcb.2bbd2167.js"},{"revision":"5e43b99f0a5c772b50e39ec84f4b338c","url":"assets/js/506.17e673b8.js"},{"revision":"62a5c16cd756e4443a3bf56bd7ac679a","url":"assets/js/50ffc208.3b21c616.js"},{"revision":"93c626fe38426553a0dc0f5150726d34","url":"assets/js/5131.5439d4b5.js"},{"revision":"54016e6adec2aa4fe6d1f6296241448b","url":"assets/js/519.952a2e0f.js"},{"revision":"c4ae66c8b67912b9d480caac878ad525","url":"assets/js/51e069fe.f91c75a5.js"},{"revision":"520c1ee8b5107885a05c1f3407c2a78e","url":"assets/js/5254.8423849a.js"},{"revision":"9c8158b43f18cb221e98ddfe154215a5","url":"assets/js/5525.3bb6479b.js"},{"revision":"a8bf0574c930cee70b476423ac17b9d4","url":"assets/js/5881.1d2a746b.js"},{"revision":"5ddee30a025c7e7945edd3d04d903588","url":"assets/js/5c4f1305.a423a57e.js"},{"revision":"6c7bc80c1adf4c18581cf5c06e0dedf6","url":"assets/js/5e95c892.87205166.js"},{"revision":"63954c348412a6ddd284f5143cc781db","url":"assets/js/601.bd9904a4.js"},{"revision":"7be9d771dab4c0f02c13900562b88feb","url":"assets/js/6046.03dd272e.js"},{"revision":"9a86946c994d3c98031c987a14ec1fbb","url":"assets/js/6254.a8c8044e.js"},{"revision":"4c3a481d8fadf54270f1b9754296d242","url":"assets/js/627.ae5d2c08.js"},{"revision":"27bfb2c27ba42dbea8855724696027c7","url":"assets/js/6278.92ee0eea.js"},{"revision":"89d7017bc925d39cc4249c42480f200c","url":"assets/js/6284.5128f77c.js"},{"revision":"439e3983a2c4281fcd44e71e1a7334be","url":"assets/js/6319.d9d784b3.js"},{"revision":"49cbe9556b1b5ab5f93bacd3dc6a231f","url":"assets/js/6715.234a055e.js"},{"revision":"9ec7e36e3dafe27ea68138532793cec9","url":"assets/js/67598532.a377afd4.js"},{"revision":"a6be27bbf5c62ff8e594103c9c378f57","url":"assets/js/681acf92.1fdea979.js"},{"revision":"6d37bbbd5bd3b9644f5fa239c3df9199","url":"assets/js/687.7fd5acfb.js"},{"revision":"ba9aa7e360aa770269dff26892b6e39a","url":"assets/js/688.3beb47ac.js"},{"revision":"75f21a7faac57f4a0224bd60e0f63199","url":"assets/js/68833ae8.ba7858d8.js"},{"revision":"27209cd21a562dea2ac3eba86780045b","url":"assets/js/6902b5ea.7d6a56c3.js"},{"revision":"c3cf1e26c36aeecad5c464ff77ab2935","url":"assets/js/6b044817.ebaad6b6.js"},{"revision":"5b6c4575b554d900fd964efeaa2dc06c","url":"assets/js/6c78810f.bfbe43e0.js"},{"revision":"8b589857928e2b6bc46f49fc61dc29a3","url":"assets/js/7111.929b1720.js"},{"revision":"b2b2a19bd50009733a70ff9ffcc3df15","url":"assets/js/715.7c02bf77.js"},{"revision":"0a307172907d7ecddfc57bbfe69a879f","url":"assets/js/71bd7a63.7156a1c2.js"},{"revision":"c6a93b2d38c15f5c42292e8ea9de6d84","url":"assets/js/71f1bd9c.246b1408.js"},{"revision":"e54924ab24cc07b6f4f9c32adf97381c","url":"assets/js/740.ded4c11f.js"},{"revision":"11525ecc82634555178c8f1c42bc8ead","url":"assets/js/762.b38c421e.js"},{"revision":"4e8c9f40a0e6b4567497ed256d09e1be","url":"assets/js/762.ba125ab2.js"},{"revision":"59ee7ca05cebccca17641f7d44a5f80c","url":"assets/js/76202aad.c08bc343.js"},{"revision":"fc5e26b7600432dcfcc541164ec0f4c1","url":"assets/js/7707.8bddfa38.js"},{"revision":"aca04cead7705ab64c7b8989ab0e5c97","url":"assets/js/7740.65c5bde2.js"},{"revision":"2b8d9b30f515189cfc505e6ff605ab71","url":"assets/js/7807.2c2513e1.js"},{"revision":"cdc754ac0efd6d9e3e75151485a50ef1","url":"assets/js/7a61ed63.f716bbaf.js"},{"revision":"84426d88bf305a551ed10a8c34168d43","url":"assets/js/7b894e8c.709a1261.js"},{"revision":"f697de99d5cec615bd9ab1aa8d234967","url":"assets/js/7d6ec10b.655fcf5b.js"},{"revision":"6e4a9f91b36ed271e134ede1f3ceffe1","url":"assets/js/7e3e7cb3.6cee0c14.js"},{"revision":"15d92b08146892fd9d6e40eed9154b51","url":"assets/js/807.93674053.js"},{"revision":"4db2b9e9ac2de99424c1eec4ac55e818","url":"assets/js/80f30a24.80d14819.js"},{"revision":"941febebfe29c278982f5188f3e31a36","url":"assets/js/814f3328.6cd7554b.js"},{"revision":"395e2dd4d2d25301a53133829ba44e1d","url":"assets/js/816.dcd00e38.js"},{"revision":"fd61ded06618dd870fa4ca969e76aa76","url":"assets/js/8189.d3d5fc73.js"},{"revision":"f27ecd9c97eb2c9c25d21c08d12ce3e2","url":"assets/js/8365.d256f793.js"},{"revision":"fd422e322014ecf4394c87b897a0bc67","url":"assets/js/8371.dd64af74.js"},{"revision":"b7f0182d7b57ef94a30b6ea9d37af2a6","url":"assets/js/8443.6848c300.js"},{"revision":"112c0c3d0428a5ba3767a46b642ed775","url":"assets/js/864.3c6ddce1.js"},{"revision":"ca39a40eadbe7cae8718e2e95609d1bb","url":"assets/js/868.25b372bf.js"},{"revision":"c819783d08aeb6ac3e1ea30b020041f5","url":"assets/js/8687.c66cfdfa.js"},{"revision":"e22c8bfc305658adddb5c3df379721d2","url":"assets/js/895be03a.217cdcea.js"},{"revision":"c0417aae8966144741a361be8bceeef2","url":"assets/js/8eb4e46b.ce98ecdc.js"},{"revision":"54f0ce7ac0e96e9708c9a2474a20be77","url":"assets/js/8fa680c9.c1c8b22e.js"},{"revision":"46515dd34c45e40dd3050b954fb6424c","url":"assets/js/90d33b96.c2cbc544.js"},{"revision":"fbd63145bfd3a6ae5f99b393af330ad9","url":"assets/js/9190.aadbb10f.js"},{"revision":"57d3878969f1e7254c7c4f17f08b0829","url":"assets/js/91e52de9.1f70bcb4.js"},{"revision":"3db39c6091780cc0bf7176f12ea40f0b","url":"assets/js/9205.f38a6af4.js"},{"revision":"a5b06ed1478c0c4f9d90288a1a47be09","url":"assets/js/935f2afb.b8d8d121.js"},{"revision":"fe62ef900167f19ef534502b8d2ab932","url":"assets/js/9469.d182c891.js"},{"revision":"13fe3e1ee232bde836036a2594f69b9c","url":"assets/js/9485646a.00adb349.js"},{"revision":"6afeff6e2f18ce4ff34052ad88635bce","url":"assets/js/95f7942c.dad448ce.js"},{"revision":"c671b7d6a3f19fa47e7fc21f3aa4aef4","url":"assets/js/97a71269.3e776c2e.js"},{"revision":"3b8f97efc59c5c8dd8cd2070da6644f0","url":"assets/js/9816.82c3a6f9.js"},{"revision":"f6c422514a99fdd72a9322b3f4ca37e9","url":"assets/js/98ed10ab.7cfbf690.js"},{"revision":"ceb32969a838caac37e6673d82aa1a66","url":"assets/js/99f79593.6c3656eb.js"},{"revision":"b75af0fa30f879e36611c0708ea4f9a4","url":"assets/js/9e4087bc.a3f34654.js"},{"revision":"8cb379a0ede40072a61bd666979a0812","url":"assets/js/a6aa9e1f.3212b161.js"},{"revision":"4f7b142c39fbdfbb7b21286d9e38471b","url":"assets/js/a7bd4aaa.b6976d26.js"},{"revision":"9f5dd7b8f7c898048d0a26031a2f4e6e","url":"assets/js/a7c4ef04.2a7507a0.js"},{"revision":"4ef995b097f70790902eb6f23ec9e22c","url":"assets/js/a91371d6.baa2991f.js"},{"revision":"abf2a191955d83e1e55757ede100c6b6","url":"assets/js/a94703ab.1dbacc52.js"},{"revision":"d0f93edaebba66c56d17e02d6dc5a47d","url":"assets/js/ac802a0b.3da3ea1b.js"},{"revision":"30e14085b9dd745f708c8cd967ac19b9","url":"assets/js/b2b675dd.eba0db88.js"},{"revision":"24c449b19ca0a1ff96b25e6890ec4876","url":"assets/js/b2f554cd.ff95dca4.js"},{"revision":"2641ddea71235c94bf895121bd1b03bc","url":"assets/js/b525fa79.810897f9.js"},{"revision":"41309348e878d23bba62e22c06c80ed2","url":"assets/js/b5329452.89f047be.js"},{"revision":"53f5d36a17975443ef2eb8fcd3e8ef24","url":"assets/js/b565983a.063ee58a.js"},{"revision":"2908ce35a648dc1c3dec32b8e5802746","url":"assets/js/b58d9fa9.a43ed17f.js"},{"revision":"c4f97d8530ad4aada165d2fae6ab5e91","url":"assets/js/c740c349.7a775315.js"},{"revision":"305a2498f9f63a72a999335fd2f52619","url":"assets/js/ccc49370.6943d952.js"},{"revision":"92b06b1eabf259553a07b6dcde55a0ce","url":"assets/js/cda8b387.e8d4c92b.js"},{"revision":"5592b6e192721b96e00ab8cd7bebd621","url":"assets/js/cf647be7.f5ffbbcc.js"},{"revision":"3d171de16042cd9465cc99b297f995d3","url":"assets/js/d43ab880.bc245d57.js"},{"revision":"6c9e81e3bb20ace5d2724a13ca40d31c","url":"assets/js/d5c1cbc8.995444c2.js"},{"revision":"837e467b505cb22511203c640160765d","url":"assets/js/d99d400d.911ae094.js"},{"revision":"06fc72d2077a374332b5fdf7f91d858c","url":"assets/js/dc09625c.dd7d1a09.js"},{"revision":"1982af740ba6ca14e3778fb54dfe881f","url":"assets/js/e08e3b33.913cc97b.js"},{"revision":"bedb4957c486c59eff5f759994303c1e","url":"assets/js/e17d04fc.9ec022db.js"},{"revision":"ca6b0ffcca2ac1a4505934e79f32b893","url":"assets/js/e236aa13.8172c68b.js"},{"revision":"6ac95859ecf5e5d147c0eca1353f5f27","url":"assets/js/e4050dc8.a3cea726.js"},{"revision":"4d8e5901ac05f969c9c9395bd4ca11f2","url":"assets/js/e4a39437.fae31477.js"},{"revision":"e913bec26266ae12d5312229bc263697","url":"assets/js/e531813d.8233894f.js"},{"revision":"c7d98a4e25ed73a7d3a96b7a82f30683","url":"assets/js/e5a39133.075737a1.js"},{"revision":"3f6c9b1c8ddbd7ebf5854d12185044a8","url":"assets/js/e6af6758.19561ce8.js"},{"revision":"665359210b746d864d44a9bf9ca7a58e","url":"assets/js/f5fc6299.b142f4e6.js"},{"revision":"a583587d68e27c94d80375f819c11e68","url":"assets/js/f60febed.32271474.js"},{"revision":"4685dbfa112e0f134a28fe5de598c237","url":"assets/js/f649247f.c344b7b1.js"},{"revision":"9ad1040f361a95d17dc666280755bcf9","url":"assets/js/f9b60e75.84901a2b.js"},{"revision":"129f58fdbb8d8e5d0acde45af79618dc","url":"assets/js/fbf12826.476c0607.js"},{"revision":"2f7559a72f66a408942b1d67dcd90ad5","url":"assets/js/fd7aa01a.bc411d9b.js"},{"revision":"eae6c97749e474b11b578c21d29d4daa","url":"assets/js/fed7d42c.beb83bdb.js"},{"revision":"758f565ccd86377f28e862899ba904bc","url":"assets/js/main.b3691880.js"},{"revision":"041c20f0c55fd169eb1754c6f50cf418","url":"assets/js/runtime~main.80e0a21c.js"},{"revision":"a8f92f5ae1bd4729b69e47e01393d110","url":"blog.html"},{"revision":"7cf68389fafe9f614b6e3a58a87ac0e0","url":"blog/2023/10/1/2023 年广州市政府工作报告.html"},{"revision":"3b06e6bf40e3011adf25031cfb6dbcd0","url":"blog/2023/10/1/cppcc.html"},{"revision":"39f10c68e651a60de5e6da1c9e38a40d","url":"blog/2023/10/24/时政点评.html"},{"revision":"098efdace3596d616f147358363fa0b4","url":"blog/2023/11/5/yuanwanyu-birthday.html"},{"revision":"c3043a4a77da02300b625112347b8c25","url":"blog/2023/7/21/这是我的第一个博客.html"},{"revision":"76b558bc6244ab9bc204b61304dc90e9","url":"blog/2023/7/24/宪法读后感.html"},{"revision":"0c6850852d11472fdcae77592d2f44c4","url":"blog/2023/7/25/党和国家维护社会公平的措施.html"},{"revision":"e451fdafb526bbdda14902d4e01add47","url":"blog/2023/7/25/参加志愿活动的体会.html"},{"revision":"54e0a65a6eeae2589dab26003afa84a1","url":"blog/2023/7/25/时政点评.html"},{"revision":"d8cf789b63bd095ea13dd28e812cff34","url":"blog/2023/9/25/学生会检讨书.html"},{"revision":"5df16533de5195ff3e68ea1a514e95ee","url":"blog/2023/9/25/时政点评.html"},{"revision":"8b6f1efcda0f5d6fb68f8c95c86f8e72","url":"blog/archive.html"},{"revision":"fccbb425545e5f62b4f6cbe47920edf5","url":"blog/page/2.html"},{"revision":"0f37dde57d773552ecda425d49c53081","url":"chemistry/初识化学.html"},{"revision":"a3884cf88ac5f6dc9a0d3df8d7585d16","url":"chemistry/实验探究初步.html"},{"revision":"b0e6f906793071bbeb298b95f76fe650","url":"chemistry/氧气的制备综合.html"},{"revision":"398f0d68c41b94cc7fe6f17025108326","url":"chemistry/物质的变化和性质.html"},{"revision":"152423bdcab3cf5171f809f204474b2b","url":"chemistry/空气和氧气.html"},{"revision":"fb49173910003d1f269348ebcef1416b","url":"chemistry/走进化学实验室.html"},{"revision":"94b972644b4c8189d9e1f6aff1fe93c7","url":"chinese/传统文化类作文.html"},{"revision":"9c052d208bbf537d517e3f4d7930af6d","url":"chinese/梦想励志类作文.html"},{"revision":"db236d5f61796843e083c4e7fb5c46b9","url":"chinese/议论文作文.html"},{"revision":"2fee8451c3f8b3e0127248d6d6da9f63","url":"codeing/crack/无限 debugger.html"},{"revision":"a0aea777200ec10996fb21180618ad05","url":"codeing/crack/模拟输入.html"},{"revision":"17334a95b1f14ea6a6d65ac96bd29440","url":"codeing/crack/防止强制跳转.html"},{"revision":"40ae2dc7209ad045be6e2e1a2c250c2c","url":"codeing/dart/线程管理.html"},{"revision":"d59c6f545d388bccd3d151383df0a3e3","url":"codeing/html/HTML 语法.html"},{"revision":"f26bd18f7e972f01c43996789e473640","url":"codeing/javascript/scope 伪类.html"},{"revision":"74c3de8ab9e2b2bc9e623bd25a6fce9e","url":"codeing/javascript/修改文件访问时间、修改时间.html"},{"revision":"e6604c0863412b9b8f1e0e67ef9089a6","url":"codeing/javascript/判断字体是否可用.html"},{"revision":"aacf98a0702421db598670e12917fafd","url":"codeing/javascript/获得所有文件.html"},{"revision":"e23d6d0bd67d09b7b08311a3680ae256","url":"codeing/javascript/获得数据类型.html"},{"revision":"5f8ed8f878376d14d1826fb527461b1e","url":"codeing/javascript/观察元素更改.html"},{"revision":"0e6138c3c7a0a5b29a7cf3a5ed280c02","url":"codeing/nuxtjs/启动项目.html"},{"revision":"c09caae9e488e78abf5ce8ba88725776","url":"codeing/Python/OpenCV.html"},{"revision":"e07cae63c66e7832dc74576ce0e079fe","url":"codeing/Python/后台操作键鼠.html"},{"revision":"075e0931a82d80f0e27472a400f37950","url":"codeing/solidjs/solid-primitives.html"},{"revision":"e10f775330497cb192d457bbac36b57c","url":"codeing/solidjs/thinking-solid.html"},{"revision":"5ef65e00f0bceefeec970f894b7a21d2","url":"codeing/solidjs/why-solid.html"},{"revision":"25d896aba072be453e14340ec2c33bd4","url":"english/fit-english/06.html"},{"revision":"b674e33ea58e240d6178a4a5cf2912a8","url":"english/student-times/01.html"},{"revision":"8d8479fcf2176a7cf87c3dbd8744748b","url":"english/student-times/02.html"},{"revision":"0cf4a7e87d61b881a0ac7eb513293861","url":"english/student-times/05.html"},{"revision":"e3c6148a87d536d7635a18103e448797","url":"english/定语从句.html"},{"revision":"ad6952139c7927b2edf36e263bd0e903","url":"english/开学考笔记.html"},{"revision":"514cc5ff3b3b2b7033fb5eda47bcc8f6","url":"history/九年级上册/古代亚非文明/古代埃及.html"},{"revision":"f09446e343302c829d0c5578c04414e8","url":"history/八年级下册/三大改造.html"},{"revision":"ebd40f31aa8d622e8e4b301b9284e416","url":"history/八年级下册/中华人民共和国成立.html"},{"revision":"5f13c75067ddbc136d2196598e0bfeea","url":"history/八年级下册/伟大的历史转折.html"},{"revision":"4e36e1d13475b10f6065027e5b01b33d","url":"history/八年级下册/土地改革.html"},{"revision":"298411b6b4f25c4722c30f9978dfb085","url":"history/八年级下册/抗美援朝.html"},{"revision":"a6b5afbed21ca2d2387a0067b8684459","url":"history/八年级下册/新中国工业化的起步和人民代表大会制度的确立.html"},{"revision":"def3db3bf2a52ddf1529aa026998df50","url":"history/八年级下册/经济体制改革.html"},{"revision":"4d71baa8dd8994ec6dc99c6882f85d9f","url":"history/八年级下册/艰辛探索与建设成就.html"},{"revision":"2a2459c2bfe35d70713f243437648bad","url":"index.html"},{"revision":"860d39e5ee2121d25fcd157857bd3f5f","url":"intro.html"},{"revision":"e82b161769afa28b76d4123ee990de00","url":"math/二次函数.html"},{"revision":"24bd1aafb64bd6d8d62713e761a7a672","url":"math/反比例函数.html"},{"revision":"f5b49d06ac9b455d2be8482f371e650d","url":"math/圆.html"},{"revision":"66f527bdf6e14d7d4f703bc5acd6c3f3","url":"math/相似三角形.html"},{"revision":"263d31c928f40448cb4eff905a0d3383","url":"physics/内能.html"},{"revision":"7c64f65172cba5bd5cca2c4fb19168c9","url":"physics/分子热运动.html"},{"revision":"8396d7f957a4c64e7df5942225e78918","url":"physics/电的起源.html"},{"revision":"f553f4d4a85d803e334b64071b7d5570","url":"politics/九上政治提纲.html"},{"revision":"c0c738c8207d58e004de993fd11ec761","url":"search-index.json"},{"revision":"0fc15902195dd541e5e48eccb465bfaa","url":"search.html"},{"revision":"906951ca39f247b2f39b573e9205b601","url":"technology/单文件制作.html"},{"revision":"820821b1e01c84c26fb87a7fa3a6e4aa","url":"technology/白嫖 Office 365.html"},{"revision":"96ed8fc8e0a021b1140ba47ea52bbf97","url":"assets/images/02-OpenCV_10_0-1e5ab7fb73460afa29f9e899e7f94202.svg"},{"revision":"aa50194fe1fb448e53f26737b2803c9c","url":"assets/images/02-OpenCV_12_0-a7d1e76c878802a9d5308db58b2cd892.svg"},{"revision":"d5f7cda1de7487925b8c9b961bf70df9","url":"assets/images/02-OpenCV_14_0-bda1d78d1a747b1ae67683e7c716b37f.svg"},{"revision":"b94a2836c793b6443ab89328eda5ba88","url":"assets/images/02-OpenCV_20_0-bd66b2834e57fe77b94342e23209186d.svg"},{"revision":"60d53118573ae57ce068660d3213c512","url":"assets/images/02-OpenCV_22_0-346a3b80cca873ee89b3eaf6060d39f9.svg"},{"revision":"adaf5e39dcffd982d3d86a0e408d6d3c","url":"assets/images/02-OpenCV_24_0-807e0c2aa77959fe247f0d21b0c9f6d6.svg"},{"revision":"5d298cf1bb4a9de82deb4cd4f75fe8c4","url":"assets/images/02-OpenCV_28_0-44e51bac0ac8b7dc984b1cc92eb739c1.svg"},{"revision":"54a9e5067dae37b74b542917163b178f","url":"assets/images/02-OpenCV_33_0-a0196a0f1b2ee68a6926565893edf730.svg"},{"revision":"3eab89618ad80b5706fc9921dba9a64f","url":"assets/images/02-OpenCV_37_0-6f8b8785cbf28f7a5eac03812b0a93db.svg"},{"revision":"e27386eb0d9cd640407d3e2a61da573e","url":"assets/images/02-OpenCV_39_0-ce70d7cbd8276a7790df423956941992.svg"},{"revision":"6bc19fa2adcae081a77713ce5664b31a","url":"assets/images/02-OpenCV_42_0-4cbe804a5b421e2260d061040ceb5023.svg"},{"revision":"ad5bd739245d2efb12cb857b6f04f8b2","url":"assets/images/02-OpenCV_44_0-88f3bf28441eeac1b3abe9d008c3b760.svg"},{"revision":"95f4ba379d61b3437caf37571fe00c0d","url":"assets/images/02-OpenCV_46_0-b3092850d26191941caa3b48243a8694.svg"},{"revision":"6460c99e6e963e1ed15a5c9c9590fbfe","url":"assets/images/02-OpenCV_48_0-b52a4919c70e7196b2a4518975dbdc8e.svg"},{"revision":"8f95727e0b3cc921f48b501bbac80572","url":"assets/images/02-OpenCV_50_0-ac33f17331ce6ec73a563e1965731167.svg"},{"revision":"50bac21e10dff75206549470f6812136","url":"assets/images/02-OpenCV_53_0-cf04ce58aa33a3953e28df506892a08c.svg"},{"revision":"90ffe0704ddef510306f01de7444a4aa","url":"assets/images/02-OpenCV_54_0-1ff5c52b8ca977d1d81aaa8b270db326.svg"},{"revision":"3dad22a67ee25586a9637b18dc0be26d","url":"assets/images/02-OpenCV_56_0-de6960ef63aa4f63091c33bd382d6835.svg"},{"revision":"5154c8846169c44b3e3d69641adc4555","url":"assets/images/02-OpenCV_58_0-b6457bdf6dd73def5cd38fd1fa8d10f5.svg"},{"revision":"d0faf64c7192fbefabbf6d053c29af55","url":"assets/images/02-OpenCV_61_0-0a40018cc32dcfe155d492e9cf200563.svg"},{"revision":"8eeca45c5ebe48b488492c2d116a75b6","url":"assets/images/02-OpenCV_63_0-bd506d2e3253c034b262749ad728cb06.svg"},{"revision":"c1d29e4582e3fb44d2d0fd97a9ffde4a","url":"assets/images/02-OpenCV_65_0-29211feb43911364e238f918323c6dfa.svg"},{"revision":"5ca83a0bfd74e43788e2b91c77faed88","url":"assets/images/02-OpenCV_67_0-3ab8a2f646cab84dd7a1db07e328bafe.svg"},{"revision":"6a33b0c53e4a01e9f6c4f66483b74a2e","url":"assets/images/02-OpenCV_70_0-873dedb62f510e32d9b7901ecda353dd.svg"},{"revision":"c660290e32ebb9d79999ab3360f018c6","url":"assets/images/Enter Output File Name-bc389f8259114522178ad5fd9066707c.png"},{"revision":"073f03dcc796d2c3e79715c3e0e72b0c","url":"assets/images/tmp5700-448f4c2d9980edfbd60c136b98045ab2.png"},{"revision":"b6bbefaa79dc71ab75c5f1c32e465ed1","url":"assets/images/tmp9D37-adf40bc9e2b74439d948764d8bec1994.png"},{"revision":"1a817bbf162c683b8dae7b4fdede1d04","url":"assets/images/tmpC4CC-ae0b7c7cef063f6dddc85193c4222f4c.png"},{"revision":"885538fce225b48e717faa46c43f0305","url":"assets/images/一线三垂直相似模型-3fec0c3f75015ca3735577ce4d56a76f.jpg"},{"revision":"286a042db4174d32bf98819d7370b19a","url":"assets/images/二次函数一般式求顶点坐标-ed898d00c303860dd83b3b4085e7f6b8.png"},{"revision":"a116654754efe69622e0af2134bc9894","url":"assets/images/其他常见化学仪器-36fc814055d1bf1d275b01c0b59963af.jpg"},{"revision":"a00f59435b3137db7e192c3d9a9ec3c2","url":"assets/images/化合反应与氧化反应的关系示意图-37a2d86b9ed6d92489989f24f7f13ec0.jpg"},{"revision":"d50e8eed0ae0f5d8b243fe70141241f8","url":"assets/images/双阈值检查示意图-2b48c0bd93d71f997ff47eb68c66b83e.png"},{"revision":"e4b7a49d0ee6276acbebea24827d2452","url":"assets/images/发生装置的选择-fd558f446958dae86dda29c6974291fe.jpg"},{"revision":"899ce6fb49e56275a0f73f22ee551821","url":"assets/images/吴明毅-a2ed3d08bfb31b49148d992eeebdfe43.jpg"},{"revision":"11b95d6ec7ee8431be7628d7aad92f76","url":"assets/images/圆周角-7bdc00bdced36f5cea12c2bc4a0bed3a.jpg"},{"revision":"6973e1b58ed70260f3ea0a67d061a6a5","url":"assets/images/圆周角定理推理2-57904120c0af7ed55d2348a621c50fc6.jpg"},{"revision":"afe51a69e02223467431d4d666afc2c5","url":"assets/images/圆周角定理推论3-d55781ccc22172b7bb6cc0c3a3491cbe.jpg"},{"revision":"6556a09f51943685451c7ea9472cd9fe","url":"assets/images/垂径定理-675902440dc57391cdd240d891484606.jpg"},{"revision":"c24c437282a9cacd54b8ee059d6a2284","url":"assets/images/子母火焰-1d9dd12a68a357ec3b1e1bd233aa3f18.jpg"},{"revision":"25ba0e9a319e5eebf0ef1f5becf5bae9","url":"assets/images/平行线分线段成比例例子-e27694301a61a09aa4878ec1b7e54898.jpg"},{"revision":"cafe4edc1ef675c06886e9f770900fad","url":"assets/images/平行线分线段成比例示意图-a1105c951d150970dafba392ef8da922.jpg"},{"revision":"8022b045ebe9b7f972d897b9dd5fece6","url":"assets/images/开启文件压缩-9cb67c43b4f261f35417d8f8d7276e52.png"},{"revision":"078098daafb08c838d2b68b9a1f6b783","url":"assets/images/弦-b13e6e163405e5dc98517911b5e6bd9b.jpg"},{"revision":"052ccc3e04b11c21b0416749c204df03","url":"assets/images/弦心距-d3ec3a3b632a8848fbbd1a0c9beeb80e.jpg"},{"revision":"e8441197b03bb02c41646260a26c1dae","url":"assets/images/手拉手模型-34d6d9485c6abce2ec5851055066fa00.jpg"},{"revision":"81e9d3b70c282cfb2c6a6dc6731080eb","url":"assets/images/拖入文件-0d69303ca4553a187e3bdba2381a2fc4.png"},{"revision":"56574b01a054d58f74bb46fa3968db67","url":"assets/images/新界面-6a57f49104ec30ddd1e6de5496d52505.png"},{"revision":"f19d1b148c1b480cd05b3e62ad00b57c","url":"assets/images/点击 Browse-020a1c2fdd280be72929abf9cde0745d.png"},{"revision":"ea1f45ede7337c17cfdbf12772946e5b","url":"assets/images/点击 Process-c72c4a4d9bb6db4fddc0c7f5a5f469b9.png"},{"revision":"215e6faef16499e29c562a95e7fe1ee2","url":"assets/images/相似三角形的判定-6c8704d2ebcdc54b25df4683a3ec8569.jpg"},{"revision":"4c19aacb08cc2598cb1cf96100a95303","url":"assets/images/空气中氧气含量的测定示意图-7acd02b69e7a9c38d1d10722e6b46467.jpg"},{"revision":"ea687c92b9d4ef3decb0842f7d0c5cbe","url":"assets/images/软件界面-773c19ce43f33cb70f9fd66e7925619c.png"},{"revision":"049cb334612fff0d817d98488fea8e98","url":"assets/images/邱涵-3b88807b54352d737c87e3c555fed3dd.jpg"},{"revision":"1fc786b2d982f2860e24cfd3e0546cd6","url":"assets/images/鸡在河上-8d48de6ac081f5ccac372507f47b7757.jpg"},{"revision":"cd0d762734515370061697c8485c15bc","url":"img/docusaurus-1024.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"444099656c08bb0fe138f2a750a6cabd","url":"img/profile_photo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"c29c722cce2677cabab3330559319eb8","url":"assets/fonts/FiraCode-VF-7fef988ad994d5988ff35169433fe81b.woff2"},{"revision":"c29c722cce2677cabab3330559319eb8","url":"fonts/FiraCode-VF.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();