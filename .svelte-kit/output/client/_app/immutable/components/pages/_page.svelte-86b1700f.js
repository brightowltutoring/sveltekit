import{S as re,i as oe,s as ie,k as m,l as p,m as g,h as u,n as h,b as T,f as P,g as Be,d as Ae,t as z,X as pe,w as X,a as E,x as Y,c as x,y as Z,O as d,Q as Ce,R as Je,z as ee,q as D,r as S,B as te,F as Ne,u as me,J as qe,K as Le,L as Ue,T as Me,a1 as Re,p as Ee,H as Q,D as Oe,o as je}from"../../chunks/index-30e2a2cf.js";import{P as Fe}from"../../chunks/PlansCard-d6d7ce83.js";import{e as Ge,s as We,a as Ke}from"../../chunks/index-36fbeedd.js";import{p as xe}from"../../chunks/plansCardArray-e12ddae7.js";import{D as Qe}from"../../chunks/Dropzone-e210c8f7.js";import{a as ze}from"../../chunks/store-aa13e3e2.js";function Pe(o,e,t){const a=o.slice();return a[0]=e[t],a[2]=t,a}function Xe(o){let e,t=o[0].cardTitle+"",a;return{c(){e=m("span"),a=D(t),this.h()},l(s){e=p(s,"SPAN",{slot:!0});var i=g(e);a=S(i,t),i.forEach(u),this.h()},h(){h(e,"slot","cardTitle")},m(s,i){T(s,e,i),d(e,a)},p:te,d(s){s&&u(e)}}}function Ye(o){let e,t=o[0].cardText+"",a,s,i,l,n;return{c(){e=m("span"),a=D(t),s=E(),i=m("p"),l=m("a"),n=D("invoice sample"),this.h()},l(r){e=p(r,"SPAN",{slot:!0});var c=g(e);a=S(c,t),s=x(c),i=p(c,"P",{});var y=g(i);l=p(y,"A",{"data-sveltekit-prefetch":!0,href:!0,class:!0});var B=g(l);n=S(B,"invoice sample"),B.forEach(u),y.forEach(u),c.forEach(u),this.h()},h(){h(l,"data-sveltekit-prefetch",""),h(l,"href",o[0].href),h(l,"class","svelte-18ymex4"),h(e,"slot","cardText")},m(r,c){T(r,e,c),d(e,a),d(e,s),d(e,i),d(i,l),d(l,n)},p:te,d(r){r&&u(e)}}}function De(o){let e,t,a,s,i;return t=new Fe({props:{card:o[0].card,payNowUrl:o[0].payNowUrl,payLaterUrl:o[0].payLaterUrl,$$slots:{cardText:[Ye],cardTitle:[Xe]},$$scope:{ctx:o}}}),{c(){e=m("div"),X(t.$$.fragment),a=E()},l(l){e=p(l,"DIV",{});var n=g(e);Y(t.$$.fragment,n),a=x(n),n.forEach(u)},m(l,n){T(l,e,n),Z(t,e,null),d(e,a),i=!0},p(l,n){o=l;const r={};n&8&&(r.$$scope={dirty:n,ctx:o}),t.$set(r)},i(l){i||(P(t.$$.fragment,l),s||Ce(()=>{s=Je(e,We,{duration:1e3,easing:Ge,delay:100*o[2]}),s.start()}),i=!0)},o(l){z(t.$$.fragment,l),i=!1},d(l){l&&u(e),ee(t)}}}function Ze(o){let e,t,a=[...xe].reverse().slice(1),s=[];for(let l=0;l<a.length;l+=1)s[l]=De(Pe(o,a,l));const i=l=>z(s[l],1,1,()=>{s[l]=null});return{c(){e=m("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var n=g(e);for(let r=0;r<s.length;r+=1)s[r].l(n);n.forEach(u),this.h()},h(){h(e,"class","grid grid-cols-1 lg:grid-cols-2 p-7 ")},m(l,n){T(l,e,n);for(let r=0;r<s.length;r+=1)s[r].m(e,null);t=!0},p(l,[n]){if(n&0){a=[...xe].reverse().slice(1);let r;for(r=0;r<a.length;r+=1){const c=Pe(l,a,r);s[r]?(s[r].p(c,n),P(s[r],1)):(s[r]=De(c),s[r].c(),P(s[r],1),s[r].m(e,null))}for(Be(),r=a.length;r<s.length;r+=1)i(r);Ae()}},i(l){if(!t){for(let n=0;n<a.length;n+=1)P(s[n]);t=!0}},o(l){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)z(s[n]);t=!1},d(l){l&&u(e),pe(s,l)}}}class et extends re{constructor(e){super(),oe(this,e,null,Ze,ie,{})}}function tt(o,e,t){const a=o.slice();return a[6]=e[t],a[8]=t,a}function at(o){let e,t;return{c(){e=m("img"),this.h()},l(a){e=p(a,"IMG",{src:!0,alt:!0,style:!0,class:!0}),this.h()},h(){Re(e.src,t="star.webp")||h(e,"src",t),h(e,"alt","star"),Ee(e,"width","40px"),Ee(e,"height","40px"),h(e,"class","hover:scale-150 duration-300")},m(a,s){T(a,e,s)},p:te,d(a){a&&u(e)}}}function st(o){let e,t,a,s,i,l,n,r,c,y,B,L,I,A,C,H,G=Array(5),$=[];for(let f=0;f<G.length;f+=1)$[f]=at(tt(o,G,f));const U=o[5].default,_=Ne(U,o,o[4],null);return{c(){e=m("article"),t=m("div"),a=m("h1"),s=D(o[0]),i=E(),l=m("div");for(let f=0;f<$.length;f+=1)$[f].c();n=E(),r=m("div"),c=D("on "),y=D(o[2]),B=E(),_&&_.c(),L=E(),I=m("b"),A=D(o[1]),this.h()},l(f){e=p(f,"ARTICLE",{class:!0});var w=g(e);t=p(w,"DIV",{class:!0});var k=g(t);a=p(k,"H1",{class:!0});var W=g(a);s=S(W,o[0]),W.forEach(u),i=x(k),l=p(k,"DIV",{class:!0});var R=g(l);for(let M=0;M<$.length;M+=1)$[M].l(R);R.forEach(u),n=x(k),r=p(k,"DIV",{class:!0});var O=g(r);c=S(O,"on "),y=S(O,o[2]),O.forEach(u),B=x(k),_&&_.l(k),L=x(k),I=p(k,"B",{class:!0});var J=g(I);A=S(J,o[1]),J.forEach(u),k.forEach(u),w.forEach(u),this.h()},h(){h(a,"class","svelte-1hvhqpo"),h(l,"class","flex flex-row"),h(r,"class","italic"),h(I,"class","absolute right-0 bottom-0 -my-10 mx-5 "),h(t,"class","absolute "),h(e,"class",C="prose relative "+(o[3]&&"prose-invert")+" md:pb-[5vw]")},m(f,w){T(f,e,w),d(e,t),d(t,a),d(a,s),d(t,i),d(t,l);for(let k=0;k<$.length;k+=1)$[k].m(l,null);d(t,n),d(t,r),d(r,c),d(r,y),d(t,B),_&&_.m(t,null),d(t,L),d(t,I),d(I,A),H=!0},p(f,[w]){(!H||w&1)&&me(s,f[0]),(!H||w&4)&&me(y,f[2]),_&&_.p&&(!H||w&16)&&qe(_,U,f,f[4],H?Ue(U,f[4],w,null):Le(f[4]),null),(!H||w&2)&&me(A,f[1]),(!H||w&8&&C!==(C="prose relative "+(f[3]&&"prose-invert")+" md:pb-[5vw]"))&&h(e,"class",C)},i(f){H||(P(_,f),H=!0)},o(f){z(_,f),H=!1},d(f){f&&u(e),pe($,f),_&&_.d(f)}}}function lt(o,e,t){let a;Me(o,ze,c=>t(3,a=c));let{$$slots:s={},$$scope:i}=e,{title:l="Great physics tutor!!"}=e,{name:n="Thomas Finn"}=e,{date:r="2022-06-08"}=e;return o.$$set=c=>{"title"in c&&t(0,l=c.title),"name"in c&&t(1,n=c.name),"date"in c&&t(2,r=c.date),"$$scope"in c&&t(4,i=c.$$scope)},[l,n,r,a,i,s]}class nt extends re{constructor(e){super(),oe(this,e,lt,st,ie,{title:0,name:1,date:2})}}const Se=[{name:"CM",title:"grade 10 math / grade 11 physics",date:"2022-07-11",body:"Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"},{name:"magnus",title:"Great help before final!",date:"2022-06-26",body:"Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"},{name:"Thomas Finn",title:"Great physics tutor!!",date:"2022-06-08",body:"He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"},{name:"felix belfoy",title:"quantitative chem",date:"2022-06-01",body:"I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"},{name:"Celia",title:"amazing IBHL physics tutor ",date:"2022-05-01",body:"Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."},{name:"fernando vc",title:"very helpful with kinematics!",date:"2021-05-03",body:"He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."},{name:"Lavinia",title:"Great Spanish tutor",date:"2021-03-03",body:"He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"},{name:"TJ Macdonald",title:"Review",date:"2021-02-10",body:"Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."},{name:"Miranda Teta",title:"IB Physics",date:"2021-02-05",body:"Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."},{name:"Efe T.",title:"IB Physics Year 1",date:"2021-02-01",body:"He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."},{name:"Parent of Rachel",title:"stellar!",date:"2020-06-03",body:"Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"},{name:"Paola A.",title:"1st yr at Brock University",date:"2020-10-27",body:"I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."},{name:"rob henriquez",title:"mohawk college tutor",date:"2020-02-18",body:"Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"},{name:"rozhina mazhar",title:"IB HL Physics",date:"2020-03-07",body:"John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"},{name:"Zaara Alam",title:"grade 12 physics",date:"2020-10-27",body:"I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"}];function He(o,e,t){const a=o.slice();return a[0]=e[t].name,a[1]=e[t].title,a[2]=e[t].date,a[3]=e[t].body,a}function rt(o){let e=o[3]+"",t,a;return{c(){t=D(e),a=E()},l(s){t=S(s,e),a=x(s)},m(s,i){T(s,t,i),T(s,a,i)},p:te,d(s){s&&u(t),s&&u(a)}}}function Ve(o){let e,t;return e=new nt({props:{title:o[1],name:o[0],date:o[2],$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){X(e.$$.fragment)},l(a){Y(e.$$.fragment,a)},m(a,s){Z(e,a,s),t=!0},p(a,s){const i={};s&64&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){t||(P(e.$$.fragment,a),t=!0)},o(a){z(e.$$.fragment,a),t=!1},d(a){ee(e,a)}}}function ot(o){let e,t,a,s=Se,i=[];for(let n=0;n<s.length;n+=1)i[n]=Ve(He(o,s,n));const l=n=>z(i[n],1,1,()=>{i[n]=null});return{c(){e=m("div"),t=m("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=p(n,"DIV",{class:!0});var r=g(e);t=p(r,"DIV",{class:!0});var c=g(t);for(let y=0;y<i.length;y+=1)i[y].l(c);c.forEach(u),r.forEach(u),this.h()},h(){h(t,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0"),h(e,"class","scale-90 ")},m(n,r){T(n,e,r),d(e,t);for(let c=0;c<i.length;c+=1)i[c].m(t,null);a=!0},p(n,[r]){if(r&0){s=Se;let c;for(c=0;c<s.length;c+=1){const y=He(n,s,c);i[c]?(i[c].p(y,r),P(i[c],1)):(i[c]=Ve(y),i[c].c(),P(i[c],1),i[c].m(t,null))}for(Be(),c=s.length;c<i.length;c+=1)l(c);Ae()}},i(n){if(!a){for(let r=0;r<s.length;r+=1)P(i[r]);a=!0}},o(n){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)z(i[r]);a=!1},d(n){n&&u(e),pe(i,n)}}}class it extends re{constructor(e){super(),oe(this,e,null,ot,ie,{})}}function Te(o){let e,t,a,s,i;return{c(){e=m("div"),t=D(`Math, Physics
          `),a=m("span"),s=D("... Online!"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=g(e);t=S(n,`Math, Physics
          `),a=p(n,"SPAN",{class:!0});var r=g(a);s=S(r,"... Online!"),r.forEach(u),n.forEach(u),this.h()},h(){h(a,"class",o[2]),h(e,"class","text-6xl font-Poppins pb-4 ")},m(l,n){T(l,e,n),d(e,t),d(e,a),d(a,s)},p(l,n){n&4&&h(a,"class",l[2])},i(l){i||Ce(()=>{i=Je(e,Ke,{duration:500}),i.start()})},o:te,d(l){l&&u(e)}}}function ct(o){let e,t,a,s,i,l,n,r,c,y,B,L,I,A,C,H,G,$,U,_,f,w,k,W,R,O,J,M,j,ce,K,de,he,F,N,ue,ge,b=o[1]&&Te(o);return $=new Qe({props:{textSizeTW:"text-2xl"}}),R=new et({}),F=new it({}),{c(){e=m("video"),t=m("source"),i=E(),l=m("div"),n=m("div"),r=m("div"),b&&b.c(),c=E(),y=m("div"),B=D("\u{1F449} click for reviews"),L=E(),I=m("div"),A=m("p"),C=m("span"),H=D("1. Upload your homework"),G=E(),X($.$$.fragment),U=E(),_=m("div"),f=m("p"),w=m("span"),k=D("2. Schedule a Session"),W=E(),X(R.$$.fragment),O=E(),J=m("div"),M=m("p"),j=m("span"),ce=D("3. Do Some Reading "),K=m("span"),de=D("\u{1F60E}"),he=E(),X(F.$$.fragment),this.h()},l(v){e=p(v,"VIDEO",{class:!0,defaultmuted:!0,oncontextmenu:!0,preload:!0});var V=g(e);t=p(V,"SOURCE",{src:!0,type:!0}),V.forEach(u),i=x(v),l=p(v,"DIV",{class:!0});var q=g(l);n=p(q,"DIV",{class:!0});var ve=g(n);r=p(ve,"DIV",{class:!0});var ae=g(r);b&&b.l(ae),c=x(ae),y=p(ae,"DIV",{class:!0});var ye=g(y);B=S(ye,"\u{1F449} click for reviews"),ye.forEach(u),ae.forEach(u),ve.forEach(u),L=x(q),I=p(q,"DIV",{id:!0,class:!0});var se=g(I);A=p(se,"P",{class:!0});var _e=g(A);C=p(_e,"SPAN",{class:!0});var we=g(C);H=S(we,"1. Upload your homework"),we.forEach(u),_e.forEach(u),G=x(se),Y($.$$.fragment,se),se.forEach(u),U=x(q),_=p(q,"DIV",{id:!0,class:!0});var le=g(_);f=p(le,"P",{class:!0});var be=g(f);w=p(be,"SPAN",{class:!0});var ke=g(w);k=S(ke,"2. Schedule a Session"),ke.forEach(u),be.forEach(u),W=x(le),Y(R.$$.fragment,le),le.forEach(u),O=x(q),J=p(q,"DIV",{id:!0,class:!0});var ne=g(J);M=p(ne,"P",{class:!0});var fe=g(M);j=p(fe,"SPAN",{class:!0});var Ie=g(j);ce=S(Ie,"3. Do Some Reading "),Ie.forEach(u),K=p(fe,"SPAN",{});var $e=g(K);de=S($e,"\u{1F60E}"),$e.forEach(u),fe.forEach(u),he=x(ne),Y(F.$$.fragment,ne),ne.forEach(u),q.forEach(u),this.h()},h(){Re(t.src,a="/login-bg-video-blurred.mp4")||h(t,"src",a),h(t,"type","video/mp4"),h(e,"class",s="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(o[0]?"invert-[0.95] blur-3xl ":"blur-2xl")),e.autoplay="autoplay",e.loop="loop",e.muted=!0,h(e,"defaultmuted",""),e.playsInline=!0,h(e,"oncontextmenu","return false;"),h(e,"preload","auto"),h(y,"class","text-2xl font-Nunito "),h(r,"class","grid grid-rows-1"),h(n,"class","h-[60vh] flex justify-center items-center text-center"),h(C,"class",o[2]),h(A,"class","text-5xl font-Poppins text-center pb-7 "),h(I,"id","step1"),h(I,"class","hover:scale-105 duration-500 "),h(w,"class",o[2]),h(f,"class","text-5xl font-Poppins text-center pb-7"),h(_,"id","step2"),h(_,"class","duration-500 "),h(j,"class",o[2]),h(M,"class","text-5xl font-Poppins text-center "),h(J,"id","reviews"),h(J,"class","mb-[200px] sm:mb-[500px] duration-500 "),h(l,"class","grid grid-cols-1 gap-y-52 lg:gap-y-64")},m(v,V){T(v,e,V),d(e,t),T(v,i,V),T(v,l,V),d(l,n),d(n,r),b&&b.m(r,null),d(r,c),d(r,y),d(y,B),d(l,L),d(l,I),d(I,A),d(A,C),d(C,H),d(I,G),Z($,I,null),d(l,U),d(l,_),d(_,f),d(f,w),d(w,k),d(_,W),Z(R,_,null),d(l,O),d(l,J),d(J,M),d(M,j),d(j,ce),d(M,K),d(K,de),d(J,he),Z(F,J,null),N=!0,ue||(ge=[Q(y,"click",o[3]),Q(y,"keydown",o[4]),Q(A,"click",o[5]),Q(f,"click",o[6]),Q(M,"click",o[7])],ue=!0)},p(v,[V]){(!N||V&1&&s!==(s="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(v[0]?"invert-[0.95] blur-3xl ":"blur-2xl")))&&h(e,"class",s),v[1]?b?(b.p(v,V),V&2&&P(b,1)):(b=Te(v),b.c(),P(b,1),b.m(r,c)):b&&(b.d(1),b=null),(!N||V&4)&&h(C,"class",v[2]),(!N||V&4)&&h(w,"class",v[2]),(!N||V&4)&&h(j,"class",v[2])},i(v){N||(P(b),P($.$$.fragment,v),P(R.$$.fragment,v),P(F.$$.fragment,v),N=!0)},o(v){z($.$$.fragment,v),z(R.$$.fragment,v),z(F.$$.fragment,v),N=!1},d(v){v&&u(e),v&&u(i),v&&u(l),b&&b.d(),ee($),ee(R),ee(F),ue=!1,Oe(ge)}}}function dt(o,e,t){let a,s;Me(o,ze,B=>t(0,s=B));let i=!1;je(()=>{t(1,i=!0),console.log('window.localStorage.getItem("isDarkModeLS") == true:',window.localStorage.getItem("isDarkModeLS")=="true")});const l=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},n=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},r=()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},c=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},y=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.$$.update=()=>{o.$$.dirty&1&&t(2,a=`text-transparent bg-clip-text bg-gradient-to-tr ${s?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`)},[s,i,a,l,n,r,c,y]}class vt extends re{constructor(e){super(),oe(this,e,dt,ct,ie,{})}}export{vt as default};
