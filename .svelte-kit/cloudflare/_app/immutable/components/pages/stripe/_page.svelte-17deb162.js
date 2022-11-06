import{S as F,i as U,s as x,k as _,a as $,a0 as M,l as E,m as T,h as f,c as G,a2 as J,n as b,P as D,b as y,f as g,B as O,o as q,q as H,r as V,R as B,T as K}from"../../../chunks/index-2bdb53b3.js";import{g as Y}from"../../../chunks/public-fe26cbe2.js";import{e as j,f as X}from"../../../chunks/index-2fe84d9c.js";import{_ as z,C as W,r as I,c as Q,g as w,d as Z,e as ee,F as te,b as ne}from"../../../chunks/firebase-ac77fa18.js";/**
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
 */const re="type.googleapis.com/google.protobuf.Int64Value",ie="type.googleapis.com/google.protobuf.UInt64Value";function R(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function N(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>N(e));if(typeof t=="function"||typeof t=="object")return R(t,e=>N(e));throw new Error("Data cannot be encoded in JSON: "+t)}function m(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case re:case ie:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>m(e)):typeof t=="function"||typeof t=="object"?R(t,e=>m(e)):t}/**
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
 */const A="functions";/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class d extends te{constructor(e,n,i){super(`${A}/${e}`,n||""),this.details=i}}function se(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function oe(t,e){let n=se(t),i=n,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!v[o])return new d("internal","internal");n=v[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=m(s))}}catch{}return n==="ok"?null:new d(n,i,s)}/**
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
 */class ae{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
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
 */const k="us-central1";function ce(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new d("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class ue{constructor(e,n,i,s,r=k,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ae(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=k}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function le(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function fe(t,e,n){return i=>pe(t,e,i,n||{})}async function de(t,e,n,i){n["Content-Type"]="application/json";let s;try{s=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function pe(t,e,n,i){const s=t._url(e);return he(t,s,n,i)}async function he(t,e,n,i){n=N(n);const s={data:n},r={},o=await t.contextProvider.getContext();o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,l=ce(a),c=await Promise.race([de(e,s,r,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new d("cancelled","Firebase Functions instance was deleted.");const h=oe(c.status,c.json);if(h)throw h;if(!c.json)throw new d("internal","Response is not valid JSON object.");let u=c.json.data;if(typeof u>"u"&&(u=c.json.result),typeof u>"u")throw new d("internal","Response is missing data field.");return{data:m(u)}}const C="@firebase/functions",S="0.8.7";/**
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
 */const me="auth-internal",ge="app-check-internal",_e="messaging-internal";function Ee(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(me),a=i.getProvider(_e),l=i.getProvider(ge);return new ue(r,o,a,l,s,t)};z(new W(A,n,"PUBLIC").setMultipleInstances(!0)),I(C,S,e),I(C,S,"esm2017")}/**
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
 */function Te(t=ee(),e=k){const i=Q(w(t),A).getImmediate({identifier:e}),s=Z("functions");return s&&ye(i,...s),i}function ye(t,e,n){le(w(t),e,n)}function Ne(t,e,n){return fe(w(t),e,n)}Ee(fetch.bind(self));function P(t){let e,n,i;return{c(){e=_("div"),n=H("Just a moment"),this.h()},l(s){e=E(s,"DIV",{class:!0});var r=T(e);n=V(r,"Just a moment"),r.forEach(f),this.h()},h(){b(e,"class","font-Poppins text-6xl text-center pt-20 animate-bounce loading svelte-tci3t6")},m(s,r){y(s,e,r),D(e,n)},p(s,r){},i(s){i||B(()=>{i=K(e,X,{y:-400,duration:2e3,easing:j}),i.start()})},o:O,d(s){s&&f(e)}}}function ke(t){let e,n,i,s,r=t[0]&&t[1]&&t[2]&&P();return{c(){e=_("script"),i=$(),s=_("main"),r&&r.c(),this.h()},l(o){const a=M("svelte-qn95fl",document.head);e=E(a,"SCRIPT",{src:!0});var l=T(e);l.forEach(f),a.forEach(f),i=G(o),s=E(o,"MAIN",{});var c=T(s);r&&r.l(c),c.forEach(f),this.h()},h(){document.title="Stripe Firebase Demo",J(e.src,n="https://js.stripe.com/v3/")||b(e,"src",n)},m(o,a){D(document.head,e),y(o,i,a),y(o,s,a),r&&r.m(s,null)},p(o,[a]){o[0]&&o[1]&&o[2]?r?a&7&&g(r,1):(r=P(),r.c(),g(r,1),r.m(s,null)):r&&(r.d(1),r=null)},i(o){g(r)},o:O,d(o){f(e),o&&f(i),o&&f(s),r&&r.d()}}}function we(t,e,n){let i=!1,s,r,o=!1,a,l;const c=Te(ne);return q(async()=>{n(0,i=!0),s=window.location.search.slice(1),window.history.replaceState({},"",`/${btoa(s)}`),h();async function h(){try{const u=new URLSearchParams(s);l=u.get("invitee_email"),n(2,a=u.get("answer_1").match(/\d+(\.\d{1,2})/)[0]*60),u.get("answer_2").toLowerCase().includes("yes")&&(o=!0);for(let p of["classico","mock"])if(u.get("event_type_name").toLowerCase().includes(p)){n(1,r=p);break}if(r&&a){const p=await Ne(c,"stripeSessionIdGCF"),{data:L}=await p({email:l,extra:o,service:r,quantity:a});Stripe(Y).redirectToCheckout({sessionId:L.id})}}catch(u){console.log("stripeRedirectToCheckout failed",u)}}}),[i,r,a]}class Se extends F{constructor(e){super(),U(this,e,we,ke,x,{})}}export{Se as default};
