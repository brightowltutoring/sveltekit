import{S as ve,i as we,s as x,E as Lt,k as M,l as S,m as E,h,F as Ye,b as U,G as X,H as At,I as Mt,J as St,K as Tt,f as j,t as V,L as ie,a as W,q as te,M as ae,c as R,r as oe,n as d,p as je,N as p,O as ut,D as jt,P as he,Q as Le,A as z,C as Dt,R as T,o as Nt,T as q,e as ge,g as Se,d as Te,u as Bt,U as dt,V as Pt,W as Ot,X as ye,Y as Ce,v as ce,w as ue,x as de,Z as Ee,y as fe,_ as Vt,$ as qt}from"../../chunks/index-1063d0c6.js";import{D as zt}from"../../chunks/Dropzone-cc2eeb86.js";import{g as Je}from"../../chunks/navigation-e1427720.js";import{e as Ne,s as Be,a as Ht,q as Wt}from"../../chunks/index-0fa359d1.js";import{n as Q,r as Pe,a as Ve,i as De,b as qe,e as Rt,c as me,d as re,s as Ke,f as Ut,l as Zt,w as ft,g as mt,h as ht}from"../../chunks/store-817eb231.js";import{G as Ge,s as Gt,a as Ie,b as Yt,c as Kt,i as Xt,d as Jt,o as Qt,R as xt,y as $t,e as eo}from"../../chunks/firebase-eba0fe8a.js";import{s as to}from"../../chunks/singletons-53810b47.js";import{w as oo}from"../../chunks/index-6dbc7447.js";import"../../chunks/private-2f12c45b.js";function lo(e){let o,t,l,n,r;const i=e[3].default,s=Lt(i,e,e[2],null);return{c(){o=M("modal-container"),s&&s.c(),this.h()},l(a){o=S(a,"MODAL-CONTAINER",{class:!0});var f=E(o);s&&s.l(f),f.forEach(h),this.h()},h(){Ye(o,"class",t="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(e[0]?`${e[1]}`:"hidden"))},m(a,f){U(a,o,f),s&&s.m(o,null),l=!0,n||(r=X(o,"click",At(e[4])),n=!0)},p(a,[f]){s&&s.p&&(!l||f&4)&&Mt(s,i,a,a[2],l?Tt(i,a[2],f,null):St(a[2]),null),(!l||f&3&&t!==(t="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(a[0]?`${a[1]}`:"hidden")))&&Ye(o,"class",t)},i(a){l||(j(s,a),l=!0)},o(a){V(s,a),l=!1},d(a){a&&h(o),s&&s.d(a),n=!1,r()}}}function no(e,o,t){let{$$slots:l={},$$scope:n}=o,{showModal:r=!1}=o,{bgTint:i="bg-[rgba(0,0,0,0.4)]"}=o;const s=()=>{t(0,r=!1)};return e.$$set=a=>{"showModal"in a&&t(0,r=a.showModal),"bgTint"in a&&t(1,i=a.bgTint),"$$scope"in a&&t(2,n=a.$$scope)},[r,i,n,l,s]}class gt extends ve{constructor(o){super(),we(this,o,no,lo,x,{showModal:0,bgTint:1})}}async function ro(){const e=new Ge;try{const o=await Gt(Ie,e),l=Ge.credentialFromResult(o).accessToken,n=o.user}catch(o){o.code,o.message,o.customData.email,Ge.credentialFromError(o)}}function so(){Yt(Ie).then(()=>{console.log("logged out"),goto("/")}).catch(e=>{console.log(e),console.log("FAILED firebase signOut function")})}function io(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}async function ao(e){try{await Kt(Ie,e,{url:"https://thinksolve.io/login",handleCodeInApp:!0}),window.localStorage.setItem("emailForSignIn",e),console.log("success with sendSignInLinkToEmail!")}catch(o){const t=o.code;console.log("errorCode",t);const l=o.message;console.log("errorMessage",l)}}function co(e){let o,t,l,n,r,i,s,a,f,v,I,w,k,m,u,g,c,b,N,L,F,y,D,J,C,$,B,Z,pe,Me,le,_e,O,_,H,P,G,A,Y,ze,We,be,Re,Oe,He,Ue,Qe;return{c(){o=M("card"),t=M("div"),l=M("div"),n=M("ul"),r=M("li"),i=ie("svg"),s=ie("path"),a=W(),f=M("li"),v=te("Sign-in with Google"),k=W(),m=M("p"),u=te("or"),g=W(),c=M("div"),b=M("ul"),N=M("li"),L=ie("svg"),F=ie("path"),y=W(),D=M("li"),J=te("Get Magic Link"),B=W(),Z=M("input"),Me=W(),le=M("span"),_e=W(),O=M("div"),_=M("p"),H=te("Welcome User"),P=W(),G=M("div"),A=te(`Redirecting to your page in
      `),Y=M("div"),ze=te("\u230A\u03C0\u230B"),We=W(),be=M("button"),Re=te("Logout"),this.h()},l(ne){o=S(ne,"CARD",{class:!0,style:!0});var K=E(o);t=S(K,"DIV",{class:!0});var ee=E(t);l=S(ee,"DIV",{class:!0});var xe=E(l);n=S(xe,"UL",{class:!0});var Fe=E(n);r=S(Fe,"LI",{});var $e=E(r);i=ae($e,"svg",{height:!0,width:!0,viewBox:!0});var et=E(i);s=ae(et,"path",{fill:!0,d:!0}),E(s).forEach(h),et.forEach(h),$e.forEach(h),a=R(Fe),f=S(Fe,"LI",{});var tt=E(f);v=oe(tt,"Sign-in with Google"),tt.forEach(h),Fe.forEach(h),xe.forEach(h),k=R(ee),m=S(ee,"P",{class:!0});var ot=E(m);u=oe(ot,"or"),ot.forEach(h),g=R(ee),c=S(ee,"DIV",{id:!0,class:!0});var lt=E(c);b=S(lt,"UL",{class:!0});var Ae=E(b);N=S(Ae,"LI",{});var nt=E(N);L=ae(nt,"svg",{height:!0,width:!0,viewBox:!0});var rt=E(L);F=ae(rt,"path",{fill:!0,d:!0}),E(F).forEach(h),rt.forEach(h),nt.forEach(h),y=R(Ae),D=S(Ae,"LI",{});var st=E(D);J=oe(st,"Get Magic Link"),st.forEach(h),Ae.forEach(h),lt.forEach(h),B=R(ee),Z=S(ee,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),Me=R(ee),le=S(ee,"SPAN",{id:!0}),E(le).forEach(h),ee.forEach(h),_e=R(K),O=S(K,"DIV",{class:!0,style:!0});var ke=E(O);_=S(ke,"P",{id:!0});var it=E(_);H=oe(it,"Welcome User"),it.forEach(h),P=R(ke),G=S(ke,"DIV",{id:!0});var Ze=E(G);A=oe(Ze,`Redirecting to your page in
      `),Y=S(Ze,"DIV",{style:!0,id:!0});var at=E(Y);ze=oe(at,"\u230A\u03C0\u230B"),at.forEach(h),Ze.forEach(h),We=R(ke),be=S(ke,"BUTTON",{id:!0});var ct=E(be);Re=oe(ct,"Logout"),ct.forEach(h),ke.forEach(h),K.forEach(h),this.h()},h(){d(s,"fill","white"),d(s,"d",`M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z`),d(i,"height","24"),d(i,"width","24"),d(i,"viewBox","0 0 210 210"),d(n,"class","flex justify-center items-center gap-5"),d(l,"class",I="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-90")+" text-xl text-white"),d(m,"class","py-5"),d(F,"fill","white"),d(F,"d",`M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z`),d(L,"height","24"),d(L,"width","24"),d(L,"viewBox","0 0 485 485"),d(b,"class","flex justify-center items-center gap-5"),d(c,"id","passwordlessLoginBtn"),d(c,"class",C="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-80")+" text-xl text-white"),d(Z,"class",pe="text-center p-3 mt-3 w-full "+e[1]),d(Z,"id","emailField"),d(Z,"type","email"),d(Z,"placeholder","email"),d(le,"id","emailStatusMessage"),d(t,"class","logInDiv p-5"),d(_,"id","loginWelcomeText"),je(Y,"font-size","30px"),d(Y,"id","timeLeft"),d(G,"id","redirectMessage"),d(be,"id","logoutBtn"),d(O,"class","logOutDiv"),je(O,"display","none"),d(o,"class",Oe="hover:scale-[102%] font-Poppins shadow-md "+(e[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group"),d(o,"style",He=`background:${e[3]}`)},m(ne,K){U(ne,o,K),p(o,t),p(t,l),p(l,n),p(n,r),p(r,i),p(i,s),p(n,a),p(n,f),p(f,v),p(t,k),p(t,m),p(m,u),p(t,g),p(t,c),p(c,b),p(b,N),p(N,L),p(L,F),p(b,y),p(b,D),p(D,J),p(t,B),p(t,Z),ut(Z,e[0]),p(t,Me),p(t,le),p(o,_e),p(o,O),p(O,_),p(_,H),p(O,P),p(O,G),p(G,A),p(G,Y),p(Y,ze),p(O,We),p(O,be),p(be,Re),Ue||(Qe=[X(l,"click",ro),X(Z,"keyup",function(){jt(e[4](e[0]))&&e[4](e[0]).apply(this,arguments)}),X(Z,"input",e[7]),X(be,"click",so)],Ue=!0)},p(ne,[K]){e=ne,K&4&&I!==(I="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-90")+" text-xl text-white")&&d(l,"class",I),K&4&&C!==(C="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-80")+" text-xl text-white")&&d(c,"class",C),K&2&&pe!==(pe="text-center p-3 mt-3 w-full "+e[1])&&d(Z,"class",pe),K&1&&Z.value!==e[0]&&ut(Z,e[0]),K&4&&Oe!==(Oe="hover:scale-[102%] font-Poppins shadow-md "+(e[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group")&&d(o,"class",Oe),K&8&&He!==(He=`background:${e[3]}`)&&d(o,"style",He)},i(ne){w||he(()=>{w=Le(l,Be,{duration:600,easing:Ne}),w.start()}),$||he(()=>{$=Le(c,Be,{duration:600,easing:Ne}),$.start()})},o:z,d(ne){ne&&h(o),Ue=!1,Dt(Qe)}}}function uo(e,o,t){let l,n,r,i,s,a,f;T(e,Q,b=>t(9,n=b)),T(e,Pe,b=>t(10,r=b)),T(e,Ve,b=>t(11,i=b)),T(e,De,b=>t(12,s=b)),T(e,qe,b=>t(2,a=b)),T(e,Rt,b=>t(3,f=b));let v="",I=!1,w,k=!1;Nt(()=>{const b=document.querySelector(".logInDiv"),N=document.querySelector(".logOutDiv"),L=document.querySelector("#loginWelcomeText"),F=document.querySelector("#passwordlessLoginBtn"),y=document.querySelector("#emailField");if(F.addEventListener("click",g),y.addEventListener("keydown",g),Xt(Ie,window.location.href)){let D=window.localStorage.getItem("emailForSignIn");D||(D=window.prompt("Please provide your email for confirmation")),Jt(Ie,D,window.location.href).then(()=>window.localStorage.removeItem("emailForSignIn")).catch(J=>console.log(J))}Qt(Ie,D=>{D?(q(De,s=!0,s),console.log("User is signed in! YEET"),u(D.email),b.style.display="none",N.style.display="block",L.innerText=D.displayName?`Hey ${D.displayName}!`:`Hey ${D.email}!`):(q(De,s=!1,s),q(Q,n=!1,n),console.log("User is NOT signed in"),b.style.display="block",N.style.display="none")})});function m(b){I=io(b),b==""?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):I?I&&(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a"):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}async function u(b){(await xt($t(eo,"email"))).forEach(L=>{if(b===L.id){let F=3e3,y=parseInt(F/1e3),D="/";console.log(`A match! ${L.id} => ${D}`),q(Ve,i=setInterval(()=>{y>0&&(y+=-1,document.getElementById("timeLeft").innerHTML=` ${y}`)},1e3),i),q(Pe,r=setTimeout(()=>{Je(D),q(Q,n=!1,n)},F),r)}})}function g(b){(b.type=="click"||b.key=="Enter")&&v==""&&(t(5,w=!0),setTimeout(()=>t(5,w=!w),100)),(b.type=="click"||b.key=="Enter")&&I&&(ao(v),t(6,k=!0),t(0,v=""),emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email \u{1F680}
                  </div>
                  `,emailField.style.opacity="0.5",emailField.style.pointerEvents="none",passwordlessLoginBtn.style.opacity="0.5",passwordlessLoginBtn.style.pointerEvents="none")}function c(){v=this.value,t(0,v)}return e.$$.update=()=>{e.$$.dirty&96&&t(1,l=!k&&w&&"animate-ping")},[v,l,a,f,m,w,k,c]}class fo extends ve{constructor(o){super(),we(this,o,uo,co,x,{})}}function mo(e){let o,t;return{c(){o=ie("svg"),t=ie("path"),this.h()},l(l){o=ae(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,style:!0,"data-metatip":!0});var n=E(o);t=ae(n,"path",{d:!0}),E(t).forEach(h),n.forEach(h),this.h()},h(){d(t,"d","M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"),d(o,"aria-label","Moon"),d(o,"id","darkIcon"),d(o,"height","24"),d(o,"width","24"),je(o,"transform","scale(1)"),d(o,"data-metatip","true")},m(l,n){U(l,o,n),p(o,t)},d(l){l&&h(o)}}}function ho(e){let o,t;return{c(){o=ie("svg"),t=ie("path"),this.h()},l(l){o=ae(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,viewBox:!0,style:!0});var n=E(o);t=ae(n,"path",{fill:!0,d:!0}),E(t).forEach(h),n.forEach(h),this.h()},h(){d(t,"fill","rgb(247,247,247)"),d(t,"d","M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"),d(o,"aria-label","Sun"),d(o,"id","lightIcon"),d(o,"height","24"),d(o,"width","24"),d(o,"viewBox","0 0 182 182"),je(o,"transform","scale(1)")},m(l,n){U(l,o,n),p(o,t)},d(l){l&&h(o)}}}function pt(e){let o,t,l,n;function r(a,f){return a[0]?ho:mo}let i=r(e),s=i(e);return{c(){o=M("button"),s.c()},l(a){o=S(a,"BUTTON",{});var f=E(o);s.l(f),f.forEach(h)},m(a,f){U(a,o,f),s.m(o,null),l||(n=X(o,"click",e[1]),l=!0)},p(a,f){e=a,i!==(i=r(e))&&(s.d(1),s=i(e),s&&(s.c(),s.m(o,null)))},i(a){t||he(()=>{t=Le(o,Be,{duration:1e3,easing:Ne}),t.start()})},o:z,d(a){a&&h(o),s.d(),l=!1,n()}}}function go(e){let o=e[0],t,l=pt(e);return{c(){l.c(),t=ge()},l(n){l.l(n),t=ge()},m(n,r){l.m(n,r),U(n,t,r)},p(n,[r]){r&1&&x(o,o=n[0])?(Se(),V(l,1,1,z),Te(),l=pt(n),l.c(),j(l,1),l.m(t.parentNode,t)):l.p(n,r)},i(n){j(l)},o(n){V(l)},d(n){n&&h(t),l.d(n)}}}function po(e,o,t){let l;T(e,qe,r=>t(0,l=r));function n(){window.document.body.classList.toggle("dark-mode"),q(qe,l=!l,l)}return[l,n]}class _o extends ve{constructor(o){super(),we(this,o,po,go,x,{})}}const bo=()=>{const e=to,o={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(o,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return vo(),{}},enumerable:!1}}),o},Ft={subscribe(e){return bo().page.subscribe(e)}};function vo(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function _t(e){let o,t,l,n,r,i;return{c(){o=M("button"),t=te(e[2]),this.h()},l(s){o=S(s,"BUTTON",{class:!0});var a=E(o);t=oe(a,e[2]),a.forEach(h),this.h()},h(){d(o,"class",l=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)},m(s,a){U(s,o,a),p(o,t),r||(i=X(o,"click",e[13]),r=!0)},p(s,a){e=s,a&4&&Bt(t,e[2]),a&25&&l!==(l=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)&&d(o,"class",l)},i(s){n||he(()=>{n=Le(o,Ht,{duration:800,easing:Ne}),n.start()})},o:z,d(s){s&&h(o),r=!1,i()}}}function wo(e){let o=e[5],t,l=_t(e);return{c(){l.c(),t=ge()},l(n){l.l(n),t=ge()},m(n,r){l.m(n,r),U(n,t,r)},p(n,[r]){r&32&&x(o,o=n[5])?(Se(),V(l,1,1,z),Te(),l=_t(n),l.c(),j(l,1),l.m(t.parentNode,t)):l.p(n,r)},i(n){j(l)},o(n){V(l)},d(n){n&&h(t),l.d(n)}}}function ko(e,o,t){let l,n,r,i,s;T(e,Ft,c=>t(12,l=c)),T(e,Pe,c=>t(6,n=c)),T(e,Ve,c=>t(7,r=c)),T(e,me,c=>t(8,i=c)),T(e,Q,c=>t(9,s=c));let{href:a,content:f,bool:v,btnColor:I,btnColorHover:w,routes:k}=o,m;function u(){for(let c in k)t(11,k[c].isCurrent=!1,k);t(0,v=!v),t(5,m=!m)}const g=()=>{if(a!=="/login"&&(clearTimeout(n),clearInterval(r)),a=="/homework"){q(me,i=!0,i),q(Q,s=!1,s);return}if(a=="/login"){q(Q,s=!0,s),q(me,i=!1,i),clearTimeout(n),clearInterval(r);return}q(Q,s=!1,s),q(me,i=!1,i),u(),a=="/screenshare"&&setTimeout(()=>{location.reload()},50),Je(a)};return e.$$set=c=>{"href"in c&&t(1,a=c.href),"content"in c&&t(2,f=c.content),"bool"in c&&t(0,v=c.bool),"btnColor"in c&&t(3,I=c.btnColor),"btnColorHover"in c&&t(4,w=c.btnColorHover),"routes"in c&&t(11,k=c.routes)},e.$$.update=()=>{if(e.$$.dirty&6144)for(let c in k)t(11,k[c].isCurrent=k[c].href===l.url.pathname,k)},[v,a,f,I,w,m,n,r,i,s,u,k,l,g]}class yo extends ve{constructor(o){super(),we(this,o,ko,wo,x,{href:1,content:2,bool:0,btnColor:3,btnColorHover:4,routes:11})}}function bt(e){return Object.prototype.toString.call(e)==="[object Date]"}function Xe(e,o,t,l){if(typeof t=="number"||bt(t)){const n=l-t,r=(t-o)/(e.dt||1/60),i=e.opts.stiffness*n,s=e.opts.damping*r,a=(i-s)*e.inv_mass,f=(r+a)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(n)<e.opts.precision?l:(e.settled=!1,bt(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((n,r)=>Xe(e,o[r],t[r],l[r]));if(typeof t=="object"){const n={};for(const r in t)n[r]=Xe(e,o[r],t[r],l[r]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function Co(e,o={}){const t=oo(e),{stiffness:l=.15,damping:n=.8,precision:r=.01}=o;let i,s,a,f=e,v=e,I=1,w=0,k=!1;function m(g,c={}){v=g;const b=a={};if(e==null||c.hard||u.stiffness>=1&&u.damping>=1)return k=!0,i=dt(),f=g,t.set(e=v),Promise.resolve();if(c.soft){const N=c.soft===!0?.5:+c.soft;w=1/(N*60),I=0}return s||(i=dt(),k=!1,s=Pt(N=>{if(k)return k=!1,s=null,!1;I=Math.min(I+w,1);const L={inv_mass:I,opts:u,settled:!0,dt:(N-i)*60/1e3},F=Xe(L,f,e,v);return i=N,f=e,t.set(e=F),L.settled&&(s=null),!L.settled})),new Promise(N=>{s.promise.then(()=>{b===a&&N()})})}const u={set:m,update:(g,c)=>m(g(v,e),c),subscribe:t.subscribe,stiffness:l,damping:n,precision:r};return u}function vt(e,o,t){const l=e.slice();return l[19]=o[t],l[20]=o,l[21]=t,l}function wt(e){let o,t,l,n,r;return{c(){o=M("div"),t=te("THINKSOLVE"),this.h()},l(i){o=S(i,"DIV",{class:!0});var s=E(o);t=oe(s,"THINKSOLVE"),s.forEach(h),this.h()},h(){d(o,"class","md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent")},m(i,s){U(i,o,s),p(o,t),n||(r=X(o,"click",e[11]),n=!0)},p(i,s){e=i},i(i){l||he(()=>{l=Le(o,Be,{duration:1200,easing:Ne}),l.start()})},o:z,d(i){i&&h(o),n=!1,r()}}}function kt(e){let o,t,l,n,r,i,s,a;function f(m){e[13](m,e[19])}function v(m){e[14](m)}function I(m){e[15](m)}function w(m){e[16](m)}let k={href:e[7][e[19]].href,content:e[7][e[19]].name};return e[7][e[19]].isCurrent!==void 0&&(k.bool=e[7][e[19]].isCurrent),e[7]!==void 0&&(k.routes=e[7]),e[4]!==void 0&&(k.btnColor=e[4]),e[5]!==void 0&&(k.btnColorHover=e[5]),t=new yo({props:k}),ye.push(()=>Ce(t,"bool",f)),ye.push(()=>Ce(t,"routes",v)),ye.push(()=>Ce(t,"btnColor",I)),ye.push(()=>Ce(t,"btnColorHover",w)),{c(){o=M("li"),ce(t.$$.fragment),this.h()},l(m){o=S(m,"LI",{style:!0});var u=E(o);ue(t.$$.fragment,u),u.forEach(h),this.h()},h(){d(o,"style",s=e[19]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`)},m(m,u){U(m,o,u),de(t,o,null),a=!0},p(m,u){e=m;const g={};u&128&&(g.href=e[7][e[19]].href),u&128&&(g.content=e[7][e[19]].name),!l&&u&128&&(l=!0,g.bool=e[7][e[19]].isCurrent,Ee(()=>l=!1)),!n&&u&128&&(n=!0,g.routes=e[7],Ee(()=>n=!1)),!r&&u&16&&(r=!0,g.btnColor=e[4],Ee(()=>r=!1)),!i&&u&32&&(i=!0,g.btnColorHover=e[5],Ee(()=>i=!1)),t.$set(g),(!a||u&390&&s!==(s=e[19]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`))&&d(o,"style",s)},i(m){a||(j(t.$$.fragment,m),a=!0)},o(m){V(t.$$.fragment,m),a=!1},d(m){m&&h(o),fe(t)}}}function yt(e){let o,t,l,n;return t=new _o({}),{c(){o=M("li"),ce(t.$$.fragment),this.h()},l(r){o=S(r,"LI",{class:!0});var i=E(o);ue(t.$$.fragment,i),i.forEach(h),this.h()},h(){d(o,"class","px-3 translate-y-1")},m(r,i){U(r,o,i),de(t,o,null),n=!0},p(r,i){},i(r){n||(j(t.$$.fragment,r),l||he(()=>{l=Le(o,Ht,{duration:600,easing:Wt}),l.start()}),n=!0)},o(r){V(t.$$.fragment,r),n=!1},d(r){r&&h(o),fe(t)}}}function Eo(e){let o,t=e[3],l,n,r,i,s=!e[0],a,f,v=wt(e),I=Object.keys(e[7]).splice(0,5),w=[];for(let u=0;u<I.length;u+=1)w[u]=kt(vt(e,I,u));const k=u=>V(w[u],1,1,()=>{w[u]=null});let m=yt();return{c(){o=M("logo-and-navbar"),v.c(),l=W(),n=M("nav"),r=M("ul");for(let u=0;u<w.length;u+=1)w[u].c();i=W(),m.c(),this.h()},l(u){o=S(u,"LOGO-AND-NAVBAR",{class:!0});var g=E(o);v.l(g),l=R(g),n=S(g,"NAV",{class:!0});var c=E(n);r=S(c,"UL",{class:!0});var b=E(r);for(let N=0;N<w.length;N+=1)w[N].l(b);i=R(b),m.l(b),b.forEach(h),c.forEach(h),g.forEach(h),this.h()},h(){d(r,"class","flex flex-row text-xl items-center"),d(n,"class",a="md:ml-24 md:p-1 p-3 "+e[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"),Ye(o,"class","flex items-center justify-center md:justify-between gap-x-24")},m(u,g){U(u,o,g),v.m(o,null),p(o,l),p(o,n),p(n,r);for(let c=0;c<w.length;c+=1)w[c].m(r,null);p(r,i),m.m(r,null),f=!0},p(u,[g]){if(g&8&&x(t,t=u[3])?(Se(),V(v,1,1,z),Te(),v=wt(u),v.c(),j(v,1),v.m(o,l)):v.p(u,g),g&438){I=Object.keys(u[7]).splice(0,5);let c;for(c=0;c<I.length;c+=1){const b=vt(u,I,c);w[c]?(w[c].p(b,g),j(w[c],1)):(w[c]=kt(b),w[c].c(),j(w[c],1),w[c].m(r,i))}for(Se(),c=I.length;c<w.length;c+=1)k(c);Te()}g&1&&x(s,s=!u[0])?(Se(),V(m,1,1,z),Te(),m=yt(),m.c(),j(m,1),m.m(r,null)):m.p(u,g),(!f||g&64&&a!==(a="md:ml-24 md:p-1 p-3 "+u[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"))&&d(n,"class",a)},i(u){if(!f){j(v);for(let g=0;g<I.length;g+=1)j(w[g]);j(m),f=!0}},o(u){V(v),w=w.filter(Boolean);for(let g=0;g<w.length;g+=1)V(w[g]);V(m),f=!1},d(u){u&&h(o),v.d(u),Ot(w,u),m.d(u)}}}function Io(e,o,t){let l,n,r,i,s,a,f,v;T(e,qe,y=>t(0,n=y)),T(e,re,y=>t(7,r=y)),T(e,me,y=>t(17,i=y)),T(e,Q,y=>t(18,s=y)),T(e,De,y=>t(1,a=y)),T(e,Ke,y=>t(12,f=y));let I=Co(1,{stiffness:.1,damping:.25});T(e,I,y=>t(8,v=y));let w=0,k,m;function u(){q(Q,s=!1,s),q(me,i=!1,i),Je("/"),t(3,m=!m);for(let y in r)q(re,r[y].isCurrent=!1,r);q(re,r.home.isCurrent=!0,r)}let g="sm:bg-red-300 rounded",c="hover:bg-red-300";function b(y,D){e.$$.not_equal(r[D].isCurrent,y)&&(r[D].isCurrent=y,re.set(r))}function N(y){r=y,re.set(r)}function L(y){g=y,t(4,g)}function F(y){c=y,t(5,c)}return e.$$.update=()=>{e.$$.dirty&4099&&a&&(t(2,w=n?.75:0),I.set(1+.5*Math.sin(f))),e.$$.dirty&2&&(a?q(re,r.login.name="\u{1F680}",r):q(re,r.login.name="Login",r)),e.$$.dirty&1&&t(6,l=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] ${n?"to-[rgb(37,35,91)]":"to-red-100"}`)},[n,a,w,m,g,c,l,r,v,I,k,u,f,b,N,L,F]}class Lo extends ve{constructor(o){super(),we(this,o,Io,Eo,x,{})}}function Mo(e){let o,t,l;return{c(){o=M("div"),t=M("span"),l=te("Need help? Contact thinksolve.io[at]gmail.com"),this.h()},l(n){o=S(n,"DIV",{class:!0});var r=E(o);t=S(r,"SPAN",{class:!0});var i=E(t);l=oe(i,"Need help? Contact thinksolve.io[at]gmail.com"),i.forEach(h),r.forEach(h),this.h()},h(){d(t,"class","my-20 text-xs text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"),d(o,"class","flex justify-center items-center ")},m(n,r){U(n,o,r),p(o,t),p(t,l)},p:z,i:z,o:z,d(n){n&&h(o)}}}class So extends ve{constructor(o){super(),we(this,o,null,Mo,x,{})}}const{clearTimeout:Ct,document:se}=qt;function Et(e,o,t){const l=e.slice();return l[22]=o[t],l}function To(e){return se.title=e[3][e[22]].title,{c:z,l:z,m:z,d:z}}function Do(e){return se.title=e[3].home.title,{c:z,l:z,m:z,d:z}}function It(e){let o;function t(r,i){if(r[4].routeId=="")return Do;if(r[4].routeId==r[22])return To}let l=t(e),n=l&&l(e);return{c(){n&&n.c(),o=ge()},l(r){n&&n.l(r),o=ge()},m(r,i){n&&n.m(r,i),U(r,o,i)},p(r,i){l!==(l=t(r))&&(n&&n.d(1),n=l&&l(r),n&&(n.c(),n.m(o.parentNode,o)))},d(r){n&&n.d(r),r&&h(o)}}}function No(e){let o,t;return o=new fo({}),{c(){ce(o.$$.fragment)},l(l){ue(o.$$.fragment,l)},m(l,n){de(o,l,n),t=!0},i(l){t||(j(o.$$.fragment,l),t=!0)},o(l){V(o.$$.fragment,l),t=!1},d(l){fe(o,l)}}}function Oo(e){let o,t;return o=new zt({props:{uniqueId:"broccoli",text:"\u{1F525}",textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"}}),{c(){ce(o.$$.fragment)},l(l){ue(o.$$.fragment,l)},m(l,n){de(o,l,n),t=!0},p:z,i(l){t||(j(o.$$.fragment,l),t=!0)},o(l){V(o.$$.fragment,l),t=!1},d(l){fe(o,l)}}}function Ho(e){let o=!1,t=()=>{o=!1},l,n,r,i,s,a,f,v,I,w,k,m,u,g,c,b,N,L,F,y,D,J,C;he(e[13]),he(e[14]);let $=Object.keys(e[3]),B=[];for(let _=0;_<$.length;_+=1)B[_]=It(Et(e,$,_));function Z(_){e[15](_)}let pe={$$slots:{default:[No]},$$scope:{ctx:e}};e[6]!==void 0&&(pe.showModal=e[6]),v=new gt({props:pe}),ye.push(()=>Ce(v,"showModal",Z));function Me(_){e[16](_)}let le={bgTint:"bg-[rgba(0,0,0,0.1)]",$$slots:{default:[Oo]},$$scope:{ctx:e}};e[7]!==void 0&&(le.showModal=e[7]),k=new gt({props:le}),ye.push(()=>Ce(k,"showModal",Me)),c=new Lo({});const _e=e[12].default,O=Lt(_e,e,e[17],null);return y=new So({}),{c(){n=M("link"),r=M("link"),i=M("link");for(let _=0;_<B.length;_+=1)B[_].c();s=ge(),a=W(),f=M("main"),ce(v.$$.fragment),w=W(),ce(k.$$.fragment),u=W(),g=M("div"),ce(c.$$.fragment),N=W(),L=M("div"),O&&O.c(),F=W(),ce(y.$$.fragment),this.h()},l(_){const H=Vt('[data-svelte="svelte-y8jogi"]',se.head);n=S(H,"LINK",{rel:!0,href:!0}),r=S(H,"LINK",{rel:!0,href:!0,crossorigin:!0}),i=S(H,"LINK",{href:!0,rel:!0});for(let Y=0;Y<B.length;Y+=1)B[Y].l(H);s=ge(),H.forEach(h),a=R(_),f=S(_,"MAIN",{});var P=E(f);ue(v.$$.fragment,P),w=R(P),ue(k.$$.fragment,P),u=R(P),g=S(P,"DIV",{class:!0});var G=E(g);ue(c.$$.fragment,G),G.forEach(h),N=R(P),L=S(P,"DIV",{class:!0});var A=E(L);O&&O.l(A),F=R(A),ue(y.$$.fragment,A),A.forEach(h),P.forEach(h),this.h()},h(){d(n,"rel","preconnect"),d(n,"href","https://fonts.googleapis.com"),d(r,"rel","preconnect"),d(r,"href","https://fonts.gstatic.com"),d(r,"crossorigin",""),d(i,"href","https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"),d(i,"rel","stylesheet"),d(g,"class",b="md:py-4 py-1 md:px-[7%] z-50 fixed "+e[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"),d(L,"class","px-[7%] h-[100vh] pt-32 md:block")},m(_,H){p(se.head,n),p(se.head,r),p(se.head,i);for(let P=0;P<B.length;P+=1)B[P].m(se.head,null);p(se.head,s),U(_,a,H),U(_,f,H),de(v,f,null),p(f,w),de(k,f,null),p(f,u),p(f,g),de(c,g,null),p(f,N),p(f,L),O&&O.m(L,null),p(L,F),de(y,L,null),D=!0,J||(C=[X(window,"resize",e[8]),X(window,"contextmenu",Fo),X(window,"popstate",e[9]),X(window,"scroll",()=>{o=!0,Ct(l),l=setTimeout(t,100),e[13]()}),X(window,"resize",e[14])],J=!0)},p(_,[H]){if(H&1&&!o&&(o=!0,Ct(l),scrollTo(window.pageXOffset,_[0]),l=setTimeout(t,100)),H&24){$=Object.keys(_[3]);let A;for(A=0;A<$.length;A+=1){const Y=Et(_,$,A);B[A]?B[A].p(Y,H):(B[A]=It(Y),B[A].c(),B[A].m(s.parentNode,s))}for(;A<B.length;A+=1)B[A].d(1);B.length=$.length}const P={};H&131072&&(P.$$scope={dirty:H,ctx:_}),!I&&H&64&&(I=!0,P.showModal=_[6],Ee(()=>I=!1)),v.$set(P);const G={};H&131072&&(G.$$scope={dirty:H,ctx:_}),!m&&H&128&&(m=!0,G.showModal=_[7],Ee(()=>m=!1)),k.$set(G),(!D||H&2&&b!==(b="md:py-4 py-1 md:px-[7%] z-50 fixed "+_[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"))&&d(g,"class",b),O&&O.p&&(!D||H&131072)&&Mt(O,_e,_,_[17],D?Tt(_e,_[17],H,null):St(_[17]),null)},i(_){D||(j(v.$$.fragment,_),j(k.$$.fragment,_),j(c.$$.fragment,_),j(O,_),j(y.$$.fragment,_),D=!0)},o(_){V(v.$$.fragment,_),V(k.$$.fragment,_),V(c.$$.fragment,_),V(O,_),V(y.$$.fragment,_),D=!1},d(_){h(n),h(r),h(i),Ot(B,_),h(s),_&&h(a),_&&h(f),fe(v),fe(k),fe(c),O&&O.d(_),fe(y),J=!1,Dt(C)}}}const Fo=e=>e.preventDefault();function Ao(e,o,t){let l,n,r,i,s,a,f,v,I,w,k,m,u;T(e,Ut,C=>t(10,l=C)),T(e,Ke,C=>t(0,n=C)),T(e,Zt,C=>t(11,r=C)),T(e,De,C=>t(18,i=C)),T(e,Ve,C=>t(19,s=C)),T(e,Pe,C=>t(20,a=C)),T(e,ft,C=>t(2,f=C)),T(e,mt,C=>t(21,v=C)),T(e,re,C=>t(3,I=C)),T(e,Ft,C=>t(4,w=C)),T(e,ht,C=>t(5,k=C)),T(e,Q,C=>t(6,m=C)),T(e,me,C=>t(7,u=C));let{$$slots:g={},$$scope:c}=o;function b(){q(mt,v=document.body.scrollHeight-f,v)}function N(){clearTimeout(a),clearInterval(s)}Nt(()=>{console.log("isLoggedIn",i),b()});let L;function F(){Ke.set(n=window.pageYOffset)}function y(){ht.set(k=window.innerWidth),ft.set(f=window.innerHeight)}function D(C){m=C,Q.set(m)}function J(C){u=C,me.set(u)}return e.$$set=C=>{"$$scope"in C&&t(17,c=C.$$scope)},e.$$.update=()=>{e.$$.dirty&3073&&(r||(n==0&&t(1,L="top-0"),n>10&&n<800&&l>0&&t(1,L="top-0 backdrop-blur-3xl "),n>800&&l>10&&t(1,L="-top-20 backdrop-blur-3xl duration-200"),l<-100&&t(1,L="top-0 backdrop-blur-3xl duration-700"))),e.$$.dirty&3073&&r&&(n==0&&t(1,L="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl "),n>10&&n<400&&l>0&&t(1,L="bottom-0 backdrop-blur-3xl "),n>400&&l>10&&t(1,L="-bottom-20 backdrop-blur-3xl duration-200"),l<-30&&t(1,L="bottom-0 backdrop-blur-3xl duration-700"))},[n,L,f,I,w,k,m,u,b,N,l,r,g,F,y,D,J,c]}class Zo extends ve{constructor(o){super(),we(this,o,Ao,Ho,x,{})}}export{Zo as default};