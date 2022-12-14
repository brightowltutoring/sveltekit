import{c as $,a as _,v as x,e as t,d as a,j as m}from"../../../chunks/index.js";import{i as b}from"../../../chunks/store.js";const v=$((s,o,u,d)=>`${s.head+=`<!-- HEAD_svelte-1fd20gn_START --><script>MathJax = {
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
  <\/script><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"><\/script><!-- HEAD_svelte-1fd20gn_END -->`,""}`);let r=1e3;const f=$((s,o,u,d)=>{let n,i,l;l=_(b,c=>i=c);let e=r,p=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];return n=i?"prose-invert":"",l(),`${x(v,"MathLazyRenderer").$$render(s,{},{},{})}
<article class="${"prose lg:prose-lg "+t(n,!0)}"><h1>This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)</h1>
<input type="number" min="1"${a("max",r,0)}${a("value",e,0)}>
<input type="range" min="1"${a("max",r,0)}${a("value",e,0)}>
<h2>${t(e)} sections; ${t(e*p.length)} equations below</h2>
${m(Array(e),(c,g)=>`<div>${t(g+1)}</div>
    ${m(p,h=>`<p class="p-1 text-red-400" d${a("m",h,0)}></p>`)}`)}</article>`});export{f as default};
