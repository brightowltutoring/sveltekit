function b(){}const J=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function x(t){t.forEach(K)}function L(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Ot(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t,e,n){return t.set(n),e}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):b;const g=new Set;function X(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(X)}function Y(t){let e;return g.size===0&&F(X),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let T=!1;function _t(){T=!0}function dt(){T=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function pt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=tt("style");return gt(Z(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function bt(t,e){if(T){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){T&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Gt(){return H(" ")}function Jt(){return H("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:$t(t,e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){vt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Et(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return Et(t,e,n,tt)}function kt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Xt(t){return kt(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e==null?"":e}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:yt(e),rules:{}};return q.set(t,n),n}function nt(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const A=e+(n-e)*u(m);c+=m*100+`%{${s(A,1-A)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${o}`,_=Z(t),{stylesheet:d,rules:h}=q.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){F(()=>{M||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let E;function v(t){E=t}function it(){if(!E)throw new Error("Function called outside component initialization");return E}function ne(t){it().$$.on_mount.push(t)}function ie(t){it().$$.after_update.push(t)}const w=[],G=[],C=[],z=[],rt=Promise.resolve();let B=!1;function st(){B||(B=!0,rt.then(lt))}function re(){return st(),rt}function k(t){C.push(t)}function se(t){z.push(t)}const O=new Set;let S=0;function lt(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),jt(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(w.length);for(;z.length;)z.pop()();B=!1,O.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function ct(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function le(){y={r:0,c:[],p:y}}function ce(){y.r||x(y.c),y=y.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function oe(t,e,n){let i=e(t,n),r=!1,u,s,o=0;function l(){u&&P(t,u)}function c(){const{delay:a=0,duration:_=300,easing:d=J,tick:h=b,css:p}=i||ut;p&&(u=nt(t,0,1,_,a,d,p,o++)),h(0,1);const m=V()+a,A=m+_;s&&s.abort(),r=!0,k(()=>R(t,!0,"start")),s=Y(D=>{if(r){if(D>=A)return h(1,0),R(t,!0,"end"),l(),r=!1;if(D>=m){const I=d((D-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,P(t),L(i)?(i=i(),ct().then(c)):c())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function ae(t,e,n){let i=e(t,n),r=!0,u;const s=y;s.r+=1;function o(){const{delay:l=0,duration:c=300,easing:f=J,tick:a=b,css:_}=i||ut;_&&(u=nt(t,1,0,c,l,f,_));const d=V()+l,h=d+c;k(()=>R(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),R(t,!1,"end"),--s.r||x(s.c),!1;if(p>=d){const m=f((p-d)/c);a(1-m,m)}}return r})}return L(i)?ct().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),r&&(u&&P(t,u),r=!1)}}}const fe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||k(()=>{const l=u.map(K).filter(L);s?s.push(...l):x(l),t.$$.on_mount=[]}),o.forEach(k)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,u,s,o=[-1]){const l=E;v(t);const c=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Tt(t,a)),_}):[],c.update(),f=!0,x(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(xt)}else c.fragment&&c.fragment.c();e.intro&&qt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),dt(),lt()}v(l)}class pe{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Zt as $,b as A,ft as B,x as C,L as D,ee as E,bt as F,Wt as G,Pt as H,Ht as I,Kt as J,Qt as K,k as L,oe as M,Ut as N,V as O,Y as P,G as Q,_e as R,pe as S,se as T,ae as U,zt as V,Lt as W,Ft as X,Bt as Y,fe as Z,Ot as _,Gt as a,It as b,Xt as c,ce as d,Jt as e,qt as f,le as g,xt as h,me as i,ie as j,tt as k,Vt as l,wt as m,$t as n,ne as o,te as p,H as q,kt as r,Dt as s,ue as t,Yt as u,de as v,he as w,Mt as x,Rt as y,re as z};
