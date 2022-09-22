import{S as le,i as ae,s as Z,k as b,q as x,V as re,l as y,m as E,r as T,h as g,n as d,_ as oe,L as _,A as j,o as ie,Z as ce,a as I,c as q,b as C,$ as J,F as R,t as U,d as ue,f as V,a0 as G,u as K,P as se,C as he,E as pe,v as me,w as _e,x as fe,y as ge,e as Q,g as de}from"../../../chunks/index-e087fcf9.js";import{i as ve}from"../../../chunks/store-33b71e5f.js";import"../../../chunks/index-81096dd8.js";const{document:F}=ce;function $e(r){let t,l,e,o;return{c(){t=b("script"),l=x(`MathJax = {
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
  `),e=b("script"),this.h()},l(h){const p=re('[data-svelte="svelte-1fd20gn"]',F.head);t=y(p,"SCRIPT",{});var n=E(t);l=T(n,`MathJax = {
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var a=E(e);a.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,o="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",o)},m(h,p){_(F.head,t),_(t,l),_(F.head,e)},p:j,i:j,o:j,d(h){g(t),g(e)}}}function be(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),l=document.querySelectorAll("[m]");for(let o of l)if(o.offsetTop>800)t.observe(o);else{let h=o.hasAttribute("d"),p=o.getAttribute("m");o.style.color="yellow",o.innerHTML=h?`$$ ${p} $$`:`$ ${p} $`}function e(o,h){for(let p of o)if(p.isIntersecting){let n=p.target,a=n.hasAttribute("d"),i=n.getAttribute("m");n.innerHTML=a?`$$ ${i} $$`:`$ ${i} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends le{constructor(t){super(),ae(this,t,be,$e,Z,{})}}function X(r,t,l){const e=r.slice();return e[6]=t[l],e[8]=l,e}function Y(r,t,l){const e=r.slice();return e[9]=t[l],e}function ee(r){let t,l;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,o){fe(t,e,o),l=!0},p:j,i(e){l||(V(t.$$.fragment,e),l=!0)},o(e){U(t.$$.fragment,e),l=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=b("p"),this.h()},l(l){t=y(l,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(l,e){C(l,t,e)},p:j,d(l){l&&g(t)}}}function ne(r){let t,l=r[8]+1+"",e,o,h,p=r[2],n=[];for(let a=0;a<p.length;a+=1)n[a]=te(Y(r,p,a));return{c(){t=b("div"),e=x(l),o=I();for(let a=0;a<n.length;a+=1)n[a].c();h=Q()},l(a){t=y(a,"DIV",{});var i=E(t);e=T(i,l),i.forEach(g),o=q(a);for(let c=0;c<n.length;c+=1)n[c].l(a);h=Q()},m(a,i){C(a,t,i),_(t,e),C(a,o,i);for(let c=0;c<n.length;c+=1)n[c].m(a,i);C(a,h,i)},p(a,i){if(i&4){p=a[2];let c;for(c=0;c<p.length;c+=1){const $=Y(a,p,c);n[c]?n[c].p($,i):(n[c]=te($),n[c].c(),n[c].m(h.parentNode,h))}for(;c<n.length;c+=1)n[c].d(1);n.length=p.length}},d(a){a&&g(t),a&&g(o),se(n,a),a&&g(h)}}}function Me(r){let t=r[0],l,e,o,h,p,n,a,i,c,$,w,L,P=r[0]*r[2].length+"",N,S,H,z,k,D,B,v=ee(),A=Array(r[0]),f=[];for(let s=0;s<A.length;s+=1)f[s]=ne(X(r,A,s));return{c(){v.c(),l=I(),e=b("article"),o=b("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=I(),n=b("input"),a=I(),i=b("input"),c=I(),$=b("h2"),w=x(r[0]),L=x(" sections; "),N=x(P),S=x(" equations below"),H=I();for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){v.l(s),l=q(s),e=y(s,"ARTICLE",{class:!0});var u=E(e);o=y(u,"H1",{});var m=E(o);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=q(u),n=y(u,"INPUT",{type:!0,min:!0,max:!0}),a=q(u),i=y(u,"INPUT",{type:!0,min:!0,max:!0}),c=q(u),$=y(u,"H2",{});var M=E($);w=T(M,r[0]),L=T(M," sections; "),N=T(M,P),S=T(M," equations below"),M.forEach(g),H=q(u);for(let O=0;O<f.length;O+=1)f[O].l(u);u.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",W),d(i,"type","range"),d(i,"min","1"),d(i,"max",W),d(e,"class",z="prose lg:prose-lg "+r[1])},m(s,u){v.m(s,u),C(s,l,u),C(s,e,u),_(e,o),_(o,h),_(e,p),_(e,n),J(n,r[0]),_(e,a),_(e,i),J(i,r[0]),_(e,c),_(e,$),_($,w),_($,L),_($,N),_($,S),_(e,H);for(let m=0;m<f.length;m+=1)f[m].m(e,null);k=!0,D||(B=[R(n,"input",r[4]),R(i,"change",r[5]),R(i,"input",r[5])],D=!0)},p(s,[u]){if(u&1&&Z(t,t=s[0])?(de(),U(v,1,1,j),ue(),v=ee(),v.c(),V(v,1),v.m(l.parentNode,l)):v.p(s,u),u&1&&G(n.value)!==s[0]&&J(n,s[0]),u&1&&J(i,s[0]),(!k||u&1)&&K(w,s[0]),(!k||u&1)&&P!==(P=s[0]*s[2].length+"")&&K(N,P),u&5){A=Array(s[0]);let m;for(m=0;m<A.length;m+=1){const M=X(s,A,m);f[m]?f[m].p(M,u):(f[m]=ne(M),f[m].c(),f[m].m(e,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=A.length}(!k||u&2&&z!==(z="prose lg:prose-lg "+s[1]))&&d(e,"class",z)},i(s){k||(V(v),k=!0)},o(s){U(v),k=!1},d(s){v.d(s),s&&g(l),s&&g(e),se(f,s),D=!1,he(B)}}}let W=1e3;function ke(r,t,l){let e,o;pe(r,ve,i=>l(3,o=i));let h=W,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=G(this.value),l(0,h)}function a(){h=G(this.value),l(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&l(1,e=o?"prose-invert":"")},[h,e,p,o,n,a]}class Ae extends le{constructor(t){super(),ae(this,t,ke,Me,Z,{})}}export{Ae as default};
