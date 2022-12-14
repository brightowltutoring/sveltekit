import{c as D,e as m,d as I,a as d,v as x,g as se,f as V,l as re,h as Y,j as X}from"../../chunks/index.js";import{D as le}from"../../chunks/Dropzone.js";import{L as ne}from"../../chunks/LoginCard.js";import{g as K,i as E,b as ie}from"../../chunks/utils.js";import{i as q,s as W,a as F,n as ee,r as R,b as ae,c as te,e as de,d as ce,l as ue}from"../../chunks/store.js";import{w as be}from"../../chunks/index2.js";const Z=D((e,o,t,b)=>{let{showModal:s=!1}=o,{bgTint:r="bg-[rgba(0,0,0,0.4)]"}=o;return o.showModal===void 0&&t.showModal&&s!==void 0&&t.showModal(s),o.bgTint===void 0&&t.bgTint&&r!==void 0&&t.bgTint(r),`

<button class="${"fixed w-full h-full grid place-items-center z-50 md:py-4 py-1 md:px-[7%] "+m(s?`${r} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}">
  ${b.default?b.default({}):""}
  </button>

`});let N=24;const fe=D((e,o,t,b)=>`<svg aria-label="Sun" id="lightIcon"${I("height",N,0)}${I("width",N,0)} viewBox="${"0 0 "+m(8*N,!0)+" "+m(8*N,!0)}" class="mx-3"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let G=24;const $e=D((e,o,t,b)=>`


<svg aria-label="Moon" id="darkIcon"${I("height",G,0)}${I("width",G,0)} class="mx-3"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`);const pe={code:":root{--light:#f7f7f7;--dark:rgb(20, 13, 33)}body{background:var(--light);color:var(--dark);transition:background-color 0.3s}body.dark-mode{background:var(--dark);color:var(--light)}",map:null},me=D((e,o,t,b)=>{let s,r;return r=d(q,a=>s=a),e.css.add(pe),r(),`
  <div><button>${s?`${x(fe,"IconSun").$$render(e,{},{},{})}`:`${x($e,"IconMoon").$$render(e,{},{},{})}`}</button></div>`}),ge=()=>{const e=se("__svelte__"),o={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(o,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return he(),{}},enumerable:!1}}),o},oe={subscribe(e){return ge().page.subscribe(e)}};function he(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ve=D((e,o,t,b)=>{let s,r,a,$;s=d(W,u=>u),r=d(F,u=>u),$=d(oe,u=>a=u);let{href:n,content:f,routes:c,btnColorHover:p,icon:g,navIconClicked:h=!1}=o;o.href===void 0&&t.href&&n!==void 0&&t.href(n),o.content===void 0&&t.content&&f!==void 0&&t.content(f),o.routes===void 0&&t.routes&&c!==void 0&&t.routes(c),o.btnColorHover===void 0&&t.btnColorHover&&p!==void 0&&t.btnColorHover(p),o.icon===void 0&&t.icon&&g!==void 0&&t.icon(g),o.navIconClicked===void 0&&t.navIconClicked&&h!==void 0&&t.navIconClicked(h);let w,v;do{w=!0;for(let u in c)c[u].isCurrent=c[u].href===a.url.pathname;v=`<a data-sveltekit-preload-data${I("href",n,0)} class="${"block font-Nunito font-thin "+m(` ${p}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`,!0)}">
  ${`${m(f)}`}</a>`}while(!w);return s(),r(),$(),v});function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function P(e,o,t,b){if(typeof t=="number"||J(t)){const s=b-t,r=(t-o)/(e.dt||1/60),a=e.opts.stiffness*s,$=e.opts.damping*r,n=(a-$)*e.inv_mass,f=(r+n)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(s)<e.opts.precision?b:(e.settled=!1,J(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((s,r)=>P(e,o[r],t[r],b[r]));if(typeof t=="object"){const s={};for(const r in t)s[r]=P(e,o[r],t[r],b[r]);return s}else throw new Error(`Cannot spring ${typeof t} values`)}}function ke(e,o={}){const t=be(e),{stiffness:b=.15,damping:s=.8,precision:r=.01}=o;let a,$,n,f=e,c=e,p=1,g=0,h=!1;function w(u,k={}){c=u;const C=n={};return e==null||k.hard||v.stiffness>=1&&v.damping>=1?(h=!0,a=V(),f=u,t.set(e=c),Promise.resolve()):(k.soft&&(g=1/((k.soft===!0?.5:+k.soft)*60),p=0),$||(a=V(),h=!1,$=re(M=>{if(h)return h=!1,$=null,!1;p=Math.min(p+g,1);const y={inv_mass:p,opts:v,settled:!0,dt:(M-a)*60/1e3},T=P(y,f,e,c);return a=M,f=e,t.set(e=T),y.settled&&($=null),!y.settled})),new Promise(M=>{$.promise.then(()=>{C===n&&M()})}))}const v={set:w,update:(u,k)=>w(u(c,e),k),subscribe:t.subscribe,stiffness:b,damping:s,precision:r};return v}const xe=D((e,o,t,b)=>{let s,r,a,$,n,f,c,p,g,h,w,v,u,k,C,M,y,T;a=d(q,i=>r=i),$=d(ee,i=>i),f=d(R,i=>n=i),p=d(ae,i=>c=i),h=d(te,i=>g=i),v=d(de,i=>w=i),M=d(F,i=>C=i),T=d(W,i=>y=i);let _=ke(1,{stiffness:.1,damping:.25});k=d(_,i=>u=i);let S=0,L="sm:bg-red-300 rounded",H="hover:bg-red-300 ",l=K()!=="iOS"&&"hidden",O=E(),z=ie,j,B;do j=!0,c&&!E()&&(S=r?.75:0,_.set(1+.5*Math.sin(g))),c?Y(R,n.login.name="\u{1F680}",n):Y(R,n.login.name="Login",n),s=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${r?"to-[rgb(37,35,91)]":"to-red-200"}`,B=`
<logo-and-navbar class="${"opacity-0 "+m(z,!0)+" flex items-center justify-center gap-x-32 md:justify-between w-full"}"><button class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent">THINKSOLVE
    </button>

  
  <ul class="${"text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto "+m(s,!0)+" hideScrollBar overflow-x-scroll overflow-y-hidden"}">
    
    <li${I("class",l,0)}><button class="${"font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg "+m(w,!0)+" hover:bg-indigo-400 hover:text-white active:animate-pulse duration-200 border-b-1 rounded"}">App
      </button></li>

    
    ${X(Object.keys(n).slice(1,5),i=>`
      
      <li${I("style",i=="login"&&c&&`transform:scale(${u}); filter:hue-rotate(${S}turn)`,0)}>${x(ve,"Navitem").$$render(e,{href:n[i].href,content:n[i].name,icon:n[i].icon,navIconClicked:n[i].href=="/homework"&&C||n[i].href=="/login"&&y||n[i].isCurrent,routes:n,btnColor:L,btnColorHover:H},{routes:A=>{n=A,j=!1},btnColor:A=>{L=A,j=!1},btnColorHover:A=>{H=A,j=!1}},{})}
        
      </li>`)}

    <li class="${"py-2 translate-y-1 scale-125 md:scale-100 "+m(O,!0)}">${x(me,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar>`;while(!j);return a(),$(),f(),p(),h(),v(),k(),M(),T(),B}),we=D((e,o,t,b)=>{let{contactLinkClicked:s=!1}=o;return o.contactLinkClicked===void 0&&t.contactLinkClicked&&s!==void 0&&t.contactLinkClicked(s),`<div class="${"text-sm mt-20 "+m("mb-10",!0)+" flex justify-center items-center flex-row gap-x-1"}"><span class="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"><a data-sveltekit-preload-data href="/faq">faq</a>
      \xA0 | \xA0
    <span id="contactLinkClicked">contact </span></span></div>`});let Q=800,U=400;const Te=D((e,o,t,b)=>{let s,r,a,$,n,f,c,p,g,h,w,v,u,k,C,M,y,T;r=d(ce,l=>s=l),$=d(te,l=>a=l),f=d(ue,l=>n=l),p=d(oe,l=>c=l),h=d(R,l=>g=l),v=d(q,l=>w=l),k=d(ee,l=>u=l),M=d(W,l=>C=l),T=d(F,l=>y=l);let _,S=!1,L,H;do L=!0,n||(a<10&&(_="top-0"),a>10&&a<Q&&(_="top-0 backdrop-blur-3xl duration-1000"),a>Q&&s>10&&(_="-top-20 backdrop-blur-3xl duration-200"),s<-100&&(_="top-0 backdrop-blur-3xl duration-700")),n&&(a>=0&&a<U&&(_="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200"),a>U&&s>20&&(_="-bottom-28 duration-400"),s<-30&&(_="bottom-0 backdrop-blur-3xl duration-700")),H=`${e.head+=`<!-- HEAD_svelte-1pgxeq7_START --><link rel="manifest" href="/manifest.json">${c.status==200?(()=>{let l=c.route.id.slice(1);return`

    ${l==""?`${e.title=`<title>${m(g.home.title)}</title>`,""}
      <meta name="description" content="Math and Physics Tutoring for the Modern Age.">
      <meta og:url="https://thinksolve.io/">
      
      `:`${X(Object.keys(g).slice(1),O=>{let z=g[O].title;return`

        ${l.startsWith(O)?`${e.title=`<title>${m(z)}</title>`,""}`:""}`})}`}`})():`${c.status==404?`${e.title="<title>Oops \u{1F4A9}</title>",""}`:""}`}<!-- HEAD_svelte-1pgxeq7_END -->`,""}




<main>${x(Z,"Modal").$$render(e,{showModal:S,bgTint:"backdrop-blur-3xl "},{},{default:()=>`<ul class="${"text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r "+m(w?"from-teal-200 via-rose-300 to-pink-200 ":"from-teal-700 via-rose-700 to-pink-700 ",!0)}"><li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

  
  ${K()=="iOS"?`

    ${x(Z,"Modal").$$render(e,{showModal:u,bgTint:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`
      
        

        
        <ul class="p-10 flex flex-col gap-y-8 font-Poppins sm:text-6xl"><li class="text-xl font-bold"><div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li class="text-xl font-bold"><div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2"><span>Click share icon</span>
              <img class="w-7 h-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

          <li class="text-xl font-bold text-black"><div class="text-6xl ">3.</div>
            Click &#39;Add to Home Screen&#39; \u{1F680}
          </li></ul>`})}`:""}

  

  ${x(Z,"Modal").$$render(e,{showModal:C},{showModal:l=>{C=l,L=!1}},{default:()=>`${x(ne,"LoginCard").$$render(e,{},{},{})}`})}

  ${x(Z,"Modal").$$render(e,{bgTint:"bg-[rgba(0,0,0,0.1)]",showModal:y},{showModal:l=>{y=l,L=!1}},{default:()=>`
    ${x(le,"Dropzone").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}`})}

  
  <div class="${"z-50 md:py-4 md:px-[7%] fixed "+m(_,!0)+" ease-in-out w-full"}">${x(xe,"Navbar").$$render(e,{},{},{})}</div>

  
  

  <div class="px-[7%] pt-32 md:block">${b.default?b.default({}):""}
    ${x(we,"Footer").$$render(e,{contactLinkClicked:S},{contactLinkClicked:l=>{S=l,L=!1}},{})}</div>

  
  </main>`;while(!L);return r(),$(),f(),p(),h(),v(),k(),M(),T(),H});export{Te as default};
