import{S as X,i as Y,s as F,k,q as $,V as te,l as x,m as E,r as y,h as f,n as d,_ as ne,L as g,A as I,o as ae,Z as le,a as J,c as S,b as q,$ as C,F as w,t as L,d as se,f as D,a0 as O,u as G,P as ee,C as re,E as oe,v as ie,w as ce,x as ue,y as he,e as H,g as pe}from"../../../chunks/index-e087fcf9.js";import{i as me}from"../../../chunks/store-ee8b7427.js";import"../../../chunks/index-81096dd8.js";const{document:z}=le;function _e(r){let t,a,e,u;return{c(){t=k("script"),a=$(`MathJax = {
      startup: { typeset: false },
      loader: { load: ["[tex]/physics", "[tex]/cancel"] },
      tex: {
        packages: {
          "[+]": ["physics", "cancel"],
        },
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
      svg: {
        fontCache: "global",
      },
    };
  `),e=k("script"),this.h()},l(o){const h=te('[data-svelte="svelte-18ph2oy"]',z.head);t=x(h,"SCRIPT",{});var n=E(t);a=y(n,`MathJax = {
      startup: { typeset: false },
      loader: { load: ["[tex]/physics", "[tex]/cancel"] },
      tex: {
        packages: {
          "[+]": ["physics", "cancel"],
        },
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
      svg: {
        fontCache: "global",
      },
    };
  `),n.forEach(f),e=x(h,"SCRIPT",{id:!0,src:!0});var l=E(e);l.forEach(f),h.forEach(f),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,ne(e.src,u="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",u)},m(o,h){g(z.head,t),g(t,a),g(z.head,e)},p:I,i:I,o:I,d(o){f(t),f(e)}}}function fe(r){return ae(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),a=document.querySelectorAll("[m]");for(let u of a)t.observe(u);function e(u,o){for(let h of u)if(h.isIntersecting){let n=h.target,l=n.hasAttribute("d"),p=n.getAttribute("m");n.innerHTML=l?`$$ ${p} $$`:`$ ${p} $`,MathJax.typeset([n]),o.unobserve(n)}}}),[]}class ge extends X{constructor(t){super(),Y(this,t,fe,_e,F,{})}}function W(r,t,a){const e=r.slice();return e[6]=t[a],e[8]=a,e}function Z(r,t,a){const e=r.slice();return e[9]=t[a],e}function B(r){let t,a;return t=new ge({}),{c(){ie(t.$$.fragment)},l(e){ce(t.$$.fragment,e)},m(e,u){ue(t,e,u),a=!0},p:I,i(e){a||(D(t.$$.fragment,e),a=!0)},o(e){L(t.$$.fragment,e),a=!1},d(e){he(t,e)}}}function K(r){let t;return{c(){t=k("p"),this.h()},l(a){t=x(a,"P",{class:!0,d:!0,m:!0}),E(t).forEach(f),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(a,e){q(a,t,e)},p:I,d(a){a&&f(t)}}}function Q(r){let t,a=r[8]+1+"",e,u,o,h=r[2],n=[];for(let l=0;l<h.length;l+=1)n[l]=K(Z(r,h,l));return{c(){t=k("div"),e=$(a),u=J();for(let l=0;l<n.length;l+=1)n[l].c();o=H()},l(l){t=x(l,"DIV",{});var p=E(t);e=y(p,a),p.forEach(f),u=S(l);for(let c=0;c<n.length;c+=1)n[c].l(l);o=H()},m(l,p){q(l,t,p),g(t,e),q(l,u,p);for(let c=0;c<n.length;c+=1)n[c].m(l,p);q(l,o,p)},p(l,p){if(p&4){h=l[2];let c;for(c=0;c<h.length;c+=1){const b=Z(l,h,c);n[c]?n[c].p(b,p):(n[c]=K(b),n[c].c(),n[c].m(o.parentNode,o))}for(;c<n.length;c+=1)n[c].d(1);n.length=h.length}},d(l){l&&f(t),l&&f(u),ee(n,l),l&&f(o)}}}function de(r){let t=r[0],a,e,u,o,h,n,l,p,c,b=r[0]*r[2].length+"",j,P,A,M,N,U,v=B(),T=Array(r[0]),_=[];for(let s=0;s<T.length;s+=1)_[s]=Q(W(r,T,s));return{c(){v.c(),a=J(),e=k("article"),u=$(`# This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)

`),o=k("input"),h=J(),n=k("input"),l=$(`

## `),p=$(r[0]),c=$(" sections; "),j=$(b),P=$(` equations below 

`);for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){v.l(s),a=S(s),e=x(s,"ARTICLE",{class:!0});var i=E(e);u=y(i,`# This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)

`),o=x(i,"INPUT",{type:!0,min:!0,max:!0}),h=S(i),n=x(i,"INPUT",{type:!0,min:!0,max:!0}),l=y(i,`

## `),p=y(i,r[0]),c=y(i," sections; "),j=y(i,b),P=y(i,` equations below 

`);for(let m=0;m<_.length;m+=1)_[m].l(i);i.forEach(f),this.h()},h(){d(o,"type","number"),d(o,"min","1"),d(o,"max",R),d(n,"type","range"),d(n,"min","1"),d(n,"max",R),d(e,"class",A="prose lg:prose-lg "+r[1])},m(s,i){v.m(s,i),q(s,a,i),q(s,e,i),g(e,u),g(e,o),C(o,r[0]),g(e,h),g(e,n),C(n,r[0]),g(e,l),g(e,p),g(e,c),g(e,j),g(e,P);for(let m=0;m<_.length;m+=1)_[m].m(e,null);M=!0,N||(U=[w(o,"input",r[4]),w(n,"change",r[5]),w(n,"input",r[5])],N=!0)},p(s,[i]){if(i&1&&F(t,t=s[0])?(pe(),L(v,1,1,I),se(),v=B(),v.c(),D(v,1),v.m(a.parentNode,a)):v.p(s,i),i&1&&O(o.value)!==s[0]&&C(o,s[0]),i&1&&C(n,s[0]),(!M||i&1)&&G(p,s[0]),(!M||i&1)&&b!==(b=s[0]*s[2].length+"")&&G(j,b),i&5){T=Array(s[0]);let m;for(m=0;m<T.length;m+=1){const V=W(s,T,m);_[m]?_[m].p(V,i):(_[m]=Q(V),_[m].c(),_[m].m(e,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=T.length}(!M||i&2&&A!==(A="prose lg:prose-lg "+s[1]))&&d(e,"class",A)},i(s){M||(D(v),M=!0)},o(s){L(v),M=!1},d(s){v.d(s),s&&f(a),s&&f(e),ee(_,s),N=!1,re(U)}}}let R=1e3;function ve(r,t,a){let e,u;oe(r,me,p=>a(3,u=p));let o=R,h=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){o=O(this.value),a(0,o)}function l(){o=O(this.value),a(0,o)}return r.$$.update=()=>{r.$$.dirty&8&&a(1,e=u?"prose-invert":"")},[o,e,h,u,n,l]}class Me extends X{constructor(t){super(),Y(this,t,ve,de,F,{})}}export{Me as default};
