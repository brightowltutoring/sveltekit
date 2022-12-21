import{c as D,d as I,e as x,a as c,v as w,g as ne,f as U,l as ie,h as Z,j as le}from"../../chunks/index.js";import{i as N,s as F,a as z,n as X,r as E,b as K,c as ee,e as ae,d as de,l as ce}from"../../chunks/store.js";import{w as ue}from"../../chunks/index2.js";import{I as te,L as pe}from"../../chunks/LazyMount.js";import{M as W}from"../../chunks/Modal.js";const A=!1;let j=24;const fe=D((e,o,t,b)=>`<svg aria-label="Sun" id="lightIcon"${I("height",j,0)}${I("width",j,0)} viewBox="${"0 0 "+x(8*j,!0)+" "+x(8*j,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let V=24;const be=D((e,o,t,b)=>`


<svg aria-label="Moon" id="darkIcon"${I("height",V,0)}${I("width",V,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const me={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},he=D((e,o,t,b)=>{let i,s;return s=c(N,a=>i=a),e.css.add(me),s(),`
  <div><button>${i?`${w(fe,"IconSun").$$render(e,{},{},{})}`:`${w(be,"IconMoon").$$render(e,{},{},{})}`}</button></div>`});function oe(){let e=A,o=A,t=["Macintosh","MacIntel","MacPPC","Mac68K"],b=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"],s=null;return t.includes(o)?s="Mac OS":i.includes(o)?s="iOS":b.includes(o)?s="Windows":/Android/.test(e)?s="Android":/Linux/.test(o)&&(s="Linux"),s}function q(){return A}function ge(e="dropzoneCSS",o="/dropzone.css"){if(!document.getElementById(e)){const t=document.createElement("link");t.id=e,t.href=o,t.rel="stylesheet",document.head.appendChild(t)}}const $e=()=>{const e=ne("__svelte__"),o={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(o,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return we(),{}},enumerable:!1}}),o},ve={subscribe(e){return $e().page.subscribe(e)}};function we(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const xe=D((e,o,t,b)=>{let i,s,a,m;i=c(F,n=>n),s=c(z,n=>n),m=c(ve,n=>a=n);let{href:r,content:p,routes:l,btnColorHover:h,icon:$,navIconClicked:g=!1}=o;o.href===void 0&&t.href&&r!==void 0&&t.href(r),o.content===void 0&&t.content&&p!==void 0&&t.content(p),o.routes===void 0&&t.routes&&l!==void 0&&t.routes(l),o.btnColorHover===void 0&&t.btnColorHover&&h!==void 0&&t.btnColorHover(h),o.icon===void 0&&t.icon&&$!==void 0&&t.icon($),o.navIconClicked===void 0&&t.navIconClicked&&g!==void 0&&t.navIconClicked(g);let k,v;do{k=!0;for(let n in l)l[n].isCurrent=l[n].href===a.url.pathname;v=`<a data-sveltekit-preload-data${I("href",r,0)} class="${"block font-Nunito font-thin "+x(` ${h}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${x(p)}`}</a>`}while(!k);return i(),s(),m(),v});function Y(e){return Object.prototype.toString.call(e)==="[object Date]"}function B(e,o,t,b){if(typeof t=="number"||Y(t)){const i=b-t,s=(t-o)/(e.dt||1/60),a=e.opts.stiffness*i,m=e.opts.damping*s,r=(a-m)*e.inv_mass,p=(s+r)*e.dt;return Math.abs(p)<e.opts.precision&&Math.abs(i)<e.opts.precision?b:(e.settled=!1,Y(t)?new Date(t.getTime()+p):t+p)}else{if(Array.isArray(t))return t.map((i,s)=>B(e,o[s],t[s],b[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=B(e,o[s],t[s],b[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,o={}){const t=ue(e),{stiffness:b=.15,damping:i=.8,precision:s=.01}=o;let a,m,r,p=e,l=e,h=1,$=0,g=!1;function k(n,f={}){l=n;const _=r={};return e==null||f.hard||v.stiffness>=1&&v.damping>=1?(g=!0,a=U(),p=n,t.set(e=l),Promise.resolve()):(f.soft&&($=1/((f.soft===!0?.5:+f.soft)*60),h=0),m||(a=U(),g=!1,m=ie(M=>{if(g)return g=!1,m=null,!1;h=Math.min(h+$,1);const T={inv_mass:h,opts:v,settled:!0,dt:(M-a)*60/1e3},y=B(T,p,e,l);return a=M,p=e,t.set(e=y),T.settled&&(m=null),!T.settled})),new Promise(M=>{m.promise.then(()=>{_===r&&M()})}))}const v={set:k,update:(n,f)=>k(n(l,e),f),subscribe:t.subscribe,stiffness:b,damping:i,precision:s};return v}const ye=D((e,o,t,b)=>{let i,s,a,m,r,p,l,h,$,g,k,v,n,f,_,M,T,y;a=c(N,d=>s=d),m=c(X,d=>d),p=c(E,d=>r=d),h=c(K,d=>l=d),g=c(ee,d=>$=d),v=c(ae,d=>k=d),M=c(z,d=>_=d),y=c(F,d=>T=d);let S=ke(1,{stiffness:.1,damping:.25});f=c(S,d=>n=d);let L=0,C="sm:bg-red-300 rounded",P="hover:bg-red-300 ",u=oe()!=="iOS"&&"hidden",se=q(),re=A,O,R;do O=!0,l&&!q()&&(L=s?.75:0,S.set(1+.5*Math.sin($))),l?Z(E,r.login.name="\u{1F680}",r):Z(E,r.login.name="Login",r),i=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${s?"to-[rgb(37,35,91)]":"to-red-200"}`,R=`
<logo-and-navbar class="${"opacity-0 "+x(re,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+x(i,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${I("class",u,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+x(k,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${le(Object.keys(r).slice(1,5),d=>`
      
      <li${I("style",d=="login"&&l&&`transform:scale(${n}); filter:hue-rotate(${L}turn)`,0)}>${w(xe,"Navitem").$$render(e,{href:r[d].href,content:r[d].name,icon:r[d].icon,navIconClicked:r[d].href=="/homework"&&_||r[d].href=="/login"&&T||r[d].isCurrent,routes:r,btnColor:C,btnColorHover:P},{routes:H=>{r=H,O=!1},btnColor:H=>{C=H,O=!1},btnColorHover:H=>{P=H,O=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+x(se,!0)}">${w(he,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!O);return a(),m(),p(),h(),g(),v(),f(),M(),y(),R});async function Me(){if(!globalThis.submitOnce){const{PUBLIC_UPLOAD_ENDPOINT:e}=await import("../../chunks/public.js"),o=e,t=new FormData,b=new File(["foo"],"foo.txt",{type:"text/plain"});t.append("file",b),fetch(o,{method:"POST",body:t}),globalThis.submitOnce=!0}}const _e=D((e,o,t,b)=>{let i,s;return s=c(z,a=>i=a),i&&Me(),s(),`


`});const Te={code:".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",map:null};function Ce(){globalThis.onceBoolean||(setTimeout(()=>{document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"))},25),globalThis.onceBoolean=!0)}const De=D((e,o,t,b)=>{let i,s,a,m,r;a=c(z,n=>s=n),r=c(N,n=>m=n);let{text:p="\u{1F525}"}=o,{textSizeTW:l="text-3xl"}=o,{dimensionsTW:h="w-[65vw] sm:w-[60vw] h-[60vh]"}=o,{brightnessTW:$="brightness-100"}=o,g;async function k(n){console.log("drop it like its \u{1F525}"),ge("dropzoneCSS","/dropzone.css");const{PUBLIC_UPLOAD_ENDPOINT:f}=await import("../../chunks/public.js"),{Dropzone:_}=await import("dropzone");g=new _(n,{url:f,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),v()}function v(){let n=[];g.on("error",f=>f.accepted&&n.push(f)),g.on("queuecomplete",()=>{setTimeout(()=>Z(z,s=!1,s),1e3)}),window==null||window.addEventListener("online",()=>{if(n.length>0)for(const f of n)g.processFile(f),f.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",f.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}return o.text===void 0&&t.text&&p!==void 0&&t.text(p),o.textSizeTW===void 0&&t.textSizeTW&&l!==void 0&&t.textSizeTW(l),o.dimensionsTW===void 0&&t.dimensionsTW&&h!==void 0&&t.dimensionsTW(h),o.brightnessTW===void 0&&t.brightnessTW&&$!==void 0&&t.brightnessTW($),e.css.add(Te),s&&Ce(),i=m?"#1d1c43":"#ddd",a(),r(),`${w(_e,"PostDummyOnce").$$render(e,{},{},{})}


${w(te,"InView").$$render(e,{single:!0,onview:n=>k(n),once:!0,margin:"0px"},{},{default:()=>`<form method="post" style="${"box-shadow: inset 0 -10px 10px "+x(i,!0)+"; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl "+x($,!0)+" "+x(l,!0)+" "+x(h,!0)+" mx-auto group"}"><div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>${x(p)}</div></form>`})}`});let G=800,J=400;const Q=100,Oe=D((e,o,t,b)=>{let i,s,a,m,r,p,l,h,$,g,k,v,n,f,_,M;s=c(K,u=>i=u),m=c(F,u=>a=u),p=c(de,u=>r=u),h=c(ee,u=>l=u),g=c(ce,u=>$=u),v=c(N,u=>k=u),f=c(X,u=>n=u),M=c(z,u=>_=u);let T,y,S=!1,L,C,P;do C=!0,$||(l<10&&(y="top-0"),l>10&&l<G&&(y="top-0 backdrop-blur-3xl duration-1000"),l>G&&r>10&&(y="-top-20 backdrop-blur-3xl duration-200"),r<-100&&(y="top-0 backdrop-blur-3xl duration-700")),$&&(l>=0&&l<J&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),l>J&&r>20&&(y="-bottom-28 duration-400"),r<-30&&(y="bottom-0 backdrop-blur-3xl duration-700")),a&&!i&&setTimeout(()=>{L="opacity-100 transition-opacity duration-100 ease-in"},Q),P=`

<main>${w(W,"Modal").$$render(e,{showModal:S,bgTint:"backdrop-blur-3xl"},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+x(k?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${oe()=="iOS"?`${w(W,"Modal").$$render(e,{showModal:n,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  

  ${w(W,"Modal").$$render(e,{body:!0,bgTint:`backdrop-blur-md opacity-0 ${L}`,showModal:a},{showModal:u=>{a=u,C=!1}},{default:()=>`
    ${w(pe,"LazyMount").$$render(e,{Import:()=>(setTimeout(()=>a=!0,2.5*Q),import("../../chunks/LoginCard.js"))},{},{})}`})}

  ${w(W,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:_},{showModal:u=>{_=u,C=!1}},{default:()=>`${w(De,"Dropzone").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}
    

    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+x(y,!0)+" ease-in-out w-full"}">${w(ye,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">${b.default?b.default({}):""}

    

    
    ${w(te,"InView").$$render(e,{margin:"200px",onview:async()=>T=await import("../../chunks/Footer.js")},{},{default:()=>`${T?`${w(T.default,"FooterComponent.default").$$render(e,{contactLinkClicked:S},{contactLinkClicked:u=>{S=u,C=!1}},{})}`:""}`})}

    

    </div></main>`;while(!C);return s(),m(),p(),h(),g(),v(),f(),M(),P});export{Oe as default};
