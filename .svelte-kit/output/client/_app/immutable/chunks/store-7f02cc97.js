import{d as i,w as t}from"./index-f3ce743b.js";import"./index-abd81730.js";function f(){return window.matchMedia("(display-mode: standalone)").matches}const p=t(!1),o=t(0),r=i(o,(e,s)=>{setTimeout(()=>{s(e)},50)}),w=i([o,r],([e,s])=>e-s),n=t(0);function u(){{const s=window.matchMedia(`(max-width: ${768}px)`);console.log("LANDED"),n.set(window.innerWidth),s.addEventListener("change",a=>{a.matches?(n.set(window.innerWidth),console.log(`UNDER ${768}px`)):(n.set(window.innerWidth),console.log(`OVER ${768}px`))})}}const g=i(n,e=>e<768),C=t(!1),k=t(!1),x=t({home:{name:"Home",href:"/",title:"Thinksolve.io \u{1F4AB}",isCurrent:!1},login:{name:"Login",href:"/login",title:"Login \u{1F680}",isCurrent:!1},plans:{name:"Plans",href:"/plans",title:"Plans \u{1F4A1}",isCurrent:!1},homework:{name:"Homework",href:"/homework",title:"Homework \u{1F4DA}",isCurrent:!1},classroom:{name:"Classroom",href:"/classroom",title:"Classroom \u{1F34E}",isCurrent:!1},schools:{name:"Schools",href:"/schools",title:"Schools",isCurrent:!1},stripe:{name:"Stripe",href:"/stripe",title:"Stripe \u{1F4B0}",isCurrent:!1},physics:{name:"physics",href:"/physics",title:"physics \u{1F680}",isCurrent:!1},math:{name:"math",href:"/math",title:"math",isCurrent:!1}}),l=t(!1),h="rgb(242,247,250)",c="rgb(38, 35, 51)",W=i(l,(e,s)=>{s(e?c:h)});export{p as a,f as b,k as c,u as d,W as e,w as f,l as i,g as l,C as n,x as r,o as s};
