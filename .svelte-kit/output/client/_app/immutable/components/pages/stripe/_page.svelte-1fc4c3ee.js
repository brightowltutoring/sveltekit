import{S as x,i as U,s as $,k as g,a as M,a0 as q,l as _,m as E,h as f,c as G,a2 as J,n as b,P as D,b as y,f as m,B as O,o as H,q as V,r as B,R as K,T as Y}from"../../../chunks/index-2bdb53b3.js";import{g as j}from"../../../chunks/public-fe26cbe2.js";import{e as X,f as z}from"../../../chunks/index-2fe84d9c.js";import{_ as W,C as Q,r as I,c as Z,g as k,d as ee,e as te,F as ne,b as re}from"../../../chunks/firebase-ac77fa18.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="type.googleapis.com/google.protobuf.Int64Value",se="type.googleapis.com/google.protobuf.UInt64Value";function R(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function T(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>T(e));if(typeof t=="function"||typeof t=="object")return R(t,e=>T(e));throw new Error("Data cannot be encoded in JSON: "+t)}function p(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case ie:case se:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>p(e)):typeof t=="function"||typeof t=="object"?R(t,e=>p(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class h extends ne{constructor(e,n,i){super(`${w}/${e}`,n||""),this.details=i}}function oe(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ae(t,e){let n=oe(t),i=n,r;try{const a=e&&e.error;if(a){const s=a.status;if(typeof s=="string"){if(!v[s])return new h("internal","internal");n=v[s],i=s}const o=a.message;typeof o=="string"&&(i=o),r=a.details,r!==void 0&&(r=p(r))}}catch{}return n==="ok"?null:new h(n,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="us-central1";function ue(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new h("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class le{constructor(e,n,i,r,a=N,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new ce(n,i,r),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(a);this.customDomain=o.origin,this.region=N}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function fe(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function de(t,e,n){return i=>pe(t,e,i,n||{})}async function he(t,e,n,i){n["Content-Type"]="application/json";let r;try{r=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await r.json()}catch{}return{status:r.status,json:a}}function pe(t,e,n,i){const r=t._url(e);return me(t,r,n,i)}async function me(t,e,n,i){n=T(n);const r={data:n},a={},s=await t.contextProvider.getContext();s.authToken&&(a.Authorization="Bearer "+s.authToken),s.messagingToken&&(a["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=s.appCheckToken);const o=i.timeout||7e4,c=ue(o),u=await Promise.race([he(e,r,a,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new h("cancelled","Firebase Functions instance was deleted.");const l=ae(u.status,u.json);if(l)throw l;if(!u.json)throw new h("internal","Response is not valid JSON object.");let d=u.json.data;if(typeof d>"u"&&(d=u.json.result),typeof d>"u")throw new h("internal","Response is missing data field.");return{data:p(d)}}const C="@firebase/functions",S="0.8.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="auth-internal",_e="app-check-internal",Ee="messaging-internal";function ye(t,e){const n=(i,{instanceIdentifier:r})=>{const a=i.getProvider("app").getImmediate(),s=i.getProvider(ge),o=i.getProvider(Ee),c=i.getProvider(_e);return new le(a,s,o,c,r,t)};W(new Q(w,n,"PUBLIC").setMultipleInstances(!0)),I(C,S,e),I(C,S,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t=te(),e=N){const i=Z(k(t),w).getImmediate({identifier:e}),r=ee("functions");return r&&Ne(i,...r),i}function Ne(t,e,n){fe(k(t),e,n)}function ke(t,e,n){return de(k(t),e,n)}ye(fetch.bind(self));function P(t){let e,n,i;return{c(){e=g("div"),n=V("Just a moment"),this.h()},l(r){e=_(r,"DIV",{class:!0});var a=E(e);n=B(a,"Just a moment"),a.forEach(f),this.h()},h(){b(e,"class","font-Poppins text-6xl text-center pt-20 animate-bounce loading svelte-tci3t6")},m(r,a){y(r,e,a),D(e,n)},p(r,a){},i(r){i||K(()=>{i=Y(e,z,{y:-400,duration:2e3,easing:X}),i.start()})},o:O,d(r){r&&f(e)}}}function we(t){let e,n,i,r,a=t[0]&&t[1].includes("service")&&t[1].includes("quantity"),s=a&&P();return{c(){e=g("script"),i=M(),r=g("main"),s&&s.c(),this.h()},l(o){const c=q("svelte-qn95fl",document.head);e=_(c,"SCRIPT",{src:!0});var u=E(e);u.forEach(f),c.forEach(f),i=G(o),r=_(o,"MAIN",{});var l=E(r);s&&s.l(l),l.forEach(f),this.h()},h(){document.title="Stripe Firebase Demo",J(e.src,n="https://js.stripe.com/v3/")||b(e,"src",n)},m(o,c){D(document.head,e),y(o,i,c),y(o,r,c),s&&s.m(r,null)},p(o,[c]){c&3&&(a=o[0]&&o[1].includes("service")&&o[1].includes("quantity")),a?s?c&3&&m(s,1):(s=P(),s.c(),m(s,1),s.m(r,null)):s&&(s.d(1),s=null)},i(o){m(s)},o:O,d(o){f(e),o&&f(i),o&&f(r),s&&s.d()}}}function Ae(t,e,n){let i=!1,r;const a=Te(re);return H(async()=>{n(0,i=!0),n(1,r=window.location.search.slice(1)),window.history.replaceState({},"",`/${btoa(r)}`),s();async function s(){try{const o=new URLSearchParams(r),c=o.get("email"),u=o.get("extra"),l=o.get("service"),d=o.get("quantity"),A=o.get("dollar_hourly_rate");if(l&&d){const F=await ke(a,"stripeSessionIdGCF"),{data:L}=await F({email:c,extra:u,service:l,quantity:d,dollar_hourly_rate:A});Stripe(j).redirectToCheckout({sessionId:L.id})}}catch(o){console.log("stripeRedirectToCheckout failed",o)}}}),[i,r]}class Pe extends x{constructor(e){super(),U(this,e,Ae,we,$,{})}}export{Pe as default};
