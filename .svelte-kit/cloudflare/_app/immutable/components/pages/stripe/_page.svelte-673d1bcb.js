import{S as M,i as G,s as q,k as _,a as J,a0 as H,l as E,m as w,h as f,c as V,a2 as B,n as O,P as R,b as y,f as g,B as L,o as K,q as Y,r as j,R as X,T as z}from"../../../chunks/index-2bdb53b3.js";import{g as W}from"../../../chunks/public-fe26cbe2.js";import{e as Q,f as Z}from"../../../chunks/index-2fe84d9c.js";import{_ as ee,C as te,r as C,c as ne,g as k,d as re,e as ie,F as se,b as oe}from"../../../chunks/firebase-ac77fa18.js";/**
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
 */const ae="type.googleapis.com/google.protobuf.Int64Value",ce="type.googleapis.com/google.protobuf.UInt64Value";function F(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function T(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>T(e));if(typeof t=="function"||typeof t=="object")return F(t,e=>T(e));throw new Error("Data cannot be encoded in JSON: "+t)}function m(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case ae:case ce:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>m(e)):typeof t=="function"||typeof t=="object"?F(t,e=>m(e)):t}/**
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
 */const v="functions";/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class d extends se{constructor(e,n,i){super(`${v}/${e}`,n||""),this.details=i}}function ue(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function le(t,e){let n=ue(t),i=n,r;try{const a=e&&e.error;if(a){const s=a.status;if(typeof s=="string"){if(!S[s])return new d("internal","internal");n=S[s],i=s}const o=a.message;typeof o=="string"&&(i=o),r=a.details,r!==void 0&&(r=m(r))}}catch{}return n==="ok"?null:new d(n,i,r)}/**
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
 */class fe{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
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
 */const N="us-central1";function de(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new d("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class pe{constructor(e,n,i,r,a=N,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new fe(n,i,r),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(a);this.customDomain=o.origin,this.region=N}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function he(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function me(t,e,n){return i=>_e(t,e,i,n||{})}async function ge(t,e,n,i){n["Content-Type"]="application/json";let r;try{r=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let a=null;try{a=await r.json()}catch{}return{status:r.status,json:a}}function _e(t,e,n,i){const r=t._url(e);return Ee(t,r,n,i)}async function Ee(t,e,n,i){n=T(n);const r={data:n},a={},s=await t.contextProvider.getContext();s.authToken&&(a.Authorization="Bearer "+s.authToken),s.messagingToken&&(a["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(a["X-Firebase-AppCheck"]=s.appCheckToken);const o=i.timeout||7e4,c=de(o),u=await Promise.race([ge(e,r,a,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new d("cancelled","Firebase Functions instance was deleted.");const l=le(u.status,u.json);if(l)throw l;if(!u.json)throw new d("internal","Response is not valid JSON object.");let p=u.json.data;if(typeof p>"u"&&(p=u.json.result),typeof p>"u")throw new d("internal","Response is missing data field.");return{data:m(p)}}const P="@firebase/functions",b="0.8.7";/**
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
 */const we="auth-internal",ye="app-check-internal",Te="messaging-internal";function Ne(t,e){const n=(i,{instanceIdentifier:r})=>{const a=i.getProvider("app").getImmediate(),s=i.getProvider(we),o=i.getProvider(Te),c=i.getProvider(ye);return new pe(a,s,o,c,r,t)};ee(new te(v,n,"PUBLIC").setMultipleInstances(!0)),C(P,b,e),C(P,b,"esm2017")}/**
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
 */function ke(t=ie(),e=N){const i=ne(k(t),v).getImmediate({identifier:e}),r=re("functions");return r&&ve(i,...r),i}function ve(t,e,n){he(k(t),e,n)}function Ae(t,e,n){return me(k(t),e,n)}Ne(fetch.bind(self));function D(t){let e,n,i;return{c(){e=_("div"),n=Y("Just a moment"),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=w(e);n=j(a,"Just a moment"),a.forEach(f),this.h()},h(){O(e,"class","font-Poppins text-6xl text-center pt-20 animate-bounce loading svelte-tci3t6")},m(r,a){y(r,e,a),R(e,n)},p(r,a){},i(r){i||X(()=>{i=z(e,Z,{y:-400,duration:2e3,easing:Q}),i.start()})},o:L,d(r){r&&f(e)}}}function Ie(t){let e,n,i,r,a=t[0]&&t[1].includes("service")&&t[1].includes("quantity"),s=a&&D();return{c(){e=_("script"),i=J(),r=_("main"),s&&s.c(),this.h()},l(o){const c=H("svelte-qn95fl",document.head);e=E(c,"SCRIPT",{src:!0});var u=w(e);u.forEach(f),c.forEach(f),i=V(o),r=E(o,"MAIN",{});var l=w(r);s&&s.l(l),l.forEach(f),this.h()},h(){document.title="Stripe Firebase Demo",B(e.src,n="https://js.stripe.com/v3/")||O(e,"src",n)},m(o,c){R(document.head,e),y(o,i,c),y(o,r,c),s&&s.m(r,null)},p(o,[c]){c&3&&(a=o[0]&&o[1].includes("service")&&o[1].includes("quantity")),a?s?c&3&&g(s,1):(s=D(),s.c(),g(s,1),s.m(r,null)):s&&(s.d(1),s=null)},i(o){g(s)},o:L,d(o){f(e),o&&f(i),o&&f(r),s&&s.d()}}}function Ce(t,e,n){let i=!1,r;const a=ke(oe);return K(async()=>{n(0,i=!0),n(1,r=window.location.search.slice(1)),window.history.replaceState({},"",`/${btoa(r)}`),s();async function s(){try{const o=new URLSearchParams(r),c=o.get("invitee_email"),u=o.get("event_type_name");let l;for(let h of["classico","mock"])if(u.toLowerCase().includes(h)){l=h;break}const A=o.get("answer_1").match(/\d+(\.\d{1,2})/)[0]*60,x=o.get("answer_2");let I;if(x.toLowerCase().includes("yes")&&(I=!0),l&&A){const h=await Ae(a,"stripeSessionIdGCF"),{data:$}=await h({email:c,extra:I,service:l,quantity:A});Stripe(W).redirectToCheckout({sessionId:$.id})}}catch(o){console.log("stripeRedirectToCheckout failed",o)}}}),[i,r]}class Oe extends M{constructor(e){super(),G(this,e,Ce,Ie,q,{})}}export{Oe as default};
