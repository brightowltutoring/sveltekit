import{S as ae,i as le,s as W,k as b,q as x,$ as re,l as y,m as E,r as T,h as g,n as d,a1 as oe,O as f,B as q,o as ie,a0 as ce,a as A,c as j,b as P,P as N,H as R,t as B,d as ue,f as F,a2 as G,u as K,X as se,D as he,T as pe,w as me,x as fe,y as _e,z as ge,e as Q,g as de}from"../../../chunks/index-30e2a2cf.js";import{a as ve}from"../../../chunks/store-d1c055f5.js";const{document:U}=ce;function $e(r){let t,a,e,o;return{c(){t=b("script"),a=x(`MathJax = {
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
  `),e=b("script"),this.h()},l(h){const p=re("svelte-1fd20gn",U.head);t=y(p,"SCRIPT",{});var n=E(t);a=T(n,`MathJax = {
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
  `),n.forEach(g),e=y(p,"SCRIPT",{id:!0,src:!0});var l=E(e);l.forEach(g),p.forEach(g),this.h()},h(){d(e,"id","MathJax-script"),e.async=!0,oe(e.src,o="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||d(e,"src",o)},m(h,p){f(U.head,t),f(t,a),f(U.head,e)},p:q,i:q,o:q,d(h){g(t),g(e)}}}function be(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"0px"}),a=document.querySelectorAll("[m]");for(let o of a)if(o.offsetTop>800)t.observe(o);else{let h=o.hasAttribute("d"),p=o.getAttribute("m");o.style.color="yellow",o.innerHTML=h?`$$ ${p} $$`:`$ ${p} $`}function e(o,h){for(let p of o)if(p.isIntersecting){let n=p.target,l=n.hasAttribute("d"),i=n.getAttribute("m");n.innerHTML=l?`$$ ${i} $$`:`$ ${i} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class ye extends ae{constructor(t){super(),le(this,t,be,$e,W,{})}}function Y(r,t,a){const e=r.slice();return e[6]=t[a],e[8]=a,e}function Z(r,t,a){const e=r.slice();return e[9]=t[a],e}function ee(r){let t,a;return t=new ye({}),{c(){me(t.$$.fragment)},l(e){fe(t.$$.fragment,e)},m(e,o){_e(t,e,o),a=!0},p:q,i(e){a||(F(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){ge(t,e)}}}function te(r){let t;return{c(){t=b("p"),this.h()},l(a){t=y(a,"P",{class:!0,d:!0,m:!0}),E(t).forEach(g),this.h()},h(){d(t,"class","p-1 text-red-400"),d(t,"d",""),d(t,"m",r[9])},m(a,e){P(a,t,e)},p:q,d(a){a&&g(t)}}}function ne(r){let t,a=r[8]+1+"",e,o,h,p=r[2],n=[];for(let l=0;l<p.length;l+=1)n[l]=te(Z(r,p,l));return{c(){t=b("div"),e=x(a),o=A();for(let l=0;l<n.length;l+=1)n[l].c();h=Q()},l(l){t=y(l,"DIV",{});var i=E(t);e=T(i,a),i.forEach(g),o=j(l);for(let c=0;c<n.length;c+=1)n[c].l(l);h=Q()},m(l,i){P(l,t,i),f(t,e),P(l,o,i);for(let c=0;c<n.length;c+=1)n[c].m(l,i);P(l,h,i)},p(l,i){if(i&4){p=l[2];let c;for(c=0;c<p.length;c+=1){const $=Z(l,p,c);n[c]?n[c].p($,i):(n[c]=te($),n[c].c(),n[c].m(h.parentNode,h))}for(;c<n.length;c+=1)n[c].d(1);n.length=p.length}},d(l){l&&g(t),l&&g(o),se(n,l),l&&g(h)}}}function Me(r){let t=r[0],a,e,o,h,p,n,l,i,c,$,z,H,w=r[0]*r[2].length+"",C,S,D,J,k,L,X,v=ee(),I=Array(r[0]),_=[];for(let s=0;s<I.length;s+=1)_[s]=ne(Y(r,I,s));return{c(){v.c(),a=A(),e=b("article"),o=b("h1"),h=x("This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),p=A(),n=b("input"),l=A(),i=b("input"),c=A(),$=b("h2"),z=x(r[0]),H=x(" sections; "),C=x(w),S=x(" equations below"),D=A();for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){v.l(s),a=j(s),e=y(s,"ARTICLE",{class:!0});var u=E(e);o=y(u,"H1",{});var m=E(o);h=T(m,"This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)"),m.forEach(g),p=j(u),n=y(u,"INPUT",{type:!0,min:!0,max:!0}),l=j(u),i=y(u,"INPUT",{type:!0,min:!0,max:!0}),c=j(u),$=y(u,"H2",{});var M=E($);z=T(M,r[0]),H=T(M," sections; "),C=T(M,w),S=T(M," equations below"),M.forEach(g),D=j(u);for(let O=0;O<_.length;O+=1)_[O].l(u);u.forEach(g),this.h()},h(){d(n,"type","number"),d(n,"min","1"),d(n,"max",V),d(i,"type","range"),d(i,"min","1"),d(i,"max",V),d(e,"class",J="prose lg:prose-lg "+r[1])},m(s,u){v.m(s,u),P(s,a,u),P(s,e,u),f(e,o),f(o,h),f(e,p),f(e,n),N(n,r[0]),f(e,l),f(e,i),N(i,r[0]),f(e,c),f(e,$),f($,z),f($,H),f($,C),f($,S),f(e,D);for(let m=0;m<_.length;m+=1)_[m].m(e,null);k=!0,L||(X=[R(n,"input",r[4]),R(i,"change",r[5]),R(i,"input",r[5])],L=!0)},p(s,[u]){if(u&1&&W(t,t=s[0])?(de(),B(v,1,1,q),ue(),v=ee(),v.c(),F(v,1),v.m(a.parentNode,a)):v.p(s,u),u&1&&G(n.value)!==s[0]&&N(n,s[0]),u&1&&N(i,s[0]),(!k||u&1)&&K(z,s[0]),(!k||u&1)&&w!==(w=s[0]*s[2].length+"")&&K(C,w),u&5){I=Array(s[0]);let m;for(m=0;m<I.length;m+=1){const M=Y(s,I,m);_[m]?_[m].p(M,u):(_[m]=ne(M),_[m].c(),_[m].m(e,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=I.length}(!k||u&2&&J!==(J="prose lg:prose-lg "+s[1]))&&d(e,"class",J)},i(s){k||(F(v),k=!0)},o(s){B(v),k=!1},d(s){v.d(s),s&&g(a),s&&g(e),se(_,s),L=!1,he(X)}}}let V=1e3;function ke(r,t,a){let e,o;pe(r,ve,i=>a(3,o=i));let h=V,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=G(this.value),a(0,h)}function l(){h=G(this.value),a(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&a(1,e=o?"prose-invert":"")},[h,e,p,o,n,l]}class Ee extends ae{constructor(t){super(),le(this,t,ke,Me,W,{})}}export{Ee as default};
