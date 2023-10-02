(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"3a7833fa327dd88548c88f10797afd98","url":"404.html"},{"revision":"73311a16640e9366212373d5a6349642","url":"assets/css/styles.ae3aa340.css"},{"revision":"3f544b6fec2d79e9bf424d52932cb206","url":"assets/js/08c579ff.83cd83f7.js"},{"revision":"7c4f59cf50b4ef7fba68dcc94fd9f0e6","url":"assets/js/08ef633c.810ec4f4.js"},{"revision":"ecfc54fa04bc8f4ddf17fe2c4063169a","url":"assets/js/0d530df7.e85ce37d.js"},{"revision":"b6ff14b1ad2581a09442f0d2d89096a1","url":"assets/js/0da3c286.34e1401f.js"},{"revision":"08efbf12a72cbe663aa6a4a80f70fd31","url":"assets/js/0e8760e5.4f3c46c6.js"},{"revision":"b36a327a5e24d799e303f5e7cddf08c2","url":"assets/js/102b6bf2.cb90e62a.js"},{"revision":"eb7d4d9257c61f3945ca51baf7d807ec","url":"assets/js/1126538e.151aadb2.js"},{"revision":"a81ad21c28ae699b3a61c893c5039a02","url":"assets/js/1138.d76f9688.js"},{"revision":"02c3f9c551147150b398de10727c6150","url":"assets/js/17896441.d582c135.js"},{"revision":"3374058a52aa8fc938b86e6915dd7f0c","url":"assets/js/195760b1.cc873343.js"},{"revision":"1c006828431cbcfa4f1a7e2a86b02e2e","url":"assets/js/1a4e3797.3da22084.js"},{"revision":"7f9d343c4145318a1bd4aee49489ec61","url":"assets/js/1a999091.d751fdb5.js"},{"revision":"b9f4c64d4437223f3c87eff3afe6558a","url":"assets/js/1be78505.589623e1.js"},{"revision":"69ccb5114457d9238339cd4d7cddb1aa","url":"assets/js/1df93b7f.5f44b187.js"},{"revision":"2c19ffb437bfd7943e49c4ea83fba800","url":"assets/js/1f3cbf67.9a0618c8.js"},{"revision":"dd8217e4e674a25d2dbf39127fa92792","url":"assets/js/207.bf4953fa.js"},{"revision":"5c30aa8d0167a95457269d8992e0ee3e","url":"assets/js/214ac62f.ec0fced3.js"},{"revision":"8b9451646522539cc2939d6ff030a619","url":"assets/js/25f96342.010feeb3.js"},{"revision":"1429e199bcb78e662f7ff86594ec9f33","url":"assets/js/2b16541f.ff17dc66.js"},{"revision":"9913f054f55ff722d3d1f2abc0f88613","url":"assets/js/316.9d21afdb.js"},{"revision":"fc7ce8610108a91bc9163fbc7eb25371","url":"assets/js/357bc62d.5cef2970.js"},{"revision":"d78af54fcdba1d439432ca5ba8e4b87a","url":"assets/js/363.20c6d85f.js"},{"revision":"dd30d97c18b26a9fae86f76fab97346f","url":"assets/js/3791.b56fc3cb.js"},{"revision":"4df5d067b0112f4945568979e97c54d5","url":"assets/js/37f900a4.8b420d95.js"},{"revision":"d432901c1f48e6f7df638383720fa4e9","url":"assets/js/39c2a78b.0dd7d9d6.js"},{"revision":"068e50057952198966fb0f2bf1a59bf4","url":"assets/js/3d3e7f22.c4d56fa9.js"},{"revision":"62940e903eef3c9cd69ea1501ac94e81","url":"assets/js/3de64bcd.7e044528.js"},{"revision":"839f67f8a896087f9ce25d492271c0ed","url":"assets/js/3ff6441b.a6d366c6.js"},{"revision":"0f1357dcf8b24b8a96f95d1c7731abdb","url":"assets/js/4248.379860b5.js"},{"revision":"4846c91b8d54c8cd09cda287897caf7a","url":"assets/js/42de945a.f581c451.js"},{"revision":"e95edcb5ab0eb6aa43c2478e55e67dfe","url":"assets/js/487.95e2457d.js"},{"revision":"b774a1421fa67a0f2b58d3cc81d82853","url":"assets/js/4abe7b38.450faad2.js"},{"revision":"ca1e0abbec7a484dbac7c227ced9f7ae","url":"assets/js/4dd3c82f.66014d9c.js"},{"revision":"e339a593b9dce7993ee1842adfb7bc00","url":"assets/js/5131.a35e73e6.js"},{"revision":"9c8158b43f18cb221e98ddfe154215a5","url":"assets/js/5525.3bb6479b.js"},{"revision":"0c99c9c81db395a63001e7608239910c","url":"assets/js/56ce3634.1a0c3fad.js"},{"revision":"a2c810c9f77e50acc526a11b5bd81965","url":"assets/js/57329761.05ae5b3f.js"},{"revision":"2ea6a115f60b5925f5ba4646816a6f1e","url":"assets/js/59102c3e.6c2f3590.js"},{"revision":"818c6fd49e796ad37e3feb63ab88d3d6","url":"assets/js/6316.ea0c85aa.js"},{"revision":"51b39dfd8e6f29a1520763ff01adad9d","url":"assets/js/668c3993.37c245dc.js"},{"revision":"a8bfe456c066232d6a372a458eed414c","url":"assets/js/681ba842.495392e1.js"},{"revision":"e1125ab871006b6c18b2ff6aa2faeb3d","url":"assets/js/68833ae8.ed24f48d.js"},{"revision":"f98814e8c17702b9306ec48eec17b82c","url":"assets/js/6902b5ea.84d4df11.js"},{"revision":"4f4ed0da5a5274b817dad7d933952511","url":"assets/js/6b044817.79d7f1e3.js"},{"revision":"430dc3c660252b95c83bb043708de32c","url":"assets/js/6c78810f.2e8f8c9e.js"},{"revision":"9f42b535c22c73b0db288bcbd1edeba0","url":"assets/js/6fab6aa9.7a3f0965.js"},{"revision":"42927d82d35acc0390c9a88344a56818","url":"assets/js/71f1bd9c.39b0b76b.js"},{"revision":"7ae9d2628d31d6c9a547b3f2845fa2dd","url":"assets/js/724.59a8e02f.js"},{"revision":"9d7c0e2bf38fa2f17681139cc0ac9165","url":"assets/js/75c2bd7f.0eef205f.js"},{"revision":"b636322aeeed9a281d205ccd3d4f916d","url":"assets/js/7724.1d2affff.js"},{"revision":"be70d3e922600f571036a42cca5e23db","url":"assets/js/7842818a.60fb4351.js"},{"revision":"1d9a07548cfedde38061e8121762212e","url":"assets/js/7ae7fe25.39404125.js"},{"revision":"cfbc9accacf8a86cf5a85915a2c6c62d","url":"assets/js/7e3e7cb3.22377daa.js"},{"revision":"e4eb1cf4d06abaca8f9aae112874fe9a","url":"assets/js/814f3328.7bc7073d.js"},{"revision":"b7f0182d7b57ef94a30b6ea9d37af2a6","url":"assets/js/8443.6848c300.js"},{"revision":"de6f73b0c0ffb334af601c738f32d4f3","url":"assets/js/8fa680c9.5c4bf25a.js"},{"revision":"9632e95d6766456c7562d1bc9497c056","url":"assets/js/9190.5fc3a56a.js"},{"revision":"048b865b8599fa5d801aab1eee2f9d23","url":"assets/js/935f2afb.e87f0ec6.js"},{"revision":"204c78f5cbd28db80198d674806c5c69","url":"assets/js/9487.7e91e8b6.js"},{"revision":"49bc093839a4fcdc0bc4ba4c7245e9c0","url":"assets/js/94c8d056.3d2cb77c.js"},{"revision":"6afeff6e2f18ce4ff34052ad88635bce","url":"assets/js/95f7942c.dad448ce.js"},{"revision":"3c4646bb9d0bdc19a0ffff49e9253ed2","url":"assets/js/974f1b68.82c7b123.js"},{"revision":"df6efa000af953c0dde920c42bad8c63","url":"assets/js/9e4087bc.a16f97c2.js"},{"revision":"ee0c7ced0c7303af44eb857adf435fa4","url":"assets/js/a38782e1.f9b2f334.js"},{"revision":"cf19027eb4e24e5107362b33cd740bd4","url":"assets/js/a6aa9e1f.f615f617.js"},{"revision":"d0f93edaebba66c56d17e02d6dc5a47d","url":"assets/js/ac802a0b.3da3ea1b.js"},{"revision":"ae52ad6e5cb903047345395a9cbe79b1","url":"assets/js/b2b675dd.ab225789.js"},{"revision":"b0923b5ebdf91f8fbbfdf08cb7a5973d","url":"assets/js/b2f554cd.909b3f4c.js"},{"revision":"f24f1d6639018bca63808fd42968c95c","url":"assets/js/b47010f5.2cad89da.js"},{"revision":"bfd4c50907287118c1c822b0046d19ad","url":"assets/js/bfd189f3.ca4851b4.js"},{"revision":"442c37c06dfd6e0557ab1ae6e91370fe","url":"assets/js/c6292826.84aaf4fc.js"},{"revision":"ac96739f343ad0e9d103aa2e71547155","url":"assets/js/c740c349.21b94264.js"},{"revision":"8de21bab02ebd7a9252dfa84a790e9c7","url":"assets/js/ccc49370.1e342c41.js"},{"revision":"236c3c8f5f67466113cffe8e10955679","url":"assets/js/d07768f8.948bc74c.js"},{"revision":"0203648555866ed2004adaf5bb031318","url":"assets/js/d11188ea.ca01b954.js"},{"revision":"8fe54e859e3a157777a9a59eff6af34f","url":"assets/js/d43ab880.40d145be.js"},{"revision":"239920352f561a65cb2b9d49894dd863","url":"assets/js/d4f713be.8901bf06.js"},{"revision":"dd288d60a34e7bca4d1fa176406e4cf4","url":"assets/js/d636f53c.9735f123.js"},{"revision":"6069871fe249c7a66cddd257f32790ce","url":"assets/js/e236aa13.ca9d2ba6.js"},{"revision":"068136b617baa8b38b17f54fe99e3862","url":"assets/js/e2f6a895.c57c0223.js"},{"revision":"0509e13de335194d74751b48dbecf32f","url":"assets/js/e4050dc8.1e3c6f78.js"},{"revision":"5170357fa79e49904103666731d4452f","url":"assets/js/e531813d.43a43e33.js"},{"revision":"a58ce5100d196e162793b2e71bf36034","url":"assets/js/e60574e1.ceed09c1.js"},{"revision":"95bfcb7ec4af55f79eec2b5873e7ea1d","url":"assets/js/f0227570.14a96ef2.js"},{"revision":"4d6f131afdb2d70b275a3463a749e682","url":"assets/js/f0ff92c1.9fb9d6e7.js"},{"revision":"2f31ee1d045fc4607672227a891b361e","url":"assets/js/f3b3f30f.e3c582d5.js"},{"revision":"81c200169d33e23730d06fd8791ac759","url":"assets/js/f5fc6299.506dde5e.js"},{"revision":"92edc760cb69b10f5073223d101a25b6","url":"assets/js/f9669315.2cdfadb7.js"},{"revision":"2f7559a72f66a408942b1d67dcd90ad5","url":"assets/js/fd7aa01a.bc411d9b.js"},{"revision":"ce5093e7eece88ce8c15d820c12ff08c","url":"assets/js/main.9940e129.js"},{"revision":"3d923f1f3dccd32a5da283aec426ac5a","url":"assets/js/runtime~main.10de6c31.js"},{"revision":"4755030e8641c28cac070321b012dcf7","url":"blog.html"},{"revision":"8de6038d4e55afd58943bed2d65eb62c","url":"blog/2023/10/1/2023 年广州市政府工作报告.html"},{"revision":"eb3847eeb6e9e23f79cf8e9cb06d795c","url":"blog/2023/10/1/模拟政协提案.html"},{"revision":"7da5fff9caa479a25907f66836a8f9ce","url":"blog/2023/7/21/这是我的第一个博客.html"},{"revision":"a98083032a2d87e3ea245e85f9fd8b76","url":"blog/2023/7/24/宪法读后感.html"},{"revision":"487ce1f5529109f0694610f33e9d69a3","url":"blog/2023/7/25/党和国家维护社会公平的措施.html"},{"revision":"2bbc85bd155f28d9a938f75c3a223ea6","url":"blog/2023/7/25/参加志愿活动的体会.html"},{"revision":"82c73117cdb39a1303ac9b5f52116430","url":"blog/2023/7/25/时政点评.html"},{"revision":"1c81ead448891cc6fe76da5a966be23c","url":"blog/2023/9/25/学生会检讨书.html"},{"revision":"c6c933a331ef525b05301f1c0203ad61","url":"blog/2023/9/25/时政点评.html"},{"revision":"ea891f109729e3a8168991cc0232d1f7","url":"blog/archive.html"},{"revision":"c195840082e04b1b1003fb508e466f9d","url":"docs/intro.html"},{"revision":"ee3e75b299204958bc23c9c2eb57f49f","url":"docs/化学/初识化学.html"},{"revision":"11db8fc04774d009edb275841b2e9ef9","url":"docs/化学/实验探究初步.html"},{"revision":"0cd2c945ff7846c5cf57c80da8fe9754","url":"docs/化学/氧气的制备综合.html"},{"revision":"9b952c32742aaa09d9d495a1b0c9ba1e","url":"docs/化学/物质的变化和性质.html"},{"revision":"18169dc6724871f2018b17d19bdabd02","url":"docs/化学/空气和氧气.html"},{"revision":"1b2510252cf02ce23f5a2fb10ecca867","url":"docs/化学/走进化学实验室.html"},{"revision":"daa7d7315c43e43abc27bd931692ed54","url":"docs/历史/三大改造.html"},{"revision":"182a90124309abe4f907ac5c538fa4f3","url":"docs/历史/中华人民共和国成立.html"},{"revision":"eba159e3d3b789210ebeb4804b5c15eb","url":"docs/历史/伟大的历史转折.html"},{"revision":"cf93c7ea9a8aa83ae23b18f8a91b66a8","url":"docs/历史/土地改革.html"},{"revision":"43ab787d86c13df6daf05055588ef6ac","url":"docs/历史/抗美援朝.html"},{"revision":"e93942f5af57ad117972e3493a1c8a8b","url":"docs/历史/新中国工业化的起步和人民代表大会制度的确立.html"},{"revision":"16b61f099a9390ce34ff22e56529f56b","url":"docs/历史/经济体制改革.html"},{"revision":"53c963bfcddd32313f4d7ecf2c8d0b96","url":"docs/历史/艰辛探索与建设成就.html"},{"revision":"875bf67407c615276909789c4a978ddf","url":"docs/数学/二次函数.html"},{"revision":"bfd7a9e1c4f80bce5feb647cc486c4cf","url":"docs/数学/反比例函数.html"},{"revision":"cd1490fe346eb2272549b29fded2ee5a","url":"docs/数学/圆.html"},{"revision":"d31deff96fc326502dd10ab893ea28ec","url":"docs/数学/相似三角形.html"},{"revision":"6b443c7fe85e8ffa7f3a58b5a554bedc","url":"docs/物理/内能.html"},{"revision":"006a77182d887dca5b045991333062a5","url":"docs/物理/分子热运动.html"},{"revision":"b34c490d07decccd68c082f57454be34","url":"docs/物理/电的起源.html"},{"revision":"352285754566a8e66a83b6a10f3174e1","url":"docs/编程/HTML/HTML 语法.html"},{"revision":"6b7ec6275a3f9be33eb9ef9bf9e2e388","url":"docs/编程/JavaScript/scope 伪类.html"},{"revision":"415ba1549e17a49f49cf632867f7202e","url":"docs/编程/JavaScript/修改文件访问时间、修改时间.html"},{"revision":"5a093c98ca8b60e158af578ea8434b7f","url":"docs/编程/JavaScript/观察元素更改.html"},{"revision":"fe2558eb53e0e101085b0705ee3dbba7","url":"docs/编程/Python/OpenCV.html"},{"revision":"66adc13dc2185a65c1fb87bb2a69dac8","url":"docs/编程/Python/后台操作键鼠.html"},{"revision":"a78fd7ffbe08d06594dd4e43f03e2c25","url":"docs/编程/单文件制作.html"},{"revision":"18cab37bc2c09b1994050fd26923d6af","url":"docs/编程/逆向/无限 debugger.html"},{"revision":"100b78a261a6f4832cb3b59708741de8","url":"docs/编程/逆向/模拟输入.html"},{"revision":"32b53044df53dc6b31f14e7d07468c6f","url":"docs/编程/逆向/防止强制跳转.html"},{"revision":"2601f7ffda32d7c76dd79d7e394b766e","url":"docs/英语/周报/第 1 期.html"},{"revision":"ad8648d7e6d8e4fac628c55028d17658","url":"docs/英语/周报/第 2 期.html"},{"revision":"27f64502c6864fc9f1f3f45c3e649c30","url":"docs/英语/周报/第 5 期.html"},{"revision":"36b165fe9ca9b8b28a9a1d528c53fcf2","url":"docs/英语/周报/第 6 期.html"},{"revision":"1396412358ea8176db143c814417ff58","url":"docs/英语/定语从句.html"},{"revision":"f3ee5563f554b87ad6f8ec5c1e49bdc6","url":"docs/英语/开学考笔记.html"},{"revision":"7a6f9136a756d15162ae02e1afaa0cd8","url":"docs/语文/传统文化类作文.html"},{"revision":"65a5f9187489277f0ca04fe7dcb36923","url":"docs/语文/梦想励志类作文.html"},{"revision":"89595d58c3fec54be55ac3f7577594ef","url":"docs/语文/议论文作文.html"},{"revision":"eff8b8fbf6b6b880bab4f4a81be47269","url":"index.html"},{"revision":"57b33b5182b64ff09292f953e8c9f9ff","url":"search-index.json"},{"revision":"4f9aa5f7a895900e80b6322136db943f","url":"search.html"},{"revision":"e599d9e2064e2c88bfa488c1cd942978","url":"assets/images/02.OpenCV_10_0-b84b679683963a396c6ef274329b1a39.svg"},{"revision":"0ba6ec578f2a1859a5f23163b8134c83","url":"assets/images/02.OpenCV_12_0-bf52ea5110df2b8adef55223bd3ce024.svg"},{"revision":"bbc8f536faeba6abf037098dcf5eaee4","url":"assets/images/02.OpenCV_14_0-2c4dd39fa3ad7081e2dbce2a68b79bb2.svg"},{"revision":"c9e7b657da9d210a327a60317abca0fa","url":"assets/images/02.OpenCV_20_0-cfcac28428702553f45f876439eafddd.svg"},{"revision":"47f1fa3a7e6b3c1e27d5635c45c1e6a3","url":"assets/images/02.OpenCV_22_0-bcd91c1a984a226fc3c82badcd382423.svg"},{"revision":"b008367f66dc2cc4a96ad0ddb0fbf8c9","url":"assets/images/02.OpenCV_24_0-149ea102cc34d963c0215383a503bd4c.svg"},{"revision":"ce69be2fd1fe38d70221c04e0a2b6ca8","url":"assets/images/02.OpenCV_28_0-f9d759cbdc1a79e0a2a25a3794462c0c.svg"},{"revision":"429b3e3e80594a0a58b8bc30181fdbc8","url":"assets/images/02.OpenCV_33_0-7c67c26e03e366d59496b60bde02758a.svg"},{"revision":"4275b6be2408aa612168542d31d9e0c0","url":"assets/images/02.OpenCV_37_0-a7fea389259d030e4df3101a2351d33a.svg"},{"revision":"a9d864da3127be2309185e1b736358cf","url":"assets/images/02.OpenCV_39_0-8be33e8bd5994ad7757676dd53d79330.svg"},{"revision":"52217c649244ee6b8a4426f8d01e179a","url":"assets/images/02.OpenCV_42_0-985b006b51c7cd7c7b002065120cc541.svg"},{"revision":"d6b5df29c5d701f234525ea64639b29c","url":"assets/images/02.OpenCV_44_0-b863bf26a0b920952353fa4e623b0102.svg"},{"revision":"d4753c4ddd72a20c6271ad67c1a0278c","url":"assets/images/02.OpenCV_46_0-f868da2c1b9cff5b7fb024b9231b18b4.svg"},{"revision":"4d29b659d480c098b7831ce752f03296","url":"assets/images/02.OpenCV_48_0-1d67f955a1874861c972447b802de94e.svg"},{"revision":"4472ebbff417a53933acf494a758d006","url":"assets/images/02.OpenCV_50_0-a7a8bbf0e24cbf11847dcd467d579182.svg"},{"revision":"c80b2b9e40bcbc51c2b736590a3fb739","url":"assets/images/02.OpenCV_53_0-fed73cceab96ab6e03846c470b5c38f0.svg"},{"revision":"597f5f1293993827f170f20cca460953","url":"assets/images/02.OpenCV_54_0-c791eb1945da291da79c225ddbe1c0f6.svg"},{"revision":"68df2cc263936a2cb0898c604a51e4e7","url":"assets/images/02.OpenCV_56_0-c42eac2af0aae5243f054c27a013ae44.svg"},{"revision":"aa1b8c3222725741cf1188d108fb06d5","url":"assets/images/02.OpenCV_58_0-2706419c3e82c03fc04a594c0dcfde34.svg"},{"revision":"c19673de81afcde52ebbcd49661a3e2c","url":"assets/images/02.OpenCV_61_0-d2ff8bb4ccf6f1affaad7524d9e60e70.svg"},{"revision":"84bd0526c62621765c2e727f6be6abd9","url":"assets/images/02.OpenCV_63_0-1a5c867dc81ab2f39b853782428ba9b9.svg"},{"revision":"fbebaa528e6f8b00ab1cb6b2047ee03d","url":"assets/images/02.OpenCV_65_0-527018310b40a26f2285514e3eb224e5.svg"},{"revision":"b2c5c67fdf935c4db90382dc3a6d65f9","url":"assets/images/02.OpenCV_67_0-04fa29637e18f0ce935ce9a759b8dcd3.svg"},{"revision":"3268f6e40a6a4649465fb91f91c446fa","url":"assets/images/02.OpenCV_70_0-4a860f6cbca2d9a92ea8cedd01ffda0b.svg"},{"revision":"c660290e32ebb9d79999ab3360f018c6","url":"assets/images/Enter Output File Name-bc389f8259114522178ad5fd9066707c.png"},{"revision":"444099656c08bb0fe138f2a750a6cabd","url":"assets/images/profile_photo-2512730efc9f7e813bb042f5cc9401c1.png"},{"revision":"073f03dcc796d2c3e79715c3e0e72b0c","url":"assets/images/tmp5700-448f4c2d9980edfbd60c136b98045ab2.png"},{"revision":"b6bbefaa79dc71ab75c5f1c32e465ed1","url":"assets/images/tmp9D37-adf40bc9e2b74439d948764d8bec1994.png"},{"revision":"1a817bbf162c683b8dae7b4fdede1d04","url":"assets/images/tmpC4CC-ae0b7c7cef063f6dddc85193c4222f4c.png"},{"revision":"885538fce225b48e717faa46c43f0305","url":"assets/images/一线三垂直相似模型-3fec0c3f75015ca3735577ce4d56a76f.jpg"},{"revision":"286a042db4174d32bf98819d7370b19a","url":"assets/images/二次函数一般式求顶点坐标-ed898d00c303860dd83b3b4085e7f6b8.png"},{"revision":"a116654754efe69622e0af2134bc9894","url":"assets/images/其他常见化学仪器-36fc814055d1bf1d275b01c0b59963af.jpg"},{"revision":"a00f59435b3137db7e192c3d9a9ec3c2","url":"assets/images/化合反应与氧化反应的关系示意图-37a2d86b9ed6d92489989f24f7f13ec0.jpg"},{"revision":"d50e8eed0ae0f5d8b243fe70141241f8","url":"assets/images/双阈值检查示意图-2b48c0bd93d71f997ff47eb68c66b83e.png"},{"revision":"e4b7a49d0ee6276acbebea24827d2452","url":"assets/images/发生装置的选择-fd558f446958dae86dda29c6974291fe.jpg"},{"revision":"11b95d6ec7ee8431be7628d7aad92f76","url":"assets/images/圆周角-7bdc00bdced36f5cea12c2bc4a0bed3a.jpg"},{"revision":"6973e1b58ed70260f3ea0a67d061a6a5","url":"assets/images/圆周角定理推理2-57904120c0af7ed55d2348a621c50fc6.jpg"},{"revision":"afe51a69e02223467431d4d666afc2c5","url":"assets/images/圆周角定理推论3-d55781ccc22172b7bb6cc0c3a3491cbe.jpg"},{"revision":"6556a09f51943685451c7ea9472cd9fe","url":"assets/images/垂径定理-675902440dc57391cdd240d891484606.jpg"},{"revision":"c24c437282a9cacd54b8ee059d6a2284","url":"assets/images/子母火焰-1d9dd12a68a357ec3b1e1bd233aa3f18.jpg"},{"revision":"25ba0e9a319e5eebf0ef1f5becf5bae9","url":"assets/images/平行线分线段成比例例子-e27694301a61a09aa4878ec1b7e54898.jpg"},{"revision":"cafe4edc1ef675c06886e9f770900fad","url":"assets/images/平行线分线段成比例示意图-a1105c951d150970dafba392ef8da922.jpg"},{"revision":"8022b045ebe9b7f972d897b9dd5fece6","url":"assets/images/开启文件压缩-9cb67c43b4f261f35417d8f8d7276e52.png"},{"revision":"078098daafb08c838d2b68b9a1f6b783","url":"assets/images/弦-b13e6e163405e5dc98517911b5e6bd9b.jpg"},{"revision":"052ccc3e04b11c21b0416749c204df03","url":"assets/images/弦心距-d3ec3a3b632a8848fbbd1a0c9beeb80e.jpg"},{"revision":"e8441197b03bb02c41646260a26c1dae","url":"assets/images/手拉手模型-34d6d9485c6abce2ec5851055066fa00.jpg"},{"revision":"81e9d3b70c282cfb2c6a6dc6731080eb","url":"assets/images/拖入文件-0d69303ca4553a187e3bdba2381a2fc4.png"},{"revision":"56574b01a054d58f74bb46fa3968db67","url":"assets/images/新界面-6a57f49104ec30ddd1e6de5496d52505.png"},{"revision":"f19d1b148c1b480cd05b3e62ad00b57c","url":"assets/images/点击 Browse-020a1c2fdd280be72929abf9cde0745d.png"},{"revision":"ea1f45ede7337c17cfdbf12772946e5b","url":"assets/images/点击 Process-c72c4a4d9bb6db4fddc0c7f5a5f469b9.png"},{"revision":"215e6faef16499e29c562a95e7fe1ee2","url":"assets/images/相似三角形的判定-6c8704d2ebcdc54b25df4683a3ec8569.jpg"},{"revision":"4c19aacb08cc2598cb1cf96100a95303","url":"assets/images/空气中氧气含量的测定示意图-7acd02b69e7a9c38d1d10722e6b46467.jpg"},{"revision":"ea687c92b9d4ef3decb0842f7d0c5cbe","url":"assets/images/软件界面-773c19ce43f33cb70f9fd66e7925619c.png"},{"revision":"1fc786b2d982f2860e24cfd3e0546cd6","url":"assets/images/鸡在河上-8d48de6ac081f5ccac372507f47b7757.jpg"},{"revision":"cd0d762734515370061697c8485c15bc","url":"img/docusaurus-1024.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"73191efe47930c6b5d88dd28e745e102","url":"assets/fonts/CascadiaCode-61442455812b2cee49c42154f4c4ae03.woff2"},{"revision":"0981700e3bb7e9449ba10f378cb044df","url":"assets/fonts/CascadiaCodeItalic-36b2be8a0b3c899472d95ecde3434f83.woff2"},{"revision":"73191efe47930c6b5d88dd28e745e102","url":"fonts/CascadiaCode.woff2"},{"revision":"0981700e3bb7e9449ba10f378cb044df","url":"fonts/CascadiaCodeItalic.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();