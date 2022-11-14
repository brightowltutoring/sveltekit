import{S as $,i as G,s as V,k as E,a as H,a0 as q,l as N,m as T,h as f,c as B,a2 as J,n as F,P as k,b as w,f as _,B as U,o as j,q as S,r as P,u as K,V as Y,W as X}from"../../../chunks/index-abd81730.js";import{PUBLIC_STRIPE_KEY as z}from"../../../chunks/public-e0b14f20.js";import{e as W,f as Q}from"../../../chunks/index-2bc37e0b.js";import{_ as Z,C as ee,r as b,c as te,g as C,d as ne,e as re,F as ie,b as se}from"../../../chunks/firebase-ac905731.js";/**
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
 */const oe="type.googleapis.com/google.protobuf.Int64Value",ae="type.googleapis.com/google.protobuf.UInt64Value";function M(e,t){const n={};for(const i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}function y(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>y(t));if(typeof e=="function"||typeof e=="object")return M(e,t=>y(t));throw new Error("Data cannot be encoded in JSON: "+e)}function g(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case oe:case ae:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>g(t)):typeof e=="function"||typeof e=="object"?M(e,t=>g(t)):e}/**
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
 */const I="functions";/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends ie{constructor(t,n,i){super(`${I}/${t}`,n||""),this.details=i}}function ce(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ue(e,t){let n=ce(e),i=n,o;try{const r=t&&t.error;if(r){const s=r.status;if(typeof s=="string"){if(!D[s])return new p("internal","internal");n=D[s],i=s}const a=r.message;typeof a=="string"&&(i=a),o=r.details,o!==void 0&&(o=g(o))}}catch{}return n==="ok"?null:new p(n,i,o)}/**
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
 */class le{constructor(t,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(o=>this.auth=o,()=>{}),this.messaging||n.get().then(o=>this.messaging=o,()=>{}),this.appCheck||i.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:i}}}/**
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
 */const A="us-central1";function fe(e){let t=null;return{promise:new Promise((n,i)=>{t=setTimeout(()=>{i(new p("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class de{constructor(t,n,i,o,r=A,s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new le(n,i,o),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=A}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function pe(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function he(e,t,n){return i=>ge(e,t,i,n||{})}async function me(e,t,n,i){n["Content-Type"]="application/json";let o;try{o=await i(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let r=null;try{r=await o.json()}catch{}return{status:o.status,json:r}}function ge(e,t,n,i){const o=e._url(t);return _e(e,o,n,i)}async function _e(e,t,n,i){n=y(n);const o={data:n},r={},s=await e.contextProvider.getContext();s.authToken&&(r.Authorization="Bearer "+s.authToken),s.messagingToken&&(r["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=s.appCheckToken);const a=i.timeout||7e4,u=fe(a),c=await Promise.race([me(t,o,r,e.fetchImpl),u.promise,e.cancelAllRequests]);if(u.cancel(),!c)throw new p("cancelled","Firebase Functions instance was deleted.");const h=ue(c.status,c.json);if(h)throw h;if(!c.json)throw new p("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new p("internal","Response is missing data field.");return{data:g(d)}}const O="@firebase/functions",L="0.8.7";/**
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
 */const Ee="auth-internal",Ne="app-check-internal",Te="messaging-internal";function ke(e,t){const n=(i,{instanceIdentifier:o})=>{const r=i.getProvider("app").getImmediate(),s=i.getProvider(Ee),a=i.getProvider(Te),u=i.getProvider(Ne);return new de(r,s,a,u,o,e)};Z(new ee(I,n,"PUBLIC").setMultipleInstances(!0)),b(O,L,t),b(O,L,"esm2017")}/**
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
 */function we(e=re(),t=A){const i=te(C(e),I).getImmediate({identifier:t}),o=ne("functions");return o&&ye(i,...o),i}function ye(e,t,n){pe(C(e),t,n)}function Ae(e,t,n){return he(C(e),t,n)}ke(fetch.bind(self));function R(e){let t,n,i,o;return{c(){t=E("div"),n=S("Almost there "),i=S(e[3]),this.h()},l(r){t=N(r,"DIV",{class:!0});var s=T(t);n=P(s,"Almost there "),i=P(s,e[3]),s.forEach(f),this.h()},h(){F(t,"class","font-Poppins text-5xl text-center pt-20 animate-bounce loading svelte-tci3t6")},m(r,s){w(r,t,s),k(t,n),k(t,i)},p(r,s){e=r,s&8&&K(i,e[3])},i(r){o||Y(()=>{o=X(t,Q,{y:-400,duration:2e3,easing:W}),o.start()})},o:U,d(r){r&&f(t)}}}function Ce(e){let t,n,i,o,r=e[0]&&e[1]&&e[2]&&R(e);return{c(){t=E("script"),i=H(),o=E("main"),r&&r.c(),this.h()},l(s){const a=q("svelte-1jxl9zf",document.head);t=N(a,"SCRIPT",{src:!0});var u=T(t);u.forEach(f),a.forEach(f),i=B(s),o=N(s,"MAIN",{});var c=T(o);r&&r.l(c),c.forEach(f),this.h()},h(){document.title="Stripe Checkout",J(t.src,n="https://js.stripe.com/v3/")||F(t,"src",n)},m(s,a){k(document.head,t),w(s,i,a),w(s,o,a),r&&r.m(o,null)},p(s,[a]){s[0]&&s[1]&&s[2]?r?(r.p(s,a),a&7&&_(r,1)):(r=R(s),r.c(),_(r,1),r.m(o,null)):r&&(r.d(1),r=null)},i(s){_(r)},o:U,d(s){f(t),s&&f(i),s&&f(o),r&&r.d()}}}function Ie(e,t,n){let i,o=!1,r,s,a,u,c;const h=we(se);return j(async()=>{n(0,o=!0),r=window.location.search.slice(1),window.history.replaceState({},"",`/${btoa(r)}`),d();async function d(){try{const l=new URLSearchParams(r),v=l.get("invitee_full_name").split(" ")[0].toLowerCase();n(3,i=v.charAt(0).toUpperCase()+v.slice(1)),c=l.get("invitee_email"),n(2,u=l.get("answer_1").match(/\d+(\.\d{1,2})/)[0]*60),l.get("answer_2")&&(a=!0);for(let m of["classico","mock"])if(l.get("event_type_name").toLowerCase().includes(m)){n(1,s=m);break}if(s&&u){const m=Ae(h,"stripeSessionIdGCF"),{data:x}=await m({email:c,extra:a,service:s,quantity:u});Stripe(z).redirectToCheckout({sessionId:x.id})}}catch(l){console.log("stripeRedirectToCheckout failed",l)}}}),n(3,i=""),[o,s,u,i]}class Oe extends ${constructor(t){super(),G(this,t,Ie,Ce,V,{})}}export{Oe as default};
