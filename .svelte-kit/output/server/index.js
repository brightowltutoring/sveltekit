import{c as Xe,s as Ke,v as F,m as M}from"./chunks/index.js";import{D as ie}from"./chunks/prod-ssr.js";import*as D from"devalue";import{r as Qe,w as ce}from"./chunks/index2.js";import{parse as W,serialize as je}from"cookie";import*as le from"set-cookie-parser";const Ze=Xe((e,t,r,n)=>{let{stores:s}=t,{page:o}=t,{components:a}=t,{form:i}=t,{data_0:c=null}=t,{data_1:f=null}=t;return Ke("__svelte__",s),s.page.notify,t.stores===void 0&&r.stores&&s!==void 0&&r.stores(s),t.page===void 0&&r.page&&o!==void 0&&r.page(o),t.components===void 0&&r.components&&a!==void 0&&r.components(a),t.form===void 0&&r.form&&i!==void 0&&r.form(i),t.data_0===void 0&&r.data_0&&c!==void 0&&r.data_0(c),t.data_1===void 0&&r.data_1&&f!==void 0&&r.data_1(f),s.page.set(o),`


${a[1]?`${F(a[0]||M,"svelte:component").$$render(e,{data:c},{},{default:()=>`${F(a[1]||M,"svelte:component").$$render(e,{data:f,form:i},{},{})}`})}`:`${F(a[0]||M,"svelte:component").$$render(e,{data:c,form:i},{},{})}`}

`});function Z(e,t){const r=[];e.split(",").forEach((o,a)=>{const i=/([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(o);if(i){const[,c,f,y="1"]=i;r.push({type:c,subtype:f,q:+y,i:a})}}),r.sort((o,a)=>o.q!==a.q?a.q-o.q:o.subtype==="*"!=(a.subtype==="*")?o.subtype==="*"?1:-1:o.type==="*"!=(a.type==="*")?o.type==="*"?1:-1:o.i-a.i);let n,s=1/0;for(const o of t){const[a,i]=o.split("/"),c=r.findIndex(f=>(f.type===a||f.type==="*")&&(f.subtype===i||f.subtype==="*"));c!==-1&&c<s&&(n=o,s=c)}return n}function et(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r)}function xe(e){return et(e,"application/x-www-form-urlencoded","multipart/form-data")}class C{constructor(t,r){this.status=t,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class U{constructor(t,r){this.status=t,this.location=r}}class ee{constructor(t,r){this.status=t,this.data=r}}function tt(e){return e instanceof Error||e&&e.name&&e.message?e:new Error(JSON.stringify(e))}function te(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function nt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}const st=["href","pathname","search","searchParams","toString","toJSON"];function ot(e,t){const r=new URL(e);for(const n of st){let s=r[n];Object.defineProperty(r,n,{get(){return t(),s},enumerable:!0,configurable:!0})}return r[Symbol.for("nodejs.util.inspect.custom")]=(n,s,o)=>o(e,s),at(r),r}function at(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function Re(e){for(const t of["search","searchParams"])Object.defineProperty(e,t,{get(){throw new Error(`Cannot access url.${t} on a page with prerendering enabled`)}})}const re="/__data.json";function $e(e){return e.endsWith(re)}function it(e){return e.replace(/\/$/,"")+re}function de(e){return e.slice(0,-re.length)}const ve={id:"__error"};function ct(e,t){return new Response(`${t} method not allowed`,{status:405,headers:{allow:lt(e).join(", ")}})}function lt(e){const t=[];for(const r in["GET","POST","PUT","PATCH","DELETE"])r in e&&t.push(r);return(e.GET||e.HEAD)&&t.push("HEAD"),t}function P(e,t){return e.reduce((r,n)=>n?.universal?.[t]??n?.server?.[t]??r,void 0)}function ne(e,t,r){return new Response(e.error_template({status:t,message:r}),{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function ue(e,t,r){r=r instanceof C?r:tt(r);const n=r instanceof C?r.status:500,s=await z(e,t,r),o=Z(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return $e(new URL(e.request.url).pathname)||o==="application/json"?new Response(JSON.stringify(s),{status:n,headers:{"content-type":"application/json; charset=utf-8"}}):ne(t,n,s.message)}function z(e,t,r){return r instanceof C?r.body:t.handle_error(r,e)}function B(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function Se(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (data${t.path})`:t.path===""?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function Oe(e){if(!e)return"null";if(e.type==="error"||e.type==="skip")return JSON.stringify(e);const t=D.stringify(e.data),r=[];return e.uses.dependencies.size>0&&r.push(`"dependencies":${JSON.stringify(Array.from(e.uses.dependencies))}`),e.uses.params.size>0&&r.push(`"params":${JSON.stringify(Array.from(e.uses.params))}`),e.uses.parent&&r.push('"parent":1'),e.uses.route&&r.push('"route":1'),e.uses.url&&r.push('"url":1'),`{"type":"data","data":${t},"uses":{${r.join(",")}}${e.slash?`,"slash":${JSON.stringify(e.slash)}`:""}}`}async function dt(e,t,r){const n=e.request.method;let s=t[n];if(!s&&n==="HEAD"&&(s=t.GET),!s)return ct(t,n);const o=t.prerender??r.prerender_default;if(o&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!o){if(r.initiator)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const a=await s(e);if(!(a instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);return r.prerendering&&a.headers.set("x-sveltekit-prerender",String(o)),a}catch(a){if(a instanceof U)return new Response(void 0,{status:a.status,headers:{location:a.location}});throw a}}function ut(e){const{method:t,headers:r}=e.request;if(t==="PUT"||t==="PATCH"||t==="DELETE")return!0;if(t==="POST"&&r.get("x-sveltekit-action")==="true")return!1;const n=e.request.headers.get("accept")??"*/*";return Z(n,["*","text/html"])!=="text/html"}function fe(e){return e.filter(t=>t!=null)}function se(e,t){if(isNaN(e)||e<400||e>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${e} is invalid`);return new C(e,t)}function Pe(e,t){const r=new Headers(t?.headers);return r.has("content-type")||r.set("content-type","application/json"),new Response(JSON.stringify(e),{...t,headers:r})}function ft(e){return Z(e.request.headers.get("accept")??"*/*",["application/json","text/html"])==="application/json"&&e.request.method==="POST"}async function ht(e,t,r){const n=r?.actions;if(!n){r&&Ce(r);const s=se(405,"POST method not allowed. No actions exist for this page");return L({type:"error",error:await z(e,t,s)},{status:s.status,headers:{allow:"GET"}})}qe(n);try{const s=await Ae(e,n);return s instanceof ee?L({type:"failure",status:s.status,data:he(s.data,e.route.id)}):L({type:"success",status:s?200:204,data:he(s,e.route.id)})}catch(s){const o=s;return o instanceof U?L({type:"redirect",status:o.status,location:o.location}):L({type:"error",error:await z(e,t,Te(o))},{status:o instanceof C?o.status:500})}}function Te(e){return e instanceof ee?new Error('Cannot "throw fail()". Use "return fail()"'):e}function L(e,t){return Pe(e,t)}function pt(e,t){return t.server&&e.request.method!=="GET"&&e.request.method!=="HEAD"}async function mt(e,t){const r=t.actions;if(!r)return Ce(t),e.setHeaders({allow:"GET"}),{type:"error",error:se(405,"POST method not allowed. No actions exist for this page")};qe(r);try{const n=await Ae(e,r);return n instanceof ee?{type:"failure",status:n.status,data:n.data}:{type:"success",status:200,data:n}}catch(n){const s=n;return s instanceof U?{type:"redirect",status:s.status,location:s.location}:{type:"error",error:Te(s)}}}function qe(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions")}async function Ae(e,t){const r=new URL(e.request.url);let n="default";for(const o of r.searchParams)if(o[0].startsWith("/")){if(n=o[0].slice(1),n==="default")throw new Error('Cannot use reserved action name "default"');break}const s=t[n];if(!s)throw new Error(`No action with name '${n}' found`);if(!xe(e.request))throw new Error(`Actions expect form-encoded data (received ${e.request.headers.get("content-type")}`);return s(e)}function Ce(e){for(const t of["POST","PUT","PATCH","DELETE"])if(e[t])throw new Error(`${t} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`)}function _t(e,t){return Ue(e,D.uneval,t)}function he(e,t){return Ue(e,D.stringify,t)}function Ue(e,t,r){try{return t(e)}catch(n){const s=n;if("path"in s){let o=`Data returned from action inside ${r} is not serializable: ${s.message}`;throw s.path!==""&&(o+=` (data.${s.path})`),new Error(o)}throw s}}async function ze(e){for(const t in e)if(typeof e[t]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([r,n])=>[r,await n])));return e}async function oe({event:e,options:t,state:r,node:n,parent:s}){if(!n?.server)return null;const o={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},a=ot(e.url,()=>{o.url=!0});r.prerendering&&Re(a);const i=await n.server.load?.call(null,{...e,depends:(...f)=>{for(const y of f){const{href:k}=new URL(y,e.url);o.dependencies.add(k)}},params:new Proxy(e.params,{get:(f,y)=>(o.params.add(y),f[y])}),parent:async()=>(o.parent=!0,s()),route:{get id(){return o.route=!0,e.route.id}},url:a}),c=i?await ze(i):null;return t.dev&&He(c,e.route.id),{type:"data",data:c,uses:o,slash:n.server.trailingSlash}}async function Ne({event:e,fetched:t,node:r,parent:n,server_data_promise:s,state:o,resolve_opts:a,csr:i}){const c=await s;if(!r?.universal?.load)return c?.data??null;const f=await r.universal.load.call(null,{url:e.url,params:e.params,data:c?.data??null,route:e.route,fetch:async(k,u)=>{const _=k instanceof Request&&k.body?k.clone().body:null,l=await e.fetch(k,u),d=new URL(k instanceof Request?k.url:k,e.url),p=d.origin===e.url.origin;let m;if(p)o.prerendering&&(m={response:l,body:null},o.prerendering.dependencies.set(d.pathname,m));else if((k instanceof Request?k.mode:u?.mode??"cors")!=="no-cors"){const g=l.headers.get("access-control-allow-origin");if(!g||g!==e.url.origin&&g!=="*")throw new Error(`CORS error: ${g?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}const E=new Proxy(l,{get(h,g,R){async function b(){const j=await h.text();if(!j||typeof j=="string"){const O=Number(h.status);if(isNaN(O))throw new Error(`response.status is not a number. value: "${h.status}" type: ${typeof h.status}`);t.push({url:p?d.href.slice(e.url.origin.length):d.href,method:e.request.method,request_body:k instanceof Request&&_?await yt(_):u?.body,response_body:j,response:h})}return m&&(m.body=j),j}return g==="arrayBuffer"?async()=>{const j=await h.arrayBuffer();return m&&(m.body=new Uint8Array(j)),j}:g==="text"?b:g==="json"?async()=>JSON.parse(await b()):Reflect.get(h,g,h)}});if(i){const h=l.headers.get;l.headers.get=g=>{const R=g.toLowerCase(),b=h.call(l.headers,R);if(b&&!R.startsWith("x-sveltekit-")&&!a.filterSerializedResponseHeaders(R,b))throw new Error(`Failed to get response header "${R}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e.route})`);return b}}return E},setHeaders:e.setHeaders,depends:()=>{},parent:n}),y=f?await ze(f):null;return He(y,e.route.id),y}async function yt(e){let t="";const r=e.getReader(),n=new TextDecoder;for(;;){const{done:s,value:o}=await r.read();if(s)break;t+=n.decode(o)}return t}function He(e,t){if(e!=null&&Object.getPrototypeOf(e)!==Object.prototype)throw new Error(`a load function related to route '${t}' returned ${typeof e!="object"?`a ${typeof e}`:e instanceof Response?"a Response object":Array.isArray(e)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}function V(e){let t=5381;if(typeof e=="string"){let r=e.length;for(;r;)t=t*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let n=r.length;for(;n;)t=t*33^r[--n]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const Ie={"&":"&amp;",'"':"&quot;"},gt=new RegExp(`[${Object.keys(Ie).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,"g");function Y(e){return`"${e.replace(gt,r=>r.length===2?r:Ie[r]??`&#${r.charCodeAt(0)};`)}"`}const De={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},wt=new RegExp(`[${Object.keys(De).join("")}]`,"g");function bt(e,t,r=!1){const n={};let s=null,o=null;for(const[f,y]of e.response.headers)t(f,y)&&(n[f]=y),f==="cache-control"&&(s=y),f==="age"&&(o=y);const a={status:e.response.status,statusText:e.response.statusText,headers:n,body:e.response_body},i=JSON.stringify(a).replace(wt,f=>De[f]),c=['type="application/json"',"data-sveltekit-fetched",`data-url=${Y(e.url)}`];if(e.request_body&&c.push(`data-hash=${Y(V(e.request_body))}`),!r&&e.method==="GET"&&s){const f=/s-maxage=(\d+)/g.exec(s)??/max-age=(\d+)/g.exec(s);if(f){const y=+f[1]-+(o??"0");c.push(`data-ttl="${y}"`)}}return`<script ${c.join(" ")}>${i}<\/script>`}const q=JSON.stringify,kt=new TextEncoder;function pe(e){X[0]||Et();const t=Le.slice(0),r=jt(e);for(let s=0;s<r.length;s+=16){const o=r.subarray(s,s+16);let a,i,c,f=t[0],y=t[1],k=t[2],u=t[3],_=t[4],l=t[5],d=t[6],p=t[7];for(let m=0;m<64;m++)m<16?a=o[m]:(i=o[m+1&15],c=o[m+14&15],a=o[m&15]=(i>>>7^i>>>18^i>>>3^i<<25^i<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+o[m&15]+o[m+9&15]|0),a=a+p+(_>>>6^_>>>11^_>>>25^_<<26^_<<21^_<<7)+(d^_&(l^d))+X[m],p=d,d=l,l=_,_=u+a|0,u=k,k=y,y=f,f=a+(y&k^u&(y^k))+(y>>>2^y>>>13^y>>>22^y<<30^y<<19^y<<10)|0;t[0]=t[0]+f|0,t[1]=t[1]+y|0,t[2]=t[2]+k|0,t[3]=t[3]+u|0,t[4]=t[4]+_|0,t[5]=t[5]+l|0,t[6]=t[6]+d|0,t[7]=t[7]+p|0}const n=new Uint8Array(t.buffer);return We(n),Je(n)}const Le=new Uint32Array(8),X=new Uint32Array(64);function Et(){function e(r){return(r-Math.floor(r))*4294967296}let t=2;for(let r=0;r<64;t++){let n=!0;for(let s=2;s*s<=t;s++)if(t%s===0){n=!1;break}n&&(r<8&&(Le[r]=e(t**(1/2))),X[r]=e(t**(1/3)),r++)}}function We(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],n=e[t+1],s=e[t+2],o=e[t+3];e[t+0]=o,e[t+1]=s,e[t+2]=n,e[t+3]=r}}function jt(e){const t=kt.encode(e),r=t.length*8,n=512*Math.ceil((r+65)/512),s=new Uint8Array(n/8);s.set(t),s[t.length]=128,We(s);const o=new Uint32Array(s.buffer);return o[o.length-2]=Math.floor(r/4294967296),o[o.length-1]=r,o}const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function Je(e){const t=e.length;let r="",n;for(n=2;n<t;n+=3)r+=A[e[n-2]>>2],r+=A[(e[n-2]&3)<<4|e[n-1]>>4],r+=A[(e[n-1]&15)<<2|e[n]>>6],r+=A[e[n]&63];return n===t+1&&(r+=A[e[n-2]>>2],r+=A[(e[n-2]&3)<<4],r+="=="),n===t&&(r+=A[e[n-2]>>2],r+=A[(e[n-2]&3)<<4|e[n-1]>>4],r+=A[(e[n-1]&15)<<2],r+="="),r}const me=new Uint8Array(16);function xt(){return crypto.getRandomValues(me),Je(me)}const Rt=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval"]),$t=/^(nonce|sha\d\d\d)-/;class Ge{#r;#n;#s;#o;#e;#t;#a;constructor(t,r,n,s){this.#r=t,this.#o=s?{...r}:r;const o=this.#o;if(s){const c=o["style-src"]||o["default-src"];c&&!c.includes("unsafe-inline")&&(o["style-src"]=[...c,"unsafe-inline"])}this.#e=[],this.#t=[];const a=o["script-src"]||o["default-src"],i=o["style-src"]||o["default-src"];this.#n=!!a&&a.filter(c=>c!=="unsafe-inline").length>0,this.#s=!s&&!!i&&i.filter(c=>c!=="unsafe-inline").length>0,this.script_needs_nonce=this.#n&&!this.#r,this.style_needs_nonce=this.#s&&!this.#r,this.#a=n}add_script(t){this.#n&&(this.#r?this.#e.push(`sha256-${pe(t)}`):this.#e.length===0&&this.#e.push(`nonce-${this.#a}`))}add_style(t){this.#s&&(this.#r?this.#t.push(`sha256-${pe(t)}`):this.#t.length===0&&this.#t.push(`nonce-${this.#a}`))}get_header(t=!1){const r=[],n={...this.#o};this.#t.length>0&&(n["style-src"]=[...n["style-src"]||n["default-src"]||[],...this.#t]),this.#e.length>0&&(n["script-src"]=[...n["script-src"]||n["default-src"]||[],...this.#e]);for(const s in n){if(t&&(s==="frame-ancestors"||s==="report-uri"||s==="sandbox"))continue;const o=n[s];if(!o)continue;const a=[s];Array.isArray(o)&&o.forEach(i=>{Rt.has(i)||$t.test(i)?a.push(`'${i}'`):a.push(i)}),r.push(a.join(" "))}return r.join("; ")}}class vt extends Ge{get_meta(){return`<meta http-equiv="content-security-policy" content=${Y(this.get_header(!0))}>`}}class St extends Ge{constructor(t,r,n,s){if(super(t,r,n,s),Object.values(r).filter(o=>!!o).length>0){const o=r["report-to"]?.length??0>0,a=r["report-uri"]?.length??0>0;if(!o&&!a)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Ot{nonce=xt();csp_provider;report_only_provider;constructor({mode:t,directives:r,reportOnly:n},{prerender:s,dev:o}){const a=t==="hash"||t==="auto"&&s;this.csp_provider=new vt(a,r,this.nonce,o),this.report_only_provider=new St(a,n,this.nonce,o)}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(t){this.csp_provider.add_script(t),this.report_only_provider.add_script(t)}add_style(t){this.csp_provider.add_style(t),this.report_only_provider.add_style(t)}}const Pt={...Qe(!1),check:()=>!1};async function I({branch:e,fetched:t,options:r,state:n,page_config:s,status:o,error:a=null,event:i,resolve_opts:c,action_result:f}){if(n.prerendering){if(r.csp.mode==="nonce")throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(r.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{entry:y}=r.manifest._,k=new Set(y.stylesheets),u=new Set(y.imports),_=new Set(r.manifest._.entry.fonts),l=new Set,d=new Map;let p;const m=f?.type==="success"||f?.type==="failure"?f.data??null:null;if(s.ssr){const w={stores:{page:ce(null),navigating:ce(null),updated:Pt},components:await Promise.all(e.map(({node:x})=>x.component())),form:m};let $={};for(let x=0;x<e.length;x+=1)$={...$,...e[x].data},w[`data_${x}`]=$;w.page={error:a,params:i.params,route:i.route,status:o,url:i.url,data:$,form:m},p=r.root.render(w);for(const{node:x}of e)x.imports&&x.imports.forEach(v=>u.add(v)),x.stylesheets&&x.stylesheets.forEach(v=>k.add(v)),x.fonts&&x.fonts.forEach(v=>_.add(v)),x.inline_styles&&Object.entries(await x.inline_styles()).forEach(([v,N])=>d.set(v,N))}else p={head:"",html:"",css:{code:"",map:null}};let E="",h=p.html;const g=new Ot(r.csp,{dev:r.dev,prerender:!!n.prerendering}),R=V(h);let b;if(r.paths.assets)b=r.paths.assets;else if(n.prerendering?.fallback)b=r.paths.base;else{const w=i.url.pathname.slice(r.paths.base.length).split("/").slice(2);b=w.length>0?w.map(()=>"..").join("/"):"."}const j=w=>w.startsWith("/")?w:`${b}/${w}`,O={data:"",form:"null"};try{O.data=`[${e.map(({server_data:w})=>{if(w?.type==="data"){const $=D.uneval(w.data),x=[];return w.uses.dependencies.size>0&&x.push(`dependencies:${q(Array.from(w.uses.dependencies))}`),w.uses.params.size>0&&x.push(`params:${q(Array.from(w.uses.params))}`),w.uses.parent&&x.push("parent:1"),w.uses.route&&x.push("route:1"),w.uses.url&&x.push("url:1"),`{type:"data",data:${$},uses:{${x.join(",")}}${w.slash?`,slash:${q(w.slash)}`:""}}`}return q(w)}).join(",")}]`}catch(w){const $=w;throw new Error(Se(i,$))}if(m&&(O.form=_t(m,i.route.id)),d.size>0){const w=Array.from(d.values()).join(`
`),$=[];r.dev&&$.push(" data-sveltekit"),g.style_needs_nonce&&$.push(` nonce="${g.nonce}"`),g.add_style(w),E+=`
	<style${$.join("")}>${w}</style>`}for(const w of k){const $=j(w);if(c.preload({type:"css",path:$})){const x=[];if(g.style_needs_nonce&&x.push(`nonce="${g.nonce}"`),d.has(w))x.push("disabled",'media="(max-width: 0)"');else{const v=['rel="preload"','as="style"'].concat(x);l.add(`<${encodeURI($)}>; ${v.join(";")}; nopush`)}x.unshift('rel="stylesheet"'),E+=`
		<link href="${$}" ${x.join(" ")}>`}}for(const w of _){const $=j(w);if(c.preload({type:"font",path:$})){const v=['rel="preload"','as="font"',`type="font/${w.slice(w.lastIndexOf(".")+1)}"`,`href="${$}"`,"crossorigin"];E+=`
		<link ${v.join(" ")}>`}}if(s.csr){const w=[`env: ${q(r.public_env)}`,`paths: ${q(r.paths)}`,`target: document.querySelector('[data-sveltekit-hydrate="${R}"]').parentNode`,`version: ${q(r.version)}`];if(s.ssr){const v=[`node_ids: [${e.map(({node:N})=>N.index).join(", ")}]`,`data: ${O.data}`,`form: ${O.form}`];o!==200&&v.push(`status: ${o}`),a&&v.push(`error: ${D.uneval(a)}`),r.embedded&&v.push(`params: ${D.uneval(i.params)}`,`route: ${q(i.route)}`),w.push(`hydrate: {
					${v.join(`,
					`)}
				}`)}const $=`
			import { start } from ${q(j(y.file))};

			start({
				${w.join(`,
				`)}
			});
		`;for(const v of u){const N=j(v);c.preload({type:"js",path:N})&&(l.add(`<${encodeURI(N)}>; rel="modulepreload"; nopush`),n.prerendering&&(E+=`
		<link rel="modulepreload" href="${N}">`))}const x=['type="module"',`data-sveltekit-hydrate="${R}"`];g.add_script($),g.script_needs_nonce&&x.push(`nonce="${g.nonce}"`),h+=`
		<script ${x.join(" ")}>${$}<\/script>`}if(s.ssr&&s.csr&&(h+=`
	${t.map(w=>bt(w,c.filterSerializedResponseHeaders,!!n.prerendering)).join(`
	`)}`),r.service_worker){const w=r.dev?", { type: 'module' }":"",$=`
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${j("service-worker.js")}'${w});
				});
			}
		`;g.add_script($),E+=`
		<script${g.script_needs_nonce?` nonce="${g.nonce}"`:""}>${$}<\/script>`}if(n.prerendering){const w=[],$=g.csp_provider.get_meta();$&&w.push($),n.prerendering.cache&&w.push(`<meta http-equiv="cache-control" content="${n.prerendering.cache}">`),w.length>0&&(E=w.join(`
`)+E)}E+=p.head;const T=await c.transformPageChunk({html:r.app_template({head:E,body:h,assets:b,nonce:g.nonce}),done:!0})||"",H=new Headers({"x-sveltekit-page":"true","content-type":"text/html",etag:`"${V(T)}"`});if(!n.prerendering){const w=g.csp_provider.get_header();w&&H.set("content-security-policy",w);const $=g.report_only_provider.get_header();$&&H.set("content-security-policy-report-only",$),l.size&&H.set("link",Array.from(l).join(", "))}return new Response(T,{status:o,headers:H})}async function Be({event:e,options:t,state:r,status:n,error:s,resolve_opts:o}){const a=[];try{const i=[],c=await t.manifest._.nodes[0](),f=P([c],"ssr")??!0,y=P([c],"csr")??!0;if(f){r.initiator=ve;const k=oe({event:e,options:t,state:r,node:c,parent:async()=>({})}),u=await k,_=await Ne({event:e,fetched:a,node:c,parent:async()=>({}),resolve_opts:o,server_data_promise:k,state:r,csr:y});i.push({node:c,server_data:u,data:_},{node:await t.manifest._.nodes[1](),data:null,server_data:null})}return await I({options:t,state:r,page_config:{ssr:f,csr:P([c],"csr")??!0},status:n,error:await z(e,t,s),branch:i,fetched:a,event:e,resolve_opts:o})}catch(i){return i instanceof U?B(i.status,i.location):ne(t,i instanceof C?i.status:500,(await z(e,t,i)).message)}}async function Tt(e,t,r,n,s,o){if(s.initiator===t)return new Response(`Not found: ${e.url.pathname}`,{status:404});if(s.initiator=t,ft(e)){const a=await n.manifest._.nodes[r.leaf]();return ht(e,n,a?.server)}try{const a=await Promise.all([...r.layouts.map(h=>h==null?h:n.manifest._.nodes[h]()),n.manifest._.nodes[r.leaf]()]),i=a.at(-1);let c=200,f;if(pt(e,i)){if(f=await mt(e,i.server),f?.type==="redirect")return B(303,f.location);if(f?.type==="error"){const h=f.error;c=h instanceof C?h.status:500}f?.type==="failure"&&(c=f.status)}const y=a.some(h=>h?.server),k=it(e.url.pathname),u=P(a,"prerender");if(u){const h=i.server;if(h&&h.actions)throw new Error("Cannot prerender pages with actions")}else if(s.prerendering)return u!==!1&&P(a,"ssr")===!1&&!i.server?.actions?await I({branch:[],fetched:[],page_config:{ssr:!1,csr:P(a,"csr")??!0},status:c,error:null,event:e,options:n,state:s,resolve_opts:o}):new Response(void 0,{status:204});s.prerender_default=u;const _=[];if(P(a,"ssr")===!1)return await I({branch:[],fetched:_,page_config:{ssr:!1,csr:P(a,"csr")??!0},status:c,error:null,event:e,options:n,state:s,resolve_opts:o});let l=[],d=null;const p=a.map((h,g)=>{if(d)throw d;return Promise.resolve().then(async()=>{try{if(h===i&&f?.type==="error")throw f.error;return await oe({event:e,options:n,state:s,node:h,parent:async()=>{const R={};for(let b=0;b<g;b+=1){const j=await p[b];j&&Object.assign(R,await j.data)}return R}})}catch(R){throw d=R,d}})}),m=P(a,"csr")??!0,E=a.map((h,g)=>{if(d)throw d;return Promise.resolve().then(async()=>{try{return await Ne({event:e,fetched:_,node:h,parent:async()=>{const R={};for(let b=0;b<g;b+=1)Object.assign(R,await E[b]);return R},resolve_opts:o,server_data_promise:p[g],state:s,csr:m})}catch(R){throw d=R,d}})});for(const h of p)h.catch(()=>{});for(const h of E)h.catch(()=>{});for(let h=0;h<a.length;h+=1){const g=a[h];if(g)try{const R=await p[h],b=await E[h];l.push({node:g,server_data:R,data:b})}catch(R){const b=R;if(b instanceof U){if(s.prerendering&&y){const T=JSON.stringify({type:"redirect",location:b.location});s.prerendering.dependencies.set(k,{response:new Response(T),body:T})}return B(b.status,b.location)}const j=b instanceof C?b.status:500,O=await z(e,n,b);for(;h--;)if(r.errors[h]){const T=r.errors[h],H=await n.manifest._.nodes[T]();let w=h;for(;!l[w];)w-=1;return await I({event:e,options:n,state:s,resolve_opts:o,page_config:{ssr:!0,csr:!0},status:j,error:O,branch:fe(l.slice(0,w+1)).concat({node:H,data:null,server_data:null}),fetched:_})}return ne(n,j,O.message)}else l.push(null)}if(s.prerendering&&y){const h=`{"type":"data","nodes":[${l.map(g=>Oe(g?.server_data)).join(",")}]}`;s.prerendering.dependencies.set(k,{response:new Response(h),body:h})}return await I({event:e,options:n,state:s,resolve_opts:o,page_config:{csr:P(a,"csr")??!0,ssr:!0},status:c,error:null,branch:fe(l),action_result:f,fetched:_})}catch(a){return await Be({event:e,options:n,state:s,status:500,error:a,resolve_opts:o})}}function qt(e,t,r){const n={},s=e.slice(1);let o="";for(let a=0;a<t.length;a+=1){const i=t[a];let c=s[a];if(i.chained&&i.rest&&o&&(c=c?o+"/"+c:o),o="",c===void 0)i.rest&&(n[i.name]="");else{if(i.matcher&&!r[i.matcher](c)){if(i.optional&&i.chained){let f=s.indexOf(void 0,a);if(f===-1){const y=t[a+1];if(y?.rest&&y.chained)o=c;else return}for(;f>=a;)s[f]=s[f-1],f-=1;continue}return}n[i.name]=c}}if(!o)return n}function At(e){let t=!1,r;return()=>t?r:(t=!0,r=e())}const _e="x-sveltekit-invalidated";async function Ct(e,t,r,n,s,o){if(!t.page)return new Response(void 0,{status:404});try{const a=[...t.page.layouts,t.page.leaf],i=s??a.map(()=>!0);let c=!1;const f=new URL(e.url);f.pathname=te(f.pathname,o);const y={...e,url:f},k=a.map((d,p)=>At(async()=>{try{if(c)return{type:"skip"};const m=d==null?d:await r.manifest._.nodes[d]();return oe({event:y,options:r,state:n,node:m,parent:async()=>{const E={};for(let h=0;h<p;h+=1){const g=await k[h]();g&&Object.assign(E,g.data)}return E}})}catch(m){throw c=!0,m}})),u=k.map(async(d,p)=>i[p]?d():{type:"skip"});let _=u.length;const l=await Promise.all(u.map((d,p)=>d.catch(async m=>{if(m instanceof U)throw m;return _=Math.min(_,p+1),{type:"error",error:await z(e,r,m),status:m instanceof C?m.status:void 0}})));try{const p=`{"type":"data","nodes":[${l.slice(0,_).map(Oe).join(",")}]}`;return G(p)}catch(d){const p=d;return G(JSON.stringify(Se(e,p)),500)}}catch(a){const i=a;return i instanceof U?K(i):G(JSON.stringify(await z(e,r,i)))}}function G(e,t=200){return new Response(e,{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function K(e){return G(JSON.stringify({type:"redirect",location:e.location}))}const S={};function Ut(e,t,r,n){const s=e.headers.get("cookie")??"",o=W(s,{decode:u=>u}),a=te(t.pathname,n),i=a.split("/").slice(0,-1).join("/")||"/";if(r){const u=W(s,{decode:decodeURIComponent});for(const _ of Object.keys(S))S[_]=new Set([...S[_]].filter(l=>!J(a,l)||_ in u));for(const _ in u)S[_]=S[_]??new Set,[...S[_]].some(l=>J(a,l))||S[_].add(i)}const c={},f={httpOnly:!0,sameSite:"lax",secure:!(t.hostname==="localhost"&&t.protocol==="http:")},y={get(u,_){const l=c[u];if(l&&ye(t.hostname,l.options.domain)&&J(t.pathname,l.options.path))return l.value;const d=_?.decode||decodeURIComponent,m=W(s,{decode:d})[u];if(!r||m)return m;const E=new Set([...S[u]??[]]);l&&E.add(l.options.path??i),E.size>0&&console.warn(`Cookie with name '${u}' was not found at path '${t.pathname}', but a cookie with that name exists at these paths: '${[...E].join("', '")}'. Did you mean to set its 'path' to '/' instead?`)},set(u,_,l={}){let d=l.path??i;if(c[u]={name:u,value:_,options:{...f,...l,path:d}},r)if(S[u]=S[u]??new Set,_)S[u].add(d);else{if(!S[u].has(d)&&S[u].size>0){const p=`'${Array.from(S[u]).join("', '")}'`;console.warn(`Trying to delete cookie '${u}' at path '${d}', but a cookie with that name only exists at these paths: ${p}.`)}S[u].delete(d)}},delete(u,_={}){y.set(u,"",{..._,maxAge:0})},serialize(u,_,l){return je(u,_,{...f,...l})}};function k(u,_){const l={...o};for(const d in c){const p=c[d];if(!ye(u.hostname,p.options.domain)||!J(u.pathname,p.options.path))continue;const m=p.options.encode||encodeURIComponent;l[p.name]=m(p.value)}if(_){const d=W(_,{decode:p=>p});for(const p in d)l[p]=d[p]}return Object.entries(l).map(([d,p])=>`${d}=${p}`).join("; ")}return{cookies:y,new_cookies:c,get_cookie_header:k}}function ye(e,t){if(!t)return!0;const r=t[0]==="."?t.slice(1):t;return e===r?!0:e.endsWith("."+r)}function J(e,t){if(!t)return!0;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r?!0:e.startsWith(r+"/")}function zt(e,t){for(const r of t){const{name:n,value:s,options:o}=r;e.append("set-cookie",je(n,s,o))}}function Nt({event:e,options:t,state:r,get_cookie_header:n}){return async(s,o)=>{const a=ge(s,o,e.url),i=o?.body;let c=(s instanceof Request?s.mode:o?.mode)??"cors",f=(s instanceof Request?s.credentials:o?.credentials)??"same-origin";return await t.hooks.handleFetch({event:e,request:a,fetch:async(y,k)=>{const u=ge(y,k,e.url),_=new URL(u.url);if(u.headers.has("origin")||u.headers.set("origin",e.url.origin),y!==a&&(c=(y instanceof Request?y.mode:k?.mode)??"cors",f=(y instanceof Request?y.credentials:k?.credentials)??"same-origin"),(u.method==="GET"||u.method==="HEAD")&&(c==="no-cors"&&_.origin!==e.url.origin||_.origin===e.url.origin)&&u.headers.delete("origin"),_.origin!==e.url.origin){if(`.${_.hostname}`.endsWith(`.${e.url.hostname}`)&&f!=="omit"){const j=n(_,u.headers.get("cookie"));j&&u.headers.set("cookie",j)}let b=await fetch(u);return c==="no-cors"&&(b=new Response("",{status:b.status,statusText:b.statusText,headers:b.headers})),b}let l;const d=t.paths.assets||t.paths.base,p=decodeURIComponent(_.pathname),m=(p.startsWith(d)?p.slice(d.length):p).slice(1),E=`${m}/index.html`,h=t.manifest.assets.has(m),g=t.manifest.assets.has(E);if(h||g){const b=h?m:E;if(t.read){const j=h?t.manifest.mimeTypes[m.slice(m.lastIndexOf("."))]:"text/html";return new Response(t.read(b),{headers:j?{"content-type":j}:{}})}return await fetch(u)}if(f!=="omit"){const b=n(_,u.headers.get("cookie"));b&&u.headers.set("cookie",b);const j=e.request.headers.get("authorization");j&&!u.headers.has("authorization")&&u.headers.set("authorization",j)}if(i&&typeof i!="string"&&!ArrayBuffer.isView(i))throw new Error("Request body must be a string or TypedArray");u.headers.has("accept")||u.headers.set("accept","*/*"),u.headers.has("accept-language")||u.headers.set("accept-language",e.request.headers.get("accept-language")),l=await Fe(u,t,r);const R=l.headers.get("set-cookie");if(R)for(const b of le.splitCookiesString(R)){const{name:j,value:O,...T}=le.parseString(b);e.cookies.set(j,O,T)}return l}})}}function ge(e,t,r){return e instanceof Request?e:new Request(typeof e=="string"?new URL(e,r):e,t)}function ae(e){const t=new Set(e);function r(n,s){if(n){for(const o in n)if(o[0]!=="_"&&!t.has(o)){const a=e.join(", ");throw new Error(`Invalid export '${o}'${s?` in ${s}`:""} (valid exports are ${a}, or anything with a '_' prefix)`)}}}return r}const Gt=ae(["load","prerender","csr","ssr","trailingSlash"]),Bt=ae(["load","prerender","csr","ssr","actions","trailingSlash"]),Ft=ae(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]),we=({html:e})=>e,be=()=>!1,ke=({type:e})=>e==="js"||e==="css";async function Fe(e,t,r){let n=new URL(e.url);if(t.csrf.check_origin&&e.method==="POST"&&e.headers.get("origin")!==n.origin&&xe(e)){const d=se(403,`Cross-site ${e.method} form submissions are forbidden`);return e.headers.get("accept")==="application/json"?Pe(d.body,{status:d.status}):new Response(d.body.message,{status:d.status})}let s;try{s=rt(n.pathname)}catch{return new Response("Malformed URI",{status:400})}let o=null,a={};if(t.paths.base&&!r.prerendering?.fallback){if(!s.startsWith(t.paths.base))return new Response("Not found",{status:404});s=s.slice(t.paths.base.length)||"/"}const i=$e(s);let c;if(i&&(s=de(s)||"/",n.pathname=de(n.pathname)||"/",c=n.searchParams.get(_e)?.split("_").map(Boolean),n.searchParams.delete(_e)),!r.prerendering?.fallback){const l=await t.manifest._.matchers();for(const d of t.manifest._.routes){const p=d.pattern.exec(s);if(!p)continue;const m=qt(p,d.params,l);if(m){o=d,a=nt(m);break}}}let f;const y={},k={cookies:null,fetch:null,getClientAddress:r.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-cloudflare does not specify getClientAddress. Please raise an issue")}),locals:{},params:a,platform:r.platform,request:e,route:{id:o?.id??null},setHeaders:l=>{for(const d in l){const p=d.toLowerCase(),m=l[d];if(p==="set-cookie")throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(p in y)throw new Error(`"${d}" header is already set`);y[p]=m,r.prerendering&&p==="cache-control"&&(r.prerendering.cache=m)}},url:n,isDataRequest:i};let u={transformPageChunk:we,filterSerializedResponseHeaders:be,preload:ke};try{if(o&&!i){if(o.page){const h=await Promise.all([...o.page.layouts.map(g=>g==null?g:t.manifest._.nodes[g]()),t.manifest._.nodes[o.page.leaf]()]);f=P(h,"trailingSlash")}else o.endpoint&&(f=(await o.endpoint()).trailingSlash);const E=te(n.pathname,f??"never");if(E!==n.pathname&&!r.prerendering?.fallback)return new Response(void 0,{status:301,headers:{"x-sveltekit-normalize":"1",location:(E.startsWith("//")?n.origin+E:E)+(n.search==="?"?"":n.search)}})}const{cookies:l,new_cookies:d,get_cookie_header:p}=Ut(e,n,t.dev,f??"never");k.cookies=l,k.fetch=Nt({event:k,options:t,state:r,get_cookie_header:p}),r.prerendering&&!r.prerendering.fallback&&Re(n);const m=await t.hooks.handle({event:k,resolve:(E,h)=>_(E,h).then(g=>{for(const R in y){const b=y[R];g.headers.set(R,b)}return zt(g.headers,Object.values(d)),r.prerendering&&E.route.id!==null&&g.headers.set("x-sveltekit-routeid",encodeURI(E.route.id)),g})});if(m.status===200&&m.headers.has("etag")){let E=e.headers.get("if-none-match");E?.startsWith('W/"')&&(E=E.substring(2));const h=m.headers.get("etag");if(E===h){const g=new Headers({etag:h});for(const R of["cache-control","content-location","date","expires","vary","set-cookie"]){const b=m.headers.get(R);b&&g.set(R,b)}return new Response(void 0,{status:304,headers:g})}}if(i&&m.status>=300&&m.status<=308){const E=m.headers.get("location");if(E)return K(new U(m.status,E))}return m}catch(l){return l instanceof U?i?K(l):B(l.status,l.location):await ue(k,t,l)}async function _(l,d){try{if(d){if("ssr"in d)throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");u={transformPageChunk:d.transformPageChunk||we,filterSerializedResponseHeaders:d.filterSerializedResponseHeaders||be,preload:d.preload||ke}}if(r.prerendering?.fallback)return await I({event:l,options:t,state:r,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:u});if(o){let p;if(i)p=await Ct(l,o,t,r,c,f??"never");else if(o.endpoint&&(!o.page||ut(l)))p=await dt(l,await o.endpoint(),r);else if(o.page)p=await Tt(l,o,o.page,t,r,u);else throw new Error("This should never happen");return p}return r.initiator===ve?new Response("Internal Server Error",{status:500}):r.initiator?r.prerendering?new Response("not found",{status:404}):await fetch(e):await Be({event:l,options:t,state:r,status:404,error:new Error(`Not found: ${l.url.pathname}`),resolve_opts:u})}catch(p){return await ue(l,t,p)}finally{l.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},l.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")}}}}let Q="",Me="";function Ve(e){Q=e.base,Me=e.assets||Q}const Ht=({head:e,body:t,assets:r,nonce:n})=>`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="`+r+`/favicon.png" />
    <meta name="viewport" content="width=device-width" />
    `+e+`
  </head>
  <body>
    <div>`+t+`</div>
  </body>
</html>
`,It=({status:e,message:t})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+e+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`;let Ye=null;Ve({base:"",assets:""});let Ee="https";function Mt(e){Ee=e.protocol||Ee,Ve(e.paths),e.building,Ye=e.read}class Vt{constructor(t){this.options={csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf:{check_origin:!0},dev:!1,embedded:!1,handle_error:(r,n)=>this.options.hooks.handleError({error:r,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"},hooks:null,manifest:t,paths:{base:Q,assets:Me},public_env:{},read:Ye,root:Ze,service_worker:!0,app_template:Ht,app_template_contains_nonce:!1,error_template:It,version:"1671616218874"}}async init({env:t}){const r=Object.entries(t);Object.fromEntries(r.filter(([s])=>!s.startsWith("PUBLIC_")));const n=Object.fromEntries(r.filter(([s])=>s.startsWith("PUBLIC_")));if(this.options.public_env=n,!this.options.hooks){const s=await import("./chunks/hooks.server.js");this.options.hooks={handle:s.handle||(({event:o,resolve:a})=>a(o)),handleError:s.handleError||(({error:o})=>console.error(o.stack)),handleFetch:s.handleFetch||(({request:o,fetch:a})=>a(o))}}}async respond(t,r={}){if(!(t instanceof Request))throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");return Fe(t,this.options,r)}}export{Vt as Server,Mt as override};
