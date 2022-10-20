import{S as ae,i as le,s as B,k as b,q as x,_ as re,l as y,m as E,r as T,h as g,n as d,a0 as oe,N as _,A as j,o as ie,$ as ce,a as I,c as q,b as C,O as z,G as D,t as U,d as ue,f as W,a1 as F,u as Q,W as se,C as he,R as pe,v as me,w as _e,x as fe,y as ge,e as X,g as de}from"../../../chunks/index-1063d0c6.js";import{a as ve}from"../../../chunks/store-91b79da1.js";import"../../../chunks/index-6dbc7447.js";const{document:G}=ce;function $e(r){let t,a,e,o;return{c(){t=b("script"),a=x(`MathJax = {
      // startup: { typeset: false },
      // startup: { elements: ["[m]"] },
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
  `),e=b("script"),this.h()},l(h){const p=re('[data-svelte="svelte-1fd20gn"]',G.head);t=y(p,"SCRIPT",{});var n=E(t);a=T(n,`MathJax = {
      // startup: { typeset: false },
      // startup: { elements: ["[m]"] },
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var l=E(e);l.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,o="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",o)},m(h,p){_(G.head,t),_(t,a),_(G.head,e)},p:j,i:j,o:j,d(h){g(t),g(e)}}}function be(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),a=document.querySelectorAll("[m]");for(let o of a)if(o.offsetTop>800)t.observe(o);else{let h=o.hasAttribute("d"),p=o.getAttribute("m");o.style.color="yellow",o.innerHTML=h?`$$ ${p} $$`:`$ ${p} $`}function e(o,h){for(let p of o)if(p.isIntersecting){let n=p.target,l=n.hasAttribute("d"),i=n.getAttribute("m");n.innerHTML=l?`$$ ${i} $$`:`$ ${i} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends ae{constructor(t){super(),le(this,t,be,$e,B,{})}}function Y(r,t,a){const e=r.slice();return e[6]=t[a],e[8]=a,e}function Z(r,t,a){const e=r.slice();return e[9]=t[a],e}function ee(r){let t,a;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,o){fe(t,e,o),a=!0},p:j,i(e){a||(W(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=b("p"),this.h()},l(a){t=y(a,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(a,e){C(a,t,e)},p:j,d(a){a&&g(t)}}}function ne(r){let t,a=r[8]+1+"",e,o,h,p=r[2],n=[];for(let l=0;l<p.length;l+=1)n[l]=te(Z(r,p,l));return{c(){t=b("div"),e=x(a),o=I();for(let l=0;l<n.length;l+=1)n[l].c();h=X()},l(l){t=y(l,"DIV",{});var i=E(t);e=T(i,a),i.forEach(g),o=q(l);for(let c=0;c<n.length;c+=1)n[c].l(l);h=X()},m(l,i){C(l,t,i),_(t,e),C(l,o,i);for(let c=0;c<n.length;c+=1)n[c].m(l,i);C(l,h,i)},p(l,i){if(i&4){p=l[2];let c;for(c=0;c<p.length;c+=1){const $=Z(l,p,c);n[c]?n[c].p($,i):(n[c]=te($),n[c].c(),n[c].m(h.parentNode,h))}for(;c<n.length;c+=1)n[c].d(1);n.length=p.length}},d(l){l&&g(t),l&&g(o),se(n,l),l&&g(h)}}}function Me(r){let t=r[0],a,e,o,h,p,n,l,i,c,$,w,S,N=r[0]*r[2].length+"",J,H,L,P,k,O,K,v=ee(),A=Array(r[0]),f=[];for(let s=0;s<A.length;s+=1)f[s]=ne(Y(r,A,s));return{c(){v.c(),a=I(),e=b("article"),o=b("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=I(),n=b("input"),l=I(),i=b("input"),c=I(),$=b("h2"),w=x(r[0]),S=x(" sections; "),J=x(N),H=x(" equations below"),L=I();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){v.l(s),a=q(s),e=y(s,"ARTICLE",{class:!0});var u=E(e);o=y(u,"H1",{});var m=E(o);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=q(u),n=y(u,"INPUT",{type:!0,min:!0,max:!0}),l=q(u),i=y(u,"INPUT",{type:!0,min:!0,max:!0}),c=q(u),$=y(u,"H2",{});var M=E($);w=T(M,r[0]),S=T(M," sections; "),J=T(M,N),H=T(M," equations below"),M.forEach(g),L=q(u);for(let R=0;R<f.length;R+=1)f[R].l(u);u.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",V),d(i,"type","range"),d(i,"min","1"),d(i,"max",V),d(e,"class",P="prose lg:prose-lg "+r[1])},m(s,u){v.m(s,u),C(s,a,u),C(s,e,u),_(e,o),_(o,h),_(e,p),_(e,n),z(n,r[0]),_(e,l),_(e,i),z(i,r[0]),_(e,c),_(e,$),_($,w),_($,S),_($,J),_($,H),_(e,L);for(let m=0;m<f.length;m+=1)f[m].m(e,null);k=!0,O||(K=[D(n,"input",r[4]),D(i,"change",r[5]),D(i,"input",r[5])],O=!0)},p(s,[u]){if(u&1&&B(t,t=s[0])?(de(),U(v,1,1,j),ue(),v=ee(),v.c(),W(v,1),v.m(a.parentNode,a)):v.p(s,u),u&1&&F(n.value)!==s[0]&&z(n,s[0]),u&1&&z(i,s[0]),(!k||u&1)&&Q(w,s[0]),(!k||u&1)&&N!==(N=s[0]*s[2].length+"")&&Q(J,N),u&5){A=Array(s[0]);let m;for(m=0;m<A.length;m+=1){const M=Y(s,A,m);f[m]?f[m].p(M,u):(f[m]=ne(M),f[m].c(),f[m].m(e,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=A.length}(!k||u&2&&P!==(P="prose lg:prose-lg "+s[1]))&&d(e,"class",P)},i(s){k||(W(v),k=!0)},o(s){U(v),k=!1},d(s){v.d(s),s&&g(a),s&&g(e),se(f,s),O=!1,he(K)}}}let V=1e3;function ke(r,t,a){let e,o;pe(r,ve,i=>a(3,o=i));let h=V,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=F(this.value),a(0,h)}function l(){h=F(this.value),a(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&a(1,e=o?"prose-invert":"")},[h,e,p,o,n,l]}class Ae extends ae{constructor(t){super(),le(this,t,ke,Me,B,{})}}export{Ae as default};
