function g(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function I(){return Object.create(null)}function N(t){t.forEach(X)}function B(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ft(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function dt(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return Y(t,n=>e=n)(),e}function Wt(t,e,n){t.$$.on_destroy.push(Y(e,n))}function It(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)l[u]=e.dirty[u]|s[u];return l}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,l){if(s){const r=Z(e,n,i,l);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){return t==null?"":t}function Vt(t,e,n){return t.set(n),e}const tt=typeof window<"u";let ht=tt?()=>window.performance.now():()=>Date.now(),z=tt?t=>requestAnimationFrame(t):g;const y=new Set;function et(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&z(et)}function mt(t){let e;return y.size===0&&z(et),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let j=!1;function pt(){j=!0}function yt(){j=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:gt(1,s,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let u=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(r[c],f)}}function bt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=F("style");return wt(nt(t),e),e.sheet}function wt(t,e){return bt(t.head||t,e),e.sheet}function vt(t,e){if(j){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){j&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Yt(){return G(" ")}function Zt(){return G("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ne(t){return function(e){e.target===this&&t.call(this,e)}}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Tt(t,e,n)}function se(t){return t===""?null:+t}function At(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||l.push(u.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return lt(t,e,n,F)}function le(t,e,n){return lt(t,e,n,it)}function kt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ce(t){return kt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function oe(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);st(t);const s=t.splice(n,i-n+1);v(s[0]),v(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(l,e)}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e==null?"":e}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function _e(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class St{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class K extends St{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}function de(t,e){return new t(e)}const D=new Map;let H=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:xt(e),rules:{}};return D.set(t,n),n}function Ht(t,e,n,i,s,l,r,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const T=e+(n-e)*l(m);o+=m*100+`%{${r(T,1-T)}}
`}const f=o+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${u}`,_=nt(t),{stylesheet:h,rules:d}=D.get(_)||Dt(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${a} ${i}ms linear ${s}ms 1 both`,H+=1,a}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Mt())}function Mt(){z(()=>{H||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),D.clear())})}let E;function w(t){E=t}function L(){if(!E)throw new Error("Function called outside component initialization");return E}function he(t){L().$$.on_mount.push(t)}function me(t){L().$$.after_update.push(t)}function pe(t){L().$$.on_destroy.push(t)}function ye(){const t=L();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],U=[],S=[],O=[],ot=Promise.resolve();let q=!1;function ut(){q||(q=!0,ot.then(at))}function $e(){return ut(),ot}function M(t){S.push(t)}function be(t){O.push(t)}const R=new Set;let k=0;function at(){const t=E;do{for(;k<x.length;){const e=x[k];k++,w(e),jt(e.$$)}for(w(null),x.length=0,k=0;U.length;)U.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];R.has(n)||(R.add(n),n())}S.length=0}while(x.length);for(;O.length;)O.pop()();q=!1,R.clear(),w(t)}function jt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let b;function Lt(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function V(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function xe(){p={r:0,c:[],p}}function we(){p.r||N(p.c),p=p.p}function Pt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ve(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function Ee(t,e,n){let i=e(t,n),s=!1,l,r,u=0;function c(){l&&Q(t,l)}function o(){const{delay:a=0,duration:_=300,easing:h=ft,tick:d=g,css:$}=i||Rt;$&&(l=Ht(t,0,1,_,a,h,$,u++)),d(0,1);const m=ht()+a,T=m+_;r&&r.abort(),s=!0,M(()=>V(t,!0,"start")),r=mt(P=>{if(s){if(P>=T)return d(1,0),V(t,!0,"end"),c(),s=!1;if(P>=m){const W=h((P-m)/_);d(W,1-W)}}return s})}let f=!1;return{start(){f||(f=!0,Q(t),B(i)?(i=i(),Lt().then(o)):o())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||M(()=>{const r=t.$$.on_mount.map(X).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),l.forEach(M)}function qt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(x.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,l,r,u=[-1]){const c=E;w(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return o.ctx&&s(o.ctx[a],o.ctx[a]=d)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](d),f&&Bt(t,a)),_}):[],o.update(),f=!0,N(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){pt();const a=At(e.target);o.fragment&&o.fragment.l(a),a.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&Pt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),yt(),at()}w(c)}class Ce{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!B(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ee as $,$e as A,g as B,Y as C,N as D,B as E,Wt as F,vt as G,It as H,te as I,ne as J,Kt as K,Qt as L,Jt as M,it as N,le as O,M as P,Ee as Q,Vt as R,Ce as S,U as T,Te as U,be as V,ht as W,mt as X,ie as Y,Xt as Z,_e as _,Yt as a,ge as a0,ae as a1,Gt as a2,Ft as a3,Ut as a4,ye as a5,pe as a6,Ne as a7,se as a8,K as a9,oe as aa,Nt as b,ce as c,we as d,Zt as e,Pt as f,xe as g,v as h,Se as i,me as j,F as k,re as l,At as m,Tt as n,he as o,fe as p,G as q,kt as r,zt as s,ve as t,ue as u,de as v,Ae as w,ke as x,Ot as y,qt as z};
