import{c as b,a as f,v as g,e as s,h as y}from"./index.js";import{c as _,I as k}from"./InView.js";import{a as h,i as W}from"./store.js";const D={code:".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",map:null};function S(){globalThis.onceBoolean||(setTimeout(()=>{document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"))},2e3),globalThis.onceBoolean=!0)}const q=b((p,o,t,E)=>{let u,n,m,v,w;m=f(h,e=>n=e),w=f(W,e=>v=e);let{text:a="\u{1F525}"}=o,{textSizeTW:l="text-3xl"}=o,{dimensionsTW:d="w-[65vw] sm:w-[60vw] h-[60vh]"}=o,{brightnessTW:c="brightness-100"}=o,i;async function x(e){console.log("drop it like its \u{1F525}"),_("dropzoneCSS","/dropzone.css");const{PUBLIC_UPLOAD_ENDPOINT:r}=await import("./public.js"),{Dropzone:T}=await import("dropzone");i=new T(e,{url:r,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),z()}function z(){let e=[];i.on("error",r=>r.accepted&&e.push(r)),i.on("queuecomplete",()=>{setTimeout(()=>y(h,n=!1,n),1e3)}),window==null||window.addEventListener("online",()=>{if(e.length>0)for(const r of e)i.processFile(r),r.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",r.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}return o.text===void 0&&t.text&&a!==void 0&&t.text(a),o.textSizeTW===void 0&&t.textSizeTW&&l!==void 0&&t.textSizeTW(l),o.dimensionsTW===void 0&&t.dimensionsTW&&d!==void 0&&t.dimensionsTW(d),o.brightnessTW===void 0&&t.brightnessTW&&c!==void 0&&t.brightnessTW(c),p.css.add(D),n&&S(),u=v?"#1d1c43":"#ddd",m(),w(),`${g(k,"InView").$$render(p,{single:!0,onview:x,once:!0,margin:"0px"},{},{default:()=>`<form method="post" style="${"box-shadow: inset 0 -10px 10px "+s(u,!0)+"; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+s(c,!0)+" "+s(l,!0)+" "+s(d,!0)+" mx-auto group"}">
    <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>${s(a)}</div></form>`})}`});export{q as default};
