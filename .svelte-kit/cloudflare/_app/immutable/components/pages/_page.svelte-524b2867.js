import{S as q,i as A,s as E,k as _,l as d,m as b,h as p,n as m,b as v,f as h,g as G,d as L,t as g,T as N,E as O,v as w,a as y,w as k,c as T,x as S,F as x,H as K,I as j,y as I,_ as D,A as M,q as C,r as H}from"../../chunks/index-d43d80ed.js";import{K as U}from"../../chunks/Katex-54ec90ca.js";import{i as F,q as W}from"../../chunks/store-bbf0f30b.js";import{a as J}from"../../chunks/index-73fe8ffc.js";import"../../chunks/katex-15be85e5.js";import"../../chunks/index-5cb55e0e.js";function z(i,e,a){const l=i.slice();return l[2]=e[a],l[4]=a,l}function P(i){let e,a,l,r,o,s;return a=new U({props:{d:!0,m:i[2]}}),{c(){e=_("p"),w(a.$$.fragment),l=y(),this.h()},l(t){e=d(t,"P",{class:!0});var n=b(e);k(a.$$.fragment,n),l=T(n),n.forEach(p),this.h()},h(){m(e,"class",r=i[0]?"text-blue-100":"text-red-500")},m(t,n){v(t,e,n),S(a,e,null),x(e,l),s=!0},p(t,n){i=t,(!s||n&1&&r!==(r=i[0]?"text-blue-100":"text-red-500"))&&m(e,"class",r)},i(t){s||(h(a.$$.fragment,t),o||K(()=>{o=j(e,J,{delay:350*Math.log(i[4]+1),easing:W,duration:1e3}),o.start()}),s=!0)},o(t){g(a.$$.fragment,t),s=!1},d(t){t&&p(e),I(a)}}}function Q(i){let e,a,l=i[1],r=[];for(let s=0;s<l.length;s+=1)r[s]=P(z(i,l,s));const o=s=>g(r[s],1,1,()=>{r[s]=null});return{c(){e=_("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=d(s,"DIV",{class:!0});var t=b(e);for(let n=0;n<r.length;n+=1)r[n].l(t);t.forEach(p),this.h()},h(){m(e,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full")},m(s,t){v(s,e,t);for(let n=0;n<r.length;n+=1)r[n].m(e,null);a=!0},p(s,[t]){if(t&3){l=s[1];let n;for(n=0;n<l.length;n+=1){const c=z(s,l,n);r[n]?(r[n].p(c,t),h(r[n],1)):(r[n]=P(c),r[n].c(),h(r[n],1),r[n].m(e,null))}for(G(),n=l.length;n<r.length;n+=1)o(n);L()}},i(s){if(!a){for(let t=0;t<l.length;t+=1)h(r[t]);a=!0}},o(s){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)g(r[t]);a=!1},d(s){s&&p(e),N(r,s)}}}function R(i,e,a){let l;return O(i,F,o=>a(0,l=o)),[l,["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c","e^{i x}=\\cos x+i\\sin x"]]}class X extends q{constructor(e){super(),A(this,e,R,Q,E,{})}}function Y(i){let e,a,l,r,o,s;return{c(){e=_("div"),a=_("input"),l=y(),r=_("img"),this.h()},l(t){e=d(t,"DIV",{class:!0});var n=b(e);a=d(n,"INPUT",{inputmode:!0,class:!0}),l=T(n),r=d(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(p),this.h()},h(){m(a,"inputmode","none"),m(a,"class","absolute peer opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"),m(r,"class",o="hover:shadow-2xl "+i[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"),D(r.src,s=i[0])||m(r,"src",s),m(r,"alt",i[1]),m(e,"class","relative")},m(t,n){v(t,e,n),x(e,a),x(e,l),x(e,r)},p(t,[n]){n&4&&o!==(o="hover:shadow-2xl "+t[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300")&&m(r,"class",o),n&1&&!D(r.src,s=t[0])&&m(r,"src",s),n&2&&m(r,"alt",t[1])},i:M,o:M,d(t){t&&p(e)}}}function Z(i,e,a){let l;O(i,F,t=>a(3,l=t));let{Src:r}=e,{Alt:o}=e,s;return i.$$set=t=>{"Src"in t&&a(0,r=t.Src),"Alt"in t&&a(1,o=t.Alt)},i.$$.update=()=>{i.$$.dirty&8&&(l?a(2,s="peer-focus:bg-[rgb(218,220,203)] peer-focus:invert"):a(2,s="peer-focus:bg-[#f7f7f7]"))},[r,o,s,l]}class ee extends q{constructor(e){super(),A(this,e,Z,Y,E,{Src:0,Alt:1})}}function V(i,e,a){const l=i.slice();return l[1]=e[a],l}function B(i){let e,a;return e=new ee({props:{Src:`/reviews/review-${i[1]}-bare.webp`,Alt:`review ${i[1]}`}}),{c(){w(e.$$.fragment)},l(l){k(e.$$.fragment,l)},m(l,r){S(e,l,r),a=!0},p:M,i(l){a||(h(e.$$.fragment,l),a=!0)},o(l){g(e.$$.fragment,l),a=!1},d(l){I(e,l)}}}function te(i){let e,a,l,r,o,s=i[0],t=[];for(let c=0;c<s.length;c+=1)t[c]=B(V(i,s,c));const n=c=>g(t[c],1,1,()=>{t[c]=null});return{c(){e=_("div"),a=C("TESTIMONIALS"),l=y(),r=_("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=d(c,"DIV",{class:!0});var f=b(e);a=H(f,"TESTIMONIALS"),f.forEach(p),l=T(c),r=d(c,"DIV",{class:!0});var u=b(r);for(let $=0;$<t.length;$+=1)t[$].l(u);u.forEach(p),this.h()},h(){m(e,"class","font-Poppins text-center sm:text-5xl text-4xl py-20 "),m(r,"class","grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 ")},m(c,f){v(c,e,f),x(e,a),v(c,l,f),v(c,r,f);for(let u=0;u<t.length;u+=1)t[u].m(r,null);o=!0},p(c,[f]){if(f&1){s=c[0];let u;for(u=0;u<s.length;u+=1){const $=V(c,s,u);t[u]?(t[u].p($,f),h(t[u],1)):(t[u]=B($),t[u].c(),h(t[u],1),t[u].m(r,null))}for(G(),u=s.length;u<t.length;u+=1)n(u);L()}},i(c){if(!o){for(let f=0;f<s.length;f+=1)h(t[f]);o=!0}},o(c){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)g(t[f]);o=!1},d(c){c&&p(e),c&&p(l),c&&p(r),N(t,c)}}}function re(i){return[["zaara","miranda","ben","efe","paola","rob","tj"]]}class le extends q{constructor(e){super(),A(this,e,re,te,E,{})}}function se(i){let e,a,l,r;return e=new X({}),l=new le({}),{c(){w(e.$$.fragment),a=y(),w(l.$$.fragment)},l(o){k(e.$$.fragment,o),a=T(o),k(l.$$.fragment,o)},m(o,s){S(e,o,s),v(o,a,s),S(l,o,s),r=!0},p:M,i(o){r||(h(e.$$.fragment,o),h(l.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),r=!1},d(o){I(e,o),o&&p(a),I(l,o)}}}class fe extends q{constructor(e){super(),A(this,e,null,se,E,{})}}export{fe as default};
