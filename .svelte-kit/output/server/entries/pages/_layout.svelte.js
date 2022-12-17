import{c as S,d as D,e as w,a as d,v as p,g as ne,f as B,l as ie,h as E,j as K,m as le}from"../../chunks/index.js";import{i as V,s as W,a as F,n as ee,r as z,b as ae,c as te,e as de,d as ce,l as ue}from"../../chunks/store.js";import{g as oe,i as Y,b as be}from"../../chunks/utils.js";import{w as fe}from"../../chunks/index2.js";import{I as se}from"../../chunks/InView.js";import{M as N}from"../../chunks/Modal.js";let R=24;const $e=S((e,i,t,$)=>`<svg aria-label="Sun" id="lightIcon"${D("height",R,0)}${D("width",R,0)} viewBox="${"0 0 "+w(8*R,!0)+" "+w(8*R,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let G=24;const pe=S((e,i,t,$)=>`


<svg aria-label="Moon" id="darkIcon"${D("height",G,0)}${D("width",G,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const me={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},ge=S((e,i,t,$)=>{let r,o;return o=d(V,l=>r=l),e.css.add(me),o(),`
  <div><button>${r?`${p($e,"IconSun").$$render(e,{},{},{})}`:`${p(pe,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),he=()=>{const e=ne("__svelte__"),i={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(i,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return ve(),{}},enumerable:!1}}),i},re={subscribe(e){return he().page.subscribe(e)}};function ve(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ke=S((e,i,t,$)=>{let r,o,l,f;r=d(W,u=>u),o=d(F,u=>u),f=d(re,u=>l=u);let{href:n,content:b,routes:c,btnColorHover:m,icon:g,navIconClicked:h=!1}=i;i.href===void 0&&t.href&&n!==void 0&&t.href(n),i.content===void 0&&t.content&&b!==void 0&&t.content(b),i.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),i.btnColorHover===void 0&&t.btnColorHover&&m!==void 0&&t.btnColorHover(m),i.icon===void 0&&t.icon&&g!==void 0&&t.icon(g),i.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let x,v;do{x=!0;for(let u in c)c[u].isCurrent=c[u].href===l.url.pathname;v=`<a data-sveltekit-preload-data${D("href",n,0)} class="${"block font-Nunito font-thin "+w(` ${m}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${w(b)}`}</a>`}while(!x);return r(),o(),f(),v});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function P(e,i,t,$){if(typeof t=="number"||J(t)){const r=$-t,o=(t-i)/(e.dt||1/60),l=e.opts.stiffness*r,f=e.opts.damping*o,n=(l-f)*e.inv_mass,b=(o+n)*e.dt;return Math.abs(b)<e.opts.precision&&Math.abs(r)<e.opts.precision?$:(e.settled=!1,J(t)?new Date(t.getTime()+b):t+b)}else{if(Array.isArray(t))return t.map((r,o)=>P(e,i[o],t[o],$[o]));if(typeof t=="object"){const r={};for(const o in t)r[o]=P(e,i[o],t[o],$[o]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function we(e,i={}){const t=fe(e),{stiffness:$=.15,damping:r=.8,precision:o=.01}=i;let l,f,n,b=e,c=e,m=1,g=0,h=!1;function x(u,k={}){c=u;const C=n={};return e==null||k.hard||v.stiffness>=1&&v.damping>=1?(h=!0,l=B(),b=u,t.set(e=c),Promise.resolve()):(k.soft&&(g=1/((k.soft===!0?.5:+k.soft)*60),m=0),f||(l=B(),h=!1,f=ie(M=>{if(h)return h=!1,f=null,!1;m=Math.min(m+g,1);const _={inv_mass:m,opts:v,settled:!0,dt:(M-l)*60/1e3},L=P(_,b,e,c);return l=M,b=e,t.set(e=L),_.settled&&(f=null),!_.settled})),new Promise(M=>{f.promise.then(()=>{C===n&&M()})}))}const v={set:x,update:(u,k)=>x(u(c,e),k),subscribe:t.subscribe,stiffness:$,damping:r,precision:o};return v}const xe=S((e,i,t,$)=>{let r,o,l,f,n,b,c,m,g,h,x,v,u,k,C,M,_,L;l=d(V,a=>o=a),f=d(ee,a=>a),b=d(z,a=>n=a),m=d(ae,a=>c=a),h=d(te,a=>g=a),v=d(de,a=>x=a),M=d(F,a=>C=a),L=d(W,a=>_=a);let H=we(1,{stiffness:.1,damping:.25});k=d(H,a=>u=a);let y=0,j="sm:bg-red-300 rounded",I="hover:bg-red-300 ",A=oe()!=="iOS"&&"hidden",s=Y(),Z=be,T,q;do T=!0,c&&!Y()&&(y=o?.75:0,H.set(1+.5*Math.sin(g))),c?E(z,n.login.name="\u{1F680}",n):E(z,n.login.name="Login",n),r=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,q=`
<logo-and-navbar class="${"opacity-0 "+w(Z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+w(r,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${D("class",A,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+w(x,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${K(Object.keys(n).slice(1,5),a=>`
      
      <li${D("style",a=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${y}turn)`,0)}>${p(ke,"Navitem").$$render(e,{href:n[a].href,content:n[a].name,icon:n[a].icon,navIconClicked:n[a].href=="/homework"&&C||n[a].href=="/login"&&_||n[a].isCurrent,routes:n,btnColor:j,btnColorHover:I},{routes:O=>{n=O,T=!1},btnColor:O=>{j=O,T=!1},btnColorHover:O=>{I=O,T=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+w(s,!0)}">${p(ge,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!T);return l(),f(),b(),m(),h(),v(),k(),M(),L(),q}),Q=S((e,i,t,$)=>{let{Import:r=async()=>{}}=i,o;const l=async()=>o=(await r()).default;return i.Import===void 0&&t.Import&&r!==void 0&&t.Import(r),`


${p(se,"InView").$$render(e,{onview:l},{},{default:()=>`${p(o||le,"svelte:component").$$render(e,Object.assign(i),{},{})}`})}`});let U=800,X=400;const Te=S((e,i,t,$)=>{let r,o,l,f,n,b,c,m,g,h,x,v,u,k,C,M,_,L;o=d(ce,s=>r=s),f=d(te,s=>l=s),b=d(ue,s=>n=s),m=d(re,s=>c=s),h=d(z,s=>g=s),v=d(V,s=>x=s),k=d(ee,s=>u=s),M=d(W,s=>C=s),L=d(F,s=>_=s);let H,y,j=!1,I,A;do I=!0,n||(l<10&&(y="top-0"),l>10&&l<U&&(y="top-0 backdrop-blur-3xl duration-1000"),l>U&&r>10&&(y="-top-20 backdrop-blur-3xl duration-200"),r<-100&&(y="top-0 backdrop-blur-3xl duration-700")),n&&(l>=0&&l<X&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),l>X&&r>20&&(y="-bottom-28 duration-400"),r<-30&&(y="bottom-0 backdrop-blur-3xl duration-700")),A=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let s=c.route.id.slice(1);return`

    ${s==""?`${e.title=`<title>${w(g.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${K(Object.keys(g).slice(1),Z=>{let T=g[Z].title;return`

        ${s.startsWith(Z)?`${e.title=`<title>${w(T)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${p(N,"Modal").$$render(e,{showModal:j,bgTint:"backdrop-blur-3xl"},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+w(x?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${oe()=="iOS"?`

    ${p(N,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${p(N,"Modal").$$render(e,{bgTint:"backdrop-blur-md",opacityEase:!0,showModal:C},{showModal:s=>{C=s,I=!1}},{default:()=>`
    

    
    

    ${p(Q,"LazyMount2").$$render(e,{Import:async()=>(setTimeout(()=>C=!0,25),await import("../../chunks/LoginCard.js"))},{},{})}
    `})}

  ${p(N,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:_},{showModal:s=>{_=s,I=!1}},{default:()=>`
    

    
    ${p(Q,"LazyMount2").$$render(e,{Import:async()=>await import("../../chunks/Dropzone.js"),textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}

    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+w(y,!0)+" ease-in-out w-full"}">
    ${p(xe,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${$.default?$.default({}):""}

    

    
    ${p(se,"InView").$$render(e,{margin:"400px",onview:async()=>H=await import("../../chunks/Footer.js")},{},{default:()=>`${H?`${p(H.default,"FooterComponent.default").$$render(e,{contactLinkClicked:j},{contactLinkClicked:s=>{j=s,I=!1}},{})}`:""}`})}

    

    </div></main>`;while(!I);return o(),f(),b(),m(),h(),v(),k(),M(),L(),A});export{Te as default};
