import{S as ye,i as ke,s as x,k as S,q as X,a as A,E as le,l as T,m as E,r as J,h,c as q,F as ne,n as d,p as De,b as P,G as y,H as z,g as he,t as j,A as V,d as me,f as B,I as $,J as ce,C as Qe,K as N,o as Ot,L as R,M as mt,D as Pt,e as se,u as Bt,N as pt,O as jt,P as Vt,Q as Nt,R as Se,T as Te,v as Oe,w as Ne,x as Fe,U as Me,y as He,V as At,W as qt,X as Rt,Y as Ut,Z as zt,_ as Wt,$ as Zt}from"../../chunks/index-bd8a2dbd.js";import{g as Pe,p as Yt}from"../../chunks/navigation-f1bfcff4.js";import{e as pe,s as ve,a as Ft,q as Gt}from"../../chunks/index-d9b16c0d.js";import{n as Q,r as Be,a as je,i as be,b as Ve,d as Kt,l as Xt,c as te,s as Xe,e as Jt,f as Qt,w as gt,g as _t,h as bt}from"../../chunks/store-28576b84.js";import{i as xt,a as fe,s as $t,o as eo,y as to,d as oo,R as lo,G as Ke,b as no,c as so,e as ro}from"../../chunks/firebase-1526a27c.js";import{s as io}from"../../chunks/singletons-8e1fa4c3.js";import{w as ao}from"../../chunks/index-125d1f03.js";function vt(e){let t,o,s,n;return{c(){t=S("input"),this.h()},l(l){t=T(l,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),this.h()},h(){d(t,"class","text-center p-3 mt-3 w-full"),d(t,"id","emailField"),d(t,"type","email"),d(t,"placeholder","email")},m(l,r){P(l,t,r),mt(t,e[1]),s||(n=[z(t,"keyup",function(){Pt(e[4](e[1]))&&e[4](e[1]).apply(this,arguments)}),z(t,"input",e[8])],s=!0)},p(l,r){e=l,r&2&&t.value!==e[1]&&mt(t,e[1])},i(l){l&&(o||$(()=>{o=ce(t,ve,{duration:500,easing:pe}),o.start()}))},o:V,d(l){l&&h(t),s=!1,Qe(n)}}}function co(e){let t,o,s,n,l,r,a,f,p,b,L,g,C,m,c,i,v,O,M,k,_,I,w,F,u,D,H,Y,ue,re,xe=e[2],we,ge,Ae,W,de,qe,Re,_e,Ue,ze,ie,We,Ze,ae,Ye,Ce,Ee,Ge,$e,Z=vt(e);return{c(){t=S("div"),o=S("p"),s=X("Login"),n=A(),l=S("div"),r=S("div"),a=S("ul"),f=S("li"),p=le("svg"),b=le("path"),L=A(),g=S("li"),C=X("Sign-in with Google"),i=A(),v=S("p"),O=X("or"),M=A(),k=S("div"),_=S("ul"),I=S("li"),w=le("svg"),F=le("path"),u=A(),D=S("li"),H=X("Sign-in with Link"),re=A(),Z.c(),we=A(),ge=S("span"),Ae=A(),W=S("div"),de=S("p"),qe=X("Welcome User"),Re=A(),_e=S("p"),Ue=X("Redirecting to your page in"),ze=A(),ie=S("p"),We=X("\u230A\u03C0\u230B"),Ze=A(),ae=S("button"),Ye=X("Logout"),this.h()},l(G){t=T(G,"DIV",{class:!0,style:!0});var U=E(t);o=T(U,"P",{class:!0});var et=E(o);s=J(et,"Login"),et.forEach(h),n=q(U),l=T(U,"DIV",{class:!0});var K=E(l);r=T(K,"DIV",{class:!0});var tt=E(r);a=T(tt,"UL",{class:!0});var Le=E(a);f=T(Le,"LI",{});var ot=E(f);p=ne(ot,"svg",{height:!0,width:!0,viewBox:!0});var lt=E(p);b=ne(lt,"path",{fill:!0,d:!0}),E(b).forEach(h),lt.forEach(h),ot.forEach(h),L=q(Le),g=T(Le,"LI",{});var nt=E(g);C=J(nt,"Sign-in with Google"),nt.forEach(h),Le.forEach(h),tt.forEach(h),i=q(K),v=T(K,"P",{class:!0});var st=E(v);O=J(st,"or"),st.forEach(h),M=q(K),k=T(K,"DIV",{id:!0,class:!0});var rt=E(k);_=T(rt,"UL",{class:!0});var Ie=E(_);I=T(Ie,"LI",{});var it=E(I);w=ne(it,"svg",{height:!0,width:!0,viewBox:!0});var at=E(w);F=ne(at,"path",{fill:!0,d:!0}),E(F).forEach(h),at.forEach(h),it.forEach(h),u=q(Ie),D=T(Ie,"LI",{});var ct=E(D);H=J(ct,"Sign-in with Link"),ct.forEach(h),Ie.forEach(h),rt.forEach(h),re=q(K),Z.l(K),we=q(K),ge=T(K,"SPAN",{id:!0}),E(ge).forEach(h),K.forEach(h),Ae=q(U),W=T(U,"DIV",{class:!0,style:!0});var ee=E(W);de=T(ee,"P",{id:!0});var ut=E(de);qe=J(ut,"Welcome User"),ut.forEach(h),Re=q(ee),_e=T(ee,"P",{});var dt=E(_e);Ue=J(dt,"Redirecting to your page in"),dt.forEach(h),ze=q(ee),ie=T(ee,"P",{style:!0,id:!0});var ft=E(ie);We=J(ft,"\u230A\u03C0\u230B"),ft.forEach(h),Ze=q(ee),ae=T(ee,"BUTTON",{id:!0});var ht=E(ae);Ye=J(ht,"Logout"),ht.forEach(h),ee.forEach(h),U.forEach(h),this.h()},h(){d(o,"class","text-5xl pb-10"),d(b,"fill","white"),d(b,"d",`M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z`),d(p,"height","24"),d(p,"width","24"),d(p,"viewBox","0 0 210 210"),d(a,"class","flex justify-center items-center gap-5"),d(r,"class",m="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[0],"group-hover:bg-opacity-90")+" text-xl text-white"),d(v,"class","py-5"),d(F,"fill","white"),d(F,"d",`M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z`),d(w,"height","24"),d(w,"width","24"),d(w,"viewBox","0 0 485 485"),d(_,"class","flex justify-center items-center gap-5"),d(k,"id","passwordlessLoginBtn"),d(k,"class",Y="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[0],"group-hover:bg-opacity-80")+" text-xl text-white"),d(ge,"id","emailStatusMessage"),d(l,"class","logInDiv"),d(de,"id","loginWelcomeText"),De(ie,"font-size","30px"),d(ie,"id","redirectMessage"),d(ae,"id","logoutBtn"),d(W,"class","logOutDiv"),De(W,"display","none"),d(t,"class",Ce="hover:scale-[102%] font-Poppins shadow-md "+(e[0]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-md mx-auto w-1/3 min-w-fit p-10 m-1 text-center duration-300 group"),d(t,"style",Ee=`background:${e[3]}`)},m(G,U){P(G,t,U),y(t,o),y(o,s),y(t,n),y(t,l),y(l,r),y(r,a),y(a,f),y(f,p),y(p,b),y(a,L),y(a,g),y(g,C),y(l,i),y(l,v),y(v,O),y(l,M),y(l,k),y(k,_),y(_,I),y(I,w),y(w,F),y(_,u),y(_,D),y(D,H),y(l,re),Z.m(l,null),y(l,we),y(l,ge),y(t,Ae),y(t,W),y(W,de),y(de,qe),y(W,Re),y(W,_e),y(_e,Ue),y(W,ze),y(W,ie),y(ie,We),y(W,Ze),y(W,ae),y(ae,Ye),Ge||($e=[z(r,"click",e[5]),z(k,"click",e[7]),z(ae,"click",e[6])],Ge=!0)},p(G,[U]){e=G,U&1&&m!==(m="bg-[#4285f4] hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[0],"group-hover:bg-opacity-90")+" text-xl text-white")&&d(r,"class",m),U&1&&Y!==(Y="bg-red-400 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 "+(e[0],"group-hover:bg-opacity-80")+" text-xl text-white")&&d(k,"class",Y),U&4&&x(xe,xe=e[2])?(he(),j(Z,1,1,V),me(),Z=vt(e),Z.c(),B(Z,1),Z.m(l,we)):Z.p(e,U),U&1&&Ce!==(Ce="hover:scale-[102%] font-Poppins shadow-md "+(e[0]?"hover:shadow-xl ":"hover:shadow-lg")+" rounded-md mx-auto w-1/3 min-w-fit p-10 m-1 text-center duration-300 group")&&d(t,"class",Ce),U&8&&Ee!==(Ee=`background:${e[3]}`)&&d(t,"style",Ee)},i(G){c||$(()=>{c=ce(r,ve,{duration:600,easing:pe}),c.start()}),ue||$(()=>{ue=ce(k,ve,{duration:600,easing:pe}),ue.start()}),B(Z)},o(G){j(Z)},d(G){G&&h(t),Z.d(G),Ge=!1,Qe($e)}}}function yt(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function uo(e,t,o){let s,n,l,r,a,f,p;N(e,Q,k=>o(10,l=k)),N(e,Be,k=>o(11,r=k)),N(e,je,k=>o(12,a=k)),N(e,be,k=>o(13,f=k)),N(e,Ve,k=>o(0,p=k));let b="",L;Ot(()=>{const k=document.querySelector(".logInDiv"),_=document.querySelector(".logOutDiv"),I=document.querySelector("#loginWelcomeText"),w=document.querySelector("#passwordlessLoginBtn"),F=document.querySelector("#emailField");if(w.addEventListener("click",v),F.addEventListener("keydown",v),xt(fe,window.location.href)){let u=window.localStorage.getItem("emailForSignIn");u||(u=window.prompt("Please provide your email for confirmation")),$t(fe,u,window.location.href).then(()=>window.localStorage.removeItem("emailForSignIn")).catch(D=>console.log(D))}eo(fe,u=>{u?(R(be,f=!0,f),console.log("User is signed in!"),i(u.email),k.style.display="none",_.style.display="block",I.innerText=u.displayName?`Hey ${u.displayName}!`:`Hey ${u.email}!`):(R(be,f=!1,f),R(Q,l=!1,l),console.log("User is NOT signed in"),k.style.display="block",_.style.display="none")})});function g(k){n=yt(k),k==""?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):n?n&&(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a"):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}function C(){const k=new Ke;no(fe,k).then(_=>{Ke.credentialFromResult(_).accessToken,_.user}).catch(_=>{_.code,_.message,_.customData.email,Ke.credentialFromError(_)})}function m(){let k=b;yt(k)&&(console.log("loginViaPasswordlessEmail",k),emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email \u{1F680}
                  </div>
                  `,so(fe,k,{url:"https://thinksolve.io/login",handleCodeInApp:!0}).then(()=>{window.localStorage.setItem("emailForSignIn",k),console.log("success with sendSignInLinkToEmail!")}).catch(I=>{const w=I.code,F=I.message;console.log("errorCode",w),console.log("errorMessage",F)}))}function c(){ro(fe).then(()=>{console.log("logged out"),Pe("/")}).catch(k=>{console.log(k),console.log("FAILED firebase signOut function")})}async function i(k){const _=to(oo,"email");(await lo(_)).forEach(w=>{if(k===w.id){let F=3e3,u=parseInt(F/1e3),D="/";console.log(`A match! ${w.id} => ${D}`),R(je,a=setInterval(()=>{u>0&&(u+=-1,document.getElementById("redirectMessage").innerHTML=` ${u}`)},1e3),a),R(Be,r=setTimeout(()=>{Pe(D),R(Q,l=!1,l)},F),r)}})}function v(k){(k.type=="click"||k.key=="Enter")&&n&&(m(),o(1,b=""),emailField.style.opacity="0.5",emailField.style.pointerEvents="none",passwordlessLoginBtn.style.opacity="0.5",passwordlessLoginBtn.style.pointerEvents="none")}const O=()=>{b==""&&o(2,L=!L)};function M(){b=this.value,o(1,b)}return e.$$.update=()=>{e.$$.dirty&1&&o(3,s=p?Kt:Xt)},n=!1,[p,b,L,s,g,C,c,O,M]}class fo extends ye{constructor(t){super(),ke(this,t,uo,co,x,{})}}function ho(e){let t,o;return{c(){t=le("svg"),o=le("path"),this.h()},l(s){t=ne(s,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,style:!0,"data-metatip":!0});var n=E(t);o=ne(n,"path",{d:!0}),E(o).forEach(h),n.forEach(h),this.h()},h(){d(o,"d","M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"),d(t,"aria-label","Moon"),d(t,"id","darkIcon"),d(t,"height","24"),d(t,"width","24"),De(t,"transform","scale(1)"),d(t,"data-metatip","true")},m(s,n){P(s,t,n),y(t,o)},d(s){s&&h(t)}}}function mo(e){let t,o;return{c(){t=le("svg"),o=le("path"),this.h()},l(s){t=ne(s,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,viewBox:!0,style:!0});var n=E(t);o=ne(n,"path",{fill:!0,d:!0}),E(o).forEach(h),n.forEach(h),this.h()},h(){d(o,"fill","rgb(247,247,247)"),d(o,"d","M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"),d(t,"aria-label","Sun"),d(t,"id","lightIcon"),d(t,"height","24"),d(t,"width","24"),d(t,"viewBox","0 0 182 182"),De(t,"transform","scale(1)")},m(s,n){P(s,t,n),y(t,o)},d(s){s&&h(t)}}}function kt(e){let t,o,s,n;function l(f,p){return f[0]?mo:ho}let r=l(e),a=r(e);return{c(){t=S("button"),a.c()},l(f){t=T(f,"BUTTON",{});var p=E(t);a.l(p),p.forEach(h)},m(f,p){P(f,t,p),a.m(t,null),s||(n=z(t,"click",e[1]),s=!0)},p(f,p){e=f,r!==(r=l(e))&&(a.d(1),a=r(e),a&&(a.c(),a.m(t,null)))},i(f){o||$(()=>{o=ce(t,ve,{duration:1e3,easing:pe}),o.start()})},o:V,d(f){f&&h(t),a.d(),s=!1,n()}}}function po(e){let t=e[0],o,s=kt(e);return{c(){s.c(),o=se()},l(n){s.l(n),o=se()},m(n,l){s.m(n,l),P(n,o,l)},p(n,[l]){l&1&&x(t,t=n[0])?(he(),j(s,1,1,V),me(),s=kt(n),s.c(),B(s,1),s.m(o.parentNode,o)):s.p(n,l)},i(n){B(s)},o(n){j(s)},d(n){n&&h(o),s.d(n)}}}function go(e,t,o){let s;N(e,Ve,l=>o(0,s=l));function n(){window.document.body.classList.toggle("dark-mode"),R(Ve,s=!s,s)}return[s,n]}class _o extends ye{constructor(t){super(),ke(this,t,go,po,x,{})}}const bo=()=>{const e=io,t={page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated};return Object.defineProperties(t,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},enumerable:!1},session:{get(){return vo(),{}},enumerable:!1}}),t},Ht={subscribe(e){return bo().page.subscribe(e)}};function vo(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function wt(e){let t,o,s,n,l,r;return{c(){t=S("button"),o=X(e[2]),this.h()},l(a){t=T(a,"BUTTON",{class:!0});var f=E(t);o=J(f,e[2]),f.forEach(h),this.h()},h(){d(t,"class",s=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:px-3 duration-300 hover:shadow-lg`)},m(a,f){P(a,t,f),y(t,o),l||(r=z(t,"click",e[12]),l=!0)},p(a,f){e=a,f&4&&Bt(o,e[2]),f&25&&s!==(s=(e[0]&&`${e[3]} border-b-1 rounded px-3 py-1`)+` flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent ${e[4]} hover:rounded hover:py-1 hover:px-3 duration-300 hover:shadow-lg`)&&d(t,"class",s)},i(a){n||$(()=>{n=ce(t,Ft,{duration:800,easing:pe}),n.start()})},o:V,d(a){a&&h(t),l=!1,r()}}}function yo(e){let t=e[5],o,s=wt(e);return{c(){s.c(),o=se()},l(n){s.l(n),o=se()},m(n,l){s.m(n,l),P(n,o,l)},p(n,[l]){l&32&&x(t,t=n[5])?(he(),j(s,1,1,V),me(),s=wt(n),s.c(),B(s,1),s.m(o.parentNode,o)):s.p(n,l)},i(n){B(s)},o(n){j(s)},d(n){n&&h(o),s.d(n)}}}function ko(e,t,o){let s,n,l,r;N(e,Ht,i=>o(11,s=i)),N(e,Q,i=>o(6,n=i)),N(e,Be,i=>o(7,l=i)),N(e,je,i=>o(8,r=i));let{href:a,content:f,bool:p,btnColor:b,btnColorHover:L,routes:g}=t,C;function m(){for(let i in g)o(10,g[i].isCurrent=!1,g);o(0,p=!p),o(5,C=!C)}const c=()=>{a=="/login"?R(Q,n=!0,n):(R(Q,n=!1,n),m(),clearTimeout(l),clearInterval(r),Yt(a),Pe(a),a=="/screenshare"&&setTimeout(()=>{location.reload()},100))};return e.$$set=i=>{"href"in i&&o(1,a=i.href),"content"in i&&o(2,f=i.content),"bool"in i&&o(0,p=i.bool),"btnColor"in i&&o(3,b=i.btnColor),"btnColorHover"in i&&o(4,L=i.btnColorHover),"routes"in i&&o(10,g=i.routes)},e.$$.update=()=>{if(e.$$.dirty&3072)for(let i in g)o(10,g[i].isCurrent=g[i].href===s.url.pathname,g)},[p,a,f,b,L,C,n,l,r,m,g,s,c]}class wo extends ye{constructor(t){super(),ke(this,t,ko,yo,x,{href:1,content:2,bool:0,btnColor:3,btnColorHover:4,routes:10})}}function Ct(e){return Object.prototype.toString.call(e)==="[object Date]"}function Je(e,t,o,s){if(typeof o=="number"||Ct(o)){const n=s-o,l=(o-t)/(e.dt||1/60),r=e.opts.stiffness*n,a=e.opts.damping*l,f=(r-a)*e.inv_mass,p=(l+f)*e.dt;return Math.abs(p)<e.opts.precision&&Math.abs(n)<e.opts.precision?s:(e.settled=!1,Ct(o)?new Date(o.getTime()+p):o+p)}else{if(Array.isArray(o))return o.map((n,l)=>Je(e,t[l],o[l],s[l]));if(typeof o=="object"){const n={};for(const l in o)n[l]=Je(e,t[l],o[l],s[l]);return n}else throw new Error(`Cannot spring ${typeof o} values`)}}function Co(e,t={}){const o=ao(e),{stiffness:s=.15,damping:n=.8,precision:l=.01}=t;let r,a,f,p=e,b=e,L=1,g=0,C=!1;function m(i,v={}){b=i;const O=f={};if(e==null||v.hard||c.stiffness>=1&&c.damping>=1)return C=!0,r=pt(),p=i,o.set(e=b),Promise.resolve();if(v.soft){const M=v.soft===!0?.5:+v.soft;g=1/(M*60),L=0}return a||(r=pt(),C=!1,a=jt(M=>{if(C)return C=!1,a=null,!1;L=Math.min(L+g,1);const k={inv_mass:L,opts:c,settled:!0,dt:(M-r)*60/1e3},_=Je(k,p,e,b);return r=M,p=e,o.set(e=_),k.settled&&(a=null),!k.settled})),new Promise(M=>{a.promise.then(()=>{O===f&&M()})})}const c={set:m,update:(i,v)=>m(i(b,e),v),subscribe:o.subscribe,stiffness:s,damping:n,precision:l};return c}function Et(e,t,o){const s=e.slice();return s[18]=t[o],s[19]=t,s[20]=o,s}function Lt(e){let t,o,s,n,l;return{c(){t=S("div"),o=X("THINKSOLVE"),this.h()},l(r){t=T(r,"DIV",{class:!0});var a=E(t);o=J(a,"THINKSOLVE"),a.forEach(h),this.h()},h(){d(t,"class","md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent")},m(r,a){P(r,t,a),y(t,o),n||(l=z(t,"click",e[11]),n=!0)},p(r,a){e=r},i(r){s||$(()=>{s=ce(t,ve,{duration:1200,easing:pe}),s.start()})},o:V,d(r){r&&h(t),n=!1,l()}}}function It(e){let t,o,s,n,l,r,a,f;function p(m){e[13](m,e[18])}function b(m){e[14](m)}function L(m){e[15](m)}function g(m){e[16](m)}let C={href:e[7][e[18]].href,content:e[7][e[18]].name};return e[7][e[18]].isCurrent!==void 0&&(C.bool=e[7][e[18]].isCurrent),e[7]!==void 0&&(C.routes=e[7]),e[4]!==void 0&&(C.btnColor=e[4]),e[5]!==void 0&&(C.btnColorHover=e[5]),o=new wo({props:C}),Se.push(()=>Te(o,"bool",p)),Se.push(()=>Te(o,"routes",b)),Se.push(()=>Te(o,"btnColor",L)),Se.push(()=>Te(o,"btnColorHover",g)),{c(){t=S("li"),Oe(o.$$.fragment),this.h()},l(m){t=T(m,"LI",{style:!0});var c=E(t);Ne(o.$$.fragment,c),c.forEach(h),this.h()},h(){d(t,"style",a=e[18]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`)},m(m,c){P(m,t,c),Fe(o,t,null),f=!0},p(m,c){e=m;const i={};c&128&&(i.href=e[7][e[18]].href),c&128&&(i.content=e[7][e[18]].name),!s&&c&128&&(s=!0,i.bool=e[7][e[18]].isCurrent,Me(()=>s=!1)),!n&&c&128&&(n=!0,i.routes=e[7],Me(()=>n=!1)),!l&&c&16&&(l=!0,i.btnColor=e[4],Me(()=>l=!1)),!r&&c&32&&(r=!0,i.btnColorHover=e[5],Me(()=>r=!1)),o.$set(i),(!f||c&390&&a!==(a=e[18]=="login"&&e[1]&&`transform:scale(${e[8]}); filter:hue-rotate(${e[2]}turn)`))&&d(t,"style",a)},i(m){f||(B(o.$$.fragment,m),f=!0)},o(m){j(o.$$.fragment,m),f=!1},d(m){m&&h(t),He(o)}}}function St(e){let t,o,s,n;return o=new _o({}),{c(){t=S("li"),Oe(o.$$.fragment),this.h()},l(l){t=T(l,"LI",{class:!0});var r=E(t);Ne(o.$$.fragment,r),r.forEach(h),this.h()},h(){d(t,"class","px-3 translate-y-1")},m(l,r){P(l,t,r),Fe(o,t,null),n=!0},p(l,r){},i(l){n||(B(o.$$.fragment,l),s||$(()=>{s=ce(t,Ft,{duration:600,easing:Gt}),s.start()}),n=!0)},o(l){j(o.$$.fragment,l),n=!1},d(l){l&&h(t),He(o)}}}function Eo(e){let t,o=e[3],s,n,l,r,a=!e[0],f,p,b=Lt(e),L=Object.keys(e[7]).splice(0,5),g=[];for(let c=0;c<L.length;c+=1)g[c]=It(Et(e,L,c));const C=c=>j(g[c],1,1,()=>{g[c]=null});let m=St();return{c(){t=S("logo-and-navbar"),b.c(),s=A(),n=S("nav"),l=S("ul");for(let c=0;c<g.length;c+=1)g[c].c();r=A(),m.c(),this.h()},l(c){t=T(c,"LOGO-AND-NAVBAR",{class:!0});var i=E(t);b.l(i),s=q(i),n=T(i,"NAV",{class:!0});var v=E(n);l=T(v,"UL",{class:!0});var O=E(l);for(let M=0;M<g.length;M+=1)g[M].l(O);r=q(O),m.l(O),O.forEach(h),v.forEach(h),i.forEach(h),this.h()},h(){d(l,"class","flex flex-row text-xl items-center"),d(n,"class",f="md:ml-24 md:p-1 p-2 "+e[6]+" rounded-xl hideScrollBar overflow-auto"),Vt(t,"class","flex items-center justify-center md:justify-between gap-x-24")},m(c,i){P(c,t,i),b.m(t,null),y(t,s),y(t,n),y(n,l);for(let v=0;v<g.length;v+=1)g[v].m(l,null);y(l,r),m.m(l,null),p=!0},p(c,[i]){if(i&8&&x(o,o=c[3])?(he(),j(b,1,1,V),me(),b=Lt(c),b.c(),B(b,1),b.m(t,s)):b.p(c,i),i&438){L=Object.keys(c[7]).splice(0,5);let v;for(v=0;v<L.length;v+=1){const O=Et(c,L,v);g[v]?(g[v].p(O,i),B(g[v],1)):(g[v]=It(O),g[v].c(),B(g[v],1),g[v].m(l,r))}for(he(),v=L.length;v<g.length;v+=1)C(v);me()}i&1&&x(a,a=!c[0])?(he(),j(m,1,1,V),me(),m=St(),m.c(),B(m,1),m.m(l,null)):m.p(c,i),(!p||i&64&&f!==(f="md:ml-24 md:p-1 p-2 "+c[6]+" rounded-xl hideScrollBar overflow-auto"))&&d(n,"class",f)},i(c){if(!p){B(b);for(let i=0;i<L.length;i+=1)B(g[i]);B(m),p=!0}},o(c){j(b),g=g.filter(Boolean);for(let i=0;i<g.length;i+=1)j(g[i]);j(m),p=!1},d(c){c&&h(t),b.d(c),Nt(g,c),m.d(c)}}}function Lo(e,t,o){let s,n,l,r,a,f,p;N(e,Ve,_=>o(0,n=_)),N(e,te,_=>o(7,l=_)),N(e,Q,_=>o(17,r=_)),N(e,be,_=>o(1,a=_)),N(e,Xe,_=>o(12,f=_));let b=Co(1,{stiffness:.1,damping:.25});N(e,b,_=>o(8,p=_));let L=0,g,C;function m(){R(Q,r=!1,r),Pe("/"),o(3,C=!C);for(key in l)R(te,l[key].isCurrent=!1,l);R(te,l.home.isCurrent=!0,l)}let c="sm:bg-red-300 rounded",i="hover:bg-red-300";function v(_,I){e.$$.not_equal(l[I].isCurrent,_)&&(l[I].isCurrent=_,te.set(l))}function O(_){l=_,te.set(l)}function M(_){c=_,o(4,c)}function k(_){i=_,o(5,i)}return e.$$.update=()=>{e.$$.dirty&4099&&a&&(o(2,L=n?.75:0),b.set(1+.5*Math.sin(f))),e.$$.dirty&2&&(a?R(te,l.login.name="\u{1F680}",l):R(te,l.login.name="Login",l)),e.$$.dirty&1&&o(6,s=n?"bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-[rgb(37,35,91)]":"bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-100")},[n,a,L,C,c,i,s,l,p,b,g,m,f,v,O,M,k]}class Io extends ye{constructor(t){super(),ke(this,t,Lo,Eo,x,{})}}const{clearTimeout:Tt,document:oe}=Zt;function Mt(e,t,o){const s=e.slice();return s[20]=t[o],s}function So(e){return oe.title=e[3][e[20]].title,{c:V,l:V,m:V,d:V}}function To(e){return oe.title=e[3].home.title,{c:V,l:V,m:V,d:V}}function Dt(e){let t;function o(l,r){if(l[4].routeId=="")return To;if(l[4].routeId==l[20])return So}let s=o(e),n=s&&s(e);return{c(){n&&n.c(),t=se()},l(l){n&&n.l(l),t=se()},m(l,r){n&&n.m(l,r),P(l,t,r)},p(l,r){s!==(s=o(l))&&(n&&n.d(1),n=s&&s(l),n&&(n.c(),n.m(t.parentNode,t)))},d(l){n&&n.d(l),l&&h(t)}}}function Mo(e){let t=!1,o=()=>{t=!1},s,n,l,r,a,f,p,b,L,g,C,m,c,i,v,O,M,k;$(e[13]),$(e[14]);let _=Object.keys(e[3]),I=[];for(let u=0;u<_.length;u+=1)I[u]=Dt(Mt(e,_,u));b=new fo({}),m=new Io({});const w=e[12].default,F=At(w,e,e[11],null);return{c(){n=S("link"),l=S("link"),r=S("link");for(let u=0;u<I.length;u+=1)I[u].c();a=se(),f=A(),p=S("div"),Oe(b.$$.fragment),g=A(),C=S("div"),Oe(m.$$.fragment),i=A(),v=S("div"),F&&F.c(),this.h()},l(u){const D=qt('[data-svelte="svelte-y8jogi"]',oe.head);n=T(D,"LINK",{rel:!0,href:!0}),l=T(D,"LINK",{rel:!0,href:!0,crossorigin:!0}),r=T(D,"LINK",{href:!0,rel:!0});for(let re=0;re<I.length;re+=1)I[re].l(D);a=se(),D.forEach(h),f=q(u),p=T(u,"DIV",{class:!0});var H=E(p);Ne(b.$$.fragment,H),H.forEach(h),g=q(u),C=T(u,"DIV",{class:!0});var Y=E(C);Ne(m.$$.fragment,Y),Y.forEach(h),i=q(u),v=T(u,"DIV",{class:!0});var ue=E(v);F&&F.l(ue),ue.forEach(h),this.h()},h(){d(n,"rel","preconnect"),d(n,"href","https://fonts.googleapis.com"),d(l,"rel","preconnect"),d(l,"href","https://fonts.gstatic.com"),d(l,"crossorigin",""),d(r,"href","https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"),d(r,"rel","stylesheet"),d(p,"class",L="z-[50] md:py-4 py-1 md:px-[7%] "+(e[6]?"bg-[rgba(0,0,0,0.4)]":"hidden")+" fixed w-full h-full flex justify-center items-center"),d(C,"class",c="md:py-4 py-1 md:px-[7%] z-50 fixed "+e[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"),d(v,"class","px-[7%] h-[100vh] pt-32 md:block")},m(u,D){y(oe.head,n),y(oe.head,l),y(oe.head,r);for(let H=0;H<I.length;H+=1)I[H].m(oe.head,null);y(oe.head,a),P(u,f,D),P(u,p,D),Fe(b,p,null),P(u,g,D),P(u,C,D),Fe(m,C,null),P(u,i,D),P(u,v,D),F&&F.m(v,null),O=!0,M||(k=[z(window,"resize",e[7]),z(window,"contextmenu",Do),z(window,"popstate",e[8]),z(window,"scroll",()=>{t=!0,Tt(s),s=setTimeout(o,100),e[13]()}),z(window,"resize",e[14]),z(p,"click",Rt(e[15]))],M=!0)},p(u,[D]){if(D&1&&!t&&(t=!0,Tt(s),scrollTo(window.pageXOffset,u[0]),s=setTimeout(o,100)),D&24){_=Object.keys(u[3]);let H;for(H=0;H<_.length;H+=1){const Y=Mt(u,_,H);I[H]?I[H].p(Y,D):(I[H]=Dt(Y),I[H].c(),I[H].m(a.parentNode,a))}for(;H<I.length;H+=1)I[H].d(1);I.length=_.length}(!O||D&64&&L!==(L="z-[50] md:py-4 py-1 md:px-[7%] "+(u[6]?"bg-[rgba(0,0,0,0.4)]":"hidden")+" fixed w-full h-full flex justify-center items-center"))&&d(p,"class",L),(!O||D&2&&c!==(c="md:py-4 py-1 md:px-[7%] z-50 fixed "+u[1]+" ease-in-out overflow-x-auto overflow-y-hidden w-full"))&&d(C,"class",c),F&&F.p&&(!O||D&2048)&&Ut(F,w,u,u[11],O?Wt(w,u[11],D,null):zt(u[11]),null)},i(u){O||(B(b.$$.fragment,u),B(m.$$.fragment,u),B(F,u),O=!0)},o(u){j(b.$$.fragment,u),j(m.$$.fragment,u),j(F,u),O=!1},d(u){h(n),h(l),h(r),Nt(I,u),h(a),u&&h(f),u&&h(p),He(b),u&&h(g),u&&h(C),He(m),u&&h(i),u&&h(v),F&&F.d(u),M=!1,Qe(k)}}}const Do=e=>e.preventDefault();function Oo(e,t,o){let s,n,l,r,a,f,p,b,L,g,C,m;N(e,Jt,w=>o(9,s=w)),N(e,Xe,w=>o(0,n=w)),N(e,Qt,w=>o(10,l=w)),N(e,be,w=>o(16,r=w)),N(e,je,w=>o(17,a=w)),N(e,Be,w=>o(18,f=w)),N(e,gt,w=>o(2,p=w)),N(e,_t,w=>o(19,b=w)),N(e,te,w=>o(3,L=w)),N(e,Ht,w=>o(4,g=w)),N(e,bt,w=>o(5,C=w)),N(e,Q,w=>o(6,m=w));let{$$slots:c={},$$scope:i}=t;function v(){R(_t,b=document.body.scrollHeight-p,b)}function O(){clearTimeout(f),clearInterval(a)}Ot(()=>{console.log("isLoggedIn",r),v()});let M;function k(){Xe.set(n=window.pageYOffset)}function _(){bt.set(C=window.innerWidth),gt.set(p=window.innerHeight)}const I=()=>{R(Q,m=!1,m)};return e.$$set=w=>{"$$scope"in w&&o(11,i=w.$$scope)},e.$$.update=()=>{e.$$.dirty&1537&&(l||(n==0&&o(1,M="top-0"),n>10&&n<800&&s>0&&o(1,M="top-0 backdrop-blur-3xl "),n>800&&s>10&&o(1,M="-top-20 backdrop-blur-3xl duration-200"),s<-100&&o(1,M="top-0 backdrop-blur-3xl duration-700"))),e.$$.dirty&1537&&l&&(n==0&&o(1,M="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl "),n>10&&n<400&&s>0&&o(1,M="bottom-0 backdrop-blur-3xl "),n>400&&s>10&&o(1,M="-bottom-20 backdrop-blur-3xl duration-200"),s<-130&&o(1,M="bottom-0 backdrop-blur-3xl duration-700"))},[n,M,p,L,g,C,m,v,O,s,l,i,c,k,_,I]}class Ao extends ye{constructor(t){super(),ke(this,t,Oo,Mo,x,{})}}export{Ao as default};
