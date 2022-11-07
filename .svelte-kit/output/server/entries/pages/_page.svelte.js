import { c as create_ssr_component, j as each, v as validate_component, e as escape, a as subscribe, o as onDestroy, d as add_attribute } from "../../chunks/index.js";
import { P as PlansCard } from "../../chunks/PlansCard.js";
import { p as plansCardArray } from "../../chunks/plansCardArray.js";
import { D as Dropzone_1 } from "../../chunks/Dropzone.js";
import { a as isDarkMode } from "../../chunks/store.js";
const PlansComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"grid grid-cols-1 lg:grid-cols-2 "}">
  ${each(plansCardArray.slice(0, 2), (item, i) => {
    return `<div>
      ${validate_component(PlansCard, "PlansCard").$$render(
      $$result,
      {
        card: item.card,
        payNowUrl: item.payNowUrl,
        payLaterUrl: item.payLaterUrl
      },
      {},
      {
        cardText: () => {
          return `<span slot="${"cardText"}">${escape(item.cardText)}
          
          
        </span>`;
        },
        cardTitle: () => {
          return `<span slot="${"cardTitle"}">${escape(item.cardTitle)} </span>`;
        },
        default: () => {
          return `
        

        
      `;
        }
      }
    )}
    </div>`;
  })}
