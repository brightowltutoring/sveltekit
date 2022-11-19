import{S as Ye,i as We,s as xe,a as Xe,e as F,c as Ze,b as M,g as pe,t as J,d as de,f as z,h as G,j as Qe,o as ke,k as et,l as tt,m as rt,n as ve,p as B,q as nt,r as at,u as ot,v as W,w as x,x as Ae,y as X,z as Z,A as Ce}from"./chunks/index-680b99e4.js";import{g as Fe,f as Je,s as K,a as Oe,b as st,i as it}from"./chunks/singletons-07a2299f.js";import{_ as N}from"./chunks/preload-helper-b21cceae.js";function lt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ct(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(n,e){const t=new URL(n);for(const o of ft){let i=t[o];Object.defineProperty(t,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return pt(t),t}function pt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ue.delete(o)}return he(n,e)};const ue=new Map;function ht(n,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(i+=`[data-hash="${dt(t.body)}"]`);const f=document.querySelector(i);if(f!=null&&f.textContent){const{body:r,...u}=JSON.parse(f.textContent),_=f.getAttribute("data-ttl");return _&&ue.set(e,{body:r,init:u,ttl:1e3*Number(_)}),Promise.resolve(new Response(r,u))}return he(n,t)}function mt(n,e){const t=ue.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(n)}return he(n,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(n){const e=[],t=[];let o=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${wt(n).map((f,r,u)=>{const _=decodeURIComponent(f),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(_);if(g)return e.push(g[1]),t.push(g[2]),"(?:/([^/]+))?";const w=r===u.length-1;return _?"/"+_.split(/\[(.+?)\](?!\])/).map((V,q)=>{if(q%2){const U=_t.exec(V);if(!U)throw new Error(`Invalid param: ${V}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ae,H,oe,Q]=U;return e.push(oe),t.push(Q),H?"(.*?)":ae?"([^/]*)?":"([^/]+?)"}return w&&V.includes(".")&&(o=!1),V.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:t}}function yt(n){return!/^\([^)]+\)$/.test(n)}function wt(n){return n.slice(1).split("/").filter(yt)}function bt(n,e,t,o,i){const f={};let r=-1;for(let u=0;u<t.length;u+=1){const _=t[u],d=o[u];let g=n[u+1]||"";if(d){const w=i[d];if(!w)throw new Error(`Missing "${d}" param matcher`);if(r=e.indexOf(`=${d}`,r+1),!(!g&&e.lastIndexOf("[[",r)>e.lastIndexOf("[...",r))&&!w(g))return}f[_]=g}return f}function vt(n,e,t,o){const i=new Set(e);return Object.entries(t).map(([u,[_,d,g]])=>{const{pattern:w,names:R,types:D}=gt(u),V={id:u,exec:q=>{const U=w.exec(q);if(U)return bt(U,u,R,D,o)},errors:[1,...g||[]].map(q=>n[q]),layouts:[0,...d||[]].map(r),leaf:f(_)};return V.errors.length=V.layouts.length=Math.max(V.errors.length,V.layouts.length),V});function f(u){const _=u<0;return _&&(u=~u),[_,n[u]]}function r(u){return u===void 0?u:[i.has(u),n[u]]}}function Et(n){let e,t,o;var i=n[0][0];function f(r){return{props:{data:r[2],form:r[1]}}}return i&&(e=W(i,f(n))),{c(){e&&x(e.$$.fragment),t=F()},l(r){e&&Ae(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),M(r,t,u),o=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&2&&(_.form=r[1]),i!==(i=r[0][0])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),de()}i?(e=W(i,f(r)),x(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&J(e.$$.fragment,r),o=!1},d(r){r&&G(t),e&&Z(e,r)}}}function kt(n){let e,t,o;var i=n[0][0];function f(r){return{props:{data:r[2],$$slots:{default:[Ot]},$$scope:{ctx:r}}}}return i&&(e=W(i,f(n))),{c(){e&&x(e.$$.fragment),t=F()},l(r){e&&Ae(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),M(r,t,u),o=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&523&&(_.$$scope={dirty:u,ctx:r}),i!==(i=r[0][0])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),de()}i?(e=W(i,f(r)),x(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&J(e.$$.fragment,r),o=!1},d(r){r&&G(t),e&&Z(e,r)}}}function Ot(n){let e,t,o;var i=n[0][1];function f(r){return{props:{data:r[3],form:r[1]}}}return i&&(e=W(i,f(n))),{c(){e&&x(e.$$.fragment),t=F()},l(r){e&&Ae(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),M(r,t,u),o=!0},p(r,u){const _={};if(u&8&&(_.data=r[3]),u&2&&(_.form=r[1]),i!==(i=r[0][1])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),de()}i?(e=W(i,f(r)),x(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(r){o||(e&&z(e.$$.fragment,r),o=!0)},o(r){e&&J(e.$$.fragment,r),o=!1},d(r){r&&G(t),e&&Z(e,r)}}}function ze(n){let e,t=n[5]&&Ge(n);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=rt(e);t&&t.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(o,i){M(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=Ge(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ge(n){let e;return{c(){e=nt(n[6])},l(t){e=at(t,n[6])},m(t,o){M(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&G(e)}}}function Rt(n){let e,t,o,i,f;const r=[kt,Et],u=[];function _(g,w){return g[0][1]?0:1}e=_(n),t=u[e]=r[e](n);let d=n[4]&&ze(n);return{c(){t.c(),o=Xe(),d&&d.c(),i=F()},l(g){t.l(g),o=Ze(g),d&&d.l(g),i=F()},m(g,w){u[e].m(g,w),M(g,o,w),d&&d.m(g,w),M(g,i,w),f=!0},p(g,[w]){let R=e;e=_(g),e===R?u[e].p(g,w):(pe(),J(u[R],1,1,()=>{u[R]=null}),de(),t=u[e],t?t.p(g,w):(t=u[e]=r[e](g),t.c()),z(t,1),t.m(o.parentNode,o)),g[4]?d?d.p(g,w):(d=ze(g),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(g){f||(z(t),f=!0)},o(g){J(t),f=!1},d(g){u[e].d(g),g&&G(o),d&&d.d(g),g&&G(i)}}}function It(n,e,t){let{stores:o}=e,{page:i}=e,{components:f}=e,{form:r}=e,{data_0:u=null}=e,{data_1:_=null}=e;Qe(o.page.notify);let d=!1,g=!1,w=null;return ke(()=>{const R=o.page.subscribe(()=>{d&&(t(5,g=!0),t(6,w=document.title||"untitled page"))});return t(4,d=!0),R}),n.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,i=R.page),"components"in R&&t(0,f=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&o.page.set(i)},[f,r,u,_,d,g,w,o,i]}class Lt extends Ye{constructor(e){super(),We(this,e,It,Rt,xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const At={},me=[()=>N(()=>import("./chunks/0-11704c08.js"),["./chunks/0-11704c08.js","./components/pages/_layout.svelte-a65c331e.js","./chunks/index-680b99e4.js","./chunks/index-fe5964cf.js","./chunks/Dropzone-58a5ce0b.js","./chunks/preload-helper-b21cceae.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./chunks/utils-d53d7585.js","./assets/Dropzone-ad1f3da6.css","./chunks/navigation-86dab4f0.js","./chunks/singletons-07a2299f.js","./chunks/firebase-7217deba.js","./chunks/public-e0b14f20.js","./assets/_layout-d2fefeb1.css"],import.meta.url),()=>N(()=>import("./chunks/1-ab09c191.js"),["./chunks/1-ab09c191.js","./components/pages/_error.svelte-80bf2f3f.js","./chunks/index-680b99e4.js"],import.meta.url),()=>N(()=>import("./chunks/2-01052614.js"),["./chunks/2-01052614.js","./components/pages/_page.svelte-232fc645.js","./chunks/index-680b99e4.js","./chunks/PlansComponent-a53779b7.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./chunks/index-fe5964cf.js","./chunks/utils-d53d7585.js","./chunks/Dropzone-58a5ce0b.js","./chunks/preload-helper-b21cceae.js","./assets/Dropzone-ad1f3da6.css","./chunks/navigation-86dab4f0.js","./chunks/singletons-07a2299f.js","./assets/_page-7d3eabbd.css"],import.meta.url),()=>N(()=>import("./chunks/3-d3e094d1.js"),["./chunks/3-d3e094d1.js","./components/pages/calcom/_page.svelte-b4bebec2.js","./chunks/index-680b99e4.js"],import.meta.url),()=>N(()=>import("./chunks/4-da3847b7.js"),["./chunks/4-da3847b7.js","./chunks/_page-50113cbf.js","./components/pages/classroom/_page.svelte-7a7b3fa3.js","./chunks/index-680b99e4.js","./chunks/navigation-86dab4f0.js","./chunks/singletons-07a2299f.js","./chunks/index-4b764cf1.js","./chunks/store-121681c1.js"],import.meta.url),()=>N(()=>import("./chunks/5-e13a0b47.js"),["./chunks/5-e13a0b47.js","./components/pages/faq/_page.svelte-ba62b4e8.js","./chunks/index-680b99e4.js","./assets/_page-113a1f72.css"],import.meta.url),()=>N(()=>import("./chunks/6-f04081be.js"),["./chunks/6-f04081be.js","./components/pages/homework/_page.svelte-e49ed28a.js","./chunks/index-680b99e4.js","./chunks/Dropzone-58a5ce0b.js","./chunks/preload-helper-b21cceae.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./chunks/utils-d53d7585.js","./chunks/index-fe5964cf.js","./assets/Dropzone-ad1f3da6.css"],import.meta.url),()=>N(()=>import("./chunks/7-05d75f3d.js"),["./chunks/7-05d75f3d.js","./components/pages/katex/_page.svx-a2697981.js","./chunks/index-680b99e4.js","./chunks/katex-d33715d1.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js"],import.meta.url),()=>N(()=>import("./chunks/8-0186c292.js"),["./chunks/8-0186c292.js","./components/pages/login/_page.svelte-0f6df05e.js","./chunks/index-680b99e4.js"],import.meta.url),()=>N(()=>import("./chunks/9-57b875f2.js"),["./chunks/9-57b875f2.js","./components/pages/math/_page.svx-fbf9da3d.js","./chunks/index-680b99e4.js","./chunks/katex-d33715d1.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./chunks/index-fe5964cf.js","./chunks/Kajax-3fb1168d.js"],import.meta.url),()=>N(()=>import("./chunks/10-38f3957a.js"),["./chunks/10-38f3957a.js","./components/pages/mathjax/_page.svx-8c47c968.js","./chunks/index-680b99e4.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js"],import.meta.url),()=>N(()=>import("./chunks/11-677d8758.js"),["./chunks/11-677d8758.js","./components/pages/physics/_page.svelte-f605d5a7.js","./chunks/index-680b99e4.js","./chunks/Kajax-3fb1168d.js","./chunks/katex-d33715d1.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./assets/_page-fcf51fa8.css"],import.meta.url),()=>N(()=>import("./chunks/12-24e3f4a2.js"),["./chunks/12-24e3f4a2.js","./components/pages/plans/_page.svelte-ceb29b3b.js","./chunks/index-680b99e4.js","./chunks/PlansComponent-a53779b7.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js","./chunks/index-fe5964cf.js","./chunks/utils-d53d7585.js"],import.meta.url),()=>N(()=>import("./chunks/13-403096fb.js"),["./chunks/13-403096fb.js","./components/pages/samplequiz/_page.md-b7abba2d.js","./chunks/index-680b99e4.js"],import.meta.url),()=>N(()=>import("./chunks/14-7fc622dc.js"),["./chunks/14-7fc622dc.js","./components/pages/screenshareA/_page.svelte-846c202d.js","./chunks/index-680b99e4.js","./chunks/store-121681c1.js","./chunks/index-4b764cf1.js"],import.meta.url),()=>N(()=>import("./chunks/15-d68459e5.js"),["./chunks/15-d68459e5.js","./components/pages/stripe/_page.svelte-258cf2f6.js","./chunks/index-680b99e4.js","./chunks/public-e0b14f20.js","./chunks/index-fe5964cf.js","./chunks/firebase-7217deba.js","./assets/_page-5c304dd7.css"],import.meta.url)],St=[],Pt={"/":[2],"/calcom":[3],"/classroom":[4],"/faq":[5],"/homework":[6],"/katex":[7],"/login":[8],"/mathjax":[10],"/math":[9],"/physics":[11],"/plans":[12],"/samplequiz":[13],"/screenshareA":[14],"/stripe":[15]},$t={handleError:({error:n})=>{console.error(n)}};class Re{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(e,t){this.status=e,this.location=t}}const jt="/__data.json";async function Tt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,i])=>[o,await i])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Nt=-1,Dt=-2,Vt=-3,Ut=-4,qt=-5,Bt=-6;function Ct(n){const e=JSON.parse(n);if(typeof e=="number")return i(e);const t=e,o=Array(t.length);function i(f){if(f===Nt)return;if(f===Vt)return NaN;if(f===Ut)return 1/0;if(f===qt)return-1/0;if(f===Bt)return-0;if(f in o)return o[f];const r=t[f];if(!r||typeof r!="object")o[f]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":o[f]=new Date(r[1]);break;case"Set":const _=new Set;o[f]=_;for(let w=1;w<r.length;w+=1)_.add(i(r[w]));break;case"Map":const d=new Map;o[f]=d;for(let w=1;w<r.length;w+=2)d.set(i(r[w]),i(r[w+1]));break;case"RegExp":o[f]=new RegExp(r[1],r[2]);break;case"Object":o[f]=Object(r[1]);break;case"BigInt":o[f]=BigInt(r[1]);break;case"null":const g=Object.create(null);o[f]=g;for(let w=1;w<r.length;w+=2)g[r[w]]=i(r[w+1]);break}else{const u=new Array(r.length);o[f]=u;for(let _=0;_<r.length;_+=1){const d=r[_];d!==Dt&&(u[_]=i(d))}}else{const u={};o[f]=u;for(const _ in r){const d=r[_];u[_]=i(d)}}return o[f]}return i(0)}const He="sveltekit:scroll",C="sveltekit:index",le=vt(me,St,Pt,At),Ie=me[0],Le=me[1];Ie();Le();let ne={};try{ne=JSON.parse(sessionStorage[He])}catch{}function Ee(n){ne[n]=Oe()}function Ft({target:n,base:e,trailing_slash:t}){var Ue;const o=[];let i=null;const f={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},u=!1,_=!1,d=!0,g=!1,w=!1,R,D=(Ue=history.state)==null?void 0:Ue[C];D||(D=Date.now(),history.replaceState({...history.state,[C]:D},"",location.href));const V=ne[D];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let q=!1,U,ae,H;async function oe(){H=H||Promise.resolve(),await H,H=null;const a=new URL(location.href),c=ye(a,!0);i=null,await Pe(c,a,[])}async function Q(a,{noscroll:c=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},h,m){return typeof a=="string"&&(a=new URL(a,Fe(document))),we({url:a,scroll:c?Oe():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:p},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Se(a){const c=ye(a,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return i={id:c.id,promise:Te(c)},i.promise}async function Pe(a,c,p,s,l={},h){var k,E;ae=l;let m=a&&await Te(a);if(m||(m=await Ve(c,null,re(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(a==null?void 0:a.url)||c,ae!==l)return!1;if(m.type==="redirect")if(p.length>10||p.includes(c.pathname))m=await se({status:500,error:re(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return Q(new URL(m.location,c).href,{},[...p,c.pathname],l),!1;else((E=(k=m.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await ie(c);if(o.length=0,w=!1,g=!0,s&&s.details){const{details:b}=s,v=b.replaceState?0:1;b.state[C]=D+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(i=null,_){r=m.state,m.props.page&&(m.props.page.url=c);const b=fe();R.$set(m.props),b()}else $e(m);if(s){const{scroll:b,keepfocus:v}=s;if(!v){const I=document.body,A=I.getAttribute("tabindex");I.tabIndex=-1,I.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),A!==null?I.setAttribute("tabindex",A):I.removeAttribute("tabindex")}if(await Ce(),d){const I=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):I?I.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,m.props.page&&(U=m.props.page),h&&h(),g=!1}function $e(a){var l,h;r=a.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),U=a.props.page;const p=fe();R=new Lt({target:n,props:{...a.props,stores:K},hydrate:!0}),p();const s={from:null,to:ce("to",{params:r.params,routeId:(h=(l=r.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};f.after_navigate.forEach(m=>m(s)),_=!0}async function ee({url:a,params:c,branch:p,status:s,error:l,route:h,form:m}){var A;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:c,branch:p,error:l,route:h},props:{components:k.map(S=>S.node.component)}};m!==void 0&&(E.props.form=m);let b={},v=!U;for(let S=0;S<k.length;S+=1){const j=k[S];b={...b,...j.data},(v||!r.branch.some(T=>T===j))&&(E.props[`data_${S}`]=b,v=v||Object.keys((A=j.data)!=null?A:{}).length>0)}if(v||(v=Object.keys(U.data).length!==Object.keys(b).length),!r.url||a.href!==r.url.href||r.error!==l||m!==void 0||v){E.props.page={error:l,params:c,routeId:h&&h.id,status:s,url:a,form:m,data:v?b:U.data};const S=(j,T)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function _e({loader:a,parent:c,url:p,params:s,routeId:l,server_data_node:h}){var b,v,I,A,S;let m=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let j=function(...L){for(const y of L){const{href:O}=new URL(y,p);k.dependencies.add(O)}};const T={routeId:l,params:new Proxy(s,{get:(L,y)=>(k.params.add(y),L[y])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:ut(p,()=>{k.url=!0}),async fetch(L,y){let O;L instanceof Request?(O=L.url,y={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...y}):O=L;const $=new URL(O,p).href;return j($),_?mt($,y):ht(O,$,y)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,c()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(I=await E.shared.load.call(null,T))!=null?I:null,m=m?await Tt(m):null}return{node:E,loader:a,server:h,shared:(A=E.shared)!=null&&A.load?{type:"data",data:m,uses:k}:null,data:(S=m!=null?m:h==null?void 0:h.data)!=null?S:null}}function je(a,c,p,s){if(w)return!0;if(!p)return!1;if(p.parent&&c||p.url&&a)return!0;for(const l of p.params)if(s[l]!==r.params[l])return!0;for(const l of p.dependencies)if(o.some(h=>h(new URL(l))))return!0;return!1}function ge(a,c){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&c!=null?c:null}async function Te({id:a,invalidating:c,url:p,params:s,route:l}){var L;if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:m,leaf:k}=l,E=[...m,k];h.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=r.url?a!==r.url.pathname+r.url.search:!1,I=E.reduce((y,O,$)=>{var te;const P=r.branch[$],Y=!!(O!=null&&O[0])&&((P==null?void 0:P.loader)!==O[1]||je(v,y.some(Boolean),(te=P.server)==null?void 0:te.uses,s));return y.push(Y),y},[]);if(I.some(Boolean)){try{b=await Me(p,I)}catch(y){return se({status:500,error:re(y,{url:p,params:s,routeId:l.id}),url:p,routeId:l.id})}if(b.type==="redirect")return b}const A=b==null?void 0:b.nodes;let S=!1;const j=E.map(async(y,O)=>{var te;if(!y)return;const $=r.branch[O],P=A==null?void 0:A[O];if((!P||P.type==="skip")&&y[1]===($==null?void 0:$.loader)&&!je(v,S,(te=$.shared)==null?void 0:te.uses,s))return $;if(S=!0,(P==null?void 0:P.type)==="error")throw P;return _e({loader:y[1],url:p,params:s,routeId:l.id,parent:async()=>{var Be;const qe={};for(let be=0;be<O;be+=1)Object.assign(qe,(Be=await j[be])==null?void 0:Be.data);return qe},server_data_node:ge(P===void 0&&y[0]?{type:"skip"}:P!=null?P:null,$==null?void 0:$.server)})});for(const y of j)y.catch(()=>{});const T=[];for(let y=0;y<E.length;y+=1)if(E[y])try{T.push(await j[y])}catch(O){if(O instanceof Ke)return{type:"redirect",location:O.location};let $=500,P;A!=null&&A.includes(O)?($=(L=O.status)!=null?L:$,P=O.error):O instanceof Re?($=O.status,P=O.body):P=re(O,{params:s,url:p,routeId:l.id});const Y=await Ne(y,T,h);return Y?await ee({url:p,params:s,branch:T.slice(0,Y.idx).concat(Y.node),status:$,error:P,route:l}):await Ve(p,l.id,P,$)}else T.push(void 0);return await ee({url:p,params:s,branch:T,status:200,error:null,route:l,form:c?void 0:null})}async function Ne(a,c,p){for(;a--;)if(p[a]){let s=a;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:c,url:p,routeId:s}){var b;const l={},h=await Ie();let m=null;if(h.server)try{const v=await Me(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;m=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||u)&&await ie(p)}const k=await _e({loader:Ie,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:ge(m)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await ee({url:p,params:l,branch:[k,E],status:a,error:c,route:null})}function ye(a,c){if(De(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of le){const l=s.exec(p);if(l){const h=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:c,route:s,params:ct(l),url:h}}}}function De(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:c,keepfocus:p,redirect_chain:s,details:l,type:h,delta:m,nav_token:k,accepted:E,blocked:b}){var j,T,L,y;let v=!1;const I=ye(a,!1),A={from:ce("from",{params:r.params,routeId:(T=(j=r.route)==null?void 0:j.id)!=null?T:null,url:r.url}),to:ce("to",{params:(L=I==null?void 0:I.params)!=null?L:null,routeId:(y=I==null?void 0:I.route.id)!=null?y:null,url:a}),type:h};m!==void 0&&(A.delta=m);const S={...A,cancel:()=>{v=!0}};if(f.before_navigate.forEach(O=>O(S)),v){b();return}Ee(D),E(),_&&K.navigating.set(A),await Pe(I,a,s,{scroll:c,keepfocus:p,details:l},k,()=>{f.after_navigate.forEach(O=>O(A)),K.navigating.set(null)})}async function Ve(a,c,p,s){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await se({status:s,error:p,url:a,routeId:c}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ke(()=>(f.after_navigate.push(a),()=>{const c=f.after_navigate.indexOf(a);f.after_navigate.splice(c,1)}))},before_navigate:a=>{ke(()=>(f.before_navigate.push(a),()=>{const c=f.before_navigate.indexOf(a);f.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(a,c={})=>Q(a,c,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:c}=new URL(a,location.href);o.push(p=>p.href===c)}return oe()},invalidateAll:()=>(w=!0,oe()),prefetch:async a=>{const c=new URL(a,Fe(document));await Se(c)},prefetch_routes:async a=>{const p=(a?le.filter(s=>a.some(l=>s.exec(l))):le).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const c=new URL(location.href),{branch:p,route:s}=r;if(!s)return;const l=await Ne(r.branch.length,p,s.errors);if(l){const h=await ee({url:c,params:r.params,branch:p.slice(0,l.idx).concat(l.node),status:500,error:a.error,route:s});r=h.state;const m=fe();R.$set(h.props),m()}}else if(a.type==="redirect")Q(a.location,{},[]);else{const c={form:a.data,page:{...U,form:a.data,status:a.status}},p=fe();R.$set(c),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,k;let l=!1;const h={from:ce("from",{params:r.params,routeId:(k=(m=r.route)==null?void 0:m.id)!=null?k:null,url:r.url}),to:null,type:"unload",cancel:()=>l=!0};f.before_navigate.forEach(E=>E(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(D);try{sessionStorage[He]=JSON.stringify(ne)}catch{}}});const a=s=>{const{url:l,options:h}=Je(s);if(l&&h.prefetch){if(De(l))return;Se(l)}};let c;const p=s=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Je(s);if(!l||!h)return;const k=l instanceof SVGAElement;if(!k&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||m.reload||(k?l.target.baseVal:l.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){q=!0,Ee(D),r.url=h,K.page.set({...U,url:h}),K.page.notify();return}we({url:h,scroll:m.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===D)return;const l=s.state[C]-D;we({url:new URL(location.href),scroll:ne[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{D=s.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[C]:++D},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:c,node_ids:p,params:s,routeId:l,data:h,form:m})=>{var b;u=!0;const k=new URL(location.href);let E;try{const v=p.map(async(I,A)=>{const S=h[A];return _e({loader:me[I],url:k,params:s,routeId:l,parent:async()=>{const j={};for(let T=0;T<A;T+=1)Object.assign(j,(await v[T]).data);return j},server_data_node:ge(S)})});E=await ee({url:k,params:s,branch:await Promise.all(v),status:a,error:c,form:m,route:(b=le.find(I=>I.id===l))!=null?b:null})}catch(v){if(v instanceof Ke){await ie(new URL(v.location,location.href));return}E=await se({status:v instanceof Re?v.status:500,error:re(v,{url:k,params:s,routeId:l}),url:k,routeId:l})}$e(E)}}}async function Me(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+jt;const o=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(f=>f?"1":"").join(",")}}),i=await o.text();if(!o.ok)throw new Error(JSON.parse(i));return Ct(i)}function re(n,e){var t;return n instanceof Re?n.body:(t=$t.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Jt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(n,e){for(const t of Jt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Mt({env:n,hydrate:e,paths:t,target:o,trailing_slash:i}){st(t);const f=Ft({target:o,base:t.base,trailing_slash:i});it({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Mt as start};
