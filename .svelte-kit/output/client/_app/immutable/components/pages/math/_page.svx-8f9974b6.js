import{S as Gs,i as Qs,s as ys,k as d,a as b,a5 as Me,e as _s,a0 as Ee,l as _,h,c as x,a6 as ze,n as g,P as r,b as E,B as ss,m as v,f as V,g as ve,d as ye,t as Q,Y as vs,U as we,w as Ws,x as Xs,y as Ys,R as Pe,T as Ie,z as Js,q as I,r as T,Q as H,H as R,u as Cs,a4 as G,D as Te}from"../../../chunks/index-2bdb53b3.js";import{k as Le}from"../../../chunks/katex-d33715d1.js";import{a as be}from"../../../chunks/store-fa0b0b0c.js";import{q as qe,s as De}from"../../../chunks/index-2fe84d9c.js";import{K as Ae}from"../../../chunks/Kajax-5fca555e.js";function He(l){let e,a,s,t;return{c(){e=d("link"),a=b(),s=new Me(!1),t=_s(),this.h()},l(m){const i=Ee("svelte-bnfb8z",document.head);e=_(i,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),i.forEach(h),a=x(m),s=ze(m,!1),t=_s(),this.h()},h(){g(e,"rel","stylesheet"),g(e,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),g(e,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),g(e,"crossorigin","anonymous"),s.a=t},m(m,i){r(document.head,e),E(m,a,i),s.m(l[0],m,i),E(m,t,i)},p(m,[i]){i&1&&s.p(m[0])},i:ss,o:ss,d(m){h(e),m&&h(a),m&&h(t),m&&s.d()}}}function Ne(l,e,a){let s,{d:t=!1}=e,{m}=e;const i={displayMode:t,throwOnError:!1};return l.$$set=n=>{"d"in n&&a(1,t=n.d),"m"in n&&a(2,m=n.m)},l.$$.update=()=>{l.$$.dirty&4&&a(0,s=Le.renderToString(m,i))},[s,t,m]}class je extends Gs{constructor(e){super(),Qs(this,e,Ne,He,ys,{d:1,m:2})}}function me(l,e,a){const s=l.slice();return s[2]=e[a],s[4]=a,s}function oe(l){let e,a,s,t,m,i;return a=new je({props:{d:!0,m:l[2]}}),{c(){e=d("p"),Ws(a.$$.fragment),s=b(),this.h()},l(n){e=_(n,"P",{class:!0});var o=v(e);Xs(a.$$.fragment,o),s=x(o),o.forEach(h),this.h()},h(){g(e,"class",t=l[0]?"text-blue-100":"text-indigo-900")},m(n,o){E(n,e,o),Ys(a,e,null),r(e,s),i=!0},p(n,o){l=n,(!i||o&1&&t!==(t=l[0]?"text-blue-100":"text-indigo-900"))&&g(e,"class",t)},i(n){i||(V(a.$$.fragment,n),m||Pe(()=>{m=Ie(e,De,{delay:350*Math.log(l[4]+1),easing:qe,duration:1e3}),m.start()}),i=!0)},o(n){Q(a.$$.fragment,n),i=!1},d(n){n&&h(e),Js(a)}}}function $e(l){let e,a,s=l[1],t=[];for(let i=0;i<s.length;i+=1)t[i]=oe(me(l,s,i));const m=i=>Q(t[i],1,1,()=>{t[i]=null});return{c(){e=d("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=_(i,"DIV",{class:!0});var n=v(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(h),this.h()},h(){g(e,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full")},m(i,n){E(i,e,n);for(let o=0;o<t.length;o+=1)t[o].m(e,null);a=!0},p(i,[n]){if(n&3){s=i[1];let o;for(o=0;o<s.length;o+=1){const M=me(i,s,o);t[o]?(t[o].p(M,n),V(t[o],1)):(t[o]=oe(M),t[o].c(),V(t[o],1),t[o].m(e,null))}for(ve(),o=s.length;o<t.length;o+=1)m(o);ye()}},i(i){if(!a){for(let n=0;n<s.length;n+=1)V(t[n]);a=!0}},o(i){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)Q(t[n]);a=!1},d(i){i&&h(e),vs(t,i)}}}function Ue(l,e,a){let s;return we(l,be,m=>a(0,s=m)),[s,["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c","e^{i x}=\\cos x+i\\sin x"]]}class Se extends Gs{constructor(e){super(),Qs(this,e,Ue,$e,ys,{})}}function ce(l,e,a){const s=l.slice();return s[11]=e[a],s[13]=a,s}function he(l,e,a){const s=l.slice();return s[14]=e[a],s[16]=a,s}function ue(l,e,a){const s=l.slice();return s[11]=e[a],s[13]=a,s}function ge(l){let e,a;return e=new Ae({}),{c(){Ws(e.$$.fragment)},l(s){Xs(e.$$.fragment,s)},m(s,t){Ys(e,s,t),a=!0},p:ss,i(s){a||(V(e.$$.fragment,s),a=!0)},o(s){Q(e.$$.fragment,s),a=!1},d(s){Js(e,s)}}}function fe(l){let e,a=l[13]+1+"",s,t,m,i='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>';return{c(){e=d("p"),s=I(a),t=b(),m=d("div"),this.h()},l(n){e=_(n,"P",{});var o=v(e);s=T(o,a),o.forEach(h),t=x(n),m=_(n,"DIV",{class:!0});var M=v(m);M.forEach(h),this.h()},h(){g(m,"class","math math-display")},m(n,o){E(n,e,o),r(e,s),E(n,t,o),E(n,m,o),m.innerHTML=i},p:ss,d(n){n&&h(e),n&&h(t),n&&h(m)}}}function de(l){let e,a,s,t,m;return{c(){e=d("div"),a=d("p"),s=b(),t=d("p"),m=b(),this.h()},l(i){e=_(i,"DIV",{});var n=v(e);a=_(n,"P",{class:!0,d:!0,k:!0}),v(a).forEach(h),s=x(n),t=_(n,"P",{class:!0,d:!0,m:!0}),v(t).forEach(h),m=x(n),n.forEach(h),this.h()},h(){g(a,"class","p-1 text-indigo-700"),g(a,"d",""),g(a,"k",l[14]),g(t,"class","p-1 text-green-700"),g(t,"d",""),g(t,"m",l[14])},m(i,n){E(i,e,n),r(e,a),r(e,s),r(e,t),r(e,m)},p:ss,d(i){i&&h(e)}}}function _e(l){let e,a=l[13]+1+"",s,t,m,i,n,o,M,q=l[4],k=[];for(let u=0;u<q.length;u+=1)k[u]=de(he(l,q,u));return{c(){e=d("p"),s=I(a),t=b(),m=d("p"),i=b(),n=d("p"),o=b();for(let u=0;u<k.length;u+=1)k[u].c();M=_s(),this.h()},l(u){e=_(u,"P",{});var w=v(e);s=T(w,a),w.forEach(h),t=x(u),m=_(u,"P",{class:!0,d:!0,m:!0}),v(m).forEach(h),i=x(u),n=_(u,"P",{class:!0,d:!0,k:!0}),v(n).forEach(h),o=x(u);for(let y=0;y<k.length;y+=1)k[y].l(u);M=_s(),this.h()},h(){g(m,"class","p-1 text-indigo-700"),g(m,"d",""),g(m,"m","\\cancelto{0}{\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}}"),g(n,"class","p-1 text-green-700"),g(n,"d",""),g(n,"k","\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}")},m(u,w){E(u,e,w),r(e,s),E(u,t,w),E(u,m,w),E(u,i,w),E(u,n,w),E(u,o,w);for(let y=0;y<k.length;y+=1)k[y].m(u,w);E(u,M,w)},p(u,w){if(w&16){q=u[4];let y;for(y=0;y<q.length;y+=1){const N=he(u,q,y);k[y]?k[y].p(N,w):(k[y]=de(N),k[y].c(),k[y].m(M.parentNode,M))}for(;y<k.length;y+=1)k[y].d(1);k.length=q.length}},d(u){u&&h(e),u&&h(t),u&&h(m),u&&h(i),u&&h(n),u&&h(o),vs(k,u),u&&h(M)}}}function Ke(l){let e=l[3],a,s,t,m,i,n,o,M,q=`<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><munder><mrow><msup><mi>u</mi><mo mathvariant="normal" lspace="0em" rspace="0em">\u2032</mo></msup><mo>\u2212</mo><mi>P</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>u</mi><mn>2</mn></msup><mo>\u2212</mo><mi>Q</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>u</mi><mo>\u2212</mo><mi>R</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mo stretchy="true">\u23DF</mo></munder><mrow><mtext>=0,\xA0since\xA0</mtext><mstyle scriptlevel="0" displaystyle="false"><mi>u</mi></mstyle><mtext>\xA0is\xA0a\xA0particular\xA0solution.</mtext></mrow></munder></mrow><annotation encoding="application/x-tex">\\underbrace{u&#x27;-P(x)u^2-Q(x)u-R(x)}_{\\text{=0, since~$u$ is a particular solution.}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.5843em;vertical-align:-1.7202em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-1.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">=0,\xA0since</span><span class="mord mtight nobreak">\xA0</span><span class="mord mathnormal sizing reset-size3 size6">u</span><span class="mord mtight">\xA0is\xA0a\xA0particular\xA0solution.</span></span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span class="svg-align" style="top:-2.102em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.548em;min-width:1.6em;"><span class="brace-left" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMinYMin slice'><path d='M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z'/></svg></span><span class="brace-center" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMidYMin slice'><path d='M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z'/></svg></span><span class="brace-right" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMaxYMin slice'><path d='M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z'/></svg></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2032</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.898em;"><span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.7202em;"><span></span></span></span></span></span></span></span></span></span>`,k,u,w,y,N,xe='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>',ws,es=l[0]**2+"",os,bs,W,j,xs,ts,ks,Ms,O,Es,as,zs,Ps,Is,ns,X,Ts,B,ls,Ls,qs,is,Ds,As,S,$,Hs,U,Ns,Y,cs,js,$s,hs,rs,ps,Us,Ss,D,Ks,A,Rs,us,K,Vs,Zs,L=ge();n=new Se({});let J=Array(l[2]),z=[];for(let p=0;p<J.length;p+=1)z[p]=fe(ue(l,J,p));let Z=Array(l[3]),P=[];for(let p=0;p<Z.length;p+=1)P[p]=_e(ce(l,Z,p));return{c(){L.c(),a=b(),s=d("article"),t=d("p"),m=I("ayo"),i=b(),Ws(n.$$.fragment),o=b(),M=d("div"),k=b(),u=d("span"),w=d("p"),y=I(l[0]),N=d("span"),ws=I("="),os=I(es),bs=b(),W=d("div"),j=d("input"),xs=b(),ts=d("h1"),ks=I("The content of this page is written in a markdown file with svelte components (tailwind too), possible due to MDsveX!"),Ms=b(),O=d("h2"),Es=I("The "),as=d("strong"),zs=I("math"),Ps=I(" on this page is written in markdown using Katex (black), Katex (green), and Mathjax (blue), the latter two of which are lazy rendered with the Intersection Observer API!"),Is=b(),ns=d("ul"),X=d("li"),Ts=I("the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX"),B=d("ul"),ls=d("li"),Ls=I("the newest version of mathjax is about as performant as katex; mathjax has a wider adoption of latex functionality"),qs=b(),is=d("li"),Ds=I("the math markdown uses katex as a plugin and is not lazy-rendered \u2026 it is however easier to write"),As=b(),S=d("div"),$=d("input"),Hs=b(),U=d("input"),Ns=b(),Y=d("h1"),cs=I(l[2]),js=I(" lines of markdown immediately below"),$s=b();for(let p=0;p<z.length;p+=1)z[p].c();hs=b(),rs=d("ul"),ps=d("li"),Us=I("pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)"),Ss=b(),D=d("input"),Ks=b(),A=d("input"),Rs=b();for(let p=0;p<P.length;p+=1)P[p].c();this.h()},l(p){L.l(p),a=x(p),s=_(p,"ARTICLE",{class:!0});var c=v(s);t=_(c,"P",{});var f=v(t);m=T(f,"ayo"),f.forEach(h),i=x(c),Xs(n.$$.fragment,c),o=x(c),M=_(c,"DIV",{class:!0});var C=v(M);C.forEach(h),k=x(c),u=_(c,"SPAN",{class:!0});var se=v(u);w=_(se,"P",{});var ms=v(w);y=T(ms,l[0]),N=_(ms,"SPAN",{class:!0});var ke=v(N);ke.forEach(h),ws=T(ms,"="),os=T(ms,es),ms.forEach(h),se.forEach(h),bs=x(c),W=_(c,"DIV",{class:!0});var ee=v(W);j=_(ee,"INPUT",{type:!0,min:!0}),ee.forEach(h),xs=x(c),ts=_(c,"H1",{});var te=v(ts);ks=T(te,"The content of this page is written in a markdown file with svelte components (tailwind too), possible due to MDsveX!"),te.forEach(h),Ms=x(c),O=_(c,"H2",{});var gs=v(O);Es=T(gs,"The "),as=_(gs,"STRONG",{});var ae=v(as);zs=T(ae,"math"),ae.forEach(h),Ps=T(gs," on this page is written in markdown using Katex (black), Katex (green), and Mathjax (blue), the latter two of which are lazy rendered with the Intersection Observer API!"),gs.forEach(h),Is=x(c),ns=_(c,"UL",{});var ne=v(ns);X=_(ne,"LI",{});var Os=v(X);Ts=T(Os,"the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX"),B=_(Os,"UL",{});var fs=v(B);ls=_(fs,"LI",{});var le=v(ls);Ls=T(le,"the newest version of mathjax is about as performant as katex; mathjax has a wider adoption of latex functionality"),le.forEach(h),qs=x(fs),is=_(fs,"LI",{});var ie=v(is);Ds=T(ie,"the math markdown uses katex as a plugin and is not lazy-rendered \u2026 it is however easier to write"),ie.forEach(h),fs.forEach(h),Os.forEach(h),ne.forEach(h),As=x(c),S=_(c,"DIV",{class:!0});var ds=v(S);$=_(ds,"INPUT",{type:!0,min:!0}),Hs=x(ds),U=_(ds,"INPUT",{type:!0,min:!0}),ds.forEach(h),Ns=x(c),Y=_(c,"H1",{});var Bs=v(Y);cs=T(Bs,l[2]),js=T(Bs," lines of markdown immediately below"),Bs.forEach(h),$s=x(c);for(let F=0;F<z.length;F+=1)z[F].l(c);hs=x(c),rs=_(c,"UL",{});var re=v(rs);ps=_(re,"LI",{});var pe=v(ps);Us=T(pe,"pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)"),pe.forEach(h),re.forEach(h),Ss=x(c),D=_(c,"INPUT",{type:!0,min:!0,max:!0}),Ks=x(c),A=_(c,"INPUT",{type:!0,min:!0,max:!0}),Rs=x(c);for(let F=0;F<P.length;F+=1)P[F].l(c);c.forEach(h),this.h()},h(){g(M,"class","math math-display"),g(N,"class","math math-inline"),g(u,"class","text-7xl flex justify-center"),g(j,"type","range"),g(j,"min","1"),g(W,"class","flex justify-center"),g($,"type","number"),g($,"min","1"),g(U,"type","range"),g(U,"min","1"),g(S,"class","p-4"),g(D,"type","number"),g(D,"min","1"),g(D,"max",Fs),g(A,"type","range"),g(A,"min","1"),g(A,"max",Fs),g(s,"class",us="prose lg:prose-lg "+l[1])},m(p,c){L.m(p,c),E(p,a,c),E(p,s,c),r(s,t),r(t,m),r(s,i),Ys(n,s,null),r(s,o),r(s,M),M.innerHTML=q,r(s,k),r(s,u),r(u,w),r(w,y),r(w,N),N.innerHTML=xe,r(w,ws),r(w,os),r(s,bs),r(s,W),r(W,j),H(j,l[0]),r(s,xs),r(s,ts),r(ts,ks),r(s,Ms),r(s,O),r(O,Es),r(O,as),r(as,zs),r(O,Ps),r(s,Is),r(s,ns),r(ns,X),r(X,Ts),r(X,B),r(B,ls),r(ls,Ls),r(B,qs),r(B,is),r(is,Ds),r(s,As),r(s,S),r(S,$),H($,l[2]),r(S,Hs),r(S,U),H(U,l[2]),r(s,Ns),r(s,Y),r(Y,cs),r(Y,js),r(s,$s);for(let f=0;f<z.length;f+=1)z[f].m(s,null);r(s,hs),r(s,rs),r(rs,ps),r(ps,Us),r(s,Ss),r(s,D),H(D,l[3]),r(s,Ks),r(s,A),H(A,l[3]),r(s,Rs);for(let f=0;f<P.length;f+=1)P[f].m(s,null);K=!0,Vs||(Zs=[R(j,"change",l[6]),R(j,"input",l[6]),R($,"input",l[7]),R(U,"change",l[8]),R(U,"input",l[8]),R(D,"input",l[9]),R(A,"change",l[10]),R(A,"input",l[10])],Vs=!0)},p(p,[c]){if(c&8&&ys(e,e=p[3])?(ve(),Q(L,1,1,ss),ye(),L=ge(),L.c(),V(L,1),L.m(a.parentNode,a)):L.p(p,c),(!K||c&1)&&Cs(y,p[0]),(!K||c&1)&&es!==(es=p[0]**2+"")&&Cs(os,es),c&1&&H(j,p[0]),c&4&&G($.value)!==p[2]&&H($,p[2]),c&4&&H(U,p[2]),(!K||c&4)&&Cs(cs,p[2]),c&4){J=Array(p[2]);let f;for(f=0;f<J.length;f+=1){const C=ue(p,J,f);z[f]?z[f].p(C,c):(z[f]=fe(C),z[f].c(),z[f].m(s,hs))}for(;f<z.length;f+=1)z[f].d(1);z.length=J.length}if(c&8&&G(D.value)!==p[3]&&H(D,p[3]),c&8&&H(A,p[3]),c&24){Z=Array(p[3]);let f;for(f=0;f<Z.length;f+=1){const C=ce(p,Z,f);P[f]?P[f].p(C,c):(P[f]=_e(C),P[f].c(),P[f].m(s,null))}for(;f<P.length;f+=1)P[f].d(1);P.length=Z.length}(!K||c&2&&us!==(us="prose lg:prose-lg "+p[1]))&&g(s,"class",us)},i(p){K||(V(L),V(n.$$.fragment,p),K=!0)},o(p){Q(L),Q(n.$$.fragment,p),K=!1},d(p){L.d(p),p&&h(a),p&&h(s),Js(n),vs(z,p),vs(P,p),Vs=!1,Te(Zs)}}}let Fs=1e3,Re=1;function Ve(l,e,a){let s,t,m,i;we(l,be,y=>a(5,i=y));let n=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"],o=2;function M(){o=G(this.value),a(0,o)}function q(){t=G(this.value),a(2,t)}function k(){t=G(this.value),a(2,t)}function u(){s=G(this.value),a(3,s)}function w(){s=G(this.value),a(3,s)}return l.$$.update=()=>{l.$$.dirty&32&&a(1,m=i?"prose-invert":"")},a(3,s=Fs),a(2,t=Re),[o,m,t,s,n,i,M,q,k,u,w]}class Qe extends Gs{constructor(e){super(),Qs(this,e,Ve,Ke,ys,{})}}export{Qe as default};
