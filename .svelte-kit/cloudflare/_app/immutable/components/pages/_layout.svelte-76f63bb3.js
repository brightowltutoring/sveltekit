import{S as te,i as oe,s as R,F as vt,k as I,l as L,m as E,h as p,G as De,b as q,H as Y,I as Mt,J as wt,K as kt,L as yt,f as N,t as O,M as pe,N as _e,n as f,O as v,B as S,w as K,a as U,q as ie,x as X,c as G,r as ae,p as Ve,y as J,P as nt,E as St,Q as be,R as Te,z as Q,D as Ze,T as D,o as Ct,U as W,e as ve,g as Le,d as Me,u as Tt,V as lt,W as Nt,X as Et,Y as Ce,Z as Ee,_ as Ie,$ as Dt,a0 as Ot}from"../../chunks/index-30e2a2cf.js";import{D as Ht}from"../../chunks/Dropzone-3e56846d.js";import{g as Ye,p as Ft,a as Bt}from"../../chunks/navigation-a1962370.js";import{e as Oe,s as ze,a as It,q as At}from"../../chunks/index-36fbeedd.js";import{n as ee,i as je,a as He,e as Pt,b as ge,r as de,s as Ge,c as jt,l as Vt,w as rt,d as st,f as it}from"../../chunks/store-d1c055f5.js";import{G as Ue,s as zt,a as Wt,b as qt,c as Se,i as Ut,d as Gt,o as Rt,x as Zt,I as Yt,e as xt}from"../../chunks/firebase-800dbd3c.js";import{s as $t}from"../../chunks/singletons-b8c6e68d.js";import{w as Kt}from"../../chunks/index-99e25be1.js";function Xt(t){let e,o,n,l,r;const s=t[3].default,a=vt(s,t,t[2],null);return{c(){e=I("modal-container"),a&&a.c(),this.h()},l(c){e=L(c,"MODAL-CONTAINER",{class:!0});var d=E(e);a&&a.l(d),d.forEach(p),this.h()},h(){De(e,"class",o="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(t[0]?`${t[1]}`:"hidden"))},m(c,d){q(c,e,d),a&&a.m(e,null),n=!0,l||(r=Y(e,"click",Mt(t[4])),l=!0)},p(c,[d]){a&&a.p&&(!n||d&4)&&wt(a,s,c,c[2],n?yt(s,c[2],d,null):kt(c[2]),null),(!n||d&3&&o!==(o="fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] "+(c[0]?`${c[1]}`:"hidden")))&&De(e,"class",o)},i(c){n||(N(a,c),n=!0)},o(c){O(a,c),n=!1},d(c){c&&p(e),a&&a.d(c),l=!1,r()}}}function Jt(t,e,o){let{$$slots:n={},$$scope:l}=e,{showModal:r=!1}=e,{bgTint:s="bg-[rgba(0,0,0,0.4)]"}=e;const a=()=>{o(0,r=!1)};return t.$$set=c=>{"showModal"in c&&o(0,r=c.showModal),"bgTint"in c&&o(1,s=c.bgTint),"$$scope"in c&&o(2,l=c.$$scope)},[r,s,l,n,a]}class at extends te{constructor(e){super(),oe(this,e,Jt,Xt,R,{showModal:0,bgTint:1})}}async function ct(){const t=new Ue;zt(Se,t).then(e=>{Ue.credentialFromResult(e).accessToken,e.user}).catch(e=>{e.code,e.message,e.customData.email,Ue.credentialFromError(e)})}function Qt(){Wt(Se).then(()=>{console.log("logged out"),goto("/")}).catch(t=>{console.log(t),console.log("FAILED firebase signOut function")})}function eo(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}function to(t){qt(Se,t,{url:"https://thinksolve.io/",handleCodeInApp:!0}).then(()=>{window.localStorage.setItem("emailForSignIn",t),console.log("success with sendSignInLinkToEmail!")}).catch(e=>{const o=e.code,n=e.message;console.log("errorCode",o),console.log("errorMessage",n)})}function oo(t){let e,o;return{c(){e=pe("svg"),o=pe("path"),this.h()},l(n){e=_e(n,"svg",{height:!0,width:!0,viewBox:!0});var l=E(e);o=_e(l,"path",{fill:!0,d:!0}),E(o).forEach(p),l.forEach(p),this.h()},h(){f(o,"fill","white"),f(o,"d",`M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z`),f(e,"height","24"),f(e,"width","24"),f(e,"viewBox","0 0 210 210")},m(n,l){q(n,e,l),v(e,o)},p:S,i:S,o:S,d(n){n&&p(e)}}}class no extends te{constructor(e){super(),oe(this,e,null,oo,R,{})}}function lo(t){let e,o;return{c(){e=pe("svg"),o=pe("path"),this.h()},l(n){e=_e(n,"svg",{height:!0,width:!0,viewBox:!0});var l=E(e);o=_e(l,"path",{fill:!0,d:!0}),E(o).forEach(p),l.forEach(p),this.h()},h(){f(o,"fill","white"),f(o,"d",`M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z`),f(e,"height","24"),f(e,"width","24"),f(e,"viewBox","0 0 485 485")},m(n,l){q(n,e,l),v(e,o)},p:S,i:S,o:S,d(n){n&&p(e)}}}class ro extends te{constructor(e){super(),oe(this,e,null,lo,R,{})}}function so(t){let e,o,n,l,r,s,a,c,d,k,_,m,y,b,i,g,h,F,C,B,z,u,j,M,ce,ne,A,Ne,Z,fe,ke,we,P,w,T,V,le,H,re,Fe,Be,ue,We,xe;return r=new no({}),h=new ro({}),{c(){e=I("card"),o=I("div"),n=I("div"),l=I("signin-button"),K(r.$$.fragment),s=U(),a=I("span"),c=ie("Sign-in with Google"),_=U(),m=I("p"),y=ie("or"),b=U(),i=I("div"),g=I("signin-button"),K(h.$$.fragment),F=U(),C=I("span"),B=ie("Get Magic Link"),j=U(),M=I("input"),ne=U(),A=I("span"),Ne=U(),Z=I("div"),fe=I("p"),ke=ie("Welcome User"),we=U(),P=I("div"),w=ie(`Redirecting to your page in
      `),T=I("div"),V=ie("\u230A\u03C0\u230B"),le=U(),H=I("button"),re=ie("Logout"),this.h()},l(x){e=L(x,"CARD",{class:!0,style:!0});var $=E(e);o=L($,"DIV",{class:!0});var se=E(o);n=L(se,"DIV",{class:!0});var $e=E(n);l=L($e,"SIGNIN-BUTTON",{class:!0});var Ae=E(l);X(r.$$.fragment,Ae),s=G(Ae),a=L(Ae,"SPAN",{});var Ke=E(a);c=ae(Ke,"Sign-in with Google"),Ke.forEach(p),Ae.forEach(p),$e.forEach(p),_=G(se),m=L(se,"P",{class:!0});var Xe=E(m);y=ae(Xe,"or"),Xe.forEach(p),b=G(se),i=L(se,"DIV",{id:!0,class:!0});var Je=E(i);g=L(Je,"SIGNIN-BUTTON",{class:!0});var Pe=E(g);X(h.$$.fragment,Pe),F=G(Pe),C=L(Pe,"SPAN",{});var Qe=E(C);B=ae(Qe,"Get Magic Link"),Qe.forEach(p),Pe.forEach(p),Je.forEach(p),j=G(se),M=L(se,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ne=G(se),A=L(se,"SPAN",{id:!0}),E(A).forEach(p),se.forEach(p),Ne=G($),Z=L($,"DIV",{class:!0,style:!0});var ye=E(Z);fe=L(ye,"P",{id:!0});var et=E(fe);ke=ae(et,"Welcome User"),et.forEach(p),we=G(ye),P=L(ye,"DIV",{id:!0});var qe=E(P);w=ae(qe,`Redirecting to your page in
      `),T=L(qe,"DIV",{style:!0,id:!0});var tt=E(T);V=ae(tt,"\u230A\u03C0\u230B"),tt.forEach(p),qe.forEach(p),le=G(ye),H=L(ye,"BUTTON",{id:!0});var ot=E(H);re=ae(ot,"Logout"),ot.forEach(p),ye.forEach(p),$.forEach(p),this.h()},h(){De(l,"class","flex justify-center items-center gap-5"),f(n,"class",d="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(t[2],"group-hover:bg-opacity-90")+" text-xl text-white"),f(m,"class","py-5"),De(g,"class","flex justify-center items-center gap-5"),f(i,"id","passwordlessLoginBtn"),f(i,"class",z="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(t[2],"group-hover:bg-opacity-80")+" text-xl text-white"),f(M,"class",ce="text-center p-3 mt-3 w-full "+t[1]),f(M,"id","emailField"),f(M,"type","email"),f(M,"placeholder","email"),f(A,"id","emailStatusMessage"),f(o,"class","logInDiv p-5"),f(fe,"id","loginWelcomeText"),Ve(T,"font-size","30px"),f(T,"id","timeLeft"),f(P,"id","redirectMessage"),f(H,"id","logoutBtn"),f(Z,"class","logOutDiv"),Ve(Z,"display","none"),f(e,"class",Fe="hover:scale-[102%] font-Poppins shadow-md "+(t[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group"),f(e,"style",Be=`background:${t[3]}`)},m(x,$){q(x,e,$),v(e,o),v(o,n),v(n,l),J(r,l,null),v(l,s),v(l,a),v(a,c),v(o,_),v(o,m),v(m,y),v(o,b),v(o,i),v(i,g),J(h,g,null),v(g,F),v(g,C),v(C,B),v(o,j),v(o,M),nt(M,t[0]),v(o,ne),v(o,A),v(e,Ne),v(e,Z),v(Z,fe),v(fe,ke),v(Z,we),v(Z,P),v(P,w),v(P,T),v(T,V),v(Z,le),v(Z,H),v(H,re),ue=!0,We||(xe=[Y(n,"click",ct),Y(n,"keydown",ct),Y(M,"keyup",function(){St(t[4](t[0]))&&t[4](t[0]).apply(this,arguments)}),Y(M,"input",t[11]),Y(H,"click",Qt)],We=!0)},p(x,[$]){t=x,(!ue||$&4&&d!==(d="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(t[2],"group-hover:bg-opacity-90")+" text-xl text-white"))&&f(n,"class",d),(!ue||$&4&&z!==(z="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(t[2],"group-hover:bg-opacity-80")+" text-xl text-white"))&&f(i,"class",z),(!ue||$&2&&ce!==(ce="text-center p-3 mt-3 w-full "+t[1]))&&f(M,"class",ce),$&1&&M.value!==t[0]&&nt(M,t[0]),(!ue||$&4&&Fe!==(Fe="hover:scale-[102%] font-Poppins shadow-md "+(t[2]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-2xl hover:rounded-3xl mx-auto min-w-fit w-full sm:max-w-lg p-10 m-1 text-center duration-300 group"))&&f(e,"class",Fe),(!ue||$&8&&Be!==(Be=`background:${t[3]}`))&&f(e,"style",Be)},i(x){ue||(N(r.$$.fragment,x),k||be(()=>{k=Te(n,ze,{duration:600,easing:Oe}),k.start()}),N(h.$$.fragment,x),u||be(()=>{u=Te(i,ze,{duration:600,easing:Oe}),u.start()}),ue=!0)},o(x){O(r.$$.fragment,x),O(h.$$.fragment,x),ue=!1},d(x){x&&p(e),Q(r),Q(h),We=!1,Ze(xe)}}}function io(t,e,o){let n,l,r,s,a;D(t,ee,C=>o(10,l=C)),D(t,je,C=>o(13,r=C)),D(t,He,C=>o(2,s=C)),D(t,Pt,C=>o(3,a=C));let c="",d=!1,k,_=!1,m,y,b;Ct(()=>{const C=document.querySelector(".logInDiv"),B=document.querySelector(".logOutDiv"),z=document.querySelector("#loginWelcomeText"),u=document.querySelector("#passwordlessLoginBtn"),j=document.querySelector("#emailField");if(u.addEventListener("click",h),j.addEventListener("keydown",h),Ut(Se,window.location.href)){let M=window.localStorage.getItem("emailForSignIn");M||(M=window.prompt("Please provide your email for confirmation")),Gt(Se,M,window.location.href).then(()=>{window.localStorage.removeItem("emailForSignIn"),W(ee,l=!0,l)}).catch(ce=>console.log(ce))}Rt(Se,M=>{M?(W(je,r=!0,r),o(7,m=M.email),console.log("User is signed in! YEET"),C.style.display="none",B.style.display="block",z.innerText=M.displayName?`Hey ${M.displayName}!`:`Hey ${M.email}!`):(W(je,r=!1,r),W(ee,l=!1,l),o(7,m=""),console.log("User is NOT signed in"),C.style.display="block",B.style.display="none")})});function i(C){d=eo(C),C==""?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):d?d&&(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a"):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}async function g(C){(await Zt(Yt(xt,"email"))).forEach(z=>{if(C===z.id){let u=3e3,j=parseInt(u/1e3),M="/";console.log(`A match! ${z.id} => ${M}`),o(9,b=setInterval(()=>{j>0&&(j+=-1,document.getElementById("timeLeft").innerHTML=` ${j}`)},1e3)),o(8,y=setTimeout(()=>{W(ee,l=!1,l),document.getElementById("timeLeft").innerHTML=3,Ye(M)},u))}})}function h(C){(C.type=="click"||C.key=="Enter")&&c==""&&(o(5,k=!0),setTimeout(()=>o(5,k=!k),100)),(C.type=="click"||C.key=="Enter")&&d&&(to(c),o(6,_=!0),o(0,c=""),emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email \u{1F680}
                  </div>
                  `,emailField.style.opacity="0.5",emailField.style.pointerEvents="none",passwordlessLoginBtn.style.opacity="0.5",passwordlessLoginBtn.style.pointerEvents="none")}function F(){c=this.value,o(0,c)}return t.$$.update=()=>{t.$$.dirty&96&&o(1,n=!_&&k&&"animate-ping"),t.$$.dirty&1792&&l==!1&&(clearInterval(b),clearTimeout(y)),t.$$.dirty&1152&&l&&g(m)},[c,n,s,a,i,k,_,m,y,b,l,F]}class ao extends te{constructor(e){super(),oe(this,e,io,so,R,{})}}function co(t){let e,o;return{c(){e=pe("svg"),o=pe("path"),this.h()},l(n){e=_e(n,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,viewBox:!0,style:!0});var l=E(e);o=_e(l,"path",{fill:!0,d:!0}),E(o).forEach(p),l.forEach(p),this.h()},h(){f(o,"fill","rgb(247,247,247)"),f(o,"d","M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"),f(e,"aria-label","Sun"),f(e,"id","lightIcon"),f(e,"height","24"),f(e,"width","24"),f(e,"viewBox","0 0 182 182"),Ve(e,"transform","scale(1)")},m(n,l){q(n,e,l),v(e,o)},p:S,i:S,o:S,d(n){n&&p(e)}}}class uo extends te{constructor(e){super(),oe(this,e,null,co,R,{})}}function fo(t){let e,o;return{c(){e=pe("svg"),o=pe("path"),this.h()},l(n){e=_e(n,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,style:!0,"data-metatip":!0});var l=E(e);o=_e(l,"path",{d:!0}),E(o).forEach(p),l.forEach(p),this.h()},h(){f(o,"d","M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"),f(e,"aria-label","Moon"),f(e,"id","darkIcon"),f(e,"height","24"),f(e,"width","24"),Ve(e,"transform","scale(1)"),f(e,"data-metatip","true")},m(n,l){q(n,e,l),v(e,o)},p:S,i:S,o:S,d(n){n&&p(e)}}}class mo extends te{constructor(e){super(),oe(this,e,null,fo,R,{})}}function ho(t){let e,o;return e=new mo({}),{c(){K(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,l){J(e,n,l),o=!0},i(n){o||(N(e.$$.fragment,n),o=!0)},o(n){O(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function go(t){let e,o;return e=new uo({}),{c(){K(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,l){J(e,n,l),o=!0},i(n){o||(N(e.$$.fragment,n),o=!0)},o(n){O(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function ut(t){let e,o,n,l,r,s,a;const c=[go,ho],d=[];function k(_,m){return _[0]?0:1}return o=k(t),n=d[o]=c[o](t),{c(){e=I("button"),n.c()},l(_){e=L(_,"BUTTON",{});var m=E(e);n.l(m),m.forEach(p)},m(_,m){q(_,e,m),d[o].m(e,null),r=!0,s||(a=Y(e,"click",t[1]),s=!0)},p(_,m){t=_;let y=o;o=k(t),o!==y&&(Le(),O(d[y],1,1,()=>{d[y]=null}),Me(),n=d[o],n||(n=d[o]=c[o](t),n.c()),N(n,1),n.m(e,null))},i(_){r||(N(n),l||be(()=>{l=Te(e,ze,{duration:1e3,easing:Oe}),l.start()}),r=!0)},o(_){O(n),r=!1},d(_){_&&p(e),d[o].d(),s=!1,a()}}}function po(t){let e=t[0],o,n,l=ut(t);return{c(){l.c(),o=ve()},l(r){l.l(r),o=ve()},m(r,s){l.m(r,s),q(r,o,s),n=!0},p(r,[s]){s&1&&R(e,e=r[0])?(Le(),O(l,1,1,S),Me(),l=ut(r),l.c(),N(l,1),l.m(o.parentNode,o)):l.p(r,s)},i(r){n||(N(l),n=!0)},o(r){O(l),n=!1},d(r){r&&p(o),l.d(r)}}}function _o(t,e,o){let n;D(t,He,r=>o(0,n=r));function l(){window.document.body.classList.toggle("dark-mode"),W(He,n=!n,n)}return[n,l]}class bo extends te{constructor(e){super(),oe(this,e,_o,po,R,{})}}const vo=()=>{const t=$t,e={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return wo(),{}},enumerable:!1}}),e},Lt={subscribe(t){return vo().page.subscribe(t)}};function wo(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function ft(t){let e,o,n,l,r,s;return{c(){e=I("button"),o=ie(t[2]),this.h()},l(a){e=L(a,"BUTTON",{class:!0});var c=E(e);o=ae(c,t[2]),c.forEach(p),this.h()},h(){f(e,"class",n=(t[0]&&`${t[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${t[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)},m(a,c){q(a,e,c),v(e,o),r||(s=Y(e,"click",t[11]),r=!0)},p(a,c){t=a,c&4&&Tt(o,t[2]),c&25&&n!==(n=(t[0]&&`${t[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${t[4]} hover:rounded hover:py-1 hover:p-3 duration-300 hover:shadow-lg`)&&f(e,"class",n)},i(a){l||be(()=>{l=Te(e,It,{duration:800,easing:Oe}),l.start()})},o:S,d(a){a&&p(e),r=!1,s()}}}function ko(t){let e=t[5],o,n=ft(t);return{c(){n.c(),o=ve()},l(l){n.l(l),o=ve()},m(l,r){n.m(l,r),q(l,o,r)},p(l,[r]){r&32&&R(e,e=l[5])?(Le(),O(n,1,1,S),Me(),n=ft(l),n.c(),N(n,1),n.m(o.parentNode,o)):n.p(l,r)},i(l){N(n)},o(l){O(n)},d(l){l&&p(o),n.d(l)}}}function yo(t,e,o){let n,l,r;D(t,Lt,i=>o(10,n=i)),D(t,ge,i=>o(6,l=i)),D(t,ee,i=>o(7,r=i));let{href:s,content:a,bool:c,btnColor:d,btnColorHover:k,routes:_}=e,m;function y(){for(let i in _)o(9,_[i].isCurrent=!1,_);o(0,c=!c),o(5,m=!m)}const b=()=>{if(s=="/homework"){W(ge,l=!0,l),W(ee,r=!1,r);return}if(s=="/login"){W(ee,r=!0,r),W(ge,l=!1,l);return}W(ee,r=!1,r),W(ge,l=!1,l),y(),s=="/screenshare"&&setTimeout(()=>{location.reload()},100),Ft(s),Ye(s)};return t.$$set=i=>{"href"in i&&o(1,s=i.href),"content"in i&&o(2,a=i.content),"bool"in i&&o(0,c=i.bool),"btnColor"in i&&o(3,d=i.btnColor),"btnColorHover"in i&&o(4,k=i.btnColorHover),"routes"in i&&o(9,_=i.routes)},t.$$.update=()=>{if(t.$$.dirty&1536)for(let i in _)o(9,_[i].isCurrent=_[i].href===n.url.pathname,_)},[c,s,a,d,k,m,l,r,y,_,n,b]}class Co extends te{constructor(e){super(),oe(this,e,yo,ko,R,{href:1,content:2,bool:0,btnColor:3,btnColorHover:4,routes:9})}}function dt(t){return Object.prototype.toString.call(t)==="[object Date]"}function Re(t,e,o,n){if(typeof o=="number"||dt(o)){const l=n-o,r=(o-e)/(t.dt||1/60),s=t.opts.stiffness*l,a=t.opts.damping*r,c=(s-a)*t.inv_mass,d=(r+c)*t.dt;return Math.abs(d)<t.opts.precision&&Math.abs(l)<t.opts.precision?n:(t.settled=!1,dt(o)?new Date(o.getTime()+d):o+d)}else{if(Array.isArray(o))return o.map((l,r)=>Re(t,e[r],o[r],n[r]));if(typeof o=="object"){const l={};for(const r in o)l[r]=Re(t,e[r],o[r],n[r]);return l}else throw new Error(`Cannot spring ${typeof o} values`)}}function Eo(t,e={}){const o=Kt(t),{stiffness:n=.15,damping:l=.8,precision:r=.01}=e;let s,a,c,d=t,k=t,_=1,m=0,y=!1;function b(g,h={}){k=g;const F=c={};return t==null||h.hard||i.stiffness>=1&&i.damping>=1?(y=!0,s=lt(),d=g,o.set(t=k),Promise.resolve()):(h.soft&&(m=1/((h.soft===!0?.5:+h.soft)*60),_=0),a||(s=lt(),y=!1,a=Nt(C=>{if(y)return y=!1,a=null,!1;_=Math.min(_+m,1);const B={inv_mass:_,opts:i,settled:!0,dt:(C-s)*60/1e3},z=Re(B,d,t,k);return s=C,d=t,o.set(t=z),B.settled&&(a=null),!B.settled})),new Promise(C=>{a.promise.then(()=>{F===c&&C()})}))}const i={set:b,update:(g,h)=>b(g(k,t),h),subscribe:o.subscribe,stiffness:n,damping:l,precision:r};return i}function mt(t,e,o){const n=t.slice();return n[19]=e[o],n[20]=e,n[21]=o,n}function ht(t){let e,o,n,l,r;return{c(){e=I("div"),o=ie("THINKSOLVE"),this.h()},l(s){e=L(s,"DIV",{class:!0});var a=E(e);o=ae(a,"THINKSOLVE"),a.forEach(p),this.h()},h(){f(e,"class","md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent")},m(s,a){q(s,e,a),v(e,o),l||(r=[Y(e,"keydown",t[11]),Y(e,"click",t[11])],l=!0)},p(s,a){t=s},i(s){n||be(()=>{n=Te(e,ze,{duration:1200,easing:Oe}),n.start()})},o:S,d(s){s&&p(e),l=!1,Ze(r)}}}function gt(t){let e,o,n,l,r,s,a,c;function d(b){t[13](b,t[19])}function k(b){t[14](b)}function _(b){t[15](b)}function m(b){t[16](b)}let y={href:t[7][t[19]].href,content:t[7][t[19]].name};return t[7][t[19]].isCurrent!==void 0&&(y.bool=t[7][t[19]].isCurrent),t[7]!==void 0&&(y.routes=t[7]),t[4]!==void 0&&(y.btnColor=t[4]),t[5]!==void 0&&(y.btnColorHover=t[5]),o=new Co({props:y}),Ce.push(()=>Ee(o,"bool",d)),Ce.push(()=>Ee(o,"routes",k)),Ce.push(()=>Ee(o,"btnColor",_)),Ce.push(()=>Ee(o,"btnColorHover",m)),{c(){e=I("li"),K(o.$$.fragment),this.h()},l(b){e=L(b,"LI",{style:!0});var i=E(e);X(o.$$.fragment,i),i.forEach(p),this.h()},h(){f(e,"style",a=t[19]=="login"&&t[1]&&`transform:scale(${t[8]}); filter:hue-rotate(${t[2]}turn)`)},m(b,i){q(b,e,i),J(o,e,null),c=!0},p(b,i){t=b;const g={};i&128&&(g.href=t[7][t[19]].href),i&128&&(g.content=t[7][t[19]].name),!n&&i&128&&(n=!0,g.bool=t[7][t[19]].isCurrent,Ie(()=>n=!1)),!l&&i&128&&(l=!0,g.routes=t[7],Ie(()=>l=!1)),!r&&i&16&&(r=!0,g.btnColor=t[4],Ie(()=>r=!1)),!s&&i&32&&(s=!0,g.btnColorHover=t[5],Ie(()=>s=!1)),o.$set(g),(!c||i&390&&a!==(a=t[19]=="login"&&t[1]&&`transform:scale(${t[8]}); filter:hue-rotate(${t[2]}turn)`))&&f(e,"style",a)},i(b){c||(N(o.$$.fragment,b),c=!0)},o(b){O(o.$$.fragment,b),c=!1},d(b){b&&p(e),Q(o)}}}function pt(t){let e,o,n,l;return o=new bo({}),{c(){e=I("li"),K(o.$$.fragment),this.h()},l(r){e=L(r,"LI",{class:!0});var s=E(e);X(o.$$.fragment,s),s.forEach(p),this.h()},h(){f(e,"class","px-3 translate-y-1")},m(r,s){q(r,e,s),J(o,e,null),l=!0},p(r,s){},i(r){l||(N(o.$$.fragment,r),n||be(()=>{n=Te(e,It,{duration:600,easing:At}),n.start()}),l=!0)},o(r){O(o.$$.fragment,r),l=!1},d(r){r&&p(e),Q(o)}}}function Io(t){let e,o=t[3],n,l,r,s,a=!t[0],c,d,k=ht(t),_=Object.keys(t[7]).slice(0,5),m=[];for(let i=0;i<_.length;i+=1)m[i]=gt(mt(t,_,i));const y=i=>O(m[i],1,1,()=>{m[i]=null});let b=pt();return{c(){e=I("logo-and-navbar"),k.c(),n=U(),l=I("nav"),r=I("ul");for(let i=0;i<m.length;i+=1)m[i].c();s=U(),b.c(),this.h()},l(i){e=L(i,"LOGO-AND-NAVBAR",{class:!0});var g=E(e);k.l(g),n=G(g),l=L(g,"NAV",{class:!0});var h=E(l);r=L(h,"UL",{class:!0});var F=E(r);for(let C=0;C<m.length;C+=1)m[C].l(F);s=G(F),b.l(F),F.forEach(p),h.forEach(p),g.forEach(p),this.h()},h(){f(r,"class","flex flex-row text-xl items-center"),f(l,"class",c="md:ml-24 md:p-1 p-3 "+t[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"),De(e,"class","flex items-center justify-center md:justify-between gap-x-24")},m(i,g){q(i,e,g),k.m(e,null),v(e,n),v(e,l),v(l,r);for(let h=0;h<m.length;h+=1)m[h].m(r,null);v(r,s),b.m(r,null),d=!0},p(i,[g]){if(g&8&&R(o,o=i[3])?(Le(),O(k,1,1,S),Me(),k=ht(i),k.c(),N(k,1),k.m(e,n)):k.p(i,g),g&438){_=Object.keys(i[7]).slice(0,5);let h;for(h=0;h<_.length;h+=1){const F=mt(i,_,h);m[h]?(m[h].p(F,g),N(m[h],1)):(m[h]=gt(F),m[h].c(),N(m[h],1),m[h].m(r,s))}for(Le(),h=_.length;h<m.length;h+=1)y(h);Me()}g&1&&R(a,a=!i[0])?(Le(),O(b,1,1,S),Me(),b=pt(),b.c(),N(b,1),b.m(r,null)):b.p(i,g),(!d||g&64&&c!==(c="md:ml-24 md:p-1 p-3 "+i[6]+" rounded-md md:rounded-xl hideScrollBar overflow-auto"))&&f(l,"class",c)},i(i){if(!d){N(k);for(let g=0;g<_.length;g+=1)N(m[g]);N(b),d=!0}},o(i){O(k),m=m.filter(Boolean);for(let g=0;g<m.length;g+=1)O(m[g]);O(b),d=!1},d(i){i&&p(e),k.d(i),Et(m,i),b.d(i)}}}function Lo(t,e,o){let n,l,r,s,a,c,d,k;D(t,He,u=>o(0,l=u)),D(t,de,u=>o(7,r=u)),D(t,ge,u=>o(17,s=u)),D(t,ee,u=>o(18,a=u)),D(t,je,u=>o(1,c=u)),D(t,Ge,u=>o(12,d=u));let _=Eo(1,{stiffness:.1,damping:.25});D(t,_,u=>o(8,k=u));let m=0,y,b;function i(){W(ee,a=!1,a),W(ge,s=!1,s),Ye("/"),o(3,b=!b);for(let u in r)W(de,r[u].isCurrent=!1,r);W(de,r.home.isCurrent=!0,r)}let g="sm:bg-red-300 rounded",h="hover:bg-red-300";function F(u,j){t.$$.not_equal(r[j].isCurrent,u)&&(r[j].isCurrent=u,de.set(r))}function C(u){r=u,de.set(r)}function B(u){g=u,o(4,g)}function z(u){h=u,o(5,h)}return t.$$.update=()=>{t.$$.dirty&4099&&c&&(o(2,m=l?.75:0),_.set(1+.5*Math.sin(d))),t.$$.dirty&2&&(c?W(de,r.login.name="\u{1F680}",r):W(de,r.login.name="Login",r)),t.$$.dirty&1&&o(6,n=`bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] ${l?"to-[rgb(37,35,91)]":"to-red-100"}`)},[l,c,m,b,g,h,n,r,k,_,y,i,d,F,C,B,z]}class Mo extends te{constructor(e){super(),oe(this,e,Lo,Io,R,{})}}function So(t){let e,o,n;return{c(){e=I("div"),o=I("span"),n=ie("Need help? Contact thinksolve.io[at]gmail.com"),this.h()},l(l){e=L(l,"DIV",{class:!0});var r=E(e);o=L(r,"SPAN",{class:!0});var s=E(o);n=ae(s,"Need help? Contact thinksolve.io[at]gmail.com"),s.forEach(p),r.forEach(p),this.h()},h(){f(o,"class","my-20 text-xs text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"),f(e,"class","flex justify-center items-center ")},m(l,r){q(l,e,r),v(e,o),v(o,n)},p:S,i:S,o:S,d(l){l&&p(e)}}}class To extends te{constructor(e){super(),oe(this,e,null,So,R,{})}}const{document:me,window:he}=Ot;function _t(t,e,o){const n=t.slice();return n[19]=e[o],n}function No(t){return me.title=t[3][t[19]].title,{c:S,l:S,m:S,d:S}}function Do(t){return me.title=t[3].home.title,{c:S,l:S,m:S,d:S}}function bt(t){let e,o,n;function l(a,c){if(c&16&&(e=null),c&24&&(o=null),e==null&&(e=a[4].routeId.slice(1)==""),e)return Do;if(o==null&&(o=a[4].routeId.slice(1)==a[19]),o)return No}let r=l(t,-1),s=r&&r(t);return{c(){s&&s.c(),n=ve()},l(a){s&&s.l(a),n=ve()},m(a,c){s&&s.m(a,c),q(a,n,c)},p(a,c){r!==(r=l(a,c))&&(s&&s.d(1),s=r&&r(a),s&&(s.c(),s.m(n.parentNode,n)))},d(a){s&&s.d(a),a&&p(n)}}}function Oo(t){let e,o;return e=new ao({}),{c(){K(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,l){J(e,n,l),o=!0},i(n){o||(N(e.$$.fragment,n),o=!0)},o(n){O(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Ho(t){let e,o;return e=new Ht({props:{uniqueId:"broccoli",text:"\u{1F525}",textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"}}),{c(){K(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,l){J(e,n,l),o=!0},p:S,i(n){o||(N(e.$$.fragment,n),o=!0)},o(n){O(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function Fo(t){let e=!1,o=()=>{e=!1},n,l,r,s,a,c,d,k,_,m,y,b,i,g,h,F,C,B,z,u,j,M,ce;be(t[12]),be(t[13]);let ne=Object.keys(t[3]),A=[];for(let w=0;w<ne.length;w+=1)A[w]=bt(_t(t,ne,w));function Ne(w){t[14](w)}let Z={$$slots:{default:[Oo]},$$scope:{ctx:t}};t[6]!==void 0&&(Z.showModal=t[6]),k=new at({props:Z}),Ce.push(()=>Ee(k,"showModal",Ne));function fe(w){t[15](w)}let ke={bgTint:"bg-[rgba(0,0,0,0.1)]",$$slots:{default:[Ho]},$$scope:{ctx:t}};t[7]!==void 0&&(ke.showModal=t[7]),y=new at({props:ke}),Ce.push(()=>Ee(y,"showModal",fe)),h=new Mo({});const we=t[11].default,P=vt(we,t,t[16],null);return u=new To({}),{c(){l=I("link"),r=I("link"),s=I("link");for(let w=0;w<A.length;w+=1)A[w].c();a=ve(),c=U(),d=I("main"),K(k.$$.fragment),m=U(),K(y.$$.fragment),i=U(),g=I("div"),K(h.$$.fragment),C=U(),B=I("div"),P&&P.c(),z=U(),K(u.$$.fragment),this.h()},l(w){const T=Dt("svelte-mdpg60",me.head);l=L(T,"LINK",{rel:!0,href:!0}),r=L(T,"LINK",{rel:!0,href:!0,crossorigin:!0}),s=L(T,"LINK",{href:!0,rel:!0});for(let re=0;re<A.length;re+=1)A[re].l(T);a=ve(),T.forEach(p),c=G(w),d=L(w,"MAIN",{});var V=E(d);X(k.$$.fragment,V),m=G(V),X(y.$$.fragment,V),i=G(V),g=L(V,"DIV",{class:!0});var le=E(g);X(h.$$.fragment,le),le.forEach(p),C=G(V),B=L(V,"DIV",{class:!0});var H=E(B);P&&P.l(H),z=G(H),X(u.$$.fragment,H),H.forEach(p),V.forEach(p),this.h()},h(){f(l,"rel","preconnect"),f(l,"href","https://fonts.googleapis.com"),f(r,"rel","preconnect"),f(r,"href","https://fonts.gstatic.com"),f(r,"crossorigin",""),f(s,"href","https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"),f(s,"rel","stylesheet"),f(g,"class",F="md:py-4 py-1 md:px-[7%] z-50 fixed "+t[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"),f(B,"class","px-[7%] pt-32 md:block")},m(w,T){v(me.head,l),v(me.head,r),v(me.head,s);for(let V=0;V<A.length;V+=1)A[V].m(me.head,null);v(me.head,a),q(w,c,T),q(w,d,T),J(k,d,null),v(d,m),J(y,d,null),v(d,i),v(d,g),J(h,g,null),v(d,C),v(d,B),P&&P.m(B,null),v(B,z),J(u,B,null),j=!0,M||(ce=[Y(he,"resize",t[8]),Y(he,"contextmenu",Bo),Y(he,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(o,100),t[12]()}),Y(he,"resize",t[13])],M=!0)},p(w,[T]){if(T&1&&!e&&(e=!0,clearTimeout(n),scrollTo(he.pageXOffset,w[0]),n=setTimeout(o,100)),T&24){ne=Object.keys(w[3]);let H;for(H=0;H<ne.length;H+=1){const re=_t(w,ne,H);A[H]?A[H].p(re,T):(A[H]=bt(re),A[H].c(),A[H].m(a.parentNode,a))}for(;H<A.length;H+=1)A[H].d(1);A.length=ne.length}const V={};T&65536&&(V.$$scope={dirty:T,ctx:w}),!_&&T&64&&(_=!0,V.showModal=w[6],Ie(()=>_=!1)),k.$set(V);const le={};T&65536&&(le.$$scope={dirty:T,ctx:w}),!b&&T&128&&(b=!0,le.showModal=w[7],Ie(()=>b=!1)),y.$set(le),(!j||T&2&&F!==(F="md:py-4 py-1 md:px-[7%] z-50 fixed "+w[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"))&&f(g,"class",F),P&&P.p&&(!j||T&65536)&&wt(P,we,w,w[16],j?yt(we,w[16],T,null):kt(w[16]),null)},i(w){j||(N(k.$$.fragment,w),N(y.$$.fragment,w),N(h.$$.fragment,w),N(P,w),N(u.$$.fragment,w),j=!0)},o(w){O(k.$$.fragment,w),O(y.$$.fragment,w),O(h.$$.fragment,w),O(P,w),O(u.$$.fragment,w),j=!1},d(w){p(l),p(r),p(s),Et(A,w),p(a),w&&p(c),w&&p(d),Q(k),Q(y),Q(h),P&&P.d(w),Q(u),M=!1,Ze(ce)}}}const Bo=t=>t.preventDefault();function Ao(t,e,o){let n,l,r,s,a,c,d,k,_,m,y;D(t,jt,u=>o(9,n=u)),D(t,Ge,u=>o(0,l=u)),D(t,Vt,u=>o(10,r=u)),D(t,rt,u=>o(2,s=u)),D(t,st,u=>o(17,a=u)),D(t,He,u=>o(18,c=u)),D(t,de,u=>o(3,d=u)),D(t,Lt,u=>o(4,k=u)),D(t,it,u=>o(5,_=u)),D(t,ee,u=>o(6,m=u)),D(t,ge,u=>o(7,y=u));let{$$slots:b={},$$scope:i}=e;Bt(()=>{window.localStorage.setItem("isDarkModeLS",c)});function g(){W(st,a=document.body.scrollHeight-s,a)}Ct(()=>{g()});let h;function F(){Ge.set(l=he.pageYOffset)}function C(){it.set(_=he.innerWidth),rt.set(s=he.innerHeight)}function B(u){m=u,ee.set(m)}function z(u){y=u,ge.set(y)}return t.$$set=u=>{"$$scope"in u&&o(16,i=u.$$scope)},t.$$.update=()=>{t.$$.dirty&1537&&(r||(l==0&&o(1,h="top-0"),l>10&&l<800&&n>0&&o(1,h="top-0 backdrop-blur-3xl "),l>800&&n>10&&o(1,h="-top-20 backdrop-blur-3xl duration-200"),n<-100&&o(1,h="top-0 backdrop-blur-3xl duration-700"))),t.$$.dirty&1537&&r&&(l==0&&o(1,h="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl "),l>10&&l<400&&n>0&&o(1,h="bottom-0 backdrop-blur-3xl "),l>400&&n>10&&o(1,h="-bottom-20 backdrop-blur-3xl duration-200"),n<-30&&o(1,h="bottom-0 backdrop-blur-3xl duration-700"))},[l,h,s,d,k,_,m,y,g,n,r,b,F,C,B,z,i]}class Ro extends te{constructor(e){super(),oe(this,e,Ao,Fo,R,{})}}export{Ro as default};