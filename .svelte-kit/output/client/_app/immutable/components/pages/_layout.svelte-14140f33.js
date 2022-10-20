import{S as ve,i as we,s as x,E as Lt,k as M,l as S,m as E,h,F as Ye,b as Z,G as J,H as At,I as Mt,J as St,K as Tt,f as B,t as q,L as ie,a as R,q as te,M as ae,c as U,r as oe,n as d,p as je,N as p,O as ut,D as jt,P as he,Q as Le,A as W,C as Dt,R as T,o as Nt,T as z,e as ge,g as Se,d as Te,u as Bt,U as dt,V as Pt,W as Ot,X as ye,Y as Ce,v as ce,w as ue,x as de,Z as Ee,y as fe,_ as Vt,$ as qt}from"../../chunks/index-1063d0c6.js";import{D as zt}from"../../chunks/Dropzone-f8f6282b.js";import{g as Je}from"../../chunks/navigation-493f3a83.js";import{e as Ne,s as Be,a as Ht,q as Wt}from"../../chunks/index-0fa359d1.js";import{n as Q,r as Pe,a as Ve,i as De,b as qe,e as Rt,c as me,d as re,s as Ke,f as Ut,l as Zt,w as ft,g as mt,h as ht}from"../../chunks/store-338023ad.js";import{G as Ge,s as Gt,a as Yt,b as Kt,c as Ie,i as Xt,d as Jt,o as Qt,R as xt,y as $t,e as eo}from"../../chunks/firebase-9f2e011b.js";import{s as to}from"../../chunks/singletons-213e3f9e.js";import{w as oo}from"../../chunks/index-6dbc7447.js";import"../../chunks/private-2f12c45b.js";function lo(e){let o,t,l,n,r;const i=e[3].default,s=Lt(i,e,e[2],null);return{c(){o=M("modal-container"),s&&s.c(),this.h()},l(a){o=S(a,"MODAL-CONTAINER",{class:!0});var f=E(o);s&&s.l(f),f.forEach(h),this.h()},h(){Ye(o,"class",t="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(e[0]?`${e[1]}`:"hidden"))},m(a,f){Z(a,o,f),s&&s.m(o,null),l=!0,n||(r=J(o,"click",At(e[4])),n=!0)},p(a,[f]){s&&s.p&&(!l||f&4)&&Mt(s,i,a,a[2],l?Tt(i,a[2],f,null):St(a[2]),null),(!l||f&3&&t!==(t="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(a[0]?`${a[1]}`:"hidden")))&&Ye(o,"class",t)},i(a){l||(B(s,a),l=!0)},o(a){q(s,a),l=!1},d(a){a&&h(o),s&&s.d(a),n=!1,r()}}}function no(e,o,t){let{$$slots:l={},$$scope:n}=o,{showModal:r=!1}=o,{bgTint:i="bg-[rgba(0,0,0,0.4)]"}=o;const s=()=>{t(0,r=!1)};return e.$$set=a=>{"showModal"in a&&t(0,r=a.showModal),"bgTint"in a&&t(1,i=a.bgTint),"$$scope"in a&&t(2,n=a.$$scope)},[r,i,n,l,s]}class gt extends ve{constructor(o){super(),we(this,o,no,lo,x,{showModal:0,bgTint:1})}}const ro=()=>{const e=to,o={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(o,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return so(),{}},enumerable:!1}}),o},Ft={subscribe(e){return ro().page.subscribe(e)}};function so(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}async function io(){const e=new Ge;Gt(Ie,e).then(o=>{Ge.credentialFromResult(o).accessToken,o.user}).catch(o=>{o.code,o.message,o.customData.email,Ge.credentialFromError(o)})}function ao(){Yt(Ie).then(()=>{console.log("logged out"),goto("/")}).catch(e=>{console.log(e),console.log("FAILED firebase signOut function")})}function co(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function uo(e){Kt(Ie,e,{url:"https://thinksolve.io/",handleCodeInApp:!0}).then(()=>{Q.subscribe(o=>!0),window.localStorage.setItem("emailForSignIn",e),console.log("success with sendSignInLinkToEmail!")}).catch(o=>{const t=o.code,l=o.message;console.log("errorCode",t),console.log("errorMessage",l)})}function fo(e){let o,t,l,n,r,i,s,a,f,b,I,v,k,m,u,g,c,D,w,L,A,y,H,F,C,$,P,G,pe,Me,le,_e,N,_,O,V,Y,j,K,ze,We,be,Re,Oe,He,Ue,Qe;return{c(){o=M("card"),t=M("div"),l=M("div"),n=M("ul"),r=M("li"),i=ie("svg"),s=ie("path"),a=R(),f=M("li"),b=te("Sign-in with Google"),k=R(),m=M("p"),u=te("or"),g=R(),c=M("div"),D=M("ul"),w=M("li"),L=ie("svg"),A=ie("path"),y=R(),H=M("li"),F=te("Get Magic Link"),P=R(),G=M("input"),Me=R(),le=M("span"),_e=R(),N=M("div"),_=M("p"),O=te("Welcome User"),V=R(),Y=M("div"),j=te(`Redirecting to your page in
      `),K=M("div"),ze=te("\u230A\u03C0\u230B"),We=R(),be=M("button"),Re=te("Logout"),this.h()},l(ne){o=S(ne,"CARD",{class:!0,style:!0});var X=E(o);t=S(X,"DIV",{class:!0});var ee=E(t);l=S(ee,"DIV",{class:!0});var xe=E(l);n=S(xe,"UL",{class:!0});var Fe=E(n);r=S(Fe,"LI",{});var $e=E(r);i=ae($e,"svg",{height:!0,width:!0,viewBox:!0});var et=E(i);s=ae(et,"path",{fill:!0,d:!0}),E(s).forEach(h),et.forEach(h),$e.forEach(h),a=U(Fe),f=S(Fe,"LI",{});var tt=E(f);b=oe(tt,"Sign-in with Google"),tt.forEach(h),Fe.forEach(h),xe.forEach(h),k=U(ee),m=S(ee,"P",{class:!0});var ot=E(m);u=oe(ot,"or"),ot.forEach(h),g=U(ee),c=S(ee,"DIV",{id:!0,class:!0});var lt=E(c);D=S(lt,"UL",{class:!0});var Ae=E(D);w=S(Ae,"LI",{});var nt=E(w);L=ae(nt,"svg",{height:!0,width:!0,viewBox:!0});var rt=E(L);A=ae(rt,"path",{fill:!0,d:!0}),E(A).forEach(h),rt.forEach(h),nt.forEach(h),y=U(Ae),H=S(Ae,"LI",{});var st=E(H);F=oe(st,"Get Magic Link"),st.forEach(h),Ae.forEach(h),lt.forEach(h),P=U(ee),G=S(ee,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),Me=U(ee),le=S(ee,"SPAN",{id:!0}),E(le).forEach(h),ee.forEach(h),_e=U(X),N=S(X,"DIV",{class:!0,style:!0});var ke=E(N);_=S(ke,"P",{id:!0});var it=E(_);O=oe(it,"Welcome User"),it.forEach(h),V=U(ke),Y=S(ke,"DIV",{id:!0});var Ze=E(Y);j=oe(Ze,`Redirecting to your page in
      `),K=S(Ze,"DIV",{style:!0,id:!0});var at=E(K);ze=oe(at,"\u230A\u03C0\u230B"),at.forEach(h),Ze.forEach(h),We=U(ke),be=S(ke,"BUTTON",{id:!0});var ct=E(be);Re=oe(ct,"Logout"),ct.forEach(h),ke.forEach(h),X.forEach(h),this.h()},h(){d(s,"fill","white"),d(s,"d",`M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z`),d(i,"height","24"),d(i,"width","24"),d(i,"viewBox","0 0 210 210"),d(n,"class","flex justify-center items-center gap-5"),d(l,"class",I="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-90")+" text-xl text-white"),d(m,"class","py-5"),d(A,"fill","white"),d(A,"d",`M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z`),d(L,"height","24"),d(L,"width","24"),d(L,"viewBox","0 0 485 485"),d(D,"class","flex justify-center items-center gap-5"),d(c,"id","passwordlessLoginBtn"),d(c,"class",C="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-80")+" text-xl text-white"),d(G,"class",pe="text-center p-3 mt-3 w-full "+e[1]),d(G,"id","emailField"),d(G,"type","email"),d(G,"placeholder","email"),d(le,"id","emailStatusMessage"),d(t,"class","logInDiv p-5"),d(_,"id","loginWelcomeText"),je(K,"font-size","30px"),d(K,"id","timeLeft"),d(Y,"id","redirectMessage"),d(be,"id","logoutBtn"),d(N,"class","logOutDiv"),je(N,"display","none"),d(o,"class",Oe="hover:scale-[102%] font-Poppins shadow-md "+(e[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group"),d(o,"style",He=`background:${e[3]}`)},m(ne,X){Z(ne,o,X),p(o,t),p(t,l),p(l,n),p(n,r),p(r,i),p(i,s),p(n,a),p(n,f),p(f,b),p(t,k),p(t,m),p(m,u),p(t,g),p(t,c),p(c,D),p(D,w),p(w,L),p(L,A),p(D,y),p(D,H),p(H,F),p(t,P),p(t,G),ut(G,e[0]),p(t,Me),p(t,le),p(o,_e),p(o,N),p(N,_),p(_,O),p(N,V),p(N,Y),p(Y,j),p(Y,K),p(K,ze),p(N,We),p(N,be),p(be,Re),Ue||(Qe=[J(l,"click",io),J(G,"keyup",function(){jt(e[4](e[0]))&&e[4](e[0]).apply(this,arguments)}),J(G,"input",e[9]),J(be,"click",ao)],Ue=!0)},p(ne,[X]){e=ne,X&4&&I!==(I="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-90")+" text-xl text-white")&&d(l,"class",I),X&4&&C!==(C="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[2],"group-hover:bg-opacity-80")+" text-xl text-white")&&d(c,"class",C),X&2&&pe!==(pe="text-center p-3 mt-3 w-full "+e[1])&&d(G,"class",pe),X&1&&G.value!==e[0]&&ut(G,e[0]),X&4&&Oe!==(Oe="hover:scale-[102%] font-Poppins shadow-md "+(e[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group")&&d(o,"class",Oe),X&8&&He!==(He=`background:${e[3]}`)&&d(o,"style",He)},i(ne){v||he(()=>{v=Le(l,Be,{duration:600,easing:Ne}),v.start()}),$||he(()=>{$=Le(c,Be,{duration:600,easing:Ne}),$.start()})},o:W,d(ne){ne&&h(o),Ue=!1,Dt(Qe)}}}function mo(e,o,t){let l,n,r,i,s,a,f;T(e,Q,w=>t(8,n=w)),T(e,Pe,w=>t(11,r=w)),T(e,Ve,w=>t(12,i=w)),T(e,De,w=>t(13,s=w)),T(e,qe,w=>t(2,a=w)),T(e,Rt,w=>t(3,f=w));let b="",I=!1,v,k=!1,m;Nt(()=>{const w=document.querySelector(".logInDiv"),L=document.querySelector(".logOutDiv"),A=document.querySelector("#loginWelcomeText"),y=document.querySelector("#passwordlessLoginBtn"),H=document.querySelector("#emailField");if(y.addEventListener("click",c),H.addEventListener("keydown",c),Xt(Ie,window.location.href)){let F=window.localStorage.getItem("emailForSignIn");F||(F=window.prompt("Please provide your email for confirmation")),Jt(Ie,F,window.location.href).then(()=>window.localStorage.removeItem("emailForSignIn")).catch(C=>console.log(C))}Qt(Ie,F=>{F?(z(De,s=!0,s),t(7,m=F.email),console.log("User is signed in! YEET"),w.style.display="none",L.style.display="block",A.innerText=F.displayName?`Hey ${F.displayName}!`:`Hey ${F.email}!`):(z(De,s=!1,s),z(Q,n=!1,n),t(7,m=""),console.log("User is NOT signed in"),w.style.display="block",L.style.display="none")})});function u(w){I=co(w),w==""?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):I?I&&(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a"):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}async function g(w){(await xt($t(eo,"email"))).forEach(A=>{if(w===A.id){let y=3e3,H=parseInt(y/1e3),F="/";console.log(`A match! ${A.id} => ${F}`),z(Ve,i=setInterval(()=>{H>0&&(H+=-1,document.getElementById("timeLeft").innerHTML=` ${H}`)},1e3),i),z(Pe,r=setTimeout(()=>{Je(F),z(Q,n=!1,n)},y),r)}})}function c(w){(w.type=="click"||w.key=="Enter")&&b==""&&(t(5,v=!0),setTimeout(()=>t(5,v=!v),100)),(w.type=="click"||w.key=="Enter")&&I&&(uo(b),t(6,k=!0),t(0,b=""),emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email \u{1F680}
                  </div>
                  `,emailField.style.opacity="0.5",emailField.style.pointerEvents="none",passwordlessLoginBtn.style.opacity="0.5",passwordlessLoginBtn.style.pointerEvents="none")}function D(){b=this.value,t(0,b)}return e.$$.update=()=>{e.$$.dirty&96&&t(1,l=!k&&v&&"animate-ping"),e.$$.dirty&384&&n&&g(m)},[b,l,a,f,u,v,k,m,n,D]}class ho extends ve{constructor(o){super(),we(this,o,mo,fo,x,{})}}function go(e){let o,t;return{c(){o=ie("svg"),t=ie("path"),this.h()},l(l){o=ae(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,style:!0,"data-metatip":!0});var n=E(o);t=ae(n,"path",{d:!0}),E(t).forEach(h),n.forEach(h),this.h()},h(){d(t,"d","M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"),d(o,"aria-label","Moon"),d(o,"id","darkIcon"),d(o,"height","24"),d(o,"width","24"),je(o,"transform","scale(1)"),d(o,"data-metatip","true")},m(l,n){Z(l,o,n),p(o,t)},d(l){l&&h(o)}}}function po(e){let o,t;return{c(){o=ie("svg"),t=ie("path"),this.h()},l(l){o=ae(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,viewBox:!0,style:!0});var n=E(o);t=ae(n,"path",{fill:!0,d:!0}),E(t).forEach(h),n.forEach(h),this.h()},h(){d(t,"fill","rgb(247,247,247)"),d(t,"d","M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"),d(o,"aria-label","Sun"),d(o,"id","lightIcon"),d(o,"height","24"),d(o,"width","24"),d(o,"viewBox","0 0 182 182"),je(o,"transform","scale(1)")},m(l,n){Z(l,o,n),p(o,t)},d(l){l&&h(o)}}}function pt(e){let o,t,l,n;function r(a,f){return a[0]?po:go}let i=r(e),s=i(e);return{c(){o=M("button"),s.c()},l(a){o=S(a,"BUTTON",{});var f=E(o);s.l(f),f.forEach(h)},m(a,f){Z(a,o,f),s.m(o,null),l||(n=J(o,"click",e[1]),l=!0)},p(a,f){e=a,i!==(i=r(e))&&(s.d(1),s=i(e),s&&(s.c(),s.m(o,null)))},i(a){t||he(()=>{t=Le(o,Be,{duration:1e3,easing:Ne}),t.start()})},o:W,d(a){a&&h(o),s.d(),l=!1,n()}}}function _o(e){let o=e[0],t,l=pt(e);return{c(){l.c(),t=ge()},l(n){l.l(n),t=ge()},m(n,r){l.m(n,r),Z(n,t,r)},p(n,[r]){r&1&&x(o,o=n[0])?(Se(),q(l,1,1,W),Te(),l=pt(n),l.c(),B(l,1),l.m(t.parentNode,t)):l.p(n,r)},i(n){B(l)},o(n){q(l)},d(n){n&&h(t),l.d(n)}}}function bo(e,o,t){let l;T(e,qe,r=>t(0,l=r));function n(){window.document.body.classList.toggle("dark-mode"),z(qe,l=!l,l)}return[l,n]}class vo extends ve{constructor(o){super(),we(this,o,bo,_o,x,{})}}function _t(e){let o,t,l,n,r,i;return{c(){o=M("button"),t=te(e[2]),this.h()},l(s){o=S(s,"BUTTON",{class:!0});var a=E(o);t=oe(a,e[2]),a.forEach(h),this.h()},h(){d(o,"class",l=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)},m(s,a){Z(s,o,a),p(o,t),r||(i=J(o,"click",e[13]),r=!0)},p(s,a){e=s,a&4&&Bt(t,e[2]),a&25&&l!==(l=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)&&d(o,"class",l)},i(s){n||he(()=>{n=Le(o,Ht,{duration:800,easing:Ne}),n.start()})},o:W,d(s){s&&h(o),r=!1,i()}}}function wo(e){let o=e[5],t,l=_t(e);return{c(){l.c(),t=ge()},l(n){l.l(n),t=ge()},m(n,r){l.m(n,r),Z(n,t,r)},p(n,[r]){r&32&&x(o,o=n[5])?(Se(),q(l,1,1,W),Te(),l=_t(n),l.c(),B(l,1),l.m(t.parentNode,t)):l.p(n,r)},i(n){B(l)},o(n){q(l)},d(n){n&&h(t),l.d(n)}}}function ko(e,o,t){let l,n,r,i,s;T(e,Ft,c=>t(12,l=c)),T(e,Pe,c=>t(6,n=c)),T(e,Ve,c=>t(7,r=c)),T(e,me,c=>t(8,i=c)),T(e,Q,c=>t(9,s=c));let{href:a,content:f,bool:b,btnColor:I,btnColorHover:v,routes:k}=o,m;function u(){for(let c in k)t(11,k[c].isCurrent=!1,k);t(0,b=!b),t(5,m=!m)}const g=()=>{if(a!=="/login"&&(clearTimeout(n),clearInterval(r)),a=="/homework"){z(me,i=!0,i),z(Q,s=!1,s);return}if(a=="/login"){z(Q,s=!0,s),z(me,i=!1,i),clearTimeout(n),clearInterval(r);return}z(Q,s=!1,s),z(me,i=!1,i),u(),a=="/screenshare"&&setTimeout(()=>{location.reload()},100),Je(a)};return e.$$set=c=>{"href"in c&&t(1,a=c.href),"content"in c&&t(2,f=c.content),"bool"in c&&t(0,b=c.bool),"btnColor"in c&&t(3,I=c.btnColor),"btnColorHover"in c&&t(4,v=c.btnColorHover),"routes"in c&&t(11,k=c.routes)},e.$$.update=()=>{if(e.$$.dirty&6144)for(let c in k)t(11,k[c].isCurrent=k[c].href===l.url.pathname,k)},[b,a,f,I,v,m,n,r,i,s,u,k,l,g]}class yo extends ve{constructor(o){super(),we(this,o,ko,wo,x,{href:1,content:2,bool:0,btnColor:3,btnColorHover:4,routes:11})}}function bt(e){return Object.prototype.toString.call(e)==="[object Date]"}function Xe(e,o,t,l){if(typeof t=="number"||bt(t)){const n=l-t,r=(t-o)/(e.dt||1/60),i=e.opts.stiffness*n,s=e.opts.damping*r,a=(i-s)*e.inv_mass,f=(r+a)*e.dt;return Math.abs(f)<e.opts.precision&&Math.abs(n)<e.opts.precision?l:(e.settled=!1,bt(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((n,r)=>Xe(e,o[r],t[r],l[r]));if(typeof t=="object"){const n={};for(const r in t)n[r]=Xe(e,o[r],t[r],l[r]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function Co(e,o={}){const t=oo(e),{stiffness:l=.15,damping:n=.8,precision:r=.01}=o;let i,s,a,f=e,b=e,I=1,v=0,k=!1;function m(g,c={}){b=g;const D=a={};if(e==null||c.hard||u.stiffness>=1&&u.damping>=1)return k=!0,i=dt(),f=g,t.set(e=b),Promise.resolve();if(c.soft){const w=c.soft===!0?.5:+c.soft;v=1/(w*60),I=0}return s||(i=dt(),k=!1,s=Pt(w=>{if(k)return k=!1,s=null,!1;I=Math.min(I+v,1);const L={inv_mass:I,opts:u,settled:!0,dt:(w-i)*60/1e3},A=Xe(L,f,e,b);return i=w,f=e,t.set(e=A),L.settled&&(s=null),!L.settled})),new Promise(w=>{s.promise.then(()=>{D===a&&w()})})}const u={set:m,update:(g,c)=>m(g(b,e),c),subscribe:t.subscribe,stiffness:l,damping:n,precision:r};return u}function vt(e,o,t){const l=e.slice();return l[19]=o[t],l[20]=o,l[21]=t,l}function wt(e){let o,t,l,n,r;return{c(){o=M("div"),t=te("THINKSOLVE"),this.h()},l(i){o=S(i,"DIV",{class:!0});var s=E(o);t=oe(s,"THINKSOLVE"),s.forEach(h),this.h()},h(){d(o,"class","md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent")},m(i,s){Z(i,o,s),p(o,t),n||(r=J(o,"click",e[11]),n=!0)},p(i,s){e=i},i(i){l||he(()=>{l=Le(o,Be,{duration:1200,easing:Ne}),l.start()})},o:W,d(i){i&&h(o),n=!1,r()}}}function kt(e){let o,t,l,n,r,i,s,a;function f(m){e[13](m,e[19])}function b(m){e[14](m)}function I(m){e[15](m)}function v(m){e[16](m)}let k={href:e[7][e[19]].href,content:e[7][e[19]].name};return e[7][e[19]].isCurrent!==void 0&&(k.bool=e[7][e[19]].isCurrent),e[7]!==void 0&&(k.routes=e[7]),e[4]!==void 0&&(k.btnColor=e[4]),e[5]!==void 0&&(k.btnColorHover=e[5]),t=new yo({props:k}),ye.push(()=>Ce(t,"bool",f)),ye.push(()=>Ce(t,"routes",b)),ye.push(()=>Ce(t,"btnColor",I)),ye.push(()=>Ce(t,"btnColorHover",v)),{c(){o=M("li"),ce(t.$$.fragment),this.h()},l(m){o=S(m,"LI",{style:!0});var u=E(o);ue(t.$$.fragment,u),u.forEach(h),this.h()},h(){d(o,"style",s=e[19]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`)},m(m,u){Z(m,o,u),de(t,o,null),a=!0},p(m,u){e=m;const g={};u&128&&(g.href=e[7][e[19]].href),u&128&&(g.content=e[7][e[19]].name),!l&&u&128&&(l=!0,g.bool=e[7][e[19]].isCurrent,Ee(()=>l=!1)),!n&&u&128&&(n=!0,g.routes=e[7],Ee(()=>n=!1)),!r&&u&16&&(r=!0,g.btnColor=e[4],Ee(()=>r=!1)),!i&&u&32&&(i=!0,g.btnColorHover=e[5],Ee(()=>i=!1)),t.$set(g),(!a||u&390&&s!==(s=e[19]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`))&&d(o,"style",s)},i(m){a||(B(t.$$.fragment,m),a=!0)},o(m){q(t.$$.fragment,m),a=!1},d(m){m&&h(o),fe(t)}}}function yt(e){let o,t,l,n;return t=new vo({}),{c(){o=M("li"),ce(t.$$.fragment),this.h()},l(r){o=S(r,"LI",{class:!0});var i=E(o);ue(t.$$.fragment,i),i.forEach(h),this.h()},h(){d(o,"class","px-3 translate-y-1")},m(r,i){Z(r,o,i),de(t,o,null),n=!0},p(r,i){},i(r){n||(B(t.$$.fragment,r),l||he(()=>{l=Le(o,Ht,{duration:600,easing:Wt}),l.start()}),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){r&&h(o),fe(t)}}}function Eo(e){let o,t=e[3],l,n,r,i,s=!e[0],a,f,b=wt(e),I=Object.keys(e[7]).splice(0,5),v=[];for(let u=0;u<I.length;u+=1)v[u]=kt(vt(e,I,u));const k=u=>q(v[u],1,1,()=>{v[u]=null});let m=yt();return{c(){o=M("logo-and-navbar"),b.c(),l=R(),n=M("nav"),r=M("ul");for(let u=0;u<v.length;u+=1)v[u].c();i=R(),m.c(),this.h()},l(u){o=S(u,"LOGO-AND-NAVBAR",{class:!0});var g=E(o);b.l(g),l=U(g),n=S(g,"NAV",{class:!0});var c=E(n);r=S(c,"UL",{class:!0});var D=E(r);for(let w=0;w<v.length;w+=1)v[w].l(D);i=U(D),m.l(D),D.forEach(h),c.forEach(h),g.forEach(h),this.h()},h(){d(r,"class","flex flex-row text-xl items-center"),d(n,"class",a="md:ml-24 md:p-1 p-3 "+e[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"),Ye(o,"class","flex items-center justify-center md:justify-between gap-x-24")},m(u,g){Z(u,o,g),b.m(o,null),p(o,l),p(o,n),p(n,r);for(let c=0;c<v.length;c+=1)v[c].m(r,null);p(r,i),m.m(r,null),f=!0},p(u,[g]){if(g&8&&x(t,t=u[3])?(Se(),q(b,1,1,W),Te(),b=wt(u),b.c(),B(b,1),b.m(o,l)):b.p(u,g),g&438){I=Object.keys(u[7]).splice(0,5);let c;for(c=0;c<I.length;c+=1){const D=vt(u,I,c);v[c]?(v[c].p(D,g),B(v[c],1)):(v[c]=kt(D),v[c].c(),B(v[c],1),v[c].m(r,i))}for(Se(),c=I.length;c<v.length;c+=1)k(c);Te()}g&1&&x(s,s=!u[0])?(Se(),q(m,1,1,W),Te(),m=yt(),m.c(),B(m,1),m.m(r,null)):m.p(u,g),(!f||g&64&&a!==(a="md:ml-24 md:p-1 p-3 "+u[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"))&&d(n,"class",a)},i(u){if(!f){B(b);for(let g=0;g<I.length;g+=1)B(v[g]);B(m),f=!0}},o(u){q(b),v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)q(v[g]);q(m),f=!1},d(u){u&&h(o),b.d(u),Ot(v,u),m.d(u)}}}function Io(e,o,t){let l,n,r,i,s,a,f,b;T(e,qe,y=>t(0,n=y)),T(e,re,y=>t(7,r=y)),T(e,me,y=>t(17,i=y)),T(e,Q,y=>t(18,s=y)),T(e,De,y=>t(1,a=y)),T(e,Ke,y=>t(12,f=y));let I=Co(1,{stiffness:.1,damping:.25});T(e,I,y=>t(8,b=y));let v=0,k,m;function u(){z(Q,s=!1,s),z(me,i=!1,i),Je("/"),t(3,m=!m);for(let y in r)z(re,r[y].isCurrent=!1,r);z(re,r.home.isCurrent=!0,r)}let g="sm:bg-red-300 rounded",c="hover:bg-red-300";function D(y,H){e.$$.not_equal(r[H].isCurrent,y)&&(r[H].isCurrent=y,re.set(r))}function w(y){r=y,re.set(r)}function L(y){g=y,t(4,g)}function A(y){c=y,t(5,c)}return e.$$.update=()=>{e.$$.dirty&4099&&a&&(t(2,v=n?.75:0),I.set(1+.5*Math.sin(f))),e.$$.dirty&2&&(a?z(re,r.login.name="\u{1F680}",r):z(re,r.login.name="Login",r)),e.$$.dirty&1&&t(6,l=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] ${n?"to-[rgb(37,35,91)]":"to-red-100"}`)},[n,a,v,m,g,c,l,r,b,I,k,u,f,D,w,L,A]}class Lo extends ve{constructor(o){super(),we(this,o,Io,Eo,x,{})}}function Mo(e){let o,t,l;return{c(){o=M("div"),t=M("span"),l=te("Need help? Contact thinksolve.io[at]gmail.com"),this.h()},l(n){o=S(n,"DIV",{class:!0});var r=E(o);t=S(r,"SPAN",{class:!0});var i=E(t);l=oe(i,"Need help? Contact thinksolve.io[at]gmail.com"),i.forEach(h),r.forEach(h),this.h()},h(){d(t,"class","my-20 text-xs text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"),d(o,"class","flex justify-center items-center ")},m(n,r){Z(n,o,r),p(o,t),p(t,l)},p:W,i:W,o:W,d(n){n&&h(o)}}}class So extends ve{constructor(o){super(),we(this,o,null,Mo,x,{})}}const{clearTimeout:Ct,document:se}=qt;function Et(e,o,t){const l=e.slice();return l[22]=o[t],l}function To(e){return se.title=e[3][e[22]].title,{c:W,l:W,m:W,d:W}}function Do(e){return se.title=e[3].home.title,{c:W,l:W,m:W,d:W}}function It(e){let o;function t(r,i){if(r[4].routeId=="")return Do;if(r[4].routeId==r[22])return To}let l=t(e),n=l&&l(e);return{c(){n&&n.c(),o=ge()},l(r){n&&n.l(r),o=ge()},m(r,i){n&&n.m(r,i),Z(r,o,i)},p(r,i){l!==(l=t(r))&&(n&&n.d(1),n=l&&l(r),n&&(n.c(),n.m(o.parentNode,o)))},d(r){n&&n.d(r),r&&h(o)}}}function No(e){let o,t;return o=new ho({}),{c(){ce(o.$$.fragment)},l(l){ue(o.$$.fragment,l)},m(l,n){de(o,l,n),t=!0},i(l){t||(B(o.$$.fragment,l),t=!0)},o(l){q(o.$$.fragment,l),t=!1},d(l){fe(o,l)}}}function Oo(e){let o,t;return o=new zt({props:{uniqueId:"broccoli",text:"\u{1F525}",textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"}}),{c(){ce(o.$$.fragment)},l(l){ue(o.$$.fragment,l)},m(l,n){de(o,l,n),t=!0},p:W,i(l){t||(B(o.$$.fragment,l),t=!0)},o(l){q(o.$$.fragment,l),t=!1},d(l){fe(o,l)}}}function Ho(e){let o=!1,t=()=>{o=!1},l,n,r,i,s,a,f,b,I,v,k,m,u,g,c,D,w,L,A,y,H,F,C;he(e[13]),he(e[14]);let $=Object.keys(e[3]),P=[];for(let _=0;_<$.length;_+=1)P[_]=It(Et(e,$,_));function G(_){e[15](_)}let pe={$$slots:{default:[No]},$$scope:{ctx:e}};e[6]!==void 0&&(pe.showModal=e[6]),b=new gt({props:pe}),ye.push(()=>Ce(b,"showModal",G));function Me(_){e[16](_)}let le={bgTint:"bg-[rgba(0,0,0,0.1)]",$$slots:{default:[Oo]},$$scope:{ctx:e}};e[7]!==void 0&&(le.showModal=e[7]),k=new gt({props:le}),ye.push(()=>Ce(k,"showModal",Me)),c=new Lo({});const _e=e[12].default,N=Lt(_e,e,e[17],null);return y=new So({}),{c(){n=M("link"),r=M("link"),i=M("link");for(let _=0;_<P.length;_+=1)P[_].c();s=ge(),a=R(),f=M("main"),ce(b.$$.fragment),v=R(),ce(k.$$.fragment),u=R(),g=M("div"),ce(c.$$.fragment),w=R(),L=M("div"),N&&N.c(),A=R(),ce(y.$$.fragment),this.h()},l(_){const O=Vt('[data-svelte="svelte-y8jogi"]',se.head);n=S(O,"LINK",{rel:!0,href:!0}),r=S(O,"LINK",{rel:!0,href:!0,crossorigin:!0}),i=S(O,"LINK",{href:!0,rel:!0});for(let K=0;K<P.length;K+=1)P[K].l(O);s=ge(),O.forEach(h),a=U(_),f=S(_,"MAIN",{});var V=E(f);ue(b.$$.fragment,V),v=U(V),ue(k.$$.fragment,V),u=U(V),g=S(V,"DIV",{class:!0});var Y=E(g);ue(c.$$.fragment,Y),Y.forEach(h),w=U(V),L=S(V,"DIV",{class:!0});var j=E(L);N&&N.l(j),A=U(j),ue(y.$$.fragment,j),j.forEach(h),V.forEach(h),this.h()},h(){d(n,"rel","preconnect"),d(n,"href","https://fonts.googleapis.com"),d(r,"rel","preconnect"),d(r,"href","https://fonts.gstatic.com"),d(r,"crossorigin",""),d(i,"href","https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"),d(i,"rel","stylesheet"),d(g,"class",D="md:py-4 py-1 md:px-[7%] z-50 fixed "+e[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"),d(L,"class","px-[7%] h-[100vh] pt-32 md:block")},m(_,O){p(se.head,n),p(se.head,r),p(se.head,i);for(let V=0;V<P.length;V+=1)P[V].m(se.head,null);p(se.head,s),Z(_,a,O),Z(_,f,O),de(b,f,null),p(f,v),de(k,f,null),p(f,u),p(f,g),de(c,g,null),p(f,w),p(f,L),N&&N.m(L,null),p(L,A),de(y,L,null),H=!0,F||(C=[J(window,"resize",e[8]),J(window,"contextmenu",Fo),J(window,"popstate",e[9]),J(window,"scroll",()=>{o=!0,Ct(l),l=setTimeout(t,100),e[13]()}),J(window,"resize",e[14])],F=!0)},p(_,[O]){if(O&1&&!o&&(o=!0,Ct(l),scrollTo(window.pageXOffset,_[0]),l=setTimeout(t,100)),O&24){$=Object.keys(_[3]);let j;for(j=0;j<$.length;j+=1){const K=Et(_,$,j);P[j]?P[j].p(K,O):(P[j]=It(K),P[j].c(),P[j].m(s.parentNode,s))}for(;j<P.length;j+=1)P[j].d(1);P.length=$.length}const V={};O&131072&&(V.$$scope={dirty:O,ctx:_}),!I&&O&64&&(I=!0,V.showModal=_[6],Ee(()=>I=!1)),b.$set(V);const Y={};O&131072&&(Y.$$scope={dirty:O,ctx:_}),!m&&O&128&&(m=!0,Y.showModal=_[7],Ee(()=>m=!1)),k.$set(Y),(!H||O&2&&D!==(D="md:py-4 py-1 md:px-[7%] z-50 fixed "+_[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"))&&d(g,"class",D),N&&N.p&&(!H||O&131072)&&Mt(N,_e,_,_[17],H?Tt(_e,_[17],O,null):St(_[17]),null)},i(_){H||(B(b.$$.fragment,_),B(k.$$.fragment,_),B(c.$$.fragment,_),B(N,_),B(y.$$.fragment,_),H=!0)},o(_){q(b.$$.fragment,_),q(k.$$.fragment,_),q(c.$$.fragment,_),q(N,_),q(y.$$.fragment,_),H=!1},d(_){h(n),h(r),h(i),Ot(P,_),h(s),_&&h(a),_&&h(f),fe(b),fe(k),fe(c),N&&N.d(_),fe(y),F=!1,Dt(C)}}}const Fo=e=>e.preventDefault();function Ao(e,o,t){let l,n,r,i,s,a,f,b,I,v,k,m,u;T(e,Ut,C=>t(10,l=C)),T(e,Ke,C=>t(0,n=C)),T(e,Zt,C=>t(11,r=C)),T(e,De,C=>t(18,i=C)),T(e,Ve,C=>t(19,s=C)),T(e,Pe,C=>t(20,a=C)),T(e,ft,C=>t(2,f=C)),T(e,mt,C=>t(21,b=C)),T(e,re,C=>t(3,I=C)),T(e,Ft,C=>t(4,v=C)),T(e,ht,C=>t(5,k=C)),T(e,Q,C=>t(6,m=C)),T(e,me,C=>t(7,u=C));let{$$slots:g={},$$scope:c}=o;function D(){z(mt,b=document.body.scrollHeight-f,b)}function w(){clearTimeout(a),clearInterval(s)}Nt(()=>{console.log("isLoggedIn",i),D()});let L;function A(){Ke.set(n=window.pageYOffset)}function y(){ht.set(k=window.innerWidth),ft.set(f=window.innerHeight)}function H(C){m=C,Q.set(m)}function F(C){u=C,me.set(u)}return e.$$set=C=>{"$$scope"in C&&t(17,c=C.$$scope)},e.$$.update=()=>{e.$$.dirty&3073&&(r||(n==0&&t(1,L="top-0"),n>10&&n<800&&l>0&&t(1,L="top-0 backdrop-blur-3xl "),n>800&&l>10&&t(1,L="-top-20 backdrop-blur-3xl duration-200"),l<-100&&t(1,L="top-0 backdrop-blur-3xl duration-700"))),e.$$.dirty&3073&&r&&(n==0&&t(1,L="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl "),n>10&&n<400&&l>0&&t(1,L="bottom-0 backdrop-blur-3xl "),n>400&&l>10&&t(1,L="-bottom-20 backdrop-blur-3xl duration-200"),l<-30&&t(1,L="bottom-0 backdrop-blur-3xl duration-700"))},[n,L,f,I,v,k,m,u,D,w,l,r,g,A,y,H,F,c]}class Zo extends ve{constructor(o){super(),we(this,o,Ao,Ho,x,{})}}export{Zo as default};