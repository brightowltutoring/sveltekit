import{S as ne,i as re,s as ie,k as j,l as q,m as H,h as y,b as V,g as T,D as J,o as oe,q as O,r as D,n as se,H as L,u as ae,M as ce,N as ue}from"../chunks/index.d162f37a.js";import{_ as le,C as de,r as F,b as fe,g as I,c as pe,d as he,F as me,e as ge}from"../chunks/firebase.42ff2f5b.js";import{PUBLIC_STRIPE_KEY as ve}from"../chunks/public.ec3b3561.js";import{e as we,f as ye}from"../chunks/index.3c701c7f.js";/**
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
 */const _e="type.googleapis.com/google.protobuf.Int64Value",Se="type.googleapis.com/google.protobuf.UInt64Value";function B(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function b(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>b(e));if(typeof t=="function"||typeof t=="object")return B(t,e=>b(e));throw new Error("Data cannot be encoded in JSON: "+t)}function _(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case _e:case Se:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>_(e)):typeof t=="function"||typeof t=="object"?B(t,e=>_(e)):t}/**
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
 */const P="functions";/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends me{constructor(e,n,r){super(`${P}/${e}`,n||""),this.details=r}}function Ee(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Te(t,e){let n=Ee(t),r=n,i;try{const o=e&&e.error;if(o){const s=o.status;if(typeof s=="string"){if(!R[s])return new f("internal","internal");n=R[s],r=s}const a=o.message;typeof a=="string"&&(r=a),i=o.details,i!==void 0&&(i=_(i))}}catch{}return n==="ok"?null:new f(n,r,i)}/**
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
 */class be{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
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
 */const N="us-central1";function Ne(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new f("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Ae{constructor(e,n,r,i,o=N,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new be(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(o);this.customDomain=a.origin,this.region=N}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function ke(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function Ie(t,e,n){return r=>Ce(t,e,r,n||{})}async function Pe(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}function Ce(t,e,n,r){const i=t._url(e);return Oe(t,i,n,r)}async function Oe(t,e,n,r){n=b(n);const i={data:n},o={},s=await t.contextProvider.getContext();s.authToken&&(o.Authorization="Bearer "+s.authToken),s.messagingToken&&(o["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=s.appCheckToken);const a=r.timeout||7e4,l=Ne(a),c=await Promise.race([Pe(e,i,o,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new f("cancelled","Firebase Functions instance was deleted.");const p=Te(c.status,c.json);if(p)throw p;if(!c.json)throw new f("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new f("internal","Response is missing data field.");return{data:_(d)}}const U="@firebase/functions",x="0.9.4";/**
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
 */const De="auth-internal",Le="app-check-internal",Fe="messaging-internal";function Re(t,e){const n=(r,{instanceIdentifier:i})=>{const o=r.getProvider("app").getImmediate(),s=r.getProvider(De),a=r.getProvider(Fe),l=r.getProvider(Le);return new Ae(o,s,a,l,i,t)};le(new de(P,n,"PUBLIC").setMultipleInstances(!0)),F(U,x,e),F(U,x,"esm2017")}/**
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
 */function Ue(t=he(),e=N){const r=fe(I(t),P).getImmediate({identifier:e}),i=pe("functions");return i&&xe(r,...i),r}function xe(t,e,n){ke(I(t),e,n)}function Me(t,e,n){return Ie(I(t),e,n)}Re(fetch.bind(self));var A={},$e={get exports(){return A},set exports(t){A=t}},C={};Object.defineProperty(C,"__esModule",{value:!0});function v(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?v=function(e){return typeof e}:v=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}var X="https://js.stripe.com/v3",Ge=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,M="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",je=function(){for(var e=document.querySelectorAll('script[src^="'.concat(X,'"]')),n=0;n<e.length;n++){var r=e[n];if(Ge.test(r.src))return r}return null},qe=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(X).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},He=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.0",startTime:n})},g=null,Ve=function(e){return g!==null||(g=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(M),window.Stripe){n(window.Stripe);return}try{var i=je();i&&e?console.warn(M):i||(i=qe(e)),i.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),i.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(o){r(o);return}})),g},Je=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return He(i,r),i},$=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||v(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},w,k=!1,Y=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];k=!0;var i=Date.now();return Ve(w).then(function(o){return Je(o,n,i)})};Y.setLoadParameters=function(t){if(k&&w){var e=$(t),n=Object.keys(e),r=n.reduce(function(i,o){var s;return i&&t[o]===((s=w)===null||s===void 0?void 0:s[o])},!0);if(r)return}if(k)throw new Error("You cannot change load parameters after calling loadStripe");w=$(t)};C.loadStripe=Y;(function(t){t.exports=C})($e);function G(t){let e,n,r,i;return{c(){e=j("div"),n=O("Almost there "),r=O(t[2]),this.h()},l(o){e=q(o,"DIV",{class:!0});var s=H(e);n=D(s,"Almost there "),r=D(s,t[2]),s.forEach(y),this.h()},h(){se(e,"class","loading animate-bounce pt-20 text-center font-Poppins text-5xl svelte-1puppix")},m(o,s){V(o,e,s),L(e,n),L(e,r)},p(o,s){t=o,s&4&&ae(r,t[2])},i(o){i||ce(()=>{i=ue(e,ye,{y:-400,duration:2e3,easing:we}),i.start()})},o:J,d(o){o&&y(e)}}}function Be(t){let e,n=t[3]&&t[0]&&t[1]&&G(t);return{c(){e=j("main"),n&&n.c()},l(r){e=q(r,"MAIN",{});var i=H(e);n&&n.l(i),i.forEach(y)},m(r,i){V(r,e,i),n&&n.m(e,null)},p(r,[i]){r[3]&&r[0]&&r[1]?n?(n.p(r,i),i&11&&T(n,1)):(n=G(r),n.c(),T(n,1),n.m(e,null)):n&&(n.d(1),n=null)},i(r){T(n)},o:J,d(r){r&&y(e),n&&n.d()}}}function Xe(t,e,n){const r=Ue(ge);let i,o,s,a,l,c,p=!1;oe(async()=>{n(3,p=!0),i=window.location.search.slice(1),window.history.replaceState({},"",`/${btoa(i)}`),d()});async function d(){try{const u=new URLSearchParams(i),S=u.get("invitee_full_name"),K=u.get("invitee_email"),W=u.get("event_type_name"),z=u.get("answer_1"),Q=u.get("answer_2"),Z=u.get("answer_3");l=z??K;let h=S==null?void 0:S.split(" ")[0].toLowerCase();n(2,c=(h==null?void 0:h.charAt(0).toUpperCase())+h.slice(1));let ee=Q.match(/\d+(\.\d{1,2})/)[0];n(1,a=parseFloat(ee)*60),Z&&(s=!0);for(let m of["classico","mock"])if(W.toLowerCase().includes(m)){n(0,o=m);break}if(o&&a){const m=Me(r,"stripeSessionIdGCF"),{data:te}=await m({email:l,extra:s,service:o,quantity:a}),E=await A.loadStripe(ve);E==null||E.redirectToCheckout({sessionId:te.id})}}catch(u){console.log("stripeRedirectToCheckout failed",u)}}return[o,a,c,p]}class Qe extends ne{constructor(e){super(),re(this,e,Xe,Be,ie,{})}}export{Qe as default};
