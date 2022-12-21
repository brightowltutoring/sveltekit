import{g as le,c as D,d as I,e as g,a as c,v as k,f as V,l as ae,h as F,j as ee}from"../../chunks/index.js";import{i as B,s as G,a as P,n as te,r as R,b as oe,c as se,e as de,d as ce,l as ue}from"../../chunks/store.js";import{I as re,L as fe}from"../../chunks/LazyMount.js";import{M as N}from"../../chunks/Modal.js";import{B as pe}from"../../chunks/prod-ssr.js";import{w as me}from"../../chunks/index2.js";const Z=pe;const be=()=>{const e=le("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ne={subscribe(e){return be().page.subscribe(e)}};let j=24;const $e=D((e,s,t,m)=>`<svg aria-label="Sun" id="lightIcon"${I("height",j,0)}${I("width",j,0)} viewBox="${"0 0 "+g(8*j,!0)+" "+g(8*j,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let q=24;const he=D((e,s,t,m)=>`


<svg aria-label="Moon" id="darkIcon"${I("height",q,0)}${I("width",q,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const ge={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},ve=D((e,s,t,m)=>{let a,o;return o=c(B,u=>a=u),e.css.add(ge),o(),`
  <div><button>${a?`${k($e,"IconSun").$$render(e,{},{},{})}`:`${k(he,"IconMoon").$$render(e,{},{},{})}`}</button></div>`});function ie(){let e=Z,s=Z,t=["Macintosh","MacIntel","MacPPC","Mac68K"],m=["Win32","Win64","Windows","WinCE"],a=["iPhone","iPad","iPod"],o=null;return t.includes(s)?o="Mac OS":a.includes(s)?o="iOS":m.includes(s)?o="Windows":/Android/.test(e)?o="Android":/Linux/.test(s)&&(o="Linux"),o}function Y(){return Z}function we(e="dropzoneCSS",s="/dropzone.css"){if(!document.getElementById(e)){const t=document.createElement("link");t.id=e,t.href=s,t.rel="stylesheet",document.head.appendChild(t)}}const xe=D((e,s,t,m)=>{let a,o,u,b;a=c(G,r=>r),o=c(P,r=>r),b=c(ne,r=>u=r);let{href:n,content:f,routes:d,btnColorHover:$,icon:v,navIconClicked:h=!1}=s;s.href===void 0&&t.href&&n!==void 0&&t.href(n),s.content===void 0&&t.content&&f!==void 0&&t.content(f),s.routes===void 0&&t.routes&&d!==void 0&&t.routes(d),s.btnColorHover===void 0&&t.btnColorHover&&$!==void 0&&t.btnColorHover($),s.icon===void 0&&t.icon&&v!==void 0&&t.icon(v),s.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let w,x;do{w=!0;for(let r in d)d[r].isCurrent=d[r].href===u.url.pathname;x=`<a data-sveltekit-preload-data${I("href",n,0)} class="${"block font-Nunito font-thin "+g(` ${$}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${g(f)}`}</a>`}while(!w);return a(),o(),b(),x});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function U(e,s,t,m){if(typeof t=="number"||J(t)){const a=m-t,o=(t-s)/(e.dt||1/60),u=e.opts.stiffness*a,b=e.opts.damping*o,n=(u-b)*e.inv_mass,f=(o+n)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(a)<e.opts.precision?m:(e.settled=!1,J(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((a,o)=>U(e,s[o],t[o],m[o]));if(typeof t=="object"){const a={};for(const o in t)a[o]=U(e,s[o],t[o],m[o]);return a}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,s={}){const t=me(e),{stiffness:m=.15,damping:a=.8,precision:o=.01}=s;let u,b,n,f=e,d=e,$=1,v=0,h=!1;function w(r,p={}){d=r;const _=n={};return e==null||p.hard||x.stiffness>=1&&x.damping>=1?(h=!0,u=V(),f=r,t.set(e=d),Promise.resolve()):(p.soft&&(v=1/((p.soft===!0?.5:+p.soft)*60),$=0),b||(u=V(),h=!1,b=ae(y=>{if(h)return h=!1,b=null,!1;$=Math.min($+v,1);const T={inv_mass:$,opts:x,settled:!0,dt:(y-u)*60/1e3},S=U(T,f,e,d);return u=y,f=e,t.set(e=S),T.settled&&(b=null),!T.settled})),new Promise(y=>{b.promise.then(()=>{_===n&&y()})}))}const x={set:w,update:(r,p)=>w(r(d,e),p),subscribe:t.subscribe,stiffness:m,damping:a,precision:o};return x}const ye=D((e,s,t,m)=>{let a,o,u,b,n,f,d,$,v,h,w,x,r,p,_,y,T,S;u=c(B,l=>o=l),b=c(te,l=>l),f=c(R,l=>n=l),$=c(oe,l=>d=l),h=c(se,l=>v=l),x=c(de,l=>w=l),y=c(P,l=>_=l),S=c(G,l=>T=l);let H=ke(1,{stiffness:.1,damping:.25});p=c(H,l=>r=l);let A=0,O="sm:bg-red-300 rounded",M="hover:bg-red-300 ",W=ie()!=="iOS"&&"hidden",E=Y(),z=Z,C,i;do C=!0,d&&!Y()&&(A=o?.75:0,H.set(1+.5*Math.sin(v))),d?F(R,n.login.name="🚀",n):F(R,n.login.name="Login",n),a=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,i=`
<logo-and-navbar class="${"opacity-0 "+g(z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+g(a,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${I("class",W,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+g(w,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${ee(Object.keys(n).slice(1,5),l=>`
      
      <li${I("style",l=="login"&&d&&`transform:scale(${r}); filter:hue-rotate(${A}turn)`,0)}>${k(xe,"Navitem").$$render(e,{href:n[l].href,content:n[l].name,icon:n[l].icon,navIconClicked:n[l].href=="/homework"&&_||n[l].href=="/login"&&T||n[l].isCurrent,routes:n,btnColor:O,btnColorHover:M},{routes:L=>{n=L,C=!1},btnColor:L=>{O=L,C=!1},btnColorHover:L=>{M=L,C=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+g(E,!0)}">${k(ve,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!C);return u(),b(),f(),$(),h(),x(),p(),y(),S(),i});async function Me(){if(!globalThis.submitOnce){const{PUBLIC_UPLOAD_ENDPOINT:e}=await import("../../chunks/public.js"),s=e,t=new FormData,m=new File(["foo"],"foo.txt",{type:"text/plain"});t.append("file",m),fetch(s,{method:"POST",body:t}),globalThis.submitOnce=!0}}const _e=D((e,s,t,m)=>{let a,o;return o=c(P,u=>a=u),a&&Me(),o(),`


`});const Te={code:".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",map:null};function Ce(){globalThis.onceBoolean||(setTimeout(()=>{document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"))},25),globalThis.onceBoolean=!0)}const De=D((e,s,t,m)=>{let a,o,u,b,n;u=c(P,r=>o=r),n=c(B,r=>b=r);let{text:f="🔥"}=s,{textSizeTW:d="text-3xl"}=s,{dimensionsTW:$="w-[65vw] sm:w-[60vw] h-[60vh]"}=s,{brightnessTW:v="brightness-100"}=s,h;async function w(r){console.log("drop it like its 🔥"),we("dropzoneCSS","/dropzone.css");const{PUBLIC_UPLOAD_ENDPOINT:p}=await import("../../chunks/public.js"),{Dropzone:_}=await import("dropzone");h=new _(r,{url:p,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),x()}function x(){let r=[];h.on("error",p=>p.accepted&&r.push(p)),h.on("queuecomplete",()=>{setTimeout(()=>F(P,o=!1,o),1e3)}),window?.addEventListener("online",()=>{if(r.length>0)for(const p of r)h.processFile(p),p.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",p.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}return s.text===void 0&&t.text&&f!==void 0&&t.text(f),s.textSizeTW===void 0&&t.textSizeTW&&d!==void 0&&t.textSizeTW(d),s.dimensionsTW===void 0&&t.dimensionsTW&&$!==void 0&&t.dimensionsTW($),s.brightnessTW===void 0&&t.brightnessTW&&v!==void 0&&t.brightnessTW(v),e.css.add(Te),o&&Ce(),a=b?"#1d1c43":"#ddd",u(),n(),`${k(_e,"PostDummyOnce").$$render(e,{},{},{})}


${k(re,"InView").$$render(e,{single:!0,onview:r=>w(r),once:!0,margin:"0px"},{},{default:()=>`<form method="post" style="${"box-shadow: inset 0 -10px 10px "+g(a,!0)+"; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+g(v,!0)+" "+g(d,!0)+" "+g($,!0)+" mx-auto group"}"><div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>${g(f)}</div></form>`})}`});let Q=800,X=400;const K=100,Pe=D((e,s,t,m)=>{let a,o,u,b,n,f,d,$,v,h,w,x,r,p,_,y,T,S,H,A;o=c(oe,i=>a=i),b=c(G,i=>u=i),f=c(ce,i=>n=i),$=c(se,i=>d=i),h=c(ue,i=>v=i),x=c(ne,i=>w=i),p=c(R,i=>r=i),y=c(B,i=>_=i),S=c(te,i=>T=i),A=c(P,i=>H=i);let O,M,W=!1,E,z,C;do z=!0,v||(d<10&&(M="top-0"),d>10&&d<Q&&(M="top-0 backdrop-blur-3xl duration-1000"),d>Q&&n>10&&(M="-top-20 backdrop-blur-3xl duration-200"),n<-100&&(M="top-0 backdrop-blur-3xl duration-700")),v&&(d>=0&&d<X&&(M="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),d>X&&n>20&&(M="-bottom-28 duration-400"),n<-30&&(M="bottom-0 backdrop-blur-3xl duration-700")),u&&!a&&setTimeout(()=>{E="opacity-100 transition-opacity duration-100 ease-in"},K),C=`${e.head+=`<!-- HEAD_svelte-1le8ayz_START --><link rel="manifest" href="/manifest.json">${w.status==200?(()=>{let i=w.route.id.slice(1);return`

    ${i==""?`${e.title=`<title>${g(r.home.title)}</title>`,""}

      <!-- HTML_TAG_START -->${r.home.meta}<!-- HTML_TAG_END -->
      
      `:`${ee(Object.keys(r).slice(1),l=>{let L=r[l].title;return`

        ${i.startsWith(l)?`${e.title=`<title>${g(L)}</title>`,""}
          
          ${r[l].meta?`<!-- HTML_TAG_START -->${r[l].meta}<!-- HTML_TAG_END -->`:""}`:""}`})}`}`})():`${w.status==404?`${e.title="<title>Oops 💩</title>",""}`:""}`}<!-- HEAD_svelte-1le8ayz_END -->`,""}



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

  

  

  ${k(N,"Modal").$$render(e,{body:!0,bgTint:`backdrop-blur-md opacity-0 ${E}`,showModal:u},{showModal:i=>{u=i,z=!1}},{default:()=>`
    ${k(fe,"LazyMount").$$render(e,{Import:()=>(setTimeout(()=>u=!0,2.5*K),import("../../chunks/LoginCard.js"))},{},{})}`})}

  ${k(N,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:H},{showModal:i=>{H=i,z=!1}},{default:()=>`${k(De,"Dropzone").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}
    

    `})}

  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+g(M,!0)+" ease-in-out w-full"}">${k(ye,"Navbar").$$render(e,{},{},{})}</div>

  <div class="px-[7%] pt-32 md:block">${m.default?m.default({}):""}

    

    ${k(re,"InView").$$render(e,{margin:"200px",onview:async()=>O=await import("../../chunks/Footer.js")},{},{default:()=>`${O?`${k(O.default,"FooterComponent.default").$$render(e,{contactLinkClicked:W},{contactLinkClicked:i=>{W=i,z=!1}},{})}`:""}`})}</div></main>`;while(!z);return o(),b(),f(),$(),h(),x(),p(),y(),S(),A(),C});export{Pe as default};
