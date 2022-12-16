import{c as S,d as L,e as k,a as d,v,g as se,f as B,l as re,h as Y,j as X}from"../../chunks/index.js";import{g as K,i as E,b as ne}from"../../chunks/utils.js";import{i as V,s as W,a as F,n as ee,r as z,b as le,c as te,e as ie,d as ae,l as de}from"../../chunks/store.js";import{w as ce}from"../../chunks/index2.js";import{I as ue}from"../../chunks/InView.js";import{L as be}from"../../chunks/LoginCard.js";import{L as fe}from"../../chunks/LazyMount2.js";let N=24;const $e=S((e,r,t,b)=>`<svg aria-label="Sun" id="lightIcon"${L("height",N,0)}${L("width",N,0)} viewBox="${"0 0 "+k(8*N,!0)+" "+k(8*N,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let G=24;const pe=S((e,r,t,b)=>`


<svg aria-label="Moon" id="darkIcon"${L("height",G,0)}${L("width",G,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const me={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},he=S((e,r,t,b)=>{let n,o;return o=d(V,i=>n=i),e.css.add(me),o(),`
  <div><button>${n?`${v($e,"IconSun").$$render(e,{},{},{})}`:`${v(pe,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),ge=()=>{const e=se("__svelte__"),r={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return ve(),{}},enumerable:!1}}),r},oe={subscribe(e){return ge().page.subscribe(e)}};function ve(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ke=S((e,r,t,b)=>{let n,o,i,$;n=d(W,u=>u),o=d(F,u=>u),$=d(oe,u=>i=u);let{href:l,content:f,routes:c,btnColorHover:p,icon:m,navIconClicked:h=!1}=r;r.href===void 0&&t.href&&l!==void 0&&t.href(l),r.content===void 0&&t.content&&f!==void 0&&t.content(f),r.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),r.btnColorHover===void 0&&t.btnColorHover&&p!==void 0&&t.btnColorHover(p),r.icon===void 0&&t.icon&&m!==void 0&&t.icon(m),r.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let x,g;do{x=!0;for(let u in c)c[u].isCurrent=c[u].href===i.url.pathname;g=`<a data-sveltekit-preload-data${L("href",l,0)} class="${"block font-Nunito font-thin "+k(` ${p}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${k(f)}`}</a>`}while(!x);return n(),o(),$(),g});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function P(e,r,t,b){if(typeof t=="number"||J(t)){const n=b-t,o=(t-r)/(e.dt||1/60),i=e.opts.stiffness*n,$=e.opts.damping*o,l=(i-$)*e.inv_mass,f=(o+l)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(n)<e.opts.precision?b:(e.settled=!1,J(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((n,o)=>P(e,r[o],t[o],b[o]));if(typeof t=="object"){const n={};for(const o in t)n[o]=P(e,r[o],t[o],b[o]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function we(e,r={}){const t=ce(e),{stiffness:b=.15,damping:n=.8,precision:o=.01}=r;let i,$,l,f=e,c=e,p=1,m=0,h=!1;function x(u,w={}){c=u;const C=l={};return e==null||w.hard||g.stiffness>=1&&g.damping>=1?(h=!0,i=B(),f=u,t.set(e=c),Promise.resolve()):(w.soft&&(m=1/((w.soft===!0?.5:+w.soft)*60),p=0),$||(i=B(),h=!1,$=re(M=>{if(h)return h=!1,$=null,!1;p=Math.min(p+m,1);const _={inv_mass:p,opts:g,settled:!0,dt:(M-i)*60/1e3},T=P(_,f,e,c);return i=M,f=e,t.set(e=T),_.settled&&($=null),!_.settled})),new Promise(M=>{$.promise.then(()=>{C===l&&M()})}))}const g={set:x,update:(u,w)=>x(u(c,e),w),subscribe:t.subscribe,stiffness:b,damping:n,precision:o};return g}const xe=S((e,r,t,b)=>{let n,o,i,$,l,f,c,p,m,h,x,g,u,w,C,M,_,T;i=d(V,a=>o=a),$=d(ee,a=>a),f=d(z,a=>l=a),p=d(le,a=>c=a),h=d(te,a=>m=a),g=d(ie,a=>x=a),M=d(F,a=>C=a),T=d(W,a=>_=a);let H=we(1,{stiffness:.1,damping:.25});w=d(H,a=>u=a);let y=0,j="sm:bg-red-300 rounded",I="hover:bg-red-300 ",O=K()!=="iOS"&&"hidden",s=E(),Z=ne,D,q;do D=!0,c&&!E()&&(y=o?.75:0,H.set(1+.5*Math.sin(m))),c?Y(z,l.login.name="\u{1F680}",l):Y(z,l.login.name="Login",l),n=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,q=`
<logo-and-navbar class="${"opacity-0 "+k(Z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+k(n,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${L("class",O,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+k(x,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${X(Object.keys(l).slice(1,5),a=>`
      
      <li${L("style",a=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${y}turn)`,0)}>${v(ke,"Navitem").$$render(e,{href:l[a].href,content:l[a].name,icon:l[a].icon,navIconClicked:l[a].href=="/homework"&&C||l[a].href=="/login"&&_||l[a].isCurrent,routes:l,btnColor:j,btnColorHover:I},{routes:A=>{l=A,D=!1},btnColor:A=>{j=A,D=!1},btnColorHover:A=>{I=A,D=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+k(s,!0)}">${v(he,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!D);return i(),$(),f(),p(),h(),g(),w(),M(),T(),q}),R=S((e,r,t,b)=>{let{showModal:n=!1}=r,{bgTint:o="bg-[rgba(0,0,0,0.4)]"}=r,i;return r.showModal===void 0&&t.showModal&&n!==void 0&&t.showModal(n),r.bgTint===void 0&&t.bgTint&&o!==void 0&&t.bgTint(o),`


<button class="${"z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center "+k(n?`${o} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${L("this",i,0)}>${b.default?b.default({}):""}</button>`});let Q=800,U=400;const De=S((e,r,t,b)=>{let n,o,i,$,l,f,c,p,m,h,x,g,u,w,C,M,_,T;o=d(ae,s=>n=s),$=d(te,s=>i=s),f=d(de,s=>l=s),p=d(oe,s=>c=s),h=d(z,s=>m=s),g=d(V,s=>x=s),w=d(ee,s=>u=s),M=d(W,s=>C=s),T=d(F,s=>_=s);let H,y,j=!1,I,O;do I=!0,l||(i<10&&(y="top-0"),i>10&&i<Q&&(y="top-0 backdrop-blur-3xl duration-1000"),i>Q&&n>10&&(y="-top-20 backdrop-blur-3xl duration-200"),n<-100&&(y="top-0 backdrop-blur-3xl duration-700")),l&&(i>=0&&i<U&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),i>U&&n>20&&(y="-bottom-28 duration-400"),n<-30&&(y="bottom-0 backdrop-blur-3xl duration-700")),O=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let s=c.route.id.slice(1);return`

    ${s==""?`${e.title=`<title>${k(m.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${X(Object.keys(m).slice(1),Z=>{let D=m[Z].title;return`

        ${s.startsWith(Z)?`${e.title=`<title>${k(D)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${v(R,"Modal").$$render(e,{showModal:j,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+k(x?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${K()=="iOS"?`

    ${v(R,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${v(R,"Modal").$$render(e,{showModal:C},{showModal:s=>{C=s,I=!1}},{default:()=>`${v(be,"LoginCard").$$render(e,{},{},{})}

    
    
    `})}

  ${v(R,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:_},{showModal:s=>{_=s,I=!1}},{default:()=>`
    

    
    ${v(fe,"LazyMount2").$$render(e,{Import:async()=>await import("../../chunks/Dropzone.js"),textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}

    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+k(y,!0)+" ease-in-out w-full"}">
    ${v(xe,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${b.default?b.default({}):""}

    

    
    ${v(ue,"InView").$$render(e,{margin:"400px",onview:async()=>H=await import("../../chunks/Footer.js")},{},{default:()=>`${H?`${v(H.default,"FooterComponent.default").$$render(e,{contactLinkClicked:j},{contactLinkClicked:s=>{j=s,I=!1}},{})}`:""}`})}

    
    </div></main>`;while(!I);return o(),$(),f(),p(),h(),g(),w(),M(),T(),O});export{De as default};
