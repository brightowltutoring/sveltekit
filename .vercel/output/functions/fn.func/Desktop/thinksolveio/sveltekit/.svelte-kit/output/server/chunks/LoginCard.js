import{c,e as m,v as s,b as g,a as T,d as P}from"./index3.js";import{a as C,e as U}from"./store.js";import"ua-parser-js";import"./firebase.js";const W=c((e,o,r,l)=>`<svg height="24" width="24" viewBox="0 0 210 210"><path fill="white" d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z"></path></svg>`),b=c((e,o,r,l)=>{let{bgColorTW:t="bg-rose-400"}=o,{innerText:n=""}=o;return o.bgColorTW===void 0&&r.bgColorTW&&t!==void 0&&r.bgColorTW(t),o.innerText===void 0&&r.innerText&&n!==void 0&&r.innerText(n),`<button class="${"group z-50 flex w-full items-center justify-center gap-5 rounded-md p-4 text-white "+m(t,!0)+" duration-200 hover:scale-[1.01] hover:shadow-md group-hover:bg-opacity-90 dark:bg-opacity-80 dark:group-hover:bg-opacity-90"}"><span class="duration-500 group-hover:scale-[1.15]">
		${l.default?l.default({}):""}</span>

	<span>${m(n)}</span></button>`}),E=c((e,o,r,l)=>`${s(b,"LoginButton").$$render(e,{innerText:"Sign-in with Google",bgColorTW:"bg-[#4285f4]"},{},{default:()=>`${s(W,"IconGoogle").$$render(e,{},{},{})}`})}`),G=c((e,o,r,l)=>`<svg height="24" width="24" viewBox="0 0 485 485"><path fill="white" d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"></path></svg>`),A=c((e,o,r,l)=>{let t,n,a,v="",p=globalThis.magicLinkInputVisible,h;return t=n,`
${s(b,"LoginButton").$$render(e,{innerText:"Get Magic Link",bgColorTW:"bg-emerald-500"},{},{default:()=>`${s(G,"IconEmail").$$render(e,{},{},{})}`})}

${p?`<input class="${"mt-3 w-full p-3 text-center "+m(t,!0)+" focus:outline-none"}" type="email" placeholder="email"${g("this",a,0)}${g("value",v,0)}>`:""}

<span${g("this",h,0)}></span>`}),H=c((e,o,r,l)=>`
<svg class="-rotate-90" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path fill="white" d="M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"></path><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z"></path></svg>`),k=c((e,o,r,l)=>{let t,n="+1",a=!1,v,p="",h,w=globalThis.phoneInputVisible;return t=a,`${`
	${s(b,"LoginButton").$$render(e,{innerText:"Get SMS Code",bgColorTW:"bg-rose-400"},{},{default:()=>`${s(H,"IconPhone").$$render(e,{},{},{})}`})}

	
	

	<div class="grid w-full grid-cols-6 text-black">${w?`<input class="col-span-1 mt-3 border-r-2 p-3 text-center focus:outline-none"${g("value",n,0)}>
			<input class="${"col-span-5 mt-3 p-3 text-center focus:outline-none "+m(t,!0)}" type="phone" placeholder="phone"${g("this",v,0)}${g("value",p,0)}>`:""}</div>`}

<div id="recaptcha-container"></div>
<div class="hidden p-3 font-Poppins text-rose-600 dark:text-lime-100"${g("this",h,0)}></div>


`});function j(e){return()=>{throw new Error(`Cannot call ${e}(...) on the server`)}}const q=j("goto");const R={code:`login-card.svelte-vvnroh,logout-card.svelte-vvnroh{position:relative;margin-left:auto;margin-right:auto;display:block;width:90vw;border-radius:1rem;--tw-bg-opacity:1;background-color:rgb(242 247 250 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:2.5rem;padding-bottom:2.5rem;font-family:Poppins, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:300ms
}login-card.svelte-vvnroh:hover,logout-card.svelte-vvnroh:hover{--tw-scale-x:1.01;--tw-scale-y:1.01;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:1.5rem
}@media(min-width: 640px){login-card.svelte-vvnroh,logout-card.svelte-vvnroh{width:500px;padding:2.5rem
    }}html.dark-mode .svelte-vvnroh:where(login-card, logout-card){--tw-bg-opacity:1;background-color:rgb(38 35 51 / var(--tw-bg-opacity))
}`,map:null},J=c((e,o,r,l)=>{let t,n,a,v;n=T(C,d=>t=d),v=T(U,d=>a=d);let{noTransition:p=!1}=o,h,w,f,x;function $(d="/login"){let i=3e3,u=i/1e3;x=setInterval(()=>{u>0&&(u+=-1,document.getElementById("timeLeft").innerHTML=` ${u}`)},1e3),f=setTimeout(()=>{P(C,t=!1,t),document.getElementById("timeLeft").innerHTML="3",q(d)},i)}async function M(d){let i=localStorage.getItem("redirectUrlFromLS");if(console.log("redirectUrlFromLS",i),i)$(i);else{const{getFirestore:u,collection:_,getDocs:F}=await import("firebase/firestore/lite"),{app:B}=await import("./firebase.js"),V=u(B),L=await F(_(V,"email")),z=L.size,S=L.docs;for(const y in S){const I=S[y];if(d===I.id){localStorage.setItem("redirectUrlFromLS",I.data().redirectUrl),i=localStorage.getItem("redirectUrlFromLS"),$(i);return}parseInt(y)===z-1&&(localStorage.setItem("redirectUrlFromLS","/"),i=localStorage.getItem("redirectUrlFromLS"),$(i))}}}return o.noTransition===void 0&&r.noTransition&&p!==void 0&&r.noTransition(p),e.css.add(R),t||(clearInterval(x),clearTimeout(f)),t&&a&&M(w),n(),v(),`<main class="svelte-vvnroh">
	${a?"":`
		
		<login-card class="svelte-vvnroh">${s(E,"GoogleLoginButton").$$render(e,{},{},{})}
			<p class="py-3 svelte-vvnroh"></p>
			<div class="hidden pwa:block svelte-vvnroh">${s(k,"PhoneAuthSection").$$render(e,{},{},{})}</div>
			<div class="pwa:hidden svelte-vvnroh">${s(A,"MagicLinkSection").$$render(e,{},{},{})}

				<p class="py-3 svelte-vvnroh"></p>
				${s(k,"PhoneAuthSection").$$render(e,{},{},{})}</div>

			</login-card>
		`}

	${a&&t?`
		
		<logout-card class="svelte-vvnroh"><p class="svelte-vvnroh">${m(h)}</p>

			<div class="svelte-vvnroh">Redirecting in
				<div class="p-5 text-5xl svelte-vvnroh" id="timeLeft">3</div></div>

			<button class="rounded-lg bg-rose-300 p-4 text-2xl font-medium text-white duration-200 ease-in hover:scale-110 hover:rounded-xl svelte-vvnroh">Logout</button></logout-card>
		`:""}
</main>`});export{J as L};
