var Ve=Object.defineProperty;var je=(a,e,n)=>e in a?Ve(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var ce=(a,e,n)=>(je(a,typeof e!="symbol"?e+"":e,n),n);import{S as Ce,i as Ne,s as qe,a as ze,e as T,c as Ke,b as q,g as F,t as U,d as G,f as V,h as N,j as Be,o as pe,k as Je,l as We,m as He,n as fe,p as J,q as Fe,r as Ge,u as Me,v as z,w as ee,x as K,y as B,z as Re}from"./chunks/index-1063d0c6.js";import{g as Se,f as Pe,a as Ae,s as H,b as _e,i as Ye,c as Xe}from"./chunks/singletons-245cda67.js";import"./chunks/index-6dbc7447.js";class re{constructor(e,n){ce(this,"name","HttpError");ce(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Oe{constructor(e,n){this.status=e,this.location=n}}function Ze(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Qe(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}class xe extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function et(a){let e=5381,n=a.length;if(typeof a=="string")for(;n;)e=e*33^a.charCodeAt(--n);else for(;n;)e=e*33^a[--n];return(e>>>0).toString(36)}const he=window.fetch;function tt(a,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${et(e.body)}"]`);const r=document.querySelector(i);if(r&&r.textContent){const{body:u,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(u,t))}return he(a,e)}const nt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function rt(a){const e=[],n=[];let i=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,o)=>{const d=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(p)return e.push(p[1]),n.push(p[2]),"(?:/(.*))?";const m=t===o.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((b,A)=>{if(A%2){const v=nt.exec(b);if(!v)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,Y,X]=v;return e.push(Y),n.push(X),I?"(.*?)":"([^/]+?)"}return m&&b.includes(".")&&(i=!1),b.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function at(a,e,n,i){const r={};for(let u=0;u<e.length;u+=1){const t=e[u],o=n[u],d=a[u+1]||"";if(o){const p=i[o];if(!p)throw new Error(`Missing "${o}" param matcher`);if(!p(d))return}r[t]=d}return r}function st(a,e,n){return Object.entries(e).map(([i,[r,u,t,o]])=>{const{pattern:d,names:p,types:m}=rt(i),b={id:i,exec:A=>{const v=d.exec(A);if(v)return at(v,p,m,n)},errors:r.map(A=>a[A]),layouts:u.map(A=>a[A]),leaf:a[t],uses_server_data:!!o};return b.errors.length=b.layouts.length=Math.max(b.errors.length,b.layouts.length),b})}function it(a,e){return new re(a,e)}function ot(a){let e,n,i;var r=a[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return r&&(e=new r(u(a))),{c(){e&&z(e.$$.fragment),n=T()},l(t){e&&ee(e.$$.fragment,t),n=T()},m(t,o){e&&K(e,t,o),q(t,n,o),i=!0},p(t,o){const d={};if(o&2&&(d.data=t[1]),o&16&&(d.errors=t[4]),r!==(r=t[0][0])){if(e){F();const p=e;U(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function lt(a){let e,n,i;var r=a[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[dt]},$$scope:{ctx:t}}}}return r&&(e=new r(u(a))),{c(){e&&z(e.$$.fragment),n=T()},l(t){e&&ee(e.$$.fragment,t),n=T()},m(t,o){e&&K(e,t,o),q(t,n,o),i=!0},p(t,o){const d={};if(o&2&&(d.data=t[1]),o&1053&&(d.$$scope={dirty:o,ctx:t}),r!==(r=t[0][0])){if(e){F();const p=e;U(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ct(a){let e,n,i;var r=a[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return r&&(e=new r(u(a))),{c(){e&&z(e.$$.fragment),n=T()},l(t){e&&ee(e.$$.fragment,t),n=T()},m(t,o){e&&K(e,t,o),q(t,n,o),i=!0},p(t,o){const d={};if(o&4&&(d.data=t[2]),o&16&&(d.errors=t[4]),r!==(r=t[0][1])){if(e){F();const p=e;U(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ft(a){let e,n,i;var r=a[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[ut]},$$scope:{ctx:t}}}}return r&&(e=new r(u(a))),{c(){e&&z(e.$$.fragment),n=T()},l(t){e&&ee(e.$$.fragment,t),n=T()},m(t,o){e&&K(e,t,o),q(t,n,o),i=!0},p(t,o){const d={};if(o&4&&(d.data=t[2]),o&1033&&(d.$$scope={dirty:o,ctx:t}),r!==(r=t[0][1])){if(e){F();const p=e;U(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function ut(a){let e,n,i;var r=a[0][2];function u(t){return{props:{data:t[3]}}}return r&&(e=new r(u(a))),{c(){e&&z(e.$$.fragment),n=T()},l(t){e&&ee(e.$$.fragment,t),n=T()},m(t,o){e&&K(e,t,o),q(t,n,o),i=!0},p(t,o){const d={};if(o&8&&(d.data=t[3]),r!==(r=t[0][2])){if(e){F();const p=e;U(p.$$.fragment,1,0,()=>{B(p,1)}),G()}r?(e=new r(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&U(e.$$.fragment,t),i=!1},d(t){t&&N(n),e&&B(e,t)}}}function dt(a){let e,n,i,r;const u=[ft,ct],t=[];function o(d,p){return d[0][2]?0:1}return e=o(a),n=t[e]=u[e](a),{c(){n.c(),i=T()},l(d){n.l(d),i=T()},m(d,p){t[e].m(d,p),q(d,i,p),r=!0},p(d,p){let m=e;e=o(d),e===m?t[e].p(d,p):(F(),U(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(d,p):(n=t[e]=u[e](d),n.c()),V(n,1),n.m(i.parentNode,i))},i(d){r||(V(n),r=!0)},o(d){U(n),r=!1},d(d){t[e].d(d),d&&N(i)}}}function Ie(a){let e,n=a[6]&&De(a);return{c(){e=Je("div"),n&&n.c(),this.h()},l(i){e=We(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=He(e);n&&n.l(r),r.forEach(N),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(i,r){q(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=De(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&N(e),n&&n.d()}}}function De(a){let e;return{c(){e=Fe(a[7])},l(n){e=Ge(n,a[7])},m(n,i){q(n,e,i)},p(n,i){i&128&&Me(e,n[7])},d(n){n&&N(e)}}}function pt(a){let e,n,i,r,u;const t=[lt,ot],o=[];function d(m,b){return m[0][1]?0:1}e=d(a),n=o[e]=t[e](a);let p=a[5]&&Ie(a);return{c(){n.c(),i=ze(),p&&p.c(),r=T()},l(m){n.l(m),i=Ke(m),p&&p.l(m),r=T()},m(m,b){o[e].m(m,b),q(m,i,b),p&&p.m(m,b),q(m,r,b),u=!0},p(m,[b]){let A=e;e=d(m),e===A?o[e].p(m,b):(F(),U(o[A],1,1,()=>{o[A]=null}),G(),n=o[e],n?n.p(m,b):(n=o[e]=t[e](m),n.c()),V(n,1),n.m(i.parentNode,i)),m[5]?p?p.p(m,b):(p=Ie(m),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(m){u||(V(n),u=!0)},o(m){U(n),u=!1},d(m){o[e].d(m),m&&N(i),p&&p.d(m),m&&N(r)}}}function _t(a,e,n){let{stores:i}=e,{page:r}=e,{components:u}=e,{data_0:t=null}=e,{data_1:o=null}=e,{data_2:d=null}=e,{errors:p}=e;Be(i.page.notify);let m=!1,b=!1,A=null;return pe(()=>{const v=i.page.subscribe(()=>{m&&(n(6,b=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),v}),a.$$set=v=>{"stores"in v&&n(8,i=v.stores),"page"in v&&n(9,r=v.page),"components"in v&&n(0,u=v.components),"data_0"in v&&n(1,t=v.data_0),"data_1"in v&&n(2,o=v.data_1),"data_2"in v&&n(3,d=v.data_2),"errors"in v&&n(4,p=v.errors)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[u,t,o,d,p,m,b,A,i,r]}class ht extends Ce{constructor(e){super(),Ne(this,e,_t,pt,qe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const mt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),gt=function(a,e){return new URL(a,e).href},Te={},O=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=gt(r,i),r in Te)return;Te[r]=!0;const u=r.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=u?"stylesheet":mt,u||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),u)return new Promise((d,p)=>{o.addEventListener("load",d),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},wt={},ae=[()=>O(()=>import("./chunks/0-9bce7965.js"),["chunks/0-9bce7965.js","components/pages/_layout.svelte-63e66762.js","assets/+layout-67a03970.css","chunks/index-1063d0c6.js","chunks/Dropzone-45499dde.js","assets/Dropzone-20aff2fd.css","chunks/private-2f12c45b.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/navigation-9c72386c.js","chunks/singletons-245cda67.js","chunks/firebase-b06eb9de.js"],import.meta.url),()=>O(()=>import("./chunks/1-c6474b48.js"),["chunks/1-c6474b48.js","components/pages/_error.svelte-504afafa.js","chunks/index-1063d0c6.js"],import.meta.url),()=>O(()=>import("./chunks/2-0241b021.js"),["chunks/2-0241b021.js","components/pages/_page.svelte-2afc2c1a.js","assets/+page-410c3bc4.css","chunks/index-1063d0c6.js","chunks/PlansCard-ed905200.js","assets/PlansCard-fec9ec2d.css","chunks/CalendlyJsandCSS-31012317.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/plansCardArray-c263c611.js","chunks/katex-15be85e5.js","chunks/Dropzone-45499dde.js","assets/Dropzone-20aff2fd.css","chunks/private-2f12c45b.js"],import.meta.url),()=>O(()=>import("./chunks/3-c5b16ed1.js"),["chunks/3-c5b16ed1.js","components/pages/calcom/_page.svelte-606a66f2.js","chunks/index-1063d0c6.js"],import.meta.url),()=>O(()=>import("./chunks/4-37fc52c5.js"),["chunks/4-37fc52c5.js","components/pages/faq/_page.svelte-6b6a5821.js","assets/+page-113a1f72.css","chunks/index-1063d0c6.js"],import.meta.url),()=>O(()=>import("./chunks/5-6b421d1a.js"),["chunks/5-6b421d1a.js","components/pages/homework/_page.svelte-b34f62e4.js","chunks/index-1063d0c6.js","chunks/Dropzone-45499dde.js","assets/Dropzone-20aff2fd.css","chunks/private-2f12c45b.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js"],import.meta.url),()=>O(()=>import("./chunks/6-9886bae4.js"),["chunks/6-9886bae4.js","components/pages/katex/_page.svx-640b4913.js","chunks/index-1063d0c6.js","chunks/katex-15be85e5.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js"],import.meta.url),()=>O(()=>import("./chunks/7-36449a4a.js"),["chunks/7-36449a4a.js","components/pages/login/_page.svelte-a2ec30fe.js","assets/+page-a3246318.css","chunks/index-1063d0c6.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/firebase-b06eb9de.js","chunks/private-2f12c45b.js","chunks/navigation-9c72386c.js","chunks/singletons-245cda67.js"],import.meta.url),()=>O(()=>import("./chunks/8-bdd7bcfa.js"),["chunks/8-bdd7bcfa.js","components/pages/math/_page.svx-540f1b56.js","chunks/index-1063d0c6.js","chunks/katex-15be85e5.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/Kajax-1ac094bf.js"],import.meta.url),()=>O(()=>import("./chunks/9-078641b0.js"),["chunks/9-078641b0.js","components/pages/mathjax/_page.svx-634d098b.js","chunks/index-1063d0c6.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js"],import.meta.url),()=>O(()=>import("./chunks/10-8c7d9b29.js"),["chunks/10-8c7d9b29.js","components/pages/physics/_page.svelte-d17ca8a5.js","assets/+page-fcf51fa8.css","chunks/index-1063d0c6.js","chunks/Kajax-1ac094bf.js","chunks/katex-15be85e5.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js"],import.meta.url),()=>O(()=>import("./chunks/11-903fc081.js"),["chunks/11-903fc081.js","components/pages/plans/_page.svelte-d1cadaf4.js","assets/+page-097b9a4a.css","chunks/index-1063d0c6.js","chunks/PlansCard-ed905200.js","assets/PlansCard-fec9ec2d.css","chunks/CalendlyJsandCSS-31012317.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/plansCardArray-c263c611.js"],import.meta.url),()=>O(()=>import("./chunks/12-98603411.js"),["chunks/12-98603411.js","components/pages/samplequiz/_page.md-1ab69c50.js","chunks/index-1063d0c6.js"],import.meta.url),()=>O(()=>import("./chunks/13-11493735.js"),["chunks/13-11493735.js","components/pages/schools/_page.svelte-d75186cd.js","assets/+page-fec9ec2d.css","chunks/index-1063d0c6.js","chunks/CalendlyJsandCSS-31012317.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/index-0fa359d1.js","chunks/plansCardArray-c263c611.js"],import.meta.url),()=>O(()=>import("./chunks/14-a8ca5def.js"),["chunks/14-a8ca5def.js","components/pages/screenshare/_page.svelte-54b897a4.js","chunks/index-1063d0c6.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/navigation-9c72386c.js","chunks/singletons-245cda67.js","chunks/CalendlyJsandCSS-31012317.js"],import.meta.url),()=>O(()=>import("./chunks/15-9413db38.js"),["chunks/15-9413db38.js","components/pages/screenshareA/_page.svelte-9cb2bc18.js","chunks/index-1063d0c6.js","chunks/store-817eb231.js","chunks/index-6dbc7447.js","chunks/navigation-9c72386c.js","chunks/singletons-245cda67.js"],import.meta.url),()=>O(()=>import("./chunks/16-910af3d4.js"),["chunks/16-910af3d4.js","components/pages/stripe/_page.svelte-e09c747e.js","assets/+page-8ee437b0.css","chunks/index-1063d0c6.js","chunks/firebase-b06eb9de.js","chunks/private-2f12c45b.js","chunks/index-0fa359d1.js"],import.meta.url)],vt={"":[[1],[0],2],calcom:[[1],[0],3],faq:[[1],[0],4],homework:[[1],[0],5],katex:[[1],[0],6],login:[[1],[0],7],math:[[1],[0],8],mathjax:[[1],[0],9],physics:[[1],[0],10],plans:[[1],[0],11],samplequiz:[[1],[0],12],schools:[[1],[0],13],screenshare:[[1],[0],14],screenshareA:[[1],[0],15],stripe:[[1],[0],16]},Ue="sveltekit:scroll",W="sveltekit:index",ue=st(ae,vt,wt),bt=ae[0](),yt=ae[1]();let x={};try{x=JSON.parse(sessionStorage[Ue])}catch{}function de(a){x[a]=_e()}function Et({target:a,base:e,trailing_slash:n}){var ke;const i=[],r={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},o=!1,d=!0,p=!1,m=1,b=null,A,v=!0,I=(ke=history.state)==null?void 0:ke[W];I||(I=Date.now(),history.replaceState({...history.state,[W]:I},"",location.href));const Y=x[I];Y&&(history.scrollRestoration="manual",scrollTo(Y.x,Y.y));let X=!1,se,me;async function ge(s,{noscroll:_=!1,replaceState:g=!1,keepfocus:l=!1,state:c={}},$){if(typeof s=="string"&&(s=new URL(s,Se(document))),v)return oe({url:s,scroll:_?_e():null,keepfocus:l,redirect_chain:$,details:{state:c,replaceState:g},accepted:()=>{},blocked:()=>{}});await Z(s)}async function we(s){const _=Ee(s);if(!_)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=ye(_),r.id=_.id,r.promise}async function ve(s,_,g,l){var y,P,R;const c=Ee(s),$=me={};let h=c&&await ye(c);if(!h&&s.origin===location.origin&&s.pathname===location.pathname&&(h=await ne({status:404,error:new Error(`Not found: ${s.pathname}`),url:s,routeId:null})),!h)return await Z(s),!1;if(s=(c==null?void 0:c.url)||s,me!==$)return!1;if(i.length=0,h.type==="redirect")if(_.length>10||_.includes(s.pathname))h=await ne({status:500,error:new Error("Redirect loop"),url:s,routeId:null});else return v?ge(new URL(h.location,s).href,{},[..._,s.pathname]):await Z(new URL(h.location,location.href)),!1;else((P=(y=h.props)==null?void 0:y.page)==null?void 0:P.status)>=400&&await H.updated.check()&&await Z(s);if(p=!0,g&&g.details){const{details:S}=g,k=S.replaceState?0:1;S.state[W]=I+=k,history[S.replaceState?"replaceState":"pushState"](S.state,"",s)}if(o?(t=h.state,h.props.page&&(h.props.page.url=s),A.$set(h.props)):be(h),g){const{scroll:S,keepfocus:k}=g;if(!k){const w=document.body,f=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var E;(E=getSelection())==null||E.removeAllRanges()}),f!==null?w.setAttribute("tabindex",f):w.removeAttribute("tabindex")}if(await Re(),d){const w=s.hash&&document.getElementById(s.hash.slice(1));S?scrollTo(S.x,S.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Re();r.promise=null,r.id=null,d=!0,h.props.page&&(se=h.props.page);const L=h.state.branch[h.state.branch.length-1];v=((R=L==null?void 0:L.node.shared)==null?void 0:R.router)!==!1,l&&l(),p=!1}function be(s){t=s.state;const _=document.querySelector("style[data-sveltekit]");if(_&&_.remove(),se=s.props.page,A=new ht({target:a,props:{...s.props,stores:H},hydrate:!0}),v){const g={from:null,to:new URL(location.href)};u.after_navigate.forEach(l=>l(g))}o=!0}async function te({url:s,params:_,branch:g,status:l,error:c,routeId:$,validation_errors:h}){const L=g.filter(Boolean),y={type:"loaded",state:{url:s,params:_,branch:g,error:c,session_id:m},props:{components:L.map(k=>k.node.component),errors:h}};let P={},R=!1;for(let k=0;k<L.length;k+=1)P={...P,...L[k].data},(R||!t.branch.some(w=>w===L[k]))&&(y.props[`data_${k}`]=P,R=!0);if(!t.url||s.href!==t.url.href||t.error!==c||R){y.props.page={error:c,params:_,routeId:$,status:l,url:s,data:P};const k=(w,f)=>{Object.defineProperty(y.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${f}`)}})};k("origin","origin"),k("path","pathname"),k("query","searchParams")}return y}async function ie({node:s,parent:_,url:g,params:l,routeId:c,server_data:$}){var S,k;const h={params:new Set,url:!1,dependencies:new Set,parent:!1};function L(...w){for(const f of w){const{href:E}=new URL(f,g);h.dependencies.add(E)}}let y=null;s.server&&(h.dependencies.add(g.href),h.url=!0);const P={};for(const w in l)Object.defineProperty(P,w,{get(){return h.params.add(w),l[w]},enumerable:!0});const R=new xe(g);if((S=s.shared)!=null&&S.load){const w={routeId:c,params:P,data:$,get url(){return h.url=!0,R},async fetch(f,E){let D;typeof f=="string"?D=f:(D=f.url,E={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...E});const j=new URL(D,g).href;return L(j),o?he(j,E):tt(D,E)},setHeaders:()=>{},depends:L,get parent(){return h.parent=!0,_}};Object.defineProperties(w,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),y=(k=await s.shared.load.call(null,w))!=null?k:null}return{node:s,data:y||$,uses:h}}async function ye({id:s,url:_,params:g,route:l}){if(r.id===s&&r.promise)return r.promise;const{errors:c,layouts:$,leaf:h}=l,L=t.url&&{url:s!==t.url.pathname+t.url.search,params:Object.keys(g).filter(f=>t.params[f]!==g[f])};[...c,...$,h].forEach(f=>f==null?void 0:f().catch(()=>{}));const y=[...$,h],P=[];for(let f=0;f<y.length;f++)if(!y[f])P.push(!1);else{const E=t.branch[f],D=!E||L.url&&E.uses.url||L.params.some(j=>E.uses.params.has(j))||Array.from(E.uses.dependencies).some(j=>i.some(Q=>Q(j)))||E.uses.parent&&P.includes(!0);P.push(D)}let R=null;if(l.uses_server_data){try{const f=await he(`${_.pathname}${_.pathname.endsWith("/")?"":"/"}__data.json${_.search}`);if(R=await f.json(),!f.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const S=R==null?void 0:R.nodes,k=y.map(async(f,E)=>Promise.resolve().then(async()=>{var M;if(!f)return;const D=await f(),j=t.branch[E];if(P[E]||!j||D!==j.node){const C=S==null?void 0:S[E];if(C!=null&&C.status)throw it(C.status,C.message);if(C!=null&&C.error)throw C.error;return await ie({node:D,url:_,params:g,routeId:l.id,parent:async()=>{var Le;const $e={};for(let le=0;le<E;le+=1)Object.assign($e,(Le=await k[le])==null?void 0:Le.data);return $e},server_data:(M=C==null?void 0:C.data)!=null?M:null})}else return j}));for(const f of k)f.catch(()=>{});const w=[];for(let f=0;f<y.length;f+=1)if(y[f])try{w.push(await k[f])}catch(E){const D=E;if(D instanceof Oe)return{type:"redirect",location:D.location};const j=E instanceof re?E.status:500;for(;f--;)if(c[f]){let Q,M=f;for(;!w[M];)M-=1;try{return Q={node:await c[f](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await te({url:_,params:g,branch:w.slice(0,M+1).concat(Q),status:j,error:D,routeId:l.id})}catch{continue}}return await ne({status:j,error:D,url:_,routeId:l.id})}else w.push(void 0);return await te({url:_,params:g,branch:w,status:200,error:null,routeId:l.id})}async function ne({status:s,error:_,url:g,routeId:l}){const c={},$=await ie({node:await bt,url:g,params:c,routeId:l,parent:()=>Promise.resolve({}),server_data:null}),h={node:await yt,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await te({url:g,params:c,branch:[$,h],status:s,error:_,routeId:l})}function Ee(s){if(s.origin!==location.origin||!s.pathname.startsWith(e))return;const _=decodeURI(s.pathname.slice(e.length)||"/");for(const g of ue){const l=g.exec(_);if(l){const c=new URL(s.origin+Ze(s.pathname,n)+s.search+s.hash);return{id:c.pathname+c.search,route:g,params:Qe(l),url:c}}}}async function oe({url:s,scroll:_,keepfocus:g,redirect_chain:l,details:c,accepted:$,blocked:h}){const L=t.url;let y=!1;const P={from:L,to:s,cancel:()=>y=!0};if(u.before_navigate.forEach(R=>R(P)),y){h();return}de(I),$(),o&&H.navigating.set({from:t.url,to:s}),await ve(s,l,{scroll:_,keepfocus:g,details:c},()=>{const R={from:L,to:s};u.after_navigate.forEach(S=>S(R)),H.navigating.set(null)})}function Z(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{pe(()=>(u.after_navigate.push(s),()=>{const _=u.after_navigate.indexOf(s);u.after_navigate.splice(_,1)}))},before_navigate:s=>{pe(()=>(u.before_navigate.push(s),()=>{const _=u.before_navigate.indexOf(s);u.before_navigate.splice(_,1)}))},disable_scroll_handling:()=>{(p||!o)&&(d=!1)},goto:(s,_={})=>ge(s,_,[]),invalidate:s=>{if(s===void 0){for(const _ of t.branch)_==null||_.uses.dependencies.add("");i.push(()=>!0)}else if(typeof s=="function")i.push(s);else{const{href:_}=new URL(s,location.href);i.push(g=>g===_)}return b||(b=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),b=null})),b},prefetch:async s=>{const _=new URL(s,Se(document));await we(_)},prefetch_routes:async s=>{const g=(s?ue.filter(l=>s.some(c=>l.exec(c))):ue).map(l=>Promise.all([...l.layouts,l.leaf].map(c=>c==null?void 0:c())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{let c=!1;const $={from:t.url,to:null,cancel:()=>c=!0};u.before_navigate.forEach(h=>h($)),c?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(I);try{sessionStorage[Ue]=JSON.stringify(x)}catch{}}});const s=l=>{const c=Pe(l);c&&c.href&&c.hasAttribute("sveltekit:prefetch")&&we(Ae(c))};let _;const g=l=>{clearTimeout(_),_=setTimeout(()=>{var c;(c=l.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(!v||l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const c=Pe(l);if(!c||!c.href)return;const $=c instanceof SVGAElement,h=Ae(c);if(!$&&!(h.protocol==="https:"||h.protocol==="http:"))return;const L=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||L.includes("external")||c.hasAttribute("sveltekit:reload")||($?c.target.baseVal:c.target))return;const[y,P]=h.href.split("#");if(P!==void 0&&y===location.href.split("#")[0]){X=!0,de(I),H.page.set({...se,url:h}),H.page.notify();return}oe({url:h,scroll:c.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault()})}),addEventListener("popstate",l=>{if(l.state&&v){if(l.state[W]===I)return;oe({url:new URL(location.href),scroll:x[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=l.state[W]},blocked:()=>{const c=I-l.state[W];history.go(c)}})}}),addEventListener("hashchange",()=>{X&&(X=!1,history.replaceState({...history.state,[W]:++I},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&H.navigating.set(null)})},_hydrate:async({status:s,error:_,node_ids:g,params:l,routeId:c})=>{const $=new URL(location.href);let h;try{const L=(S,k)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):k},y=L("server_data",[]),P=L("validation_errors",void 0),R=g.map(async(S,k)=>{var w;return ie({node:await ae[S](),url:$,params:l,routeId:c,parent:async()=>{const f={};for(let E=0;E<k;E+=1)Object.assign(f,(await R[E]).data);return f},server_data:(w=y[k])!=null?w:null})});h=await te({url:$,params:l,branch:await Promise.all(R),status:s,error:_!=null&&_.__is_http_error?new re(_.status,_.message):_,validation_errors:P,routeId:c})}catch(L){const y=L;if(y instanceof Oe){await Z(new URL(L.location,location.href));return}h=await ne({status:y instanceof re?y.status:500,error:y,url:$,routeId:c})}be(h)}}}function St(a){}async function Pt({paths:a,target:e,route:n,spa:i,trailing_slash:r,hydrate:u}){const t=Et({target:e,base:a.base,trailing_slash:r});Ye({client:t}),Xe(a),u&&await t._hydrate(u),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{St as set_public_env,Pt as start};
