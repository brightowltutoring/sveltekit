import{S as ae,i as ne,s as le,F as Je,k as _,q as J,a as B,l as w,m as b,r as N,h as u,c as A,n as p,b as H,P as m,u as ie,J as Ne,K as Re,L as ze,f as V,t as L,Z as Ve,Q as He,p as _e,w as Y,x as Z,y as K,B as X,z as Q,g as Ce,d as Te,e as we,a2 as Le,o as Me,H as C,D as ce,a3 as T,V as Se,W as qe}from"../../chunks/index-abd81730.js";import{I as je,P as We}from"../../chunks/PlansComponent-15f97a67.js";import{p as Fe}from"../../chunks/plansCardArray-7bd812c4.js";import{D as Ge}from"../../chunks/Dropzone-d99f5f61.js";import{i as Be,b as Oe}from"../../chunks/store-692170bd.js";import{s as Ae}from"../../chunks/index-2bc37e0b.js";import{g as be}from"../../chunks/navigation-7364be8b.js";function ke(a,e,s){const t=a.slice();return t[7]=e[s],t[9]=s,t}function Ie(a){let e,s;return{c(){e=_("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,alt:!0,style:!0}),this.h()},h(){p(e,"class",s="stars "+a[0]+" hover:scale-125"),p(e,"alt","star"),_e(e,"width","40px"),_e(e,"height","40px")},m(t,r){H(t,e,r)},p(t,r){r&1&&s!==(s="stars "+t[0]+" hover:scale-125")&&p(e,"class",s)},d(t){t&&u(e)}}}function Ue(a){let e,s,t,r,n,i,o,f,c,l,h,d,v,x,P,S,R=Array(5),I=[];for(let y=0;y<R.length;y+=1)I[y]=Ie(ke(a,R,y));const z=a[6].default,D=Je(z,a,a[5],null);return{c(){e=_("article"),s=_("div"),t=_("h1"),r=J(a[1]),n=B(),i=_("div");for(let y=0;y<I.length;y+=1)I[y].c();o=B(),f=_("div"),c=J("on "),l=J(a[3]),h=B(),D&&D.c(),d=B(),v=_("b"),x=J(a[2]),this.h()},l(y){e=w(y,"ARTICLE",{class:!0});var k=b(e);s=w(k,"DIV",{class:!0});var g=b(s);t=w(g,"H1",{class:!0});var M=b(t);r=N(M,a[1]),M.forEach(u),n=A(g),i=w(g,"DIV",{class:!0});var W=b(i);for(let F=0;F<I.length;F+=1)I[F].l(W);W.forEach(u),o=A(g),f=w(g,"DIV",{class:!0});var j=b(f);c=N(j,"on "),l=N(j,a[3]),j.forEach(u),h=A(g),D&&D.l(g),d=A(g),v=w(g,"B",{class:!0});var U=b(v);x=N(U,a[2]),U.forEach(u),g.forEach(u),k.forEach(u),this.h()},h(){p(t,"class","svelte-1hvhqpo"),p(i,"class","flex flex-row"),p(f,"class","italic"),p(v,"class","absolute right-0 bottom-0 -my-10 mx-5 "),p(s,"class","absolute"),p(e,"class",P="prose relative "+(a[4]&&"prose-invert")+" md:pb-[5vw]")},m(y,k){H(y,e,k),m(e,s),m(s,t),m(t,r),m(s,n),m(s,i);for(let g=0;g<I.length;g+=1)I[g].m(i,null);m(s,o),m(s,f),m(f,c),m(f,l),m(s,h),D&&D.m(s,null),m(s,d),m(s,v),m(v,x),S=!0},p(y,[k]){if((!S||k&2)&&ie(r,y[1]),k&1){R=Array(5);let g;for(g=0;g<R.length;g+=1){const M=ke(y,R,g);I[g]?I[g].p(M,k):(I[g]=Ie(M),I[g].c(),I[g].m(i,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=R.length}(!S||k&8)&&ie(l,y[3]),D&&D.p&&(!S||k&32)&&Ne(D,z,y,y[5],S?ze(z,y[5],k,null):Re(y[5]),null),(!S||k&4)&&ie(x,y[2]),(!S||k&16&&P!==(P="prose relative "+(y[4]&&"prose-invert")+" md:pb-[5vw]"))&&p(e,"class",P)},i(y){S||(V(D,y),S=!0)},o(y){L(D,y),S=!1},d(y){y&&u(e),Ve(I,y),D&&D.d(y)}}}function Ye(a,e,s){let t;He(a,Be,l=>s(4,t=l));let{$$slots:r={},$$scope:n}=e,{whenImageNotLoaded:i}=e,{title:o="Great physics tutor!!"}=e,{name:f="Thomas Finn"}=e,{date:c="2022-06-08"}=e;return a.$$set=l=>{"whenImageNotLoaded"in l&&s(0,i=l.whenImageNotLoaded),"title"in l&&s(1,o=l.title),"name"in l&&s(2,f=l.name),"date"in l&&s(3,c=l.date),"$$scope"in l&&s(5,n=l.$$scope)},[i,o,f,c,t,n,r]}class Ze extends ae{constructor(e){super(),ne(this,e,Ye,Ue,le,{whenImageNotLoaded:0,title:1,name:2,date:3})}}const Ee=[{name:"CM",title:"grade 10 math / grade 11 physics",date:"2022-07-11",body:"Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"},{name:"magnus",title:"Great help before final!",date:"2022-06-26",body:"Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"},{name:"Thomas Finn",title:"Great physics tutor!!",date:"2022-06-08",body:"He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"},{name:"felix belfoy",title:"quantitative chem",date:"2022-06-01",body:"I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"},{name:"Celia",title:"amazing IBHL physics tutor ",date:"2022-05-01",body:"Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."},{name:"fernando vc",title:"very helpful with kinematics!",date:"2021-05-03",body:"He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."},{name:"Lavinia",title:"Great Spanish tutor",date:"2021-03-03",body:"He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"},{name:"TJ Macdonald",title:"Review",date:"2021-02-10",body:"Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."},{name:"Miranda Teta",title:"IB Physics",date:"2021-02-05",body:"Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."},{name:"Efe T.",title:"IB Physics Year 1",date:"2021-02-01",body:"He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."},{name:"Parent of Rachel",title:"stellar!",date:"2020-06-03",body:"Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"},{name:"Paola A.",title:"1st yr at Brock University",date:"2020-10-27",body:"I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."},{name:"rob henriquez",title:"mohawk college tutor",date:"2020-02-18",body:"Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"},{name:"rozhina mazhar",title:"IB HL Physics",date:"2020-03-07",body:"John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"},{name:"Zaara Alam",title:"grade 12 physics",date:"2020-10-27",body:"I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"}];function Ke(a){let e,s;return e=new je({props:{querySelectees:".stars",once:!0,action:a[0],margin:"300px"}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){K(e,t,r),s=!0},p:X,i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function Qe(a){console.log("\u{1F4AB}"),a.src="/star.webp",a.classList.remove("opacity-0")}function Xe(a){return[s=>Qe(s)]}class et extends ae{constructor(e){super(),ne(this,e,Xe,Ke,le,{})}}function $e(a,e,s){const t=a.slice();return t[0]=e[s].name,t[1]=e[s].title,t[2]=e[s].date,t[3]=e[s].body,t}function tt(a){let e=a[3]+"",s,t;return{c(){s=J(e),t=B()},l(r){s=N(r,e),t=A(r)},m(r,n){H(r,s,n),H(r,t,n)},p:X,d(r){r&&u(s),r&&u(t)}}}function xe(a){let e,s;return e=new Ze({props:{title:a[1],name:a[0],date:a[2],whenImageNotLoaded:at,$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){K(e,t,r),s=!0},p(t,r){const n={};r&64&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}function st(a){let e,s,t,r,n;e=new et({});let i=Ee,o=[];for(let c=0;c<i.length;c+=1)o[c]=xe($e(a,i,c));const f=c=>L(o[c],1,1,()=>{o[c]=null});return{c(){Y(e.$$.fragment),s=B(),t=_("div"),r=_("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){Z(e.$$.fragment,c),s=A(c),t=w(c,"DIV",{class:!0});var l=b(t);r=w(l,"DIV",{class:!0});var h=b(r);for(let d=0;d<o.length;d+=1)o[d].l(h);h.forEach(u),l.forEach(u),this.h()},h(){p(r,"class","grid grid-cols-dynamic gap-x-10 gap-y-[80vw] sm:gap-y-[55vw] md:gap-y-[65vw] lg:gap-y-[45vw] -translate-y-60 sm:translate-y-0"),p(t,"class","scale-90 ")},m(c,l){K(e,c,l),H(c,s,l),H(c,t,l),m(t,r);for(let h=0;h<o.length;h+=1)o[h].m(r,null);n=!0},p(c,[l]){if(l&0){i=Ee;let h;for(h=0;h<i.length;h+=1){const d=$e(c,i,h);o[h]?(o[h].p(d,l),V(o[h],1)):(o[h]=xe(d),o[h].c(),V(o[h],1),o[h].m(r,null))}for(Ce(),h=i.length;h<o.length;h+=1)f(h);Te()}},i(c){if(!n){V(e.$$.fragment,c);for(let l=0;l<i.length;l+=1)V(o[l]);n=!0}},o(c){L(e.$$.fragment,c),o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)L(o[l]);n=!1},d(c){Q(e,c),c&&u(s),c&&u(t),Ve(o,c)}}}let at="opacity-0 transition-opacity duration-500 ease-in";class nt extends ae{constructor(e){super(),ne(this,e,null,st,le,{})}}function lt(a){let e,s,t,r,n=a[1]&&Pe(a);return{c(){e=_("div"),s=_("div"),n&&n.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=b(e);s=w(o,"DIV",{class:!0});var f=b(s);n&&n.l(f),f.forEach(u),o.forEach(u),this.h()},h(){p(s,"class","grid grid-rows-1"),p(e,"class","h-[70vh] flex justify-center items-center text-center ")},m(i,o){H(i,e,o),m(e,s),n&&n.m(s,null),t||(r=[C(s,"click",a[11]),C(s,"keydown",a[12])],t=!0)},p(i,o){i[1]?n?(n.p(i,o),o&2&&V(n,1)):(n=Pe(i),n.c(),V(n,1),n.m(s,null)):n&&(n.d(1),n=null)},i(i){V(n)},o:X,d(i){i&&u(e),n&&n.d(),t=!1,ce(r)}}}function ot(a){let e,s,t,r,n,i,o,f,c,l,h,d,v,x,P,S,R,I,z,D,y,k,g,M,W,j,U,F,G,O,oe,de,$=a[1]&&De(a);return h=new Ge({props:{textSizeTW:"text-2xl"}}),z=new We({props:{plansCards:Fe.slice(0,2),hasTransition:!1}}),G=new nt({}),{c(){e=_("div"),s=_("div"),t=_("div"),$&&$.c(),r=B(),n=_("div"),i=_("p"),o=_("span"),f=J("1. Upload your homework"),l=B(),Y(h.$$.fragment),d=B(),v=_("div"),x=_("p"),P=_("span"),S=J("2. Schedule a Session"),I=B(),Y(z.$$.fragment),D=B(),y=_("div"),k=_("p"),g=_("span"),M=J("3. Do Some Reading "),j=_("span"),U=J("\u{1F60E}"),F=B(),Y(G.$$.fragment),this.h()},l(E){e=w(E,"DIV",{class:!0});var q=b(e);s=w(q,"DIV",{class:!0});var he=b(s);t=w(he,"DIV",{class:!0});var ue=b(t);$&&$.l(ue),ue.forEach(u),he.forEach(u),r=A(q),n=w(q,"DIV",{id:!0,class:!0});var ee=b(n);i=w(ee,"P",{class:!0});var fe=b(i);o=w(fe,"SPAN",{class:!0});var me=b(o);f=N(me,"1. Upload your homework"),me.forEach(u),fe.forEach(u),l=A(ee),Z(h.$$.fragment,ee),ee.forEach(u),d=A(q),v=w(q,"DIV",{id:!0,class:!0});var te=b(v);x=w(te,"P",{class:!0});var pe=b(x);P=w(pe,"SPAN",{class:!0});var ve=b(P);S=N(ve,"2. Schedule a Session"),ve.forEach(u),pe.forEach(u),I=A(te),Z(z.$$.fragment,te),te.forEach(u),D=A(q),y=w(q,"DIV",{id:!0,class:!0});var se=b(y);k=w(se,"P",{class:!0});var re=b(k);g=w(re,"SPAN",{class:!0});var ye=b(g);M=N(ye,"3. Do Some Reading "),ye.forEach(u),j=w(re,"SPAN",{});var ge=b(j);U=N(ge,"\u{1F60E}"),ge.forEach(u),re.forEach(u),F=A(se),Z(G.$$.fragment,se),se.forEach(u),q.forEach(u),this.h()},h(){p(t,"class","grid grid-rows-1"),p(s,"class","h-[60vh] flex justify-center items-center text-center"),p(o,"class",c=T(a[2])+" svelte-iq6ytm"),p(i,"class","text-5xl font-Poppins text-center pb-7 "),p(n,"id","step1"),p(n,"class","hover:scale-105 duration-500 "),p(P,"class",R=T(a[2])+" svelte-iq6ytm"),p(x,"class","text-5xl font-Poppins text-center pb-7"),p(v,"id","step2"),p(v,"class","duration-500 "),p(g,"class",W=T(a[2])+" svelte-iq6ytm"),p(k,"class","text-5xl font-Poppins text-center "),p(y,"id","reviews"),p(y,"class","mb-[200px] sm:mb-[500px] duration-500 "),p(e,"class","grid grid-cols-1 gap-y-52 lg:gap-y-64")},m(E,q){H(E,e,q),m(e,s),m(s,t),$&&$.m(t,null),m(e,r),m(e,n),m(n,i),m(i,o),m(o,f),m(n,l),K(h,n,null),m(e,d),m(e,v),m(v,x),m(x,P),m(P,S),m(v,I),K(z,v,null),m(e,D),m(e,y),m(y,k),m(k,g),m(g,M),m(k,j),m(j,U),m(y,F),K(G,y,null),O=!0,oe||(de=[C(i,"keydown",a[5]),C(i,"click",a[6]),C(x,"keydown",a[7]),C(x,"click",a[8]),C(k,"keydown",a[9]),C(k,"click",a[10])],oe=!0)},p(E,q){E[1]?$?($.p(E,q),q&2&&V($,1)):($=De(E),$.c(),V($,1),$.m(t,null)):$&&($.d(1),$=null),(!O||q&4&&c!==(c=T(E[2])+" svelte-iq6ytm"))&&p(o,"class",c),(!O||q&4&&R!==(R=T(E[2])+" svelte-iq6ytm"))&&p(P,"class",R),(!O||q&4&&W!==(W=T(E[2])+" svelte-iq6ytm"))&&p(g,"class",W)},i(E){O||(V($),V(h.$$.fragment,E),V(z.$$.fragment,E),V(G.$$.fragment,E),O=!0)},o(E){L(h.$$.fragment,E),L(z.$$.fragment,E),L(G.$$.fragment,E),O=!1},d(E){E&&u(e),$&&$.d(),Q(h),Q(z),Q(G),oe=!1,ce(de)}}}function Pe(a){let e,s,t,r,n,i,o,f,c;return{c(){e=_("div"),s=J(`You're on the
          `),t=_("span"),r=J("App!"),o=B(),f=_("div"),c=J("the navbar is now your friend \u{1F91D}"),this.h()},l(l){e=w(l,"DIV",{class:!0});var h=b(e);s=N(h,`You're on the
          `),t=w(h,"SPAN",{class:!0});var d=b(t);r=N(d,"App!"),d.forEach(u),h.forEach(u),o=A(l),f=w(l,"DIV",{class:!0});var v=b(f);c=N(v,"the navbar is now your friend \u{1F91D}"),v.forEach(u),this.h()},h(){p(t,"class",n=T(a[2])+" svelte-iq6ytm"),p(e,"class","text-6xl font-Poppins pb-4 "),p(f,"class","grid px-6 text-2xl font-Nunito font-thin ")},m(l,h){H(l,e,h),m(e,s),m(e,t),m(t,r),H(l,o,h),H(l,f,h),m(f,c)},p(l,h){h&4&&n!==(n=T(l[2])+" svelte-iq6ytm")&&p(t,"class",n)},i(l){i||Se(()=>{i=qe(e,Ae,{duration:500}),i.start()})},o:X,d(l){l&&u(e),l&&u(o),l&&u(f)}}}function De(a){let e,s,t,r,n,i,o,f,c,l,h;return{c(){e=_("div"),s=J(`Math, Physics
            `),t=_("span"),r=J("... Online!"),o=B(),f=_("div"),c=J("\u{1F447} get started"),this.h()},l(d){e=w(d,"DIV",{class:!0});var v=b(e);s=N(v,`Math, Physics
            `),t=w(v,"SPAN",{class:!0});var x=b(t);r=N(x,"... Online!"),x.forEach(u),v.forEach(u),o=A(d),f=w(d,"DIV",{class:!0});var P=b(f);c=N(P,"\u{1F447} get started"),P.forEach(u),this.h()},h(){p(t,"class",n=T(a[2])+" svelte-iq6ytm"),p(e,"class","text-6xl font-Poppins pb-4 "),p(f,"class","animate-bounce text-2xl font-Nunito font-thin ")},m(d,v){H(d,e,v),m(e,s),m(e,t),m(t,r),H(d,o,v),H(d,f,v),m(f,c),l||(h=[C(f,"click",a[3]),C(f,"keydown",a[4])],l=!0)},p(d,v){v&4&&n!==(n=T(d[2])+" svelte-iq6ytm")&&p(t,"class",n)},i(d){i||Se(()=>{i=qe(e,Ae,{duration:500}),i.start()})},o:X,d(d){d&&u(e),d&&u(o),d&&u(f),l=!1,ce(h)}}}function rt(a){let e,s,t,r,n,i,o,f;const c=[ot,lt],l=[];function h(d,v){return Oe()?1:0}return n=h(),i=l[n]=c[n](a),{c(){e=_("video"),r=B(),i.c(),o=we(),this.h()},l(d){e=w(d,"VIDEO",{loading:!0,controlslist:!0,class:!0,src:!0}),b(e).forEach(u),r=A(d),i.l(d),o=we(),this.h()},h(){p(e,"loading","lazy"),p(e,"controlslist","nodownload"),e.playsInline=!0,e.autoplay=!0,e.muted=!0,e.loop=!0,p(e,"class",s="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(a[0]?"invert-[0.95] blur-3xl ":"blur-2xl")),Le(e.src,t="/login-bg-video-blurred.mp4")||p(e,"src",t)},m(d,v){H(d,e,v),H(d,r,v),l[n].m(d,v),H(d,o,v),f=!0},p(d,[v]){(!f||v&1&&s!==(s="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(d[0]?"invert-[0.95] blur-3xl ":"blur-2xl")))&&p(e,"class",s),i.p(d,v)},i(d){f||(V(i),f=!0)},o(d){L(i),f=!1},d(d){d&&u(e),d&&u(r),l[n].d(d),d&&u(o)}}}function it(a,e,s){let t,r;He(a,Be,S=>s(0,r=S));let n=!1;Me(()=>{s(1,n=!0)});const i=()=>{document.getElementById("step1").scrollIntoView({behavior:"smooth",block:"start"})},o=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},c=()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},h=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},d=()=>{window.scrollTo({top:0,behavior:"smooth"})},v=()=>{window.scrollTo({top:0,behavior:"smooth"})},x=()=>be("/plans"),P=()=>be("/plans");return a.$$.update=()=>{a.$$.dirty&1&&s(2,t=`text-transparent bg-clip-text bg-gradient-to-tr ${r?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`)},[r,n,t,i,o,f,c,l,h,d,v,x,P]}class vt extends ae{constructor(e){super(),ne(this,e,it,rt,le,{})}}export{vt as default};
