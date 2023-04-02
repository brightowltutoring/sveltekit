import{c as h,v as m,e as d,b as T,f as x}from"./index3.js";import{M as g}from"./Modal.js";function k(a){return Math.sin(-13*(a+1)*Math.PI/2)*Math.pow(2,-10*a)+1}const U=h((a,e,t,p)=>{let{button:o}=e;const{url:c,opacityTW:l,text:s}=o;let r=!1,i="",n="";e.button===void 0&&t.button&&o!==void 0&&t.button(o);let u,b;do u=!0,b=`
${m(g,"Modal").$$render(a,{body:!0,bgTW:"bg-[rgba(0,0,0,0.1)]",showModal:r},{showModal:w=>{r=w,u=!1}},{default:()=>`<iframe title="Thinksolve Plans" class="${d(n,!0)+" fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl transition-opacity duration-200 ease-in md:w-[80%] md:-translate-y-5"}"${T("src",i,0)}></iframe>`})}


<button class="${"m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md group-hover:bg-opacity-80 "+d(l,!0)+" "+d(e.class,!0)}">
	<span>${d(s)}</span></button>`;while(!u);return b}),C=h((a,e,t,p)=>{let{inScale:o={}}=e,{cardText:c=""}=e,{cardTitle:l=""}=e,{payNowUrl:s=""}=e,{payLaterUrl:r=""}=e,{buttonColor:i}=e;const n=[{resetter:!1,url:s,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:r,opacityTW:"bg-opacity-70",text:"Pay Later"}];return e.inScale===void 0&&t.inScale&&o!==void 0&&t.inScale(o),e.cardText===void 0&&t.cardText&&c!==void 0&&t.cardText(c),e.cardTitle===void 0&&t.cardTitle&&l!==void 0&&t.cardTitle(l),e.payNowUrl===void 0&&t.payNowUrl&&s!==void 0&&t.payNowUrl(s),e.payLaterUrl===void 0&&t.payLaterUrl&&r!==void 0&&t.payLaterUrl(r),e.buttonColor===void 0&&t.buttonColor&&i!==void 0&&t.buttonColor(i),`<plans-card class="group block rounded-xl bg-[#f2f7fa] p-5 text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#262333] dark:hover:shadow-xl"><p class="py-5 text-center font-Poppins text-4xl">
		${d(l)}</p>

	${x(n,u=>`${m(U,"PlansButton").$$render(a,{button:u,class:i+" inline-block group-hover:scale-95 group-hover:animate-pulse"},{},{})}`)}

	<div class="py-4">
		${d(c)}</div></plans-card>

`}),v={red:"f34d4e",blue:"2aa5d6",yellow:"fea45c"},f={1:"bg-[#f34d4e]",2:"bg-[#2aa5d6]",3:"bg-[#fea45c]"},P=[{payNowUrl:y("classico","stripe",v.red,"&a2=2"),payLaterUrl:y("classico","invoice",v.red,"&a1=1"),buttonColor:f[1],cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium."},{payNowUrl:y("mock","stripe",v.blue,"&a2=2"),payLaterUrl:y("mock","invoice",v.blue,"&a1=2"),buttonColor:f[2],cardTitle:"Mock",cardText:"Get test ready. We provide a live mock test session with answers to completed questions. Digital solution key available as a +2hr premium."}];function y(a,e,t,p){return`https://calendly.com/thinksolve/${a}-${e}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${t}${p}`}const L=h((a,e,t,p)=>`<plans-section class="mx-2 grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16">${x(P,({buttonColor:o,payNowUrl:c,payLaterUrl:l,cardTitle:s,cardText:r},i)=>{let n={delay:100*i,duration:1e3,easing:k};return`
		${m(C,"PlansCard").$$render(a,{inScale:n,buttonColor:o,payNowUrl:c,payLaterUrl:l,cardText:r,cardTitle:s},{},{})}`})}</plans-section>

`);export{L as P};
