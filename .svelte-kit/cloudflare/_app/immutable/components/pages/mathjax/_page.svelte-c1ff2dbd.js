import{S as E,i as J,s as P,k as d,W as R,l as f,m as b,h as l,$ as M,n as j,F as n,A as $,o as S,v as T,a as q,q as u,w as B,c as A,r as p,x as F,b as C,f as I,t as W,y as z}from"../../../chunks/index-c5b536bd.js";function D(_){let e,i,t,c;return{c(){e=d("script"),t=d("script"),this.h()},l(o){const r=R('[data-svelte="svelte-12gttbm"]',document.head);e=f(r,"SCRIPT",{src:!0});var h=b(e);h.forEach(l),t=f(r,"SCRIPT",{id:!0,src:!0});var m=b(t);m.forEach(l),r.forEach(l),this.h()},h(){M(e.src,i="https://polyfill.io/v3/polyfill.min.js?features=es6")||j(e,"src",i),j(t,"id","MathJax-script"),t.async=!0,M(t.src,c="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")||j(t,"src",c)},m(o,r){n(document.head,e),n(document.head,t)},p:$,i:$,o:$,d(o){l(e),l(t)}}}async function G(){window.MathJax={loader:{load:["[tex]/physics","[tex]/cancel"]},tex:{inlineMath:[["$","$"],["\\(","\\)"]],packages:{"[+]":["physics","cancel"]}},options:{renderActions:{addMenu:[]}},svg:{fontCache:"global"}}}function H(_){return S(G),[]}class K extends E{constructor(e){super(),J(this,e,H,D,P,{})}}function L(_){let e,i,t,c,o,r,h,m,k=2+"",v,w=3+"",g,y,x;return e=new K({}),{c(){T(e.$$.fragment),i=q(),t=d("p"),c=u(`Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax.
	`),o=d("br"),r=q(),h=d("br"),m=u(`
    The slope of the radial line is: $$e^x = \\frac`),v=u(k),g=u(w),y=u("$$")},l(a){B(e.$$.fragment,a),i=A(a),t=f(a,"P",{});var s=b(t);c=p(s,`Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax.
	`),o=f(s,"BR",{}),r=A(s),h=f(s,"BR",{}),m=p(s,`
    The slope of the radial line is: $$e^x = \\frac`),v=p(s,k),g=p(s,w),y=p(s,"$$"),s.forEach(l)},m(a,s){F(e,a,s),C(a,i,s),C(a,t,s),n(t,c),n(t,o),n(t,r),n(t,h),n(t,m),n(t,v),n(t,g),n(t,y),x=!0},p:$,i(a){x||(I(e.$$.fragment,a),x=!0)},o(a){W(e.$$.fragment,a),x=!1},d(a){z(e,a),a&&l(i),a&&l(t)}}}class O extends E{constructor(e){super(),J(this,e,null,L,P,{})}}export{O as default};