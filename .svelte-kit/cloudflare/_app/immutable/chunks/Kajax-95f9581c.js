import{S as v,i as _,s as k,k as x,q as M,_ as j,l as g,m as b,r as A,h as i,n as o,a0 as q,N as p,A as y,o as C,$ as I}from"./index-07ba2c8b.js";import{k as S}from"./katex-15be85e5.js";const{document:f}=I;function E($){let t,a,c,n,h;return{c(){t=x("link"),a=x("script"),c=M(`MathJax = {
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
  `),n=x("script"),this.h()},l(u){const e=j('[data-svelte="svelte-15ncbow"]',f.head);t=g(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a=g(e,"SCRIPT",{});var l=b(a);c=A(l,`MathJax = {
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
  `),l.forEach(i),n=g(e,"SCRIPT",{type:!0,id:!0,src:!0});var r=b(n);r.forEach(i),e.forEach(i),this.h()},h(){o(t,"rel","stylesheet"),o(t,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),o(t,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),o(t,"crossorigin","anonymous"),o(n,"type","text/javascript"),o(n,"id","MathJax-script"),n.async=!0,q(n.src,h="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js")||o(n,"src",h)},m(u,e){p(f.head,t),p(f.head,a),p(a,c),p(f.head,n)},p:y,i:y,o:y,d(u){i(t),i(a),i(n)}}}function T($){return C(()=>{let t=new IntersectionObserver(c,{root:null,threshold:0,rootMargin:"0px"}),a=document.querySelectorAll("[m]");for(let e of a)if(e.offsetTop>800)t.observe(e);else{let l=e.hasAttribute("d"),r=e.getAttribute("m");e.style.color="orange",e.innerHTML=l?`$$ ${r} $$`:`$ ${r} $`}function c(e,l){for(let r of e)if(r.isIntersecting){let s=r.target,m=s.hasAttribute("d"),d=s.getAttribute("m");s.innerHTML=m?`$$ ${d} $$`:`$ ${d} $`,MathJax.typeset([s]),l.unobserve(s)}}let n=document.querySelectorAll("[k]"),h=new IntersectionObserver(u,{root:null,threshold:0,rootMargin:"500px"});for(let e of n)h.observe(e);function u(e,l){for(let r of e){if(!r.isIntersecting)return;let s=r.target,m=s.getAttribute("k"),d=s.hasAttribute("d");S.render(m,s,{displayMode:d}),l.unobserve(r.target)}}}),[]}class w extends v{constructor(t){super(),_(this,t,T,E,k,{})}}export{w as K};
