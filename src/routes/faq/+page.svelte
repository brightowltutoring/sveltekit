<!-- Update dec, 12 2022: first time using css has selector; doesnt yet work in firefox -->
<script>
  import { fly, fade, slide } from "svelte/transition";
  import { showHomeworkModal, showLoginModal } from "$lib/store";
  let faqContainer;
  let selectedTd;

  function highlightAndKeepOpen(td) {
    if (selectedTd) {
      // remove the existing highlight if any
      selectedTd.classList.remove("highlight");
    }
    selectedTd = td;
    selectedTd.classList.add("highlight"); // highlight the new td
    selectedTd.parentElement.open = false; // this disables closing the details element going forward
  }

  import { onMount } from "svelte";
  onMount(() => {
    faqContainer = document.querySelector(".faqContainer");

    // too annoying to change the markup manually for "Q1, .., Q8" ..so using this javascript
    faqContainer.querySelectorAll("SUMMARY").forEach((el, index) => {
      el.insertAdjacentHTML("afterbegin", `Q${index + 1}. `);
    });

    // using 'event delegation' technique (rather than querySelectorAll logic) when listening to events for multiple children elements of a common parent element
    faqContainer.addEventListener("click", (event) => {
      let target = event.target;

      if (target.tagName !== "SUMMARY") return; // commonly used ... does this matter? optimization?
      if (target.tagName === "SUMMARY") highlightAndKeepOpen(target);
    });
  });
</script>

<!-- TODO: noticed a pattern ... the markdown of this component being repetitive, makes it easier to use vanilla css approach (also the event delegation classList add logic works easiest with vanilla css) -->

<!-- in:fly={{ y: 50, duration: 800 }} -->
<div
  in:slide={{ duration: 800 }}
  class="grid place-content-center py-16"
  on:dblclick={() => {
    faqContainer.querySelectorAll("DETAILS").forEach((el) => (el.open = false));
    // closes all details elements (easter eggy)
  }}
>
  <!-- class="font-Poppins text-center text-6xl text-transparent bg-clip-text bg-gradient-to-l from-teal-500 to-pink-600 " -->
  <span in:fade class="font-Poppins text-center text-5xl font-semibold ">
    FAQ
  </span>
