import{S as le,i as ae,s as Q,k as $,q as x,W as re,l as y,m as E,r as T,h as g,n as d,a0 as oe,G as f,A as j,o as ie,$ as ce,a as I,c as q,b as C,M as z,H as R,t as U,d as ue,f as W,a1 as F,u as B,Q as se,C as he,K as pe,v as me,w as fe,x as _e,y as ge,e as X,g as de}from"../../../chunks/index-bd8a2dbd.js";import{b as ve}from"../../../chunks/store-8510ae63.js";import"../../../chunks/index-125d1f03.js";const{document:G}=ce;function be(r){let t,l,e,o;return{c(){t=$("script"),l=x(`MathJax = {
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
  `),e=$("script"),this.h()},l(h){const p=re('[data-svelte="svelte-1fd20gn"]',G.head);t=y(p,"SCRIPT",{});var n=E(t);l=T(n,`MathJax = {
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var a=E(e);a.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,o="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",o)},m(h,p){f(G.head,t),f(t,l),f(G.head,e)},p:j,i:j,o:j,d(h){g(t),g(e)}}}function $e(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),l=document.querySelectorAll("[m]");for(let o of l)if(o.offsetTop>800)t.observe(o);else{let h=o.hasAttribute("d"),p=o.getAttribute("m");o.style.color="yellow",o.innerHTML=h?`$$ ${p} $$`:`$ ${p} $`}function e(o,h){for(let p of o)if(p.isIntersecting){let n=p.target,a=n.hasAttribute("d"),i=n.getAttribute("m");n.innerHTML=a?`$$ ${i} $$`:`$ ${i} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends le{constructor(t){super(),ae(this,t,$e,be,Q,{})}}function Y(r,t,l){const e=r.slice();return e[6]=t[l],e[8]=l,e}function Z(r,t,l){const e=r.slice();return e[9]=t[l],e}function ee(r){let t,l;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){fe(t.$$.fragment,e)},m(e,o){_e(t,e,o),l=!0},p:j,i(e){l||(W(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=$("p"),this.h()},l(l){t=y(l,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(l,e){C(l,t,e)},p:j,d(l){l&&g(t)}}}function ne(r){let t,l=r[8]+1+"",e,o,h,p=r[2],n=[];for(let a=0;a<p.length;a+=1)n[a]=te(Z(r,p,a));return{c(){t=$("div"),e=x(l),o=I();for(let a=0;a<n.length;a+=1)n[a].c();h=X()},l(a){t=y(a,"DIV",{});var i=E(t);e=T(i,l),i.forEach(g),o=q(a);for(let c=0;c<n.length;c+=1)n[c].l(a);h=X()},m(a,i){C(a,t,i),f(t,e),C(a,o,i);for(let c=0;c<n.length;c+=1)n[c].m(a,i);C(a,h,i)},p(a,i){if(i&4){p=a[2];let c;for(c=0;c<p.length;c+=1){const b=Z(a,p,c);n[c]?n[c].p(b,i):(n[c]=te(b),n[c].c(),n[c].m(h.parentNode,h))}for(;c<n.length;c+=1)n[c].d(1);n.length=p.length}},d(a){a&&g(t),a&&g(o),se(n,a),a&&g(h)}}}function Me(r){let t=r[0],l,e,o,h,p,n,a,i,c,b,J,H,w=r[0]*r[2].length+"",N,S,L,P,k,D,V,v=ee(),A=Array(r[0]),_=[];for(let s=0;s<A.length;s+=1)_[s]=ne(Y(r,A,s));return{c(){v.c(),l=I(),e=$("article"),o=$("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=I(),n=$("input"),a=I(),i=$("input"),c=I(),b=$("h2"),J=x(r[0]),H=x(" sections; "),N=x(w),S=x(" equations below"),L=I();for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){v.l(s),l=q(s),e=y(s,"ARTICLE",{class:!0});var u=E(e);o=y(u,"H1",{});var m=E(o);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=q(u),n=y(u,"INPUT",{type:!0,min:!0,max:!0}),a=q(u),i=y(u,"INPUT",{type:!0,min:!0,max:!0}),c=q(u),b=y(u,"H2",{});var M=E(b);J=T(M,r[0]),H=T(M," sections; "),N=T(M,w),S=T(M," equations below"),M.forEach(g),L=q(u);for(let O=0;O<_.length;O+=1)_[O].l(u);u.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",K),d(i,"type","range"),d(i,"min","1"),d(i,"max",K),d(e,"class",P="prose lg:prose-lg "+r[1])},m(s,u){v.m(s,u),C(s,l,u),C(s,e,u),f(e,o),f(o,h),f(e,p),f(e,n),z(n,r[0]),f(e,a),f(e,i),z(i,r[0]),f(e,c),f(e,b),f(b,J),f(b,H),f(b,N),f(b,S),f(e,L);for(let m=0;m<_.length;m+=1)_[m].m(e,null);k=!0,D||(V=[R(n,"input",r[4]),R(i,"change",r[5]),R(i,"input",r[5])],D=!0)},p(s,[u]){if(u&1&&Q(t,t=s[0])?(de(),U(v,1,1,j),ue(),v=ee(),v.c(),W(v,1),v.m(l.parentNode,l)):v.p(s,u),u&1&&F(n.value)!==s[0]&&z(n,s[0]),u&1&&z(i,s[0]),(!k||u&1)&&B(J,s[0]),(!k||u&1)&&w!==(w=s[0]*s[2].length+"")&&B(N,w),u&5){A=Array(s[0]);let m;for(m=0;m<A.length;m+=1){const M=Y(s,A,m);_[m]?_[m].p(M,u):(_[m]=ne(M),_[m].c(),_[m].m(e,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=A.length}(!k||u&2&&P!==(P="prose lg:prose-lg "+s[1]))&&d(e,"class",P)},i(s){k||(W(v),k=!0)},o(s){U(v),k=!1},d(s){v.d(s),s&&g(l),s&&g(e),se(_,s),D=!1,he(V)}}}let K=1e3;function ke(r,t,l){let e,o;pe(r,ve,i=>l(3,o=i));let h=K,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=F(this.value),l(0,h)}function a(){h=F(this.value),l(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&l(1,e=o?"prose-invert":"")},[h,e,p,o,n,a]}class Ae extends le{constructor(t){super(),ae(this,t,ke,Me,Q,{})}}export{Ae as default};
