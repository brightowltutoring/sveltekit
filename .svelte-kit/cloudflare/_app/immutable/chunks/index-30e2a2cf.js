function g(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function W(){return Object.create(null)}function N(t){t.forEach(V)}function q(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ft(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Wt(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,o){if(s){const r=X(e,n,i,o);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const Y=typeof window<"u";let dt=Y?()=>window.performance.now():()=>Date.now(),B=Y?t=>requestAnimationFrame(t):g;const y=new Set;function Z(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&B(Z)}function ht(t){let e;return y.size===0&&B(Z),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let D=!1;function mt(){D=!0}function pt(){D=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=c?s+1:yt(1,s,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,s=Math.max(a,s)}const o=[],r=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(r[l],f)}}function xt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=z("style");return bt(tt(t),e),e.sheet}function bt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(D){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){t.insertBefore(e,n||null)}function Et(t,e,n){D&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Vt(){return F(" ")}function Xt(){return F("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t){return function(e){e.target===this&&t.call(this,e)}}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Nt(t,e,n)}function ee(t){return t===""?null:+t}function Tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){nt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function st(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ne(t,e,n){return st(t,e,n,z)}function ie(t,e,n){return st(t,e,n,et)}function At(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function se(t){return At(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function re(t,e){const n=I(t,"HTML_TAG_START",0),i=I(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);nt(t);const s=t.splice(n,i-n+1);v(s[0]),v(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ue(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=et(n.nodeName):this.e=z(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)vt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class J extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}}function ae(t,e){return new t(e)}const M=new Map;let j=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:$t(e),rules:{}};return M.set(t,n),n}function jt(t,e,n,i,s,o,r,u=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const T=e+(n-e)*o(m);c+=m*100+`%{${r(T,1-T)}}
`}const f=c+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${u}`,_=tt(t),{stylesheet:h,rules:d}=M.get(_)||Mt(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${a} ${i}ms linear ${s}ms 1 both`,j+=1,a}function K(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),j-=s,j||kt())}function kt(){B(()=>{j||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),M.clear())})}let E;function w(t){E=t}function rt(){if(!E)throw new Error("Function called outside component initialization");return E}function fe(t){rt().$$.on_mount.push(t)}function _e(t){rt().$$.after_update.push(t)}const b=[],Q=[],C=[],O=[],lt=Promise.resolve();let P=!1;function ot(){P||(P=!0,lt.then(ct))}function de(){return ot(),lt}function k(t){C.push(t)}function he(t){O.push(t)}const R=new Set;let S=0;function ct(){const t=E;do{for(;S<b.length;){const e=b[S];S++,w(e),Dt(e.$$)}for(w(null),b.length=0,S=0;Q.length;)Q.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];R.has(n)||(R.add(n),n())}C.length=0}while(b.length);for(;O.length;)O.pop()();P=!1,R.clear(),w(t)}function Dt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function Lt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function U(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const H=new Set;let p;function me(){p={r:0,c:[],p}}function pe(){p.r||N(p.c),p=p.p}function Rt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),p.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function ge(t,e,n){let i=e(t,n),s=!1,o,r,u=0;function l(){o&&K(t,o)}function c(){const{delay:a=0,duration:_=300,easing:h=ut,tick:d=g,css:x}=i||Ot;x&&(o=jt(t,0,1,_,a,h,x,u++)),d(0,1);const m=dt()+a,T=m+_;r&&r.abort(),s=!0,k(()=>U(t,!0,"start")),r=ht(L=>{if(s){if(L>=T)return d(1,0),U(t,!0,"end"),l(),s=!1;if(L>=m){const G=h((L-m)/_);d(G,1-G)}}return s})}let f=!1;return{start(){f||(f=!0,K(t),q(i)?(i=i(),Lt().then(c)):c())},invalidate(){f=!1},end(){s&&(l(),s=!1)}}}const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function be(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||k(()=>{const r=t.$$.on_mount.map(V).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),o.forEach(k)}function qt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,s,o,r,u=[-1]){const l=E;w(t);const c=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return c.ctx&&s(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),f&&Bt(t,a)),_}):[],c.update(),f=!0,N(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){mt();const a=Tt(e.target);c.fragment&&c.fragment.l(a),a.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&Rt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),ct()}w(l)}class Ee{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!q(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,de as A,g as B,_t as C,N as D,q as E,Wt as F,te as G,Yt as H,Zt as I,Jt as J,Kt as K,It as L,et as M,ie as N,wt as O,oe as P,k as Q,ge as R,Ee as S,Gt as T,Qt as U,dt as V,ht as W,Ut as X,Q as Y,$e as Z,he as _,Vt as a,xe as a0,Ft as a1,ee as a2,J as a3,re as a4,Et as b,se as c,pe as d,Xt as e,Rt as f,me as g,v as h,ve as i,_e as j,z as k,ne as l,Tt as m,Nt as n,fe as o,ce as p,F as q,At as r,zt as s,ye as t,le as u,ae as v,be as w,we as x,Pt as y,qt as z};
