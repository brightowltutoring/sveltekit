import{a2 as l}from"./index-688ca27e.js";function g(t){const n=t-1;return n*n*n+1}function h(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function $(t){return--t*t*t*t*t+1}function b(t,{delay:n=0,duration:s=400,easing:e=l}={}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:e,css:i=>`opacity: ${i*o}`}}function _(t,{delay:n=0,duration:s=400,easing:e=g,x:o=0,y:i=0,opacity:p=0}={}){const a=getComputedStyle(t),c=+a.opacity,m=a.transform==="none"?"":a.transform,u=c*(1-p);return{delay:n,duration:s,easing:e,css:(f,d)=>`
			transform: ${m} translate(${(1-f)*o}px, ${(1-f)*i}px);
			opacity: ${c-u*d}`}}function x(t,{delay:n=0,duration:s=400,easing:e=g}={}){const o=getComputedStyle(t),i=+o.opacity,p=parseFloat(o.height),a=parseFloat(o.paddingTop),c=parseFloat(o.paddingBottom),m=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),f=parseFloat(o.borderTopWidth),d=parseFloat(o.borderBottomWidth);return{delay:n,duration:s,easing:e,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*i};height: ${r*p}px;padding-top: ${r*a}px;padding-bottom: ${r*c}px;margin-top: ${r*m}px;margin-bottom: ${r*u}px;border-top-width: ${r*f}px;border-bottom-width: ${r*d}px;`}}function F(t,{delay:n=0,duration:s=400,easing:e=g,start:o=0,opacity:i=0}={}){const p=getComputedStyle(t),a=+p.opacity,c=p.transform==="none"?"":p.transform,m=1-o,u=a*(1-i);return{delay:n,duration:s,easing:e,css:(f,d)=>`
			transform: ${c} scale(${1-m*d});
			opacity: ${a-u*d}
		`}}export{x as a,b,h as e,_ as f,$ as q,F as s};
