import{c as A,d as S,e as x,a as d,v as m,g as re,f as B,l as ne,h as Y,j as K}from"../../chunks/index.js";import{g as ee,i as E,b as ie,I as G}from"../../chunks/InView.js";import{i as W,s as F,a as q,n as te,r as z,b as le,c as oe,e as ae,d as de,l as ce}from"../../chunks/store.js";import{w as ue}from"../../chunks/index2.js";import{M as R}from"../../chunks/Modal.js";import{L as be}from"../../chunks/LoginCard.js";let P=24;const $e=A((e,a,t,f)=>`<svg aria-label="Sun" id="lightIcon"${S("height",P,0)}${S("width",P,0)} viewBox="${"0 0 "+x(8*P,!0)+" "+x(8*P,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let J=24;const fe=A((e,a,t,f)=>`


<svg aria-label="Moon" id="darkIcon"${S("height",J,0)}${S("width",J,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const pe={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},me=A((e,a,t,f)=>{let i,r;return r=d(W,l=>i=l),e.css.add(pe),r(),`
  <div><button>${i?`${m($e,"IconSun").$$render(e,{},{},{})}`:`${m(fe,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),ge=()=>{const e=re("__svelte__"),a={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(a,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return he(),{}},enumerable:!1}}),a},se={subscribe(e){return ge().page.subscribe(e)}};function he(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ve=A((e,a,t,f)=>{let i,r,l,$;i=d(F,u=>u),r=d(q,u=>u),$=d(se,u=>l=u);let{href:s,content:b,routes:c,btnColorHover:p,icon:g,navIconClicked:h=!1}=a;a.href===void 0&&t.href&&s!==void 0&&t.href(s),a.content===void 0&&t.content&&b!==void 0&&t.content(b),a.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),a.btnColorHover===void 0&&t.btnColorHover&&p!==void 0&&t.btnColorHover(p),a.icon===void 0&&t.icon&&g!==void 0&&t.icon(g),a.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let w,v;do{w=!0;for(let u in c)c[u].isCurrent=c[u].href===l.url.pathname;v=`<a data-sveltekit-preload-data${S("href",s,0)} class="${"block font-Nunito font-thin "+x(` ${p}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${x(b)}`}</a>`}while(!w);return i(),r(),$(),v});function Q(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,a,t,f){if(typeof t=="number"||Q(t)){const i=f-t,r=(t-a)/(e.dt||1/60),l=e.opts.stiffness*i,$=e.opts.damping*r,s=(l-$)*e.inv_mass,b=(r+s)*e.dt;return Math.abs(b)<e.opts.precision&&Math.abs(i)<e.opts.precision?f:(e.settled=!1,Q(t)?new Date(t.getTime()+b):t+b)}else{if(Array.isArray(t))return t.map((i,r)=>V(e,a[r],t[r],f[r]));if(typeof t=="object"){const i={};for(const r in t)i[r]=V(e,a[r],t[r],f[r]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,a={}){const t=ue(e),{stiffness:f=.15,damping:i=.8,precision:r=.01}=a;let l,$,s,b=e,c=e,p=1,g=0,h=!1;function w(u,k={}){c=u;const C=s={};return e==null||k.hard||v.stiffness>=1&&v.damping>=1?(h=!0,l=B(),b=u,t.set(e=c),Promise.resolve()):(k.soft&&(g=1/((k.soft===!0?.5:+k.soft)*60),p=0),$||(l=B(),h=!1,$=ne(M=>{if(h)return h=!1,$=null,!1;p=Math.min(p+g,1);const y={inv_mass:p,opts:v,settled:!0,dt:(M-l)*60/1e3},D=V(y,b,e,c);return l=M,b=e,t.set(e=D),y.settled&&($=null),!y.settled})),new Promise(M=>{$.promise.then(()=>{C===s&&M()})}))}const v={set:w,update:(u,k)=>w(u(c,e),k),subscribe:t.subscribe,stiffness:f,damping:i,precision:r};return v}const xe=A((e,a,t,f)=>{let i,r,l,$,s,b,c,p,g,h,w,v,u,k,C,M,y,D;l=d(W,n=>r=n),$=d(te,n=>n),b=d(z,n=>s=n),p=d(le,n=>c=n),h=d(oe,n=>g=n),v=d(ae,n=>w=n),M=d(q,n=>C=n),D=d(F,n=>y=n);let H=ke(1,{stiffness:.1,damping:.25});k=d(H,n=>u=n);let T=0,_="sm:bg-red-300 rounded",j="hover:bg-red-300 ",L=ee()!=="iOS"&&"hidden",Z=E(),o=ie,I,N;do I=!0,c&&!E()&&(T=r?.75:0,H.set(1+.5*Math.sin(g))),c?Y(z,s.login.name="\u{1F680}",s):Y(z,s.login.name="Login",s),i=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${r?"to-[rgb(37,35,91)]":"to-red-200"}`,N=`
<logo-and-navbar class="${"opacity-0 "+x(o,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+x(i,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${S("class",L,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+x(w,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${K(Object.keys(s).slice(1,5),n=>`
      
      <li${S("style",n=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${T}turn)`,0)}>${m(ve,"Navitem").$$render(e,{href:s[n].href,content:s[n].name,icon:s[n].icon,navIconClicked:s[n].href=="/homework"&&C||s[n].href=="/login"&&y||s[n].isCurrent,routes:s,btnColor:_,btnColorHover:j},{routes:O=>{s=O,I=!1},btnColor:O=>{_=O,I=!1},btnColorHover:O=>{j=O,I=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+x(Z,!0)}">${m(me,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!I);return l(),$(),b(),p(),h(),v(),k(),M(),D(),N});let U=800,X=400;const De=A((e,a,t,f)=>{let i,r,l,$,s,b,c,p,g,h,w,v,u,k,C,M,y,D;r=d(de,o=>i=o),$=d(oe,o=>l=o),b=d(ce,o=>s=o),p=d(se,o=>c=o),h=d(z,o=>g=o),v=d(W,o=>w=o),k=d(te,o=>u=o),M=d(F,o=>C=o),D=d(q,o=>y=o);let H,T,_,j=!1,L,Z;do L=!0,s||(l<10&&(_="top-0"),l>10&&l<U&&(_="top-0 backdrop-blur-3xl duration-1000"),l>U&&i>10&&(_="-top-20 backdrop-blur-3xl duration-200"),i<-100&&(_="top-0 backdrop-blur-3xl duration-700")),s&&(l>=0&&l<X&&(_="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),l>X&&i>20&&(_="-bottom-28 duration-400"),i<-30&&(_="bottom-0 backdrop-blur-3xl duration-700")),Z=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let o=c.route.id.slice(1);return`

    ${o==""?`${e.title=`<title>${x(g.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${K(Object.keys(g).slice(1),I=>{let N=g[I].title;return`

        ${o.startsWith(I)?`${e.title=`<title>${x(N)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${m(R,"Modal").$$render(e,{showModal:j,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+x(w?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${ee()=="iOS"?`

    ${m(R,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${m(R,"Modal").$$render(e,{showModal:C},{showModal:o=>{C=o,L=!1}},{default:()=>`${m(be,"LoginCard").$$render(e,{},{},{})}

    
    
    

    
    `})}

  ${m(R,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:y},{showModal:o=>{y=o,L=!1}},{default:()=>`
    

    ${m(G,"InView").$$render(e,{onview:async()=>H=await import("../../chunks/Dropzone.js")},{},{default:()=>`${H?`${m(H.default,"DropzoneComponent.default").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}`:""}`})}

    
    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+x(_,!0)+" ease-in-out w-full"}">
    ${m(xe,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${f.default?f.default({}):""}

    

    
    ${m(G,"InView").$$render(e,{margin:"400px",onview:async()=>T=await import("../../chunks/Footer.js")},{},{default:()=>`${T?`${m(T.default,"FooterComponent.default").$$render(e,{contactLinkClicked:j},{contactLinkClicked:o=>{j=o,L=!1}},{})}`:""}`})}

    
    </div></main>`;while(!L);return r(),$(),b(),p(),h(),v(),k(),M(),D(),Z});export{De as default};
