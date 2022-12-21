import{c as l,a as d,e as p,d as s,v as a}from"../../chunks/index.js";import{i as c}from"../../chunks/store.js";import{L as i}from"../../chunks/LazyMount.js";const x=l((t,$,u,v)=>{let e,o,n;return n=d(c,r=>o=r),e=`text-transparent bg-clip-text bg-gradient-to-tr ${o?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`,n(),`

${t.head+=`<!-- HEAD_svelte-11qhpc_START -->${t.title="<title>Thinksolve.io \u{1F4AB}</title>",""}<meta property="og:url" content="https://thinksolve.io/"><!-- HEAD_svelte-11qhpc_END -->`,""}



<video loading="lazy" controlslist="nodownload" playsinline autoplay muted loop src="/login-bg-video-blurred.mp4" class="${"absolute -z-10 top-0 object-cover w-11/12 h-screen "+p(o?"invert-[0.95] blur-3xl":"blur-2xl",!0)}"></video>



${`<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
    <div class="h-[60vh] flex justify-center items-center text-center"><div class="grid grid-rows-1"></div></div>

    
    <div id="step1" class="hover:scale-105 duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7"><span${s("class",e,0)}>1. Upload your homework </span></button>

      
      ${a(i,"LazyMount").$$render(t,{Import:()=>import("../../chunks/DropzoneOpener.js")},{},{})}</div>

    
    <div id="step2" class="duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7 "><span${s("class",e,0)}>2. Schedule a Session </span></button>

      
      ${a(i,"LazyMount").$$render(t,{Import:()=>import("../../chunks/PlansSection.js")},{},{})}

      

      

      </div>

    
    <div id="reviews" class="duration-500 mb-[200px] sm:mb-[500px]"><button class="text-5xl font-Poppins w-full flex justify-center"><span${s("class",e,0)}>3. Do Some Reading <span class="text-black">\u{1F60E} </span></span></button>

      
      ${a(i,"LazyMount").$$render(t,{Import:()=>import("../../chunks/Reviews.js")},{},{})}</div></div>`}








`});export{x as default};
