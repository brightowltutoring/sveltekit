import{S as u,i as _,s as y,k as b,a as k,$ as x,e as c,V as g,l as v,h as l,c as E,a0 as p,n as m,F,b as f,A as h}from"./index-c3c96927.js";import{k as K}from"./katex-15be85e5.js";function S(i){let t,n,s,r;return{c(){t=b("link"),n=k(),s=new x(!1),r=c(),this.h()},l(e){const a=g('[data-svelte="svelte-bnfb8z"]',document.head);t=v(a,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a.forEach(l),n=E(e),s=p(e,!1),r=c(),this.h()},h(){m(t,"rel","stylesheet"),m(t,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),m(t,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),m(t,"crossorigin","anonymous"),s.a=r},m(e,a){F(document.head,t),f(e,n,a),s.m(i[0],e,a),f(e,r,a)},p(e,[a]){a&1&&s.p(e[0])},i:h,o:h,d(e){l(t),e&&l(n),e&&l(r),e&&s.d()}}}function q(i,t,n){let{d:s=!1}=t,{m:r}=t,{observed:e=!0}=t;const a={displayMode:s,throwOnError:!1};let d;return i.$$set=o=>{"d"in o&&n(1,s=o.d),"m"in o&&n(2,r=o.m),"observed"in o&&n(3,e=o.observed)},i.$$.update=()=>{i.$$.dirty&12&&e&&n(0,d=K.renderToString(r,a))},[d,s,r,e]}class N extends u{constructor(t){super(),_(this,t,q,S,y,{d:1,m:2,observed:3})}}export{N as K};
