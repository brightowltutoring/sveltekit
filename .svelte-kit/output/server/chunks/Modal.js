import{c as r,e as i,d as f}from"./index.js";const u=r((c,t,e,a)=>{let{showModal:o=!1}=t,{bgTint:l="bg-[rgba(0,0,0,0.4)]"}=t,d;return t.showModal===void 0&&e.showModal&&o!==void 0&&e.showModal(o),t.bgTint===void 0&&e.bgTint&&l!==void 0&&e.bgTint(l),`

<button class="${"z-50 top-0 left-0 fixed w-full h-full grid place-items-center "+i(o?`${l} `:"hidden",!0)+" overflow-y-scroll overflow-x-clip"}"${f("this",d,0)}>
  ${a.default?a.default({}):""}
  </button>`});export{u as M};
