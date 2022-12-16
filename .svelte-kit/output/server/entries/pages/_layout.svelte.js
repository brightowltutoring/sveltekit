import{c as S,d as T,e as k,a as d,v as m,g as re,f as B,l as ne,h as Y,j as K}from"../../chunks/index.js";import{g as ee,i as E,b as le}from"../../chunks/utils.js";import{i as W,s as F,a as q,n as te,r as P,b as ie,c as oe,e as ae,d as de,l as ce}from"../../chunks/store.js";import{w as ue}from"../../chunks/index2.js";import{I as G}from"../../chunks/InView.js";import{L as be}from"../../chunks/LoginCard.js";let R=24;const fe=S((e,r,t,b)=>`<svg aria-label="Sun" id="lightIcon"${T("height",R,0)}${T("width",R,0)} viewBox="${"0 0 "+k(8*R,!0)+" "+k(8*R,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let J=24;const $e=S((e,r,t,b)=>`


<svg aria-label="Moon" id="darkIcon"${T("height",J,0)}${T("width",J,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const pe={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},me=S((e,r,t,b)=>{let n,o;return o=d(W,i=>n=i),e.css.add(pe),o(),`
  <div><button>${n?`${m(fe,"IconSun").$$render(e,{},{},{})}`:`${m($e,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),he=()=>{const e=re("__svelte__"),r={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return ge(),{}},enumerable:!1}}),r},se={subscribe(e){return he().page.subscribe(e)}};function ge(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ve=S((e,r,t,b)=>{let n,o,i,$;n=d(F,u=>u),o=d(q,u=>u),$=d(se,u=>i=u);let{href:l,content:f,routes:c,btnColorHover:p,icon:h,navIconClicked:g=!1}=r;r.href===void 0&&t.href&&l!==void 0&&t.href(l),r.content===void 0&&t.content&&f!==void 0&&t.content(f),r.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),r.btnColorHover===void 0&&t.btnColorHover&&p!==void 0&&t.btnColorHover(p),r.icon===void 0&&t.icon&&h!==void 0&&t.icon(h),r.navIconClicked===void 0&&t.navIconClicked&&g!==void 0&&t.navIconClicked(g);let x,v;do{x=!0;for(let u in c)c[u].isCurrent=c[u].href===i.url.pathname;v=`<a data-sveltekit-preload-data${T("href",l,0)} class="${"block font-Nunito font-thin "+k(` ${p}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${k(f)}`}</a>`}while(!x);return n(),o(),$(),v});function Q(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,r,t,b){if(typeof t=="number"||Q(t)){const n=b-t,o=(t-r)/(e.dt||1/60),i=e.opts.stiffness*n,$=e.opts.damping*o,l=(i-$)*e.inv_mass,f=(o+l)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(n)<e.opts.precision?b:(e.settled=!1,Q(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((n,o)=>V(e,r[o],t[o],b[o]));if(typeof t=="object"){const n={};for(const o in t)n[o]=V(e,r[o],t[o],b[o]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,r={}){const t=ue(e),{stiffness:b=.15,damping:n=.8,precision:o=.01}=r;let i,$,l,f=e,c=e,p=1,h=0,g=!1;function x(u,w={}){c=u;const C=l={};return e==null||w.hard||v.stiffness>=1&&v.damping>=1?(g=!0,i=B(),f=u,t.set(e=c),Promise.resolve()):(w.soft&&(h=1/((w.soft===!0?.5:+w.soft)*60),p=0),$||(i=B(),g=!1,$=ne(M=>{if(g)return g=!1,$=null,!1;p=Math.min(p+h,1);const y={inv_mass:p,opts:v,settled:!0,dt:(M-i)*60/1e3},D=V(y,f,e,c);return i=M,f=e,t.set(e=D),y.settled&&($=null),!y.settled})),new Promise(M=>{$.promise.then(()=>{C===l&&M()})}))}const v={set:x,update:(u,w)=>x(u(c,e),w),subscribe:t.subscribe,stiffness:b,damping:n,precision:o};return v}const we=S((e,r,t,b)=>{let n,o,i,$,l,f,c,p,h,g,x,v,u,w,C,M,y,D;i=d(W,a=>o=a),$=d(te,a=>a),f=d(P,a=>l=a),p=d(ie,a=>c=a),g=d(oe,a=>h=a),v=d(ae,a=>x=a),M=d(q,a=>C=a),D=d(F,a=>y=a);let H=ke(1,{stiffness:.1,damping:.25});w=d(H,a=>u=a);let j=0,_="sm:bg-red-300 rounded",A="hover:bg-red-300 ",L=ee()!=="iOS"&&"hidden",Z=E(),s=le,I,N;do I=!0,c&&!E()&&(j=o?.75:0,H.set(1+.5*Math.sin(h))),c?Y(P,l.login.name="\u{1F680}",l):Y(P,l.login.name="Login",l),n=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,N=`
<logo-and-navbar class="${"opacity-0 "+k(s,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+k(n,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${T("class",L,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+k(x,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${K(Object.keys(l).slice(1,5),a=>`
      
      <li${T("style",a=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${j}turn)`,0)}>${m(ve,"Navitem").$$render(e,{href:l[a].href,content:l[a].name,icon:l[a].icon,navIconClicked:l[a].href=="/homework"&&C||l[a].href=="/login"&&y||l[a].isCurrent,routes:l,btnColor:_,btnColorHover:A},{routes:O=>{l=O,I=!1},btnColor:O=>{_=O,I=!1},btnColorHover:O=>{A=O,I=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+k(Z,!0)}">${m(me,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!I);return i(),$(),f(),p(),g(),v(),w(),M(),D(),N}),z=S((e,r,t,b)=>{let{showModal:n=!1}=r,{bgTint:o="bg-[rgba(0,0,0,0.4)]"}=r,i;return r.showModal===void 0&&t.showModal&&n!==void 0&&t.showModal(n),r.bgTint===void 0&&t.bgTint&&o!==void 0&&t.bgTint(o),`

<button class="${"z-50 top-0 left-0 fixed w-full h-full grid place-items-center "+k(n?`${o} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${T("this",i,0)}>
  ${b.default?b.default({}):""}
  </button>`});let U=800,X=400;const Te=S((e,r,t,b)=>{let n,o,i,$,l,f,c,p,h,g,x,v,u,w,C,M,y,D;o=d(de,s=>n=s),$=d(oe,s=>i=s),f=d(ce,s=>l=s),p=d(se,s=>c=s),g=d(P,s=>h=s),v=d(W,s=>x=s),w=d(te,s=>u=s),M=d(F,s=>C=s),D=d(q,s=>y=s);let H,j,_,A=!1,L,Z;do L=!0,l||(i<10&&(_="top-0"),i>10&&i<U&&(_="top-0 backdrop-blur-3xl duration-1000"),i>U&&n>10&&(_="-top-20 backdrop-blur-3xl duration-200"),n<-100&&(_="top-0 backdrop-blur-3xl duration-700")),l&&(i>=0&&i<X&&(_="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),i>X&&n>20&&(_="-bottom-28 duration-400"),n<-30&&(_="bottom-0 backdrop-blur-3xl duration-700")),Z=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let s=c.route.id.slice(1);return`

    ${s==""?`${e.title=`<title>${k(h.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${K(Object.keys(h).slice(1),I=>{let N=h[I].title;return`

        ${s.startsWith(I)?`${e.title=`<title>${k(N)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${m(z,"Modal").$$render(e,{showModal:A,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+k(x?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${ee()=="iOS"?`

    ${m(z,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${m(z,"Modal").$$render(e,{showModal:C},{showModal:s=>{C=s,L=!1}},{default:()=>`${m(be,"LoginCard").$$render(e,{},{},{})}

    
    
    

    
    `})}

  ${m(z,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:y},{showModal:s=>{y=s,L=!1}},{default:()=>`
    

    ${m(G,"InView").$$render(e,{onview:async()=>H=await import("../../chunks/Dropzone.js")},{},{default:()=>`${H?`${m(H.default,"DropzoneComponent.default").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}`:""}`})}

    
    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+k(_,!0)+" ease-in-out w-full"}">
    ${m(we,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${b.default?b.default({}):""}

    

    
    ${m(G,"InView").$$render(e,{margin:"400px",onview:async()=>j=await import("../../chunks/Footer.js")},{},{default:()=>`${j?`${m(j.default,"FooterComponent.default").$$render(e,{contactLinkClicked:A},{contactLinkClicked:s=>{A=s,L=!1}},{})}`:""}`})}

    
    </div></main>`;while(!L);return o(),$(),f(),p(),g(),v(),w(),M(),D(),Z});export{Te as default};