</div>
<!-- TODO: some weird reason I have to add 'class="highlight"' ot at least one summary element before the css/js logic can work -->
<div class="faqContainer">
  <details>
    <summary class="highlight"> How are we screen-sharing? Zoom? </summary>

    Nope, our sessions happen on-site
    <a data-sveltekit-preload-data href="/classroom"> in the classroom</a>.
  </details>

  <details>
    <summary>
      Is it possible to access all my session content in one place?
    </summary>
    <p>
      Sure can! Contact us directly to set up a personalized page, or check the
      option when booking! You will be <button
        class="text-rose-500"
        on:click={() => ($showLoginModal = true)}
        >redirected to your personal page upon logging in
      </button>.
    </p>
  </details>

  <details>
    <summary> How do I share homework? </summary>
    <p>
      Click on "<button
        class="text-rose-500"
        on:click={() => ($showHomeworkModal = true)}
      >
        Homework</button
      >" in the navbar and submit screenshots/ PDFs/ etc.
    </p>

    <p>
      For added convenience in future submissions, consider downloading the app
      on your mobile device. Using Safari on iOS devices:
    </p>
    <span class="flex flex-col justify-center items-center gap-x-2 ">
      <span class="flex flex-row  gap-x-1">
        Click share icon
        <img
          class="w-5 h-5 "
          src="/safari-share-icon.png"
          alt="safari share icon"
        />
      </span>

      <span> Click "Add to Homescreen"</span>
    </span>
    <p>
      Using Chrome on Android devices, you should be prompted automatically
      (usually at the bottom of the screen).
    </p>
  </details>

  <details>
    <summary> How do I pay? </summary>
    <p>
      On the <a data-sveltekit-preload-data href="/plans">plans page</a> you can
      either "pay now" or "pay later", per service.
    </p>
    <p>
      After booking details have been confirmed the "pay now" option will
      redirect you to a checkout page. Similarly, with "pay later" we send a
      custom STRIPE invoice to the preferred email, to be completed within 24
      hours of receiving. In both cases you will have the option to pay with
      credit card, Apple Pay, or Google Pay!
    </p>
  </details>

  <details>
    <summary> How do I book multiple sessions at once? </summary>
    <!-- <p>
      Click "➜ Schedule another event" on the confirmation page.
    </p> -->
    <p>
      We can book the remaining dates for you at the beginning / end of the live
      session.
    </p>
  </details>

  <details>
    <summary> What subjects do you cover? </summary>

    <p>
      <b>Levels:</b> IB / AP / OSSD (9-12) / College & University <br /><br />

      <b>MATHEMATICS</b>&nbsp; Calculus • Trigonometry • Advanced Functions •
      Complex Numbers • Linear Algebra • Probability and Statistics &nbsp;&nbsp;<b
        >PHYSICS</b
      >
      &nbsp;&nbsp; Kinematics • Mechanics • Thermodynamics • Fluids • Electricity
      & Magnetism • Circuit Analysis • Waves • Optics • Atomic & Quantum Physics
      • Special Relativity &nbsp;&nbsp;<b>SPANISH</b> &nbsp;&nbsp; Pronunciation
      • Grammatical Rules • Practical Examples
    </p>
  </details>

  <details>
    <summary> How are mock tests administered? </summary>
    <p>
      After booking a "Mock" session on <a
        data-sveltekit-preload-data
        href="/plans">plans</a
      >, the student attends a live session where we will be sharing a Google
      Forms link. Answers to completed questions are discussed and provided
      during session time. A detailed, digital solution key
      <span class="italic">of completed questions</span>
      is also available at a premium, to be populated on your personal page.
    </p>
  </details>

  <details>
    <summary>
      I am looking to refer a friend, do you offer any discounts based on
      referrals?
    </summary>
    <p>
      <!-- Great question! We absolutely welcome this initiative and are pleased to
      reward it; please visit our <a>/referrals</a> page. <br /><br /> -->

      Great question! You can enter your referral as an input when booking; for
      this initiative we are pleased to offer a
      <span
        class=" text-transparent bg-clip-text bg-gradient-to-b from-rose-700 via-rose-600 to-yellow-300"
        >25%
      </span> discount on the next applicable session!
    </p>
  </details>
</div>

<style>
  .faqContainer {
    display: grid;
    place-content: center;
  }

  :root {
    --light-green: rgb(230, 255, 249);
    --green: rgb(89, 208, 174);

    --red: rgb(230, 59, 96);
    --light-red: rgb(243, 186, 198);
    --borderRadius: 15px;
  }

  /* opacity seems to not do much */
  @keyframes sweep {
    0% {
      opacity: 0;
      margin-top: -15px;
    }

    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }

  /* remove arrow  */
  details > summary {
    list-style: none;
  }
  /* remove arrow  */
  details > summary::-webkit-details-marker {
    display: none;
  }

  details {
    @apply font-Nunito;
    border: 0px solid #eee;
    border-radius: var(--borderRadius);
    padding: 0.5em 0.5em 0;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    details {
      width: 60vw;
    }
  }
  @media screen and (max-width: 768px) {
    details {
      width: 80vw;
    }
  }

  summary {
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  }

  details:hover {
    background: #ddd;
  }

  /* svelte :global needed to use predefined darkmode logic */
  :global(body.dark-mode) details:hover {
    background: #211f51;
  }

  details p {
    padding: 10px;
  }

  details a {
    color: var(--red);
  }
  details a:hover {
    color: rgb(46, 126, 253);
  }

  details[open] {
    padding: 0.5em;
    background: var(--light-green);
    animation: sweep 0.25s ease-in-out;
    margin-bottom: 10px;
  }

  /* svelte :global needed to use predefined darkmode logic */
  :global(body.dark-mode) details[open] {
    background: var(--light-green);
    color: black;
  }

  details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
    background-color: var(--green);
    outline: none;
  }

  details[open] summary.highlight {
    background: var(--red);
    color: white;
    transition: 0.2s ease-in-out;
  }

  /* dec11,2022: doesnt work on firefox */
  details[open]:has(summary.highlight) {
    background: var(--light-red);
    transition: 0.2s ease-in-out;
  }
</style>
