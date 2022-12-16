import{c as f,e as r,d as i}from"./index.js";const u=f((s,t,e,a)=>{let{showModal:o=!1}=t,{bgTint:l="bg-[rgba(0,0,0,0.4)]"}=t,d;return t.showModal===void 0&&e.showModal&&o!==void 0&&e.showModal(o),t.bgTint===void 0&&e.bgTint&&l!==void 0&&e.bgTint(l),`


<button class="${"z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center "+r(o?`${l} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${i("this",d,0)}>${a.default?a.default({}):""}</button>`});export{u as M};
