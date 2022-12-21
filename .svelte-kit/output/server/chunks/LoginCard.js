import{c as d,a as $,e as l,v as g,d as c,h as U}from"./index.js";import"./firebase.js";import{i as f,s as T,b as E,e as G}from"./store.js";function A(e){return()=>{throw new Error(`Cannot call ${e}(...) on the server`)}}const H=A("goto"),q=d((e,n,i,p)=>`

<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z"></path></svg>`),R=d((e,n,i,p)=>{let t,o;return o=$(f,s=>t=s),o(),`<signin-button class="${"group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+l("group-hover:bg-opacity-90",!0)+" text-white flex justify-center items-center gap-5"}"><span class="group-hover:scale-[1.15] duration-500">${g(q,"IconTwitter").$$render(e,{},{},{})}</span>
  
  <span>Sign-in with Twitter</span></signin-button>`}),X=d((e,n,i,p)=>`<svg height="24" width="24" viewBox="0 0 210 210"><path fill="white" d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z"></path></svg>`),Y=d((e,n,i,p)=>{let t,o;return o=$(f,s=>t=s),o(),`<signin-button class="${"group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+l("group-hover:bg-opacity-90",!0)+" text-white flex justify-center items-center gap-5"}"><span class="group-hover:scale-[1.15] duration-500">${g(X,"IconGoogle").$$render(e,{},{},{})}
    </span>
  
  <span>Sign-in with Google</span></signin-button>`}),O=d((e,n,i,p)=>`<svg height="24" width="24" viewBox="0 0 485 485"><path fill="white" d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"></path></svg>`),W=d((e,n,i,p)=>{let t,o,s;s=$(f,b=>o=b);let m,u,w,h="",v=globalThis.magicLinkInputVisible;return t=m,s(),`<signin-button class="${"group bg-emerald-500 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+l("group-hover:bg-opacity-80",!0)+" text-white flex justify-center items-center gap-5"}"${c("this",u,0)}><span class="group-hover:scale-[1.15] duration-500">${g(O,"IconEmail").$$render(e,{},{},{})}</span>
  
  <span>Get Magic Link</span></signin-button>

${v?`<input class="${"text-center p-3 mt-3 w-full "+l(t,!0)+" focus:outline-none"}" type="email" placeholder="email"${c("this",w,0)}${c("value",h,0)}>`:""}

<span id="emailStatusMessage"></span>`}),J=d((e,n,i,p)=>`
<svg class="-rotate-90" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path fill="white" d="M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"></path><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z"></path></svg>`),K=d((e,n,i,p)=>{let t,o,s;s=$(f,y=>o=y);let m="+1",u,w,h,v="",b=globalThis.phoneInputVisible;return t=u,s(),`
${`<div class="${"w-full group bg-rose-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+l("group-hover:bg-opacity-80",!0)+" text-white flex justify-center items-center gap-5"}"${c("this",w,0)}><span class="group-hover:scale-[1.15] duration-500">${g(J,"IconPhone").$$render(e,{},{},{})}</span>
    
    <span>Get SMS Code</span></div>

  <div class="grid grid-cols-6 w-full text-black">${b?`<input class="col-span-1 text-center p-3 mt-3 focus:outline-none border-r-2"${c("value",m,0)}>
      <input class="${"col-span-5 text-center p-3 mt-3 focus:outline-none "+l(t,!0)}" type="phone" placeholder="phone"${c("this",h,0)}${c("value",v,0)}>`:""}</div>`}

<div id="recaptcha-container"></div>
<div id="phoneStatusMessage" class="${"p-3 font-Poppins "+l(o?"text-lime-100":"text-rose-600",!0)}"></div>

`});const N={code:`.card-styles.svelte-kjxzgo{position:relative;margin-left:auto;margin-right:auto;display:block;width:90vw;border-radius:1rem;padding-top:2.5rem;padding-bottom:2.5rem;padding-left:1.25rem;padding-right:1.25rem;font-family:Poppins, sans-serif;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:300ms
}.card-styles.svelte-kjxzgo:hover{--tw-scale-x:1.01;--tw-scale-y:1.01;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:1.5rem
}@media(min-width: 640px){.card-styles.svelte-kjxzgo{width:500px;padding:2.5rem
    }}`,map:null},te=d((e,n,i,p)=>{let t,o,s,m,u,w,h,v;o=$(T,r=>t=r),m=$(E,r=>s=r),w=$(f,r=>u=r),v=$(G,r=>h=r);let{noTransition:b=!1}=n,y,z,k,S;function L(r="/login"){let a=3e3,x=parseInt(a/1e3);S=setInterval(()=>{x>0&&(x+=-1,document.getElementById("timeLeft").innerHTML=` ${x}`)},1e3),k=setTimeout(()=>{U(T,t=!1,t),document.getElementById("timeLeft").innerHTML=3,H(r)},a)}async function B(r){let a=localStorage.getItem("redirectUrlFromLS");if(console.log("redirectUrlFromLS",a),a)L(a);else{const{getFirestore:x,collection:D,getDocs:F}=await import("firebase/firestore/lite"),{app:j}=await import("./firebase.js"),V=x(j),I=await F(D(V,"email")),P=I.size,M=I.docs;for(const C in M){const _=M[C];if(r===_.id){localStorage.setItem("redirectUrlFromLS",_.data().redirectUrl),a=localStorage.getItem("redirectUrlFromLS"),L(a);return}parseInt(C)===P-1&&(localStorage.setItem("redirectUrlFromLS","/"),a=localStorage.getItem("redirectUrlFromLS"),L(a))}}}return n.noTransition===void 0&&i.noTransition&&b!==void 0&&i.noTransition(b),e.css.add(N),t||(clearInterval(S),clearTimeout(k)),t&&s&&B(z),o(),m(),w(),v(),`<main class="w-screen flex justify-center items-center">${s?"":`<login-card class="${"card-styles text-xl "+l(u?"hover:shadow-xl ":"hover:shadow-lg",!0)+" svelte-kjxzgo"}"${c("style",`background:${h}`,0)}>${`${g(W,"MagicLinkSection").$$render(e,{},{},{})}

          <p class="py-3"></p>
          ${g(K,"PhoneAuthSection").$$render(e,{},{},{})}`}

        ${g(Y,"GoogleLoginButton").$$render(e,{},{},{})}

        ${g(R,"TwitterLoginButton").$$render(e,{},{},{})}</login-card>`}

  ${s?`<logout-card class="${"text-xl card-styles "+l(u?"hover:shadow-xl":"hover:shadow-lg",!0)+" svelte-kjxzgo"}"${c("style",`background:${h} `,0)}><p>${l(y)}</p>

        <div>Redirecting in
          <div class="text-5xl p-5" id="timeLeft">3</div></div>

        <button class="text-2xl font-medium bg-rose-300 text-white rounded-lg p-4 hover:scale-110 hover:rounded-xl duration-200 ease-in">Logout</button></logout-card>`:""}
</main>`});export{te as default};