</div>`;
});
const reviewCreator_svx_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1hvhqpo{margin:0;padding:0}",
  map: null
};
const ReviewCreator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { title = "Great physics tutor!!" } = $$props;
  let { name = "Thomas Finn" } = $$props;
  let { date = "2022-06-08" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css);
  $$unsubscribe_isDarkMode();
  return `<article class="${"prose relative " + escape($isDarkMode && "prose-invert", true) + " md:pb-[5vw]"}"><div class="${"absolute "}"><h1 class="${"svelte-1hvhqpo"}">${escape(title)}</h1>
    <div class="${"flex flex-row"}">${each(Array(5), (_, i) => {
    return `<img loading="${"lazy "}" src="${"star.webp"}" alt="${"star"}" style="${"width:40px; height:40px"}" class="${"hover:scale-150 duration-300"}">`;
  })}</div>
    <div class="${"italic"}">on ${escape(date)}</div>
    ${slots.default ? slots.default({}) : ``}
    <b class="${"absolute right-0 bottom-0 -my-10 mx-5 "}">${escape(name)}</b></div></article>`;
});
const reviews = [
  {
    name: "CM",
    title: "grade 10 math / grade 11 physics",
    date: "2022-07-11",
    body: "Although a bit reluctant to try out the online tutoring John was extremely prepared and had no issues helping my daughter with her french-based courses (I shadowed a few sessions Jon  .. the french jokes were also much appreciated :). We'll be going with him again in the upcoming school year!"
  },
  {
    name: "magnus",
    title: "Great help before final!",
    date: "2022-06-26",
    body: "Waves & oscillation was not covered so well by my teacher ... the session + mock test really helped out before my final exam!"
  },
  {
    name: "Thomas Finn",
    title: "Great physics tutor!!",
    date: "2022-06-08",
    body: "He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"
  },
  {
    name: "felix belfoy",
    title: "quantitative chem",
    date: "2022-06-01",
    body: "I only had him for one session since my chemistry tutor got sick before my final \u{1F614}. Jon came to my rescue and even created a personal page with session notes!! Awesome tutor!"
  },
  {
    name: "Celia",
    title: "amazing IBHL physics tutor ",
    date: "2022-05-01",
    body: "Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."
  },
  {
    name: "fernando vc",
    title: "very helpful with kinematics!",
    date: "2021-05-03",
    body: "He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."
  },
  {
    name: "Lavinia",
    title: "Great Spanish tutor",
    date: "2021-03-03",
    body: "He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"
  },
  {
    name: "TJ Macdonald",
    title: "Review",
    date: "2021-02-10",
    body: "Jon was great at understanding how to best teach me the content if I didn't fully understand at first, and broke it down into simple steps for me. he was also great at knowing when I didn't fully understand something and would clarify it easily without me having to ask which was awesome really glad to have him in my conner for tests and assignments."
  },
  {
    name: "Miranda Teta",
    title: "IB Physics",
    date: "2021-02-05",
    body: "Jon started tutoring me in my first year of IB Physics, a very challenging course in which I had trouble understanding. He found creative ways for me to comprehend the subject and whenever I still couldn't understand, he would try other ways until I felt comfortable with the topic. He goes out of his way to make sure get the help I need and. after a few tutoring sessions, I started getting a deeper understanding of my course, which am very grateful for."
  },
  {
    name: "Efe T.",
    title: "IB Physics Year 1",
    date: "2021-02-01",
    body: "He helps through the process of answering each question by helping with each step. From test preparation to experiments, he has assisted me with every problem have encountered. He is also a fun person to talk to and a very friendly person."
  },
  {
    name: "Parent of Rachel",
    title: "stellar!",
    date: "2020-06-03",
    body: "Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years, but he came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online. The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"
  },
  {
    name: "Paola A.",
    title: "1st yr at Brock University",
    date: "2020-10-27",
    body: "I had an awesome experience with Jon. I was a BioSci student at Brock and really needed help with Physics 1P91 and Calculus. He was clear, structured, patient and thorough. I survived! With Physics being one of my best classes."
  },
  {
    name: "rob henriquez",
    title: "mohawk college tutor",
    date: "2020-02-18",
    body: "Jon makes learning physics and math intuitive. He finds creative ways of teaching and is passionate about your success. I highly recommend him!!"
  },
  {
    name: "rozhina mazhar",
    title: "IB HL Physics",
    date: "2020-03-07",
    body: "John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"
  },
  {
    name: "Zaara Alam",
    title: "grade 12 physics",
    date: "2020-10-27",
    body: "I am currently being tutored by Jon, and so far having an amazing experience. He is always prepared with new material and tests perfectly fit for each student's needs. He is helping me now with grade 12 physics, and his fun and effective way teaching makes learning much more enjoyable! He also goes out of his way to make his own special formula and study sheets that are very detailed and helpful. He always explains things clearly and with enthusiasm \u{1F642} am now confident that I'll be able to succeed in physics because of his great skills \u{1F600}"
  }
];
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div class="${"scale-90 "}"><div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0"}">${each(reviews, ({ name, title, date, body }) => {
    return `${validate_component(ReviewCreator, "ReviewCreator").$$render($$result, { title, name, date }, {}, {
      default: () => {
        return `${escape(body)}
      `;
      }
    })}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gradientTextColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  onDestroy(() => {
    setTimeout(
      () => {
        window.scrollTo({ top: 20, behavior: "smooth" });
      },
      0
    );
  });
  gradientTextColor = `text-transparent bg-clip-text bg-gradient-to-tr ${$isDarkMode ? "from-red-300 via-white to-white" : "from-indigo-600 to-black"}`;
  $$unsubscribe_isDarkMode();
  return `<video loading="${"lazy"}" controlslist="${"nodownload"}" playsinline autoplay muted loop class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}" src="${"/login-bg-video-blurred.mp4"}"></video>

<div class="${"grid grid-cols-1 gap-y-52 lg:gap-y-64"}">
  <div class="${"h-[60vh] flex justify-center items-center text-center"}"><div class="${"grid grid-rows-1"}">${``}

      <div class="${"text-2xl font-Nunito font-thin"}">\u{1F449} click for reviews
      </div></div></div>

  
  <div id="${"step1"}" class="${"hover:scale-105 duration-500 "}"><p class="${"text-5xl font-Poppins text-center pb-7 "}"><span${add_attribute("class", gradientTextColor, 0)}>1. Upload your homework </span></p>

    ${validate_component(Dropzone_1, "Dropzone").$$render($$result, { textSizeTW: "text-2xl" }, {}, {})}</div>

  
  <div id="${"step2"}" class="${"duration-500 "}"><p class="${"text-5xl font-Poppins text-center pb-7"}"><span${add_attribute("class", gradientTextColor, 0)}>2. Schedule a Session </span></p>

    ${validate_component(PlansComponent, "PlansComponent").$$render($$result, {}, {}, {})}</div>

  

  <div id="${"reviews"}" class="${"mb-[200px] sm:mb-[500px] duration-500 "}"><p class="${"text-5xl font-Poppins text-center "}"><span${add_attribute("class", gradientTextColor, 0)}>3. Do Some Reading </span><span>\u{1F60E}
      </span></p>
    ${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}</div></div>






`;
});
export {
  Page as default
};
