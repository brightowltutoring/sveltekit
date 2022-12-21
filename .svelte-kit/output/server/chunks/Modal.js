import{c as i,e as r,d as c}from"./index.js";const s=i((u,t,e,a)=>{let{showModal:o=!1}=t,{bgTint:l="bg-[rgba(0,0,0,0.4)]"}=t,{body:d}=t,f;return t.showModal===void 0&&e.showModal&&o!==void 0&&e.showModal(o),t.bgTint===void 0&&e.bgTint&&l!==void 0&&e.bgTint(l),t.body===void 0&&e.body&&d!==void 0&&e.body(d),`


<button class="${"z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center "+r(o?`${l} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${c("this",f,0)}>${a.default?a.default({}):""}</button>`});export{s as M};
