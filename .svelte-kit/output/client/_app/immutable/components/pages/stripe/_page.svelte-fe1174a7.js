import{S as L,i as x,s as U,k as g,a as $,a0 as M,l as _,m as E,h as f,c as q,a2 as G,n as b,P as D,b as T,f as m,B as O,o as J,q as H,r as V,R as B,T as K}from"../../../chunks/index-2bdb53b3.js";import{g as Y}from"../../../chunks/public-fe26cbe2.js";import{e as j,f as X}from"../../../chunks/index-2fe84d9c.js";import{_ as z,C as W,r as I,c as Q,g as k,d as Z,e as ee,F as te,b as ne}from"../../../chunks/firebase-ac77fa18.js";/**
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
 */const ie="type.googleapis.com/google.protobuf.Int64Value",re="type.googleapis.com/google.protobuf.UInt64Value";function R(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function y(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>y(e));if(typeof t=="function"||typeof t=="object")return R(t,e=>y(e));throw new Error("Data cannot be encoded in JSON: "+t)}function h(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case ie:case re:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>h(e)):typeof t=="function"||typeof t=="object"?R(t,e=>h(e)):t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends te{constructor(e,n,r){super(`${w}/${e}`,n||""),this.details=r}}function se(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function oe(t,e){let n=se(t),r=n,i;try{const a=e&&e.error;if(a){const s=a.status;if(typeof s=="string"){if(!v[s])return new p("internal","internal");n=v[s],r=s}const o=a.message;typeof o=="string"&&(r=o),i=a.details,i!==void 0&&(i=h(i))}}catch{}return n==="ok"?null:new p(n,r,i)}/**
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
 */class ae{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const N="us-central1";function ce(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new p("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class ue{constructor(e,n,r,i,a=N,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new ae(n,r,i),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(a);this.customDomain=o.origin,this.region=N}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function le(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function fe(t,e,n){return r=>pe(t,e,r,n||{})}async function de(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await i.json()}catch{}return{status:i.status,json:a}}function pe(t,e,n,r){const i=t._url(e);return he(t,i,n,r)}async function he(t,e,n,r){n=y(n);const i={data:n},a={},s=await t.contextProvider.getContext();s.authToken&&(a.Authorization="Bearer "+s.authToken),s.messagingToken&&(a["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=s.appCheckToken);const o=r.timeout||7e4,c=ce(o),u=await Promise.race([de(e,i,a,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new p("cancelled","Firebase Functions instance was deleted.");const l=oe(u.status,u.json);if(l)throw l;if(!u.json)throw new p("internal","Response is not valid JSON object.");let d=u.json.data;if(typeof d>"u"&&(d=u.json.result),typeof d>"u")throw new p("internal","Response is missing data field.");return{data:h(d)}}const C="@firebase/functions",S="0.8.7";/**
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
 */const me="auth-internal",ge="app-check-internal",_e="messaging-internal";function Ee(t,e){const n=(r,{instanceIdentifier:i})=>{const a=r.getProvider("app").getImmediate(),s=r.getProvider(me),o=r.getProvider(_e),c=r.getProvider(ge);return new ue(a,s,o,c,i,t)};z(new W(w,n,"PUBLIC").setMultipleInstances(!0)),I(C,S,e),I(C,S,"esm2017")}/**
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
 */function Te(t=ee(),e=N){const r=Q(k(t),w).getImmediate({identifier:e}),i=Z("functions");return i&&ye(r,...i),r}function ye(t,e,n){le(k(t),e,n)}function Ne(t,e,n){return fe(k(t),e,n)}Ee(fetch.bind(self));function P(t){let e,n,r;return{c(){e=g("div"),n=H("Just a moment"),this.h()},l(i){e=_(i,"DIV",{class:!0});var a=E(e);n=V(a,"Just a moment"),a.forEach(f),this.h()},h(){b(e,"class","font-Poppins text-6xl text-center pt-20 animate-bounce loading svelte-tci3t6")},m(i,a){T(i,e,a),D(e,n)},p(i,a){},i(i){r||B(()=>{r=K(e,X,{y:-400,duration:2e3,easing:j}),r.start()})},o:O,d(i){i&&f(e)}}}function ke(t){let e,n,r,i,a=t[0]&&t[1].includes("service")&&t[1].includes("quantity"),s=a&&P();return{c(){e=g("script"),r=$(),i=g("main"),s&&s.c(),this.h()},l(o){const c=M("svelte-qn95fl",document.head);e=_(c,"SCRIPT",{src:!0});var u=E(e);u.forEach(f),c.forEach(f),r=q(o),i=_(o,"MAIN",{});var l=E(i);s&&s.l(l),l.forEach(f),this.h()},h(){document.title="Stripe Firebase Demo",G(e.src,n="https://js.stripe.com/v3/")||b(e,"src",n)},m(o,c){D(document.head,e),T(o,r,c),T(o,i,c),s&&s.m(i,null)},p(o,[c]){c&3&&(a=o[0]&&o[1].includes("service")&&o[1].includes("quantity")),a?s?c&3&&m(s,1):(s=P(),s.c(),m(s,1),s.m(i,null)):s&&(s.d(1),s=null)},i(o){m(s)},o:O,d(o){f(e),o&&f(r),o&&f(i),s&&s.d()}}}function we(t,e,n){let r=!1,i;const a=Te(ne);return J(async()=>{n(0,r=!0),n(1,i=window.location.search.slice(1)),window.history.replaceState({},"",`/${btoa(i)}`),s();async function s(){try{const o=new URLSearchParams(i),c=o.get("email"),u=o.get("extra"),l=o.get("service"),d=o.get("quantity");if(l&&d){const A=await Ne(a,"stripeSessionIdGCF"),{data:F}=await A({email:c,extra:u,service:l,quantity:d});Stripe(Y).redirectToCheckout({sessionId:F.id})}}catch(o){console.log("stripeRedirectToCheckout failed",o)}}}),[r,i]}class Se extends L{constructor(e){super(),x(this,e,we,ke,U,{})}}export{Se as default};
