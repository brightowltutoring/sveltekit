import{w as i}from"./index-f2b2efd0.js";let f="",b="";function g(e){f=e.base,b=e.assets||f}function m(e){let n=e.baseURI;if(!n){const t=e.getElementsByTagName("base");n=t.length?t[0].href:e.URL}return n}function _(){return{x:pageXOffset,y:pageYOffset}}function w(e){return e.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function U(e){return e instanceof SVGAElement?new URL(e.href.baseVal,document.baseURI):new URL(e.href)}function l(e){const n=i(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let c;return n.subscribe(u=>{(c===void 0||t&&u!==c)&&s(c=u)})}return{notify:r,set:a,subscribe:o}}function d(){const{set:e,subscribe:n}=i(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),s=o!=="1661912317829";return s&&(e(!0),clearTimeout(t)),s}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:n,check:r}}let h;function R(e){h=e.client}const y={url:l({}),page:l({}),navigating:i(null),updated:d()};export{U as a,_ as b,g as c,h as d,w as f,m as g,R as i,y as s};
