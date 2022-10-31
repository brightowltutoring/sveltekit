import{az as An,F as Vn,c as Me,e as Dn,d as Nn,aA as Fn,aB as xn,g as b,aC as Rn,_ as qn,C as Pn,r as be,aD as Jt,aE as Ln}from"./firebase-2afcabcb.js";/**
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
 */class V{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
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
 */let ot="9.12.1";/**
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
 */const G=new An("@firebase/firestore");function jr(n){G.setLogLevel(n)}function K(n,...t){if(G.logLevel<=Jt.DEBUG){const e=t.map(Xt);G.debug(`Firestore (${ot}): ${n}`,...e)}}function Rt(n,...t){if(G.logLevel<=Jt.ERROR){const e=t.map(Xt);G.error(`Firestore (${ot}): ${n}`,...e)}}function $e(n,...t){if(G.logLevel<=Jt.WARN){const e=t.map(Xt);G.warn(`Firestore (${ot}): ${n}`,...e)}}function Xt(n){if(typeof n=="string")return n;try{return t=n,JSON.stringify(t)}catch{return n}/**
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
 */function g(n="Unexpected state"){const t=`FIRESTORE (${ot}) INTERNAL ASSERTION FAILED: `+n;throw Rt(t),new Error(t)}function A(n,t){n||g()}function at(n,t){return n}/**
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
 */const Te="ok",Zt="cancelled",rt="unknown",h="invalid-argument",Ue="deadline-exceeded",te="not-found",On="already-exists",Be="permission-denied",Et="unauthenticated",je="resource-exhausted",$="failed-precondition",ee="aborted",ze="out-of-range",ne="unimplemented",Ge="internal",Ke="unavailable",Cn="data-loss";class c extends Vn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Qe{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(V.UNAUTHENTICATED))}shutdown(){}}class $n{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Un{constructor(t){this.auth=null,t.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(A(typeof t.accessToken=="string"),new Qe(t.accessToken,new V(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class Bn{constructor(t,e,r,s){this.t=t,this.i=e,this.o=r,this.u=s,this.type="FirstParty",this.user=V.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(A(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class jn{constructor(t,e,r,s){this.t=t,this.i=e,this.o=r,this.u=s}getToken(){return Promise.resolve(new Bn(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable(()=>e(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gn{constructor(t){this.m=t,this.appCheck=null,t.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(A(typeof t.token=="string"),new zn(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
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
 */class Kn{constructor(t,e,r,s,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class dt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new dt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dt&&t.projectId===this.projectId&&t.database===this.database}}class ft{constructor(t,e,r){e===void 0?e=0:e>t.length&&g(),r===void 0?r=t.length-e:r>t.length-e&&g(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ft.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ft?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class w extends ft{construct(t,e,r){return new w(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new w(e)}static emptyPath(){return new w([])}}const Qn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class N extends ft{construct(t,e,r){return new N(t,e,r)}static isValidIdentifier(t){return Qn.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),N.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new N(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new c(h,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new c(h,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(h,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new c(h,"Unterminated ` in path: "+t);return new N(e)}static emptyPath(){return new N([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(w.fromString(t))}static fromName(t){return new v(w.fromString(t).popFirst(5))}static empty(){return new v(w.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&w.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return w.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new w(t.slice()))}}/**
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
 */function se(n,t,e){if(!e)throw new c(h,`Function ${n}() cannot be called with an empty ${t}.`)}function Ee(n){if(!v.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Se(n){if(v.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":g()}function P(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qt(n);throw new c(h,`Expected type '${t.name}', but it was: ${e}`)}}return n}function We(n,t){if(t<=0)throw new c(h,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function Ye(n){return n==null}function St(n){return n===0&&1/n==-1/0}/**
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
 */const Wn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var ke,m;function Ie(n){if(n===void 0)return Rt("RPC_ERROR","HTTP error has no status"),rt;switch(n){case 200:return Te;case 400:return $;case 401:return Et;case 403:return Be;case 404:return te;case 409:return ee;case 416:return ze;case 429:return je;case 499:return Zt;case 500:return rt;case 501:return ne;case 503:return Ke;case 504:return Ue;default:return n>=200&&n<300?Te:n>=400&&n<500?$:n>=500&&n<600?Ge:rt}}/**
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
 */(m=ke||(ke={}))[m.OK=0]="OK",m[m.CANCELLED=1]="CANCELLED",m[m.UNKNOWN=2]="UNKNOWN",m[m.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m[m.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m[m.NOT_FOUND=5]="NOT_FOUND",m[m.ALREADY_EXISTS=6]="ALREADY_EXISTS",m[m.PERMISSION_DENIED=7]="PERMISSION_DENIED",m[m.UNAUTHENTICATED=16]="UNAUTHENTICATED",m[m.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m[m.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m[m.ABORTED=10]="ABORTED",m[m.OUT_OF_RANGE=11]="OUT_OF_RANGE",m[m.UNIMPLEMENTED=12]="UNIMPLEMENTED",m[m.INTERNAL=13]="INTERNAL",m[m.UNAVAILABLE=14]="UNAVAILABLE",m[m.DATA_LOSS=15]="DATA_LOSS";class Yn extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.p=e+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(t,e,r,s,i){const o=this.T(t,e);K("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(t,o,a,r).then(u=>(K("RestConnection","Received: ",u),u),u=>{throw $e("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",r),u})}P(t,e,r,s,i,o){return this.I(t,e,r,s,i)}A(t,e,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+ot,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}T(t,e){const r=Wn[t];return`${this.p}/v1/${e}:${r}`}}{constructor(t,e){super(t),this.V=e}N(t,e){throw new Error("Not supported by FetchConnection")}async R(t,e,r,s){const i=JSON.stringify(s);let o;try{o=await this.V(e,{method:"POST",headers:r,body:i})}catch(a){throw new c(Ie(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new c(Ie(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function Hn(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Jn{static D(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Hn(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function T(n,t){return n<t?-1:n>t?1:0}function ie(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class x{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new c(h,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new c(h,"Timestamp seconds out of range: "+t)}static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new x(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?T(this.nanoseconds,t.nanoseconds):T(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new x(0,0))}static max(){return new D(new x(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ae(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function yt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
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
 */class kt{constructor(t,e){this.comparator=t,this.root=e||k.EMPTY}insert(t,e){return new kt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,k.BLACK,null,null))}remove(t){return new kt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,k.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bt(this.root,t,this.comparator,!1)}getReverseIterator(){return new bt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bt(this.root,t,this.comparator,!0)}}class bt{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class k{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r!=null?r:k.RED,this.left=s!=null?s:k.EMPTY,this.right=i!=null?i:k.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new k(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return k.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return k.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw g();const t=this.left.check();if(t!==this.right.check())throw g();return t+(this.isRed()?0:1)}}k.EMPTY=null,k.RED=!0,k.BLACK=!1;k.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(n,t,e,r,s){return this}insert(n,t,e){return new k(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(t){this.comparator=t,this.data=new kt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ve(this.data.getIterator())}getIteratorFrom(t){return new Ve(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof It)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new It(this.comparator);return e.data=t,e}}class Ve{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Q{constructor(t){this.fields=t,t.sort(N.comparator)}static empty(){return new Q([])}unionWith(t){let e=new It(N.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Q(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ie(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class U{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new U(e)}static fromUint8Array(t){const e=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(t);return new U(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return T(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}U.EMPTY_BYTE_STRING=new U("");const Xn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(n){if(A(!!n),typeof n=="string"){let t=0;const e=Xn.exec(n);if(A(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_(n.seconds),nanos:_(n.nanos)}}function _(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mt(n){return typeof n=="string"?U.fromBase64String(n):U.fromUint8Array(n)}/**
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
 */function oe(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function He(n){const t=n.mapValue.fields.__previous_value__;return oe(t)?He(t):t}function pt(n){const t=W(n.mapValue.fields.__local_write_time__.timestampValue);return new x(t.seconds,t.nanos)}/**
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
 */const Tt={fields:{__type__:{stringValue:"__max__"}}};function Y(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oe(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:g()}function st(n,t){if(n===t)return!0;const e=Y(n);if(e!==Y(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pt(n).isEqual(pt(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=W(r.timestampValue),o=W(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,s){return mt(r.bytesValue).isEqual(mt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,s){return _(r.geoPointValue.latitude)===_(s.geoPointValue.latitude)&&_(r.geoPointValue.longitude)===_(s.geoPointValue.longitude)}(n,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return _(r.integerValue)===_(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=_(r.doubleValue),o=_(s.doubleValue);return i===o?St(i)===St(o):isNaN(i)&&isNaN(o)}return!1}(n,t);case 9:return ie(n.arrayValue.values||[],t.arrayValue.values||[],st);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ae(i)!==Ae(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!st(i[a],o[a])))return!1;return!0}(n,t);default:return g()}}function gt(n,t){return(n.values||[]).find(e=>st(e,t))!==void 0}function At(n,t){if(n===t)return 0;const e=Y(n),r=Y(t);if(e!==r)return T(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return T(n.booleanValue,t.booleanValue);case 2:return function(s,i){const o=_(s.integerValue||s.doubleValue),a=_(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,t);case 3:return De(n.timestampValue,t.timestampValue);case 4:return De(pt(n),pt(t));case 5:return T(n.stringValue,t.stringValue);case 6:return function(s,i){const o=mt(s),a=mt(i);return o.compareTo(a)}(n.bytesValue,t.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=T(o[u],a[u]);if(l!==0)return l}return T(o.length,a.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,i){const o=T(_(s.latitude),_(i.latitude));return o!==0?o:T(_(s.longitude),_(i.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=At(o[u],a[u]);if(l)return l}return T(o.length,a.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,i){if(s===Tt&&i===Tt)return 0;if(s===Tt)return 1;if(i===Tt)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let f=0;f<a.length&&f<l.length;++f){const d=T(a[f],l[f]);if(d!==0)return d;const p=At(o[a[f]],u[l[f]]);if(p!==0)return p}return T(a.length,l.length)}(n.mapValue,t.mapValue);default:throw g()}}function De(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return T(n,t);const e=W(n),r=W(t),s=T(e.seconds,r.seconds);return s!==0?s:T(e.nanos,r.nanos)}function Vt(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Je(n){return!!n&&"arrayValue"in n}function Ne(n){return!!n&&"nullValue"in n}function Fe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jt(n){return!!n&&"mapValue"in n}function lt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return yt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=lt(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=lt(n.arrayValue.values[e]);return t}return Object.assign({},n)}class F{constructor(t){this.value=t}static empty(){return new F({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!jt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=lt(e)}setAll(t){let e=N.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=lt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());jt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];jt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){yt(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new F(lt(this.value))}}/**
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
 */class C{constructor(t,e,r,s,i,o){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new C(t,0,D.min(),D.min(),F.empty(),0)}static newFoundDocument(t,e,r){return new C(t,1,e,D.min(),r,0)}static newNoDocument(t,e){return new C(t,2,e,D.min(),F.empty(),0)}static newUnknownDocument(t,e){return new C(t,3,e,D.min(),F.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=F.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=F.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof C&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new C(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.$=null}}function xe(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Zn(n,t,e,r,s,i,o)}class M extends class{}{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.F(t,e,r):new tr(t,e,r):e==="array-contains"?new rr(t,r):e==="in"?new sr(t,r):e==="not-in"?new ir(t,r):e==="array-contains-any"?new or(t,r):new M(t,e,r)}static F(t,e,r){return e==="in"?new er(t,r):new nr(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.S(At(e,this.value)):e!==null&&Y(this.value)===Y(e)&&this.S(At(e,this.value))}S(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return g()}}q(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tr extends M{constructor(t,e,r){super(t,e,r),this.key=v.fromName(r.referenceValue)}matches(t){const e=v.comparator(t.key,this.key);return this.S(e)}}class er extends M{constructor(t,e){super(t,"in",e),this.keys=Xe("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class nr extends M{constructor(t,e){super(t,"not-in",e),this.keys=Xe("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xe(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>v.fromName(r.referenceValue))}class rr extends M{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Je(e)&&gt(e.arrayValue,this.value)}}class sr extends M{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&gt(this.value.arrayValue,e)}}class ir extends M{constructor(t,e){super(t,"not-in",e)}matches(t){if(gt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!gt(this.value.arrayValue,e)}}class or extends M{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Je(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>gt(this.value.arrayValue,r))}}class Dt{constructor(t,e){this.position=t,this.inclusive=e}}class ct{constructor(t,e="asc"){this.field=t,this.dir=e}}function ar(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}function Re(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!st(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class J{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.O=null,this.k=null,this.startAt,this.endAt}}function ae(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ue(n){for(const t of n.filters)if(t.q())return t.field;return null}function Ze(n){return n.collectionGroup!==null}function Gt(n){const t=at(n);if(t.O===null){t.O=[];const e=ue(t),r=ae(t);if(e!==null&&r===null)e.isKeyField()||t.O.push(new ct(e)),t.O.push(new ct(N.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.O.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.O.push(new ct(N.keyField(),i))}}}return t.O}function Nt(n){const t=at(n);if(!t.k)if(t.limitType==="F")t.k=xe(t.path,t.collectionGroup,Gt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Gt(t)){const o=i.dir==="desc"?"asc":"desc";e.push(new ct(i.field,o))}const r=t.endAt?new Dt(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Dt(t.startAt.position,t.startAt.inclusive):null;t.k=xe(t.path,t.collectionGroup,e,t.filters,t.limit,r,s)}return t.k}function ur(n,t){return function(e,r){if(e.limit!==r.limit||e.orderBy.length!==r.orderBy.length)return!1;for(let o=0;o<e.orderBy.length;o++)if(!ar(e.orderBy[o],r.orderBy[o]))return!1;if(e.filters.length!==r.filters.length)return!1;for(let o=0;o<e.filters.length;o++)if(s=e.filters[o],i=r.filters[o],s.op!==i.op||!s.field.isEqual(i.field)||!st(s.value,i.value))return!1;var s,i;return e.collectionGroup===r.collectionGroup&&!!e.path.isEqual(r.path)&&!!Re(e.startAt,r.startAt)&&Re(e.endAt,r.endAt)}(Nt(n),Nt(t))&&n.limitType===t.limitType}/**
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
 */function tn(n,t){return function(e){return typeof e=="number"&&Number.isInteger(e)&&!St(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,r){if(e.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:St(r)?"-0":r}}(n,t)}/**
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
 */class Pt{constructor(){this._=void 0}}class en extends Pt{}class nn extends Pt{constructor(t){super(),this.elements=t}}class rn extends Pt{constructor(t){super(),this.elements=t}}class sn extends Pt{constructor(t,e){super(),this.L=t,this.M=e}}/**
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
 */class Lt{constructor(t,e){this.field=t,this.transform=e}}class I{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new I}static exists(t){return new I(void 0,t)}static updateTime(t){return new I(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Ot{}class on extends Ot{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class le extends Ot{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ct extends Ot{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class an extends Ot{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const lr=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cr=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hr{constructor(t,e){this.databaseId=t,this.C=e}}function Kt(n,t){return n.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dr(n,t){return n.C?t.toBase64():t.toUint8Array()}function fr(n,t){return Kt(n,t.toTimestamp())}function Qt(n){return A(!!n),D.fromTimestamp(function(t){const e=W(t);return new x(e.seconds,e.nanos)}(n))}function ce(n,t){return function(e){return new w(["projects",e.projectId,"databases",e.database])}(n).child("documents").child(t).canonicalString()}function Ft(n,t){return ce(n.databaseId,t.path)}function Wt(n,t){const e=function(s){const i=w.fromString(s);return A(cn(i)),i}(t);if(e.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new v((A((r=e).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function qe(n,t){return ce(n.databaseId,t)}function un(n){return new w(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pe(n,t,e){return{name:Ft(n,t),fields:e.value.mapValue.fields}}function mr(n,t){return"found"in t?function(e,r){A(!!r.found),r.found.name,r.found.updateTime;const s=Wt(e,r.found.name),i=Qt(r.found.updateTime),o=new F({mapValue:{fields:r.found.fields}});return C.newFoundDocument(s,i,o)}(n,t):"missing"in t?function(e,r){A(!!r.missing),A(!!r.readTime);const s=Wt(e,r.missing),i=Qt(r.readTime);return C.newNoDocument(s,i)}(n,t):g()}function pr(n,t){let e;if(t instanceof on)e={update:Pe(n,t.key,t.value)};else if(t instanceof Ct)e={delete:Ft(n,t.key)};else if(t instanceof le)e={update:Pe(n,t.key,t.data),updateMask:wr(t.fieldMask)};else{if(!(t instanceof an))return g();e={verify:Ft(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof en)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof sn)return{fieldPath:i.field.canonicalString(),increment:o.M};throw g()}(0,r))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:fr(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:g()}(n,t.precondition)),e}function ln(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=qe(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=qe(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const l=u.map(f=>function(d){if(d.op==="=="){if(Fe(d.value))return{unaryFilter:{field:nt(d.field),op:"IS_NAN"}};if(Ne(d.value))return{unaryFilter:{field:nt(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(Fe(d.value))return{unaryFilter:{field:nt(d.field),op:"IS_NOT_NAN"}};if(Ne(d.value))return{unaryFilter:{field:nt(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nt(d.field),op:yr(d.op),value:d.value}}}(f));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(t.filters);s&&(e.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(f){return{field:nt(f.field),direction:gr(f.dir)}}(l))}(t.orderBy);i&&(e.structuredQuery.orderBy=i);const o=function(u,l){return u.C||Ye(l)?l:{value:l}}(n,t.limit);var a;return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function gr(n){return lr[n]}function yr(n){return cr[n]}function nt(n){return{fieldPath:n.canonicalString()}}function wr(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function cn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function he(n){return new hr(n,!0)}/**
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
 */class hn{constructor(t,e,r=1e3,s=1.5,i=6e4){this.U=t,this.timerId=e,this.j=r,this.B=s,this.G=i,this.W=0,this.K=null,this.Y=Date.now(),this.reset()}reset(){this.W=0}H(){this.W=this.G}J(t){this.cancel();const e=Math.floor(this.W+this.X()),r=Math.max(0,Date.now()-this.Y),s=Math.max(0,e-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.W} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.K=this.U.enqueueAfterDelay(this.timerId,s,()=>(this.Y=Date.now(),t())),this.W*=this.B,this.W<this.j&&(this.W=this.j),this.W>this.G&&(this.W=this.G)}Z(){this.K!==null&&(this.K.skipDelay(),this.K=null)}cancel(){this.K!==null&&(this.K.cancel(),this.K=null)}X(){return(Math.random()-.5)*this.W}}/**
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
 */class vr extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.tt=r,this.L=s,this.et=!1}nt(){if(this.et)throw new c($,"The client has already been terminated.")}I(t,e,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.tt.I(t,e,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Et&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(rt,s.toString())})}P(t,e,r,s){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.tt.P(t,e,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Et&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(rt,i.toString())})}terminate(){this.et=!0}}async function ut(n,t){const e=at(n),r=un(e.L)+"/documents",s={writes:t.map(i=>pr(e.L,i))};await e.I("Commit",r,s)}async function dn(n,t){const e=at(n),r=un(e.L)+"/documents",s={documents:t.map(u=>Ft(e.L,u))},i=await e.P("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach(u=>{const l=mr(e.L,u);o.set(l.key.toString(),l)});const a=[];return t.forEach(u=>{const l=o.get(u.toString());A(!!l),a.push(l)}),a}async function _r(n,t){const e=at(n),r=ln(e.L,Nt(t));return(await e.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const u=Wt(i,o.name),l=Qt(o.updateTime),f=new F({mapValue:{fields:o.fields}}),d=C.newFoundDocument(u,l,f);return a&&d.setHasCommittedMutations(),a?d.setHasCommittedMutations():d}(e.L,s.document,void 0))}async function br(n,t){const e=at(n),r=function(i,o){const a=ln(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(e.L,Nt(t)),s=r.parent;return e.tt.v||delete r.parent,(await e.P("RunAggregationQuery",s,r,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}/**
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
 */const ht=new Map;function B(n){if(n._terminated)throw new c($,"The client has already been terminated.");if(!ht.has(n)){K("ComponentProvider","Initializing Datastore");const i=function(u){return new Yn(u,fetch.bind(null))}((t=n._databaseId,e=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new Kn(t,e,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=he(n._databaseId),a=function(u,l,f,d){return new vr(u,l,f,d)}(n._authCredentials,n._appCheckCredentials,i,o);ht.set(n,a)}var t,e,r,s;/**
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
*/return ht.get(n)}class Le{constructor(t){var e;if(t.host===void 0){if(t.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new c(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class j{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Le({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new c($,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new c($,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Le(t),t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new Mn;switch(e.type){case"gapi":const r=e.client;return new jn(r,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ht.get(t);e&&(K("ComponentProvider","Removing Datastore"),ht.delete(t),e.terminate())}(this),Promise.resolve()}}function zr(n,t,e){e||(e="(default)");const r=Me(n,"firestore/lite");if(r.isInitialized(e))throw new c($,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function Gr(n,t){const e=typeof n=="object"?n:Dn(),r=typeof n=="string"?n:t||"(default)",s=Me(e,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Nn("firestore");i&&Tr(s,...i)}return s}function Tr(n,t,e,r={}){var s;const i=(n=P(n,j))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&$e("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${e}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=V.MOCK_USER;else{o=Fn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new c(h,"mockUserToken must contain 'sub' or 'user_id' field!");a=new V(u)}n._authCredentials=new $n(new Qe(o,a))}}function Kr(n){return n=P(n,j),xn(n.app,"firestore/lite"),n._delete()}/**
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
 */class Qr{constructor(){this.type="AggregateField"}}class Er{constructor(t,e){this._data=e,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._data}}/**
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
 */class Sr{constructor(t,e,r){this.query=t,this.datastore=e,this.userDataWriter=r}run(){return br(this.datastore,this.query._query).then(t=>{A(t[0]!==void 0);const e=Object.entries(t[0]).filter(([r,s])=>r==="count_alias").map(([r,s])=>this.userDataWriter.convertValue(s))[0];return A(typeof e=="number"),Promise.resolve(new Er(this.query,{count:e}))})}}/**
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
 */class E{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new O(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new E(this.firestore,t,this._key)}}class q{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new q(this.firestore,t,this._query)}}class O extends q{constructor(t,e,r){super(t,e,new J(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new E(this.firestore,null,new v(t))}withConverter(t){return new O(this.firestore,t,this._path)}}function Wr(n,t,...e){if(n=b(n),se("collection","path",t),n instanceof j){const r=w.fromString(t,...e);return Se(r),new O(n,null,r)}{if(!(n instanceof E||n instanceof O))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(t,...e));return Se(r),new O(n.firestore,null,r)}}function Yr(n,t){if(n=P(n,j),se("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new c(h,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new q(n,null,function(e){return new J(w.emptyPath(),e)}(t))}function kr(n,t,...e){if(n=b(n),arguments.length===1&&(t=Jn.D()),se("doc","path",t),n instanceof j){const r=w.fromString(t,...e);return Ee(r),new E(n,null,new v(r))}{if(!(n instanceof E||n instanceof O))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(w.fromString(t,...e));return Ee(r),new E(n.firestore,n instanceof O?n.converter:null,new v(r))}}function Hr(n,t){return n=b(n),t=b(t),(n instanceof E||n instanceof O)&&(t instanceof E||t instanceof O)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function fn(n,t){return n=b(n),t=b(t),n instanceof q&&t instanceof q&&n.firestore===t.firestore&&ur(n._query,t._query)&&n.converter===t.converter}/**
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
 */class it{constructor(t){this._byteString=t}static fromBase64String(t){try{return new it(U.fromBase64String(t))}catch(e){throw new c(h,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new it(U.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class X{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new N(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Jr(){return new X("__name__")}/**
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
 */class de{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return T(this._lat,t._lat)||T(this._long,t._long)}}/**
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
 */const Ir=/^__.*__$/;class Ar{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}class mn{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function pn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class Mt{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.L=r,this.ignoreUndefinedProperties=s,i===void 0&&this.rt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(t){return new Mt(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.it({path:r,ut:!1});return s.ct(t),s}at(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.it({path:r,ut:!1});return s.rt(),s}ht(t){return this.it({path:void 0,ut:!0})}lt(t){return xt(t,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}rt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ct(this.path.get(t))}ct(t){if(t.length===0)throw this.lt("Document fields must not be empty");if(pn(this.st)&&Ir.test(t))throw this.lt('Document fields cannot begin and end with "__"')}}class Vr{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.L=r||he(t)}wt(t,e,r,s=!1){return new Mt({st:t,methodName:e,dt:r,path:N.emptyPath(),ut:!1,ft:s},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function tt(n){const t=n._freezeSettings(),e=he(n._databaseId);return new Vr(n._databaseId,!!t.ignoreUndefinedProperties,e)}function $t(n,t,e,r,s,i={}){const o=n.wt(i.merge||i.mergeFields?2:0,t,e,s);ge("Data must be an object, but it was:",o,r);const a=wn(r,o);let u,l;if(i.merge)u=new Q(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const p=Yt(t,d,e);if(!o.contains(p))throw new c(h,`Field '${p}' is specified in your field mask but missing from your input data.`);_n(f,p)||f.push(p)}u=new Q(f),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new Ar(new F(a),u,l)}class wt extends Z{_toFieldTransform(t){if(t.st!==2)throw t.st===1?t.lt(`${this._methodName}() can only appear at the top level of your update data`):t.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wt}}function gn(n,t,e){return new Mt({st:3,dt:t.settings.dt,methodName:n._methodName,ut:e},t.databaseId,t.L,t.ignoreUndefinedProperties)}class fe extends Z{_toFieldTransform(t){return new Lt(t.path,new en)}isEqual(t){return t instanceof fe}}class Dr extends Z{constructor(t,e){super(t),this.yt=e}_toFieldTransform(t){const e=gn(this,t,!0),r=this.yt.map(i=>et(i,e)),s=new nn(r);return new Lt(t.path,s)}isEqual(t){return this===t}}class Nr extends Z{constructor(t,e){super(t),this.yt=e}_toFieldTransform(t){const e=gn(this,t,!0),r=this.yt.map(i=>et(i,e)),s=new rn(r);return new Lt(t.path,s)}isEqual(t){return this===t}}class Fr extends Z{constructor(t,e){super(t),this._t=e}_toFieldTransform(t){const e=new sn(t.L,tn(t.L,this._t));return new Lt(t.path,e)}isEqual(t){return this===t}}function me(n,t,e,r){const s=n.wt(1,t,e);ge("Data must be an object, but it was:",s,r);const i=[],o=F.empty();yt(r,(u,l)=>{const f=ye(t,u,e);l=b(l);const d=s.at(f);if(l instanceof wt)i.push(f);else{const p=et(l,d);p!=null&&(i.push(f),o.set(f,p))}});const a=new Q(i);return new mn(o,a,s.fieldTransforms)}function pe(n,t,e,r,s,i){const o=n.wt(1,t,e),a=[Yt(t,r,e)],u=[s];if(i.length%2!=0)throw new c(h,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Yt(t,i[p])),u.push(i[p+1]);const l=[],f=F.empty();for(let p=a.length-1;p>=0;--p)if(!_n(l,a[p])){const S=a[p];let y=u[p];y=b(y);const L=o.at(S);if(y instanceof wt)l.push(S);else{const R=et(y,L);R!=null&&(l.push(S),f.set(S,R))}}const d=new Q(l);return new mn(f,d,o.fieldTransforms)}function yn(n,t,e,r=!1){return et(e,n.wt(r?4:3,t))}function et(n,t){if(vn(n=b(n)))return ge("Unsupported field value:",t,n),wn(n,t);if(n instanceof Z)return function(e,r){if(!pn(r.st))throw r.lt(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${e._methodName}() is not currently supported inside arrays`);const s=e._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.ut&&t.st!==4)throw t.lt("Nested arrays are not supported");return function(e,r){const s=[];let i=0;for(const o of e){let a=et(o,r.ht(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,t)}return function(e,r){if((e=b(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return tn(r.L,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const s=x.fromDate(e);return{timestampValue:Kt(r.L,s)}}if(e instanceof x){const s=new x(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Kt(r.L,s)}}if(e instanceof de)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof it)return{bytesValue:dr(r.L,e._byteString)};if(e instanceof E){const s=r.databaseId,i=e.firestore._databaseId;if(!i.isEqual(s))throw r.lt(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ce(e.firestore._databaseId||r.databaseId,e._key.path)}}throw r.lt(`Unsupported field value: ${qt(e)}`)}(n,t)}function wn(n,t){const e={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yt(n,(r,s)=>{const i=et(s,t.ot(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function vn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof x||n instanceof de||n instanceof it||n instanceof E||n instanceof Z)}function ge(n,t,e){if(!vn(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const r=qt(e);throw r==="an object"?t.lt(n+" a custom object"):t.lt(n+" "+r)}}function Yt(n,t,e){if((t=b(t))instanceof X)return t._internalPath;if(typeof t=="string")return ye(n,t);throw xt("Field path arguments must be of type string or ",n,!1,void 0,e)}const xr=new RegExp("[~\\*/\\[\\]]");function ye(n,t,e){if(t.search(xr)>=0)throw xt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new X(...t.split("."))._internalPath}catch{throw xt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function xt(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new c(h,a+n+u)}function _n(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class H{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new E(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(we("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bn extends H{data(){return super.data()}}class Ht{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function Rr(n,t){return n=b(n),t=b(t),n instanceof H&&t instanceof H?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Ht&&t instanceof Ht&&fn(n.query,t.query)&&ie(n.docs,t.docs,Rr)}function we(n,t){return typeof t=="string"?ye(n,t):t instanceof X?t._internalPath:t._delegate._internalPath}/**
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
 */class vt{}function Xr(n,...t){for(const e of t)n=e._apply(n);return n}class qr extends vt{constructor(t,e,r){super(),this.gt=t,this.vt=e,this.bt=r,this.type="where"}_apply(t){const e=tt(t.firestore),r=function(s,i,o,a,u,l,f){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new c(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ce(f,l);const S=[];for(const y of f)S.push(Oe(a,s,y));d={arrayValue:{values:S}}}else d=Oe(a,s,f)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ce(f,l),d=yn(o,i,f,l==="in"||l==="not-in");const p=M.create(u,l,d);return function(S,y){if(y.q()){const R=ue(S);if(R!==null&&!R.isEqual(y.field))throw new c(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${R.toString()}' and '${y.field.toString()}'`);const _t=ae(S);_t!==null&&In(S,y.field,_t)}const L=function(R,_t){for(const _e of R.filters)if(_t.indexOf(_e.op)>=0)return _e.op;return null}(S,function(R){switch(R){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(L!==null)throw L===y.op?new c(h,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new c(h,`Invalid query. You cannot use '${y.op.toString()}' filters with '${L.toString()}' filters.`)}(s,p),p}(t._query,"where",e,t.firestore._databaseId,this.gt,this.vt,this.bt);return new q(t.firestore,t.converter,function(s,i){const o=s.filters.concat([i]);return new J(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(t._query,r))}}function Zr(n,t,e){const r=t,s=we("where",n);return new qr(s,r,e)}class Pr extends vt{constructor(t,e){super(),this.gt=t,this.Et=e,this.type="orderBy"}_apply(t){const e=function(r,s,i){if(r.startAt!==null)throw new c(h,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new c(h,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ct(s,i);return function(a,u){if(ae(a)===null){const l=ue(a);l!==null&&In(a,l,u.field)}}(r,o),o}(t._query,this.gt,this.Et);return new q(t.firestore,t.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new J(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function ts(n,t="asc"){const e=t,r=we("orderBy",n);return new Pr(r,e)}class Tn extends vt{constructor(t,e,r){super(),this.type=t,this.It=e,this.Tt=r}_apply(t){return new q(t.firestore,t.converter,function(e,r,s){return new J(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),r,s,e.startAt,e.endAt)}(t._query,this.It,this.Tt))}}function es(n){return We("limit",n),new Tn("limit",n,"F")}function ns(n){return We("limitToLast",n),new Tn("limitToLast",n,"L")}class En extends vt{constructor(t,e,r){super(),this.type=t,this.At=e,this.Rt=r}_apply(t){const e=kn(t,this.type,this.At,this.Rt);return new q(t.firestore,t.converter,function(r,s){return new J(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(t._query,e))}}function rs(...n){return new En("startAt",n,!0)}function ss(...n){return new En("startAfter",n,!1)}class Sn extends vt{constructor(t,e,r){super(),this.type=t,this.At=e,this.Rt=r}_apply(t){const e=kn(t,this.type,this.At,this.Rt);return new q(t.firestore,t.converter,function(r,s){return new J(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(t._query,e))}}function is(...n){return new Sn("endBefore",n,!1)}function os(...n){return new Sn("endAt",n,!0)}function kn(n,t,e,r){if(e[0]=b(e[0]),e[0]instanceof H)return function(s,i,o,a,u){if(!a)throw new c(te,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const f of Gt(s))if(f.field.isKeyField())l.push(Vt(i,a.key));else{const d=a.data.field(f.field);if(oe(d))throw new c(h,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const p=f.field.canonicalString();throw new c(h,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}l.push(d)}return new Dt(l,u)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=tt(n.firestore);return function(i,o,a,u,l,f){const d=i.explicitOrderBy;if(l.length>d.length)throw new c(h,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let S=0;S<l.length;S++){const y=l[S];if(d[S].field.isKeyField()){if(typeof y!="string")throw new c(h,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Ze(i)&&y.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const L=i.path.child(w.fromString(y));if(!v.isDocumentKey(L))throw new c(h,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const R=new v(L);p.push(Vt(o,R))}else{const L=yn(a,u,y);p.push(L)}}return new Dt(p,f)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Oe(n,t,e){if(typeof(e=b(e))=="string"){if(e==="")throw new c(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ze(t)&&e.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(w.fromString(e));if(!v.isDocumentKey(r))throw new c(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vt(n,new v(r))}if(e instanceof E)return Vt(n,e._key);throw new c(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qt(e)}.`)}function Ce(n,t){if(!Array.isArray(n)||n.length===0)throw new c(h,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(n.length>10)throw new c(h,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function In(n,t,e){if(!e.isEqual(t))throw new c(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`)}/**
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
 */function Ut(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Bt extends class{convertValue(t,e="none"){switch(Y(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(mt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw g()}}convertObject(t,e){const r={};return yt(t.fields,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new de(_(t.latitude),_(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=He(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=W(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=w.fromString(t);A(cn(r));const s=new dt(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(e)||Rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new it(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new E(this.firestore,null,e)}}function as(n){const t=B((n=P(n,E)).firestore),e=new Bt(n.firestore);return dn(t,[n._key]).then(r=>{A(r.length===1);const s=r[0];return new H(n.firestore,e,n._key,s.isFoundDocument()?s:null,n.converter)})}function us(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(ne,"limitToLast() queries require specifying at least one orderBy() clause")})((n=P(n,q))._query);const t=B(n.firestore),e=new Bt(n.firestore);return _r(t,n._query).then(r=>{const s=r.map(i=>new bn(n.firestore,e,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new Ht(n,s)})}function ls(n,t,e){const r=Ut((n=P(n,E)).converter,t,e),s=$t(tt(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return ut(B(n.firestore),[s.toMutation(n._key,I.none())])}function cs(n,t,e,...r){const s=tt((n=P(n,E)).firestore);let i;return i=typeof(t=b(t))=="string"||t instanceof X?pe(s,"updateDoc",n._key,t,e,r):me(s,"updateDoc",n._key,t),ut(B(n.firestore),[i.toMutation(n._key,I.exists(!0))])}function hs(n){return ut(B((n=P(n,E)).firestore),[new Ct(n._key,I.none())])}function ds(n,t){const e=kr(n=P(n,O)),r=Ut(n.converter,t),s=$t(tt(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return ut(B(n.firestore),[s.toMutation(e._key,I.exists(!1))]).then(()=>e)}/**
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
 */function fs(n){const t=P(n.firestore,j),e=B(t),r=new Bt(t);return new Sr(n,e,r).run()}function ms(n,t){return fn(n.query,t.query)&&Rn(n.data(),t.data())}/**
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
 */function ps(){return new wt("deleteField")}function gs(){return new fe("serverTimestamp")}function ys(...n){return new Dr("arrayUnion",n)}function ws(...n){return new Nr("arrayRemove",n)}function vs(n){return new Fr("increment",n)}/**
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
 */class Lr{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=tt(t)}set(t,e,r){this._verifyNotCommitted();const s=z(t,this._firestore),i=Ut(s.converter,e,r),o=$t(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,I.none())),this}update(t,e,r,...s){this._verifyNotCommitted();const i=z(t,this._firestore);let o;return o=typeof(e=b(e))=="string"||e instanceof X?pe(this._dataReader,"WriteBatch.update",i._key,e,r,s):me(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,I.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=z(t,this._firestore);return this._mutations=this._mutations.concat(new Ct(e._key,I.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new c($,"A write batch can no longer be used after commit() has been called.")}}function z(n,t){if((n=b(n)).firestore!==t)throw new c(h,"Provided document reference is from a different Firestore instance.");return n}function _s(n){const t=B(n=P(n,j));return new Lr(n,e=>ut(t,e))}/**
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
 */class Or{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new c(h,"Firestore transactions require all reads to be executed before all writes.");const e=await dn(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ct(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const s=v.fromPath(r);this.mutations.push(new an(s,this.precondition(s)))}),await ut(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw g();e=D.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new c(ee,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(D.min())?I.exists(!1):I.updateTime(e):I.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(D.min()))throw new c(h,"Can't update a document that doesn't exist.");return I.updateTime(e)}return I.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */const Cr={maxAttempts:5};/**
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
 */class Mr{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.Pt=r.maxAttempts,this.Vt=new hn(this.asyncQueue,"transaction_retry")}run(){this.Pt-=1,this.Nt()}Nt(){this.Vt.J(async()=>{const t=new Or(this.datastore),e=this.Dt(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.$t(s)}))}).catch(r=>{this.$t(r)})})}Dt(t){try{const e=this.updateFunction(t);return!Ye(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}$t(t){this.Pt>0&&this.xt(t)?(this.Pt-=1,this.asyncQueue.enqueueAndForget(()=>(this.Nt(),Promise.resolve()))):this.deferred.reject(t)}xt(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||!function(r){switch(r){default:return g();case Zt:case rt:case Ue:case je:case Ge:case Ke:case Et:return!1;case h:case te:case On:case Be:case $:case ee:case ze:case ne:case Cn:return!0}}(e)}return!1}}/**
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
 */function zt(){return typeof document<"u"?document:null}/**
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
 */class ve{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new ve(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new c(Zt,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class $r{constructor(){this.Ft=Promise.resolve(),this.St=[],this.qt=!1,this.Ot=[],this.kt=null,this.Ct=!1,this.Lt=!1,this.Mt=[],this.Vt=new hn(this,"async_queue_retry"),this.Ut=()=>{const e=zt();e&&K("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Vt.Z()};const t=zt();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ut)}get isShuttingDown(){return this.qt}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.jt(),this.Bt(t)}enterRestrictedMode(t){if(!this.qt){this.qt=!0,this.Lt=t||!1;const e=zt();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Ut)}}enqueue(t){if(this.jt(),this.qt)return new Promise(()=>{});const e=new re;return this.Bt(()=>this.qt&&this.Lt?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.St.push(t),this.Qt()))}async Qt(){if(this.St.length!==0){try{await this.St[0](),this.St.shift(),this.Vt.reset()}catch(t){if(!function(e){return e.name==="IndexedDbTransactionError"}(t))throw t;K("AsyncQueue","Operation failed with retryable error: "+t)}this.St.length>0&&this.Vt.J(()=>this.Qt())}}Bt(t){const e=this.Ft.then(()=>(this.Ct=!0,t().catch(r=>{this.kt=r,this.Ct=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Rt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ct=!1,r))));return this.Ft=e,e}enqueueAfterDelay(t,e,r){this.jt(),this.Mt.indexOf(t)>-1&&(e=0);const s=ve.createAndSchedule(this,t,e,r,i=>this.zt(i));return this.Ot.push(s),s}jt(){this.kt&&g()}verifyOperationInProgress(){}async Gt(){let t;do t=this.Ft,await t;while(t!==this.Ft)}Wt(t){for(const e of this.Ot)if(e.timerId===t)return!0;return!1}Kt(t){return this.Gt().then(()=>{this.Ot.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Ot)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Gt()})}Yt(t){this.Mt.push(t)}zt(t){const e=this.Ot.indexOf(t);this.Ot.splice(e,1)}}class Ur{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=tt(t)}get(t){const e=z(t,this._firestore),r=new Bt(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return g();const i=s[0];if(i.isFoundDocument())return new H(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new H(this._firestore,r,e._key,null,e.converter);throw g()})}set(t,e,r){const s=z(t,this._firestore),i=Ut(s.converter,e,r),o=$t(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(t,e,r,...s){const i=z(t,this._firestore);let o;return o=typeof(e=b(e))=="string"||e instanceof X?pe(this._dataReader,"Transaction.update",i._key,e,r,s):me(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=z(t,this._firestore);return this._transaction.delete(e._key),this}}function bs(n,t,e){const r=B(n=P(n,j)),s=Object.assign(Object.assign({},Cr),e);(function(o){if(o.maxAttempts<1)throw new c(h,"Max attempts must be at least 1")})(s);const i=new re;return new Mr(new $r,r,s,o=>t(new Ur(n,o)),i).run(),i.promise}(function(n){ot=n})(`${Ln}_lite`),qn(new Pn("firestore/lite",(n,{instanceIdentifier:t,options:e})=>{const r=n.getProvider("app").getImmediate(),s=new j(new Un(n.getProvider("auth-internal")),new Gn(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new dt(i.options.projectId,o)}(r,t),r);return e&&s._setSettings(e),s},"PUBLIC").setMultipleInstances(!0)),be("firestore-lite","3.7.1",""),be("firestore-lite","3.7.1","esm2017");export{Qr as AggregateField,Er as AggregateQuerySnapshot,it as Bytes,O as CollectionReference,E as DocumentReference,H as DocumentSnapshot,X as FieldPath,Z as FieldValue,j as Firestore,c as FirestoreError,de as GeoPoint,q as Query,vt as QueryConstraint,bn as QueryDocumentSnapshot,Ht as QuerySnapshot,x as Timestamp,Ur as Transaction,Lr as WriteBatch,ds as addDoc,ms as aggregateQuerySnapshotEqual,ws as arrayRemove,ys as arrayUnion,Wr as collection,Yr as collectionGroup,Tr as connectFirestoreEmulator,hs as deleteDoc,ps as deleteField,kr as doc,Jr as documentId,os as endAt,is as endBefore,fs as getCount,as as getDoc,us as getDocs,Gr as getFirestore,vs as increment,zr as initializeFirestore,es as limit,ns as limitToLast,ts as orderBy,Xr as query,fn as queryEqual,Hr as refEqual,bs as runTransaction,gs as serverTimestamp,ls as setDoc,jr as setLogLevel,Rr as snapshotEqual,ss as startAfter,rs as startAt,Kr as terminate,cs as updateDoc,Zr as where,_s as writeBatch};
