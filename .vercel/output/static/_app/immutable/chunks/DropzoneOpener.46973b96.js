import{S as g,i as b,s as x,F as A,G as I,m as u,h as c,n,b as S,H as m,D as v,k as _,y as U,a as O,l as d,z as D,c as M,A as B,U as N,g as H,d as L,B as z,E as j,I as q}from"./index.d162f37a.js";import{s as P}from"./store.d544f2d3.js";import{PUBLIC_UPLOAD_ENDPOINT as C}from"./public.ec3b3561.js";function T(l){let e,s;return{c(){e=A("svg"),s=A("path"),this.h()},l(t){e=I(t,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var a=u(e);s=I(a,"path",{d:!0,class:!0}),u(s).forEach(c),a.forEach(c),this.h()},h(){n(s,"d","M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"),n(s,"class","svelte-16axcyv"),n(e,"width","150"),n(e,"height","150"),n(e,"viewBox","0 0 1024 1024"),n(e,"class","svelte-16axcyv")},m(t,a){S(t,e,a),m(e,s)},p:v,i:v,o:v,d(t){t&&c(e)}}}class V extends g{constructor(e){super(),b(this,e,null,T,x,{})}}function R(l){return[["/api/submit-homework","/api/testPost",C]]}class F extends g{constructor(e){super(),b(this,e,R,null,x,{})}}function G(l){let e,s,t,a,o,w,i,p,$,y;return o=new V({}),i=new F({}),{c(){e=_("button"),s=_("label"),t=_("div"),a=_("div"),U(o.$$.fragment),w=O(),U(i.$$.fragment),this.h()},l(r){e=d(r,"BUTTON",{"aria-label":!0,class:!0});var h=u(e);s=d(h,"LABEL",{for:!0,class:!0});var E=u(s);t=d(E,"DIV",{class:!0});var f=u(t);a=d(f,"DIV",{class:!0});var k=u(a);D(o.$$.fragment,k),k.forEach(c),w=M(f),D(i.$$.fragment,f),f.forEach(c),E.forEach(c),h.forEach(c),this.h()},h(){n(a,"class","animate-pulse"),n(t,"class","flex w-[100%] flex-col items-center justify-center"),n(s,"for","file"),n(s,"class","w-[60vw]"),n(e,"aria-label","Upload Button Area"),n(e,"class","submitArea mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll backdrop-blur-3xl sm:w-[60vw] svelte-wqz77j")},m(r,h){S(r,e,h),m(e,s),m(s,t),m(t,a),B(o,a,null),m(t,w),B(i,t,null),p=!0,$||(y=N(e,"click",l[0]),$=!0)},p:v,i(r){p||(H(o.$$.fragment,r),H(i.$$.fragment,r),p=!0)},o(r){L(o.$$.fragment,r),L(i.$$.fragment,r),p=!1},d(r){r&&c(e),z(o),z(i),$=!1,y()}}}function J(l,e,s){let t;j(l,P,o=>s(1,t=o));function a(){var o;q(P,t=!0,t),(o=document.querySelector(".dropzone"))==null||o.dispatchEvent(new CustomEvent("click"))}return[a]}class X extends g{constructor(e){super(),b(this,e,J,G,x,{})}}export{X as D};
