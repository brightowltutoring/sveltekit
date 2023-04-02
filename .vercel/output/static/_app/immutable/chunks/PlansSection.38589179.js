import{S as B,i as D,s as W,w as te,J as ae,y as q,a as S,k as v,q as L,z as O,c as E,l as w,m as k,r as A,h as _,n as p,A as I,b as C,H as b,U as M,K as le,g,d as T,B as R,X as oe,a2 as V,a3 as z,C as F,V as Y,u as G,v as Z,f as $,M as re,N as ne,P as ee,o as se,D as ce}from"./index.d162f37a.js";import{s as ie,e as ue}from"./index.3c701c7f.js";import{M as de}from"./Modal.8d249450.js";function fe(o){let e,l,t;return{c(){e=v("iframe"),this.h()},l(a){e=w(a,"IFRAME",{title:!0,class:!0,src:!0}),k(e).forEach(_),this.h()},h(){p(e,"title","Thinksolve Plans"),p(e,"class",l=o[2]+" fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl transition-opacity duration-200 ease-in md:w-[80%] md:-translate-y-5"),F(e.src,t=o[1])||p(e,"src",t)},m(a,h){C(a,e,h)},p(a,h){h&4&&l!==(l=a[2]+" fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl transition-opacity duration-200 ease-in md:w-[80%] md:-translate-y-5")&&p(e,"class",l),h&2&&!F(e.src,t=a[1])&&p(e,"src",t)},d(a){a&&_(e)}}}function he(o){let e,l,t,a,h,c,u,s,m,d;function f(r){o[9](r)}let U={body:!0,bgTW:"bg-[rgba(0,0,0,0.1)]",$$slots:{default:[fe]},$$scope:{ctx:o}};return o[0]!==void 0&&(U.showModal=o[0]),e=new de({props:U}),te.push(()=>ae(e,"showModal",f)),{c(){q(e.$$.fragment),t=S(),a=v("button"),h=v("span"),c=L(o[5]),this.h()},l(r){O(e.$$.fragment,r),t=E(r),a=w(r,"BUTTON",{class:!0});var i=k(a);h=w(i,"SPAN",{});var n=k(h);c=A(n,o[5]),n.forEach(_),i.forEach(_),this.h()},h(){p(a,"class",u="m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md group-hover:bg-opacity-80 "+o[4]+" "+o[7].class)},m(r,i){I(e,r,i),C(r,t,i),C(r,a,i),b(a,h),b(h,c),s=!0,m||(d=[M(a,"click",o[10]),M(a,"focus",o[11]),M(a,"mouseover",o[12])],m=!0)},p(r,[i]){const n={};i&8198&&(n.$$scope={dirty:i,ctx:r}),!l&&i&1&&(l=!0,n.showModal=r[0],le(()=>l=!1)),e.$set(n),(!s||i&128&&u!==(u="m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md group-hover:bg-opacity-80 "+r[4]+" "+r[7].class))&&p(a,"class",u)},i(r){s||(g(e.$$.fragment,r),s=!0)},o(r){T(e.$$.fragment,r),s=!1},d(r){R(e,r),r&&_(t),r&&_(a),m=!1,oe(d)}}}function me(o,e,l){let{button:t}=e;const{url:a,opacityTW:h,text:c}=t;let u=!1,s="",m="";function d(n,y){l(1,s=y),n.type==="click"&&(l(0,u=!0),setTimeout(()=>l(2,m="opacity-100 "),25))}function f(n){u=n,l(0,u)}const U=n=>d(n,a),r=n=>d(n,a),i=n=>d(n,a);return o.$$set=n=>{l(7,e=V(V({},e),z(n))),"button"in n&&l(8,t=n.button)},e=z(e),[u,s,m,a,h,c,d,e,t,f,U,r,i]}class _e extends B{constructor(e){super(),D(this,e,me,he,W,{button:8})}}function H(o,e,l){const t=o.slice();return t[7]=e[l],t}function J(o){let e,l;return e=new _e({props:{button:o[7],class:o[3]+" inline-block group-hover:scale-95 group-hover:animate-pulse"}}),{c(){q(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){I(e,t,a),l=!0},p(t,a){const h={};a&8&&(h.class=t[3]+" inline-block group-hover:scale-95 group-hover:animate-pulse"),e.$set(h)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function pe(o){let e,l,t,a,h,c,u,s,m,d=o[4],f=[];for(let r=0;r<d.length;r+=1)f[r]=J(H(o,d,r));const U=r=>T(f[r],1,1,()=>{f[r]=null});return{c(){e=v("plans-card"),l=v("p"),t=L(o[2]),a=S();for(let r=0;r<f.length;r+=1)f[r].c();h=S(),c=v("div"),u=L(o[1]),this.h()},l(r){e=w(r,"PLANS-CARD",{class:!0});var i=k(e);l=w(i,"P",{class:!0});var n=k(l);t=A(n,o[2]),n.forEach(_),a=E(i);for(let x=0;x<f.length;x+=1)f[x].l(i);h=E(i),c=w(i,"DIV",{class:!0});var y=k(c);u=A(y,o[1]),y.forEach(_),i.forEach(_),this.h()},h(){p(l,"class","py-5 text-center font-Poppins text-4xl"),p(c,"class","py-4"),Y(e,"class","group block rounded-xl bg-[#f2f7fa] p-5 text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#262333] dark:hover:shadow-xl")},m(r,i){C(r,e,i),b(e,l),b(l,t),b(e,a);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(e,null);b(e,h),b(e,c),b(c,u),m=!0},p(r,[i]){if(o=r,(!m||i&4)&&G(t,o[2]),i&24){d=o[4];let n;for(n=0;n<d.length;n+=1){const y=H(o,d,n);f[n]?(f[n].p(y,i),g(f[n],1)):(f[n]=J(y),f[n].c(),g(f[n],1),f[n].m(e,h))}for(Z(),n=d.length;n<f.length;n+=1)U(n);$()}(!m||i&2)&&G(u,o[1])},i(r){if(!m){for(let i=0;i<d.length;i+=1)g(f[i]);s||re(()=>{s=ne(e,ie,o[0]),s.start()}),m=!0}},o(r){f=f.filter(Boolean);for(let i=0;i<f.length;i+=1)T(f[i]);m=!1},d(r){r&&_(e),ee(f,r)}}}function ge(o,e,l){let{inScale:t={}}=e,{cardText:a=""}=e,{cardTitle:h=""}=e,{payNowUrl:c=""}=e,{payLaterUrl:u=""}=e,{buttonColor:s}=e;const m=[{resetter:!1,url:c,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:u,opacityTW:"bg-opacity-70",text:"Pay Later"}];return o.$$set=d=>{"inScale"in d&&l(0,t=d.inScale),"cardText"in d&&l(1,a=d.cardText),"cardTitle"in d&&l(2,h=d.cardTitle),"payNowUrl"in d&&l(5,c=d.payNowUrl),"payLaterUrl"in d&&l(6,u=d.payLaterUrl),"buttonColor"in d&&l(3,s=d.buttonColor)},[t,a,h,s,m,c,u]}class be extends B{constructor(e){super(),D(this,e,ge,pe,W,{inScale:0,cardText:1,cardTitle:2,payNowUrl:5,payLaterUrl:6,buttonColor:3})}}const N={red:"f34d4e",blue:"2aa5d6",yellow:"fea45c"},K={1:"bg-[#f34d4e]",2:"bg-[#2aa5d6]",3:"bg-[#fea45c]"},X=[{payNowUrl:P("classico","stripe",N.red,"&a2=2"),payLaterUrl:P("classico","invoice",N.red,"&a1=1"),buttonColor:K[1],cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium."},{payNowUrl:P("mock","stripe",N.blue,"&a2=2"),payLaterUrl:P("mock","invoice",N.blue,"&a1=2"),buttonColor:K[2],cardTitle:"Mock",cardText:"Get test ready. We provide a live mock test session with answers to completed questions. Digital solution key available as a +2hr premium."}];function P(o,e,l,t){return`https://calendly.com/thinksolve/${o}-${e}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${l}${t}`}function j(o,e,l){const t=o.slice();t[1]=e[l].buttonColor,t[2]=e[l].payNowUrl,t[3]=e[l].payLaterUrl,t[4]=e[l].cardTitle,t[5]=e[l].cardText,t[8]=l;const a={delay:100*t[8],duration:1e3,easing:ue};return t[6]=a,t}function Q(o){let e,l;return e=new be({props:{inScale:o[6],buttonColor:o[1],payNowUrl:o[2],payLaterUrl:o[3],cardText:o[5],cardTitle:o[4]}}),{c(){q(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,a){I(e,t,a),l=!0},p:ce,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function ye(o){let e,l,t=X,a=[];for(let c=0;c<t.length;c+=1)a[c]=Q(j(o,t,c));const h=c=>T(a[c],1,1,()=>{a[c]=null});return{c(){e=v("plans-section");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=w(c,"PLANS-SECTION",{class:!0});var u=k(e);for(let s=0;s<a.length;s+=1)a[s].l(u);u.forEach(_),this.h()},h(){Y(e,"class","mx-2 grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16")},m(c,u){C(c,e,u);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);l=!0},p(c,[u]){if(u&0){t=X;let s;for(s=0;s<t.length;s+=1){const m=j(c,t,s);a[s]?(a[s].p(m,u),g(a[s],1)):(a[s]=Q(m),a[s].c(),g(a[s],1),a[s].m(e,null))}for(Z(),s=t.length;s<a.length;s+=1)h(s);$()}},i(c){if(!l){for(let u=0;u<t.length;u+=1)g(a[u]);l=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)T(a[u]);l=!1},d(c){c&&_(e),ee(a,c)}}}function ve(o){return se(()=>!0),[]}class Ue extends B{constructor(e){super(),D(this,e,ve,ye,W,{})}}export{Ue as P};
