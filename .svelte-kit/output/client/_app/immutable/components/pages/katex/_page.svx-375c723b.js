import{S as le,i as re,s as Y,k as y,_ as se,l as $,h as d,n as g,N as p,B as T,o as oe,a5 as ie,a as I,q as M,c as N,m as A,r as q,b as w,$ as D,G as j,t as G,d as ue,f as O,a6 as V,u as Q,Z as ae,D as ce,O as he,w as fe,x as _e,y as me,z as pe,e as R,g as ge}from"../../../chunks/index-95872f21.js";import{k as de}from"../../../chunks/katex-d33715d1.js";import{i as be}from"../../../chunks/store-825ff2b0.js";const{document:X}=ie;function ke(s){let t;return{c(){t=y("link"),this.h()},l(n){const e=se("svelte-ztscxf",X.head);t=$(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),e.forEach(d),this.h()},h(){g(t,"rel","stylesheet"),g(t,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),g(t,"integrity","sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"),g(t,"crossorigin","anonymous")},m(n,e){p(X.head,t)},p:T,i:T,o:T,d(n){d(t)}}}function ve(s){return oe(()=>{let t=document.querySelectorAll("[k]"),n=new IntersectionObserver(e,{root:null,threshold:0,rootMargin:"200px"});for(let c of t)n.observe(c);function e(c,f){for(let _ of c){if(!_.isIntersecting)return;let r=_.target,a=r.getAttribute("k"),o=r.hasAttribute("d");de.render(a,r,{displayMode:o}),f.unobserve(_.target)}}}),[]}class ye extends le{constructor(t){super(),re(this,t,ve,ke,Y,{})}}function Z(s,t,n){const e=s.slice();return e[6]=t[n],e[8]=n,e}function J(s,t,n){const e=s.slice();return e[9]=t[n],e}function ee(s){let t,n;return t=new ye({}),{c(){fe(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,c){me(t,e,c),n=!0},p:T,i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){pe(t,e)}}}function te(s){let t;return{c(){t=y("p"),this.h()},l(n){t=$(n,"P",{class:!0,d:!0,k:!0}),A(t).forEach(d),this.h()},h(){g(t,"class","p-1 text-indigo-700"),g(t,"d",""),g(t,"k",s[9])},m(n,e){w(n,t,e)},p:T,d(n){n&&d(t)}}}function ne(s){let t,n=s[8]+1+"",e,c,f,_=s[2],r=[];for(let a=0;a<_.length;a+=1)r[a]=te(J(s,_,a));return{c(){t=y("div"),e=M(n),c=I();for(let a=0;a<r.length;a+=1)r[a].c();f=R()},l(a){t=$(a,"DIV",{});var o=A(t);e=q(o,n),o.forEach(d),c=N(a);for(let i=0;i<r.length;i+=1)r[i].l(a);f=R()},m(a,o){w(a,t,o),p(t,e),w(a,c,o);for(let i=0;i<r.length;i+=1)r[i].m(a,o);w(a,f,o)},p(a,o){if(o&4){_=a[2];let i;for(i=0;i<_.length;i+=1){const k=J(a,_,i);r[i]?r[i].p(k,o):(r[i]=te(k),r[i].c(),r[i].m(f.parentNode,f))}for(;i<r.length;i+=1)r[i].d(1);r.length=_.length}},d(a){a&&d(t),a&&d(c),ae(r,a),a&&d(f)}}}function $e(s){let t=s[0],n,e,c,f,_,r,a,o,i,k,K,F,x=s[0]*s[2].length+"",L,H,P,C,E,S,B,b=ee(),z=Array(s[0]),m=[];for(let l=0;l<z.length;l+=1)m[l]=ne(Z(s,z,l));return{c(){b.c(),n=I(),e=y("article"),c=y("h1"),f=M("This page lazy-rendered using Katex"),_=I(),r=y("input"),a=I(),o=y("input"),i=I(),k=y("h2"),K=M(s[0]),F=M(" sections; "),L=M(x),H=M(" equations below"),P=I();for(let l=0;l<m.length;l+=1)m[l].c();this.h()},l(l){b.l(l),n=N(l),e=$(l,"ARTICLE",{class:!0});var u=A(e);c=$(u,"H1",{});var h=A(c);f=q(h,"This page lazy-rendered using Katex"),h.forEach(d),_=N(u),r=$(u,"INPUT",{type:!0,min:!0,max:!0}),a=N(u),o=$(u,"INPUT",{type:!0,min:!0,max:!0}),i=N(u),k=$(u,"H2",{});var v=A(k);K=q(v,s[0]),F=q(v," sections; "),L=q(v,x),H=q(v," equations below"),v.forEach(d),P=N(u);for(let U=0;U<m.length;U+=1)m[U].l(u);u.forEach(d),this.h()},h(){g(r,"type","number"),g(r,"min","1"),g(r,"max",W),g(o,"type","range"),g(o,"min","1"),g(o,"max",W),g(e,"class",C="prose lg:prose-lg "+s[1])},m(l,u){b.m(l,u),w(l,n,u),w(l,e,u),p(e,c),p(c,f),p(e,_),p(e,r),D(r,s[0]),p(e,a),p(e,o),D(o,s[0]),p(e,i),p(e,k),p(k,K),p(k,F),p(k,L),p(k,H),p(e,P);for(let h=0;h<m.length;h+=1)m[h].m(e,null);E=!0,S||(B=[j(r,"input",s[4]),j(o,"change",s[5]),j(o,"input",s[5])],S=!0)},p(l,[u]){if(u&1&&Y(t,t=l[0])?(ge(),G(b,1,1,T),ue(),b=ee(),b.c(),O(b,1),b.m(n.parentNode,n)):b.p(l,u),u&1&&V(r.value)!==l[0]&&D(r,l[0]),u&1&&D(o,l[0]),(!E||u&1)&&Q(K,l[0]),(!E||u&1)&&x!==(x=l[0]*l[2].length+"")&&Q(L,x),u&5){z=Array(l[0]);let h;for(h=0;h<z.length;h+=1){const v=Z(l,z,h);m[h]?m[h].p(v,u):(m[h]=ne(v),m[h].c(),m[h].m(e,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=z.length}(!E||u&2&&C!==(C="prose lg:prose-lg "+l[1]))&&g(e,"class",C)},i(l){E||(O(b),E=!0)},o(l){G(b),E=!1},d(l){b.d(l),l&&d(n),l&&d(e),ae(m,l),S=!1,ce(B)}}}let W=1e3;function Ee(s,t,n){let e,c;he(s,be,o=>n(3,c=o));let f=W,_=["\\int_{M}d\\omega=\\int_{\\partial M}\\omega","G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}"," (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ","\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}","z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"];function r(){f=V(this.value),n(0,f)}function a(){f=V(this.value),n(0,f)}return s.$$.update=()=>{s.$$.dirty&8&&n(1,e=c?"prose-invert":"")},[f,e,_,c,r,a]}class Ne extends le{constructor(t){super(),re(this,t,Ee,$e,Y,{})}}export{Ne as default};
