import { c as create_ssr_component, a as subscribe } from "../../../chunks/index.js";
import { s as showLoginModal, a as showHomeworkModal } from "../../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".faqContainer.svelte-1yyztah.svelte-1yyztah{display:grid;place-content:center}:root{--light-green:rgb(230, 255, 249);--green:rgb(89, 208, 174);--red:rgb(230, 59, 96);--light-red:rgb(243, 186, 198);--borderRadius:15px}@keyframes svelte-1yyztah-sweep{0%{opacity:0;margin-top:-15px}100%{opacity:1;margin-top:0px}}details.svelte-1yyztah>summary.svelte-1yyztah{list-style:none}details.svelte-1yyztah>summary.svelte-1yyztah::-webkit-details-marker{display:none}details.svelte-1yyztah.svelte-1yyztah{font-family:Nunito, sans-serif;border:0px solid #eee;border-radius:var(--borderRadius);padding:0.5em 0.5em 0;font-size:18px}@media screen and (min-width: 768px){details.svelte-1yyztah.svelte-1yyztah{width:60vw}}@media screen and (max-width: 768px){details.svelte-1yyztah.svelte-1yyztah{width:80vw}}summary.svelte-1yyztah.svelte-1yyztah{margin:-0.5em -0.5em 0;padding:0.5em;border-radius:var(--borderRadius) var(--borderRadius) 0 0}details.svelte-1yyztah.svelte-1yyztah:hover{background:#ddd}body.dark-mode details.svelte-1yyztah.svelte-1yyztah:hover{background:#211f51}details.svelte-1yyztah p.svelte-1yyztah{padding:10px}details.svelte-1yyztah a.svelte-1yyztah{color:var(--red)}details.svelte-1yyztah a.svelte-1yyztah:hover{color:rgb(46, 126, 253)}details[open].svelte-1yyztah.svelte-1yyztah{padding:0.5em;background:var(--light-green);animation:svelte-1yyztah-sweep 0.25s ease-in-out;margin-bottom:10px}body.dark-mode details[open].svelte-1yyztah.svelte-1yyztah{background:var(--light-green);color:black}details[open].svelte-1yyztah summary.svelte-1yyztah{border-bottom:1px solid #aaa;margin-bottom:0.5em;background-color:var(--green);outline:none}details[open].svelte-1yyztah summary.highlight.svelte-1yyztah{background:var(--red);color:white;transition:0.2s ease-in-out}details[open].svelte-1yyztah.svelte-1yyztah:has(summary.highlight){background:var(--light-red);transition:0.2s ease-in-out}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showLoginModal;
  let $$unsubscribe_showHomeworkModal;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_showLoginModal();
  $$unsubscribe_showHomeworkModal();
  return `





<div class="${"grid place-content-center py-16"}">
  <span class="${"font-Poppins text-center text-5xl font-bold "}">FAQ
  </span></div>


<div class="${"faqContainer svelte-1yyztah"}"><details class="${"svelte-1yyztah"}"><summary class="${"highlight svelte-1yyztah"}">How are we screen-sharing? Zoom? </summary>

    Nope, our sessions happen on-site
    <a data-sveltekit-preload-data href="${"/classroom"}" class="${"svelte-1yyztah"}">in the classroom</a>.
  </details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">Is it possible to access all my session content in one place?
    </summary>
    <p class="${"svelte-1yyztah"}">Sure can! Contact us directly to set up a personalized page, or check the
      option when booking! You will be <button class="${"text-rose-500"}">redirected to your personal page upon logging in
      </button>.
    </p></details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">How do I share homework? </summary>
    <p class="${"svelte-1yyztah"}">Click on &quot;<button class="${"text-rose-500"}">Homework</button>&quot; in the navbar and submit screenshots/ PDFs/ etc.
    </p>

    <p class="${"svelte-1yyztah"}">For added convenience in future submissions, consider downloading the app
      on your mobile device. Using Safari on iOS devices:
    </p>
    <span class="${"flex flex-col justify-center items-center gap-x-2 "}"><span class="${"flex flex-row gap-x-1"}">Click share icon
        <img class="${"w-5 h-5 "}" src="${"/safari-share-icon.png"}" alt="${"safari share icon"}"></span>

      <span>Click &quot;Add to Homescreen&quot;</span></span>
    <p class="${"svelte-1yyztah"}">Using Chrome on Android devices, you should be prompted automatically
      (usually at the bottom of the screen).
    </p></details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">How do I pay? </summary>
    <p class="${"svelte-1yyztah"}">On the <a data-sveltekit-preload-data href="${"/plans"}" class="${"svelte-1yyztah"}">plans page</a> you can
      either &quot;pay now&quot; or &quot;pay later&quot;, per service.
    </p>
    <p class="${"svelte-1yyztah"}">After booking details have been confirmed the &quot;pay now&quot; option will
      redirect you to a checkout page. With &quot;pay later&quot; we send a custom STRIPE
      invoice to the preferred email. In both cases you will have the option to
      pay with credit card, Apple Pay, or Google Pay!
    </p></details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">How do I book multiple sessions at once? </summary>

    <p class="${"svelte-1yyztah"}">We will book the remaining times for you at the beginning / end of the
      scheduled session.
    </p></details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">What subjects do you cover? </summary>

    <p class="${"svelte-1yyztah"}"><span class="${"font-Poppins font-bold"}">MATHEMATICS</span>\xA0 Calculus \u2022
      Trigonometry \u2022 Advanced Functions \u2022 Complex Numbers \u2022 Linear Algebra \u2022
      Probability and Statistics \xA0\xA0<span class="${"font-Poppins font-bold"}">PHYSICS</span>
      \xA0Kinematics \u2022 Mechanics \u2022 Thermodynamics \u2022 Fluids \u2022 Electricity &amp; Magnetism
      \u2022 Circuit Analysis \u2022 Waves \u2022 Optics \u2022 Atomic &amp; Quantum Physics \u2022 Special Relativity
      \xA0\xA0<span class="${"font-Poppins font-bold"}">SPANISH</span>
      \xA0 Pronunciation \u2022 Grammatical Rules \u2022 Practical Examples

      <br><br>
      <b>Levels:</b> IB / AP / OSSD (9-12) / College &amp; University
    </p></details>

  <details class="${"svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">How are mock tests administered? </summary>
    <p class="${"svelte-1yyztah"}">After booking a &quot;Mock&quot; session on <a data-sveltekit-preload-data href="${"/plans"}" class="${"svelte-1yyztah"}">plans</a>, the student attends a live session where a prepared examination \u2014 in
      the form of a Google Forms link \u2014 will be shared at the beginning of the
      session. The topics are chosen based on input during booking, as well as
      prior discussion with the student.
    </p>
    <p class="${"svelte-1yyztah"}"><span class="${"font-Poppins font-bold"}">In regards to completed questions only:</span> answers are discussed during session time. A detailed, digital solution key
      is also available at a premium, to be populated on your personal page.
    </p></details>

  <details class="${"group svelte-1yyztah"}"><summary class="${"svelte-1yyztah"}">I am looking to refer a friend, do you offer any discounts based on
      referrals?
    </summary>
    <p class="${"svelte-1yyztah"}">

      Great question! You can enter your referral as an input when booking; for
      this initiative we are pleased to offer a
      
      <span class="${"hover:opacity-100 group-active:opacity-100 opacity-0 text-transparent bg-clip-text bg-gradient-to-b from-rose-700 via-rose-600 to-yellow-300"}">25%
      </span>
      discount on the next applicable session!
    </p></details>
</div>`;
});
export {
  Page as default
};
