import{S as E,i as M,s as V,e as I,b as w,f as c,g as A,t as b,d as C,h as v,o as D,F,k as J,l as K,m as N,I as O,J as T,K as j,T as z}from"./index-95872f21.js";function k(s){let l,o;const t=s[9].default,e=F(t,s,s[8],null);return{c(){l=J("div"),e&&e.c()},l(n){l=K(n,"DIV",{});var f=N(l);e&&e.l(f),f.forEach(v)},m(n,f){w(n,l,f),e&&e.m(l,null),s[10](l),o=!0},p(n,f){e&&e.p&&(!o||f&256)&&O(e,t,n,n[8],o?j(t,n[8],f,null):T(n[8]),null)},i(n){o||(c(e,n),o=!0)},o(n){b(e,n),o=!1},d(n){n&&v(l),e&&e.d(n),s[10](null)}}}function B(s){let l,o,t=!s[0]&&k(s);return{c(){t&&t.c(),l=I()},l(e){t&&t.l(e),l=I()},m(e,n){t&&t.m(e,n),w(e,l,n),o=!0},p(e,[n]){e[0]?t&&(A(),b(t,1,1,()=>{t=null}),C()):t?(t.p(e,n),n&1&&c(t,1)):(t=k(e),t.c(),c(t,1),t.m(l.parentNode,l))},i(e){o||(c(t),o=!0)},o(e){b(t),o=!1},d(e){t&&t.d(e),e&&v(l)}}}function G(s,l,o){let{$$slots:t={},$$scope:e}=l,{vanilla:n}=l,{once:f}=l,{onview:u=()=>console.log("i \u2764\uFE0F slots")}=l,r,{single:a}=l,{root:_=null}=l,{threshold:m=0}=l,{margin:h="0px"}=l;const y={root:_,threshold:m,rootMargin:h};function S(i,g){for(const d of i)d.isIntersecting&&(u(d.target),f&&g.unobserve(d.target))}D(()=>{const i=new IntersectionObserver(S,y);!n&&!a&&i.observe(r),!n&&a&&i.observe(r.children[0]),n&&document.querySelectorAll(n).forEach(g=>i.observe(g))});function q(i){z[i?"unshift":"push"](()=>{r=i,o(1,r)})}return s.$$set=i=>{"vanilla"in i&&o(0,n=i.vanilla),"once"in i&&o(2,f=i.once),"onview"in i&&o(3,u=i.onview),"single"in i&&o(4,a=i.single),"root"in i&&o(5,_=i.root),"threshold"in i&&o(6,m=i.threshold),"margin"in i&&o(7,h=i.margin),"$$scope"in i&&o(8,e=i.$$scope)},[n,r,f,u,a,_,m,h,e,t,q]}class L extends E{constructor(l){super(),M(this,l,G,B,V,{vanilla:0,once:2,onview:3,single:4,root:5,threshold:6,margin:7})}}export{L as I};
