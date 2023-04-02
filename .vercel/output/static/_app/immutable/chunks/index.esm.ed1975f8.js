import{F as $n,b as He,d as Mn,c as Bn,aB as Un,aC as jn,g as T,aD as zn,_ as Qn,C as Gn,r as Ne,aE as Kn,aF as oe,aG as Wn}from"./firebase.42ff2f5b.js";/**
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
 */class F{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}F.UNAUTHENTICATED=new F(null),F.GOOGLE_CREDENTIALS=new F("google-credentials-uid"),F.FIRST_PARTY=new F("first-party-uid"),F.MOCK_USER=new F("mock-user");/**
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
 */let ot="9.19.0";/**
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
 */const Q=new Kn("@firebase/firestore");function os(n){Q.setLogLevel(n)}function G(n,...t){if(Q.logLevel<=oe.DEBUG){const e=t.map(ae);Q.debug(`Firestore (${ot}): ${n}`,...e)}}function $t(n,...t){if(Q.logLevel<=oe.ERROR){const e=t.map(ae);Q.error(`Firestore (${ot}): ${n}`,...e)}}function Ye(n,...t){if(Q.logLevel<=oe.WARN){const e=t.map(ae);Q.warn(`Firestore (${ot}): ${n}`,...e)}}function ae(n){if(typeof n=="string")return n;try{return t=n,JSON.stringify(t)}catch{return n}/**
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
 */function p(n="Unexpected state"){const t=`FIRESTORE (${ot}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function D(n,t){n||p()}function at(n,t){return n}/**
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
 */const xe="ok",ue="cancelled",rt="unknown",h="invalid-argument",Je="deadline-exceeded",le="not-found",Hn="already-exists",Ze="permission-denied",Vt="unauthenticated",Xe="resource-exhausted",L="failed-precondition",ce="aborted",tn="out-of-range",he="unimplemented",en="internal",nn="unavailable",Yn="data-loss";class c extends $n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class de{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class rn{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(F.UNAUTHENTICATED))}shutdown(){}}class Zn{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xn{constructor(t){this.auth=null,t.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(D(typeof t.accessToken=="string"),new rn(t.accessToken,new F(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class tr{constructor(t,e,r){this.t=t,this.i=e,this.o=r,this.type="FirstParty",this.user=F.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const t=this.h();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class er{constructor(t,e,r){this.t=t,this.i=e,this.o=r}getToken(){return Promise.resolve(new tr(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable(()=>e(F.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rr{constructor(t){this.l=t,this.appCheck=null,t.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(D(typeof t.token=="string"),new nr(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */class sr{constructor(t,e,r,s,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class mt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mt&&t.projectId===this.projectId&&t.database===this.database}}class pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&p(),r===void 0?r=t.length-e:r>t.length-e&&p(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class y extends pt{construct(t,e,r){return new y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new y(e)}static emptyPath(){return new y([])}}const ir=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class N extends pt{construct(t,e,r){return new N(t,e,r)}static isValidIdentifier(t){return ir.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),N.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new N(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new c(h,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new c(h,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(h,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new c(h,"Unterminated ` in path: "+t);return new N(e)}static emptyPath(){return new N([])}}/**
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
 */class _{constructor(t){this.path=t}static fromPath(t){return new _(y.fromString(t))}static fromName(t){return new _(y.fromString(t).popFirst(5))}static empty(){return new _(y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _(new y(t.slice()))}}/**
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
 */function fe(n,t,e){if(!e)throw new c(h,`Function ${n}() cannot be called with an empty ${t}.`)}function qe(n){if(!_.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pe(n){if(_.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":p()}function R(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Mt(n);throw new c(h,`Expected type '${t.name}', but it was: ${e}`)}}return n}function sn(n,t){if(t<=0)throw new c(h,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let It=null;function or(){return It===null?It=268435456+Math.round(2147483648*Math.random()):It++,"0x"+It.toString(16)}/**
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
 */function on(n){return n==null}function Dt(n){return n===0&&1/n==-1/0}/**
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
 */const ar={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Re,m;function Oe(n){if(n===void 0)return $t("RPC_ERROR","HTTP error has no status"),rt;switch(n){case 200:return xe;case 400:return L;case 401:return Vt;case 403:return Ze;case 404:return le;case 409:return ce;case 416:return tn;case 429:return Xe;case 499:return ue;case 500:return rt;case 501:return he;case 503:return nn;case 504:return Je;default:return n>=200&&n<300?xe:n>=400&&n<500?L:n>=500&&n<600?en:rt}}/**
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
 */(m=Re||(Re={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";class ur extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.m=e+"://"+t.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(t,e,r,s,i){const o=or(),a=this.A(t,e);G("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.I(u,s,i),this.T(t,a,u,r).then(l=>(G("RestConnection",`Received RPC '${t}' ${o}: `,l),l),l=>{throw Ye("RestConnection",`RPC '${t}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}R(t,e,r,s,i,o){return this.v(t,e,r,s,i)}I(t,e,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+ot,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}A(t,e){const r=ar[t];return`${this.m}/v1/${e}:${r}`}}{constructor(t,e){super(t),this.P=e}V(t,e){throw new Error("Not supported by FetchConnection")}async T(t,e,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(e,{method:"POST",headers:r,body:o})}catch(u){const l=u;throw new c(Oe(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let u=await a.json();Array.isArray(u)&&(u=u[0]);const l=(i=u==null?void 0:u.error)===null||i===void 0?void 0:i.message;throw new c(Oe(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */const lr=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class me{constructor(t){this.alias=t}static $(t){return lr.test(t)}canonicalString(){let t=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return me.$(t)||(t="`"+t+"`"),t}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class cr{constructor(t,e,r){this.alias=t,this.D=e,this.fieldPath=r}}/**
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
 */function hr(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class dr{static N(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=hr(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function E(n,t){return n<t?-1:n>t?1:0}function pe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */function Ce(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function bt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fr("Invalid base64 string: "+s):s}}(t);return new $(e)}static fromUint8Array(t){const e=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(t);return new $(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return E(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const mr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(n){if(D(!!n),typeof n=="string"){let t=0;const e=mr.exec(n);if(D(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:b(n.seconds),nanos:b(n.nanos)}}function b(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gt(n){return typeof n=="string"?$.fromBase64String(n):$.fromUint8Array(n)}/**
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
 */class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new c(h,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new c(h,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new x(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?E(this.nanoseconds,t.nanoseconds):E(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function ge(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function an(n){const t=n.mapValue.fields.__previous_value__;return ge(t)?an(t):t}function yt(n){const t=K(n.mapValue.fields.__local_write_time__.timestampValue);return new x(t.seconds,t.nanos)}/**
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
 */const At={fields:{__type__:{stringValue:"__max__"}}};function W(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ge(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:p()}function st(n,t){if(n===t)return!0;const e=W(n);if(e!==W(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yt(n).isEqual(yt(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=K(r.timestampValue),o=K(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return gt(r.bytesValue).isEqual(gt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return b(r.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(r.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return b(r.integerValue)===b(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=b(r.doubleValue),o=b(s.doubleValue);return i===o?Dt(i)===Dt(o):isNaN(i)&&isNaN(o)}return!1}(n,t);case 9:return pe(n.arrayValue.values||[],t.arrayValue.values||[],st);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ce(i)!==Ce(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!st(i[a],o[a])))return!1;return!0}(n,t);default:return p()}}function wt(n,t){return(n.values||[]).find(e=>st(e,t))!==void 0}function Nt(n,t){if(n===t)return 0;const e=W(n),r=W(t);if(e!==r)return E(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return E(n.booleanValue,t.booleanValue);case 2:return function(s,i){const o=b(s.integerValue||s.doubleValue),a=b(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,t);case 3:return Le(n.timestampValue,t.timestampValue);case 4:return Le(yt(n),yt(t));case 5:return E(n.stringValue,t.stringValue);case 6:return function(s,i){const o=gt(s),a=gt(i);return o.compareTo(a)}(n.bytesValue,t.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=E(o[u],a[u]);if(l!==0)return l}return E(o.length,a.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,i){const o=E(b(s.latitude),b(i.latitude));return o!==0?o:E(b(s.longitude),b(i.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Nt(o[u],a[u]);if(l)return l}return E(o.length,a.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,i){if(s===At&&i===At)return 0;if(s===At)return 1;if(i===At)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const g=E(a[d],l[d]);if(g!==0)return g;const f=Nt(o[a[d]],u[l[d]]);if(f!==0)return f}return E(a.length,l.length)}(n.mapValue,t.mapValue);default:throw p()}}function Le(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return E(n,t);const e=K(n),r=K(t),s=E(e.seconds,r.seconds);return s!==0?s:E(e.nanos,r.nanos)}function xt(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function un(n){return!!n&&"arrayValue"in n}function $e(n){return!!n&&"nullValue"in n}function Me(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xt(n){return!!n&&"mapValue"in n}function ct(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return bt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ct(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ct(n.arrayValue.values[e]);return t}return Object.assign({},n)}class qt{constructor(t,e){this.position=t,this.inclusive=e}}function Be(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!st(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ln{}class q extends ln{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new pr(t,e,r):e==="array-contains"?new wr(t,r):e==="in"?new vr(t,r):e==="not-in"?new _r(t,r):e==="array-contains-any"?new br(t,r):new q(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new gr(t,r):new yr(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Nt(e,this.value)):e!==null&&W(this.value)===W(e)&&this.matchesComparison(Nt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class H extends ln{constructor(t,e){super(),this.filters=t,this.op=e,this.F=null}static create(t,e){return new H(t,e)}matches(t){return this.op==="and"?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.F!==null||(this.F=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.F}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.S(e=>e.isInequality());return t!==null?t.field:null}S(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function cn(n,t){return n instanceof q?function(e,r){return r instanceof q&&e.op===r.op&&e.field.isEqual(r.field)&&st(e.value,r.value)}(n,t):n instanceof H?function(e,r){return r instanceof H&&e.op===r.op&&e.filters.length===r.filters.length?e.filters.reduce((s,i,o)=>s&&cn(i,r.filters[o]),!0):!1}(n,t):void p()}class pr extends q{constructor(t,e,r){super(t,e,r),this.key=_.fromName(r.referenceValue)}matches(t){const e=_.comparator(t.key,this.key);return this.matchesComparison(e)}}class gr extends q{constructor(t,e){super(t,"in",e),this.keys=hn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class yr extends q{constructor(t,e){super(t,"not-in",e),this.keys=hn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function hn(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>_.fromName(r.referenceValue))}class wr extends q{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return un(e)&&wt(e.arrayValue,this.value)}}class vr extends q{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wt(this.value.arrayValue,e)}}class _r extends q{constructor(t,e){super(t,"not-in",e)}matches(t){if(wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wt(this.value.arrayValue,e)}}class br extends q{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!un(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wt(this.value.arrayValue,r))}}/**
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
 */class ht{constructor(t,e="asc"){this.field=t,this.dir=e}}function Tr(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class v{constructor(t){this.timestamp=t}static fromTimestamp(t){return new v(t)}static min(){return new v(new x(0,0))}static max(){return new v(new x(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pt{constructor(t,e){this.comparator=t,this.root=e||k.EMPTY}insert(t,e){return new Pt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,k.BLACK,null,null))}remove(t){return new Pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,k.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ft(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ft(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ft(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ft(this.root,t,this.comparator,!0)}}class Ft{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class k{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??k.RED,this.left=s??k.EMPTY,this.right=i??k.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new k(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return k.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return k.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw p();const t=this.left.check();if(t!==this.right.check())throw p();return t+(this.isRed()?0:1)}}k.EMPTY=null,k.RED=!0,k.BLACK=!1;k.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(n,t,e,r,s){return this}insert(n,t,e){return new k(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(t){this.comparator=t,this.data=new Pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ue(this.data.getIterator())}getIteratorFrom(t){return new Ue(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Rt(this.comparator);return e.data=t,e}}class Ue{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Y{constructor(t){this.fields=t,t.sort(N.comparator)}static empty(){return new Y([])}unionWith(t){let e=new Rt(N.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Y(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class V{constructor(t){this.value=t}static empty(){return new V({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ct(e)}setAll(t){let e=N.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=ct(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Xt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Xt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){bt(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new V(ct(this.value))}}/**
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
 */class C{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new C(t,0,v.min(),v.min(),v.min(),V.empty(),0)}static newFoundDocument(t,e,r,s){return new C(t,1,e,v.min(),r,s,0)}static newNoDocument(t,e){return new C(t,2,e,v.min(),v.min(),V.empty(),0)}static newUnknownDocument(t,e){return new C(t,3,e,v.min(),v.min(),V.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(v.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=V.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=V.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=v.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof C&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new C(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.q=null}}function je(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Er(n,t,e,r,s,i,o)}/**
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
 */class Z{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.O=null,this.k=null,this.startAt,this.endAt}}function ye(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Bt(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function dn(n){return n.collectionGroup!==null}function ee(n){const t=at(n);if(t.O===null){t.O=[];const e=Bt(t),r=ye(t);if(e!==null&&r===null)e.isKeyField()||t.O.push(new ht(e)),t.O.push(new ht(N.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.O.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.O.push(new ht(N.keyField(),i))}}}return t.O}function Ot(n){const t=at(n);if(!t.k)if(t.limitType==="F")t.k=je(t.path,t.collectionGroup,ee(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of ee(t)){const o=i.dir==="desc"?"asc":"desc";e.push(new ht(i.field,o))}const r=t.endAt?new qt(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new qt(t.startAt.position,t.startAt.inclusive):null;t.k=je(t.path,t.collectionGroup,e,t.filters,t.limit,r,s)}return t.k}function ne(n,t){t.getFirstInequalityField(),Bt(n);const e=n.filters.concat([t]);return new Z(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Sr(n,t){return function(e,r){if(e.limit!==r.limit||e.orderBy.length!==r.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!Tr(e.orderBy[s],r.orderBy[s]))return!1;if(e.filters.length!==r.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!cn(e.filters[s],r.filters[s]))return!1;return e.collectionGroup===r.collectionGroup&&!!e.path.isEqual(r.path)&&!!Be(e.startAt,r.startAt)&&Be(e.endAt,r.endAt)}(Ot(n),Ot(t))&&n.limitType===t.limitType}/**
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
 */function fn(n,t){return function(e){return typeof e=="number"&&Number.isInteger(e)&&!Dt(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,r){if(e.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dt(r)?"-0":r}}(n,t)}/**
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
 */class Ut{constructor(){this._=void 0}}class mn extends Ut{}class pn extends Ut{constructor(t){super(),this.elements=t}}class gn extends Ut{constructor(t){super(),this.elements=t}}class yn extends Ut{constructor(t,e){super(),this.serializer=t,this.C=e}}/**
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
 */class jt{constructor(t,e){this.field=t,this.transform=e}}class A{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new A}static exists(t){return new A(void 0,t)}static updateTime(t){return new A(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class zt{}class wn extends zt{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class we extends zt{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Qt extends zt{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vn extends zt{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const kr=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ir=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ar=(()=>({and:"AND",or:"OR"}))();class Fr{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function re(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vr(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Dr(n,t){return re(n,t.toTimestamp())}function dt(n){return D(!!n),v.fromTimestamp(function(t){const e=K(t);return new x(e.seconds,e.nanos)}(n))}function ve(n,t){return function(e){return new y(["projects",e.projectId,"databases",e.database])}(n).child("documents").child(t).canonicalString()}function Ct(n,t){return ve(n.databaseId,t.path)}function se(n,t){const e=function(s){const i=y.fromString(s);return D(En(i)),i}(t);if(e.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new _((D((r=e).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function ze(n,t){return ve(n.databaseId,t)}function _n(n){return new y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qe(n,t,e){return{name:Ct(n,t),fields:e.value.mapValue.fields}}function Nr(n,t){return"found"in t?function(e,r){D(!!r.found),r.found.name,r.found.updateTime;const s=se(e,r.found.name),i=dt(r.found.updateTime),o=r.found.createTime?dt(r.found.createTime):v.min(),a=new V({mapValue:{fields:r.found.fields}});return C.newFoundDocument(s,i,o,a)}(n,t):"missing"in t?function(e,r){D(!!r.missing),D(!!r.readTime);const s=se(e,r.missing),i=dt(r.readTime);return C.newNoDocument(s,i)}(n,t):p()}function xr(n,t){let e;if(t instanceof wn)e={update:Qe(n,t.key,t.value)};else if(t instanceof Qt)e={delete:Ct(n,t.key)};else if(t instanceof we)e={update:Qe(n,t.key,t.data),updateMask:Or(t.fieldMask)};else{if(!(t instanceof vn))return p();e={verify:Ct(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof mn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yn)return{fieldPath:i.field.canonicalString(),increment:o.C};throw p()}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Dr(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:p()}(n,t.precondition)),e}function bn(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ze(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ze(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Tn(H.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:U(d.field),direction:qr(d.dir)}}(l))}(t.orderBy);i&&(e.structuredQuery.orderBy=i);const o=function(u,l){return u.useProto3Json||on(l)?l:{value:l}}(n,t.limit);var a;return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function qr(n){return kr[n]}function Pr(n){return Ir[n]}function Rr(n){return Ar[n]}function U(n){return{fieldPath:n.canonicalString()}}function Tn(n){return n instanceof q?function(t){if(t.op==="=="){if(Me(t.value))return{unaryFilter:{field:U(t.field),op:"IS_NAN"}};if($e(t.value))return{unaryFilter:{field:U(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Me(t.value))return{unaryFilter:{field:U(t.field),op:"IS_NOT_NAN"}};if($e(t.value))return{unaryFilter:{field:U(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:U(t.field),op:Pr(t.op),value:t.value}}}(n):n instanceof H?function(t){const e=t.getFilters().map(r=>Tn(r));return e.length===1?e[0]:{compositeFilter:{op:Rr(t.op),filters:e}}}(n):p()}function Or(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function En(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function _e(n){return new Fr(n,!0)}/**
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
 */class Sn{constructor(t,e,r=1e3,s=1.5,i=6e4){this.M=t,this.timerId=e,this.L=r,this.U=s,this.j=i,this.B=0,this.W=null,this.G=Date.now(),this.reset()}reset(){this.B=0}K(){this.B=this.j}Y(t){this.cancel();const e=Math.floor(this.B+this.H()),r=Math.max(0,Date.now()-this.G),s=Math.max(0,e-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.B} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.W=this.M.enqueueAfterDelay(this.timerId,s,()=>(this.G=Date.now(),t())),this.B*=this.U,this.B<this.L&&(this.B=this.L),this.B>this.j&&(this.B=this.j)}Z(){this.W!==null&&(this.W.skipDelay(),this.W=null)}cancel(){this.W!==null&&(this.W.cancel(),this.W=null)}H(){return(Math.random()-.5)*this.B}}/**
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
 */class Cr extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new c(L,"The client has already been terminated.")}v(t,e,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(t,e,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Vt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(rt,s.toString())})}R(t,e,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(t,e,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Vt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(rt,i.toString())})}terminate(){this.J=!0}}async function ut(n,t){const e=at(n),r=_n(e.serializer)+"/documents",s={writes:t.map(i=>xr(e.serializer,i))};await e.v("Commit",r,s)}async function kn(n,t){const e=at(n),r=_n(e.serializer)+"/documents",s={documents:t.map(u=>Ct(e.serializer,u))},i=await e.R("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach(u=>{const l=Nr(e.serializer,u);o.set(l.key.toString(),l)});const a=[];return t.forEach(u=>{const l=o.get(u.toString());D(!!l),a.push(l)}),a}async function Lr(n,t){const e=at(n),r=bn(e.serializer,Ot(t));return(await e.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const u=se(i,o.name),l=dt(o.updateTime),d=o.createTime?dt(o.createTime):v.min(),g=new V({mapValue:{fields:o.fields}}),f=C.newFoundDocument(u,l,d,g);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(e.serializer,s.document,void 0))}async function $r(n,t,e){const r=at(n),s=function(l,d,g){const f=bn(l,d),I=[];return g.forEach(w=>{w.D==="count"?I.push({alias:w.alias.canonicalString(),count:{}}):w.D==="avg"?I.push({alias:w.alias.canonicalString(),avg:{field:U(w.fieldPath)}}):w.D==="sum"&&I.push({alias:w.alias.canonicalString(),sum:{field:U(w.fieldPath)}})}),{structuredAggregationQuery:{aggregations:I,structuredQuery:f.structuredQuery},parent:f.parent}}(r.serializer,Ot(t),e),i=s.parent;r.connection.g||delete s.parent;const o=(await r.R("RunAggregationQuery",i,s,1)).filter(l=>!!l.result);return D(o.length===1),(a=o[0]).result,a.result.aggregateFields,new V({mapValue:{fields:(u=a.result)===null||u===void 0?void 0:u.aggregateFields}});var a,u}/**
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
 */const ft=new Map;function M(n){if(n._terminated)throw new c(L,"The client has already been terminated.");if(!ft.has(n)){G("ComponentProvider","Initializing Datastore");const i=function(u){return new ur(u,fetch.bind(null))}((t=n._databaseId,e=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new sr(t,e,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=_e(n._databaseId),a=function(u,l,d,g){return new Cr(u,l,d,g)}(n._authCredentials,n._appCheckCredentials,i,o);ft.set(n,a)}var t,e,r,s;/**
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
*/return ft.get(n)}class Ge{constructor(t){var e;if(t.host===void 0){if(t.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new c(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class B{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ge({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new c(L,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new c(L,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ge(t),t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new Jn;switch(e.type){case"firstParty":return new er(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ft.get(t);e&&(G("ComponentProvider","Removing Datastore"),ft.delete(t),e.terminate())}(this),Promise.resolve()}}function as(n,t,e){e||(e="(default)");const r=He(n,"firestore/lite");if(r.isInitialized(e))throw new c(L,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function us(n,t){const e=typeof n=="object"?n:Mn(),r=typeof n=="string"?n:t||"(default)",s=He(e,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Bn("firestore");i&&Mr(s,...i)}return s}function Mr(n,t,e,r={}){var s;const i=(n=R(n,B))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Ye("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${e}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=F.MOCK_USER;else{o=Un(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new c(h,"mockUserToken must contain 'sub' or 'user_id' field!");a=new F(u)}n._authCredentials=new Zn(new rn(o,a))}}function ls(n){return n=R(n,B),jn(n.app,"firestore/lite"),n._delete()}/**
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
 */class vt{constructor(t="count",e){this._aggregateType=t,this._internalFieldPath=e,this.type="AggregateField"}}class Br{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
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
 */class S{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new O(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new S(this.firestore,t,this._key)}}class P{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new P(this.firestore,t,this._query)}}class O extends P{constructor(t,e,r){super(t,e,new Z(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new S(this.firestore,null,new _(t))}withConverter(t){return new O(this.firestore,t,this._path)}}function cs(n,t,...e){if(n=T(n),fe("collection","path",t),n instanceof B){const r=y.fromString(t,...e);return Pe(r),new O(n,null,r)}{if(!(n instanceof S||n instanceof O))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(t,...e));return Pe(r),new O(n.firestore,null,r)}}function hs(n,t){if(n=R(n,B),fe("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new c(h,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new P(n,null,function(e){return new Z(y.emptyPath(),e)}(t))}function Ur(n,t,...e){if(n=T(n),arguments.length===1&&(t=dr.N()),fe("doc","path",t),n instanceof B){const r=y.fromString(t,...e);return qe(r),new S(n,null,new _(r))}{if(!(n instanceof S||n instanceof O))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(t,...e));return qe(r),new S(n.firestore,n instanceof O?n.converter:null,new _(r))}}function ds(n,t){return n=T(n),t=T(t),(n instanceof S||n instanceof O)&&(t instanceof S||t instanceof O)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function In(n,t){return n=T(n),t=T(t),n instanceof P&&t instanceof P&&n.firestore===t.firestore&&Sr(n._query,t._query)&&n.converter===t.converter}/**
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
 */class X{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new N(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function fs(){return new X("__name__")}/**
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
 */class tt{constructor(t){this._methodName=t}}/**
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
 */class be{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return E(this._lat,t._lat)||E(this._long,t._long)}}/**
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
 */const jr=/^__.*__$/;class zr{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new we(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class An{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new we(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Fn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class Gt{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(t){return new Gt(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.nt({path:r,st:!1});return s.it(t),s}ot(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.nt({path:r,st:!1});return s.tt(),s}ut(t){return this.nt({path:void 0,st:!0})}ct(t){return Lt(t,this.settings.methodName,this.settings.at||!1,this.path,this.settings.ht)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}tt(){if(this.path)for(let t=0;t<this.path.length;t++)this.it(this.path.get(t))}it(t){if(t.length===0)throw this.ct("Document fields must not be empty");if(Fn(this.et)&&jr.test(t))throw this.ct('Document fields cannot begin and end with "__"')}}class Qr{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||_e(t)}lt(t,e,r,s=!1){return new Gt({et:t,methodName:e,ht:r,path:N.emptyPath(),st:!1,at:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function et(n){const t=n._freezeSettings(),e=_e(n._databaseId);return new Qr(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Kt(n,t,e,r,s,i={}){const o=n.lt(i.merge||i.mergeFields?2:0,t,e,s);ke("Data must be an object, but it was:",o,r);const a=Nn(r,o);let u,l;if(i.merge)u=new Y(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const f=_t(t,g,e);if(!o.contains(f))throw new c(h,`Field '${f}' is specified in your field mask but missing from your input data.`);qn(d,f)||d.push(f)}u=new Y(d),l=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,l=o.fieldTransforms;return new zr(new V(a),u,l)}class Tt extends tt{_toFieldTransform(t){if(t.et!==2)throw t.et===1?t.ct(`${this._methodName}() can only appear at the top level of your update data`):t.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Tt}}function Vn(n,t,e){return new Gt({et:3,ht:t.settings.ht,methodName:n._methodName,st:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Te extends tt{_toFieldTransform(t){return new jt(t.path,new mn)}isEqual(t){return t instanceof Te}}class Gr extends tt{constructor(t,e){super(t),this.ft=e}_toFieldTransform(t){const e=Vn(this,t,!0),r=this.ft.map(i=>nt(i,e)),s=new pn(r);return new jt(t.path,s)}isEqual(t){return this===t}}class Kr extends tt{constructor(t,e){super(t),this.ft=e}_toFieldTransform(t){const e=Vn(this,t,!0),r=this.ft.map(i=>nt(i,e)),s=new gn(r);return new jt(t.path,s)}isEqual(t){return this===t}}class Wr extends tt{constructor(t,e){super(t),this.dt=e}_toFieldTransform(t){const e=new yn(t.serializer,fn(t.serializer,this.dt));return new jt(t.path,e)}isEqual(t){return this===t}}function Ee(n,t,e,r){const s=n.lt(1,t,e);ke("Data must be an object, but it was:",s,r);const i=[],o=V.empty();bt(r,(u,l)=>{const d=Ie(t,u,e);l=T(l);const g=s.ot(d);if(l instanceof Tt)i.push(d);else{const f=nt(l,g);f!=null&&(i.push(d),o.set(d,f))}});const a=new Y(i);return new An(o,a,s.fieldTransforms)}function Se(n,t,e,r,s,i){const o=n.lt(1,t,e),a=[_t(t,r,e)],u=[s];if(i.length%2!=0)throw new c(h,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(_t(t,i[f])),u.push(i[f+1]);const l=[],d=V.empty();for(let f=a.length-1;f>=0;--f)if(!qn(l,a[f])){const I=a[f];let w=u[f];w=T(w);const j=o.ot(I);if(w instanceof Tt)l.push(I);else{const kt=nt(w,j);kt!=null&&(l.push(I),d.set(I,kt))}}const g=new Y(l);return new An(d,g,o.fieldTransforms)}function Dn(n,t,e,r=!1){return nt(e,n.lt(r?4:3,t))}function nt(n,t){if(xn(n=T(n)))return ke("Unsupported field value:",t,n),Nn(n,t);if(n instanceof tt)return function(e,r){if(!Fn(r.et))throw r.ct(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${e._methodName}() is not currently supported inside arrays`);const s=e._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.st&&t.et!==4)throw t.ct("Nested arrays are not supported");return function(e,r){const s=[];let i=0;for(const o of e){let a=nt(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,t)}return function(e,r){if((e=T(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return fn(r.serializer,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const s=x.fromDate(e);return{timestampValue:re(r.serializer,s)}}if(e instanceof x){const s=new x(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:re(r.serializer,s)}}if(e instanceof be)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof it)return{bytesValue:Vr(r.serializer,e._byteString)};if(e instanceof S){const s=r.databaseId,i=e.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ve(e.firestore._databaseId||r.databaseId,e._key.path)}}throw r.ct(`Unsupported field value: ${Mt(e)}`)}(n,t)}function Nn(n,t){const e={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bt(n,(r,s)=>{const i=nt(s,t.rt(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function xn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof x||n instanceof be||n instanceof it||n instanceof S||n instanceof tt)}function ke(n,t,e){if(!xn(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const r=Mt(e);throw r==="an object"?t.ct(n+" a custom object"):t.ct(n+" "+r)}}function _t(n,t,e){if((t=T(t))instanceof X)return t._internalPath;if(typeof t=="string")return Ie(n,t);throw Lt("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hr=new RegExp("[~\\*/\\[\\]]");function Ie(n,t,e){if(t.search(Hr)>=0)throw Lt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new X(...t.split("."))._internalPath}catch{throw Lt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Lt(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new c(h,a+n+u)}function qn(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class J{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new S(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ae("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Pn extends J{data(){return super.data()}}class ie{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function Yr(n,t){return n=T(n),t=T(t),n instanceof J&&t instanceof J?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof ie&&t instanceof ie&&In(n.query,t.query)&&pe(n.docs,t.docs,Yr)}function Ae(n,t){return typeof t=="string"?Ie(n,t):t instanceof X?t._internalPath:t._delegate._internalPath}/**
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
 */class Fe{}class Et extends Fe{}function ms(n,t,...e){let r=[];t instanceof Fe&&r.push(t),r=r.concat(e),function(s){const i=s.filter(a=>a instanceof lt).length,o=s.filter(a=>a instanceof St).length;if(i>1||i>0&&o>0)throw new c(h,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class St extends Et{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new St(t,e,r)}_apply(t){const e=this._parse(t);return On(t._query,e),new P(t.firestore,t.converter,ne(t._query,e))}_parse(t){const e=et(t.firestore);return function(s,i,o,a,u,l,d){let g;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new c(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){We(d,l);const f=[];for(const I of d)f.push(Ke(a,s,I));g={arrayValue:{values:f}}}else g=Ke(a,s,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||We(d,l),g=Dn(o,i,d,l==="in"||l==="not-in");return q.create(u,l,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ps(n,t,e){const r=t,s=Ae("where",n);return St._create(s,r,e)}class lt extends Fe{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new lt(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:H.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)On(i,a),i=ne(i,a)}(t._query,e),new P(t.firestore,t.converter,ne(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gs(...n){return n.forEach(t=>Ln("or",t)),lt._create("or",n)}function ys(...n){return n.forEach(t=>Ln("and",t)),lt._create("and",n)}class Ve extends Et{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ve(t,e)}_apply(t){const e=function(r,s,i){if(r.startAt!==null)throw new c(h,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new c(h,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ht(s,i);return function(a,u){if(ye(a)===null){const l=Bt(a);l!==null&&Cn(a,l,u.field)}}(r,o),o}(t._query,this._field,this._direction);return new P(t.firestore,t.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Z(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function ws(n,t="asc"){const e=t,r=Ae("orderBy",n);return Ve._create(r,e)}class Wt extends Et{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Wt(t,e,r)}_apply(t){return new P(t.firestore,t.converter,function(e,r,s){return new Z(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),r,s,e.startAt,e.endAt)}(t._query,this._limit,this._limitType))}}function vs(n){return sn("limit",n),Wt._create("limit",n,"F")}function _s(n){return sn("limitToLast",n),Wt._create("limitToLast",n,"L")}class Ht extends Et{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Ht(t,e,r)}_apply(t){const e=Rn(t,this.type,this._docOrFields,this._inclusive);return new P(t.firestore,t.converter,function(r,s){return new Z(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(t._query,e))}}function bs(...n){return Ht._create("startAt",n,!0)}function Ts(...n){return Ht._create("startAfter",n,!1)}class Yt extends Et{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Yt(t,e,r)}_apply(t){const e=Rn(t,this.type,this._docOrFields,this._inclusive);return new P(t.firestore,t.converter,function(r,s){return new Z(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(t._query,e))}}function Es(...n){return Yt._create("endBefore",n,!1)}function Ss(...n){return Yt._create("endAt",n,!0)}function Rn(n,t,e,r){if(e[0]=T(e[0]),e[0]instanceof J)return function(s,i,o,a,u){if(!a)throw new c(le,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const d of ee(s))if(d.field.isKeyField())l.push(xt(i,a.key));else{const g=a.data.field(d.field);if(ge(g))throw new c(h,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const f=d.field.canonicalString();throw new c(h,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(g)}return new qt(l,u)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=et(n.firestore);return function(i,o,a,u,l,d){const g=i.explicitOrderBy;if(l.length>g.length)throw new c(h,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const w=l[I];if(g[I].field.isKeyField()){if(typeof w!="string")throw new c(h,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof w}`);if(!dn(i)&&w.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${w}' contains a slash.`);const j=i.path.child(y.fromString(w));if(!_.isDocumentKey(j))throw new c(h,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${j}' is not because it contains an odd number of segments.`);const kt=new _(j);f.push(xt(o,kt))}else{const j=Dn(a,u,w);f.push(j)}}return new qt(f,d)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Ke(n,t,e){if(typeof(e=T(e))=="string"){if(e==="")throw new c(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dn(t)&&e.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(y.fromString(e));if(!_.isDocumentKey(r))throw new c(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xt(n,new _(r))}if(e instanceof S)return xt(n,e._key);throw new c(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mt(e)}.`)}function We(n,t){if(!Array.isArray(n)||n.length===0)throw new c(h,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function On(n,t){if(t.isInequality()){const r=Bt(n),s=t.field;if(r!==null&&!r.isEqual(s))throw new c(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ye(n);i!==null&&Cn(n,s,i)}const e=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new c(h,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new c(h,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Cn(n,t,e){if(!e.isEqual(t))throw new c(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}function Ln(n,t){if(!(t instanceof St||t instanceof lt))throw new c(h,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}/**
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
 */function Jt(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Zt extends class{convertValue(t,e="none"){switch(W(t)){case 0:return null;case 1:return t.booleanValue;case 2:return b(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw p()}}convertObject(t,e){const r={};return bt(t.fields,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new be(b(t.latitude),b(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=an(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yt(t));default:return null}}convertTimestamp(t){const e=K(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=y.fromString(t);D(En(r));const s=new mt(r.get(1),r.get(3)),i=new _(r.popFirst(5));return s.isEqual(e)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new it(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new S(this.firestore,null,e)}}function ks(n){const t=M((n=R(n,S)).firestore),e=new Zt(n.firestore);return kn(t,[n._key]).then(r=>{D(r.length===1);const s=r[0];return new J(n.firestore,e,n._key,s.isFoundDocument()?s:null,n.converter)})}function Is(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(he,"limitToLast() queries require specifying at least one orderBy() clause")})((n=R(n,P))._query);const t=M(n.firestore),e=new Zt(n.firestore);return Lr(t,n._query).then(r=>{const s=r.map(i=>new Pn(n.firestore,e,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new ie(n,s)})}function As(n,t,e){const r=Jt((n=R(n,S)).converter,t,e),s=Kt(et(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return ut(M(n.firestore),[s.toMutation(n._key,A.none())])}function Fs(n,t,e,...r){const s=et((n=R(n,S)).firestore);let i;return i=typeof(t=T(t))=="string"||t instanceof X?Se(s,"updateDoc",n._key,t,e,r):Ee(s,"updateDoc",n._key,t),ut(M(n.firestore),[i.toMutation(n._key,A.exists(!0))])}function Vs(n){return ut(M((n=R(n,S)).firestore),[new Qt(n._key,A.none())])}function Ds(n,t){const e=Ur(n=R(n,O)),r=Jt(n.converter,t),s=Kt(et(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return ut(M(n.firestore),[s.toMutation(e._key,A.exists(!1))]).then(()=>e)}/**
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
 */function Ns(n){return Jr(n,{count:Zr()})}function Jr(n,t){const e=R(n.firestore,B),r=M(e),s=function(i,o){const a=[];for(const u in i)Object.prototype.hasOwnProperty.call(i,u)&&a.push(o(i[u],u,i));return a}(t,(i,o)=>new cr(new me(o),i._aggregateType,i._internalFieldPath));return $r(r,n._query,s).then(i=>function(o,a,u){const l=new Zt(o);return new Br(a,l,u)}(e,n,i))}function xs(n){return new vt("sum",_t("sum",n))}function qs(n){return new vt("avg",_t("average",n))}function Zr(){return new vt("count")}function Ps(n,t){var e,r;return n instanceof vt&&t instanceof vt&&n._aggregateType===t._aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function Rs(n,t){return In(n.query,t.query)&&zn(n.data(),t.data())}/**
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
 */function Os(){return new Tt("deleteField")}function Cs(){return new Te("serverTimestamp")}function Ls(...n){return new Gr("arrayUnion",n)}function $s(...n){return new Kr("arrayRemove",n)}function Ms(n){return new Wr("increment",n)}/**
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
 */class Xr{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=et(t)}set(t,e,r){this._verifyNotCommitted();const s=z(t,this._firestore),i=Jt(s.converter,e,r),o=Kt(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,A.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const i=z(t,this._firestore);let o;return o=typeof(e=T(e))=="string"||e instanceof X?Se(this._dataReader,"WriteBatch.update",i._key,e,r,s):Ee(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,A.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=z(t,this._firestore);return this._mutations=this._mutations.concat(new Qt(e._key,A.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new c(L,"A write batch can no longer be used after commit() has been called.")}}function z(n,t){if((n=T(n)).firestore!==t)throw new c(h,"Provided document reference is from a different Firestore instance.");return n}function Bs(n){const t=M(n=R(n,B));return new Xr(n,e=>ut(t,e))}/**
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
 */class ts{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new c(h,"Firestore transactions require all reads to be executed before all writes.");const e=await kn(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Qt(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=_.fromPath(r);this.mutations.push(new vn(s,this.precondition(s)))}),await ut(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw p();e=v.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new c(ce,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(v.min())?A.exists(!1):A.updateTime(e):A.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(v.min()))throw new c(h,"Can't update a document that doesn't exist.");return A.updateTime(e)}return A.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */const es={maxAttempts:5};/**
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
 */class ns{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.wt=r.maxAttempts,this.yt=new Sn(this.asyncQueue,"transaction_retry")}run(){this.wt-=1,this.gt()}gt(){this.yt.Y(async()=>{const t=new ts(this.datastore),e=this._t(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.vt(s)}))}).catch(r=>{this.vt(r)})})}_t(t){try{const e=this.updateFunction(t);return!on(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}vt(t){this.wt>0&&this.bt(t)?(this.wt-=1,this.asyncQueue.enqueueAndForget(()=>(this.gt(),Promise.resolve()))):this.deferred.reject(t)}bt(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!function(r){switch(r){default:return p();case ue:case rt:case Je:case Xe:case en:case nn:case Vt:return!1;case h:case le:case Hn:case Ze:case L:case ce:case tn:case he:case Yn:return!0}}(e)}return!1}}/**
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
 */function te(){return typeof document<"u"?document:null}/**
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
 */class De{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new De(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new c(ue,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class rs{constructor(){this.Et=Promise.resolve(),this.At=[],this.It=!1,this.Tt=[],this.Rt=null,this.Pt=!1,this.Vt=!1,this.$t=[],this.yt=new Sn(this,"async_queue_retry"),this.Dt=()=>{const e=te();e&&G("AsyncQueue","Visibility state changed to "+e.visibilityState),this.yt.Z()};const t=te();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.It}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Nt(),this.Ft(t)}enterRestrictedMode(t){if(!this.It){this.It=!0,this.Vt=t||!1;const e=te();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Dt)}}enqueue(t){if(this.Nt(),this.It)return new Promise(()=>{});const e=new de;return this.Ft(()=>this.It&&this.Vt?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.At.push(t),this.xt()))}async xt(){if(this.At.length!==0){try{await this.At[0](),this.At.shift(),this.yt.reset()}catch(t){if(!function(e){return e.name==="IndexedDbTransactionError"}(t))throw t;G("AsyncQueue","Operation failed with retryable error: "+t)}this.At.length>0&&this.yt.Y(()=>this.xt())}}Ft(t){const e=this.Et.then(()=>(this.Pt=!0,t().catch(r=>{this.Rt=r,this.Pt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pt=!1,r))));return this.Et=e,e}enqueueAfterDelay(t,e,r){this.Nt(),this.$t.indexOf(t)>-1&&(e=0);const s=De.createAndSchedule(this,t,e,r,i=>this.St(i));return this.Tt.push(s),s}Nt(){this.Rt&&p()}verifyOperationInProgress(){}async qt(){let t;do t=this.Et,await t;while(t!==this.Et)}Ot(t){for(const e of this.Tt)if(e.timerId===t)return!0;return!1}kt(t){return this.qt().then(()=>{this.Tt.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tt)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.qt()})}Ct(t){this.$t.push(t)}St(t){const e=this.Tt.indexOf(t);this.Tt.splice(e,1)}}class ss{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=et(t)}get(t){const e=z(t,this._firestore),r=new Zt(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return p();const i=s[0];if(i.isFoundDocument())return new J(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new J(this._firestore,r,e._key,null,e.converter);throw p()})}set(t,e,r){const s=z(t,this._firestore),i=Jt(s.converter,e,r),o=Kt(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(t,e,r,...s){const i=z(t,this._firestore);let o;return o=typeof(e=T(e))=="string"||e instanceof X?Se(this._dataReader,"Transaction.update",i._key,e,r,s):Ee(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=z(t,this._firestore);return this._transaction.delete(e._key),this}}function Us(n,t,e){const r=M(n=R(n,B)),s=Object.assign(Object.assign({},es),e);(function(o){if(o.maxAttempts<1)throw new c(h,"Max attempts must be at least 1")})(s);const i=new de;return new ns(new rs,r,s,o=>t(new ss(n,o)),i).run(),i.promise}(function(n){ot=n})(`${Wn}_lite`),Qn(new Gn("firestore/lite",(n,{instanceIdentifier:t,options:e})=>{const r=n.getProvider("app").getImmediate(),s=new B(new Xn(n.getProvider("auth-internal")),new rr(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new mt(i.options.projectId,o)}(r,t),r);return e&&s._setSettings(e),s},"PUBLIC").setMultipleInstances(!0)),Ne("firestore-lite","3.10.0",""),Ne("firestore-lite","3.10.0","esm2017");export{vt as AggregateField,Br as AggregateQuerySnapshot,it as Bytes,O as CollectionReference,S as DocumentReference,J as DocumentSnapshot,X as FieldPath,tt as FieldValue,B as Firestore,c as FirestoreError,be as GeoPoint,P as Query,lt as QueryCompositeFilterConstraint,Et as QueryConstraint,Pn as QueryDocumentSnapshot,Yt as QueryEndAtConstraint,St as QueryFieldFilterConstraint,Wt as QueryLimitConstraint,Ve as QueryOrderByConstraint,ie as QuerySnapshot,Ht as QueryStartAtConstraint,x as Timestamp,ss as Transaction,Xr as WriteBatch,Ds as addDoc,Ps as aggregateFieldEqual,Rs as aggregateQuerySnapshotEqual,ys as and,$s as arrayRemove,Ls as arrayUnion,qs as average,cs as collection,hs as collectionGroup,Mr as connectFirestoreEmulator,Zr as count,Vs as deleteDoc,Os as deleteField,Ur as doc,fs as documentId,Ss as endAt,Es as endBefore,Jr as getAggregate,Ns as getCount,ks as getDoc,Is as getDocs,us as getFirestore,Ms as increment,as as initializeFirestore,vs as limit,_s as limitToLast,gs as or,ws as orderBy,ms as query,In as queryEqual,ds as refEqual,Us as runTransaction,Cs as serverTimestamp,As as setDoc,os as setLogLevel,Yr as snapshotEqual,Ts as startAfter,bs as startAt,xs as sum,ls as terminate,Fs as updateDoc,ps as where,Bs as writeBatch};
