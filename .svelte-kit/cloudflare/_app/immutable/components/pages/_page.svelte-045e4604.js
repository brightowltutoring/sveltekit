import{S as ae,i as se,s as le,k as p,l as v,m as g,h,n as f,b,f as H,g as ke,d as Ie,t as R,W as oe,v as j,a as P,w as F,c as D,x as O,N as u,P as $e,Q as xe,y as K,q as S,r as z,A as Q,E as He,u as re,I as Ve,J as Te,K as Be,R as Ee,a0 as Pe,p as me,G as te,C as Se,o as ze}from"../../chunks/index-1063d0c6.js";import{P as Ae}from"../../chunks/PlansCard-e3cc26c0.js";import{e as Ce,s as Je,a as Me}from"../../chunks/index-0fa359d1.js";import{p as pe}from"../../chunks/plansCardArray-d952409f.js";import"../../chunks/katex-15be85e5.js";import{b as De}from"../../chunks/store-817eb231.js";import{D as Re}from"../../chunks/Dropzone-fcc2b304.js";import"../../chunks/index-6dbc7447.js";import"../../chunks/private-2f12c45b.js";function ve(i,e,t){const s=i.slice();return s[0]=e[t],s[2]=t,s}function qe(i){let e,t=i[0].cardTitle+"",s;return{c(){e=p("span"),s=S(t),this.h()},l(a){e=v(a,"SPAN",{slot:!0});var n=g(e);s=z(n,t),n.forEach(h),this.h()},h(){f(e,"slot","cardTitle")},m(a,n){b(a,e,n),u(e,s)},p:Q,d(a){a&&h(e)}}}function Ne(i){let e,t=i[0].cardText+"",s,a,n,o,l;return{c(){e=p("span"),s=S(t),a=P(),n=p("p"),o=p("a"),l=S("invoice sample"),this.h()},l(r){e=v(r,"SPAN",{slot:!0});var c=g(e);s=z(c,t),a=D(c),n=v(c,"P",{});var k=g(n);o=v(k,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var A=g(o);l=z(A,"invoice sample"),A.forEach(h),k.forEach(h),c.forEach(h),this.h()},h(){f(o,"sveltekit:prefetch",""),f(o,"href",i[0].href),f(o,"class","svelte-18ymex4"),f(e,"slot","cardText")},m(r,c){b(r,e,c),u(e,s),u(e,a),u(e,n),u(n,o),u(o,l)},p:Q,d(r){r&&h(e)}}}function ge(i){let e,t,s,a,n;return t=new Ae({props:{card:i[0].card,payNowUrl:i[0].payNowUrl,payLaterUrl:i[0].payLaterUrl,$$slots:{cardText:[Ne],cardTitle:[qe]},$$scope:{ctx:i}}}),{c(){e=p("div"),j(t.$$.fragment),s=P()},l(o){e=v(o,"DIV",{});var l=g(e);F(t.$$.fragment,l),s=D(l),l.forEach(h)},m(o,l){b(o,e,l),O(t,e,null),u(e,s),n=!0},p(o,l){i=o;const r={};l&8&&(r.$$scope={dirty:l,ctx:i}),t.$set(r)},i(o){n||(H(t.$$.fragment,o),a||$e(()=>{a=xe(e,Je,{duration:1e3,easing:Ce,delay:100*i[2]}),a.start()}),n=!0)},o(o){R(t.$$.fragment,o),n=!1},d(o){o&&h(e),K(t)}}}function Ue(i){let e,t,s=[...pe].reverse().slice(1),a=[];for(let o=0;o<s.length;o+=1)a[o]=ge(ve(i,s,o));const n=o=>R(a[o],1,1,()=>{a[o]=null});return{c(){e=p("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var l=g(e);for(let r=0;r<a.length;r+=1)a[r].l(l);l.forEach(h),this.h()},h(){f(e,"class","grid grid-cols-1 lg:grid-cols-2 p-7 ")},m(o,l){b(o,e,l);for(let r=0;r<a.length;r+=1)a[r].m(e,null);t=!0},p(o,[l]){if(l&0){s=[...pe].reverse().slice(1);let r;for(r=0;r<s.length;r+=1){const c=ve(o,s,r);a[r]?(a[r].p(c,l),H(a[r],1)):(a[r]=ge(c),a[r].c(),H(a[r],1),a[r].m(e,null))}for(ke(),r=s.length;r<a.length;r+=1)n(r);Ie()}},i(o){if(!t){for(let l=0;l<s.length;l+=1)H(a[l]);t=!0}},o(o){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)R(a[l]);t=!1},d(o){o&&h(e),oe(a,o)}}}class Ge extends ae{constructor(e){super(),se(this,e,null,Ue,le,{})}}function Le(i,e,t){const s=i.slice();return s[6]=e[t],s[8]=t,s}function We(i){let e,t;return{c(){e=p("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){Pe(e.src,t="star.webp")||f(e,"src",t),f(e,"alt","star"),me(e,"width","40px"),me(e,"height","40px")},m(s,a){b(s,e,a)},p:Q,d(s){s&&h(e)}}}function je(i){let e,t,s,a,n,o,l,r,c,k,A,V,T,q,N,I,U=Array(5),_=[];for(let m=0;m<U.length;m+=1)_[m]=We(Le(i,U,m));const C=i[5].default,x=He(C,i,i[4],null);return{c(){e=p("article"),t=p("div"),s=p("h1"),a=S(i[0]),n=P(),o=p("div");for(let m=0;m<_.length;m+=1)_[m].c();l=P(),r=p("div"),c=S("on "),k=S(i[2]),A=P(),x&&x.c(),V=P(),T=p("b"),q=S(i[1]),this.h()},l(m){e=v(m,"ARTICLE",{class:!0});var y=g(e);t=v(y,"DIV",{class:!0});var w=g(t);s=v(w,"H1",{class:!0});var B=g(s);a=z(B,i[0]),B.forEach(h),n=D(w),o=v(w,"DIV",{class:!0});var M=g(o);for(let J=0;J<_.length;J+=1)_[J].l(M);M.forEach(h),l=D(w),r=v(w,"DIV",{class:!0});var G=g(r);c=z(G,"on "),k=z(G,i[2]),G.forEach(h),A=D(w),x&&x.l(w),V=D(w),T=v(w,"B",{class:!0});var L=g(T);q=z(L,i[1]),L.forEach(h),w.forEach(h),y.forEach(h),this.h()},h(){f(s,"class","svelte-1hvhqpo"),f(o,"class","flex flex-row"),f(r,"class","italic"),f(T,"class","absolute right-0 bottom-0 -my-10 mx-5 "),f(t,"class","absolute "),f(e,"class",N="prose relative "+(i[3]&&"prose-invert"))},m(m,y){b(m,e,y),u(e,t),u(t,s),u(s,a),u(t,n),u(t,o);for(let w=0;w<_.length;w+=1)_[w].m(o,null);u(t,l),u(t,r),u(r,c),u(r,k),u(t,A),x&&x.m(t,null),u(t,V),u(t,T),u(T,q),I=!0},p(m,[y]){(!I||y&1)&&re(a,m[0]),(!I||y&4)&&re(k,m[2]),x&&x.p&&(!I||y&16)&&Ve(x,C,m,m[4],I?Be(C,m[4],y,null):Te(m[4]),null),(!I||y&2)&&re(q,m[1]),(!I||y&8&&N!==(N="prose relative "+(m[3]&&"prose-invert")))&&f(e,"class",N)},i(m){I||(H(x,m),I=!0)},o(m){R(x,m),I=!1},d(m){m&&h(e),oe(_,m),x&&x.d(m)}}}function Fe(i,e,t){let s;Ee(i,De,c=>t(3,s=c));let{$$slots:a={},$$scope:n}=e,{title:o="Great physics tutor!!"}=e,{name:l="Thomas Finn"}=e,{date:r="2022-06-08"}=e;return i.$$set=c=>{"title"in c&&t(0,o=c.title),"name"in c&&t(1,l=c.name),"date"in c&&t(2,r=c.date),"$$scope"in c&&t(4,n=c.$$scope)},[o,l,r,s,n,a]}class Oe extends ae{constructor(e){super(),se(this,e,Fe,je,le,{title:0,name:1,date:2})}}const _e=[{name:"CM",title:"grade 10 math / grade 11 physics",date:"2022-07-11",body:"Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"},{name:"magnus",title:"Great help before final!",date:"2022-06-26",body:"Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"},{name:"Thomas Finn",title:"Great physics tutor!!",date:"2022-06-08",body:"He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"},{name:"felix belfoy",title:"quantitative chem",date:"2022-06-01",body:"I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"},{name:"Celia",title:"amazing IBHL physics tutor ",date:"2022-05-01",body:"Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."},{name:"fernando vc",title:"very helpful with kinematics!",date:"2021-05-03",body:"He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."},{name:"Lavinia",title:"Great Spanish tutor",date:"2021-03-03",body:"He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"},{name:"TJ Macdonald",title:"Review",date:"2021-02-10",body:"Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."},{name:"Miranda Teta",title:"IB Physics",date:"2021-02-05",body:"Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."},{name:"Efe T.",title:"IB Physics Year 1",date:"2021-02-01",body:"He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."},{name:"Parent of Rachel",title:"stellar!",date:"2020-06-03",body:"Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"},{name:"Paola A.",title:"1st yr at Brock University",date:"2020-10-27",body:"I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."},{name:"rob henriquez",title:"mohawk college tutor",date:"2020-02-18",body:"Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"},{name:"rozhina mazhar",title:"IB HL Physics",date:"2020-03-07",body:"John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"},{name:"Zaara Alam",title:"grade 12 physics",date:"2020-10-27",body:"I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"}];function ye(i,e,t){const s=i.slice();return s[0]=e[t].name,s[1]=e[t].title,s[2]=e[t].date,s[3]=e[t].body,s}function Ke(i){let e=i[3]+"",t,s;return{c(){t=S(e),s=P()},l(a){t=z(a,e),s=D(a)},m(a,n){b(a,t,n),b(a,s,n)},p:Q,d(a){a&&h(t),a&&h(s)}}}function we(i){let e,t;return e=new Oe({props:{title:i[1],name:i[0],date:i[2],$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){j(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,a){O(e,s,a),t=!0},p(s,a){const n={};a&64&&(n.$$scope={dirty:a,ctx:s}),e.$set(n)},i(s){t||(H(e.$$.fragment,s),t=!0)},o(s){R(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function Qe(i){let e,t,s,a=_e,n=[];for(let l=0;l<a.length;l+=1)n[l]=we(ye(i,a,l));const o=l=>R(n[l],1,1,()=>{n[l]=null});return{c(){e=p("div"),t=p("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var r=g(e);t=v(r,"DIV",{class:!0});var c=g(t);for(let k=0;k<n.length;k+=1)n[k].l(c);c.forEach(h),r.forEach(h),this.h()},h(){f(t,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0"),f(e,"class","scale-90")},m(l,r){b(l,e,r),u(e,t);for(let c=0;c<n.length;c+=1)n[c].m(t,null);s=!0},p(l,[r]){if(r&0){a=_e;let c;for(c=0;c<a.length;c+=1){const k=ye(l,a,c);n[c]?(n[c].p(k,r),H(n[c],1)):(n[c]=we(k),n[c].c(),H(n[c],1),n[c].m(t,null))}for(ke(),c=a.length;c<n.length;c+=1)o(c);Ie()}},i(l){if(!s){for(let r=0;r<a.length;r+=1)H(n[r]);s=!0}},o(l){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)R(n[r]);s=!1},d(l){l&&h(e),oe(n,l)}}}class Ye extends ae{constructor(e){super(),se(this,e,null,Qe,le,{})}}function be(i){let e,t,s;return{c(){e=p("div"),t=S("Math, Physics ... Online!"),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=g(e);t=z(n,"Math, Physics ... Online!"),n.forEach(h),this.h()},h(){f(e,"class","text-6xl font-Poppins pb-4")},m(a,n){b(a,e,n),u(e,t)},i(a){s||$e(()=>{s=xe(e,Me,{duration:500}),s.start()})},o:Q,d(a){a&&h(e)}}}function Ze(i){let e,t,s,a,n,o,l,r,c,k,A,V,T,q,N,I,U,_,C,x,m,y,w,B,M,G,L,J,W,ne,ie,$=i[0]&&be();return I=new Re({props:{textSizeTW:"text-2xl"}}),y=new Ge({}),J=new Ye({}),{c(){e=p("main"),t=p("video"),n=P(),o=p("div"),l=p("div"),$&&$.c(),r=P(),c=p("div"),k=S("\u{1F449} click for reviews"),A=P(),V=p("div"),T=p("p"),q=S("1. Upload your homework"),N=P(),j(I.$$.fragment),U=P(),_=p("div"),C=p("p"),x=S("2. Schedule a Session"),m=P(),j(y.$$.fragment),w=P(),B=p("div"),M=p("p"),G=S("3. Do Some Reading \u{1F60E}"),L=P(),j(J.$$.fragment),this.h()},l(d){e=v(d,"MAIN",{class:!0});var E=g(e);t=v(E,"VIDEO",{controlslist:!0,src:!0,class:!0}),g(t).forEach(h),E.forEach(h),n=D(d),o=v(d,"DIV",{class:!0});var ce=g(o);l=v(ce,"DIV",{class:!0});var Y=g(l);$&&$.l(Y),r=D(Y),c=v(Y,"DIV",{class:!0});var he=g(c);k=z(he,"\u{1F449} click for reviews"),he.forEach(h),Y.forEach(h),ce.forEach(h),A=D(d),V=v(d,"DIV",{id:!0,class:!0});var Z=g(V);T=v(Z,"P",{class:!0});var de=g(T);q=z(de,"1. Upload your homework"),de.forEach(h),N=D(Z),F(I.$$.fragment,Z),Z.forEach(h),U=D(d),_=v(d,"DIV",{id:!0,class:!0});var X=g(_);C=v(X,"P",{class:!0});var ue=g(C);x=z(ue,"2. Schedule a Session"),ue.forEach(h),m=D(X),F(y.$$.fragment,X),X.forEach(h),w=D(d),B=v(d,"DIV",{id:!0,class:!0});var ee=g(B);M=v(ee,"P",{class:!0});var fe=g(M);G=z(fe,"3. Do Some Reading \u{1F60E}"),fe.forEach(h),L=D(ee),F(J.$$.fragment,ee),ee.forEach(h),this.h()},h(){t.autoplay=!0,t.loop=!0,t.muted=!0,t.playsInline=!0,f(t,"controlslist","nodownload"),Pe(t.src,s="/login-bg-video-blurred.mp4")||f(t,"src",s),f(t,"class",a="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(i[1]?"invert-[0.95] blur-3xl ":"blur-2xl")),f(e,"class","overflow-x-hidden"),f(c,"class","text-lg font-Nunito "),f(l,"class","grid grid-rows-1"),f(o,"class","h-3/5 flex justify-center items-center text-center"),f(T,"class","text-5xl font-Poppins text-center pb-7 "),f(V,"id","step1"),f(V,"class","-z-50 mt-80 hover:scale-105 duration-500 "),f(C,"class","text-5xl font-Poppins text-center pb-7"),f(_,"id","step2"),f(_,"class","-z-50 mt-80 duration-500 "),f(M,"class","text-5xl font-Poppins text-center "),f(B,"id","reviews"),f(B,"class","-z-50 mt-80 duration-500 ")},m(d,E){b(d,e,E),u(e,t),b(d,n,E),b(d,o,E),u(o,l),$&&$.m(l,null),u(l,r),u(l,c),u(c,k),b(d,A,E),b(d,V,E),u(V,T),u(T,q),u(V,N),O(I,V,null),b(d,U,E),b(d,_,E),u(_,C),u(C,x),u(_,m),O(y,_,null),b(d,w,E),b(d,B,E),u(B,M),u(M,G),u(B,L),O(J,B,null),W=!0,ne||(ie=[te(c,"click",i[2]),te(T,"click",i[3]),te(C,"click",i[4]),te(M,"click",i[5])],ne=!0)},p(d,[E]){(!W||E&2&&a!==(a="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(d[1]?"invert-[0.95] blur-3xl ":"blur-2xl")))&&f(t,"class",a),d[0]?$?E&1&&H($,1):($=be(),$.c(),H($,1),$.m(l,r)):$&&($.d(1),$=null)},i(d){W||(H($),H(I.$$.fragment,d),H(y.$$.fragment,d),H(J.$$.fragment,d),W=!0)},o(d){R(I.$$.fragment,d),R(y.$$.fragment,d),R(J.$$.fragment,d),W=!1},d(d){d&&h(e),d&&h(n),d&&h(o),$&&$.d(),d&&h(A),d&&h(V),K(I),d&&h(U),d&&h(_),K(y),d&&h(w),d&&h(B),K(J),ne=!1,Se(ie)}}}function Xe(i,e,t){let s;Ee(i,De,c=>t(1,s=c));let a=!1;return ze(()=>{t(0,a=!0)}),[a,s,()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},()=>{window.scrollTo({top:0,behavior:"smooth"})}]}class ct extends ae{constructor(e){super(),se(this,e,Xe,Ze,le,{})}}export{ct as default};