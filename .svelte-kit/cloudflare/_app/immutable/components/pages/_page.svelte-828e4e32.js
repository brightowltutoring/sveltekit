import{S as B,i as G,s as N,k as w,a as y,l as x,m as I,c as A,h,n as m,_ as $,b as k,F as q,A as E,E as O,q as J,r as Q,f as d,d as D,t as S,T as M,v as K,w as R,x as j,H as W,I as X,y as C,g as T}from"../../chunks/index-c3c96927.js";import{i as F}from"../../chunks/store-28268c15.js";import{K as Y}from"../../chunks/Katex-2484979a.js";import{q as Z,a as ee}from"../../chunks/index-406aa5de.js";/* empty css                       */import"../../chunks/navigation-a7e873cb.js";import"../../chunks/index-b80a8d4d.js";import"../../chunks/singletons-e641f76a.js";function te(o){let t,s,l,i,_,u;return{c(){t=w("div"),s=w("input"),l=y(),i=w("img"),this.h()},l(a){t=x(a,"DIV",{class:!0});var c=I(t);s=x(c,"INPUT",{inputmode:!0,class:!0}),l=A(c),i=x(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(h),this.h()},h(){m(s,"inputmode","none"),m(s,"class","absolute opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 peer"),m(i,"class",_="hover:shadow-2xl "+o[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"),$(i.src,u=o[0])||m(i,"src",u),m(i,"alt",o[1]),m(t,"class","relative")},m(a,c){k(a,t,c),q(t,s),q(t,l),q(t,i)},p(a,[c]){c&4&&_!==(_="hover:shadow-2xl "+a[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300")&&m(i,"class",_),c&1&&!$(i.src,u=a[0])&&m(i,"src",u),c&2&&m(i,"alt",a[1])},i:E,o:E,d(a){a&&h(t)}}}function re(o,t,s){let l;O(o,F,a=>s(3,l=a));let{Src:i="/reviews/review-ben.png"}=t,{Alt:_="review ben"}=t,u;return o.$$set=a=>{"Src"in a&&s(0,i=a.Src),"Alt"in a&&s(1,_=a.Alt)},o.$$.update=()=>{o.$$.dirty&8&&(l?s(2,u="peer-focus:bg-[rgb(218,220,203)] peer-focus:invert"):s(2,u="peer-focus:bg-[#f7f7f7]"))},[i,_,u,l]}class le extends B{constructor(t){super(),G(this,t,re,te,N,{Src:0,Alt:1})}}function L(o,t,s){const l=o.slice();return l[3]=t[s],l}function P(o,t,s){const l=o.slice();return l[6]=t[s],l[8]=s,l}function V(o){let t,s,l,i,_,u;return s=new Y({props:{d:!0,m:o[6]}}),{c(){t=w("p"),K(s.$$.fragment),l=y(),this.h()},l(a){t=x(a,"P",{class:!0});var c=I(t);R(s.$$.fragment,c),l=A(c),c.forEach(h),this.h()},h(){m(t,"class",i=o[0]?"text-blue-100":"text-red-500")},m(a,c){k(a,t,c),j(s,t,null),q(t,l),u=!0},p(a,c){o=a,(!u||c&1&&i!==(i=o[0]?"text-blue-100":"text-red-500"))&&m(t,"class",i)},i(a){u||(d(s.$$.fragment,a),_||W(()=>{_=X(t,ee,{delay:350*Math.log(o[8]+1),easing:Z,duration:1e3}),_.start()}),u=!0)},o(a){S(s.$$.fragment,a),u=!1},d(a){a&&h(t),C(s)}}}function z(o){let t,s;return t=new le({props:{Src:`/reviews/review-${o[3]}-bare.png`,Alt:`review ${o[3]}`}}),{c(){K(t.$$.fragment)},l(l){R(t.$$.fragment,l)},m(l,i){j(t,l,i),s=!0},p:E,i(l){s||(d(t.$$.fragment,l),s=!0)},o(l){S(t.$$.fragment,l),s=!1},d(l){C(t,l)}}}function se(o){let t,s,l,i,_,u,a,c=o[2],f=[];for(let e=0;e<c.length;e+=1)f[e]=V(P(o,c,e));const H=e=>S(f[e],1,1,()=>{f[e]=null});let v=o[1],p=[];for(let e=0;e<v.length;e+=1)p[e]=z(L(o,v,e));const U=e=>S(p[e],1,1,()=>{p[e]=null});return{c(){t=w("div");for(let e=0;e<f.length;e+=1)f[e].c();s=y(),l=w("div"),i=J("TESTIMONIALS"),_=y(),u=w("div");for(let e=0;e<p.length;e+=1)p[e].c();this.h()},l(e){t=x(e,"DIV",{class:!0});var n=I(t);for(let b=0;b<f.length;b+=1)f[b].l(n);n.forEach(h),s=A(e),l=x(e,"DIV",{class:!0});var r=I(l);i=Q(r,"TESTIMONIALS"),r.forEach(h),_=A(e),u=x(e,"DIV",{class:!0});var g=I(u);for(let b=0;b<p.length;b+=1)p[b].l(g);g.forEach(h),this.h()},h(){m(t,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full"),m(l,"class","font-Poppins text-center sm:text-5xl text-4xl py-20 "),m(u,"class","grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 ")},m(e,n){k(e,t,n);for(let r=0;r<f.length;r+=1)f[r].m(t,null);k(e,s,n),k(e,l,n),q(l,i),k(e,_,n),k(e,u,n);for(let r=0;r<p.length;r+=1)p[r].m(u,null);a=!0},p(e,[n]){if(n&5){c=e[2];let r;for(r=0;r<c.length;r+=1){const g=P(e,c,r);f[r]?(f[r].p(g,n),d(f[r],1)):(f[r]=V(g),f[r].c(),d(f[r],1),f[r].m(t,null))}for(T(),r=c.length;r<f.length;r+=1)H(r);D()}if(n&2){v=e[1];let r;for(r=0;r<v.length;r+=1){const g=L(e,v,r);p[r]?(p[r].p(g,n),d(p[r],1)):(p[r]=z(g),p[r].c(),d(p[r],1),p[r].m(u,null))}for(T(),r=v.length;r<p.length;r+=1)U(r);D()}},i(e){if(!a){for(let n=0;n<c.length;n+=1)d(f[n]);for(let n=0;n<v.length;n+=1)d(p[n]);a=!0}},o(e){f=f.filter(Boolean);for(let n=0;n<f.length;n+=1)S(f[n]);p=p.filter(Boolean);for(let n=0;n<p.length;n+=1)S(p[n]);a=!1},d(e){e&&h(t),M(f,e),e&&h(s),e&&h(l),e&&h(_),e&&h(u),M(p,e)}}}function ae(o,t,s){let l;return O(o,F,u=>s(0,l=u)),[l,["zaara","miranda","ben","efe","paola","rob","tj"],["\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}","\\prod_{i=a}^{b} f(i)","k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}","\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)"," i\\hbar\\gamma^\\mu \\partial_\\mu \\psi - mc\\psi = 0 ",`R_{\\mu \\nu} - {1 \\over 2}g_{\\mu \\nu}\\,R + g_{\\mu \\nu} \\Lambda = 
 {8 \\pi G \\over c^4} T_{\\mu \\nu}`]]}class me extends B{constructor(t){super(),G(this,t,ae,se,N,{})}}export{me as default};
