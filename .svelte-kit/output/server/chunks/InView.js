import{c as r,d as m}from"./index.js";const n=r((u,e,l,t)=>{let{vanilla:o}=e,{once:v}=e,{onview:a=()=>console.log("i \u2764\uFE0F slots")}=e,h,{single:i}=e,{root:d=null}=e,{threshold:c=0}=e,{margin:f="0px"}=e;return e.vanilla===void 0&&l.vanilla&&o!==void 0&&l.vanilla(o),e.once===void 0&&l.once&&v!==void 0&&l.once(v),e.onview===void 0&&l.onview&&a!==void 0&&l.onview(a),e.single===void 0&&l.single&&i!==void 0&&l.single(i),e.root===void 0&&l.root&&d!==void 0&&l.root(d),e.threshold===void 0&&l.threshold&&c!==void 0&&l.threshold(c),e.margin===void 0&&l.margin&&f!==void 0&&l.margin(f),`


${o?"":`<div${m("this",h,0)}>${t.default?t.default({}):""}</div>`}`});export{n as I};
