import{S as le,i as ae,s as Z,k as $,q as x,V as re,l as y,m as E,r as T,h as g,n as d,_ as oe,L as _,A,o as ie,Z as ce,a as I,c as j,b as C,$ as J,F as R,t as U,d as ue,f as V,a0 as G,u as K,P as se,C as he,E as pe,v as me,w as _e,x as fe,y as ge,e as Q,g as de}from"../../../chunks/index-e087fcf9.js";import{i as ve}from"../../../chunks/store-33b71e5f.js";import"../../../chunks/index-81096dd8.js";const{document:F}=ce;function be(r){let t,l,e,u;return{c(){t=$("script"),l=x(`MathJax = {
      // startup: { typeset: false },
      startup: { elements: ["[m]"] },
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
  `),e=$("script"),this.h()},l(h){const p=re('[data-svelte="svelte-1bql7jl"]',F.head);t=y(p,"SCRIPT",{});var n=E(t);l=T(n,`MathJax = {
      // startup: { typeset: false },
      startup: { elements: ["[m]"] },
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var a=E(e);a.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,u="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",u)},m(h,p){_(F.head,t),_(t,l),_(F.head,e)},p:A,i:A,o:A,d(h){g(t),g(e)}}}function $e(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),l=document.querySelectorAll("[m]");for(let u of l)t.observe(u);function e(u,h){for(let p of u)if(p.isIntersecting){let n=p.target,a=n.hasAttribute("d"),o=n.getAttribute("m");n.innerHTML=a?`$$ ${o} $$`:`$ ${o} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends le{constructor(t){super(),ae(this,t,$e,be,Z,{})}}function X(r,t,l){const e=r.slice();return e[6]=t[l],e[8]=l,e}function Y(r,t,l){const e=r.slice();return e[9]=t[l],e}function ee(r){let t,l;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,u){fe(t,e,u),l=!0},p:A,i(e){l||(V(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=$("p"),this.h()},l(l){t=y(l,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(l,e){C(l,t,e)},p:A,d(l){l&&g(t)}}}function ne(r){let t,l=r[8]+1+"",e,u,h,p=r[2],n=[];for(let a=0;a<p.length;a+=1)n[a]=te(Y(r,p,a));return{c(){t=$("div"),e=x(l),u=I();for(let a=0;a<n.length;a+=1)n[a].c();h=Q()},l(a){t=y(a,"DIV",{});var o=E(t);e=T(o,l),o.forEach(g),u=j(a);for(let i=0;i<n.length;i+=1)n[i].l(a);h=Q()},m(a,o){C(a,t,o),_(t,e),C(a,u,o);for(let i=0;i<n.length;i+=1)n[i].m(a,o);C(a,h,o)},p(a,o){if(o&4){p=a[2];let i;for(i=0;i<p.length;i+=1){const b=Y(a,p,i);n[i]?n[i].p(b,o):(n[i]=te(b),n[i].c(),n[i].m(h.parentNode,h))}for(;i<n.length;i+=1)n[i].d(1);n.length=p.length}},d(a){a&&g(t),a&&g(u),se(n,a),a&&g(h)}}}function Me(r){let t=r[0],l,e,u,h,p,n,a,o,i,b,N,S,P=r[0]*r[2].length+"",w,L,D,z,k,H,B,v=ee(),q=Array(r[0]),f=[];for(let s=0;s<q.length;s+=1)f[s]=ne(X(r,q,s));return{c(){v.c(),l=I(),e=$("article"),u=$("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=I(),n=$("input"),a=I(),o=$("input"),i=I(),b=$("h2"),N=x(r[0]),S=x(" sections; "),w=x(P),L=x(" equations below"),D=I();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){v.l(s),l=j(s),e=y(s,"ARTICLE",{class:!0});var c=E(e);u=y(c,"H1",{});var m=E(u);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=j(c),n=y(c,"INPUT",{type:!0,min:!0,max:!0}),a=j(c),o=y(c,"INPUT",{type:!0,min:!0,max:!0}),i=j(c),b=y(c,"H2",{});var M=E(b);N=T(M,r[0]),S=T(M," sections; "),w=T(M,P),L=T(M," equations below"),M.forEach(g),D=j(c);for(let O=0;O<f.length;O+=1)f[O].l(c);c.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",W),d(o,"type","range"),d(o,"min","1"),d(o,"max",W),d(e,"class",z="prose lg:prose-lg "+r[1])},m(s,c){v.m(s,c),C(s,l,c),C(s,e,c),_(e,u),_(u,h),_(e,p),_(e,n),J(n,r[0]),_(e,a),_(e,o),J(o,r[0]),_(e,i),_(e,b),_(b,N),_(b,S),_(b,w),_(b,L),_(e,D);for(let m=0;m<f.length;m+=1)f[m].m(e,null);k=!0,H||(B=[R(n,"input",r[4]),R(o,"change",r[5]),R(o,"input",r[5])],H=!0)},p(s,[c]){if(c&1&&Z(t,t=s[0])?(de(),U(v,1,1,A),ue(),v=ee(),v.c(),V(v,1),v.m(l.parentNode,l)):v.p(s,c),c&1&&G(n.value)!==s[0]&&J(n,s[0]),c&1&&J(o,s[0]),(!k||c&1)&&K(N,s[0]),(!k||c&1)&&P!==(P=s[0]*s[2].length+"")&&K(w,P),c&5){q=Array(s[0]);let m;for(m=0;m<q.length;m+=1){const M=X(s,q,m);f[m]?f[m].p(M,c):(f[m]=ne(M),f[m].c(),f[m].m(e,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=q.length}(!k||c&2&&z!==(z="prose lg:prose-lg "+s[1]))&&d(e,"class",z)},i(s){k||(V(v),k=!0)},o(s){U(v),k=!1},d(s){v.d(s),s&&g(l),s&&g(e),se(f,s),H=!1,he(B)}}}let W=1e3;function ke(r,t,l){let e,u;pe(r,ve,o=>l(3,u=o));let h=W,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=G(this.value),l(0,h)}function a(){h=G(this.value),l(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&l(1,e=u?"prose-invert":"")},[h,e,p,u,n,a]}class qe extends le{constructor(t){super(),ae(this,t,ke,Me,Z,{})}}export{qe as default};
