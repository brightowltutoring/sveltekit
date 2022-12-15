import{c as T,d as L,e as w,a as c,v as p,g as re,f as B,l as ne,h as Y,j as U}from"../../chunks/index.js";import{g as K,i as E,b as le,I as ee}from"../../chunks/InView.js";import{i as X,s as V,a as W,n as te,r as R,b as ie,c as oe,e as ae,d as de,l as ce}from"../../chunks/store.js";import{w as ue}from"../../chunks/index2.js";import{L as be}from"../../chunks/LoginCard.js";let z=24;const fe=T((e,s,t,$)=>`<svg aria-label="Sun" id="lightIcon"${L("height",z,0)}${L("width",z,0)} viewBox="${"0 0 "+w(8*z,!0)+" "+w(8*z,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let F=24;const $e=T((e,s,t,$)=>`


<svg aria-label="Moon" id="darkIcon"${L("height",F,0)}${L("width",F,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const pe={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},me=T((e,s,t,$)=>{let r,o;return o=c(X,i=>r=i),e.css.add(pe),o(),`
  <div><button>${r?`${p(fe,"IconSun").$$render(e,{},{},{})}`:`${p($e,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),he=()=>{const e=re("__svelte__"),s={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(s,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return ge(),{}},enumerable:!1}}),s},se={subscribe(e){return he().page.subscribe(e)}};function ge(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ve=T((e,s,t,$)=>{let r,o,i,u;r=c(V,f=>f),o=c(W,f=>f),u=c(se,f=>i=f);let{href:n,content:b,routes:d,btnColorHover:m,icon:h,navIconClicked:g=!1}=s;s.href===void 0&&t.href&&n!==void 0&&t.href(n),s.content===void 0&&t.content&&b!==void 0&&t.content(b),s.routes===void 0&&t.routes&&d!==void 0&&t.routes(d),s.btnColorHover===void 0&&t.btnColorHover&&m!==void 0&&t.btnColorHover(m),s.icon===void 0&&t.icon&&h!==void 0&&t.icon(h),s.navIconClicked===void 0&&t.navIconClicked&&g!==void 0&&t.navIconClicked(g);let x,v;do{x=!0;for(let f in d)d[f].isCurrent=d[f].href===i.url.pathname;v=`<a data-sveltekit-preload-data${L("href",n,0)} class="${"block font-Nunito font-thin "+w(` ${m}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${w(b)}`}</a>`}while(!x);return r(),o(),u(),v});function G(e){return Object.prototype.toString.call(e)==="[object Date]"}function P(e,s,t,$){if(typeof t=="number"||G(t)){const r=$-t,o=(t-s)/(e.dt||1/60),i=e.opts.stiffness*r,u=e.opts.damping*o,n=(i-u)*e.inv_mass,b=(o+n)*e.dt;return Math.abs(b)<e.opts.precision&&Math.abs(r)<e.opts.precision?$:(e.settled=!1,G(t)?new Date(t.getTime()+b):t+b)}else{if(Array.isArray(t))return t.map((r,o)=>P(e,s[o],t[o],$[o]));if(typeof t=="object"){const r={};for(const o in t)r[o]=P(e,s[o],t[o],$[o]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function we(e,s={}){const t=ue(e),{stiffness:$=.15,damping:r=.8,precision:o=.01}=s;let i,u,n,b=e,d=e,m=1,h=0,g=!1;function x(f,k={}){d=f;const C=n={};return e==null||k.hard||v.stiffness>=1&&v.damping>=1?(g=!0,i=B(),b=f,t.set(e=d),Promise.resolve()):(k.soft&&(h=1/((k.soft===!0?.5:+k.soft)*60),m=0),u||(i=B(),g=!1,u=ne(M=>{if(g)return g=!1,u=null,!1;m=Math.min(m+h,1);const _={inv_mass:m,opts:v,settled:!0,dt:(M-i)*60/1e3},D=P(_,b,e,d);return i=M,b=e,t.set(e=D),_.settled&&(u=null),!_.settled})),new Promise(M=>{u.promise.then(()=>{C===n&&M()})}))}const v={set:x,update:(f,k)=>x(f(d,e),k),subscribe:t.subscribe,stiffness:$,damping:r,precision:o};return v}const ke=T((e,s,t,$)=>{let r,o,i,u,n,b,d,m,h,g,x,v,f,k,C,M,_,D;i=c(X,a=>o=a),u=c(te,a=>a),b=c(R,a=>n=a),m=c(ie,a=>d=a),g=c(oe,a=>h=a),v=c(ae,a=>x=a),M=c(W,a=>C=a),D=c(V,a=>_=a);let H=we(1,{stiffness:.1,damping:.25});k=c(H,a=>f=a);let y=0,j="sm:bg-red-300 rounded",I="hover:bg-red-300 ",O=K()!=="iOS"&&"hidden",l=E(),Z=le,S,q;do S=!0,d&&!E()&&(y=o?.75:0,H.set(1+.5*Math.sin(h))),d?Y(R,n.login.name="\u{1F680}",n):Y(R,n.login.name="Login",n),r=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${o?"to-[rgb(37,35,91)]":"to-red-200"}`,q=`
<logo-and-navbar class="${"opacity-0 "+w(Z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+w(r,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${L("class",O,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+w(x,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${U(Object.keys(n).slice(1,5),a=>`
      
      <li${L("style",a=="login"&&d&&`transform:scale(${f}); filter:hue-rotate(${y}turn)`,0)}>${p(ve,"Navitem").$$render(e,{href:n[a].href,content:n[a].name,icon:n[a].icon,navIconClicked:n[a].href=="/homework"&&C||n[a].href=="/login"&&_||n[a].isCurrent,routes:n,btnColor:j,btnColorHover:I},{routes:A=>{n=A,S=!1},btnColor:A=>{j=A,S=!1},btnColorHover:A=>{I=A,S=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+w(l,!0)}">${p(me,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!S);return i(),u(),b(),m(),g(),v(),k(),M(),D(),q}),N=T((e,s,t,$)=>{let{showModal:r=!1}=s,{bgTint:o="bg-[rgba(0,0,0,0.4)]"}=s,i;return s.showModal===void 0&&t.showModal&&r!==void 0&&t.showModal(r),s.bgTint===void 0&&t.bgTint&&o!==void 0&&t.bgTint(o),`
<button class="${"z-50 fixed top-0 left-0 w-full h-full grid place-items-center "+w(r?`${o} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${L("this",i,0)}>
  ${$.default?$.default({}):""}
  </button>`}),xe=T((e,s,t,$)=>{let{Import:r=()=>alert("importante")}=s,o;const i=async()=>{o=await r()};let{X:u=""}=s;s.Import===void 0&&t.Import&&r!==void 0&&t.Import(r),s.X===void 0&&t.X&&u!==void 0&&t.X(u);let n,b;do n=!0,b=`





${p(ee,"InView").$$render(e,{onview:i},{},{default:()=>`${o?`
    
    ${p(o.default,"Component.default").$$render(e,{X:u},{X:d=>{u=d,n=!1}},{})}`:""}`})}`;while(!n);return b});let J=800,Q=400;const Le=T((e,s,t,$)=>{let r,o,i,u,n,b,d,m,h,g,x,v,f,k,C,M,_,D;o=c(de,l=>r=l),u=c(oe,l=>i=l),b=c(ce,l=>n=l),m=c(se,l=>d=l),g=c(R,l=>h=l),v=c(X,l=>x=l),k=c(te,l=>f=l),M=c(V,l=>C=l),D=c(W,l=>_=l);let H,y,j=!1,I,O;do I=!0,n||(i<10&&(y="top-0"),i>10&&i<J&&(y="top-0 backdrop-blur-3xl duration-1000"),i>J&&r>10&&(y="-top-20 backdrop-blur-3xl duration-200"),r<-100&&(y="top-0 backdrop-blur-3xl duration-700")),n&&(i>=0&&i<Q&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),i>Q&&r>20&&(y="-bottom-28 duration-400"),r<-30&&(y="bottom-0 backdrop-blur-3xl duration-700")),O=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${d.status==200?(()=>{let l=d.route.id.slice(1);return`

    ${l==""?`${e.title=`<title>${w(h.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${U(Object.keys(h).slice(1),Z=>{let S=h[Z].title;return`

        ${l.startsWith(Z)?`${e.title=`<title>${w(S)}</title>`,""}`:""}`})}`}`})():`${d.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${p(N,"Modal").$$render(e,{showModal:j,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+w(x?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${K()=="iOS"?`

    ${p(N,"Modal").$$render(e,{showModal:f,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${p(N,"Modal").$$render(e,{showModal:C},{showModal:l=>{C=l,I=!1}},{default:()=>`${p(be,"LoginCard").$$render(e,{},{},{})}

    
    `})}

  ${p(N,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:_},{showModal:l=>{_=l,I=!1}},{default:()=>`
    

    ${p(ee,"InView").$$render(e,{onview:async()=>H=await import("../../chunks/Dropzone.js")},{},{default:()=>`${H?`${p(H.default,"DropzoneComponent.default").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}`:""}`})}

    
    `})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+w(y,!0)+" ease-in-out w-full"}">
    ${p(ke,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">
    ${$.default?$.default({}):""}

    

    
    

    ${p(xe,"LazyMount").$$render(e,{Import:async()=>await import("../../chunks/Footer.js"),X:j},{X:l=>{j=l,I=!1}},{})}
    </div></main>`;while(!I);return o(),u(),b(),m(),g(),v(),k(),M(),D(),O});export{Le as default};
