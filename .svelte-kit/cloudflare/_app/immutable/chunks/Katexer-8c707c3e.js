import{S as m,i as g,s as p,k as x,V as k,l as b,h as c,n as s,L as y,A as l,o as _,Z as v}from"./index-e087fcf9.js";import{k as K}from"./katex-15be85e5.js";const{document:u}=v;function q(i){let e;return{c(){e=x("link"),this.h()},l(r){const t=k('[data-svelte="svelte-ztscxf"]',u.head);e=b(t,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),t.forEach(c),this.h()},h(){s(e,"rel","stylesheet"),s(e,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),s(e,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),s(e,"crossorigin","anonymous")},m(r,t){y(u.head,e)},p:l,i:l,o:l,d(r){c(e)}}}function A(i){return _(()=>{let e=document.querySelectorAll("[k]"),r=new IntersectionObserver(t,{root:null,threshold:0,rootMargin:"500px"});for(let n of e)r.observe(n);function t(n,d){for(let o of n){if(!o.isIntersecting)return;let a=o.target,h=a.getAttribute("k"),f=a.hasAttribute("d");K.render(h,a,{displayMode:f}),d.unobserve(o.target)}}}),[]}class j extends m{constructor(e){super(),g(this,e,A,q,p,{})}}export{j as K};
