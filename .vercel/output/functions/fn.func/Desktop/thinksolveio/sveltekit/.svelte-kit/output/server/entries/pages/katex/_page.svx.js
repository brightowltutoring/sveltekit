import{c as m,a as b,v as h,e as a,b as t,f as u}from"../../../chunks/index3.js";import"katex";import{i as x}from"../../../chunks/store.js";const v=m((s,$,d,c)=>`





${s.head+='<!-- HEAD_svelte-ztscxf_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X" crossorigin="anonymous"><!-- HEAD_svelte-ztscxf_END -->',""}`);let r=1e3;const z=m((s,$,d,c)=>{let n,i,o;o=b(x,p=>i=p);let e=r,l=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];return n=i?"prose-invert":"",o(),`${h(v,"MathLazyRenderer").$$render(s,{},{},{})}
<article class="${"prose lg:prose-lg "+a(n,!0)}"><h1>This page lazy-rendered using Katex</h1>
<input type="number" min="1"${t("max",r,0)}${t("value",e,0)}>
<input type="range" min="1"${t("max",r,0)}${t("value",e,0)}>
<h2>${a(e)} sections; ${a(e*l.length)} equations below</h2>
${u(Array(e),(p,g)=>`<div>${a(g+1)}</div>
    ${u(l,_=>`<p class="p-1 text-indigo-700" d${t("k",_,0)}></p>`)}`)}</article>`});export{z as default};
