import{S as we,i as be,s as ae,k as p,l as _,m as v,h as f,n as o,b as j,H as c,g as P,v as ke,f as ye,d as C,P as Ee,a2 as me,a3 as pe,a as y,y as U,c as E,z as H,A as L,U as _e,W as ve,B as W,X as Se,q as I,r as N,D as J,o as Pe,M as Ce,N as Ae}from"../chunks/index.d162f37a.js";import{D as Ie}from"../chunks/DropzoneOpener.46973b96.js";import{P as Ne}from"../chunks/PlansSection.38589179.js";import{r as le,R as je,a as qe}from"../chunks/Reviews.3c95c541.js";import{B as ze}from"../chunks/BackgroundVideo.8bb5b74f.js";import{a as De}from"../chunks/index.3c701c7f.js";function ge(d,e,n){const t=d.slice();return t[5]=e[n].name,t[6]=e[n].title,t[7]=e[n].date,t[8]=e[n].body,t[10]=n,t}function Te(d){let e=d[8]+"",n;return{c(){n=I(e)},l(t){n=N(t,e)},m(t,i){j(t,n,i)},p:J,d(t){t&&f(n)}}}function $e(d){let e,n,t,i,m,a,h,r,s,l;function x(){return d[2](d[10])}function A(){return d[3](d[10])}return a=new je({props:{title:d[6],name:d[5],date:d[7],$$slots:{default:[Te]},$$scope:{ctx:d}}}),{c(){e=p("div"),n=p("a"),t=y(),i=p("a"),m=y(),U(a.$$.fragment),h=y(),this.h()},l(g){e=_(g,"DIV",{id:!0,class:!0});var $=v(e);n=_($,"A",{href:!0,"aria-label":!0,class:!0}),v(n).forEach(f),t=E($),i=_($,"A",{href:!0,"aria-label":!0,class:!0}),v(i).forEach(f),m=E($),H(a.$$.fragment,$),h=E($),$.forEach(f),this.h()},h(){o(n,"href",`#card_${d[10]+1}`),o(n,"aria-label","right horizontal scroll to next review card"),o(n,"class","edgeCardClick right-0 svelte-1qmnmxj"),o(i,"href",`#card_${d[10]-1}`),o(i,"aria-label","left horizontal scroll to next review card"),o(i,"class","edgeCardClick left-0 svelte-1qmnmxj"),o(e,"id",`card_${d[10]}`),o(e,"class","relative h-[70vh] w-[85vw] max-w-sm overflow-hidden overflow-y-scroll scroll-smooth rounded-xl bg-white p-5 px-10 shadow-md transition-shadow duration-300 ease-in-out scrollbar-hide hover:shadow-xl dark:bg-[#252333]")},m(g,$){j(g,e,$),c(e,n),c(e,t),c(e,i),c(e,m),L(a,e,null),c(e,h),r=!0,s||(l=[_e(n,"click",ve(x)),_e(i,"click",ve(A))],s=!0)},p(g,$){d=g;const b={};$&2048&&(b.$$scope={dirty:$,ctx:d}),a.$set(b)},i(g){r||(P(a.$$.fragment,g),r=!0)},o(g){C(a.$$.fragment,g),r=!1},d(g){g&&f(e),W(a),s=!1,Se(l)}}}function Oe(d){let e,n,t,i,m=le,a=[];for(let r=0;r<m.length;r+=1)a[r]=$e(ge(d,m,r));const h=r=>C(a[r],1,1,()=>{a[r]=null});return{c(){e=p("section"),n=p("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=_(r,"SECTION",{class:!0});var s=v(e);n=_(s,"DIV",{class:!0});var l=v(n);for(let x=0;x<a.length;x+=1)a[x].l(l);l.forEach(f),s.forEach(f),this.h()},h(){o(n,"class","mx-10 flex gap-x-5 md:mx-20 lg:mx-40"),o(e,"class",t="mt-16 flex overflow-x-scroll scroll-smooth rounded-xl bg-[#f0efef] py-5 scrollbar-hide dark:bg-[#312e44] "+d[1].class+" svelte-1qmnmxj")},m(r,s){j(r,e,s),c(e,n);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(n,null);i=!0},p(r,[s]){if(s&1){m=le;let l;for(l=0;l<m.length;l+=1){const x=ge(r,m,l);a[l]?(a[l].p(x,s),P(a[l],1)):(a[l]=$e(x),a[l].c(),P(a[l],1),a[l].m(n,null))}for(ke(),l=m.length;l<a.length;l+=1)h(l);ye()}(!i||s&2&&t!==(t="mt-16 flex overflow-x-scroll scroll-smooth rounded-xl bg-[#f0efef] py-5 scrollbar-hide dark:bg-[#312e44] "+r[1].class+" svelte-1qmnmxj"))&&o(e,"class",t)},i(r){if(!i){for(let s=0;s<m.length;s+=1)P(a[s]);i=!0}},o(r){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)C(a[s]);i=!1},d(r){r&&f(e),Ee(a,r)}}}function Re(d,e,n){const t=le.length;function i(h,r="right"){var l;let s=r==="left"?h-1:h+1;s<0&&(s+=t),(l=document.getElementById(`card_${s%t}`))==null||l.scrollIntoView({behavior:"smooth",block:"center"})}const m=h=>i(h,"right"),a=h=>i(h,"left");return d.$$set=h=>{n(1,e=me(me({},e),pe(h)))},e=pe(e),[i,e,m,a]}class Ve extends we{constructor(e){super(),be(this,e,Re,Oe,ae,{})}}function xe(d){let e,n,t,i,m,a,h,r;return{c(){e=p("div"),n=I(`Math, Physics
					`),t=p("span"),i=I("... Online!"),a=y(),h=p("button"),r=I("👇 get started"),this.h()},l(s){e=_(s,"DIV",{class:!0});var l=v(e);n=N(l,`Math, Physics
					`),t=_(l,"SPAN",{class:!0});var x=v(t);i=N(x,"... Online!"),x.forEach(f),l.forEach(f),a=E(s),h=_(s,"BUTTON",{class:!0});var A=v(h);r=N(A,"👇 get started"),A.forEach(f),this.h()},h(){o(t,"class","gradientTextColor svelte-11yjqo2"),o(e,"class","pb-4 font-Poppins text-6xl"),o(h,"class","animate-bounce font-Nunito text-2xl font-thin")},m(s,l){j(s,e,l),c(e,n),c(e,t),c(t,i),j(s,a,l),j(s,h,l),c(h,r)},p:J,i(s){m||Ce(()=>{m=Ae(e,De,{duration:500}),m.start()})},o:J,d(s){s&&f(e),s&&f(a),s&&f(h)}}}function Be(d){let e,n,t,i,m,a=d[0],h,r,s,l,x,A,g,$,b,q,V,K,Q,z,Y,S,D,T,Z,B,ee,te,O,se,R,X;e=new ze({});let k=xe();return g=new Ie({}),z=new Ne({}),O=new qe({props:{class:"hidden sm:block"}}),R=new Ve({props:{class:"block sm:hidden"}}),{c(){U(e.$$.fragment),n=y(),t=p("div"),i=p("a"),m=p("div"),k.c(),h=y(),r=p("section"),s=p("a"),l=p("span"),x=I("1. Upload your homework"),A=y(),U(g.$$.fragment),$=y(),b=p("section"),q=p("a"),V=p("span"),K=I("2. Schedule a Session"),Q=y(),U(z.$$.fragment),Y=y(),S=p("section"),D=p("a"),T=p("span"),Z=I("3. Do Some Reading "),B=p("span"),ee=I("😎"),te=y(),U(O.$$.fragment),se=y(),U(R.$$.fragment),this.h()},l(u){H(e.$$.fragment,u),n=E(u),t=_(u,"DIV",{class:!0});var w=v(t);i=_(w,"A",{href:!0,class:!0});var ne=v(i);m=_(ne,"DIV",{class:!0});var oe=v(m);k.l(oe),oe.forEach(f),ne.forEach(f),h=E(w),r=_(w,"SECTION",{id:!0,class:!0});var F=v(r);s=_(F,"A",{href:!0,class:!0});var ce=v(s);l=_(ce,"SPAN",{class:!0});var ie=v(l);x=N(ie,"1. Upload your homework"),ie.forEach(f),ce.forEach(f),A=E(F),H(g.$$.fragment,F),F.forEach(f),$=E(w),b=_(w,"SECTION",{id:!0,class:!0});var G=v(b);q=_(G,"A",{href:!0,class:!0});var fe=v(q);V=_(fe,"SPAN",{class:!0});var de=v(V);K=N(de,"2. Schedule a Session"),de.forEach(f),fe.forEach(f),Q=E(G),H(z.$$.fragment,G),G.forEach(f),Y=E(w),S=_(w,"SECTION",{id:!0,class:!0});var M=v(S);D=_(M,"A",{href:!0,class:!0});var ue=v(D);T=_(ue,"SPAN",{class:!0});var re=v(T);Z=N(re,"3. Do Some Reading "),B=_(re,"SPAN",{class:!0});var he=v(B);ee=N(he,"😎"),he.forEach(f),re.forEach(f),ue.forEach(f),te=E(M),H(O.$$.fragment,M),se=E(M),H(R.$$.fragment,M),M.forEach(f),w.forEach(f),this.h()},h(){o(m,"class","grid grid-rows-1"),o(i,"href","#step1"),o(i,"class","z-10 flex h-[60vh] items-center justify-center text-center"),o(l,"class","gradientTextColor svelte-11yjqo2"),o(s,"href","#step2"),o(s,"class","pb-7 text-center font-Poppins text-5xl"),o(r,"id","step1"),o(r,"class","grid scroll-my-20 place-content-center duration-500 hover:scale-105"),o(V,"class","gradientTextColor svelte-11yjqo2"),o(q,"href","#reviews"),o(q,"class","pb-7 text-center font-Poppins text-5xl"),o(b,"id","step2"),o(b,"class","grid scroll-my-20 place-content-center duration-500"),o(B,"class","text-black"),o(T,"class","gradientTextColor svelte-11yjqo2"),o(D,"href","#top"),o(D,"class","flex w-full justify-center text-center font-Poppins text-5xl"),o(S,"id","reviews"),o(S,"class","mb-[200px] scroll-my-20 duration-500 sm:mb-[500px]"),o(t,"class","grid grid-cols-1 gap-y-52 lg:gap-y-64")},m(u,w){L(e,u,w),j(u,n,w),j(u,t,w),c(t,i),c(i,m),k.m(m,null),c(t,h),c(t,r),c(r,s),c(s,l),c(l,x),c(r,A),L(g,r,null),c(t,$),c(t,b),c(b,q),c(q,V),c(V,K),c(b,Q),L(z,b,null),c(t,Y),c(t,S),c(S,D),c(D,T),c(T,Z),c(T,B),c(B,ee),c(S,te),L(O,S,null),c(S,se),L(R,S,null),X=!0},p(u,[w]){w&1&&ae(a,a=u[0])?(ke(),C(k,1,1,J),ye(),k=xe(),k.c(),P(k,1),k.m(m,null)):k.p(u,w)},i(u){X||(P(e.$$.fragment,u),P(k),P(g.$$.fragment,u),P(z.$$.fragment,u),P(O.$$.fragment,u),P(R.$$.fragment,u),X=!0)},o(u){C(e.$$.fragment,u),C(k),C(g.$$.fragment,u),C(z.$$.fragment,u),C(O.$$.fragment,u),C(R.$$.fragment,u),X=!1},d(u){W(e,u),u&&f(n),u&&f(t),k.d(u),W(g),W(z),W(O),W(R)}}}function Me(d,e,n){let t=!1;return Pe(()=>n(0,t=!0)),[t]}class Ge extends we{constructor(e){super(),be(this,e,Me,Be,ae,{})}}export{Ge as default};
