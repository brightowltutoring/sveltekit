import{_ as z}from"./preload-helper-9b728935.js";import{S as q,i as I,s as C,w as L,a as O,k as y,q as P,x as j,c as B,l as b,m as g,r as H,h as p,n as u,p as _,y as M,b as k,N as T,u as N,f as R,t as V,z as A,O as E,o as F}from"./index-95872f21.js";import{a as U,i as G}from"./store-825ff2b0.js";import{I as J}from"./InView-2eeb4aa0.js";import{c as K}from"./utils-aab06870.js";function Q(n){let r,s,o,a,d,c,l;return r=new J({props:{once:!0,vanilla:".dropzone",onview:n[5]}}),{c(){L(r.$$.fragment),s=O(),o=y("form"),a=y("div"),d=P(n[0]),this.h()},l(e){j(r.$$.fragment,e),s=B(e),o=b(e,"FORM",{id:!0,method:!0,style:!0,class:!0});var i=g(o);a=b(i,"DIV",{class:!0,"data-dz-message":!0});var f=g(a);d=H(f,n[0]),f.forEach(p),i.forEach(p),this.h()},h(){u(a,"class","dz-message font-Nunito group-hover:animate-pulse"),u(a,"data-dz-message",""),u(o,"id","default"),u(o,"method","post"),_(o,"box-shadow","inset 0 -10px 10px "+n[4]),_(o,"border-radius","50px"),_(o,"border-color","transparent"),_(o,"background-color","transparent"),u(o,"class",c="dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+n[3]+" "+n[1]+" "+n[2]+" mx-auto group")},m(e,i){M(r,e,i),k(e,s,i),k(e,o,i),T(o,a),T(a,d),l=!0},p(e,[i]){(!l||i&1)&&N(d,e[0]),(!l||i&16)&&_(o,"box-shadow","inset 0 -10px 10px "+e[4]),(!l||i&14&&c!==(c="dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+e[3]+" "+e[1]+" "+e[2]+" mx-auto group"))&&u(o,"class",c)},i(e){l||(R(r.$$.fragment,e),l=!0)},o(e){V(r.$$.fragment,e),l=!1},d(e){A(r,e),e&&p(s),e&&p(o)}}}function X(n,r,s){let o,a,d;E(n,U,t=>s(12,a=t)),E(n,G,t=>s(7,d=t));let c,l,e;F(()=>{c=document.querySelector(".dropzone"),l=new CustomEvent("click"),e=document.querySelector("a[href='/homework']")});let{text:i="\u{1F525}"}=r,{textSizeTW:f="text-3xl"}=r,{dimensionsTW:v="w-[65vw] sm:w-[60vw] h-[60vh]"}=r,{brightnessTW:x="brightness-100"}=r,{uniqueId:h}=r,w;async function S(){console.log("drop it like its \u{1F525}"),K("dropzoneCSS","/dropzone.css");const{Dropzone:t}=await z(()=>import("./dropzone-b74efa31.js"),[],import.meta.url),{PUBLIC_UPLOAD_ENDPOINT:m}=await z(()=>import("./public-e0b14f20.js"),[],import.meta.url);w=new t("#default",{url:m,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),D(),document.querySelector("#default").id=h,e.addEventListener("click",W,{once:!0})}function D(){let t=[];w.on("error",m=>m.accepted&&t.push(m)),window==null||window.addEventListener("online",()=>{if(t.length>0)for(const m of t)w.processFile(m),m.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",m.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}function W(){a&&setTimeout(()=>{c.dispatchEvent(l)},100)}return n.$$set=t=>{"text"in t&&s(0,i=t.text),"textSizeTW"in t&&s(1,f=t.textSizeTW),"dimensionsTW"in t&&s(2,v=t.dimensionsTW),"brightnessTW"in t&&s(3,x=t.brightnessTW),"uniqueId"in t&&s(6,h=t.uniqueId)},n.$$.update=()=>{n.$$.dirty&128&&s(4,o=d?"#1d1c43":"#ddd")},[i,f,v,x,o,S,h,d]}class oe extends q{constructor(r){super(),I(this,r,X,Q,C,{text:0,textSizeTW:1,dimensionsTW:2,brightnessTW:3,uniqueId:6})}}export{oe as D};
