import{S as a,i as r,s as c,o as l}from"./index-2ea15190.js";function d(){const t=document.createElement("script");t.src="https://assets.calendly.com/assets/external/widget.js",t.type="text/javascript",document.head.appendChild(t);const e=document.createElement("link");e.href="https://assets.calendly.com/assets/external/widget.css",e.rel="stylesheet",document.head.appendChild(e)}function i(t){return l(()=>{const e=document.querySelector("plans-card"),n={root:null,threshold:0,rootMargin:"200px"};new IntersectionObserver(function(s,o){s[0].isIntersecting&&(console.log("i c u baby"),d(),o.unobserve(s[0].target))},n).observe(e)}),[]}class m extends a{constructor(e){super(),r(this,e,i,null,c,{})}}export{m as P};
