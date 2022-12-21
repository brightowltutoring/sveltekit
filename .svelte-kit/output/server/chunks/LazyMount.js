import{c as f,d as h,v as m}from"./index.js";const w=f((v,e,t,i)=>{let{vanilla:o}=e,{once:l}=e,{onview:a=()=>console.log("i ❤️ slots")}=e,u,{single:n}=e,{root:d=null}=e,{threshold:r=0}=e,{margin:c="0px"}=e;return e.vanilla===void 0&&t.vanilla&&o!==void 0&&t.vanilla(o),e.once===void 0&&t.once&&l!==void 0&&t.once(l),e.onview===void 0&&t.onview&&a!==void 0&&t.onview(a),e.single===void 0&&t.single&&n!==void 0&&t.single(n),e.root===void 0&&t.root&&d!==void 0&&t.root(d),e.threshold===void 0&&t.threshold&&r!==void 0&&t.threshold(r),e.margin===void 0&&t.margin&&c!==void 0&&t.margin(c),`


${o?"":`<div${h("this",u,0)}>${i.default?i.default({}):""}</div>`}`}),_=f((v,e,t,i)=>{let{Import:o=async()=>{}}=e,l;const a=async()=>l=await o();return e.Import===void 0&&t.Import&&o!==void 0&&t.Import(o),`


${m(w,"InView").$$render(v,{onview:a},{},{default:()=>`${l?`${m(l.default,"Component.default").$$render(v,Object.assign(e),{},{})}`:""}`})}


`});export{w as I,_ as L};
