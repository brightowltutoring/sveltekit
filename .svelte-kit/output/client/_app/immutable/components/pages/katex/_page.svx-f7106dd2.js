import{S as ne,i as re,s as V,k as y,_ as se,l as $,h as d,n as g,N as p,A,o as oe,$ as ie,a as I,q as M,c as N,m as x,r as z,b as T,O as F,G as D,t as W,d as ue,f as G,a1 as O,u as Q,W as ae,C as ce,R as he,v as fe,w as _e,x as me,y as pe,e as X,g as ge}from"../../../chunks/index-1063d0c6.js";import{k as de}from"../../../chunks/katex-15be85e5.js";import{b as be}from"../../../chunks/store-338023ad.js";import"../../../chunks/index-6dbc7447.js";const{document:B}=ie;function ke(s){let t;return{c(){t=y("link"),this.h()},l(l){const e=se('[data-svelte="svelte-ztscxf"]',B.head);t=$(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),e.forEach(d),this.h()},h(){g(t,"rel","stylesheet"),g(t,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),g(t,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),g(t,"crossorigin","anonymous")},m(l,e){p(B.head,t)},p:A,i:A,o:A,d(l){d(t)}}}function ve(s){return oe(()=>{let t=document.querySelectorAll("[k]"),l=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"200px"});for(let c of t)l.observe(c);function e(c,f){for(let _ of c){if(!_.isIntersecting)return;let r=_.target,a=r.getAttribute("k"),o=r.hasAttribute("d");de.render(a,r,{displayMode:o}),f.unobserve(_.target)}}}),[]}class ye extends ne{constructor(t){super(),re(this,t,ve,ke,V,{})}}function J(s,t,l){const e=s.slice();return e[6]=t[l],e[8]=l,e}function Z(s,t,l){const e=s.slice();return e[9]=t[l],e}function ee(s){let t,l;return t=new ye({}),{c(){fe(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,c){me(t,e,c),l=!0},p:A,i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){W(t.$$.fragment,e),l=!1},d(e){pe(t,e)}}}function te(s){let t;return{c(){t=y("p"),this.h()},l(l){t=$(l,"P",{class:!0,d:!0,k:!0}),x(t).forEach(d),this.h()},h(){g(t,"class","p-1 text-indigo-700"),g(t,"d",""),g(t,"k",s[9])},m(l,e){T(l,t,e)},p:A,d(l){l&&d(t)}}}function le(s){let t,l=s[8]+1+"",e,c,f,_=s[2],r=[];for(let a=0;a<_.length;a+=1)r[a]=te(Z(s,_,a));return{c(){t=y("div"),e=M(l),c=I();for(let a=0;a<r.length;a+=1)r[a].c();f=X()},l(a){t=$(a,"DIV",{});var o=x(t);e=z(o,l),o.forEach(d),c=N(a);for(let i=0;i<r.length;i+=1)r[i].l(a);f=X()},m(a,o){T(a,t,o),p(t,e),T(a,c,o);for(let i=0;i<r.length;i+=1)r[i].m(a,o);T(a,f,o)},p(a,o){if(o&4){_=a[2];let i;for(i=0;i<_.length;i+=1){const k=Z(a,_,i);r[i]?r[i].p(k,o):(r[i]=te(k),r[i].c(),r[i].m(f.parentNode,f))}for(;i<r.length;i+=1)r[i].d(1);r.length=_.length}},d(a){a&&d(t),a&&d(c),ae(r,a),a&&d(f)}}}function $e(s){let t=s[0],l,e,c,f,_,r,a,o,i,k,K,H,w=s[0]*s[2].length+"",C,P,S,L,E,U,Y,b=ee(),q=Array(s[0]),m=[];for(let n=0;n<q.length;n+=1)m[n]=le(J(s,q,n));return{c(){b.c(),l=I(),e=y("article"),c=y("h1"),f=M("This page lazy-rendered using Katex"),_=I(),r=y("input"),a=I(),o=y("input"),i=I(),k=y("h2"),K=M(s[0]),H=M(" sections; "),C=M(w),P=M(" equations below"),S=I();for(let n=0;n<m.length;n+=1)m[n].c();this.h()},l(n){b.l(n),l=N(n),e=$(n,"ARTICLE",{class:!0});var u=x(e);c=$(u,"H1",{});var h=x(c);f=z(h,"This page lazy-rendered using Katex"),h.forEach(d),_=N(u),r=$(u,"INPUT",{type:!0,min:!0,max:!0}),a=N(u),o=$(u,"INPUT",{type:!0,min:!0,max:!0}),i=N(u),k=$(u,"H2",{});var v=x(k);K=z(v,s[0]),H=z(v," sections; "),C=z(v,w),P=z(v," equations below"),v.forEach(d),S=N(u);for(let j=0;j<m.length;j+=1)m[j].l(u);u.forEach(d),this.h()},h(){g(r,"type","number"),g(r,"min","1"),g(r,"max",R),g(o,"type","range"),g(o,"min","1"),g(o,"max",R),g(e,"class",L="prose lg:prose-lg "+s[1])},m(n,u){b.m(n,u),T(n,l,u),T(n,e,u),p(e,c),p(c,f),p(e,_),p(e,r),F(r,s[0]),p(e,a),p(e,o),F(o,s[0]),p(e,i),p(e,k),p(k,K),p(k,H),p(k,C),p(k,P),p(e,S);for(let h=0;h<m.length;h+=1)m[h].m(e,null);E=!0,U||(Y=[D(r,"input",s[4]),D(o,"change",s[5]),D(o,"input",s[5])],U=!0)},p(n,[u]){if(u&1&&V(t,t=n[0])?(ge(),W(b,1,1,A),ue(),b=ee(),b.c(),G(b,1),b.m(l.parentNode,l)):b.p(n,u),u&1&&O(r.value)!==n[0]&&F(r,n[0]),u&1&&F(o,n[0]),(!E||u&1)&&Q(K,n[0]),(!E||u&1)&&w!==(w=n[0]*n[2].length+"")&&Q(C,w),u&5){q=Array(n[0]);let h;for(h=0;h<q.length;h+=1){const v=J(n,q,h);m[h]?m[h].p(v,u):(m[h]=le(v),m[h].c(),m[h].m(e,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=q.length}(!E||u&2&&L!==(L="prose lg:prose-lg "+n[1]))&&g(e,"class",L)},i(n){E||(G(b),E=!0)},o(n){W(b),E=!1},d(n){b.d(n),n&&d(l),n&&d(e),ae(m,n),U=!1,ce(Y)}}}let R=1e3;function Ee(s,t,l){let e,c;he(s,be,o=>l(3,c=o));let f=R,_=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function r(){f=O(this.value),l(0,f)}function a(){f=O(this.value),l(0,f)}return s.$$.update=()=>{s.$$.dirty&8&&l(1,e=c?"prose-invert":"")},[f,e,_,c,r,a]}class ze extends ne{constructor(t){super(),re(this,t,Ee,$e,V,{})}}export{ze as default};