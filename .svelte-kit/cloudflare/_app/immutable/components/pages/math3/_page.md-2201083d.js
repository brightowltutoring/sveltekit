import{S as k,i as y,s as C,k as u,a as b,e as p,V as I,l as f,h as l,c as x,n as h,F as m,b as _,A as d,T as q,o as E,Z as F,m as g}from"../../../chunks/index-c3c96927.js";import{k as S}from"../../../chunks/katex-15be85e5.js";const{document:v}=F;function V(i,t,s){const r=i.slice();return r[3]=t[s],r[5]=s,r}function j(i){let t,s,r;return{c(){t=u("div"),s=u("div"),r=b(),this.h()},l(a){t=f(a,"DIV",{class:!0});var o=g(t);s=f(o,"DIV",{class:!0}),g(s).forEach(l),r=x(o),o.forEach(l),this.h()},h(){h(s,"class","demo"),h(t,"class","demoContainer bg-red-100 h-20")},m(a,o){_(a,t,o),m(t,s),m(t,r)},p:d,d(a){a&&l(t)}}}function A(i){let t,s,r,a=Array(L),o=[];for(let e=0;e<a.length;e+=1)o[e]=j(V(i,a,e));return{c(){t=u("link"),s=b();for(let e=0;e<o.length;e+=1)o[e].c();r=p(),this.h()},l(e){const c=I('[data-svelte="svelte-lhs2y0"]',v.head);t=f(c,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),c.forEach(l),s=x(e);for(let n=0;n<o.length;n+=1)o[n].l(e);r=p(),this.h()},h(){h(t,"rel","stylesheet"),h(t,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),h(t,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),h(t,"crossorigin","anonymous")},m(e,c){m(v.head,t),_(e,s,c);for(let n=0;n<o.length;n+=1)o[n].m(e,c);_(e,r,c)},p:d,i:d,o:d,d(e){l(t),e&&l(s),q(o,e),e&&l(r)}}}let L=5e3;function N(i){let t,s;return E(()=>{t=document.querySelectorAll(".demoContainer");const r={root:null,threshold:1,rootMargin:"500px"};s=new IntersectionObserver((a,o)=>{a.forEach(e=>{console.log(e),!!e.isIntersecting&&e.isIntersecting&&(S.render("c = \\pm\\sqrt{a^2 + b^4}",e.target.firstChild),console.log(e),o.unobserve(e.target))})},r);for(let a of t)s.observe(a)}),[]}class H extends k{constructor(t){super(),y(this,t,N,A,C,{})}}export{H as default};
