import{S as f,i as p,s as g,k as x,V as y,l as b,h as c,n,F as v,A as l,o as _,Z as k}from"./index-d43d80ed.js";import{k as K}from"./katex-15be85e5.js";const{document:d}=k;function q(i){let e;return{c(){e=x("link"),this.h()},l(s){const t=y('[data-svelte="svelte-ztscxf"]',d.head);e=b(t,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),t.forEach(c),this.h()},h(){n(e,"rel","stylesheet"),n(e,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),n(e,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),n(e,"crossorigin","anonymous")},m(s,t){v(d.head,e)},p:l,i:l,o:l,d(s){c(e)}}}function E(i){return _(()=>{let e=document.querySelectorAll(".myKatexEntries"),s=new IntersectionObserver(t,{root:null,threshold:0,rootMargin:"100px"});for(let a of e)s.observe(a);function t(a,h){for(let o of a){if(!o.isIntersecting)return;let r=o.target,u=r.dataset.math,m=r.dataset.display;console.log(r),K.render(u,r,{displayMode:m}),h.unobserve(o.target)}}}),[]}class S extends f{constructor(e){super(),p(this,e,E,q,g,{})}}export{S as K};
