import{c as j,d as S,e as x,a as d,v,g as se,f as B,l as re,h as Y,j as X}from"../../chunks/index.js";import{g as K,i as E,b as ne}from"../../chunks/utils.js";import{i as V,s as W,a as F,n as ee,r as P,b as ie,c as te,e as le,d as ae,l as de}from"../../chunks/store.js";import{w as ce}from"../../chunks/index2.js";import{I as ue}from"../../chunks/InView.js";import{M as N}from"../../chunks/Modal.js";import{L as be}from"../../chunks/LoginCard.js";import{L as $e}from"../../chunks/LazyMount2.js";let R=24;const fe=j((e,a,t,f)=>`<svg aria-label="Sun" id="lightIcon"${S("height",R,0)}${S("width",R,0)} viewBox="${"0 0 "+x(8*R,!0)+" "+x(8*R,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let G=24;const pe=j((e,a,t,f)=>`


<svg aria-label="Moon" id="darkIcon"${S("height",G,0)}${S("width",G,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const me={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},ge=j((e,a,t,f)=>{let i,r;return r=d(V,l=>i=l),e.css.add(me),r(),`
  <div><button>${i?`${v(fe,"IconSun").$$render(e,{},{},{})}`:`${v(pe,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),he=()=>{const e=se("__svelte__"),a={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(a,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return ve(),{}},enumerable:!1}}),a},oe={subscribe(e){return he().page.subscribe(e)}};function ve(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ke=j((e,a,t,f)=>{let i,r,l,$;i=d(W,u=>u),r=d(F,u=>u),$=d(oe,u=>l=u);let{href:s,content:b,routes:c,btnColorHover:p,icon:m,navIconClicked:g=!1}=a;a.href===void 0&&t.href&&s!==void 0&&t.href(s),a.content===void 0&&t.content&&b!==void 0&&t.content(b),a.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),a.btnColorHover===void 0&&t.btnColorHover&&p!==void 0&&t.btnColorHover(p),a.icon===void 0&&t.icon&&m!==void 0&&t.icon(m),a.navIconClicked===void 0&&t.navIconClicked&&g!==void 0&&t.navIconClicked(g);let w,h;do{w=!0;for(let u in c)c[u].isCurrent=c[u].href===l.url.pathname;h=`<a data-sveltekit-preload-data${S("href",s,0)} class="${"block font-Nunito font-thin "+x(` ${p}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${x(b)}`}</a>`}while(!w);return i(),r(),$(),h});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function z(e,a,t,f){if(typeof t=="number"||J(t)){const i=f-t,r=(t-a)/(e.dt||1/60),l=e.opts.stiffness*i,$=e.opts.damping*r,s=(l-$)*e.inv_mass,b=(r+s)*e.dt;return Math.abs(b)<e.opts.precision&&Math.abs(i)<e.opts.precision?f:(e.settled=!1,J(t)?new Date(t.getTime()+b):t+b)}else{if(Array.isArray(t))return t.map((i,r)=>z(e,a[r],t[r],f[r]));if(typeof t=="object"){const i={};for(const r in t)i[r]=z(e,a[r],t[r],f[r]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function xe(e,a={}){const t=ce(e),{stiffness:f=.15,damping:i=.8,precision:r=.01}=a;let l,$,s,b=e,c=e,p=1,m=0,g=!1;function w(u,k={}){c=u;const C=s={};return e==null||k.hard||h.stiffness>=1&&h.damping>=1?(g=!0,l=B(),b=u,t.set(e=c),Promise.resolve()):(k.soft&&(m=1/((k.soft===!0?.5:+k.soft)*60),p=0),$||(l=B(),g=!1,$=re(M=>{if(g)return g=!1,$=null,!1;p=Math.min(p+m,1);const y={inv_mass:p,opts:h,settled:!0,dt:(M-l)*60/1e3},L=z(y,b,e,c);return l=M,b=e,t.set(e=L),y.settled&&($=null),!y.settled})),new Promise(M=>{$.promise.then(()=>{C===s&&M()})}))}const h={set:w,update:(u,k)=>w(u(c,e),k),subscribe:t.subscribe,stiffness:f,damping:i,precision:r};return h}const we=j((e,a,t,f)=>{let i,r,l,$,s,b,c,p,m,g,w,h,u,k,C,M,y,L;l=d(V,n=>r=n),$=d(ee,n=>n),b=d(P,n=>s=n),p=d(ie,n=>c=n),g=d(te,n=>m=n),h=d(le,n=>w=n),M=d(F,n=>C=n),L=d(W,n=>y=n);let H=xe(1,{stiffness:.1,damping:.25});k=d(H,n=>u=n);let _=0,T="sm:bg-red-300 rounded",I="hover:bg-red-300 ",O=K()!=="iOS"&&"hidden",o=E(),Z=ne,D,q;do D=!0,c&&!E()&&(_=r?.75:0,H.set(1+.5*Math.sin(m))),c?Y(P,s.login.name="\u{1F680}",s):Y(P,s.login.name="Login",s),i=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${r?"to-[rgb(37,35,91)]":"to-red-200"}`,q=`
<logo-and-navbar class="${"opacity-0 "+x(Z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+x(i,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${S("class",O,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+x(w,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${X(Object.keys(s).slice(1,5),n=>`
      
      <li${S("style",n=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${_}turn)`,0)}>${v(ke,"Navitem").$$render(e,{href:s[n].href,content:s[n].name,icon:s[n].icon,navIconClicked:s[n].href=="/homework"&&C||s[n].href=="/login"&&y||s[n].isCurrent,routes:s,btnColor:T,btnColorHover:I},{routes:A=>{s=A,D=!1},btnColor:A=>{T=A,D=!1},btnColorHover:A=>{I=A,D=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+x(o,!0)}">${v(ge,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!D);return l(),$(),b(),p(),g(),h(),k(),M(),L(),q});let Q=800,U=400;const He=j((e,a,t,f)=>{let i,r,l,$,s,b,c,p,m,g,w,h,u,k,C,M,y,L;r=d(ae,o=>i=o),$=d(te,o=>l=o),b=d(de,o=>s=o),p=d(oe,o=>c=o),g=d(P,o=>m=o),h=d(V,o=>w=o),k=d(ee,o=>u=o),M=d(W,o=>C=o),L=d(F,o=>y=o);let H,_,T=!1,I,O;do I=!0,s||(l<10&&(_="top-0"),l>10&&l<Q&&(_="top-0 backdrop-blur-3xl duration-1000"),l>Q&&i>10&&(_="-top-20 backdrop-blur-3xl duration-200"),i<-100&&(_="top-0 backdrop-blur-3xl duration-700")),s&&(l>=0&&l<U&&(_="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),l>U&&i>20&&(_="-bottom-28 duration-400"),i<-30&&(_="bottom-0 backdrop-blur-3xl duration-700")),O=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let o=c.route.id.slice(1);return`

    ${o==""?`${e.title=`<title>${x(m.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${X(Object.keys(m).slice(1),Z=>{let D=m[Z].title;return`

        ${o.startsWith(Z)?`${e.title=`<title>${x(D)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${v(N,"Modal").$$render(e,{showModal:T,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+x(w?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${K()=="iOS"?`

    ${v(N,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${v(N,"Modal").$$render(e,{showModal:C},{showModal:o=>{C=o,I=!1}},{default:()=>`${v(be,"LoginCard").$$render(e,{},{},{})}

    
    
    `})}

  ${v(N,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:y},{showModal:o=>{y=o,I=!1}},{default:()=>`
    

    
    ${v($e,"LazyMount2").$$render(e,{Import:async()=>await import("../../chunks/Dropzone.js"),textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}

    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+x(_,!0)+" ease-in-out w-full"}">
    ${v(we,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${f.default?f.default({}):""}

    

    
    ${v(ue,"InView").$$render(e,{margin:"400px",onview:async()=>H=await import("../../chunks/Footer.js")},{},{default:()=>`${H?`${v(H.default,"FooterComponent.default").$$render(e,{contactLinkClicked:T},{contactLinkClicked:o=>{T=o,I=!1}},{})}`:""}`})}

    

    </div></main>`;while(!I);return r(),$(),b(),p(),g(),h(),k(),M(),L(),O});export{He as default};
