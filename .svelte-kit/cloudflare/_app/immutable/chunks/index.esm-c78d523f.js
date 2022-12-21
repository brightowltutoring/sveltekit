import{az as Pn,F as On,b as Qe,d as Ln,c as $n,aA as Mn,aB as Un,g as b,aC as Bn,_ as jn,C as zn,r as Fe,aD as se,aE as Gn}from"./firebase-c41625c4.js";/**
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
 */class A{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}A.UNAUTHENTICATED=new A(null),A.GOOGLE_CREDENTIALS=new A("google-credentials-uid"),A.FIRST_PARTY=new A("first-party-uid"),A.MOCK_USER=new A("mock-user");/**
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
 */let ot="9.15.0";/**
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
 */const z=new Pn("@firebase/firestore");function Jr(n){z.setLogLevel(n)}function G(n,...t){if(z.logLevel<=se.DEBUG){const e=t.map(ie);z.debug(`Firestore (${ot}): ${n}`,...e)}}function Pt(n,...t){if(z.logLevel<=se.ERROR){const e=t.map(ie);z.error(`Firestore (${ot}): ${n}`,...e)}}function Ke(n,...t){if(z.logLevel<=se.WARN){const e=t.map(ie);z.warn(`Firestore (${ot}): ${n}`,...e)}}function ie(n){if(typeof n=="string")return n;try{return t=n,JSON.stringify(t)}catch{return n}/**
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
*/var t}/**
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
 */function p(n="Unexpected state"){const t=`FIRESTORE (${ot}) INTERNAL ASSERTION FAILED: `+n;throw Pt(t),new Error(t)}function I(n,t){n||p()}function at(n,t){return n}/**
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
 */const Ve="ok",oe="cancelled",rt="unknown",h="invalid-argument",We="deadline-exceeded",ae="not-found",Qn="already-exists",He="permission-denied",It="unauthenticated",Ye="resource-exhausted",L="failed-precondition",ue="aborted",Xe="out-of-range",le="unimplemented",Je="internal",Ze="unavailable",Kn="data-loss";class c extends On{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class tn{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(A.UNAUTHENTICATED))}shutdown(){}}class Hn{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Yn{constructor(t){this.auth=null,t.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(I(typeof t.accessToken=="string"),new tn(t.accessToken,new A(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class Xn{constructor(t,e,r,s){this.t=t,this.i=e,this.o=r,this.u=s,this.type="FirstParty",this.user=A.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(I(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class Jn{constructor(t,e,r,s){this.t=t,this.i=e,this.o=r,this.u=s}getToken(){return Promise.resolve(new Xn(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable(()=>e(A.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tr{constructor(t){this.m=t,this.appCheck=null,t.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(I(typeof t.token=="string"),new Zn(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */class er{constructor(t,e,r,s,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class mt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mt&&t.projectId===this.projectId&&t.database===this.database}}class pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&p(),r===void 0?r=t.length-e:r>t.length-e&&p(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class y extends pt{construct(t,e,r){return new y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new y(e)}static emptyPath(){return new y([])}}const nr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class F extends pt{construct(t,e,r){return new F(t,e,r)}static isValidIdentifier(t){return nr.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),F.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new F(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new c(h,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new c(h,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(h,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new c(h,"Unterminated ` in path: "+t);return new F(e)}static emptyPath(){return new F([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(y.fromString(t))}static fromName(t){return new v(y.fromString(t).popFirst(5))}static empty(){return new v(y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new y(t.slice()))}}/**
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
 */function he(n,t,e){if(!e)throw new c(h,`Function ${n}() cannot be called with an empty ${t}.`)}function De(n){if(!v.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ne(n){if(v.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ot(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":p()}function x(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ot(n);throw new c(h,`Expected type '${t.name}', but it was: ${e}`)}}return n}function en(n,t){if(t<=0)throw new c(h,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function nn(n){return n==null}function At(n){return n===0&&1/n==-1/0}/**
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
 */const rr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var qe,m;function xe(n){if(n===void 0)return Pt("RPC_ERROR","HTTP error has no status"),rt;switch(n){case 200:return Ve;case 400:return L;case 401:return It;case 403:return He;case 404:return ae;case 409:return ue;case 416:return Xe;case 429:return Ye;case 499:return oe;case 500:return rt;case 501:return le;case 503:return Ze;case 504:return We;default:return n>=200&&n<300?Ve:n>=400&&n<500?L:n>=500&&n<600?Je:rt}}/**
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
 */(m=qe||(qe={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";class sr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.p=e+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(t,e,r,s,i){const o=this.T(t,e);G("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(t,o,a,r).then(u=>(G("RestConnection","Received: ",u),u),u=>{throw Ke("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",r),u})}P(t,e,r,s,i,o){return this.I(t,e,r,s,i)}A(t,e,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+ot,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}T(t,e){const r=rr[t];return`${this.p}/v1/${e}:${r}`}}{constructor(t,e){super(t),this.V=e}$(t,e){throw new Error("Not supported by FetchConnection")}async R(t,e,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.V(e,{method:"POST",headers:r,body:o})}catch(u){const l=u;throw new c(xe(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let u=await a.json();Array.isArray(u)&&(u=u[0]);const l=(i=u==null?void 0:u.error)===null||i===void 0?void 0:i.message;throw new c(xe(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 *//**
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
 */function ir(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class or{static N(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ir(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function T(n,t){return n<t?-1:n>t?1:0}function de(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */function Ce(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function vt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
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
 */class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new $(e)}static fromUint8Array(t){const e=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(t);return new $(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return T(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const ar=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q(n){if(I(!!n),typeof n=="string"){let t=0;const e=ar.exec(n);if(I(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_(n.seconds),nanos:_(n.nanos)}}function _(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gt(n){return typeof n=="string"?$.fromBase64String(n):$.fromUint8Array(n)}/**
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
 */class D{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new c(h,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new c(h,"Timestamp seconds out of range: "+t)}static now(){return D.fromMillis(Date.now())}static fromDate(t){return D.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new D(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?T(this.nanoseconds,t.nanoseconds):T(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function fe(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function rn(n){const t=n.mapValue.fields.__previous_value__;return fe(t)?rn(t):t}function yt(n){const t=Q(n.mapValue.fields.__local_write_time__.timestampValue);return new D(t.seconds,t.nanos)}/**
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
 */const kt={fields:{__type__:{stringValue:"__max__"}}};function K(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fe(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:p()}function st(n,t){if(n===t)return!0;const e=K(n);if(e!==K(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yt(n).isEqual(yt(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Q(r.timestampValue),o=Q(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return gt(r.bytesValue).isEqual(gt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return _(r.geoPointValue.latitude)===_(s.geoPointValue.latitude)&&_(r.geoPointValue.longitude)===_(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return _(r.integerValue)===_(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=_(r.doubleValue),o=_(s.doubleValue);return i===o?At(i)===At(o):isNaN(i)&&isNaN(o)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],st);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ce(i)!==Ce(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!st(i[a],o[a])))return!1;return!0}(n,t);default:return p()}}function wt(n,t){return(n.values||[]).find(e=>st(e,t))!==void 0}function Ft(n,t){if(n===t)return 0;const e=K(n),r=K(t);if(e!==r)return T(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return T(n.booleanValue,t.booleanValue);case 2:return function(s,i){const o=_(s.integerValue||s.doubleValue),a=_(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,t);case 3:return Re(n.timestampValue,t.timestampValue);case 4:return Re(yt(n),yt(t));case 5:return T(n.stringValue,t.stringValue);case 6:return function(s,i){const o=gt(s),a=gt(i);return o.compareTo(a)}(n.bytesValue,t.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=T(o[u],a[u]);if(l!==0)return l}return T(o.length,a.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,i){const o=T(_(s.latitude),_(i.latitude));return o!==0?o:T(_(s.longitude),_(i.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ft(o[u],a[u]);if(l)return l}return T(o.length,a.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,i){if(s===kt&&i===kt)return 0;if(s===kt)return 1;if(i===kt)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const g=T(a[d],l[d]);if(g!==0)return g;const f=Ft(o[a[d]],u[l[d]]);if(f!==0)return f}return T(a.length,l.length)}(n.mapValue,t.mapValue);default:throw p()}}function Re(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return T(n,t);const e=Q(n),r=Q(t),s=T(e.seconds,r.seconds);return s!==0?s:T(e.nanos,r.nanos)}function Vt(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function sn(n){return!!n&&"arrayValue"in n}function Pe(n){return!!n&&"nullValue"in n}function Oe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yt(n){return!!n&&"mapValue"in n}function ct(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return vt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ct(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ct(n.arrayValue.values[e]);return t}return Object.assign({},n)}class Dt{constructor(t,e){this.position=t,this.inclusive=e}}function Le(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!st(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class on{}class N extends on{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ur(t,e,r):e==="array-contains"?new hr(t,r):e==="in"?new dr(t,r):e==="not-in"?new fr(t,r):e==="array-contains-any"?new mr(t,r):new N(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new lr(t,r):new cr(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ft(e,this.value)):e!==null&&K(this.value)===K(e)&&this.matchesComparison(Ft(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class W extends on{constructor(t,e){super(),this.filters=t,this.op=e,this.D=null}static create(t,e){return new W(t,e)}matches(t){return this.op==="and"?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.F(e=>e.isInequality());return t!==null?t.field:null}F(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function an(n,t){return n instanceof N?function(e,r){return r instanceof N&&e.op===r.op&&e.field.isEqual(r.field)&&st(e.value,r.value)}(n,t):n instanceof W?function(e,r){return r instanceof W&&e.op===r.op&&e.filters.length===r.filters.length?e.filters.reduce((s,i,o)=>s&&an(i,r.filters[o]),!0):!1}(n,t):void p()}class ur extends N{constructor(t,e,r){super(t,e,r),this.key=v.fromName(r.referenceValue)}matches(t){const e=v.comparator(t.key,this.key);return this.matchesComparison(e)}}class lr extends N{constructor(t,e){super(t,"in",e),this.keys=un("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cr extends N{constructor(t,e){super(t,"not-in",e),this.keys=un("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function un(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>v.fromName(r.referenceValue))}class hr extends N{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return sn(e)&&wt(e.arrayValue,this.value)}}class dr extends N{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wt(this.value.arrayValue,e)}}class fr extends N{constructor(t,e){super(t,"not-in",e)}matches(t){if(wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wt(this.value.arrayValue,e)}}class mr extends N{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!sn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wt(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ht{constructor(t,e="asc"){this.field=t,this.dir=e}}function pr(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new D(0,0))}static max(){return new w(new D(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Nt{constructor(t,e){this.comparator=t,this.root=e||k.EMPTY}insert(t,e){return new Nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,k.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,k.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new St(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new St(this.root,t,this.comparator,!1)}getReverseIterator(){return new St(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new St(this.root,t,this.comparator,!0)}}class St{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class k{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??k.RED,this.left=s??k.EMPTY,this.right=i??k.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new k(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return k.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return k.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw p();const t=this.left.check();if(t!==this.right.check())throw p();return t+(this.isRed()?0:1)}}k.EMPTY=null,k.RED=!0,k.BLACK=!1;k.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(n,t,e,r,s){return this}insert(n,t,e){return new k(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $e(this.data.getIterator())}getIteratorFrom(t){return new $e(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class $e{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class H{constructor(t){this.fields=t,t.sort(F.comparator)}static empty(){return new H([])}unionWith(t){let e=new qt(F.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new H(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class V{constructor(t){this.value=t}static empty(){return new V({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ct(e)}setAll(t){let e=F.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=ct(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Yt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){vt(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new V(ct(this.value))}}/**
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
 */class O{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new O(t,0,w.min(),w.min(),w.min(),V.empty(),0)}static newFoundDocument(t,e,r,s){return new O(t,1,e,w.min(),r,s,0)}static newNoDocument(t,e){return new O(t,2,e,w.min(),w.min(),V.empty(),0)}static newUnknownDocument(t,e){return new O(t,3,e,w.min(),w.min(),V.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=V.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=V.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof O&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new O(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gr{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Me(n,t=null,e=[],r=[],s=null,i=null,o=null){return new gr(n,t,e,r,s,i,o)}/**
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
 */class X{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.q=null,this.O=null,this.startAt,this.endAt}}function me(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Lt(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function ln(n){return n.collectionGroup!==null}function Jt(n){const t=at(n);if(t.q===null){t.q=[];const e=Lt(t),r=me(t);if(e!==null&&r===null)e.isKeyField()||t.q.push(new ht(e)),t.q.push(new ht(F.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.q.push(new ht(F.keyField(),i))}}}return t.q}function xt(n){const t=at(n);if(!t.O)if(t.limitType==="F")t.O=Me(t.path,t.collectionGroup,Jt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Jt(t)){const o=i.dir==="desc"?"asc":"desc";e.push(new ht(i.field,o))}const r=t.endAt?new Dt(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Dt(t.startAt.position,t.startAt.inclusive):null;t.O=Me(t.path,t.collectionGroup,e,t.filters,t.limit,r,s)}return t.O}function Zt(n,t){t.getFirstInequalityField(),Lt(n);const e=n.filters.concat([t]);return new X(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function yr(n,t){return function(e,r){if(e.limit!==r.limit||e.orderBy.length!==r.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!pr(e.orderBy[s],r.orderBy[s]))return!1;if(e.filters.length!==r.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!an(e.filters[s],r.filters[s]))return!1;return e.collectionGroup===r.collectionGroup&&!!e.path.isEqual(r.path)&&!!Le(e.startAt,r.startAt)&&Le(e.endAt,r.endAt)}(xt(n),xt(t))&&n.limitType===t.limitType}/**
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
 */function cn(n,t){return function(e){return typeof e=="number"&&Number.isInteger(e)&&!At(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,r){if(e.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:At(r)?"-0":r}}(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $t{constructor(){this._=void 0}}class hn extends $t{}class dn extends $t{constructor(t){super(),this.elements=t}}class fn extends $t{constructor(t){super(),this.elements=t}}class mn extends $t{constructor(t,e){super(),this.C=t,this.L=e}}/**
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
 */class Mt{constructor(t,e){this.field=t,this.transform=e}}class S{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new S}static exists(t){return new S(void 0,t)}static updateTime(t){return new S(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Ut{}class pn extends Ut{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pe extends Ut{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Bt extends Ut{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gn extends Ut{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const wr=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vr=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_r=(()=>({and:"AND",or:"OR"}))();class br{constructor(t,e){this.databaseId=t,this.k=e}}function te(n,t){return n.k?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tr(n,t){return n.k?t.toBase64():t.toUint8Array()}function Er(n,t){return te(n,t.toTimestamp())}function dt(n){return I(!!n),w.fromTimestamp(function(t){const e=Q(t);return new D(e.seconds,e.nanos)}(n))}function ge(n,t){return function(e){return new y(["projects",e.projectId,"databases",e.database])}(n).child("documents").child(t).canonicalString()}function Ct(n,t){return ge(n.databaseId,t.path)}function ee(n,t){const e=function(s){const i=y.fromString(s);return I(_n(i)),i}(t);if(e.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new v((I((r=e).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ue(n,t){return ge(n.databaseId,t)}function yn(n){return new y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Be(n,t,e){return{name:Ct(n,t),fields:e.value.mapValue.fields}}function kr(n,t){return"found"in t?function(e,r){I(!!r.found),r.found.name,r.found.updateTime;const s=ee(e,r.found.name),i=dt(r.found.updateTime),o=r.found.createTime?dt(r.found.createTime):w.min(),a=new V({mapValue:{fields:r.found.fields}});return O.newFoundDocument(s,i,o,a)}(n,t):"missing"in t?function(e,r){I(!!r.missing),I(!!r.readTime);const s=ee(e,r.missing),i=dt(r.readTime);return O.newNoDocument(s,i)}(n,t):p()}function Sr(n,t){let e;if(t instanceof pn)e={update:Be(n,t.key,t.value)};else if(t instanceof Bt)e={delete:Ct(n,t.key)};else if(t instanceof pe)e={update:Be(n,t.key,t.data),updateMask:Vr(t.fieldMask)};else{if(!(t instanceof gn))return p();e={verify:Ct(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof hn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof dn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mn)return{fieldPath:i.field.canonicalString(),increment:o.L};throw p()}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Er(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:p()}(n,t.precondition)),e}function wn(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=Ue(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=Ue(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return vn(W.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:nt(d.field),direction:Ir(d.dir)}}(l))}(t.orderBy);i&&(e.structuredQuery.orderBy=i);const o=function(u,l){return u.k||nn(l)?l:{value:l}}(n,t.limit);var a;return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function Ir(n){return wr[n]}function Ar(n){return vr[n]}function Fr(n){return _r[n]}function nt(n){return{fieldPath:n.canonicalString()}}function vn(n){return n instanceof N?function(t){if(t.op==="=="){if(Oe(t.value))return{unaryFilter:{field:nt(t.field),op:"IS_NAN"}};if(Pe(t.value))return{unaryFilter:{field:nt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oe(t.value))return{unaryFilter:{field:nt(t.field),op:"IS_NOT_NAN"}};if(Pe(t.value))return{unaryFilter:{field:nt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nt(t.field),op:Ar(t.op),value:t.value}}}(n):n instanceof W?function(t){const e=t.getFilters().map(r=>vn(r));return e.length===1?e[0]:{compositeFilter:{op:Fr(t.op),filters:e}}}(n):p()}function Vr(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function _n(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function ye(n){return new br(n,!0)}/**
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
 */class bn{constructor(t,e,r=1e3,s=1.5,i=6e4){this.M=t,this.timerId=e,this.U=r,this.j=s,this.B=i,this.W=0,this.G=null,this.K=Date.now(),this.reset()}reset(){this.W=0}Y(){this.W=this.B}H(t){this.cancel();const e=Math.floor(this.W+this.J()),r=Math.max(0,Date.now()-this.K),s=Math.max(0,e-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.W} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.G=this.M.enqueueAfterDelay(this.timerId,s,()=>(this.K=Date.now(),t())),this.W*=this.j,this.W<this.U&&(this.W=this.U),this.W>this.B&&(this.W=this.B)}X(){this.G!==null&&(this.G.skipDelay(),this.G=null)}cancel(){this.G!==null&&(this.G.cancel(),this.G=null)}J(){return(Math.random()-.5)*this.W}}/**
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
 */class Dr extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new c(L,"The client has already been terminated.")}I(t,e,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(t,e,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===It&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(rt,s.toString())})}P(t,e,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(t,e,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===It&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(rt,i.toString())})}terminate(){this.Z=!0}}async function ut(n,t){const e=at(n),r=yn(e.C)+"/documents",s={writes:t.map(i=>Sr(e.C,i))};await e.I("Commit",r,s)}async function Tn(n,t){const e=at(n),r=yn(e.C)+"/documents",s={documents:t.map(u=>Ct(e.C,u))},i=await e.P("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach(u=>{const l=kr(e.C,u);o.set(l.key.toString(),l)});const a=[];return t.forEach(u=>{const l=o.get(u.toString());I(!!l),a.push(l)}),a}async function Nr(n,t){const e=at(n),r=wn(e.C,xt(t));return(await e.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const u=ee(i,o.name),l=dt(o.updateTime),d=o.createTime?dt(o.createTime):w.min(),g=new V({mapValue:{fields:o.fields}}),f=O.newFoundDocument(u,l,d,g);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(e.C,s.document,void 0))}async function qr(n,t){const e=at(n),r=function(i,o){const a=wn(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(e.C,xt(t)),s=r.parent;return e.connection.v||delete r.parent,(await e.P("RunAggregationQuery",s,r,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}/**
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
 */const ft=new Map;function M(n){if(n._terminated)throw new c(L,"The client has already been terminated.");if(!ft.has(n)){G("ComponentProvider","Initializing Datastore");const i=function(u){return new sr(u,fetch.bind(null))}((t=n._databaseId,e=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new er(t,e,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=ye(n._databaseId),a=function(u,l,d,g){return new Dr(u,l,d,g)}(n._authCredentials,n._appCheckCredentials,i,o);ft.set(n,a)}var t,e,r,s;/**
* @license
* Copyright 2018 Google LLC
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
*/return ft.get(n)}class je{constructor(t){var e;if(t.host===void 0){if(t.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new c(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class U{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new je({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new c(L,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new c(L,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new je(t),t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new Wn;switch(e.type){case"gapi":const r=e.client;return new Jn(r,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ft.get(t);e&&(G("ComponentProvider","Removing Datastore"),ft.delete(t),e.terminate())}(this),Promise.resolve()}}function Zr(n,t,e){e||(e="(default)");const r=Qe(n,"firestore/lite");if(r.isInitialized(e))throw new c(L,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function ts(n,t){const e=typeof n=="object"?n:Ln(),r=typeof n=="string"?n:t||"(default)",s=Qe(e,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=$n("firestore");i&&xr(s,...i)}return s}function xr(n,t,e,r={}){var s;const i=(n=x(n,U))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Ke("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${e}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=A.MOCK_USER;else{o=Mn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new c(h,"mockUserToken must contain 'sub' or 'user_id' field!");a=new A(u)}n._authCredentials=new Hn(new tn(o,a))}}function es(n){return n=x(n,U),Un(n.app,"firestore/lite"),n._delete()}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class ns{constructor(){this.type="AggregateField"}}class Cr{constructor(t,e){this._data=e,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Rr{constructor(t,e,r){this.query=t,this.datastore=e,this.userDataWriter=r}run(){return qr(this.datastore,this.query._query).then(t=>{I(t[0]!==void 0);const e=Object.entries(t[0]).filter(([r,s])=>r==="count_alias").map(([r,s])=>this.userDataWriter.convertValue(s))[0];return I(typeof e=="number"),Promise.resolve(new Cr(this.query,{count:e}))})}}/**
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
 */class E{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new P(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new E(this.firestore,t,this._key)}}class q{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new q(this.firestore,t,this._query)}}class P extends q{constructor(t,e,r){super(t,e,new X(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new E(this.firestore,null,new v(t))}withConverter(t){return new P(this.firestore,t,this._path)}}function rs(n,t,...e){if(n=b(n),he("collection","path",t),n instanceof U){const r=y.fromString(t,...e);return Ne(r),new P(n,null,r)}{if(!(n instanceof E||n instanceof P))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(t,...e));return Ne(r),new P(n.firestore,null,r)}}function ss(n,t){if(n=x(n,U),he("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new c(h,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new q(n,null,function(e){return new X(y.emptyPath(),e)}(t))}function Pr(n,t,...e){if(n=b(n),arguments.length===1&&(t=or.N()),he("doc","path",t),n instanceof U){const r=y.fromString(t,...e);return De(r),new E(n,null,new v(r))}{if(!(n instanceof E||n instanceof P))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(t,...e));return De(r),new E(n.firestore,n instanceof P?n.converter:null,new v(r))}}function is(n,t){return n=b(n),t=b(t),(n instanceof E||n instanceof P)&&(t instanceof E||t instanceof P)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function En(n,t){return n=b(n),t=b(t),n instanceof q&&t instanceof q&&n.firestore===t.firestore&&yr(n._query,t._query)&&n.converter===t.converter}/**
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
 */class it{constructor(t){this._byteString=t}static fromBase64String(t){try{return new it($.fromBase64String(t))}catch(e){throw new c(h,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new it($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class J{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new F(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function os(){return new J("__name__")}/**
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
 */class Z{constructor(t){this._methodName=t}}/**
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
 */class we{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return T(this._lat,t._lat)||T(this._long,t._long)}}/**
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
 */const Or=/^__.*__$/;class Lr{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new pn(t,this.data,e,this.fieldTransforms)}}class kn{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new pe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class jt{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(t){return new jt(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.rt({path:r,it:!1});return s.ot(t),s}ut(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.rt({path:r,it:!1});return s.et(),s}ct(t){return this.rt({path:void 0,it:!0})}at(t){return Rt(t,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}et(){if(this.path)for(let t=0;t<this.path.length;t++)this.ot(this.path.get(t))}ot(t){if(t.length===0)throw this.at("Document fields must not be empty");if(Sn(this.nt)&&Or.test(t))throw this.at('Document fields cannot begin and end with "__"')}}class $r{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.C=r||ye(t)}ft(t,e,r,s=!1){return new jt({nt:t,methodName:e,lt:r,path:F.emptyPath(),it:!1,ht:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function tt(n){const t=n._freezeSettings(),e=ye(n._databaseId);return new $r(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zt(n,t,e,r,s,i={}){const o=n.ft(i.merge||i.mergeFields?2:0,t,e,s);Te("Data must be an object, but it was:",o,r);const a=Fn(r,o);let u,l;if(i.merge)u=new H(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const f=ne(t,g,e);if(!o.contains(f))throw new c(h,`Field '${f}' is specified in your field mask but missing from your input data.`);Dn(d,f)||d.push(f)}u=new H(d),l=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,l=o.fieldTransforms;return new Lr(new V(a),u,l)}class _t extends Z{_toFieldTransform(t){if(t.nt!==2)throw t.nt===1?t.at(`${this._methodName}() can only appear at the top level of your update data`):t.at(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _t}}function In(n,t,e){return new jt({nt:3,lt:t.settings.lt,methodName:n._methodName,it:e},t.databaseId,t.C,t.ignoreUndefinedProperties)}class ve extends Z{_toFieldTransform(t){return new Mt(t.path,new hn)}isEqual(t){return t instanceof ve}}class Mr extends Z{constructor(t,e){super(t),this.dt=e}_toFieldTransform(t){const e=In(this,t,!0),r=this.dt.map(i=>et(i,e)),s=new dn(r);return new Mt(t.path,s)}isEqual(t){return this===t}}class Ur extends Z{constructor(t,e){super(t),this.dt=e}_toFieldTransform(t){const e=In(this,t,!0),r=this.dt.map(i=>et(i,e)),s=new fn(r);return new Mt(t.path,s)}isEqual(t){return this===t}}class Br extends Z{constructor(t,e){super(t),this.wt=e}_toFieldTransform(t){const e=new mn(t.C,cn(t.C,this.wt));return new Mt(t.path,e)}isEqual(t){return this===t}}function _e(n,t,e,r){const s=n.ft(1,t,e);Te("Data must be an object, but it was:",s,r);const i=[],o=V.empty();vt(r,(u,l)=>{const d=Ee(t,u,e);l=b(l);const g=s.ut(d);if(l instanceof _t)i.push(d);else{const f=et(l,g);f!=null&&(i.push(d),o.set(d,f))}});const a=new H(i);return new kn(o,a,s.fieldTransforms)}function be(n,t,e,r,s,i){const o=n.ft(1,t,e),a=[ne(t,r,e)],u=[s];if(i.length%2!=0)throw new c(h,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ne(t,i[f])),u.push(i[f+1]);const l=[],d=V.empty();for(let f=a.length-1;f>=0;--f)if(!Dn(l,a[f])){const C=a[f];let R=u[f];R=b(R);const B=o.ut(C);if(R instanceof _t)l.push(C);else{const Et=et(R,B);Et!=null&&(l.push(C),d.set(C,Et))}}const g=new H(l);return new kn(d,g,o.fieldTransforms)}function An(n,t,e,r=!1){return et(e,n.ft(r?4:3,t))}function et(n,t){if(Vn(n=b(n)))return Te("Unsupported field value:",t,n),Fn(n,t);if(n instanceof Z)return function(e,r){if(!Sn(r.nt))throw r.at(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${e._methodName}() is not currently supported inside arrays`);const s=e._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.it&&t.nt!==4)throw t.at("Nested arrays are not supported");return function(e,r){const s=[];let i=0;for(const o of e){let a=et(o,r.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,t)}return function(e,r){if((e=b(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return cn(r.C,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const s=D.fromDate(e);return{timestampValue:te(r.C,s)}}if(e instanceof D){const s=new D(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:te(r.C,s)}}if(e instanceof we)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof it)return{bytesValue:Tr(r.C,e._byteString)};if(e instanceof E){const s=r.databaseId,i=e.firestore._databaseId;if(!i.isEqual(s))throw r.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ge(e.firestore._databaseId||r.databaseId,e._key.path)}}throw r.at(`Unsupported field value: ${Ot(e)}`)}(n,t)}function Fn(n,t){const e={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vt(n,(r,s)=>{const i=et(s,t.st(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Vn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof D||n instanceof we||n instanceof it||n instanceof E||n instanceof Z)}function Te(n,t,e){if(!Vn(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const r=Ot(e);throw r==="an object"?t.at(n+" a custom object"):t.at(n+" "+r)}}function ne(n,t,e){if((t=b(t))instanceof J)return t._internalPath;if(typeof t=="string")return Ee(n,t);throw Rt("Field path arguments must be of type string or ",n,!1,void 0,e)}const jr=new RegExp("[~\\*/\\[\\]]");function Ee(n,t,e){if(t.search(jr)>=0)throw Rt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new J(...t.split("."))._internalPath}catch{throw Rt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Rt(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new c(h,a+n+u)}function Dn(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Y{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new E(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Nn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ke("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Nn extends Y{data(){return super.data()}}class re{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function zr(n,t){return n=b(n),t=b(t),n instanceof Y&&t instanceof Y?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof re&&t instanceof re&&En(n.query,t.query)&&de(n.docs,t.docs,zr)}function ke(n,t){return typeof t=="string"?Ee(n,t):t instanceof J?t._internalPath:t._delegate._internalPath}/**
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
 */class Se{}class bt extends Se{}function as(n,t,...e){let r=[];t instanceof Se&&r.push(t),r=r.concat(e),function(s){const i=s.filter(a=>a instanceof lt).length,o=s.filter(a=>a instanceof Tt).length;if(i>1||i>0&&o>0)throw new c(h,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Tt extends bt{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Tt(t,e,r)}_apply(t){const e=this._parse(t);return xn(t._query,e),new q(t.firestore,t.converter,Zt(t._query,e))}_parse(t){const e=tt(t.firestore);return function(s,i,o,a,u,l,d){let g;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new c(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ge(d,l);const f=[];for(const C of d)f.push(ze(a,s,C));g={arrayValue:{values:f}}}else g=ze(a,s,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ge(d,l),g=An(o,i,d,l==="in"||l==="not-in");return N.create(u,l,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function us(n,t,e){const r=t,s=ke("where",n);return Tt._create(s,r,e)}class lt extends Se{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new lt(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:W.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)xn(i,a),i=Zt(i,a)}(t._query,e),new q(t.firestore,t.converter,Zt(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ls(...n){return n.forEach(t=>Rn("or",t)),lt._create("or",n)}function cs(...n){return n.forEach(t=>Rn("and",t)),lt._create("and",n)}class Ie extends bt{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ie(t,e)}_apply(t){const e=function(r,s,i){if(r.startAt!==null)throw new c(h,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new c(h,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ht(s,i);return function(a,u){if(me(a)===null){const l=Lt(a);l!==null&&Cn(a,l,u.field)}}(r,o),o}(t._query,this._field,this._direction);return new q(t.firestore,t.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new X(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function hs(n,t="asc"){const e=t,r=ke("orderBy",n);return Ie._create(r,e)}class Gt extends bt{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Gt(t,e,r)}_apply(t){return new q(t.firestore,t.converter,function(e,r,s){return new X(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),r,s,e.startAt,e.endAt)}(t._query,this._limit,this._limitType))}}function ds(n){return en("limit",n),Gt._create("limit",n,"F")}function fs(n){return en("limitToLast",n),Gt._create("limitToLast",n,"L")}class Qt extends bt{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Qt(t,e,r)}_apply(t){const e=qn(t,this.type,this._docOrFields,this._inclusive);return new q(t.firestore,t.converter,function(r,s){return new X(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(t._query,e))}}function ms(...n){return Qt._create("startAt",n,!0)}function ps(...n){return Qt._create("startAfter",n,!1)}class Kt extends bt{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Kt(t,e,r)}_apply(t){const e=qn(t,this.type,this._docOrFields,this._inclusive);return new q(t.firestore,t.converter,function(r,s){return new X(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(t._query,e))}}function gs(...n){return Kt._create("endBefore",n,!1)}function ys(...n){return Kt._create("endAt",n,!0)}function qn(n,t,e,r){if(e[0]=b(e[0]),e[0]instanceof Y)return function(s,i,o,a,u){if(!a)throw new c(ae,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const d of Jt(s))if(d.field.isKeyField())l.push(Vt(i,a.key));else{const g=a.data.field(d.field);if(fe(g))throw new c(h,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const f=d.field.canonicalString();throw new c(h,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(g)}return new Dt(l,u)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=tt(n.firestore);return function(i,o,a,u,l,d){const g=i.explicitOrderBy;if(l.length>g.length)throw new c(h,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let C=0;C<l.length;C++){const R=l[C];if(g[C].field.isKeyField()){if(typeof R!="string")throw new c(h,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof R}`);if(!ln(i)&&R.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${R}' contains a slash.`);const B=i.path.child(y.fromString(R));if(!v.isDocumentKey(B))throw new c(h,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${B}' is not because it contains an odd number of segments.`);const Et=new v(B);f.push(Vt(o,Et))}else{const B=An(a,u,R);f.push(B)}}return new Dt(f,d)}(n._query,n.firestore._databaseId,s,t,e,r)}}function ze(n,t,e){if(typeof(e=b(e))=="string"){if(e==="")throw new c(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ln(t)&&e.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(y.fromString(e));if(!v.isDocumentKey(r))throw new c(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vt(n,new v(r))}if(e instanceof E)return Vt(n,e._key);throw new c(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ot(e)}.`)}function Ge(n,t){if(!Array.isArray(n)||n.length===0)throw new c(h,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(n.length>10)throw new c(h,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function xn(n,t){if(t.isInequality()){const r=Lt(n),s=t.field;if(r!==null&&!r.isEqual(s))throw new c(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=me(n);i!==null&&Cn(n,s,i)}const e=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new c(h,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new c(h,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Cn(n,t,e){if(!e.isEqual(t))throw new c(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}function Rn(n,t){if(!(t instanceof Tt||t instanceof lt))throw new c(h,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}/**
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
 */function Wt(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Ht extends class{convertValue(t,e="none"){switch(K(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw p()}}convertObject(t,e){const r={};return vt(t.fields,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new we(_(t.latitude),_(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rn(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yt(t));default:return null}}convertTimestamp(t){const e=Q(t);return new D(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=y.fromString(t);I(_n(r));const s=new mt(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(e)||Pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new it(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new E(this.firestore,null,e)}}function ws(n){const t=M((n=x(n,E)).firestore),e=new Ht(n.firestore);return Tn(t,[n._key]).then(r=>{I(r.length===1);const s=r[0];return new Y(n.firestore,e,n._key,s.isFoundDocument()?s:null,n.converter)})}function vs(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(le,"limitToLast() queries require specifying at least one orderBy() clause")})((n=x(n,q))._query);const t=M(n.firestore),e=new Ht(n.firestore);return Nr(t,n._query).then(r=>{const s=r.map(i=>new Nn(n.firestore,e,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new re(n,s)})}function _s(n,t,e){const r=Wt((n=x(n,E)).converter,t,e),s=zt(tt(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return ut(M(n.firestore),[s.toMutation(n._key,S.none())])}function bs(n,t,e,...r){const s=tt((n=x(n,E)).firestore);let i;return i=typeof(t=b(t))=="string"||t instanceof J?be(s,"updateDoc",n._key,t,e,r):_e(s,"updateDoc",n._key,t),ut(M(n.firestore),[i.toMutation(n._key,S.exists(!0))])}function Ts(n){return ut(M((n=x(n,E)).firestore),[new Bt(n._key,S.none())])}function Es(n,t){const e=Pr(n=x(n,P)),r=Wt(n.converter,t),s=zt(tt(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return ut(M(n.firestore),[s.toMutation(e._key,S.exists(!1))]).then(()=>e)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function ks(n){const t=x(n.firestore,U),e=M(t),r=new Ht(t);return new Rr(n,e,r).run()}function Ss(n,t){return En(n.query,t.query)&&Bn(n.data(),t.data())}/**
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
 */function Is(){return new _t("deleteField")}function As(){return new ve("serverTimestamp")}function Fs(...n){return new Mr("arrayUnion",n)}function Vs(...n){return new Ur("arrayRemove",n)}function Ds(n){return new Br("increment",n)}/**
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
 */class Gr{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=tt(t)}set(t,e,r){this._verifyNotCommitted();const s=j(t,this._firestore),i=Wt(s.converter,e,r),o=zt(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,S.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const i=j(t,this._firestore);let o;return o=typeof(e=b(e))=="string"||e instanceof J?be(this._dataReader,"WriteBatch.update",i._key,e,r,s):_e(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,S.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=j(t,this._firestore);return this._mutations=this._mutations.concat(new Bt(e._key,S.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new c(L,"A write batch can no longer be used after commit() has been called.")}}function j(n,t){if((n=b(n)).firestore!==t)throw new c(h,"Provided document reference is from a different Firestore instance.");return n}function Ns(n){const t=M(n=x(n,U));return new Gr(n,e=>ut(t,e))}/**
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
 */class Qr{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new c(h,"Firestore transactions require all reads to be executed before all writes.");const e=await Tn(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Bt(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=v.fromPath(r);this.mutations.push(new gn(s,this.precondition(s)))}),await ut(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw p();e=w.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new c(ue,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(w.min())?S.exists(!1):S.updateTime(e):S.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(w.min()))throw new c(h,"Can't update a document that doesn't exist.");return S.updateTime(e)}return S.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Kr={maxAttempts:5};/**
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
 */class Wr{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new bn(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.H(async()=>{const t=new Qr(this.datastore),e=this.vt(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(t){try{const e=this.updateFunction(t);return!nn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}bt(t){this.yt>0&&this.Et(t)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(t)}Et(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!function(r){switch(r){default:return p();case oe:case rt:case We:case Ye:case Je:case Ze:case It:return!1;case h:case ae:case Qn:case He:case L:case ue:case Xe:case le:case Kn:return!0}}(e)}return!1}}/**
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
 */function Xt(){return typeof document<"u"?document:null}/**
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
 */class Ae{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new Ae(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new c(oe,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class Hr{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new bn(this,"async_queue_retry"),this.Dt=()=>{const e=Xt();e&&G("AsyncQueue","Visibility state changed to "+e.visibilityState),this.gt.X()};const t=Xt();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ft(),this.xt(t)}enterRestrictedMode(t){if(!this.At){this.At=!0,this.$t=t||!1;const e=Xt();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Dt)}}enqueue(t){if(this.Ft(),this.At)return new Promise(()=>{});const e=new ce;return this.xt(()=>this.At&&this.$t?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Tt.push(t),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(t){if(!function(e){return e.name==="IndexedDbTransactionError"}(t))throw t;G("AsyncQueue","Operation failed with retryable error: "+t)}this.Tt.length>0&&this.gt.H(()=>this.St())}}xt(t){const e=this.It.then(()=>(this.Vt=!0,t().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Pt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=e,e}enqueueAfterDelay(t,e,r){this.Ft(),this.Nt.indexOf(t)>-1&&(e=0);const s=Ae.createAndSchedule(this,t,e,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&p()}verifyOperationInProgress(){}async Ot(){let t;do t=this.It,await t;while(t!==this.It)}kt(t){for(const e of this.Rt)if(e.timerId===t)return!0;return!1}Ct(t){return this.Ot().then(()=>{this.Rt.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Rt)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ot()})}Lt(t){this.Nt.push(t)}qt(t){const e=this.Rt.indexOf(t);this.Rt.splice(e,1)}}class Yr{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=tt(t)}get(t){const e=j(t,this._firestore),r=new Ht(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return p();const i=s[0];if(i.isFoundDocument())return new Y(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new Y(this._firestore,r,e._key,null,e.converter);throw p()})}set(t,e,r){const s=j(t,this._firestore),i=Wt(s.converter,e,r),o=zt(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(t,e,r,...s){const i=j(t,this._firestore);let o;return o=typeof(e=b(e))=="string"||e instanceof J?be(this._dataReader,"Transaction.update",i._key,e,r,s):_e(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=j(t,this._firestore);return this._transaction.delete(e._key),this}}function qs(n,t,e){const r=M(n=x(n,U)),s=Object.assign(Object.assign({},Kr),e);(function(o){if(o.maxAttempts<1)throw new c(h,"Max attempts must be at least 1")})(s);const i=new ce;return new Wr(new Hr,r,s,o=>t(new Yr(n,o)),i).run(),i.promise}(function(n){ot=n})(`${Gn}_lite`),jn(new zn("firestore/lite",(n,{instanceIdentifier:t,options:e})=>{const r=n.getProvider("app").getImmediate(),s=new U(new Yn(n.getProvider("auth-internal")),new tr(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new mt(i.options.projectId,o)}(r,t),r);return e&&s._setSettings(e),s},"PUBLIC").setMultipleInstances(!0)),Fe("firestore-lite","3.8.0",""),Fe("firestore-lite","3.8.0","esm2017");export{ns as AggregateField,Cr as AggregateQuerySnapshot,it as Bytes,P as CollectionReference,E as DocumentReference,Y as DocumentSnapshot,J as FieldPath,Z as FieldValue,U as Firestore,c as FirestoreError,we as GeoPoint,q as Query,lt as QueryCompositeFilterConstraint,bt as QueryConstraint,Nn as QueryDocumentSnapshot,Kt as QueryEndAtConstraint,Tt as QueryFieldFilterConstraint,Gt as QueryLimitConstraint,Ie as QueryOrderByConstraint,re as QuerySnapshot,Qt as QueryStartAtConstraint,D as Timestamp,Yr as Transaction,Gr as WriteBatch,Es as addDoc,Ss as aggregateQuerySnapshotEqual,cs as and,Vs as arrayRemove,Fs as arrayUnion,rs as collection,ss as collectionGroup,xr as connectFirestoreEmulator,Ts as deleteDoc,Is as deleteField,Pr as doc,os as documentId,ys as endAt,gs as endBefore,ks as getCount,ws as getDoc,vs as getDocs,ts as getFirestore,Ds as increment,Zr as initializeFirestore,ds as limit,fs as limitToLast,ls as or,hs as orderBy,as as query,En as queryEqual,is as refEqual,qs as runTransaction,As as serverTimestamp,_s as setDoc,Jr as setLogLevel,zr as snapshotEqual,ps as startAfter,ms as startAt,es as terminate,bs as updateDoc,us as where,Ns as writeBatch};
