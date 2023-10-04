(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"73f2fb688329a1246297a84857f66df7","url":"404.html"},{"revision":"36374208133d32895fdb773cd42e77ae","url":"assets/css/styles.6a4a5884.css"},{"revision":"94b910d30325f73f45f9fb2c498a63d6","url":"assets/js/08c579ff.ad0cb303.js"},{"revision":"16b5f5ef157e62c9d86fa6a228c4f377","url":"assets/js/08ef633c.9a2fb7ac.js"},{"revision":"9e6cb940c6aa6b181a3615b810ce4513","url":"assets/js/0d530df7.f3f7b084.js"},{"revision":"d1ee7462f04a4c70a817698c02cddf03","url":"assets/js/0da3c286.ac91f5af.js"},{"revision":"e8aab6c260ea3af80907b434f99b8f42","url":"assets/js/0e8760e5.192ffd63.js"},{"revision":"60f2f0fa9dacf0c4a2f2f6641fefe3b4","url":"assets/js/1126538e.197a798a.js"},{"revision":"587125804de8db70ef6f3b2586089777","url":"assets/js/1138.c62a2918.js"},{"revision":"e6bc4d86ce0de928e2e3e0d01206ab85","url":"assets/js/17896441.53ef540a.js"},{"revision":"13037ef58ffbf7db1addb6771bd68347","url":"assets/js/195760b1.162f715e.js"},{"revision":"1c006828431cbcfa4f1a7e2a86b02e2e","url":"assets/js/1a4e3797.3da22084.js"},{"revision":"a7791a77879de62d305814672627c983","url":"assets/js/1a999091.d7af7058.js"},{"revision":"b9f4c64d4437223f3c87eff3afe6558a","url":"assets/js/1be78505.589623e1.js"},{"revision":"dabb87cdd4f44801cf783e3925d4e0cb","url":"assets/js/1df93b7f.2f0814c8.js"},{"revision":"2c19ffb437bfd7943e49c4ea83fba800","url":"assets/js/1f3cbf67.9a0618c8.js"},{"revision":"dd8217e4e674a25d2dbf39127fa92792","url":"assets/js/207.bf4953fa.js"},{"revision":"9e3766830c1db4f181cbadc872ed6aeb","url":"assets/js/214ac62f.b041e37d.js"},{"revision":"cc5ec238622b51aabbdf745ea1cd0139","url":"assets/js/25f96342.f6461f78.js"},{"revision":"d997fa9861f7e3c27674a305b0edb34d","url":"assets/js/2b16541f.d1d32b92.js"},{"revision":"9913f054f55ff722d3d1f2abc0f88613","url":"assets/js/316.9d21afdb.js"},{"revision":"660c2954e311dd879562af8a77c80835","url":"assets/js/357bc62d.5ca0adb2.js"},{"revision":"d78af54fcdba1d439432ca5ba8e4b87a","url":"assets/js/363.20c6d85f.js"},{"revision":"e64f5f04e08f634d7c8093d39092b1da","url":"assets/js/3791.21dc852a.js"},{"revision":"56cebaca3566a039fd73f7ebeb50162d","url":"assets/js/37f900a4.37d5c099.js"},{"revision":"035a8beeb498ab7eb7f16d8ede7bc495","url":"assets/js/39c2a78b.f1b6c10e.js"},{"revision":"38eb7a2d755e35260f22ae2c7ac8ac56","url":"assets/js/3d3e7f22.d8577196.js"},{"revision":"b032e02f559f63be09ee03d2e7895dc4","url":"assets/js/3ff6441b.354c6e99.js"},{"revision":"0f1357dcf8b24b8a96f95d1c7731abdb","url":"assets/js/4248.379860b5.js"},{"revision":"755e3d8e6f15b5e7fa5bf89c704cdb15","url":"assets/js/42de945a.e9d3d30d.js"},{"revision":"e95edcb5ab0eb6aa43c2478e55e67dfe","url":"assets/js/487.95e2457d.js"},{"revision":"6b0c645a5f54a059882d4e1f3d21c367","url":"assets/js/4abe7b38.480830a4.js"},{"revision":"1bf3fad6aad2f4505de8b77c8c6e49ca","url":"assets/js/4dd3c82f.7d958e89.js"},{"revision":"e339a593b9dce7993ee1842adfb7bc00","url":"assets/js/5131.a35e73e6.js"},{"revision":"9c8158b43f18cb221e98ddfe154215a5","url":"assets/js/5525.3bb6479b.js"},{"revision":"73a852e3ed114a2ea0bdc9eee069f5dc","url":"assets/js/56ce3634.7b16aa33.js"},{"revision":"ba0ed0627ea39006876f1b596d06cb08","url":"assets/js/57329761.14495493.js"},{"revision":"84366b8a45cd8787fd854a810c9927fd","url":"assets/js/59102c3e.5dc8badb.js"},{"revision":"818c6fd49e796ad37e3feb63ab88d3d6","url":"assets/js/6316.ea0c85aa.js"},{"revision":"be2e069d3a9ef8a335a6094581e2040f","url":"assets/js/668c3993.5508a4ef.js"},{"revision":"fadfcbf7363f2758d598efb7ff3c4b1d","url":"assets/js/681ba842.d3506015.js"},{"revision":"444720b1883d59316a1f8aecbb9a0343","url":"assets/js/68833ae8.91ebfa85.js"},{"revision":"cdf08195ddec0d10836b5525b612ef14","url":"assets/js/6902b5ea.1f76a5f4.js"},{"revision":"0ae03b5e9e570ce29da16e9c5ed20b8b","url":"assets/js/6b044817.3ad2e54d.js"},{"revision":"3bf8681664c3c71769e29149657c21e3","url":"assets/js/6c78810f.6769c06a.js"},{"revision":"113c3d42f565503ebf14ba8613cae9a0","url":"assets/js/6fab6aa9.13a2656e.js"},{"revision":"ec857f73ac31bd2f3e781e709e150d2f","url":"assets/js/71f1bd9c.1d0c375e.js"},{"revision":"7ae9d2628d31d6c9a547b3f2845fa2dd","url":"assets/js/724.59a8e02f.js"},{"revision":"ad7384b03a23ca0bd01ebd81d9525323","url":"assets/js/75c2bd7f.189a9b02.js"},{"revision":"b636322aeeed9a281d205ccd3d4f916d","url":"assets/js/7724.1d2affff.js"},{"revision":"af8406c7fd2bb7571d826900e36bff26","url":"assets/js/7842818a.65d02aaa.js"},{"revision":"41b319109571d897c0810f0883e3c028","url":"assets/js/7ae7fe25.ea6c20d9.js"},{"revision":"5eeb32d103a315c97941dc805c8e7c0f","url":"assets/js/7cbac601.b8594405.js"},{"revision":"63c5281fdccae6ddd5de40d4d45d56d1","url":"assets/js/7e3e7cb3.57fe98a5.js"},{"revision":"0a2614ff694d5573293885dbe8979fd8","url":"assets/js/814f3328.e7e6c12a.js"},{"revision":"b7f0182d7b57ef94a30b6ea9d37af2a6","url":"assets/js/8443.6848c300.js"},{"revision":"a8a4756dbeda5580dddeeb2775946432","url":"assets/js/8fa680c9.d080be15.js"},{"revision":"9632e95d6766456c7562d1bc9497c056","url":"assets/js/9190.5fc3a56a.js"},{"revision":"6e43de5badd2a6b5871ef60d4cb7dd9c","url":"assets/js/935f2afb.ec5cf457.js"},{"revision":"204c78f5cbd28db80198d674806c5c69","url":"assets/js/9487.7e91e8b6.js"},{"revision":"edb3abee8d2588ae96773160755d9489","url":"assets/js/94c8d056.c5186463.js"},{"revision":"6afeff6e2f18ce4ff34052ad88635bce","url":"assets/js/95f7942c.dad448ce.js"},{"revision":"793c691b16f6ec3f1d47174210db71ca","url":"assets/js/974f1b68.365fac4f.js"},{"revision":"df6efa000af953c0dde920c42bad8c63","url":"assets/js/9e4087bc.a16f97c2.js"},{"revision":"5e114da8df63418fd990dc95d8062588","url":"assets/js/a38782e1.600e1fac.js"},{"revision":"cf19027eb4e24e5107362b33cd740bd4","url":"assets/js/a6aa9e1f.f615f617.js"},{"revision":"d0f93edaebba66c56d17e02d6dc5a47d","url":"assets/js/ac802a0b.3da3ea1b.js"},{"revision":"ae52ad6e5cb903047345395a9cbe79b1","url":"assets/js/b2b675dd.ab225789.js"},{"revision":"4c63d68c088055d9542cd0b3d5225200","url":"assets/js/b2f554cd.83d16b8a.js"},{"revision":"b5df880b9a8db5ddeb9075b577587fd2","url":"assets/js/b47010f5.a2c8523d.js"},{"revision":"05c7fc9f2b0646e0af7a83876419a559","url":"assets/js/bfd189f3.ebb8ef38.js"},{"revision":"860bbde80d5bcf38274709863df5ab67","url":"assets/js/c6292826.a453506c.js"},{"revision":"81d9a1040984c75cdc95aa27f1ac5579","url":"assets/js/c740c349.9288e6da.js"},{"revision":"6002ccff677a51dcbefb5dcc78e308de","url":"assets/js/ccc49370.1868521e.js"},{"revision":"ce74314f566fc2579fda3c3fe05c6b28","url":"assets/js/d07768f8.32492041.js"},{"revision":"74ccaa37ccd75e44ff930adb9df82846","url":"assets/js/d11188ea.0d42385a.js"},{"revision":"b898a6ad80cdea7d5411a581739c008d","url":"assets/js/d328f4f3.ab346ecc.js"},{"revision":"9847b5d6ea5457119a930603c44f5f18","url":"assets/js/d43ab880.6e3de690.js"},{"revision":"b3ce9d895c93e81521ea02597984fd7c","url":"assets/js/d4f713be.02001b51.js"},{"revision":"e5c12d6e5134613d6177fa702df5681d","url":"assets/js/d636f53c.073aef13.js"},{"revision":"8e28c26896ab45994f7bb35b0965da06","url":"assets/js/d9968053.6bcba174.js"},{"revision":"d684d4e57abc662b2f6c7ea1bf307521","url":"assets/js/e236aa13.037bb33e.js"},{"revision":"a9fcfd3d69c1786aaae8301a66120029","url":"assets/js/e2f6a895.21d5879b.js"},{"revision":"1d48932bed68e0c1e5af0b139bd45eb7","url":"assets/js/e4050dc8.515f23d9.js"},{"revision":"8538077d97f9f96f7287e3aa932c9dc6","url":"assets/js/e531813d.565d8b47.js"},{"revision":"bab0630e720b579f35eb4b74ed0474d9","url":"assets/js/e60574e1.5e60ee4f.js"},{"revision":"a0eb6669f8a160efdc53338dfc1f0442","url":"assets/js/f0227570.25b0ad87.js"},{"revision":"b0a9d82ded4a3db6917d97c7462bedd7","url":"assets/js/f0ff92c1.2fb24ba9.js"},{"revision":"f552ae75ba77c652c909844348f1f304","url":"assets/js/f3b3f30f.132ea50e.js"},{"revision":"f97fbfb5ce1ba4fdb7fc9450fc4462eb","url":"assets/js/f5fc6299.8eb248cf.js"},{"revision":"5e9ebe3f5584f2965c5881c4ec168d69","url":"assets/js/f9669315.3e5b9b9e.js"},{"revision":"15e63fede651b47d11943e54b15d64e4","url":"assets/js/fd0a4ddf.245ddb8c.js"},{"revision":"2f7559a72f66a408942b1d67dcd90ad5","url":"assets/js/fd7aa01a.bc411d9b.js"},{"revision":"8c5b392a739aff69a5b0bc1f54fa1e65","url":"assets/js/main.4091a626.js"},{"revision":"67dc65de09b7fde6a6e7148a0d4323f9","url":"assets/js/runtime~main.6fb85467.js"},{"revision":"6079d97b68cbd85958a5b6d77d5eb52d","url":"blog.html"},{"revision":"647ea864babb66cdd87cd661df99d837","url":"blog/2023/10/1/2023 年广州市政府工作报告.html"},{"revision":"989713ce8583bce7c2be78a931e291ce","url":"blog/2023/10/1/cppcc.html"},{"revision":"d8e0538ac8cd175fe11c275c4f48ff0d","url":"blog/2023/7/21/这是我的第一个博客.html"},{"revision":"69478f7d9d5ed2a0b797a0cf93f40aad","url":"blog/2023/7/24/宪法读后感.html"},{"revision":"0a5fbc406566d8f1c3101687948aff5d","url":"blog/2023/7/25/党和国家维护社会公平的措施.html"},{"revision":"5e7ece5d2f0574f6e5a8782549b74716","url":"blog/2023/7/25/参加志愿活动的体会.html"},{"revision":"e4bbea951b50ce3450ed5e3b24664196","url":"blog/2023/7/25/时政点评.html"},{"revision":"d4e17543d16bab56d7ac4262dc31b8c1","url":"blog/2023/9/25/学生会检讨书.html"},{"revision":"ed19c9e658f8a4e896e5a743118b40ab","url":"blog/2023/9/25/时政点评.html"},{"revision":"b683c90cf56a2b6b4e39b0602790ee39","url":"blog/archive.html"},{"revision":"5b59f01069209e309202bbdd66b814e1","url":"index.html"},{"revision":"01b96641bf5a9797a0c3ef365d41d3ef","url":"intro.html"},{"revision":"ee25af275ce2003a873331b2c28ac434","url":"search-index.json"},{"revision":"11f744e67f8038b702b7c4c1c59fc5fb","url":"search.html"},{"revision":"0bc4af7c8e5d37ee49b53aadbbb0e2c6","url":"化学/初识化学.html"},{"revision":"478bdce74f35cccd2b187335348c4be5","url":"化学/实验探究初步.html"},{"revision":"b253c6acb16d108e5659f69e6cacbc49","url":"化学/氧气的制备综合.html"},{"revision":"545483ba766c1737fc0b3df421bb5a0f","url":"化学/物质的变化和性质.html"},{"revision":"e5e3dd9f2ce090a1d5737301cd256b38","url":"化学/空气和氧气.html"},{"revision":"295f479be948685d1550a4de71228a63","url":"化学/走进化学实验室.html"},{"revision":"afb27daef057c78516042b7badaddb8f","url":"历史/三大改造.html"},{"revision":"5770b076f4ec022b2e1830fa6b39a62b","url":"历史/中华人民共和国成立.html"},{"revision":"a6a4f48b0ee76fe6fe0c76bddacd3604","url":"历史/伟大的历史转折.html"},{"revision":"848a6a8b9a4109faccbe91017490b292","url":"历史/土地改革.html"},{"revision":"e63e08492dfa232172f15e247ea21a6c","url":"历史/抗美援朝.html"},{"revision":"eef5c361e649f9b0257dd8703cf2b116","url":"历史/新中国工业化的起步和人民代表大会制度的确立.html"},{"revision":"7d2d1de6e3a542c0460a103138b269aa","url":"历史/经济体制改革.html"},{"revision":"a008d43cb2d1a69165a5cda35277217e","url":"历史/艰辛探索与建设成就.html"},{"revision":"c454256fe23509fee06345037fe5bc5f","url":"数学/二次函数.html"},{"revision":"46832e586fb4389d7ce540f400dc309a","url":"数学/反比例函数.html"},{"revision":"95db2b2ad69636d5c6f0125230c97cde","url":"数学/圆.html"},{"revision":"b070079712b6b63bb94ae3f1ebad4ac1","url":"数学/相似三角形.html"},{"revision":"0c872b50afb912048b4d9ae6f081c19b","url":"物理/内能.html"},{"revision":"e7cf4709e0ab8698efdf1767a82062ff","url":"物理/分子热运动.html"},{"revision":"14c54e432e81ee18cfef8a00781759c3","url":"物理/电的起源.html"},{"revision":"ca7c621765dfdef142db7209ff72f405","url":"编程/HTML/HTML 语法.html"},{"revision":"cb9332950dec28966e9fb2d59e9af988","url":"编程/JavaScript/scope 伪类.html"},{"revision":"2dd18de00f626b8bf402f76ca696656d","url":"编程/JavaScript/修改文件访问时间、修改时间.html"},{"revision":"8691e432ad8a3f4ea3259347e044f014","url":"编程/JavaScript/获得所有文件.html"},{"revision":"42256bdc209a2d19a32fd948aa22fd14","url":"编程/JavaScript/获得数据类型.html"},{"revision":"5fc97a0684b9e81bd2c51c42f37a8820","url":"编程/JavaScript/观察元素更改.html"},{"revision":"c4c7f3cb107551fd69b3ef725bc31989","url":"编程/Python/OpenCV.html"},{"revision":"a4401896efb4f6662e447d5fd0a747f8","url":"编程/Python/后台操作键鼠.html"},{"revision":"86fbe6477b2f6ca67818352f1b16e6dc","url":"编程/单文件制作.html"},{"revision":"00092d909131d0b810afc2c719e79980","url":"编程/逆向/无限 debugger.html"},{"revision":"c6a0eb6561c15be8fec4cf428d53e68a","url":"编程/逆向/模拟输入.html"},{"revision":"3bf669ca35d93bc59ef93d9b1754f06e","url":"编程/逆向/防止强制跳转.html"},{"revision":"2138c91612271dbc9bbe568a9b0b2c5f","url":"英语/周报/第 1 期.html"},{"revision":"5ecbcd1c9f2c7d73929bc924685f99d9","url":"英语/周报/第 2 期.html"},{"revision":"cbd4006c7ac1d08bc2a5ccd4394a8724","url":"英语/周报/第 5 期.html"},{"revision":"b424f7a04e4bf7b62d579ecef6fdfbd9","url":"英语/周报/第 6 期.html"},{"revision":"68c257459517af17c97e3b0552362e36","url":"英语/定语从句.html"},{"revision":"de37c42eaea6f23e6be40a8967f2a6c9","url":"英语/开学考笔记.html"},{"revision":"d525900147c8578cf9cfb6f29611c8cb","url":"语文/传统文化类作文.html"},{"revision":"e620e9d660385923be6f365df88383b1","url":"语文/梦想励志类作文.html"},{"revision":"9930b918f8d0f039f8da7f90f5e60a48","url":"语文/议论文作文.html"},{"revision":"e599d9e2064e2c88bfa488c1cd942978","url":"assets/images/02.OpenCV_10_0-b84b679683963a396c6ef274329b1a39.svg"},{"revision":"0ba6ec578f2a1859a5f23163b8134c83","url":"assets/images/02.OpenCV_12_0-bf52ea5110df2b8adef55223bd3ce024.svg"},{"revision":"bbc8f536faeba6abf037098dcf5eaee4","url":"assets/images/02.OpenCV_14_0-2c4dd39fa3ad7081e2dbce2a68b79bb2.svg"},{"revision":"c9e7b657da9d210a327a60317abca0fa","url":"assets/images/02.OpenCV_20_0-cfcac28428702553f45f876439eafddd.svg"},{"revision":"47f1fa3a7e6b3c1e27d5635c45c1e6a3","url":"assets/images/02.OpenCV_22_0-bcd91c1a984a226fc3c82badcd382423.svg"},{"revision":"b008367f66dc2cc4a96ad0ddb0fbf8c9","url":"assets/images/02.OpenCV_24_0-149ea102cc34d963c0215383a503bd4c.svg"},{"revision":"ce69be2fd1fe38d70221c04e0a2b6ca8","url":"assets/images/02.OpenCV_28_0-f9d759cbdc1a79e0a2a25a3794462c0c.svg"},{"revision":"429b3e3e80594a0a58b8bc30181fdbc8","url":"assets/images/02.OpenCV_33_0-7c67c26e03e366d59496b60bde02758a.svg"},{"revision":"4275b6be2408aa612168542d31d9e0c0","url":"assets/images/02.OpenCV_37_0-a7fea389259d030e4df3101a2351d33a.svg"},{"revision":"a9d864da3127be2309185e1b736358cf","url":"assets/images/02.OpenCV_39_0-8be33e8bd5994ad7757676dd53d79330.svg"},{"revision":"52217c649244ee6b8a4426f8d01e179a","url":"assets/images/02.OpenCV_42_0-985b006b51c7cd7c7b002065120cc541.svg"},{"revision":"d6b5df29c5d701f234525ea64639b29c","url":"assets/images/02.OpenCV_44_0-b863bf26a0b920952353fa4e623b0102.svg"},{"revision":"d4753c4ddd72a20c6271ad67c1a0278c","url":"assets/images/02.OpenCV_46_0-f868da2c1b9cff5b7fb024b9231b18b4.svg"},{"revision":"4d29b659d480c098b7831ce752f03296","url":"assets/images/02.OpenCV_48_0-1d67f955a1874861c972447b802de94e.svg"},{"revision":"4472ebbff417a53933acf494a758d006","url":"assets/images/02.OpenCV_50_0-a7a8bbf0e24cbf11847dcd467d579182.svg"},{"revision":"c80b2b9e40bcbc51c2b736590a3fb739","url":"assets/images/02.OpenCV_53_0-fed73cceab96ab6e03846c470b5c38f0.svg"},{"revision":"597f5f1293993827f170f20cca460953","url":"assets/images/02.OpenCV_54_0-c791eb1945da291da79c225ddbe1c0f6.svg"},{"revision":"68df2cc263936a2cb0898c604a51e4e7","url":"assets/images/02.OpenCV_56_0-c42eac2af0aae5243f054c27a013ae44.svg"},{"revision":"aa1b8c3222725741cf1188d108fb06d5","url":"assets/images/02.OpenCV_58_0-2706419c3e82c03fc04a594c0dcfde34.svg"},{"revision":"c19673de81afcde52ebbcd49661a3e2c","url":"assets/images/02.OpenCV_61_0-d2ff8bb4ccf6f1affaad7524d9e60e70.svg"},{"revision":"84bd0526c62621765c2e727f6be6abd9","url":"assets/images/02.OpenCV_63_0-1a5c867dc81ab2f39b853782428ba9b9.svg"},{"revision":"fbebaa528e6f8b00ab1cb6b2047ee03d","url":"assets/images/02.OpenCV_65_0-527018310b40a26f2285514e3eb224e5.svg"},{"revision":"b2c5c67fdf935c4db90382dc3a6d65f9","url":"assets/images/02.OpenCV_67_0-04fa29637e18f0ce935ce9a759b8dcd3.svg"},{"revision":"3268f6e40a6a4649465fb91f91c446fa","url":"assets/images/02.OpenCV_70_0-4a860f6cbca2d9a92ea8cedd01ffda0b.svg"},{"revision":"c660290e32ebb9d79999ab3360f018c6","url":"assets/images/Enter Output File Name-bc389f8259114522178ad5fd9066707c.png"},{"revision":"073f03dcc796d2c3e79715c3e0e72b0c","url":"assets/images/tmp5700-448f4c2d9980edfbd60c136b98045ab2.png"},{"revision":"b6bbefaa79dc71ab75c5f1c32e465ed1","url":"assets/images/tmp9D37-adf40bc9e2b74439d948764d8bec1994.png"},{"revision":"1a817bbf162c683b8dae7b4fdede1d04","url":"assets/images/tmpC4CC-ae0b7c7cef063f6dddc85193c4222f4c.png"},{"revision":"885538fce225b48e717faa46c43f0305","url":"assets/images/一线三垂直相似模型-3fec0c3f75015ca3735577ce4d56a76f.jpg"},{"revision":"286a042db4174d32bf98819d7370b19a","url":"assets/images/二次函数一般式求顶点坐标-ed898d00c303860dd83b3b4085e7f6b8.png"},{"revision":"a116654754efe69622e0af2134bc9894","url":"assets/images/其他常见化学仪器-36fc814055d1bf1d275b01c0b59963af.jpg"},{"revision":"a00f59435b3137db7e192c3d9a9ec3c2","url":"assets/images/化合反应与氧化反应的关系示意图-37a2d86b9ed6d92489989f24f7f13ec0.jpg"},{"revision":"d50e8eed0ae0f5d8b243fe70141241f8","url":"assets/images/双阈值检查示意图-2b48c0bd93d71f997ff47eb68c66b83e.png"},{"revision":"e4b7a49d0ee6276acbebea24827d2452","url":"assets/images/发生装置的选择-fd558f446958dae86dda29c6974291fe.jpg"},{"revision":"11b95d6ec7ee8431be7628d7aad92f76","url":"assets/images/圆周角-7bdc00bdced36f5cea12c2bc4a0bed3a.jpg"},{"revision":"6973e1b58ed70260f3ea0a67d061a6a5","url":"assets/images/圆周角定理推理2-57904120c0af7ed55d2348a621c50fc6.jpg"},{"revision":"afe51a69e02223467431d4d666afc2c5","url":"assets/images/圆周角定理推论3-d55781ccc22172b7bb6cc0c3a3491cbe.jpg"},{"revision":"6556a09f51943685451c7ea9472cd9fe","url":"assets/images/垂径定理-675902440dc57391cdd240d891484606.jpg"},{"revision":"c24c437282a9cacd54b8ee059d6a2284","url":"assets/images/子母火焰-1d9dd12a68a357ec3b1e1bd233aa3f18.jpg"},{"revision":"25ba0e9a319e5eebf0ef1f5becf5bae9","url":"assets/images/平行线分线段成比例例子-e27694301a61a09aa4878ec1b7e54898.jpg"},{"revision":"cafe4edc1ef675c06886e9f770900fad","url":"assets/images/平行线分线段成比例示意图-a1105c951d150970dafba392ef8da922.jpg"},{"revision":"8022b045ebe9b7f972d897b9dd5fece6","url":"assets/images/开启文件压缩-9cb67c43b4f261f35417d8f8d7276e52.png"},{"revision":"078098daafb08c838d2b68b9a1f6b783","url":"assets/images/弦-b13e6e163405e5dc98517911b5e6bd9b.jpg"},{"revision":"052ccc3e04b11c21b0416749c204df03","url":"assets/images/弦心距-d3ec3a3b632a8848fbbd1a0c9beeb80e.jpg"},{"revision":"e8441197b03bb02c41646260a26c1dae","url":"assets/images/手拉手模型-34d6d9485c6abce2ec5851055066fa00.jpg"},{"revision":"81e9d3b70c282cfb2c6a6dc6731080eb","url":"assets/images/拖入文件-0d69303ca4553a187e3bdba2381a2fc4.png"},{"revision":"56574b01a054d58f74bb46fa3968db67","url":"assets/images/新界面-6a57f49104ec30ddd1e6de5496d52505.png"},{"revision":"f19d1b148c1b480cd05b3e62ad00b57c","url":"assets/images/点击 Browse-020a1c2fdd280be72929abf9cde0745d.png"},{"revision":"ea1f45ede7337c17cfdbf12772946e5b","url":"assets/images/点击 Process-c72c4a4d9bb6db4fddc0c7f5a5f469b9.png"},{"revision":"215e6faef16499e29c562a95e7fe1ee2","url":"assets/images/相似三角形的判定-6c8704d2ebcdc54b25df4683a3ec8569.jpg"},{"revision":"4c19aacb08cc2598cb1cf96100a95303","url":"assets/images/空气中氧气含量的测定示意图-7acd02b69e7a9c38d1d10722e6b46467.jpg"},{"revision":"ea687c92b9d4ef3decb0842f7d0c5cbe","url":"assets/images/软件界面-773c19ce43f33cb70f9fd66e7925619c.png"},{"revision":"1fc786b2d982f2860e24cfd3e0546cd6","url":"assets/images/鸡在河上-8d48de6ac081f5ccac372507f47b7757.jpg"},{"revision":"cd0d762734515370061697c8485c15bc","url":"img/docusaurus-1024.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"444099656c08bb0fe138f2a750a6cabd","url":"img/profile_photo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();