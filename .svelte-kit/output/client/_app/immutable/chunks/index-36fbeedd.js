import"./index-30e2a2cf.js";function u(t){const n=t-1;return n*n*n+1}function h(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function y(t){return--t*t*t*t*t+1}function $(t,{delay:n=0,duration:i=400,easing:c=u,x:o=0,y:d=0,opacity:s=0}={}){const a=getComputedStyle(t),e=+a.opacity,m=a.transform==="none"?"":a.transform,g=e*(1-s);return{delay:n,duration:i,easing:c,css:(l,p)=>`
			transform: ${m} translate(${(1-l)*o}px, ${(1-l)*d}px);
			opacity: ${e-g*p}`}}function b(t,{delay:n=0,duration:i=400,easing:c=u}={}){const o=getComputedStyle(t),d=+o.opacity,s=parseFloat(o.height),a=parseFloat(o.paddingTop),e=parseFloat(o.paddingBottom),m=parseFloat(o.marginTop),g=parseFloat(o.marginBottom),l=parseFloat(o.borderTopWidth),p=parseFloat(o.borderBottomWidth);return{delay:n,duration:i,easing:c,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*d};height: ${r*s}px;padding-top: ${r*a}px;padding-bottom: ${r*e}px;margin-top: ${r*m}px;margin-bottom: ${r*g}px;border-top-width: ${r*l}px;border-bottom-width: ${r*p}px;`}}function _(t,{delay:n=0,duration:i=400,easing:c=u,start:o=0,opacity:d=0}={}){const s=getComputedStyle(t),a=+s.opacity,e=s.transform==="none"?"":s.transform,m=1-o,g=a*(1-d);return{delay:n,duration:i,easing:c,css:(l,p)=>`
			transform: ${e} scale(${1-m*p});
			opacity: ${a-g*p}
		`}}export{b as a,h as e,$ as f,y as q,_ as s};
