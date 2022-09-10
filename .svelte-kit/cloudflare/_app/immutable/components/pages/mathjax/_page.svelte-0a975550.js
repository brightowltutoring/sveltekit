import{S as H,i as T,s as U,o as L,v as O,a as A,k as E,q as r,e as P,w as R,c as M,l as C,m as F,r as i,h as d,x as z,b as w,F as n,A as I,f as q,t as D,y as G,U as K,I as N,J as Q}from"../../../chunks/index-00687be8.js";import{a as V}from"../../../chunks/index-3fc8dc6f.js";import{e as W}from"../../../chunks/index-c7021fa9.js";function X(o){let e;return L(()=>{e=document.createElement("script"),e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",e.async=!0,document.head.appendChild(e),e.addEventListener("load",()=>{MathJax={loader:{load:["[tex]/physics","[tex]/cancel"]},tex:{inlineMath:[["$","$"],["\\(","\\)"]],packages:{"[+]":["physics","cancel"]}},options:{renderActions:{addMenu:[]}},svg:{fontCache:"global"}}})}),[]}class Y extends H{constructor(e){super(),T(this,e,X,null,U,{})}}function Z(o,e,h){const l=o.slice();return l[3]=e[h],l[5]=h,l}function ee(o){let e,h,l,k="{x}",_,g=3+"",$,x,b="{x}",p,v=3+"",u,y,c="$$\\frac{x}{3}$$",t,a,m=`$$ 
			S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,
		e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
		$$`,J,S,j;return{c(){e=E("p"),h=r(o[5]),l=r(` 

		$$ \\frac`),_=r(k),$=r(g),x=r(` $$

		$\\frac`),p=r(b),u=r(v),y=r(`$

		`),t=r(c),a=A(),J=r(m),j=A()},l(f){e=C(f,"P",{});var s=F(e);h=i(s,o[5]),l=i(s,` 

		$$ \\frac`),_=i(s,k),$=i(s,g),x=i(s,` $$

		$\\frac`),p=i(s,b),u=i(s,v),y=i(s,`$

		`),t=i(s,c),a=M(s),J=i(s,m),s.forEach(d),j=M(f)},m(f,s){w(f,e,s),n(e,h),n(e,l),n(e,_),n(e,$),n(e,x),n(e,p),n(e,u),n(e,y),n(e,t),n(e,a),n(e,J),w(f,j,s)},p(f,s){o=f},i(f){S||N(()=>{S=Q(e,V,{easing:W,delay:20,duration:1e3}),S.start()})},o:I,d(f){f&&d(e),f&&d(j)}}}function te(o){let e,h,l,k,_,g,$,x,b,p,v,u;e=new Y({});let y=Array(ae),c=[];for(let t=0;t<y.length;t+=1)c[t]=ee(Z(o,y,t));return{c(){O(e.$$.fragment),h=A(),l=E("p"),k=r("Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like "),_=r(o[0]),g=r(` aren't processed properly since svelte views the curly-braces-around-x as it's notation for rendering JS variable "x" in the html. To get it to work have to replace x with curly backticks expression `),$=r(B),x=r(` within the code
`),b=E("br"),p=A();for(let t=0;t<c.length;t+=1)c[t].c();v=P()},l(t){R(e.$$.fragment,t),h=M(t),l=C(t,"P",{});var a=F(l);k=i(a,"Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like "),_=i(a,o[0]),g=i(a,` aren't processed properly since svelte views the curly-braces-around-x as it's notation for rendering JS variable "x" in the html. To get it to work have to replace x with curly backticks expression `),$=i(a,B),x=i(a,` within the code
`),b=C(a,"BR",{}),a.forEach(d),p=M(t);for(let m=0;m<c.length;m+=1)c[m].l(t);v=P()},m(t,a){z(e,t,a),w(t,h,a),w(t,l,a),n(l,k),n(l,_),n(l,g),n(l,$),n(l,x),n(l,b),w(t,p,a);for(let m=0;m<c.length;m+=1)c[m].m(t,a);w(t,v,a),u=!0},p:I,i(t){if(!u){q(e.$$.fragment,t);for(let a=0;a<y.length;a+=1)q(c[a]);u=!0}},o(t){D(e.$$.fragment,t),u=!1},d(t){G(e,t),t&&d(h),t&&d(l),t&&d(p),K(c,t),t&&d(v)}}}let B=" `{x}` ",ae=100;function le(o){return["\\frac{x}{2}"]}class ie extends H{constructor(e){super(),T(this,e,le,te,U,{})}}export{ie as default};
