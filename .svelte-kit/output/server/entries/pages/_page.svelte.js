import{c as d,a as l,e as p,d as s,v as a}from"../../chunks/index.js";import{L as r}from"../../chunks/LazyMount.js";import{i as c}from"../../chunks/store.js";const x=d((e,$,u,b)=>{let t,o,n;return n=l(c,i=>o=i),t=`text-transparent bg-clip-text bg-gradient-to-tr ${o?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`,n(),`<video loading="lazy" controlslist="nodownload" playsinline autoplay muted loop src="/login-bg-video-blurred.mp4" class="${"absolute -z-10 top-0 object-cover w-11/12 h-screen "+p(o?"invert-[0.95] blur-3xl":"blur-2xl",!0)}"></video>

${`<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
    <div class="h-[60vh] flex justify-center items-center text-center"><div class="grid grid-rows-1"></div></div>

    
    <div id="step1" class="hover:scale-105 duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7"><span${s("class",t,0)}>1. Upload your homework </span></button>

      
      ${a(r,"LazyMount").$$render(e,{Import:()=>import("../../chunks/DropzoneOpener.js")},{},{})}</div>

    
    <div id="step2" class="duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7 "><span${s("class",t,0)}>2. Schedule a Session </span></button>

      
      ${a(r,"LazyMount").$$render(e,{Import:()=>import("../../chunks/PlansSection.js")},{},{})}

      

      

      </div>

    
    <div id="reviews" class="duration-500 mb-[200px] sm:mb-[500px]"><button class="text-5xl font-Poppins w-full flex justify-center"><span${s("class",t,0)}>3. Do Some Reading <span class="text-black">😎 </span></span></button>

      
      ${a(r,"LazyMount").$$render(e,{Import:()=>import("../../chunks/Reviews.js")},{},{})}</div></div>`}








`});export{x as default};
