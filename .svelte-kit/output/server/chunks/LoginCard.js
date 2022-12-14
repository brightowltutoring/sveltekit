import{c as d,a as p,e as c,v as u,d as a,h as E}from"./index.js";import"./firebase.js";import{i as x,s as _,b as G,e as j}from"./store.js";function A(e){return()=>{throw new Error(`Cannot call ${e}(...) on the server`)}}const H=A("goto"),q=d((e,s,i,$)=>`

<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z"></path></svg>`),R=d((e,s,i,$)=>{let t,o;return o=p(x,n=>t=n),o(),`<signin-button class="${"group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+c("group-hover:bg-opacity-90",!0)+" text-white flex justify-center items-center gap-5"}"><span class="group-hover:scale-[1.15] duration-500">${u(q,"IconTwitter").$$render(e,{},{},{})}</span>
  
  <span>Sign-in with Twitter</span></signin-button>`}),W=d((e,s,i,$)=>`<svg height="24" width="24" viewBox="0 0 210 210"><path fill="white" d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z"></path></svg>`),O=d((e,s,i,$)=>{let t,o;return o=p(x,n=>t=n),o(),`<signin-button class="${"group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+c("group-hover:bg-opacity-90",!0)+" text-white flex justify-center items-center gap-5"}"><span class="group-hover:scale-[1.15] duration-500">${u(W,"IconGoogle").$$render(e,{},{},{})}
    </span>
  
  <span>Sign-in with Google</span></signin-button>`}),J=d((e,s,i,$)=>`<svg height="24" width="24" viewBox="0 0 485 485"><path fill="white" d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"></path></svg>`),K=d((e,s,i,$)=>{let t,o,n;n=p(x,w=>o=w);let m,g,v,h="",b=globalThis.magicLinkInputVisible;return t=m,n(),`<signin-button class="${"group bg-emerald-500 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+c("group-hover:bg-opacity-80",!0)+" text-white flex justify-center items-center gap-5"}"${a("this",g,0)}><span class="group-hover:scale-[1.15] duration-500">${u(J,"IconEmail").$$render(e,{},{},{})}</span>
  
  <span>Get Magic Link</span></signin-button>

${b?`<input class="${"text-center p-3 mt-3 w-full "+c(t,!0)+" focus:outline-none"}" type="email" placeholder="email"${a("this",v,0)}${a("value",h,0)}>`:""}

<span id="emailStatusMessage"></span>`}),N=d((e,s,i,$)=>`
<svg class="-rotate-90" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path fill="white" d="M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"></path><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z"></path></svg>`),Q=d((e,s,i,$)=>{let t,o,n;n=p(x,L=>o=L);let m="+1",g,v,h,b="",w=globalThis.phoneInputVisible;return t=g,n(),`
${`<div class="${"w-full group bg-rose-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+c("group-hover:bg-opacity-80",!0)+" text-white flex justify-center items-center gap-5"}"${a("this",v,0)}><span class="group-hover:scale-[1.15] duration-500">${u(N,"IconPhone").$$render(e,{},{},{})}</span>
    
    <span>Get SMS Code</span></div>

  <div class="grid grid-cols-6 w-full text-black">${w?`<input class="col-span-1 text-center p-3 mt-3 focus:outline-none border-r-2"${a("value",m,0)}>
      <input class="${"col-span-5 text-center p-3 mt-3 focus:outline-none "+c(t,!0)}" type="phone" placeholder="phone"${a("this",h,0)}${a("value",b,0)}>`:""}</div>`}

<div id="recaptcha-container"></div>
<div id="phoneStatusMessage" class="${"p-3 font-Poppins "+c(o?"text-lime-100":"text-rose-600",!0)}"></div>

`}),ee=d((e,s,i,$)=>{let t,o,n,m,g,v,h,b;o=p(_,r=>t=r),m=p(G,r=>n=r),v=p(x,r=>g=r),b=p(j,r=>h=r);let{noTransition:w=!1}=s,L,B,I,M;function S(r="/login"){let l=3e3,f=parseInt(l/1e3);M=setInterval(()=>{f>0&&(f+=-1,document.getElementById("timeLeft").innerHTML=` ${f}`)},1e3),I=setTimeout(()=>{E(_,t=!1,t),document.getElementById("timeLeft").innerHTML=3,H(r)},l)}async function D(r){let l=localStorage.getItem("redirectUrlFromLS");if(console.log("redirectUrlFromLS",l),l)S(l);else{const{getFirestore:f,collection:F,getDocs:z}=await import("firebase/firestore/lite"),{app:P}=await import("./firebase.js"),V=f(P),y=await z(F(V,"email")),U=y.size,k=y.docs;for(const C in k){const T=k[C];if(r===T.id){localStorage.setItem("redirectUrlFromLS",T.data().redirectUrl),l=localStorage.getItem("redirectUrlFromLS"),S(l);return}parseInt(C)===U-1&&(localStorage.setItem("redirectUrlFromLS","/"),l=localStorage.getItem("redirectUrlFromLS"),S(l))}}}return s.noTransition===void 0&&i.noTransition&&w!==void 0&&i.noTransition(w),t||(clearInterval(M),clearTimeout(I)),t&&n&&D(B),o(),m(),v(),b(),`${n?"":`<login-card class="${"block relative text-xl hover:scale-[1.01] font-Poppins shadow-md "+c(g?"hover:shadow-xl ":"hover:shadow-lg",!0)+" rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px]"}"${a("style",`background:${h}`,0)}>

      ${`${u(K,"MagicLinkSection").$$render(e,{},{},{})}
        <p class="py-3"></p>
        ${u(Q,"PhoneAuthSection").$$render(e,{},{},{})}`}

      

      ${u(O,"GoogleLoginButton").$$render(e,{},{},{})}
      ${u(R,"TwitterLoginButton").$$render(e,{},{},{})}</login-card>`}

${n?`<logout-card class="${"relative block hover:scale-[1.01] font-Poppins shadow-md "+c(g?"hover:shadow-xl ":"hover:shadow-lg",!0)+" rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 w-11/12 sm:w-[500px]"}"${a("style",`background:${h}`,0)}><p${a("this",L,0)}>Welcome User</p>

      
      <div>Redirecting to your page in
        <div style="font-size: 30px;" id="timeLeft">\u230A\u03C0\u230B</div></div>

      
      <button>Logout</button></logout-card>`:""}`});export{ee as L};
