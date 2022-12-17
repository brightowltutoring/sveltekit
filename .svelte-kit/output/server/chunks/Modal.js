import{c as n,a as y,e as d,d as b}from"./index.js";import{b as g}from"./store.js";const p=n((h,t,e,s)=>{let c,r;r=y(g,u=>c=u);let{opacityEase:a}=t,{showModal:o=!1}=t,{bgTint:i="bg-[rgba(0,0,0,0.4)]"}=t,f,l;return t.opacityEase===void 0&&e.opacityEase&&a!==void 0&&e.opacityEase(a),t.showModal===void 0&&e.showModal&&o!==void 0&&e.showModal(o),t.bgTint===void 0&&e.bgTint&&i!==void 0&&e.bgTint(i),a&&o&&!c?setTimeout(()=>{l="opacity-100 transition-opacity duration-300 ease-in"},50):l="opacity-100 transition-opacity",r(),`


<button class="${"opacity-0 "+d(l,!0)+" z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center "+d(o?`${i} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${b("this",f,0)}>${s.default?s.default({}):""}</button>`});export{p as M};
