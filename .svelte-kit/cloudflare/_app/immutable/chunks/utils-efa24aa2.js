import{s as a}from"./index-736bd204.js";function d(){let n=navigator.userAgent,e=navigator.platform,t=["Macintosh","MacIntel","MacPPC","Mac68K"],i=["Win32","Win64","Windows","WinCE"],o=["iPhone","iPad","iPod"],s=null;return t.includes(e)?s="Mac OS":o.includes(e)?s="iOS":i.includes(e)?s="Windows":/Android/.test(n)?s="Android":/Linux/.test(e)&&(s="Linux"),s}function r(){for(let n of["gesturestart","dblclick"])document.addEventListener(n,e=>(e.preventDefault(),!1))}function c(){return window.matchMedia("(display-mode: standalone)").matches}function u(n,e){return e.noTransition?null:a(n,e)}function f(n="dropzoneCSS",e="/dropzone.css"){if(!document.getElementById(n)){const t=document.createElement("link");t.id=n,t.href=e,t.rel="stylesheet",document.head.appendChild(t)}}export{f as c,r as d,d as g,c as i,u as s};