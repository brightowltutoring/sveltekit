import{c as p,a as u,e as t,j as g,v as c,o as m}from"../../chunks/index.js";import{L as v}from"../../chunks/LazyMount2.js";import{i as w,a as f}from"../../chunks/store.js";import{I as b}from"../../chunks/InView.js";const x={code:"h1.svelte-1hvhqpo{margin:0;padding:0}",map:null},$=p((s,o,n,h)=>{let a,r;r=u(w,d=>a=d);let{title:e="Great physics tutor!!"}=o,{name:i="Thomas Finn"}=o,{date:l="2022-06-08"}=o;return o.title===void 0&&n.title&&e!==void 0&&n.title(e),o.name===void 0&&n.name&&i!==void 0&&n.name(i),o.date===void 0&&n.date&&l!==void 0&&n.date(l),s.css.add(x),r(),`<article class="${"prose relative "+t(a&&"prose-invert",!0)+" md:pb-[5vw]"}"><div class="absolute"><h1 class="svelte-1hvhqpo">${t(e)}</h1>
    <div class="flex flex-row">${g(Array(5),(d,_)=>`${c(b,"InView").$$render(s,{single:!0,once:!0,onview:y=>{console.log("\u{1F4AB}"),y.classList.remove("opacity-0"),y.src="/star.webp"}},{},{default:()=>`<img src="" class="opacity-0 transition-opacity duration-300 ease-in hover:scale-125" alt="star" style="width:40px; height:40px">
       
      `})}`)}</div>
    <div class="italic">on ${t(l)}</div>
    ${h.default?h.default({}):""}
    <b class="absolute right-0 bottom-0 -my-10 mx-5 ">${t(i)}</b></div></article>`}),k=[{name:"CM",title:"grade 10 math / grade 11 physics",date:"2022-07-11",body:"Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"},{name:"magnus",title:"Great help before final!",date:"2022-06-26",body:"Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"},{name:"Thomas Finn",title:"Great physics tutor!!",date:"2022-06-08",body:"He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"},{name:"felix belfoy",title:"quantitative chem",date:"2022-06-01",body:"I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"},{name:"Celia",title:"amazing IBHL physics tutor ",date:"2022-05-01",body:"Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."},{name:"fernando vc",title:"very helpful with kinematics!",date:"2021-05-03",body:"He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."},{name:"Lavinia",title:"Great Spanish tutor",date:"2021-03-03",body:"He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"},{name:"TJ Macdonald",title:"Review",date:"2021-02-10",body:"Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."},{name:"Miranda Teta",title:"IB Physics",date:"2021-02-05",body:"Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."},{name:"Efe T.",title:"IB Physics Year 1",date:"2021-02-01",body:"He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."},{name:"Parent of Rachel",title:"stellar!",date:"2020-06-03",body:"Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"},{name:"Paola A.",title:"1st yr at Brock University",date:"2020-10-27",body:"I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."},{name:"rob henriquez",title:"mohawk college tutor",date:"2020-02-18",body:"Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"},{name:"rozhina mazhar",title:"IB HL Physics",date:"2020-03-07",body:"John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"},{name:"Zaara Alam",title:"grade 12 physics",date:"2020-10-27",body:"I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"}],I=p((s,o,n,h)=>`<div class="scale-90">

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0">${g(k,({name:a,title:r,date:e,body:i})=>`${c($,"ReviewCreator").$$render(s,{title:r,name:a,date:e},{},{default:()=>`${t(i)}
      `})}`)}</div></div>`);const H={code:".page.svelte-iq6ytm{display:grid;grid-gap:10px;grid-template-rows:repeat(auto-fit, minmax(100vh, 1fr))}",map:null},R=p((s,o,n,h)=>{let a,r,e,i,l;return i=u(w,d=>e=d),l=u(f,d=>d),s.css.add(H),a=`text-transparent bg-clip-text bg-gradient-to-tr ${e?"from-red-300 via-white to-white":"from-indigo-600 to-black"}`,r=e?"#1d1c43":"#ddd",i(),l(),`<video loading="lazy" controlslist="nodownload" playsinline autoplay muted loop class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full "+t(e?"invert-[0.95] blur-3xl ":"blur-2xl",!0)}" src="/login-bg-video-blurred.mp4"></video>

${`<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
    <div class="h-[60vh] flex justify-center items-center text-center"><div class="grid grid-rows-1"></div></div>

    
    <div id="step1" class="hover:scale-105 duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7"><span class="${t(m(a),!0)+" svelte-iq6ytm"}">1. Upload your homework </span></button>

      
      
      <button style="${"box-shadow: inset 0 -10px 10px "+t(r,!0)+"; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl text-3xl w-[65vw] sm:w-[60vw] h-[60vh] mx-auto group"><div class="font-Nunito group-hover:animate-pulse text-2xl">Drop it like it&#39;s \u{1F525}
        </div></button></div>

    
    <div id="step2" class="duration-500 grid place-content-center"><button class="text-5xl font-Poppins text-center pb-7 "><span class="${t(m(a),!0)+" svelte-iq6ytm"}">2. Schedule a Session </span></button>

      
      ${c(v,"LazyMount2").$$render(s,{Import:async()=>await import("../../chunks/PlansComponent.js")},{},{})}

      

      
      

      
      

      </div>

    
    <div id="reviews" class="duration-500 mb-[200px] sm:mb-[500px]"><button class="text-5xl font-Poppins w-full flex justify-center"><span class="${t(m(a),!0)+" svelte-iq6ytm"}">3. Do Some Reading <span class="text-black">\u{1F60E} </span></span></button>
      ${c(I,"Reviews").$$render(s,{},{},{})}</div></div>`}








`});export{R as default};
