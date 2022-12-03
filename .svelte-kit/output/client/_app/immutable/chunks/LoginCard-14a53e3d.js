import{_ as O}from"./preload-helper-9b728935.js";import{S as q,i as H,s as A,L as B,M as z,m as v,h as d,n as g,b as k,N as y,B as M,k as E,w as G,a as C,q as R,l as S,x,c as N,r as U,Y as D,y as j,G as P,f as L,t as V,z as W,D as Z,O as Q,$ as Y,E as le,T as ne,e as J,g as ae,d as ue,o as Ce,R as oe,P as Ee,Q as Se,p as Ne}from"./index-95872f21.js";import{a as F,i as Ve,o as Me,b as De}from"./firebase-ca849276.js";import{g as Ie}from"./navigation-b70c4e1d.js";import{i as re,n as se,d as ce,e as Ae}from"./store-825ff2b0.js";import{q as Fe,a as Le,e as Oe}from"./index-4d5c3e31.js";import{i as Re}from"./utils-8c22039c.js";function Ue(n){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(n)}function Be(n){return/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(n)}async function ze(n){const{sendSignInLinkToEmail:e}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);await e(F,n,{url:"https://thinksolve.io/",handleCodeInApp:!0}).then(()=>{window.localStorage.setItem("emailForSignIn",n),console.log("success with sendSignInLinkToEmail!")}).catch(t=>{const o=t.code,r=t.message;console.log("errorCode",o),console.log("errorMessage",r)})}async function pe(){const{TwitterAuthProvider:n}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url),e=new n,{signInWithPopup:t}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);t(F,e).then(o=>{const r=n.credentialFromResult(o);r.accessToken,r.secret,o.user}).catch(o=>{o.code,o.message,o.customData.email,n.credentialFromError(o)})}async function de(){const{GoogleAuthProvider:n}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url),{signInWithPopup:e}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url),t=new n;e(F,t).then(o=>{n.credentialFromResult(o).accessToken,o.user}).catch(o=>{o.code,o.message,o.customData.email,n.credentialFromError(o)})}async function Ge(n){const{RecaptchaVerifier:e}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);return new e(n,{size:"invisible",callback:o=>{}},F)}async function xe(n,e){const{setPersistence:t,browserSessionPersistence:o,signInWithPhoneNumber:r}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);t(F,o).then(()=>{r(F,n,e).then(i=>{window.confirmationResult=i}).catch(i=>{})})}function he(n,e){let t=e.type=="click"||e.key=="Enter",o=n,r=window.confirmationResult;t&&o.length>=6&&r&&r.confirm(o).then(i=>{console.log("result",i)}).catch(i=>{console.log("error",i)})}async function je(){const{signOut:n}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);n(F).then(()=>{console.log("logged out"),Ie("/")}).catch(e=>{console.log("logoutFunction failed",e)})}function We(n){let e,t;return{c(){e=B("svg"),t=B("path"),this.h()},l(o){e=z(o,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var r=v(e);t=z(r,"path",{fill:!0,d:!0}),v(t).forEach(d),r.forEach(d),this.h()},h(){g(t,"fill","white"),g(t,"d","M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005zM16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z"),g(e,"width","32px"),g(e,"height","32px"),g(e,"viewBox","0 0 32 32"),g(e,"xmlns","http://www.w3.org/2000/svg")},m(o,r){k(o,e,r),y(e,t)},p:M,i:M,o:M,d(o){o&&d(e)}}}class qe extends q{constructor(e){super(),H(this,e,null,We,A,{})}}function He(n){let e,t,o,r,i,c,l,f,a,p;return o=new qe({}),{c(){e=E("signin-button"),t=E("span"),G(o.$$.fragment),r=C(),i=E("span"),c=R("Sign-in with Twitter"),this.h()},l(s){e=S(s,"SIGNIN-BUTTON",{class:!0});var h=v(e);t=S(h,"SPAN",{class:!0});var w=v(t);x(o.$$.fragment,w),w.forEach(d),r=N(h),i=S(h,"SPAN",{});var m=v(i);c=U(m,"Sign-in with Twitter"),m.forEach(d),h.forEach(d),this.h()},h(){g(t,"class","group-hover:scale-[1.15] duration-500"),D(e,"class",l="group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+(n[0],"group-hover:bg-opacity-90")+" text-white flex justify-center items-center gap-5")},m(s,h){k(s,e,h),y(e,t),j(o,t,null),y(e,r),y(e,i),y(i,c),f=!0,a||(p=[P(e,"click",pe),P(e,"keydown",pe)],a=!0)},p(s,[h]){(!f||h&1&&l!==(l="group bg-[#1d9bf0] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+(s[0],"group-hover:bg-opacity-90")+" text-white flex justify-center items-center gap-5"))&&D(e,"class",l)},i(s){f||(L(o.$$.fragment,s),f=!0)},o(s){V(o.$$.fragment,s),f=!1},d(s){s&&d(e),W(o),a=!1,Z(p)}}}function Qe(n,e,t){let o;return Q(n,re,r=>t(0,o=r)),[o]}class Ye extends q{constructor(e){super(),H(this,e,Qe,He,A,{})}}function Je(n){let e,t;return{c(){e=B("svg"),t=B("path"),this.h()},l(o){e=z(o,"svg",{height:!0,width:!0,viewBox:!0});var r=v(e);t=z(r,"path",{fill:!0,d:!0}),v(t).forEach(d),r.forEach(d),this.h()},h(){g(t,"fill","white"),g(t,"d",`M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z`),g(e,"height","24"),g(e,"width","24"),g(e,"viewBox","0 0 210 210")},m(o,r){k(o,e,r),y(e,t)},p:M,i:M,o:M,d(o){o&&d(e)}}}class Ke extends q{constructor(e){super(),H(this,e,null,Je,A,{})}}function Xe(n){let e,t,o,r,i,c,l,f,a,p;return o=new Ke({}),{c(){e=E("signin-button"),t=E("span"),G(o.$$.fragment),r=C(),i=E("span"),c=R("Sign-in with Google"),this.h()},l(s){e=S(s,"SIGNIN-BUTTON",{class:!0});var h=v(e);t=S(h,"SPAN",{class:!0});var w=v(t);x(o.$$.fragment,w),w.forEach(d),r=N(h),i=S(h,"SPAN",{});var m=v(i);c=U(m,"Sign-in with Google"),m.forEach(d),h.forEach(d),this.h()},h(){g(t,"class","group-hover:scale-[1.15] duration-500"),D(e,"class",l="group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+(n[0],"group-hover:bg-opacity-90")+" text-white flex justify-center items-center gap-5")},m(s,h){k(s,e,h),y(e,t),j(o,t,null),y(e,r),y(e,i),y(i,c),f=!0,a||(p=[P(e,"keydown",de),P(e,"click",de)],a=!0)},p(s,[h]){(!f||h&1&&l!==(l="group mb-6 bg-[#4285f4] hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 "+(s[0],"group-hover:bg-opacity-90")+" text-white flex justify-center items-center gap-5"))&&D(e,"class",l)},i(s){f||(L(o.$$.fragment,s),f=!0)},o(s){V(o.$$.fragment,s),f=!1},d(s){s&&d(e),W(o),a=!1,Z(p)}}}function Ze(n,e,t){let o;return Q(n,re,r=>t(0,o=r)),[o]}class $e extends q{constructor(e){super(),H(this,e,Ze,Xe,A,{})}}function et(n){let e,t;return{c(){e=B("svg"),t=B("path"),this.h()},l(o){e=z(o,"svg",{height:!0,width:!0,viewBox:!0});var r=v(e);t=z(r,"path",{fill:!0,d:!0}),v(t).forEach(d),r.forEach(d),this.h()},h(){g(t,"fill","white"),g(t,"d",`M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z`),g(e,"height","24"),g(e,"width","24"),g(e,"viewBox","0 0 485 485")},m(o,r){k(o,e,r),y(e,t)},p:M,i:M,o:M,d(o){o&&d(e)}}}class tt extends q{constructor(e){super(),H(this,e,null,et,A,{})}}function me(n){let e,t,o,r;return{c(){e=E("input"),this.h()},l(i){e=S(i,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){g(e,"class",t="text-center p-3 mt-3 w-full "+n[4]+" focus:outline-none"),g(e,"type","email"),g(e,"placeholder","email")},m(i,c){k(i,e,c),n[12](e),Y(e,n[2]),o||(r=[P(e,"keydown",n[11]),P(e,"paste",function(){le(n[7](n[2]))&&n[7](n[2]).apply(this,arguments)}),P(e,"keyup",function(){le(n[7](n[2]))&&n[7](n[2]).apply(this,arguments)}),P(e,"input",n[13])],o=!0)},p(i,c){n=i,c&16&&t!==(t="text-center p-3 mt-3 w-full "+n[4]+" focus:outline-none")&&g(e,"class",t),c&4&&e.value!==n[2]&&Y(e,n[2])},d(i){i&&d(e),n[12](null),o=!1,Z(r)}}}function ot(n){let e,t,o,r,i,c,l,f,a,p,s,h,w;o=new tt({});let m=n[3]&&me(n);return{c(){e=E("signin-button"),t=E("span"),G(o.$$.fragment),r=C(),i=E("span"),c=R("Get Magic Link"),f=C(),m&&m.c(),a=C(),p=E("span"),this.h()},l(u){e=S(u,"SIGNIN-BUTTON",{class:!0});var _=v(e);t=S(_,"SPAN",{class:!0});var I=v(t);x(o.$$.fragment,I),I.forEach(d),r=N(_),i=S(_,"SPAN",{});var b=v(i);c=U(b,"Get Magic Link"),b.forEach(d),_.forEach(d),f=N(u),m&&m.l(u),a=N(u),p=S(u,"SPAN",{id:!0}),v(p).forEach(d),this.h()},h(){g(t,"class","group-hover:scale-[1.15] duration-500"),D(e,"class",l="group bg-emerald-500 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+(n[5],"group-hover:bg-opacity-80")+" text-white flex justify-center items-center gap-5"),g(p,"id","emailStatusMessage")},m(u,_){k(u,e,_),y(e,t),j(o,t,null),y(e,r),y(e,i),y(i,c),n[10](e),k(u,f,_),m&&m.m(u,_),k(u,a,_),k(u,p,_),s=!0,h||(w=[P(e,"click",n[6]),P(e,"keydown",n[6])],h=!0)},p(u,[_]){(!s||_&32&&l!==(l="group bg-emerald-500 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+(u[5],"group-hover:bg-opacity-80")+" text-white flex justify-center items-center gap-5"))&&D(e,"class",l),u[3]?m?m.p(u,_):(m=me(u),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i(u){s||(L(o.$$.fragment,u),s=!0)},o(u){V(o.$$.fragment,u),s=!1},d(u){u&&d(e),W(o),n[10](null),u&&d(f),m&&m.d(u),u&&d(a),u&&d(p),h=!1,Z(w)}}}function nt(n,e,t){let o,r,i;Q(n,re,b=>t(5,i=b));let c=!1,l,f,a,p="",s=!1;function h(b){window.userInputVisible=t(3,r=!0),(b.type=="click"||b.key=="Enter")&&p==""&&(t(9,l=!0),setTimeout(()=>t(9,l=!l),100)),(b.type=="click"||b.key=="Enter")&&s&&(ze(p),t(8,c=!0),t(2,p=""),emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email \u{1F680}
                  </div>
                  `,t(1,a.style.opacity="0.5",a),t(1,a.style.pointerEvents="none",a),t(0,f.style.opacity="0.5",f),t(0,f.style.pointerEvents="none",f))}function w(b){s=Ue(b),b==""?(t(1,a.style.border="1px solid #aaa",a),t(1,a.style.color="#aaa",a),t(1,a.style.fontSize="16px",a)):s?s&&(t(1,a.style.border="2px solid #59d0ae",a),t(1,a.style.backgroundColor="white",a),t(1,a.style.color="#10bb8a",a)):(t(1,a.style.border="1.5px solid red",a),t(1,a.style.color="red",a),t(1,a.style.fontSize="20px",a))}function m(b){ne[b?"unshift":"push"](()=>{f=b,t(0,f)})}const u=b=>{h(b)};function _(b){ne[b?"unshift":"push"](()=>{a=b,t(1,a)})}function I(){p=this.value,t(2,p)}return n.$$.update=()=>{n.$$.dirty&768&&t(4,o=!c&&l&&"animate-ping")},t(3,r=window.userInputVisible),[f,a,p,r,o,i,h,w,c,l,m,u,_,I]}class rt extends q{constructor(e){super(),H(this,e,nt,ot,A,{})}}function it(n){let e,t,o;return{c(){e=B("svg"),t=B("path"),o=B("path"),this.h()},l(r){e=z(r,"svg",{class:!0,width:!0,height:!0,viewBox:!0,xmlns:!0,fill:!0});var i=v(e);t=z(i,"path",{fill:!0,d:!0}),v(t).forEach(d),o=z(i,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(o).forEach(d),i.forEach(d),this.h()},h(){g(t,"fill","white"),g(t,"d","M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"),g(o,"stroke","white"),g(o,"stroke-linecap","round"),g(o,"stroke-linejoin","round"),g(o,"stroke-width","2"),g(o,"d","M17.5 8.842C15.976 8.337 14.146 8 12 8c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2V8.842zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2V8.842z"),g(e,"class","-rotate-90"),g(e,"width","24px"),g(e,"height","24px"),g(e,"viewBox","0 0 24 24"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"fill","white")},m(r,i){k(r,e,i),y(e,t),y(e,o)},p:M,i:M,o:M,d(r){r&&d(e)}}}class st extends q{constructor(e){super(),H(this,e,null,it,A,{})}}function ge(n){let e,t,o,r,i,c,l,f,a,p,s,h;o=new st({});let w=n[6]&&_e(n);return{c(){e=E("div"),t=E("span"),G(o.$$.fragment),r=C(),i=E("span"),c=R("Get SMS Code"),f=C(),a=E("div"),w&&w.c(),this.h()},l(m){e=S(m,"DIV",{class:!0});var u=v(e);t=S(u,"SPAN",{class:!0});var _=v(t);x(o.$$.fragment,_),_.forEach(d),r=N(u),i=S(u,"SPAN",{});var I=v(i);c=U(I,"Get SMS Code"),I.forEach(d),u.forEach(d),f=N(m),a=S(m,"DIV",{class:!0});var b=v(a);w&&w.l(b),b.forEach(d),this.h()},h(){g(t,"class","group-hover:scale-[1.15] duration-500"),g(e,"class",l="w-full group bg-rose-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+(n[8],"group-hover:bg-opacity-80")+" text-white flex justify-center items-center gap-5"),g(a,"class","grid grid-cols-6 w-full text-black")},m(m,u){k(m,e,u),y(e,t),j(o,t,null),y(e,r),y(e,i),y(i,c),n[12](e),k(m,f,u),k(m,a,u),w&&w.m(a,null),p=!0,s||(h=[P(e,"click",n[9]),P(e,"keydown",n[9])],s=!0)},p(m,u){(!p||u&256&&l!==(l="w-full group bg-rose-400 hover:scale-[1.01] hover:shadow-md duration-200 rounded-md p-4 "+(m[8],"group-hover:bg-opacity-80")+" text-white flex justify-center items-center gap-5"))&&g(e,"class",l),m[6]?w?w.p(m,u):(w=_e(m),w.c(),w.m(a,null)):w&&(w.d(1),w=null)},i(m){p||(L(o.$$.fragment,m),p=!0)},o(m){V(o.$$.fragment,m),p=!1},d(m){m&&d(e),W(o),n[12](null),m&&d(f),m&&d(a),w&&w.d(),s=!1,Z(h)}}}function _e(n){let e,t,o,r,i,c;return{c(){e=E("input"),t=C(),o=E("input"),this.h()},l(l){e=S(l,"INPUT",{class:!0}),t=N(l),o=S(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){g(e,"class","col-span-1 text-center p-3 mt-3 focus:outline-none border-r-2"),g(o,"class",r="col-span-5 text-center p-3 mt-3 focus:outline-none "+n[7]),g(o,"type","phone"),g(o,"placeholder","phone")},m(l,f){k(l,e,f),Y(e,n[2]),k(l,t,f),k(l,o,f),n[15](o),Y(o,n[5]),i||(c=[P(e,"input",n[13]),P(o,"keydown",n[14]),P(o,"paste",function(){le(n[10](n[5]))&&n[10](n[5]).apply(this,arguments)}),P(o,"keyup",function(){le(n[10](n[5]))&&n[10](n[5]).apply(this,arguments)}),P(o,"input",n[16])],i=!0)},p(l,f){n=l,f&4&&e.value!==n[2]&&Y(e,n[2]),f&128&&r!==(r="col-span-5 text-center p-3 mt-3 focus:outline-none "+n[7])&&g(o,"class",r),f&32&&Y(o,n[5])},d(l){l&&d(e),l&&d(t),l&&d(o),n[15](null),i=!1,Z(c)}}}function we(n){let e,t,o,r,i,c,l;return{c(){e=E("div"),t=E("input"),o=C(),r=E("button"),i=R("Enter"),this.h()},l(f){e=S(f,"DIV",{class:!0});var a=v(e);t=S(a,"INPUT",{class:!0,placeholder:!0}),o=N(a),r=S(a,"BUTTON",{class:!0});var p=v(r);i=U(p,"Enter"),p.forEach(d),a.forEach(d),this.h()},h(){g(t,"class","col-span-2 text-center p-3 mt-3 focus:outline-none "),g(t,"placeholder","enter sms code"),g(r,"class","col-span-1 text-center p-3 mt-3 bg-rose-300 text-white font-bold"),g(e,"class","grid grid-cols-3 pb-5")},m(f,a){k(f,e,a),y(e,t),Y(t,n[1]),y(e,o),y(e,r),y(r,i),c||(l=[P(t,"keydown",n[17]),P(t,"input",n[18]),P(r,"click",n[19])],c=!0)},p(f,a){a&2&&t.value!==f[1]&&Y(t,f[1])},d(f){f&&d(e),c=!1,Z(l)}}}function lt(n){let e,t,o,r,i,c,l,f,a=!n[0]&&ge(n),p=n[0]&&we(n);return{c(){a&&a.c(),e=C(),t=E("div"),o=C(),r=E("div"),c=C(),p&&p.c(),l=J(),this.h()},l(s){a&&a.l(s),e=N(s),t=S(s,"DIV",{id:!0}),v(t).forEach(d),o=N(s),r=S(s,"DIV",{id:!0,class:!0}),v(r).forEach(d),c=N(s),p&&p.l(s),l=J(),this.h()},h(){g(t,"id","recaptcha-container"),g(r,"id","phoneStatusMessage"),g(r,"class",i="p-3 font-Poppins "+(n[8]?"text-lime-100":"text-rose-600"))},m(s,h){a&&a.m(s,h),k(s,e,h),k(s,t,h),k(s,o,h),k(s,r,h),k(s,c,h),p&&p.m(s,h),k(s,l,h),f=!0},p(s,[h]){s[0]?a&&(ae(),V(a,1,1,()=>{a=null}),ue()):a?(a.p(s,h),h&1&&L(a,1)):(a=ge(s),a.c(),L(a,1),a.m(e.parentNode,e)),(!f||h&256&&i!==(i="p-3 font-Poppins "+(s[8]?"text-lime-100":"text-rose-600")))&&g(r,"class",i),s[0]?p?p.p(s,h):(p=we(s),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},i(s){f||(L(a),f=!0)},o(s){V(a),f=!1},d(s){a&&a.d(s),s&&d(e),s&&d(t),s&&d(o),s&&d(r),s&&d(c),p&&p.d(s),s&&d(l)}}}function at(n,e,t){let o,r,i;Q(n,re,T=>t(8,i=T));let c,l="+1",f=!1,a,p,s,h="",w=!1;async function m(T){window.userInputVisible=t(6,r=!0);let te=T.type=="click"||T.key=="Enter";if(te&&h==""&&(t(11,a=!0),setTimeout(()=>t(11,a=!a),100)),te&&w){let fe=l+h.replace(/\D/g,""),Pe=await Ge("recaptcha-container");xe(fe,Pe),phoneStatusMessage.style.display="block",phoneStatusMessage.innerHTML=`Code sent to ${fe} `,t(4,s.style.opacity="0.5",s),t(4,s.style.pointerEvents="none",s),t(3,p.style.opacity="0.5",p),t(3,p.style.pointerEvents="none",p),t(0,f=!0)}}function u(T){w=Be(T),T==""?(t(4,s.style.border="1px solid #aaa",s),t(4,s.style.color="#aaa",s),t(4,s.style.fontSize="16px",s)):w?w&&(t(4,s.style.border="2px solid #59d0ae",s),t(4,s.style.backgroundColor="white",s),t(4,s.style.color="#10bb8a",s)):(t(4,s.style.border="1.5px solid red",s),t(4,s.style.color="red",s),t(4,s.style.fontSize="20px",s))}function _(T){ne[T?"unshift":"push"](()=>{p=T,t(3,p)})}function I(){l=this.value,t(2,l)}const b=T=>m(T);function $(T){ne[T?"unshift":"push"](()=>{s=T,t(4,s)})}function K(){h=this.value,t(5,h)}const X=T=>he(c,T);function ee(){c=this.value,t(1,c)}const ie=T=>he(c,T);return n.$$.update=()=>{n.$$.dirty&2049&&t(7,o=!f&&a&&"animate-ping")},t(6,r=window.userInputVisible),[f,c,l,p,s,h,r,o,i,m,u,a,_,I,b,$,K,X,ee,ie]}class Te extends q{constructor(e){super(),H(this,e,at,lt,A,{})}}function be(n){let e=!n[0]&&n[1],t,o,r=ye(n);return{c(){r.c(),t=J()},l(i){r.l(i),t=J()},m(i,c){r.m(i,c),k(i,t,c),o=!0},p(i,c){c&3&&A(e,e=!i[0]&&i[1])?(ae(),V(r,1,1,M),ue(),r=ye(i),r.c(),L(r,1),r.m(t.parentNode,t)):r.p(i,c)},i(i){o||(L(r),o=!0)},o(i){V(r),o=!1},d(i){i&&d(t),r.d(i)}}}function ut(n){let e,t,o,r,i,c;return e=new rt({}),i=new Te({}),{c(){G(e.$$.fragment),t=C(),o=E("p"),r=C(),G(i.$$.fragment),this.h()},l(l){x(e.$$.fragment,l),t=N(l),o=S(l,"P",{class:!0}),v(o).forEach(d),r=N(l),x(i.$$.fragment,l),this.h()},h(){g(o,"class","py-3")},m(l,f){j(e,l,f),k(l,t,f),k(l,o,f),k(l,r,f),j(i,l,f),c=!0},i(l){c||(L(e.$$.fragment,l),L(i.$$.fragment,l),c=!0)},o(l){V(e.$$.fragment,l),V(i.$$.fragment,l),c=!1},d(l){W(e,l),l&&d(t),l&&d(o),l&&d(r),W(i,l)}}}function ct(n){let e,t;return e=new Te({}),{c(){G(e.$$.fragment)},l(o){x(e.$$.fragment,o)},m(o,r){j(e,o,r),t=!0},i(o){t||(L(e.$$.fragment,o),t=!0)},o(o){V(e.$$.fragment,o),t=!1},d(o){W(e,o)}}}function ye(n){let e,t,o,r,i,c,l,f,a,p,s;const h=[ct,ut],w=[];function m(u,_){return Re()?0:1}return t=m(),o=w[t]=h[t](n),i=new $e({}),l=new Ye({}),{c(){e=E("login-card"),o.c(),r=C(),G(i.$$.fragment),c=C(),G(l.$$.fragment),this.h()},l(u){e=S(u,"LOGIN-CARD",{class:!0,style:!0});var _=v(e);o.l(_),r=N(_),x(i.$$.fragment,_),c=N(_),x(l.$$.fragment,_),_.forEach(d),this.h()},h(){D(e,"class",f="block relative text-xl hover:scale-[1.01] font-Poppins shadow-md "+(n[4]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px]"),D(e,"style",a=`background:${n[5]}`)},m(u,_){k(u,e,_),w[t].m(e,null),y(e,r),j(i,e,null),y(e,c),j(l,e,null),s=!0},p(u,_){n=u,(!s||_&16&&f!==(f="block relative text-xl hover:scale-[1.01] font-Poppins shadow-md "+(n[4]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px]"))&&D(e,"class",f),(!s||_&32&&a!==(a=`background:${n[5]}`))&&D(e,"style",a)},i(u){s||(L(o),L(i.$$.fragment,u),L(l.$$.fragment,u),p||Ee(()=>{p=Se(e,Le,{duration:400,easing:Fe}),p.start()}),s=!0)},o(u){V(o),V(i.$$.fragment,u),V(l.$$.fragment,u),s=!1},d(u){u&&d(e),w[t].d(),W(i),W(l)}}}function ve(n){let e=!n[0]&&n[1],t,o=ke(n);return{c(){o.c(),t=J()},l(r){o.l(r),t=J()},m(r,i){o.m(r,i),k(r,t,i)},p(r,i){i&3&&A(e,e=!r[0]&&r[1])?(ae(),V(o,1,1,M),ue(),o=ke(r),o.c(),L(o,1),o.m(t.parentNode,t)):o.p(r,i)},i(r){L(o)},o(r){V(o)},d(r){r&&d(t),o.d(r)}}}function ke(n){let e,t,o,r,i,c,l,f,a,p,s,h,w,m,u,_;return{c(){e=E("logout-card"),t=E("p"),o=R("Welcome User"),r=C(),i=E("div"),c=R(`Redirecting to your page in
        `),l=E("div"),f=R("\u230A\u03C0\u230B"),a=C(),p=E("button"),s=R("Logout"),this.h()},l(I){e=S(I,"LOGOUT-CARD",{class:!0,style:!0});var b=v(e);t=S(b,"P",{});var $=v(t);o=U($,"Welcome User"),$.forEach(d),r=N(b),i=S(b,"DIV",{});var K=v(i);c=U(K,`Redirecting to your page in
        `),l=S(K,"DIV",{style:!0,id:!0});var X=v(l);f=U(X,"\u230A\u03C0\u230B"),X.forEach(d),K.forEach(d),a=N(b),p=S(b,"BUTTON",{});var ee=v(p);s=U(ee,"Logout"),ee.forEach(d),b.forEach(d),this.h()},h(){Ne(l,"font-size","30px"),g(l,"id","timeLeft"),D(e,"class",h="relative block hover:scale-[1.01] font-Poppins shadow-md "+(n[4]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 w-11/12 sm:w-[500px]"),D(e,"style",w=`background:${n[5]}`)},m(I,b){k(I,e,b),y(e,t),y(t,o),n[9](t),y(e,r),y(e,i),y(i,c),y(i,l),y(l,f),y(e,a),y(e,p),y(p,s),u||(_=P(p,"click",je),u=!0)},p(I,b){n=I,b&16&&h!==(h="relative block hover:scale-[1.01] font-Poppins shadow-md "+(n[4]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 w-11/12 sm:w-[500px]")&&D(e,"class",h),b&32&&w!==(w=`background:${n[5]}`)&&D(e,"style",w)},i(I){m||Ee(()=>{m=Se(e,Le,{duration:n[0]?0:1e3,easing:Oe}),m.start()})},o:M,d(I){I&&d(e),n[9](null),u=!1,_()}}}function ft(n){let e,t,o,r=!n[2]&&be(n),i=n[2]&&ve(n);return{c(){r&&r.c(),e=C(),i&&i.c(),t=J()},l(c){r&&r.l(c),e=N(c),i&&i.l(c),t=J()},m(c,l){r&&r.m(c,l),k(c,e,l),i&&i.m(c,l),k(c,t,l),o=!0},p(c,[l]){c[2]?r&&(ae(),V(r,1,1,()=>{r=null}),ue()):r?(r.p(c,l),l&4&&L(r,1)):(r=be(c),r.c(),L(r,1),r.m(e.parentNode,e)),c[2]?i?(i.p(c,l),l&4&&L(i,1)):(i=ve(c),i.c(),L(i,1),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i(c){o||(L(r),L(i),o=!0)},o(c){V(r),o=!1},d(c){r&&r.d(c),c&&d(e),i&&i.d(c),c&&d(t)}}}function pt(n,e,t){let o,r,i,c;Q(n,se,u=>t(1,o=u)),Q(n,ce,u=>t(2,r=u)),Q(n,re,u=>t(4,i=u)),Q(n,Ae,u=>t(5,c=u));let{noTransition:l=!1}=e,f,a,p,s;Ce(async()=>{if(Ve(F,window.location.href)){let u=window.localStorage.getItem("emailForSignIn");u||(u=window.prompt("Please provide your email for confirmation"));const{signInWithEmailLink:_}=await O(()=>import("./index.esm-b2160640.js"),["./index.esm-b2160640.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url);_(F,u,window.location.href).then(()=>{window.localStorage.removeItem("emailForSignIn"),oe(se,o=!0,o)}).catch(I=>console.log("signInWithEmailLink:",I))}Me(F,u=>{u?(oe(ce,r=!0,r),t(6,a=u.email),console.log("User is signed in!"),t(3,f.innerText=u.displayName?`Hey ${u.displayName}!`:`Hey ${u.email}!`,f)):(localStorage.removeItem("redirectUrlFromLS"),oe(ce,r=!1,r),oe(se,o=!1,o),t(6,a=""))})});function h(u="/login"){let _=3e3,I=parseInt(_/1e3);t(8,s=setInterval(()=>{I>0&&(I+=-1,document.getElementById("timeLeft").innerHTML=` ${I}`)},1e3)),t(7,p=setTimeout(()=>{oe(se,o=!1,o),document.getElementById("timeLeft").innerHTML=3,Ie(u)},_))}async function w(u){let _=localStorage.getItem("redirectUrlFromLS");if(console.log("redirectUrlFromLS",_),_)h(_);else{const{getFirestore:I,collection:b,getDocs:$}=await O(()=>import("./index.esm-b53a4cf9.js"),["./index.esm-b53a4cf9.js","./firebase-ca849276.js","./public-e0b14f20.js"],import.meta.url),K=I(De),X=await $(b(K,"email")),ee=X.size,ie=X.docs;for(const T in ie){const te=ie[T];if(u===te.id){localStorage.setItem("redirectUrlFromLS",te.data().redirectUrl),_=localStorage.getItem("redirectUrlFromLS"),h(_);return}parseInt(T)===ee-1&&(localStorage.setItem("redirectUrlFromLS","/"),_=localStorage.getItem("redirectUrlFromLS"),h(_))}}}function m(u){ne[u?"unshift":"push"](()=>{f=u,t(3,f)})}return n.$$set=u=>{"noTransition"in u&&t(0,l=u.noTransition)},n.$$.update=()=>{n.$$.dirty&386&&(o||(clearInterval(s),clearTimeout(p))),n.$$.dirty&70&&o&&r&&w(a)},[l,o,r,f,i,c,a,p,s,m]}class yt extends q{constructor(e){super(),H(this,e,pt,ft,A,{noTransition:0})}}export{yt as L};
