import{S as le,i as ne,s as oe,k as m,l as p,m as g,h as u,n as h,b as z,f as D,g as Se,d as Te,t as U,Y as fe,w as Y,a as P,x as K,c as x,y as Z,P as d,R as Be,T as Ae,z as Q,q as H,r as V,B as X,F as Re,u as ue,J as Me,K as Ne,L as qe,U as ze,a2 as Ce,p as Ie,H as F,D as Ue,o as Le}from"../../chunks/index-2bdb53b3.js";import{P as je}from"../../chunks/PlansCard-915789ec.js";import{e as Fe,s as Ge,a as We}from"../../chunks/index-2fe84d9c.js";import{p as $e}from"../../chunks/plansCardArray-9c66b635.js";import{D as Oe}from"../../chunks/Dropzone-bbb0d1e0.js";import{a as Je}from"../../chunks/store-fa0b0b0c.js";function Ee(r,e,t){const a=r.slice();return a[0]=e[t],a[2]=t,a}function Ye(r){let e,t=r[0].cardTitle+"",a;return{c(){e=m("span"),a=H(t),this.h()},l(s){e=p(s,"SPAN",{slot:!0});var n=g(e);a=V(n,t),n.forEach(u),this.h()},h(){h(e,"slot","cardTitle")},m(s,n){z(s,e,n),d(e,a)},p:X,d(s){s&&u(e)}}}function Ke(r){let e,t=r[0].cardText+"",a,s,n,o,l;return{c(){e=m("span"),a=H(t),s=P(),n=m("p"),o=m("a"),l=H("invoice sample"),this.h()},l(i){e=p(i,"SPAN",{slot:!0});var c=g(e);a=V(c,t),s=x(c),n=p(c,"P",{});var _=g(n);o=p(_,"A",{"data-sveltekit-prefetch":!0,href:!0,class:!0});var C=g(o);l=V(C,"invoice sample"),C.forEach(u),_.forEach(u),c.forEach(u),this.h()},h(){h(o,"data-sveltekit-prefetch",""),h(o,"href",r[0].href),h(o,"class","svelte-18ymex4"),h(e,"slot","cardText")},m(i,c){z(i,e,c),d(e,a),d(e,s),d(e,n),d(n,o),d(o,l)},p:X,d(i){i&&u(e)}}}function Pe(r){let e,t,a,s,n;return t=new je({props:{card:r[0].card,payNowUrl:r[0].payNowUrl,payLaterUrl:r[0].payLaterUrl,$$slots:{cardText:[Ke],cardTitle:[Ye]},$$scope:{ctx:r}}}),{c(){e=m("div"),Y(t.$$.fragment),a=P()},l(o){e=p(o,"DIV",{});var l=g(e);K(t.$$.fragment,l),a=x(l),l.forEach(u)},m(o,l){z(o,e,l),Z(t,e,null),d(e,a),n=!0},p(o,l){r=o;const i={};l&8&&(i.$$scope={dirty:l,ctx:r}),t.$set(i)},i(o){n||(D(t.$$.fragment,o),s||Be(()=>{s=Ae(e,Ge,{duration:1e3,easing:Fe,delay:100*r[2]}),s.start()}),n=!0)},o(o){U(t.$$.fragment,o),n=!1},d(o){o&&u(e),Q(t)}}}function Ze(r){let e,t,a=$e.slice(0,2),s=[];for(let o=0;o<a.length;o+=1)s[o]=Pe(Ee(r,a,o));const n=o=>U(s[o],1,1,()=>{s[o]=null});return{c(){e=m("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0});var l=g(e);for(let i=0;i<s.length;i+=1)s[i].l(l);l.forEach(u),this.h()},h(){h(e,"class","grid grid-cols-1 lg:grid-cols-2 p-7 ")},m(o,l){z(o,e,l);for(let i=0;i<s.length;i+=1)s[i].m(e,null);t=!0},p(o,[l]){if(l&0){a=$e.slice(0,2);let i;for(i=0;i<a.length;i+=1){const c=Ee(o,a,i);s[i]?(s[i].p(c,l),D(s[i],1)):(s[i]=Pe(c),s[i].c(),D(s[i],1),s[i].m(e,null))}for(Se(),i=a.length;i<s.length;i+=1)n(i);Te()}},i(o){if(!t){for(let l=0;l<a.length;l+=1)D(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)U(s[l]);t=!1},d(o){o&&u(e),fe(s,o)}}}class Qe extends le{constructor(e){super(),ne(this,e,null,Ze,oe,{})}}function Xe(r,e,t){const a=r.slice();return a[6]=e[t],a[8]=t,a}function et(r){let e,t;return{c(){e=m("img"),this.h()},l(a){e=p(a,"IMG",{loading:!0,src:!0,alt:!0,style:!0,class:!0}),this.h()},h(){h(e,"loading","lazy "),Ce(e.src,t="star.webp")||h(e,"src",t),h(e,"alt","star"),Ie(e,"width","40px"),Ie(e,"height","40px"),h(e,"class","hover:scale-150 duration-300")},m(a,s){z(a,e,s)},p:X,d(a){a&&u(e)}}}function tt(r){let e,t,a,s,n,o,l,i,c,_,C,$,I,S,L,T,N=Array(5),J=[];for(let f=0;f<N.length;f+=1)J[f]=et(Xe(r,N,f));const B=r[5].default,y=Re(B,r,r[4],null);return{c(){e=m("article"),t=m("div"),a=m("h1"),s=H(r[0]),n=P(),o=m("div");for(let f=0;f<J.length;f+=1)J[f].c();l=P(),i=m("div"),c=H("on "),_=H(r[2]),C=P(),y&&y.c(),$=P(),I=m("b"),S=H(r[1]),this.h()},l(f){e=p(f,"ARTICLE",{class:!0});var E=g(e);t=p(E,"DIV",{class:!0});var k=g(t);a=p(k,"H1",{class:!0});var q=g(a);s=V(q,r[0]),q.forEach(u),n=x(k),o=p(k,"DIV",{class:!0});var W=g(o);for(let M=0;M<J.length;M+=1)J[M].l(W);W.forEach(u),l=x(k),i=p(k,"DIV",{class:!0});var A=g(i);c=V(A,"on "),_=V(A,r[2]),A.forEach(u),C=x(k),y&&y.l(k),$=x(k),I=p(k,"B",{class:!0});var R=g(I);S=V(R,r[1]),R.forEach(u),k.forEach(u),E.forEach(u),this.h()},h(){h(a,"class","svelte-1hvhqpo"),h(o,"class","flex flex-row"),h(i,"class","italic"),h(I,"class","absolute right-0 bottom-0 -my-10 mx-5 "),h(t,"class","absolute "),h(e,"class",L="prose relative "+(r[3]&&"prose-invert")+" md:pb-[5vw]")},m(f,E){z(f,e,E),d(e,t),d(t,a),d(a,s),d(t,n),d(t,o);for(let k=0;k<J.length;k+=1)J[k].m(o,null);d(t,l),d(t,i),d(i,c),d(i,_),d(t,C),y&&y.m(t,null),d(t,$),d(t,I),d(I,S),T=!0},p(f,[E]){(!T||E&1)&&ue(s,f[0]),(!T||E&4)&&ue(_,f[2]),y&&y.p&&(!T||E&16)&&Me(y,B,f,f[4],T?qe(B,f[4],E,null):Ne(f[4]),null),(!T||E&2)&&ue(S,f[1]),(!T||E&8&&L!==(L="prose relative "+(f[3]&&"prose-invert")+" md:pb-[5vw]"))&&h(e,"class",L)},i(f){T||(D(y,f),T=!0)},o(f){U(y,f),T=!1},d(f){f&&u(e),fe(J,f),y&&y.d(f)}}}function at(r,e,t){let a;ze(r,Je,c=>t(3,a=c));let{$$slots:s={},$$scope:n}=e,{title:o="Great physics tutor!!"}=e,{name:l="Thomas Finn"}=e,{date:i="2022-06-08"}=e;return r.$$set=c=>{"title"in c&&t(0,o=c.title),"name"in c&&t(1,l=c.name),"date"in c&&t(2,i=c.date),"$$scope"in c&&t(4,n=c.$$scope)},[o,l,i,a,n,s]}class st extends le{constructor(e){super(),ne(this,e,at,tt,oe,{title:0,name:1,date:2})}}const xe=[{name:"CM",title:"grade 10 math / grade 11 physics",date:"2022-07-11",body:"Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"},{name:"magnus",title:"Great help before final!",date:"2022-06-26",body:"Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"},{name:"Thomas Finn",title:"Great physics tutor!!",date:"2022-06-08",body:"He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"},{name:"felix belfoy",title:"quantitative chem",date:"2022-06-01",body:"I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"},{name:"Celia",title:"amazing IBHL physics tutor ",date:"2022-05-01",body:"Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."},{name:"fernando vc",title:"very helpful with kinematics!",date:"2021-05-03",body:"He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."},{name:"Lavinia",title:"Great Spanish tutor",date:"2021-03-03",body:"He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"},{name:"TJ Macdonald",title:"Review",date:"2021-02-10",body:"Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."},{name:"Miranda Teta",title:"IB Physics",date:"2021-02-05",body:"Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."},{name:"Efe T.",title:"IB Physics Year 1",date:"2021-02-01",body:"He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."},{name:"Parent of Rachel",title:"stellar!",date:"2020-06-03",body:"Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"},{name:"Paola A.",title:"1st yr at Brock University",date:"2020-10-27",body:"I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."},{name:"rob henriquez",title:"mohawk college tutor",date:"2020-02-18",body:"Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"},{name:"rozhina mazhar",title:"IB HL Physics",date:"2020-03-07",body:"John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"},{name:"Zaara Alam",title:"grade 12 physics",date:"2020-10-27",body:"I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"}];function De(r,e,t){const a=r.slice();return a[0]=e[t].name,a[1]=e[t].title,a[2]=e[t].date,a[3]=e[t].body,a}function lt(r){let e=r[3]+"",t,a;return{c(){t=H(e),a=P()},l(s){t=V(s,e),a=x(s)},m(s,n){z(s,t,n),z(s,a,n)},p:X,d(s){s&&u(t),s&&u(a)}}}function He(r){let e,t;return e=new st({props:{title:r[1],name:r[0],date:r[2],$$slots:{default:[lt]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,s){Z(e,a,s),t=!0},p(a,s){const n={};s&64&&(n.$$scope={dirty:s,ctx:a}),e.$set(n)},i(a){t||(D(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}function nt(r){let e,t,a,s=xe,n=[];for(let l=0;l<s.length;l+=1)n[l]=He(De(r,s,l));const o=l=>U(n[l],1,1,()=>{n[l]=null});return{c(){e=m("div"),t=m("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var i=g(e);t=p(i,"DIV",{class:!0});var c=g(t);for(let _=0;_<n.length;_+=1)n[_].l(c);c.forEach(u),i.forEach(u),this.h()},h(){h(t,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0"),h(e,"class","scale-90 ")},m(l,i){z(l,e,i),d(e,t);for(let c=0;c<n.length;c+=1)n[c].m(t,null);a=!0},p(l,[i]){if(i&0){s=xe;let c;for(c=0;c<s.length;c+=1){const _=De(l,s,c);n[c]?(n[c].p(_,i),D(n[c],1)):(n[c]=He(_),n[c].c(),D(n[c],1),n[c].m(t,null))}for(Se(),c=s.length;c<n.length;c+=1)o(c);Te()}},i(l){if(!a){for(let i=0;i<s.length;i+=1)D(n[i]);a=!0}},o(l){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)U(n[i]);a=!1},d(l){l&&u(e),fe(n,l)}}}class ot extends le{constructor(e){super(),ne(this,e,null,nt,oe,{})}}function Ve(r){let e,t,a,s,n;return{c(){e=m("div"),t=H(`Math, Physics
          `),a=m("span"),s=H("... Online!"),this.h()},l(o){e=p(o,"DIV",{class:!0});var l=g(e);t=V(l,`Math, Physics
          `),a=p(l,"SPAN",{class:!0});var i=g(a);s=V(i,"... Online!"),i.forEach(u),l.forEach(u),this.h()},h(){h(a,"class",r[2]),h(e,"class","text-6xl font-Poppins pb-4 ")},m(o,l){z(o,e,l),d(e,t),d(e,a),d(a,s)},p(o,l){l&4&&h(a,"class",o[2])},i(o){n||Be(()=>{n=Ae(e,We,{duration:500}),n.start()})},o:X,d(o){o&&u(e)}}}function rt(r){let e,t,a,s,n,o,l,i,c,_,C,$,I,S,L,T,N,J,B,y,f,E,k,q,W,A,R,M,re,O,ie,ce,G,j,de,me,w=r[1]&&Ve(r);return N=new Oe({props:{textSizeTW:"text-2xl"}}),q=new Qe({}),G=new ot({}),{c(){e=m("video"),s=P(),n=m("div"),o=m("div"),l=m("div"),w&&w.c(),i=P(),c=m("div"),_=H("\u{1F449} click for reviews"),C=P(),$=m("div"),I=m("p"),S=m("span"),L=H("1. Upload your homework"),T=P(),Y(N.$$.fragment),J=P(),B=m("div"),y=m("p"),f=m("span"),E=H("2. Schedule a Session"),k=P(),Y(q.$$.fragment),W=P(),A=m("div"),R=m("p"),M=m("span"),re=H("3. Do Some Reading "),O=m("span"),ie=H("\u{1F60E}"),ce=P(),Y(G.$$.fragment),this.h()},l(v){e=p(v,"VIDEO",{loading:!0,controlslist:!0,class:!0,src:!0}),g(e).forEach(u),s=x(v),n=p(v,"DIV",{class:!0});var b=g(n);o=p(b,"DIV",{class:!0});var pe=g(o);l=p(pe,"DIV",{class:!0});var ee=g(l);w&&w.l(ee),i=x(ee),c=p(ee,"DIV",{class:!0});var ge=g(c);_=V(ge,"\u{1F449} click for reviews"),ge.forEach(u),ee.forEach(u),pe.forEach(u),C=x(b),$=p(b,"DIV",{id:!0,class:!0});var te=g($);I=p(te,"P",{class:!0});var ve=g(I);S=p(ve,"SPAN",{class:!0});var ye=g(S);L=V(ye,"1. Upload your homework"),ye.forEach(u),ve.forEach(u),T=x(te),K(N.$$.fragment,te),te.forEach(u),J=x(b),B=p(b,"DIV",{id:!0,class:!0});var ae=g(B);y=p(ae,"P",{class:!0});var _e=g(y);f=p(_e,"SPAN",{class:!0});var we=g(f);E=V(we,"2. Schedule a Session"),we.forEach(u),_e.forEach(u),k=x(ae),K(q.$$.fragment,ae),ae.forEach(u),W=x(b),A=p(b,"DIV",{id:!0,class:!0});var se=g(A);R=p(se,"P",{class:!0});var he=g(R);M=p(he,"SPAN",{class:!0});var be=g(M);re=V(be,"3. Do Some Reading "),be.forEach(u),O=p(he,"SPAN",{});var ke=g(O);ie=V(ke,"\u{1F60E}"),ke.forEach(u),he.forEach(u),ce=x(se),K(G.$$.fragment,se),se.forEach(u),b.forEach(u),this.h()},h(){h(e,"loading","lazy"),h(e,"controlslist","nodownload"),e.playsInline=!0,e.autoplay=!0,e.muted=!0,e.loop=!0,h(e,"class",t="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(r[0]?"invert-[0.95] blur-3xl ":"blur-2xl")),Ce(e.src,a="/login-bg-video-blurred.mp4")||h(e,"src",a),h(c,"class","text-2xl font-Nunito font-thin"),h(l,"class","grid grid-rows-1"),h(o,"class","h-[60vh] flex justify-center items-center text-center"),h(S,"class",r[2]),h(I,"class","text-5xl font-Poppins text-center pb-7 "),h($,"id","step1"),h($,"class","hover:scale-105 duration-500 "),h(f,"class",r[2]),h(y,"class","text-5xl font-Poppins text-center pb-7"),h(B,"id","step2"),h(B,"class","duration-500 "),h(M,"class",r[2]),h(R,"class","text-5xl font-Poppins text-center "),h(A,"id","reviews"),h(A,"class","mb-[200px] sm:mb-[500px] duration-500 "),h(n,"class","grid grid-cols-1 gap-y-52 lg:gap-y-64")},m(v,b){z(v,e,b),z(v,s,b),z(v,n,b),d(n,o),d(o,l),w&&w.m(l,null),d(l,i),d(l,c),d(c,_),d(n,C),d(n,$),d($,I),d(I,S),d(S,L),d($,T),Z(N,$,null),d(n,J),d(n,B),d(B,y),d(y,f),d(f,E),d(B,k),Z(q,B,null),d(n,W),d(n,A),d(A,R),d(R,M),d(M,re),d(R,O),d(O,ie),d(A,ce),Z(G,A,null),j=!0,de||(me=[F(c,"click",r[3]),F(c,"keydown",r[4]),F(I,"keydown",r[5]),F(I,"click",r[6]),F(y,"keydown",r[7]),F(y,"click",r[8]),F(R,"keydown",r[9]),F(R,"click",r[10])],de=!0)},p(v,[b]){(!j||b&1&&t!==(t="absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+(v[0]?"invert-[0.95] blur-3xl ":"blur-2xl")))&&h(e,"class",t),v[1]?w?(w.p(v,b),b&2&&D(w,1)):(w=Ve(v),w.c(),D(w,1),w.m(l,i)):w&&(w.d(1),w=null),(!j||b&4)&&h(S,"class",v[2]),(!j||b&4)&&h(f,"class",v[2]),(!j||b&4)&&h(M,"class",v[2])},i(v){j||(D(w),D(N.$$.fragment,v),D(q.$$.fragment,v),D(G.$$.fragment,v),j=!0)},o(v){U(N.$$.fragment,v),U(q.$$.fragment,v),U(G.$$.fragment,v),j=!1},d(v){v&&u(e),v&&u(s),v&&u(n),w&&w.d(),Q(N),Q(q),Q(G),de=!1,Ue(me)}}}function it(r,e,t){let a,s;ze(r,Je,S=>t(0,s=S));let n=!1;Le(()=>{t(1,n=!0)});const o=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},i=()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},c=()=>{document.getElementById("step2").scrollIntoView({behavior:"smooth",block:"start"})},_=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},C=()=>{document.getElementById("reviews").scrollIntoView({behavior:"smooth",block:"start"})},$=()=>{window.scrollTo({top:0,behavior:"smooth"})},I=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.$$.update=()=>{r.$$.dirty&1&&t(2,a=`text-transparent bg-clip-text bg-gradient-to-tr ${s?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`)},[s,n,a,o,l,i,c,_,C,$,I]}class pt extends le{constructor(e){super(),ne(this,e,it,rt,oe,{})}}export{pt as default};
