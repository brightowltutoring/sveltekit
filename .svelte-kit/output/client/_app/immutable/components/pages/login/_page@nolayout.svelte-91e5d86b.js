import{S as pe,i as ve,s as fe,k as o,a as h,q as A,l as a,m as p,h as u,c as v,r as M,n as l,V as ye,p as r,b as _e,G as e,W as me,H as q,A as ge,C as we,o as be,D as Ee}from"../../../chunks/index-3c293d12.js";import{i as Se,s as Ie,o as ke,a as O,G as se,b as Le,c as Fe,g as he,y as Te,R as Be,d as De,e as Re}from"../../../chunks/navigation-6252f5cb.js";import"../../../chunks/singletons-3fa28a34.js";import"../../../chunks/index-323eada8.js";function He(m){let g,i,R,W,s,x,H,C,N,w,V,G,t,n,b,P,d,_,U,z,f,j,F,J,T,K,c,B,Q,X,$,Y,Z,S,ee,te,I,le,ie,ne;return{c(){g=o("main"),i=o("video"),W=h(),s=o("div"),x=o("br"),H=h(),C=o("br"),N=h(),w=o("button"),V=A("Sign-in with Google"),G=h(),t=o("br"),n=h(),b=o("br"),P=h(),d=o("div"),_=o("button"),U=A("Sign-in via link"),z=h(),f=o("input"),j=h(),F=o("span"),J=h(),T=o("span"),K=h(),c=o("div"),B=o("h2"),Q=A("Welcome User"),X=h(),$=o("h3"),Y=A("Redirecting to your page in"),Z=h(),S=o("h3"),ee=A("\u230A\u03C0\u230B"),te=h(),I=o("button"),le=A("Logout"),this.h()},l(D){g=a(D,"MAIN",{});var E=p(g);i=a(E,"VIDEO",{controlslist:!0,src:!0,style:!0}),p(i).forEach(u),W=v(E),s=a(E,"DIV",{class:!0,id:!0,style:!0});var y=p(s);x=a(y,"BR",{}),H=v(y),C=a(y,"BR",{}),N=v(y),w=a(y,"BUTTON",{id:!0,class:!0});var oe=p(w);V=M(oe,"Sign-in with Google"),oe.forEach(u),G=v(y),t=a(y,"BR",{}),n=v(y),b=a(y,"BR",{}),P=v(y),d=a(y,"DIV",{id:!0});var k=p(d);_=a(k,"BUTTON",{id:!0,class:!0});var ae=p(_);U=M(ae,"Sign-in via link"),ae.forEach(u),z=v(k),f=a(k,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),j=v(k),F=a(k,"SPAN",{id:!0,class:!0,style:!0}),p(F).forEach(u),J=v(k),T=a(k,"SPAN",{id:!0,style:!0,class:!0}),p(T).forEach(u),k.forEach(u),y.forEach(u),K=v(E),c=a(E,"DIV",{class:!0,id:!0,style:!0});var L=p(c);B=a(L,"H2",{class:!0,id:!0});var re=p(B);Q=M(re,"Welcome User"),re.forEach(u),X=v(L),$=a(L,"H3",{class:!0});var de=p($);Y=M(de,"Redirecting to your page in"),de.forEach(u),Z=v(L),S=a(L,"H3",{class:!0,style:!0,id:!0});var ce=p(S);ee=M(ce,"\u230A\u03C0\u230B"),ce.forEach(u),te=v(L),I=a(L,"BUTTON",{id:!0,class:!0});var ue=p(I);le=M(ue,"Logout"),ue.forEach(u),L.forEach(u),E.forEach(u),this.h()},h(){i.autoplay=!0,i.loop=!0,i.muted=!0,i.playsInline=!0,l(i,"controlslist","nodownload"),ye(i.src,R="/login-bg-video-blurred.mp4")||l(i,"src",R),r(i,"min-height","100vh"),r(i,"max-height","100vh"),r(i,"min-width","100vw"),r(i,"max-width","100vw"),r(i,"position","absolute"),r(i,"z-index","-1"),r(i,"top","0"),r(i,"left","0"),r(i,"margin","0"),r(i,"padding","0"),r(i,"filter","blur(10px)"),l(w,"id","googleBtn"),l(w,"class","svelte-1mhl4m5"),l(_,"id","passwordlessLoginBtn"),l(_,"class","svelte-1mhl4m5"),l(f,"id","emailField"),l(f,"type","email"),l(f,"placeholder","email"),l(f,"class","svelte-1mhl4m5"),l(F,"id","emailStatusMessage"),l(F,"class","centering  svelte-1mhl4m5"),r(F,"display","none"),l(T,"id","flyingEmoji"),r(T,"display","none"),l(T,"class","svelte-1mhl4m5"),l(d,"id","emailSectionHover"),l(s,"class","loginLogoutDivs svelte-1mhl4m5"),l(s,"id","logInDiv"),r(s,"display","block"),l(B,"class","centering svelte-1mhl4m5"),l(B,"id","loginWelcomeText"),l($,"class","centering svelte-1mhl4m5"),l(S,"class","centering svelte-1mhl4m5"),r(S,"font-size","30px"),l(S,"id","redirectMessage"),l(I,"id","logoutBtn"),l(I,"class","svelte-1mhl4m5"),l(c,"class","loginLogoutDivs svelte-1mhl4m5"),l(c,"id","logOutDiv"),r(c,"display","none")},m(D,E){_e(D,g,E),e(g,i),e(g,W),e(g,s),e(s,x),e(s,H),e(s,C),e(s,N),e(s,w),e(w,V),e(s,G),e(s,t),e(s,n),e(s,b),e(s,P),e(s,d),e(d,_),e(_,U),e(d,z),e(d,f),me(f,m[0]),e(d,j),e(d,F),e(d,J),e(d,T),e(g,K),e(g,c),e(c,B),e(B,Q),e(c,X),e(c,$),e($,Y),e(c,Z),e(c,S),e(S,ee),e(c,te),e(c,I),e(I,le),ie||(ne=[q(w,"click",m[4]),q(f,"input",m[5]),q(f,"input",function(){Ee(m[1](m[0]))&&m[1](m[0]).apply(this,arguments)}),q(I,"click",m[6])],ie=!0)},p(D,[E]){m=D,E&1&&f.value!==m[0]&&me(f,m[0])},i:ge,o:ge,d(D){D&&u(g),ie=!1,we(ne)}}}function Ne(m,g,i){let R;be(()=>{if(Se(O,window.location.href)){let t=window.localStorage.getItem("emailForSignIn");t||(t=window.prompt("Please provide your email for confirmation")),Ie(O,t,window.location.href).then(n=>{window.localStorage.removeItem("emailForSignIn")}).catch(n=>{})}ke(O,t=>{t?(console.log("User is signed in!"),C(t.email),logInDiv.style.display="none",logOutDiv.style.display="block",loginWelcomeText.innerText=t.displayName?`Hey ${t.displayName}!`:`Hey ${t.email}!`):console.log("User is NOT signed in")})});function W(t){const n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t);t.length===0?(emailField.style.border="1px solid #aaa",emailField.style.color="#aaa",emailField.style.fontSize="16px"):n?(emailField.style.border="2px solid #59d0ae",emailField.style.backgroundColor="white",emailField.style.color="#10bb8a",passwordlessLoginBtn.addEventListener("click",()=>N()),emailField.addEventListener("keydown",b=>{b.key==="Enter"&&N()})):(emailField.style.border="1.5px solid red",emailField.style.color="red",emailField.style.fontSize="20px")}function s(){const t=new se;Le(O,t).then(n=>{se.credentialFromResult(n).accessToken,n.user}).catch(n=>{n.code,n.message,n.customData.email,se.credentialFromError(n)})}function x(){let t=emailField.value;console.log(t),t.length!==0&&De(O,t,{url:"https://thinksolve.io/login",handleCodeInApp:!0}).then(()=>{window.localStorage.setItem("emailForSignIn",t),console.log("success with sendSignInLinkToEmail!")}).catch(b=>{b.code,b.message,console.log("error with sendSignInLinkToEmail")})}function H(){Fe(O).then(()=>{console.log("logged out"),he("/")}).catch(t=>{console.log(t),console.log("FAILED firebase signOut function")})}async function C(t){const n=Te(Re,"email");(await Be(n)).forEach(P=>{if(t===P.id){let d=3e3,_=parseInt(d/1e3),U="/";console.log(`A match! ${P.id} => ${U}`),setInterval(()=>{_>0&&(_+=-1,document.getElementById("redirectMessage").innerHTML=` ${_}`)},1e3),setTimeout(()=>{he(U)},d)}})}function N(){passwordlessLoginBtn.style.opacity="0.2",passwordlessLoginBtn.style.pointerEvents="none",x(),window.addEventListener("keydown",t=>t.stopImmediatePropagation(),!0),window.addEventListener("click",t=>t.stopImmediatePropagation(),!0),flyingEmoji.style.display="block",emailStatusMessage.style.display="block",emailStatusMessage.innerHTML=`
                <span class="centering" style=" font-weight: bold; font-size: 18px; color: #10bb8a"> 
                    Link sent to email 
                </span>
                `}const w=()=>s();function V(){R=this.value,i(0,R)}return[R,W,s,H,w,V,()=>H()]}class Me extends pe{constructor(g){super(),ve(this,g,Ne,He,fe,{})}}export{Me as default};