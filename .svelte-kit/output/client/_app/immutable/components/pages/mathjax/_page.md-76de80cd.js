import{S as ae,i as le,s as W,k as y,q as x,V as re,l as $,m as I,r as E,h as d,n as g,_ as oe,L as f,A as C,o as ie,Z as ce,a as q,c as A,b as P,$ as j,F,t as U,d as ue,f as V,a0 as G,u as B,P as se,C as he,E as pe,v as _e,w as fe,x as me,y as de,e as Q,g as ge}from"../../../chunks/index-e087fcf9.js";import{i as ve}from"../../../chunks/store-ee8b7427.js";import"../../../chunks/index-81096dd8.js";const{document:K}=ce;function be(r){let t,a,e,u;return{c(){t=y("script"),a=x(`MathJax = {
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
  `),e=y("script"),this.h()},l(h){const p=re('[data-svelte="svelte-16m89bi"]',K.head);t=$(p,"SCRIPT",{});var n=I(t);a=E(n,`MathJax = {
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
  `),n.forEach(d),e=$(p,"SCRIPT",{type:!0,id:!0,src:!0});var l=I(e);l.forEach(d),p.forEach(d),this.h()},h(){g(e,"type","text/javascript"),g(e,"id","MathJax-script"),e.async=!0,oe(e.src,u="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js")||g(e,"src",u)},m(h,p){f(K.head,t),f(t,a),f(K.head,e)},p:C,i:C,o:C,d(h){d(t),d(e)}}}function ye(r){return ie(()=>{let t=new IntersectionObserver(e,{root:null,threshold:1,rootMargin:"200px"}),a=document.querySelectorAll("[m]");for(let u of a)t.observe(u);function e(u,h){for(let p of u)if(p.isIntersecting){let n=p.target,l=n.hasAttribute("d"),o=n.getAttribute("m");n.innerHTML=l?`$$ ${o} $$`:`$ ${o} $`,MathJax.typeset([n]),h.unobserve(n)}}}),[]}class $e extends ae{constructor(t){super(),le(this,t,ye,be,W,{})}}function X(r,t,a){const e=r.slice();return e[6]=t[a],e[8]=a,e}function Y(r,t,a){const e=r.slice();return e[9]=t[a],e}function ee(r){let t,a;return t=new $e({}),{c(){_e(t.$$.fragment)},l(e){fe(t.$$.fragment,e)},m(e,u){me(t,e,u),a=!0},p:C,i(e){a||(V(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){de(t,e)}}}function te(r){let t;return{c(){t=y("p"),this.h()},l(a){t=$(a,"P",{class:!0,d:!0,m:!0}),I(t).forEach(d),this.h()},h(){g(t,"class","p-1 text-red-400"),g(t,"d",""),g(t,"m",r[9])},m(a,e){P(a,t,e)},p:C,d(a){a&&d(t)}}}function ne(r){let t,a=r[8]+1+"",e,u,h,p=r[2],n=[];for(let l=0;l<p.length;l+=1)n[l]=te(Y(r,p,l));return{c(){t=y("div"),e=x(a),u=q();for(let l=0;l<n.length;l+=1)n[l].c();h=Q()},l(l){t=$(l,"DIV",{});var o=I(t);e=E(o,a),o.forEach(d),u=A(l);for(let i=0;i<n.length;i+=1)n[i].l(l);h=Q()},m(l,o){P(l,t,o),f(t,e),P(l,u,o);for(let i=0;i<n.length;i+=1)n[i].m(l,o);P(l,h,o)},p(l,o){if(o&4){p=l[2];let i;for(i=0;i<p.length;i+=1){const b=Y(l,p,i);n[i]?n[i].p(b,o):(n[i]=te(b),n[i].c(),n[i].m(h.parentNode,h))}for(;i<n.length;i+=1)n[i].d(1);n.length=p.length}},d(l){l&&d(t),l&&d(u),se(n,l),l&&d(h)}}}function ke(r){let t=r[0],a,e,u,h,p,n,l,o,i,b,z,L,w=r[0]*r[2].length+"",J,N,D,S,M,H,Z,v=ee(),T=Array(r[0]),m=[];for(let s=0;s<T.length;s+=1)m[s]=ne(X(r,T,s));return{c(){v.c(),a=q(),e=y("article"),u=y("h1"),h=x("This page lazy-rendered using Katex"),p=q(),n=y("input"),l=q(),o=y("input"),i=q(),b=y("h2"),z=x(r[0]),L=x(" sections; "),J=x(w),N=x(" equations below"),D=q();for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){v.l(s),a=A(s),e=$(s,"ARTICLE",{class:!0});var c=I(e);u=$(c,"H1",{});var _=I(u);h=E(_,"This page lazy-rendered using Katex"),_.forEach(d),p=A(c),n=$(c,"INPUT",{type:!0,min:!0,max:!0}),l=A(c),o=$(c,"INPUT",{type:!0,min:!0,max:!0}),i=A(c),b=$(c,"H2",{});var k=I(b);z=E(k,r[0]),L=E(k," sections; "),J=E(k,w),N=E(k," equations below"),k.forEach(d),D=A(c);for(let R=0;R<m.length;R+=1)m[R].l(c);c.forEach(d),this.h()},h(){g(n,"type","number"),g(n,"min","1"),g(n,"max",O),g(o,"type","range"),g(o,"min","1"),g(o,"max",O),g(e,"class",S="prose lg:prose-lg "+r[1])},m(s,c){v.m(s,c),P(s,a,c),P(s,e,c),f(e,u),f(u,h),f(e,p),f(e,n),j(n,r[0]),f(e,l),f(e,o),j(o,r[0]),f(e,i),f(e,b),f(b,z),f(b,L),f(b,J),f(b,N),f(e,D);for(let _=0;_<m.length;_+=1)m[_].m(e,null);M=!0,H||(Z=[F(n,"input",r[4]),F(o,"change",r[5]),F(o,"input",r[5])],H=!0)},p(s,[c]){if(c&1&&W(t,t=s[0])?(ge(),U(v,1,1,C),ue(),v=ee(),v.c(),V(v,1),v.m(a.parentNode,a)):v.p(s,c),c&1&&G(n.value)!==s[0]&&j(n,s[0]),c&1&&j(o,s[0]),(!M||c&1)&&B(z,s[0]),(!M||c&1)&&w!==(w=s[0]*s[2].length+"")&&B(J,w),c&5){T=Array(s[0]);let _;for(_=0;_<T.length;_+=1){const k=X(s,T,_);m[_]?m[_].p(k,c):(m[_]=ne(k),m[_].c(),m[_].m(e,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=T.length}(!M||c&2&&S!==(S="prose lg:prose-lg "+s[1]))&&g(e,"class",S)},i(s){M||(V(v),M=!0)},o(s){U(v),M=!1},d(s){v.d(s),s&&d(a),s&&d(e),se(m,s),H=!1,he(Z)}}}let O=1e3;function Me(r,t,a){let e,u;pe(r,ve,o=>a(3,u=o));let h=O,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function n(){h=G(this.value),a(0,h)}function l(){h=G(this.value),a(0,h)}return r.$$.update=()=>{r.$$.dirty&8&&a(1,e=u?"prose-invert":"")},[h,e,p,u,n,l]}class Te extends ae{constructor(t){super(),le(this,t,Me,ke,W,{})}}export{Te as default};
