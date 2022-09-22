import{S as ws,i as xs,s as os,k as g,a as k,a1 as ke,e as vs,V as fe,l as f,h as c,c as M,a2 as Me,n as d,L as r,b as z,A as S,m as v,f as R,g as _e,d as ve,t as X,P as ys,E as ye,v as Ws,w as Xs,x as Ys,G as Ee,H as ze,y as Qs,q as P,r as L,_ as Ie,o as $e,Z as Pe,$ as j,F as V,u as Js,a0 as W,C as Le}from"../../../chunks/index-e087fcf9.js";import{k as we}from"../../../chunks/katex-15be85e5.js";import{i as xe}from"../../../chunks/store-ee8b7427.js";import{q as Ae,s as Te}from"../../../chunks/index-adbb8214.js";import"../../../chunks/index-81096dd8.js";function qe(l){let e,a,s,t;return{c(){e=g("link"),a=k(),s=new ke(!1),t=vs(),this.h()},l(o){const i=fe('[data-svelte="svelte-bnfb8z"]',document.head);e=f(i,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),i.forEach(c),a=M(o),s=Me(o,!1),t=vs(),this.h()},h(){d(e,"rel","stylesheet"),d(e,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),d(e,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),d(e,"crossorigin","anonymous"),s.a=t},m(o,i){r(document.head,e),z(o,a,i),s.m(l[0],o,i),z(o,t,i)},p(o,[i]){i&1&&s.p(o[0])},i:S,o:S,d(o){c(e),o&&c(a),o&&c(t),o&&s.d()}}}function je(l,e,a){let s,{d:t=!1}=e,{m:o}=e;const i={displayMode:t,throwOnError:!1};return l.$$set=n=>{"d"in n&&a(1,t=n.d),"m"in n&&a(2,o=n.m)},l.$$.update=()=>{l.$$.dirty&4&&a(0,s=we.renderToString(o,i))},[s,t,o]}class He extends ws{constructor(e){super(),xs(this,e,je,qe,os,{d:1,m:2})}}function re(l,e,a){const s=l.slice();return s[2]=e[a],s[4]=a,s}function pe(l){let e,a,s,t,o,i;return a=new He({props:{d:!0,m:l[2]}}),{c(){e=g("p"),Ws(a.$$.fragment),s=k(),this.h()},l(n){e=f(n,"P",{class:!0});var p=v(e);Xs(a.$$.fragment,p),s=M(p),p.forEach(c),this.h()},h(){d(e,"class",t=l[0]?"text-blue-100":"text-red-500")},m(n,p){z(n,e,p),Ys(a,e,null),r(e,s),i=!0},p(n,p){l=n,(!i||p&1&&t!==(t=l[0]?"text-blue-100":"text-red-500"))&&d(e,"class",t)},i(n){i||(R(a.$$.fragment,n),o||Ee(()=>{o=ze(e,Te,{delay:350*Math.log(l[4]+1),easing:Ae,duration:1e3}),o.start()}),i=!0)},o(n){X(a.$$.fragment,n),i=!1},d(n){n&&c(e),Qs(a)}}}function Ne(l){let e,a,s=l[1],t=[];for(let i=0;i<s.length;i+=1)t[i]=pe(re(l,s,i));const o=i=>X(t[i],1,1,()=>{t[i]=null});return{c(){e=g("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=f(i,"DIV",{class:!0});var n=v(e);for(let p=0;p<t.length;p+=1)t[p].l(n);n.forEach(c),this.h()},h(){d(e,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full")},m(i,n){z(i,e,n);for(let p=0;p<t.length;p+=1)t[p].m(e,null);a=!0},p(i,[n]){if(n&3){s=i[1];let p;for(p=0;p<s.length;p+=1){const y=re(i,s,p);t[p]?(t[p].p(y,n),R(t[p],1)):(t[p]=pe(y),t[p].c(),R(t[p],1),t[p].m(e,null))}for(_e(),p=s.length;p<t.length;p+=1)o(p);ve()}},i(i){if(!a){for(let n=0;n<s.length;n+=1)R(t[n]);a=!0}},o(i){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)X(t[n]);a=!1},d(i){i&&c(e),ys(t,i)}}}function De(l,e,a){let s;return ye(l,xe,o=>a(0,s=o)),[s,["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c","e^{i x}=\\cos x+i\\sin x"]]}class Se extends ws{constructor(e){super(),xs(this,e,De,Ne,os,{})}}const{document:_s}=Pe;function Ce(l){let e,a,s,t,o;return{c(){e=g("link"),a=g("script"),s=P(`MathJax = {
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
  `),t=g("script"),this.h()},l(i){const n=fe('[data-svelte="svelte-u6mfw3"]',_s.head);e=f(n,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a=f(n,"SCRIPT",{});var p=v(a);s=L(p,`MathJax = {
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
  `),p.forEach(c),t=f(n,"SCRIPT",{type:!0,id:!0,src:!0});var y=v(t);y.forEach(c),n.forEach(c),this.h()},h(){d(e,"rel","stylesheet"),d(e,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),d(e,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),d(e,"crossorigin","anonymous"),d(t,"type","text/javascript"),d(t,"id","MathJax-script"),t.async=!0,Ie(t.src,o="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js")||d(t,"src",o)},m(i,n){r(_s.head,e),r(_s.head,a),r(a,s),r(_s.head,t)},p:S,i:S,o:S,d(i){c(e),c(a),c(t)}}}function Ue(l){return $e(()=>{let e=new IntersectionObserver(s,{root:null,threshold:0,rootMargin:"0px"}),a=document.querySelectorAll("[m]");for(let n of a)e.observe(n);function s(n,p){for(let y of n)if(y.isIntersecting){let w=y.target,x=w.hasAttribute("d"),h=w.getAttribute("m");w.innerHTML=x?`$$ ${h} $$`:`$ ${h} $`,MathJax.typeset([w]),p.unobserve(w)}}let t=document.querySelectorAll("[k]"),o=new IntersectionObserver(i,{root:null,threshold:0,rootMargin:"500px"});for(let n of t)o.observe(n);function i(n,p){for(let y of n){if(!y.isIntersecting)return;let w=y.target,x=w.getAttribute("k"),h=w.hasAttribute("d");we.render(x,w,{displayMode:h}),p.unobserve(y.target)}}}),[]}class Ke extends ws{constructor(e){super(),xs(this,e,Ue,Ce,os,{})}}function oe(l,e,a){const s=l.slice();return s[11]=e[a],s[13]=a,s}function me(l,e,a){const s=l.slice();return s[14]=e[a],s[16]=a,s}function ce(l,e,a){const s=l.slice();return s[11]=e[a],s[13]=a,s}function he(l){let e,a;return e=new Ke({}),{c(){Ws(e.$$.fragment)},l(s){Xs(e.$$.fragment,s)},m(s,t){Ys(e,s,t),a=!0},p:S,i(s){a||(R(e.$$.fragment,s),a=!0)},o(s){X(e.$$.fragment,s),a=!1},d(s){Qs(e,s)}}}function ue(l){let e,a=l[13]+1+"",s,t,o,i='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>';return{c(){e=g("p"),s=P(a),t=k(),o=g("div"),this.h()},l(n){e=f(n,"P",{});var p=v(e);s=L(p,a),p.forEach(c),t=M(n),o=f(n,"DIV",{class:!0});var y=v(o);y.forEach(c),this.h()},h(){d(o,"class","math math-display")},m(n,p){z(n,e,p),r(e,s),z(n,t,p),z(n,o,p),o.innerHTML=i},p:S,d(n){n&&c(e),n&&c(t),n&&c(o)}}}function de(l){let e,a,s,t,o;return{c(){e=g("div"),a=g("p"),s=k(),t=g("p"),o=k(),this.h()},l(i){e=f(i,"DIV",{});var n=v(e);a=f(n,"P",{class:!0,d:!0,k:!0}),v(a).forEach(c),s=M(n),t=f(n,"P",{class:!0,d:!0,m:!0}),v(t).forEach(c),o=M(n),n.forEach(c),this.h()},h(){d(a,"class","p-1 text-indigo-700"),d(a,"d",""),d(a,"k",l[14]),d(t,"class","p-1 text-green-700"),d(t,"d",""),d(t,"m",l[14])},m(i,n){z(i,e,n),r(e,a),r(e,s),r(e,t),r(e,o)},p:S,d(i){i&&c(e)}}}function ge(l){let e,a=l[13]+1+"",s,t,o,i,n,p,y,w=l[4],x=[];for(let h=0;h<w.length;h+=1)x[h]=de(me(l,w,h));return{c(){e=g("p"),s=P(a),t=k(),o=g("p"),i=k(),n=g("p"),p=k();for(let h=0;h<x.length;h+=1)x[h].c();y=vs(),this.h()},l(h){e=f(h,"P",{});var E=v(e);s=L(E,a),E.forEach(c),t=M(h),o=f(h,"P",{class:!0,d:!0,m:!0}),v(o).forEach(c),i=M(h),n=f(h,"P",{class:!0,d:!0,k:!0}),v(n).forEach(c),p=M(h);for(let b=0;b<x.length;b+=1)x[b].l(h);y=vs(),this.h()},h(){d(o,"class","p-1 text-indigo-700"),d(o,"d",""),d(o,"m","\\cancelto{0}{\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}}"),d(n,"class","p-1 text-green-700"),d(n,"d",""),d(n,"k","\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}")},m(h,E){z(h,e,E),r(e,s),z(h,t,E),z(h,o,E),z(h,i,E),z(h,n,E),z(h,p,E);for(let b=0;b<x.length;b+=1)x[b].m(h,E);z(h,y,E)},p(h,E){if(E&16){w=h[4];let b;for(b=0;b<w.length;b+=1){const C=me(h,w,b);x[b]?x[b].p(C,E):(x[b]=de(C),x[b].c(),x[b].m(y.parentNode,y))}for(;b<x.length;b+=1)x[b].d(1);x.length=w.length}},d(h){h&&c(e),h&&c(t),h&&c(o),h&&c(i),h&&c(n),h&&c(p),ys(x,h),h&&c(y)}}}function Oe(l){let e=l[3],a,s,t,o,i,n=`<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><munder><mrow><msup><mi>u</mi><mo mathvariant="normal" lspace="0em" rspace="0em">\u2032</mo></msup><mo>\u2212</mo><mi>P</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>u</mi><mn>2</mn></msup><mo>\u2212</mo><mi>Q</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>u</mi><mo>\u2212</mo><mi>R</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mo stretchy="true">\u23DF</mo></munder><mrow><mtext>=0,\xA0since\xA0</mtext><mstyle scriptlevel="0" displaystyle="false"><mi>u</mi></mstyle><mtext>\xA0is\xA0a\xA0particular\xA0solution.</mtext></mrow></munder></mrow><annotation encoding="application/x-tex">\\underbrace{u&#x27;-P(x)u^2-Q(x)u-R(x)}_{\\text{=0, since~$u$ is a particular solution.}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.5843em;vertical-align:-1.7202em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-1.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">=0,\xA0since</span><span class="mord mtight nobreak">\xA0</span><span class="mord mathnormal sizing reset-size3 size6">u</span><span class="mord mtight">\xA0is\xA0a\xA0particular\xA0solution.</span></span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span class="svg-align" style="top:-2.102em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.548em;min-width:1.6em;"><span class="brace-left" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMinYMin slice'><path d='M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z'/></svg></span><span class="brace-center" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMidYMin slice'><path d='M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z'/></svg></span><span class="brace-right" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMaxYMin slice'><path d='M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z'/></svg></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2032</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.898em;"><span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.7202em;"><span></span></span></span></span></span></span></span></span></span>`,p,y,w,x,h,E='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>',b,C=l[0]**2+"",ms,bs,Y,H,ks,es,Ms,Es,F,zs,ts,Is,$s,Ps,as,Q,Ls,J,ns,As,Ts,ls,qs,js,U,N,Hs,D,Ns,B,cs,Ds,Ss,hs,is,rs,Cs,Us,T,Ks,q,Os,us,K,Vs,Bs,A=he();t=new Se({});let Z=Array(l[2]),I=[];for(let m=0;m<Z.length;m+=1)I[m]=ue(ce(l,Z,m));let ss=Array(l[3]),$=[];for(let m=0;m<ss.length;m+=1)$[m]=ge(oe(l,ss,m));return{c(){A.c(),a=k(),s=g("article"),Ws(t.$$.fragment),o=k(),i=g("div"),p=k(),y=g("span"),w=g("p"),x=P(l[0]),h=g("span"),b=P("="),ms=P(C),bs=k(),Y=g("div"),H=g("input"),ks=k(),es=g("h1"),Ms=P("The content of this page is written in a markdown file with svelte components (tailwind too), possible due to MDsveX!"),Es=k(),F=g("h2"),zs=P("The "),ts=g("strong"),Is=P("math"),$s=P(" on this page is written in markdown using Katex (black), Katex (green), and Mathjax (blue), the latter two of which are lazy rendered with the Intersection Observer API!"),Ps=k(),as=g("ul"),Q=g("li"),Ls=P("the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX"),J=g("ul"),ns=g("li"),As=P("the newest version of mathjax is about as performant as katex; mathjax has a wider adoption of latex functionality"),Ts=k(),ls=g("li"),qs=P("the math markdown uses katex as a plugin and is not lazy-rendered \u2026 it is however easier to write"),js=k(),U=g("div"),N=g("input"),Hs=k(),D=g("input"),Ns=k(),B=g("h1"),cs=P(l[2]),Ds=P(" lines of markdown immediately below"),Ss=k();for(let m=0;m<I.length;m+=1)I[m].c();hs=k(),is=g("ul"),rs=g("li"),Cs=P("pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)"),Us=k(),T=g("input"),Ks=k(),q=g("input"),Os=k();for(let m=0;m<$.length;m+=1)$[m].c();this.h()},l(m){A.l(m),a=M(m),s=f(m,"ARTICLE",{class:!0});var u=v(s);Xs(t.$$.fragment,u),o=M(u),i=f(u,"DIV",{class:!0});var _=v(i);_.forEach(c),p=M(u),y=f(u,"SPAN",{class:!0});var O=v(y);w=f(O,"P",{});var ps=v(w);x=L(ps,l[0]),h=f(ps,"SPAN",{class:!0});var be=v(h);be.forEach(c),b=L(ps,"="),ms=L(ps,C),ps.forEach(c),O.forEach(c),bs=M(u),Y=f(u,"DIV",{class:!0});var Zs=v(Y);H=f(Zs,"INPUT",{type:!0,min:!0}),Zs.forEach(c),ks=M(u),es=f(u,"H1",{});var se=v(es);Ms=L(se,"The content of this page is written in a markdown file with svelte components (tailwind too), possible due to MDsveX!"),se.forEach(c),Es=M(u),F=f(u,"H2",{});var ds=v(F);zs=L(ds,"The "),ts=f(ds,"STRONG",{});var ee=v(ts);Is=L(ee,"math"),ee.forEach(c),$s=L(ds," on this page is written in markdown using Katex (black), Katex (green), and Mathjax (blue), the latter two of which are lazy rendered with the Intersection Observer API!"),ds.forEach(c),Ps=M(u),as=f(u,"UL",{});var te=v(as);Q=f(te,"LI",{});var Rs=v(Q);Ls=L(Rs,"the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX"),J=f(Rs,"UL",{});var gs=v(J);ns=f(gs,"LI",{});var ae=v(ns);As=L(ae,"the newest version of mathjax is about as performant as katex; mathjax has a wider adoption of latex functionality"),ae.forEach(c),Ts=M(gs),ls=f(gs,"LI",{});var ne=v(ls);qs=L(ne,"the math markdown uses katex as a plugin and is not lazy-rendered \u2026 it is however easier to write"),ne.forEach(c),gs.forEach(c),Rs.forEach(c),te.forEach(c),js=M(u),U=f(u,"DIV",{class:!0});var fs=v(U);N=f(fs,"INPUT",{type:!0,min:!0}),Hs=M(fs),D=f(fs,"INPUT",{type:!0,min:!0}),fs.forEach(c),Ns=M(u),B=f(u,"H1",{});var Fs=v(B);cs=L(Fs,l[2]),Ds=L(Fs," lines of markdown immediately below"),Fs.forEach(c),Ss=M(u);for(let G=0;G<I.length;G+=1)I[G].l(u);hs=M(u),is=f(u,"UL",{});var le=v(is);rs=f(le,"LI",{});var ie=v(rs);Cs=L(ie,"pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)"),ie.forEach(c),le.forEach(c),Us=M(u),T=f(u,"INPUT",{type:!0,min:!0,max:!0}),Ks=M(u),q=f(u,"INPUT",{type:!0,min:!0,max:!0}),Os=M(u);for(let G=0;G<$.length;G+=1)$[G].l(u);u.forEach(c),this.h()},h(){d(i,"class","math math-display"),d(h,"class","math math-inline"),d(y,"class","text-7xl flex justify-center"),d(H,"type","range"),d(H,"min","1"),d(Y,"class","flex justify-center"),d(N,"type","number"),d(N,"min","1"),d(D,"type","range"),d(D,"min","1"),d(U,"class","p-4"),d(T,"type","number"),d(T,"min","1"),d(T,"max",Gs),d(q,"type","range"),d(q,"min","1"),d(q,"max",Gs),d(s,"class",us="prose lg:prose-lg "+l[1])},m(m,u){A.m(m,u),z(m,a,u),z(m,s,u),Ys(t,s,null),r(s,o),r(s,i),i.innerHTML=n,r(s,p),r(s,y),r(y,w),r(w,x),r(w,h),h.innerHTML=E,r(w,b),r(w,ms),r(s,bs),r(s,Y),r(Y,H),j(H,l[0]),r(s,ks),r(s,es),r(es,Ms),r(s,Es),r(s,F),r(F,zs),r(F,ts),r(ts,Is),r(F,$s),r(s,Ps),r(s,as),r(as,Q),r(Q,Ls),r(Q,J),r(J,ns),r(ns,As),r(J,Ts),r(J,ls),r(ls,qs),r(s,js),r(s,U),r(U,N),j(N,l[2]),r(U,Hs),r(U,D),j(D,l[2]),r(s,Ns),r(s,B),r(B,cs),r(B,Ds),r(s,Ss);for(let _=0;_<I.length;_+=1)I[_].m(s,null);r(s,hs),r(s,is),r(is,rs),r(rs,Cs),r(s,Us),r(s,T),j(T,l[3]),r(s,Ks),r(s,q),j(q,l[3]),r(s,Os);for(let _=0;_<$.length;_+=1)$[_].m(s,null);K=!0,Vs||(Bs=[V(H,"change",l[6]),V(H,"input",l[6]),V(N,"input",l[7]),V(D,"change",l[8]),V(D,"input",l[8]),V(T,"input",l[9]),V(q,"change",l[10]),V(q,"input",l[10])],Vs=!0)},p(m,[u]){if(u&8&&os(e,e=m[3])?(_e(),X(A,1,1,S),ve(),A=he(),A.c(),R(A,1),A.m(a.parentNode,a)):A.p(m,u),(!K||u&1)&&Js(x,m[0]),(!K||u&1)&&C!==(C=m[0]**2+"")&&Js(ms,C),u&1&&j(H,m[0]),u&4&&W(N.value)!==m[2]&&j(N,m[2]),u&4&&j(D,m[2]),(!K||u&4)&&Js(cs,m[2]),u&4){Z=Array(m[2]);let _;for(_=0;_<Z.length;_+=1){const O=ce(m,Z,_);I[_]?I[_].p(O,u):(I[_]=ue(O),I[_].c(),I[_].m(s,hs))}for(;_<I.length;_+=1)I[_].d(1);I.length=Z.length}if(u&8&&W(T.value)!==m[3]&&j(T,m[3]),u&8&&j(q,m[3]),u&24){ss=Array(m[3]);let _;for(_=0;_<ss.length;_+=1){const O=oe(m,ss,_);$[_]?$[_].p(O,u):($[_]=ge(O),$[_].c(),$[_].m(s,null))}for(;_<$.length;_+=1)$[_].d(1);$.length=ss.length}(!K||u&2&&us!==(us="prose lg:prose-lg "+m[1]))&&d(s,"class",us)},i(m){K||(R(A),R(t.$$.fragment,m),K=!0)},o(m){X(A),X(t.$$.fragment,m),K=!1},d(m){A.d(m),m&&c(a),m&&c(s),Qs(t),ys(I,m),ys($,m),Vs=!1,Le(Bs)}}}let Gs=100,Ve=1;function Re(l,e,a){let s,t,o,i;ye(l,xe,b=>a(5,i=b));let n=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"],p=2;function y(){p=W(this.value),a(0,p)}function w(){t=W(this.value),a(2,t)}function x(){t=W(this.value),a(2,t)}function h(){s=W(this.value),a(3,s)}function E(){s=W(this.value),a(3,s)}return l.$$.update=()=>{l.$$.dirty&32&&a(1,o=i?"prose-invert":"")},a(3,s=Gs),a(2,t=Ve),[p,o,t,s,n,i,y,w,x,h,E]}class Ye extends ws{constructor(e){super(),xs(this,e,Re,Oe,os,{})}}export{Ye as default};