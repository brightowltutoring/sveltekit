import{S as Se,i as Ie,s as be,k as c,a as h,q as M,l as d,m as _,h as p,c as f,r as W,n as o,Z as Le,p as u,b as we,F as i,G as j,t as ue,d as Fe,f as ge,C as Ee,E as me,o as Te,_ as pe,D as Be,I as De,J as Oe,A as ke,g as Re,K as he}from"../../../chunks/index-2a0f0a83.js";import{r as fe,b as ye,e as Ae,f as Ne}from"../../../chunks/store-344cbbba.js";import{i as Pe,s as Ue,o as Me,a as C,G as le,b as We,c as Ce,g as ve,y as He,R as Ge,d as qe,e as ze}from"../../../chunks/firebase-476cb71c.js";import"../../../chunks/index-d2891264.js";import"../../../chunks/singletons-254dc986.js";function _e(n){let s,l,E,k;return{c(){s=c("input"),this.h()},l(e){s=d(e,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),this.h()},h(){o(s,"id","emailField"),o(s,"type","email"),o(s,"placeholder","email"),o(s,"class","svelte-m7g9u3")},m(e,b){we(e,s,b),pe(s,n[0]),E||(k=[j(s,"input",n[6]),j(s,"input",function(){Be(n[2](n[0]))&&n[2](n[0]).apply(this,arguments)})],E=!0)},p(e,b){n=e,b&1&&s.value!==n[0]&&pe(s,n[0])},i(e){e&&(l||De(()=>{l=Oe(s,Ne,{duration:500,easing:Ae}),l.start()}))},o:ke,d(e){e&&p(s),E=!1,Ee(k)}}}function Ve(n){let s,l,E,k,e,b,H,G,q,S,z,R,V,x,t,a,g,A,N,P=n[1],T,B,K,D,$,m,O,J,Z,U,Q,X,I,Y,ee,L,te,ie,se,y=_e(n);return{c(){s=c("main"),l=c("video"),k=h(),e=c("div"),b=c("br"),H=h(),G=c("br"),q=h(),S=c("button"),z=M("Sign-in with Google"),R=h(),V=c("br"),x=h(),t=c("br"),a=h(),g=c("button"),A=M("Sign-in via link"),N=h(),y.c(),T=h(),B=c("span"),K=h(),D=c("span"),$=h(),m=c("div"),O=c("h2"),J=M("Welcome User"),Z=h(),U=c("h3"),Q=M("Redirecting to your page in"),X=h(),I=c("h3"),Y=M("\u230A\u03C0\u230B"),ee=h(),L=c("button"),te=M("Logout"),this.h()},l(v){s=d(v,"MAIN",{});var w=_(s);l=d(w,"VIDEO",{controlslist:!0,src:!0,style:!0}),_(l).forEach(p),k=f(w),e=d(w,"DIV",{class:!0,id:!0,style:!0});var r=_(e);b=d(r,"BR",{}),H=f(r),G=d(r,"BR",{}),q=f(r),S=d(r,"BUTTON",{id:!0,class:!0});var oe=_(S);z=W(oe,"Sign-in with Google"),oe.forEach(p),R=f(r),V=d(r,"BR",{}),x=f(r),t=d(r,"BR",{}),a=f(r),g=d(r,"BUTTON",{id:!0,class:!0});var ne=_(g);A=W(ne,"Sign-in via link"),ne.forEach(p),N=f(r),y.l(r),T=f(r),B=d(r,"SPAN",{id:!0,class:!0,style:!0}),_(B).forEach(p),K=f(r),D=d(r,"SPAN",{id:!0,style:!0,class:!0}),_(D).forEach(p),r.forEach(p),$=f(w),m=d(w,"DIV",{class:!0,id:!0,style:!0});var F=_(m);O=d(F,"H2",{class:!0,id:!0});var ae=_(O);J=W(ae,"Welcome User"),ae.forEach(p),Z=f(F),U=d(F,"H3",{class:!0});var re=_(U);Q=W(re,"Redirecting to your page in"),re.forEach(p),X=f(F),I=d(F,"H3",{class:!0,style:!0,id:!0});var ce=_(I);Y=W(ce,"\u230A\u03C0\u230B"),ce.forEach(p),ee=f(F),L=d(F,"BUTTON",{id:!0,class:!0});var de=_(L);te=W(de,"Logout"),de.forEach(p),F.forEach(p),w.forEach(p),this.h()},h(){l.autoplay=!0,l.loop=!0,l.muted=!0,l.playsInline=!0,o(l,"controlslist","nodownload"),Le(l.src,E="/login-bg-video-blurred.mp4")||o(l,"src",E),u(l,"min-height","90vh"),u(l,"max-height","90vh"),u(l,"min-width","100vw"),u(l,"max-width","100vw"),u(l,"position","absolute"),u(l,"z-index","-1"),u(l,"top","0"),u(l,"left","0"),u(l,"margin","0"),u(l,"padding","0"),u(l,"filter","blur(10px)"),o(S,"id","googleBtn"),o(S,"class","svelte-m7g9u3"),o(g,"id","passwordlessLoginBtn"),o(g,"class","svelte-m7g9u3"),o(B,"id","emailStatusMessage"),o(B,"class","centering  svelte-m7g9u3"),u(B,"display","none"),o(D,"id","flyingEmoji"),u(D,"display","none"),o(D,"class","svelte-m7g9u3"),o(e,"class","loginLogoutDivs  svelte-m7g9u3"),o(e,"id","logInDiv"),u(e,"display","block"),o(O,"class","centering svelte-m7g9u3"),o(O,"id","loginWelcomeText"),o(U,"class","centering svelte-m7g9u3"),o(I,"class","centering svelte-m7g9u3"),u(I,"font-size","30px"),o(I,"id","redirectMessage"),o(L,"id","logoutBtn"),o(L,"class","svelte-m7g9u3"),o(m,"class","loginLogoutDivs svelte-m7g9u3"),o(m,"id","logOutDiv"),u(m,"display","none")},m(v,w){we(v,s,w),i(s,l),i(s,k),i(s,e),i(e,b),i(e,H),i(e,G),i(e,q),i(e,S),i(S,z),i(e,R),i(e,V),i(e,x),i(e,t),i(e,a),i(e,g),i(g,A),i(e,N),y.m(e,null),i(e,T),i(e,B),i(e,K),i(e,D),i(s,$),i(s,m),i(m,O),i(O,J),i(m,Z),i(m,U),i(U,Q),i(m,X),i(m,I),i(I,Y),i(m,ee),i(m,L),i(L,te),ie||(se=[j(S,"click",n[3]),j(g,"click",n[5]),j(L,"click",n[4])],ie=!0)},p(v,[w]){w&2&&be(P,P=v[1])?(Re(),ue(y,1,1,ke),Fe(),y=_e(v),y.c(),ge(y,1),y.m(e,T)):y.p(v,w)},i(v){ge(y)},o(v){ue(y)},d(v){v&&p(s),y.d(v),ie=!1,Ee(se)}}}function xe(n,s,l){let E,k;me(n,fe,t=>l(7,E=t)),me(n,ye,t=>l(8,k=t));let e="",b=!1;Te(()=>{if(Pe(C,window.location.href)){let t=window.localStorage.getItem("emailForSignIn");t||(t=window.prompt("Please provide your email for confirmation")),Ue(C,t,window.location.href).then(()=>window.localStorage.removeItem("emailForSignIn")).catch(a=>console.log(a))}Me(C,t=>{t?(console.log("User is signed in!"),z(t.email),logInDiv.style.display="none",logOutDiv.style.display="block",loginWelcomeText.innerText=t.displayName?`Hey ${t.displayName}!`:`Hey ${t.email}!`):console.log("User is NOT signed in")})});function H(t){const a=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t);t.length===0?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):a?(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a",passwordlessLoginBtn.addEventListener("click",()=>R()),emailField.addEventListener("keydown",g=>{g.key==="Enter"&&R()})):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}function G(){const t=new le;We(C,t).then(a=>{le.credentialFromResult(a).accessToken,a.user}).catch(a=>{a.code,a.message,a.customData.email,le.credentialFromError(a)})}function q(){let t=emailField.value;console.log(t),t.length!==0&&qe(C,t,{url:"https://thinksolve.io/login",handleCodeInApp:!0}).then(()=>{window.localStorage.setItem("emailForSignIn",t),console.log("success with sendSignInLinkToEmail!")}).catch(g=>{g.code,g.message,console.log("error with sendSignInLinkToEmail")})}function S(){Ce(C).then(()=>{console.log("logged out"),ve("/")}).catch(t=>{console.log(t),console.log("FAILED firebase signOut function")})}async function z(t){const a=He(ze,"email");(await Ge(a)).forEach(A=>{if(t===A.id){let N=3e3,P=parseInt(N/1e3),T="/";console.log(`A match! ${A.id} => ${T}`),he(ye,k=setInterval(()=>{P>0&&(P+=-1,document.getElementById("redirectMessage").innerHTML=` ${P}`)},1e3),k),he(fe,E=setTimeout(()=>{ve(T)},N),E)}})}function R(){passwordlessLoginBtn.style.opacity="0.2",passwordlessLoginBtn.style.pointerEvents="none",q(),window.addEventListener("keydown",t=>t.stopImmediatePropagation(),!0),window.addEventListener("click",t=>t.stopImmediatePropagation(),!0),flyingEmoji.style.display="block",emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                <span class="centering" style=" font-weight: bold; font-size: 18px; color: #10bb8a"> 
                    Link sent to email 
                </span>
                `}const V=()=>{e.length==0&&l(1,b=!b)};function x(){e=this.value,l(0,e)}return[e,b,H,G,S,V,x]}class Qe extends Se{constructor(s){super(),Ie(this,s,xe,Ve,be,{})}}export{Qe as default};
