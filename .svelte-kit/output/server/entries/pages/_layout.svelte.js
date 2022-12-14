import{c as T,e as w,d as L,a as c,v as $,g as ne,f as B,l as le,h as Y,j as K,k as ie,n as ae}from"../../chunks/index.js";import{g as ee,i as E,b as de,I as te}from"../../chunks/utils.js";import{i as X,s as V,a as W,n as oe,r as N,b as ce,c as se,e as ue,d as fe,l as be}from"../../chunks/store.js";import{w as pe}from"../../chunks/index2.js";const Z=T((e,s,t,p)=>{let{showModal:n=!1}=s,{bgTint:o="bg-[rgba(0,0,0,0.4)]"}=s;return s.showModal===void 0&&t.showModal&&n!==void 0&&t.showModal(n),s.bgTint===void 0&&t.bgTint&&o!==void 0&&t.bgTint(o),`

<button class="${"fixed w-full h-full grid place-items-center z-50 md:py-4 py-1 md:px-[7%] "+w(n?`${o} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}">
  ${p.default?p.default({}):""}
  </button>

`});let z=24;const $e=T((e,s,t,p)=>`<svg aria-label="Sun" id="lightIcon"${L("height",z,0)}${L("width",z,0)} viewBox="${"0 0 "+w(8*z,!0)+" "+w(8*z,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let F=24;const me=T((e,s,t,p)=>`


<svg aria-label="Moon" id="darkIcon"${L("height",F,0)}${L("width",F,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const he={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},ge=T((e,s,t,p)=>{let n,o;return o=c(X,i=>n=i),e.css.add(he),o(),`
  <div><button>${n?`${$($e,"IconSun").$$render(e,{},{},{})}`:`${$(me,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),ve=()=>{const e=ne("__svelte__"),s={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(s,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return we(),{}},enumerable:!1}}),s},re={subscribe(e){return ve().page.subscribe(e)}};function we(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ke=T((e,s,t,p)=>{let n,o,i,u;n=c(V,b=>b),o=c(W,b=>b),u=c(re,b=>i=b);let{href:l,content:f,routes:d,btnColorHover:m,icon:h,navIconClicked:g=!1}=s;s.href===void 0&&t.href&&l!==void 0&&t.href(l),s.content===void 0&&t.content&&f!==void 0&&t.content(f),s.routes===void 0&&t.routes&&d!==void 0&&t.routes(d),s.btnColorHover===void 0&&t.btnColorHover&&m!==void 0&&t.btnColorHover(m),s.icon===void 0&&t.icon&&h!==void 0&&t.icon(h),s.navIconClicked===void 0&&t.navIconClicked&&g!==void 0&&t.navIconClicked(g);let x,v;do{x=!0;for(let b in d)d[b].isCurrent=d[b].href===i.url.pathname;v=`<a data-sveltekit-preload-data${L("href",l,0)} class="${"block font-Nunito font-thin "+w(` ${m}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${w(f)}`}</a>`}while(!x);return n(),o(),u(),v});function G(e){return Object.prototype.toString.call(e)==="[object Date]"}function P(e,s,t,p){if(typeof t=="number"||G(t)){const n=p-t,o=(t-s)/(e.dt||1/60),i=e.opts.stiffness*n,u=e.opts.damping*o,l=(i-u)*e.inv_mass,f=(o+l)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(n)<e.opts.precision?p:(e.settled=!1,G(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((n,o)=>P(e,s[o],t[o],p[o]));if(typeof t=="object"){const n={};for(const o in t)n[o]=P(e,s[o],t[o],p[o]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function xe(e,s={}){const t=pe(e),{stiffness:p=.15,damping:n=.8,precision:o=.01}=s;let i,u,l,f=e,d=e,m=1,h=0,g=!1;function x(b,k={}){d=b;const C=l={};return e==null||k.hard||v.stiffness>=1&&v.damping>=1?(g=!0,i=B(),f=b,t.set(e=d),Promise.resolve()):(k.soft&&(h=1/((k.soft===!0?.5:+k.soft)*60),m=0),u||(i=B(),g=!1,u=le(M=>{if(g)return g=!1,u=null,!1;m=Math.min(m+h,1);const _={inv_mass:m,opts:v,settled:!0,dt:(M-i)*60/1e3},D=P(_,f,e,d);return i=M,f=e,t.set(e=D),_.settled&&(u=null),!_.settled})),new Promise(M=>{u.promise.then(()=>{C===l&&M()})}))}const v={set:x,update:(b,k)=>x(b(d,e),k),subscribe:t.subscribe,stiffness:p,damping:n,precision:o};return v}const Me=T((e,s,t,p)=>{let n,o,i,u,l,f,d,m,h,g,x,v,b,k,C,M,_,D;i=c(X,a=>o=a),u=c(oe,a=>a),f=c(N,a=>l=a),m=c(ce,a=>d=a),g=c(se,a=>h=a),v=c(ue,a=>x=a),M=c(W,a=>C=a),D=c(V,a=>_=a);let y=xe(1,{stiffness:.1,damping:.25});k=c(y,a=>b=a);let S=0,I="sm:bg-red-300 rounded",j="hover:bg-red-300 ",r=ee()!=="iOS"&&"hidden",H=E(),R=de,A,q;do A=!0,d&&!E()&&(S=o?.75:0,y.set(1+.5*Math.sin(h))),d?Y(N,l.login.name="\u{1F680}",l):Y(N,l.login.name="Login",l),n=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,q=`
<logo-and-navbar class="${"opacity-0 "+w(R,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+w(n,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${L("class",r,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+w(x,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${K(Object.keys(l).slice(1,5),a=>`
      
      <li${L("style",a=="login"&&d&&`transform:scale(${b}); filter:hue-rotate(${S}turn)`,0)}>${$(ke,"Navitem").$$render(e,{href:l[a].href,content:l[a].name,icon:l[a].icon,navIconClicked:l[a].href=="/homework"&&C||l[a].href=="/login"&&_||l[a].isCurrent,routes:l,btnColor:I,btnColorHover:j},{routes:O=>{l=O,A=!1},btnColor:O=>{I=O,A=!1},btnColorHover:O=>{j=O,A=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+w(H,!0)}">${$(ge,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!A);return i(),u(),f(),m(),g(),v(),k(),M(),D(),q}),J=T((e,s,t,p)=>{let{Import:n=()=>alert("importante")}=s,o;const i=async()=>{o=await n()};let{X:u=""}=s;s.Import===void 0&&t.Import&&n!==void 0&&t.Import(n),s.X===void 0&&t.X&&u!==void 0&&t.X(u);let l,f;do l=!0,f=`





${$(te,"InView").$$render(e,{onview:i},{},{default:()=>`${o?`
    
    ${$(o.default,"Component.default").$$render(e,{X:u},{X:d=>{u=d,l=!1}},{})}`:""}`})}`;while(!l);return f});let Q=800,U=400;const Te=T((e,s,t,p)=>{let n,o,i,u,l,f,d,m,h,g,x,v,b,k,C,M,_,D;o=c(fe,r=>n=r),u=c(se,r=>i=r),f=c(be,r=>l=r),m=c(re,r=>d=r),g=c(N,r=>h=r),v=c(X,r=>x=r),k=c(oe,r=>b=r),M=c(V,r=>C=r),D=c(W,r=>_=r);let y,S=!1,I,j;do I=!0,l||(i<10&&(y="top-0"),i>10&&i<Q&&(y="top-0 backdrop-blur-3xl duration-1000"),i>Q&&n>10&&(y="-top-20 backdrop-blur-3xl duration-200"),n<-100&&(y="top-0 backdrop-blur-3xl duration-700")),l&&(i>=0&&i<U&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),i>U&&n>20&&(y="-bottom-28 duration-400"),n<-30&&(y="bottom-0 backdrop-blur-3xl duration-700")),j=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${d.status==200?(()=>{let r=d.route.id.slice(1);return`

    ${r==""?`${e.title=`<title>${w(h.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${K(Object.keys(h).slice(1),H=>{let R=h[H].title;return`

        ${r.startsWith(H)?`${e.title=`<title>${w(R)}</title>`,""}`:""}`})}`}`})():`${d.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${$(Z,"Modal").$$render(e,{showModal:S,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+w(x?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${ee()=="iOS"?`

    ${$(Z,"Modal").$$render(e,{showModal:b,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${$(Z,"Modal").$$render(e,{showModal:C},{showModal:r=>{C=r,I=!1}},{default:()=>`

    
    ${$(J,"LazyMount").$$render(e,{Import:async()=>(setTimeout(()=>{C=!0},50),await import("../../chunks/LoginCard.js"))},{},{})}`})}

  ${$(Z,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:_},{showModal:r=>{_=r,I=!1}},{default:()=>`
    

    
    ${$(te,"InView").$$render(e,{},{},{default:()=>`${function(r){return ie(r)?(r.then(null,ae),""):function(H){return`
        ${$(H.default,"Dropzone.default").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}
      `}(r)}(import("../../chunks/Dropzone.js"))}`})}`})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+w(y,!0)+" ease-in-out w-full"}">${$(Me,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">${p.default?p.default({}):""}

    

    
    

    ${$(J,"LazyMount").$$render(e,{Import:async()=>await import("../../chunks/Footer.js"),X:S},{X:r=>{S=r,I=!1}},{})}
    </div></main>`;while(!I);return o(),u(),f(),m(),g(),v(),k(),M(),D(),j});export{Te as default};
