import{S as D,i as T,s as w,o as E,w as y,a as I,k as f,q as W,x as S,c as P,l as p,m as h,r as k,h as m,n as c,p as _,y as q,b as z,P as g,u as O,f as A,t as L,z as N,Q as C}from"./index-abd81730.js";import{_ as b}from"./preload-helper-b21cceae.js";import{i as M}from"./store-16f0cf2b.js";function R(r,o,a){let{uniqueId:t="default"}=o;async function i(){const{PUBLIC_UPLOAD_ENDPOINT:s}=await b(()=>import("./public-e0b14f20.js"),[],import.meta.url),d=".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";await b(()=>Promise.resolve({}),["../assets/dropzone-1f8a37e8.css"],import.meta.url);const{Dropzone:u}=await b(()=>import("./dropzone-b74efa31.js"),[],import.meta.url);new u("#default",{url:s,acceptedFiles:d}),document.querySelector("#default").id=t}return E(()=>{const s={root:null,threshold:0,rootMargin:"0px"},d=new IntersectionObserver(function(n,e){for(let l of n)l.isIntersecting&&(i(),e.unobserve(l.target),console.log("drop it like its \u{1F525}"))},s),u=document.querySelectorAll(".dropzone");for(let n of u)d.observe(n)}),r.$$set=s=>{"uniqueId"in s&&a(0,t=s.uniqueId)},[t]}class F extends D{constructor(o){super(),T(this,o,R,null,w,{uniqueId:0})}}function V(r){let o,a,t,i,s,d,u,n;return o=new F({}),{c(){y(o.$$.fragment),a=I(),t=f("form"),i=f("div"),s=f("span"),d=W(r[0]),this.h()},l(e){S(o.$$.fragment,e),a=P(e),t=p(e,"FORM",{method:!0,id:!0,style:!0,class:!0});var l=h(t);i=p(l,"DIV",{class:!0,"data-dz-message":!0});var x=h(i);s=p(x,"SPAN",{});var v=h(s);d=k(v,r[0]),v.forEach(m),x.forEach(m),l.forEach(m),this.h()},h(){c(i,"class","dz-message font-Nunito group-hover:animate-pulse"),c(i,"data-dz-message",""),c(t,"method","post"),c(t,"id","default"),_(t,"box-shadow","inset 0 -10px 10px "+r[4]),_(t,"border-radius","50px"),_(t,"border-color","transparent"),_(t,"background-color","transparent"),c(t,"class",u="dropzone grid place-items-center overflow-scroll backdrop-blur-3xl "+r[3]+" "+r[1]+" "+r[2]+" mx-auto group")},m(e,l){q(o,e,l),z(e,a,l),z(e,t,l),g(t,i),g(i,s),g(s,d),n=!0},p(e,[l]){(!n||l&1)&&O(d,e[0]),(!n||l&16)&&_(t,"box-shadow","inset 0 -10px 10px "+e[4]),(!n||l&14&&u!==(u="dropzone grid place-items-center overflow-scroll backdrop-blur-3xl "+e[3]+" "+e[1]+" "+e[2]+" mx-auto group"))&&c(t,"class",u)},i(e){n||(A(o.$$.fragment,e),n=!0)},o(e){L(o.$$.fragment,e),n=!1},d(e){N(o,e),e&&m(a),e&&m(t)}}}function j(r,o,a){let t,i;C(r,M,e=>a(5,i=e));let{text:s="Drop it like it's \u{1F525}"}=o,{textSizeTW:d="text-3xl"}=o,{dimensionsTW:u="w-[65vw] sm:w-[60vw] h-[60vh]"}=o,{brightnessTW:n="brightness-100"}=o;return r.$$set=e=>{"text"in e&&a(0,s=e.text),"textSizeTW"in e&&a(1,d=e.textSizeTW),"dimensionsTW"in e&&a(2,u=e.dimensionsTW),"brightnessTW"in e&&a(3,n=e.brightnessTW)},r.$$.update=()=>{r.$$.dirty&32&&a(4,t=i?"#1d1c43":"#ddd")},[s,d,u,n,t,i]}class Q extends D{constructor(o){super(),T(this,o,j,V,w,{text:0,textSizeTW:1,dimensionsTW:2,brightnessTW:3})}}export{Q as D};
