import{g as le,c as S,d as D,e as g,a as u,v as k,f as V,l as ae,h as Z,j as ee}from"../../chunks/index.js";import{i as F,s as U,a as H,n as te,r as R,b as oe,c as se,e as de,d as ce,l as ue}from"../../chunks/store.js";import{I as re,L as me}from"../../chunks/LazyMount.js";import{M as N}from"../../chunks/Modal.js";import{B as fe}from"../../chunks/prod-ssr.js";import{w as pe}from"../../chunks/index2.js";const B=fe;const be=()=>{const e=le("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ne={subscribe(e){return be().page.subscribe(e)}};let j=24;const $e=S((e,s,t,$)=>`<svg aria-label="Sun" id="lightIcon"${D("height",j,0)}${D("width",j,0)} viewBox="${"0 0 "+g(8*j,!0)+" "+g(8*j,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let q=24;const he=S((e,s,t,$)=>`


<svg aria-label="Moon" id="darkIcon"${D("height",q,0)}${D("width",q,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const ge={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},ve=S((e,s,t,$)=>{let d,o;return o=u(F,c=>d=c),e.css.add(ge),o(),`
  <div><button>${d?`${k($e,"IconSun").$$render(e,{},{},{})}`:`${k(he,"IconMoon").$$render(e,{},{},{})}`}</button></div>`});function ie(){let e=B,s=B,t=["Macintosh","MacIntel","MacPPC","Mac68K"],$=["Win32","Win64","Windows","WinCE"],d=["iPhone","iPad","iPod"],o=null;return t.includes(s)?o="Mac OS":d.includes(s)?o="iOS":$.includes(s)?o="Windows":/Android/.test(e)?o="Android":/Linux/.test(s)&&(o="Linux"),o}function Y(){return B}function we(e="dropzoneCSS",s="/dropzone.css"){if(!document.getElementById(e)){const t=document.createElement("link");t.id=e,t.href=s,t.rel="stylesheet",document.head.appendChild(t)}}const xe=S((e,s,t,$)=>{let d,o,c,f;d=u(U,n=>n),o=u(H,n=>n),f=u(ne,n=>c=n);let{href:r,content:m,routes:i,btnColorHover:b,icon:v,navIconClicked:h=!1}=s;s.href===void 0&&t.href&&r!==void 0&&t.href(r),s.content===void 0&&t.content&&m!==void 0&&t.content(m),s.routes===void 0&&t.routes&&i!==void 0&&t.routes(i),s.btnColorHover===void 0&&t.btnColorHover&&b!==void 0&&t.btnColorHover(b),s.icon===void 0&&t.icon&&v!==void 0&&t.icon(v),s.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let w,x;do{w=!0;for(let n in i)i[n].isCurrent=i[n].href===c.url.pathname;x=`<a data-sveltekit-preload-data${D("href",r,0)} class="${"block font-Nunito font-thin "+g(` ${b}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${g(m)}`}</a>`}while(!w);return d(),o(),f(),x});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function G(e,s,t,$){if(typeof t=="number"||J(t)){const d=$-t,o=(t-s)/(e.dt||1/60),c=e.opts.stiffness*d,f=e.opts.damping*o,r=(c-f)*e.inv_mass,m=(o+r)*e.dt;return Math.abs(m)<e.opts.precision&&Math.abs(d)<e.opts.precision?$:(e.settled=!1,J(t)?new Date(t.getTime()+m):t+m)}else{if(Array.isArray(t))return t.map((d,o)=>G(e,s[o],t[o],$[o]));if(typeof t=="object"){const d={};for(const o in t)d[o]=G(e,s[o],t[o],$[o]);return d}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,s={}){const t=pe(e),{stiffness:$=.15,damping:d=.8,precision:o=.01}=s;let c,f,r,m=e,i=e,b=1,v=0,h=!1;function w(n,p={}){i=n;const _=r={};return e==null||p.hard||x.stiffness>=1&&x.damping>=1?(h=!0,c=V(),m=n,t.set(e=i),Promise.resolve()):(p.soft&&(v=1/((p.soft===!0?.5:+p.soft)*60),b=0),f||(c=V(),h=!1,f=ae(y=>{if(h)return h=!1,f=null,!1;b=Math.min(b+v,1);const T={inv_mass:b,opts:x,settled:!0,dt:(y-c)*60/1e3},L=G(T,m,e,i);return c=y,m=e,t.set(e=L),T.settled&&(f=null),!T.settled})),new Promise(y=>{f.promise.then(()=>{_===r&&y()})}))}const x={set:w,update:(n,p)=>w(n(i,e),p),subscribe:t.subscribe,stiffness:$,damping:d,precision:o};return x}const ye=S((e,s,t,$)=>{let d,o,c,f,r,m,i,b,v,h,w,x,n,p,_,y,T,L;c=u(F,a=>o=a),f=u(te,a=>a),m=u(R,a=>r=a),b=u(oe,a=>i=a),h=u(se,a=>v=a),x=u(de,a=>w=a),y=u(H,a=>_=a),L=u(U,a=>T=a);let O=ke(1,{stiffness:.1,damping:.25});p=u(O,a=>n=a);let A=0,P="sm:bg-red-300 rounded",M="hover:bg-red-300 ",W=ie()!=="iOS"&&"hidden",E=Y(),I=B,C,l;do C=!0,i&&!Y()&&(A=o?.75:0,O.set(1+.5*Math.sin(v))),i?Z(R,r.login.name="🚀",r):Z(R,r.login.name="Login",r),d=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,l=`
<logo-and-navbar class="${"opacity-0 "+g(I,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+g(d,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${D("class",W,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+g(w,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${ee(Object.keys(r).slice(1,5),a=>`
      
      <li${D("style",a=="login"&&i&&`transform:scale(${n}); filter:hue-rotate(${A}turn)`,0)}>${k(xe,"Navitem").$$render(e,{href:r[a].href,content:r[a].name,icon:r[a].icon,navIconClicked:r[a].href=="/homework"&&_||r[a].href=="/login"&&T||r[a].isCurrent,routes:r,btnColor:P,btnColorHover:M},{routes:z=>{r=z,C=!1},btnColor:z=>{P=z,C=!1},btnColorHover:z=>{M=z,C=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+g(E,!0)}">${k(ve,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!C);return c(),f(),m(),b(),h(),x(),p(),y(),L(),l}),Me=S((e,s,t,$)=>{let d,o;o=u(H,r=>d=r);let c="";async function f(){if(!globalThis.submitOnce){const{PUBLIC_UPLOAD_ENDPOINT:r,PUBLIC_GOOGLE_APP_SCRIPT:m}=await import("../../chunks/public.js"),i=new FormData,b=new File(["foo"],"foo.txt",{type:"text/plain"});i.append("file",b),fetch(r,{method:"POST",body:i}),setTimeout(()=>c=m,5e3),globalThis.submitOnce=!0}}return d&&f(),o(),`<iframe title="Executes 'moveNamedFilesToFolder' Google App script via iFrame src" style="height: 0vh; width: 0vw"${D("src",c,0)} frameborder="0"></iframe>`});const _e={code:".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",map:null};function Te(){globalThis.onceBoolean||(setTimeout(()=>{document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"))},50),globalThis.onceBoolean=!0)}const Ce=S((e,s,t,$)=>{let d,o,c,f,r;c=u(H,n=>o=n),r=u(F,n=>f=n);let{text:m="🔥"}=s,{textSizeTW:i="text-3xl"}=s,{dimensionsTW:b="w-[65vw] sm:w-[60vw] h-[60vh]"}=s,{brightnessTW:v="brightness-100"}=s,h;async function w(n){console.log("drop it like its 🔥"),we("dropzoneCSS","/dropzone.css");const{PUBLIC_UPLOAD_ENDPOINT:p}=await import("../../chunks/public.js"),{Dropzone:_}=await import("dropzone");h=new _(n,{url:p,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),x()}function x(){let n=[];h.on("error",p=>p.accepted&&n.push(p)),h.on("queuecomplete",()=>{setTimeout(()=>Z(H,o=!1,o),1e3)}),window?.addEventListener("online",()=>{if(n.length>0)for(const p of n)h.processFile(p),p.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",p.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}return s.text===void 0&&t.text&&m!==void 0&&t.text(m),s.textSizeTW===void 0&&t.textSizeTW&&i!==void 0&&t.textSizeTW(i),s.dimensionsTW===void 0&&t.dimensionsTW&&b!==void 0&&t.dimensionsTW(b),s.brightnessTW===void 0&&t.brightnessTW&&v!==void 0&&t.brightnessTW(v),e.css.add(_e),o&&Te(),d=f?"#1d1c43":"#ddd",c(),r(),`${k(Me,"PostDummyOnce").$$render(e,{},{},{})}


${k(re,"InView").$$render(e,{single:!0,onview:n=>w(n),once:!0,margin:"0px"},{},{default:()=>`<form method="post" style="${"box-shadow: inset 0 -10px 10px "+g(d,!0)+"; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+g(v,!0)+" "+g(i,!0)+" "+g(b,!0)+" mx-auto group"}"><div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>${g(m)}</div></form>`})}`});let Q=800,X=400;const K=100,Pe=S((e,s,t,$)=>{let d,o,c,f,r,m,i,b,v,h,w,x,n,p,_,y,T,L,O,A;o=u(oe,l=>d=l),f=u(U,l=>c=l),m=u(ce,l=>r=l),b=u(se,l=>i=l),h=u(ue,l=>v=l),x=u(ne,l=>w=l),p=u(R,l=>n=l),y=u(F,l=>_=l),L=u(te,l=>T=l),A=u(H,l=>O=l);let P,M,W=!1,E,I,C;do I=!0,v||(i<10&&(M="top-0"),i>10&&i<Q&&(M="top-0 backdrop-blur-3xl duration-1000"),i>Q&&r>10&&(M="-top-20 backdrop-blur-3xl duration-200"),r<-100&&(M="top-0 backdrop-blur-3xl duration-700")),v&&(i>=0&&i<X&&(M="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),i>X&&r>20&&(M="-bottom-28 duration-400"),r<-30&&(M="bottom-0 backdrop-blur-3xl duration-700")),c&&!d&&setTimeout(()=>{E="opacity-100 transition-opacity duration-100 ease-in"},K),C=`${e.head+=`<!-- HEAD_svelte-1le8ayz_START --><link rel="manifest" href="/manifest.json">${w.status==200?(()=>{let l=w.route.id.slice(1);return`

    ${l==""?`${e.title=`<title>${g(n.home.title)}</title>`,""}

      <!-- HTML_TAG_START -->${n.home.meta}<!-- HTML_TAG_END -->
      
      `:`${ee(Object.keys(n).slice(1),a=>{let z=n[a].title;return`

        ${l.startsWith(a)?`${e.title=`<title>${g(z)}</title>`,""}
          
          ${n[a].meta?`<!-- HTML_TAG_START -->${n[a].meta}<!-- HTML_TAG_END -->`:""}`:""}`})}`}`})():`${w.status==404?`${e.title="<title>Oops 💩</title>",""}`:""}`}<!-- HEAD_svelte-1le8ayz_END -->`,""}



<main>${k(N,"Modal").$$render(e,{showModal:W,bgTint:"backdrop-blur-3xl"},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+g(_?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${ie()=="iOS"?`${k(N,"Modal").$$render(e,{showModal:T,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; 🚀
          </li></ul>`})}`:""}

  

  

  ${k(N,"Modal").$$render(e,{body:!0,bgTint:`backdrop-blur-md opacity-0 ${E}`,showModal:c},{showModal:l=>{c=l,I=!1}},{default:()=>`
    ${k(me,"LazyMount").$$render(e,{Import:()=>(setTimeout(()=>c=!0,2.5*K),import("../../chunks/LoginCard.js"))},{},{})}`})}

  ${k(N,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:O},{showModal:l=>{O=l,I=!1}},{default:()=>`${k(Ce,"Dropzone").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}
    

    `})}

  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+g(M,!0)+" ease-in-out w-full"}">${k(ye,"Navbar").$$render(e,{},{},{})}</div>

  <div class="px-[7%] pt-32 md:block">${$.default?$.default({}):""}

    

    ${k(re,"InView").$$render(e,{margin:"200px",onview:async()=>P=await import("../../chunks/Footer.js")},{},{default:()=>`${P?`${k(P.default,"FooterComponent.default").$$render(e,{contactLinkClicked:W},{contactLinkClicked:l=>{W=l,I=!1}},{})}`:""}`})}</div></main>`;while(!I);return o(),f(),m(),b(),h(),x(),p(),y(),L(),A(),C});export{Pe as default};
