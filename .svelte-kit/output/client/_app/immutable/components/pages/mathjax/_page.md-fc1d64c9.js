import{S as ae,i as le,s as Z,k as $,q as x,V as re,l as y,m as E,r as T,h as g,n as d,_ as oe,L as _,A,o as ie,Z as ce,a as q,c as j,b as C,$ as J,F as R,t as U,d as ue,f as V,a0 as G,u as K,P as se,C as he,E as pe,v as me,w as _e,x as fe,y as ge,e as Q,g as de}from"../../../chunks/index-e087fcf9.js";import{i as ve}from"../../../chunks/store-ee8b7427.js";import"../../../chunks/index-81096dd8.js";const{document:F}=ce;function be(r){let t,a,e,u;return{c(){t=$("script"),a=x(`MathJax = {
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
  `),e=$("script"),this.h()},l(h){const p=re('[data-svelte="svelte-18ph2oy"]',F.head);t=y(p,"SCRIPT",{});var n=E(t);a=T(n,`MathJax = {
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var l=E(e);l.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,u="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",u)},m(h,p){_(F.head,t),_(t,a),_(F.head,e)},p:A,i:A,o:A,d(h){g(t),g(e)}}}function $e(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:1,rootMargin:"200px"}),a=document.querySelectorAll("[m]");for(let u of a)t.observe(u);function e(u,h){for(let p of u)if(p.isIntersecting){let n=p.target,l=n.hasAttribute("d"),o=n.getAttribute("m");n.innerHTML=l?`$$ ${o} $$`:`$ ${o} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends ae{constructor(t){super(),le(this,t,$e,be,Z,{})}}function X(r,t,a){const e=r.slice();return e[6]=t[a],e[8]=a,e}function Y(r,t,a){const e=r.slice();return e[9]=t[a],e}function ee(r){let t,a;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,u){fe(t,e,u),a=!0},p:A,i(e){a||(V(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=$("p"),this.h()},l(a){t=y(a,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(a,e){C(a,t,e)},p:A,d(a){a&&g(t)}}}function ne(r){let t,a=r[8]+1+"",e,u,h,p=r[2],n=[];for(let l=0;l<p.length;l+=1)n[l]=te(Y(r,p,l));return{c(){t=$("div"),e=x(a),u=q();for(let l=0;l<n.length;l+=1)n[l].c();h=Q()},l(l){t=y(l,"DIV",{});var o=E(t);e=T(o,a),o.forEach(g),u=j(l);for(let i=0;i<n.length;i+=1)n[i].l(l);h=Q()},m(l,o){C(l,t,o),_(t,e),C(l,u,o);for(let i=0;i<n.length;i+=1)n[i].m(l,o);C(l,h,o)},p(l,o){if(o&4){p=l[2];let i;for(i=0;i<p.length;i+=1){const b=Y(l,p,i);n[i]?n[i].p(b,o):(n[i]=te(b),n[i].c(),n[i].m(h.parentNode,h))}for(;i<n.length;i+=1)n[i].d(1);n.length=p.length}},d(l){l&&g(t),l&&g(u),se(n,l),l&&g(h)}}}function Me(r){let t=r[0],a,e,u,h,p,n,l,o,i,b,N,S,P=r[0]*r[2].length+"",w,L,D,z,k,H,B,v=ee(),I=Array(r[0]),f=[];for(let s=0;s<I.length;s+=1)f[s]=ne(X(r,I,s));return{c(){v.c(),a=q(),e=$("article"),u=$("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=q(),n=$("input"),l=q(),o=$("input"),i=q(),b=$("h2"),N=x(r[0]),S=x(" sections; "),w=x(P),L=x(" equations below"),D=q();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){v.l(s),a=j(s),e=y(s,"ARTICLE",{class:!0});var c=E(e);u=y(c,"H1",{});var m=E(u);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=j(c),n=y(c,"INPUT",{type:!0,min:!0,max:!0}),l=j(c),o=y(c,"INPUT",{type:!0,min:!0,max:!0}),i=j(c),b=y(c,"H2",{});var M=E(b);N=T(M,r[0]),S=T(M," sections; "),w=T(M,P),L=T(M," equations below"),M.forEach(g),D=j(c);for(let O=0;O<f.length;O+=1)f[O].l(c);c.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",W),d(o,"type","range"),d(o,"min","1"),d(o,"max",W),d(e,"class",z="prose lg:prose-lg "+r[1])},m(s,c){v.m(s,c),C(s,a,c),C(s,e,c),_(e,u),_(u,h),_(e,p),_(e,n),J(n,r[0]),_(e,l),_(e,o),J(o,r[0]),_(e,i),_(e,b),_(b,N),_(b,S),_(b,w),_(b,L),_(e,D);for(let m=0;m<f.length;m+=1)f[m].m(e,null);k=!0,H||(B=[R(n,"input",r[4]),R(o,"change",r[5]),R(o,"input",r[5])],H=!0)},p(s,[c]){if(c&1&&Z(t,t=s[0])?(de(),U(v,1,1,A),ue(),v=ee(),v.c(),V(v,1),v.m(a.parentNode,a)):v.p(s,c),c&1&&G(n.value)!==s[0]&&J(n,s[0]),c&1&&J(o,s[0]),(!k||c&1)&&K(N,s[0]),(!k||c&1)&&P!==(P=s[0]*s[2].length+"")&&K(w,P),c&5){I=Array(s[0]);let m;for(m=0;m<I.length;m+=1){const M=X(s,I,m);f[m]?f[m].p(M,c):(f[m]=ne(M),f[m].c(),f[m].m(e,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=I.length}(!k||c&2&&z!==(z="prose lg:prose-lg "+s[1]))&&d(e,"class",z)},i(s){k||(V(v),k=!0)},o(s){U(v),k=!1},d(s){v.d(s),s&&g(a),s&&g(e),se(f,s),H=!1,he(B)}}}let W=1e3;function ke(r,t,a){let e,u;pe(r,ve,o=>a(3,u=o));let h=W,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=G(this.value),a(0,h)}function l(){h=G(this.value),a(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&a(1,e=u?"prose-invert":"")},[h,e,p,u,n,l]}class Ie extends ae{constructor(t){super(),le(this,t,ke,Me,Z,{})}}export{Ie as default};
