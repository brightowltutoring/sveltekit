import{ab as b,ac as h}from"./index.d162f37a.js";function g(t){const a=t-1;return a*a*a+1}function v(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function w(t){return--t*t*t*t*t+1}function F(t,{delay:a=0,duration:c=400,easing:p=b}={}){const i=+getComputedStyle(t).opacity;return{delay:a,duration:c,easing:p,css:o=>`opacity: ${o*i}`}}function C(t,{delay:a=0,duration:c=400,easing:p=g,x:i=0,y:o=0,opacity:d=0}={}){const e=getComputedStyle(t),l=+e.opacity,n=e.transform==="none"?"":e.transform,s=l*(1-d),[u,$]=h(i),[m,_]=h(o);return{delay:a,duration:c,easing:p,css:(y,f)=>`
			transform: ${n} translate(${(1-y)*u}${$}, ${(1-y)*m}${_});
			opacity: ${l-s*f}`}}function M(t,{delay:a=0,duration:c=400,easing:p=g,axis:i="y"}={}){const o=getComputedStyle(t),d=+o.opacity,e=i==="y"?"height":"width",l=parseFloat(o[e]),n=i==="y"?["top","bottom"]:["left","right"],s=n.map(r=>`${r[0].toUpperCase()}${r.slice(1)}`),u=parseFloat(o[`padding${s[0]}`]),$=parseFloat(o[`padding${s[1]}`]),m=parseFloat(o[`margin${s[0]}`]),_=parseFloat(o[`margin${s[1]}`]),y=parseFloat(o[`border${s[0]}Width`]),f=parseFloat(o[`border${s[1]}Width`]);return{delay:a,duration:c,easing:p,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*d};${e}: ${r*l}px;padding-${n[0]}: ${r*u}px;padding-${n[1]}: ${r*$}px;margin-${n[0]}: ${r*m}px;margin-${n[1]}: ${r*_}px;border-${n[0]}-width: ${r*y}px;border-${n[1]}-width: ${r*f}px;`}}function S(t,{delay:a=0,duration:c=400,easing:p=g,start:i=0,opacity:o=0}={}){const d=getComputedStyle(t),e=+d.opacity,l=d.transform==="none"?"":d.transform,n=1-i,s=e*(1-o);return{delay:a,duration:c,easing:p,css:(u,$)=>`
			transform: ${l} scale(${1-n*$});
			opacity: ${e-s*$}
		`}}export{M as a,F as b,v as e,C as f,w as q,S as s};
