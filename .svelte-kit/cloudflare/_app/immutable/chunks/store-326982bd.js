import{d as n,w as e}from"./index-ee8a9e57.js";import"./index-9580a2af.js";function C(s){const t=s-1;return t*t*t+1}function h(s){return Math.sin(-13*(s+1)*Math.PI/2)*Math.pow(2,-10*s)+1}function w(s){return--s*s*s*s*s+1}function i(s,{easing:t=h,duration:l=3e3}){return{easing:t,duration:l,css:(c,r)=>` opacity: ${.8*r+c};
        filter: hue-rotate(${.15*r}turn) 
                blur(${r}px);
      `}}const _=e(!1),j=e(0),a=e(0),f=n(a,(s,t)=>{setTimeout(()=>{t(s)},50)}),y=n([a,f],([s,t])=>s-t),u=e(0);n([a,u],([s,t])=>1-s/t);const M=e(0),d=e(0),o=n(d,s=>s<768);n(o,s=>s?i:()=>{});n(o,s=>s?i:()=>{});const Y=e({home:{name:"Home",href:"/",title:"Thinksolve.io \u{1F4AB}",isCurrent:!1},login:{name:"Login",href:"/login",title:"Login \u{1F680}",isCurrent:!1},plans:{name:"Plans",href:"/plans",title:"Plans",isCurrent:!1},math:{name:"math",href:"/math",title:"math",isCurrent:!1},schools:{name:"schools",href:"/schools",title:"Schools \u{1F4DA}",isCurrent:!1},jitsi:{name:"jitsi",href:"/jitsi",title:"jitsi \u{1F680}",isCurrent:!1},physics:{name:"physics",href:"/physics",title:"physics \u{1F680}",isCurrent:!1}}),m=e(!1),I=e(""),L=e(""),O="rgb(242,247,250)",g="pink",P="rgb(38, 35, 51)",p="#8f86b8";n(m,(s,t)=>{t(s?p:g)});export{L as a,o as b,y as c,Y as d,h as e,_ as f,u as g,d as h,m as i,C as j,P as k,j as l,O as m,w as q,I as r,a as s,M as w};
