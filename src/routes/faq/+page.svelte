<!-- <svelte:head>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  /><script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
  ></script>
</svelte:head> -->
<script>
  let faqContainer;
  let selectedTd;

  function highlight(td) {
    if (selectedTd) {
      // remove the existing highlight if any
      selectedTd.classList.remove("highlight");
    }
    selectedTd = td;
    selectedTd.classList.add("highlight"); // highlight the new td
  }

  import { onMount } from "svelte";
  onMount(() => {
    faqContainer = document.querySelector(".faqContainer");

    // using 'event delegation' technique (rather than querySelectorAll logic) to listen to events for multiple elements ...which happen to be children of a common parent element
    faqContainer.addEventListener("click", (event) => {
      let target = event.target;

      // if (target.tagName !== "SUMMARY") return;
      if (target.tagName === "SUMMARY") {
        // alert(target.tagName);
        highlight(target);
      }
    });

    // here I 'revert' to querySelector logic for the children of 'faqContainer'... since not listening for events
    faqContainer.querySelectorAll("SUMMARY").forEach((el, index) => {
      el.insertAdjacentHTML("afterbegin", `Q${index + 1}. `);
    });
  });
</script>

<!-- TODO: some weird reason I have to add 'class="highlight"' ot at least one summary element before the css/js logic can work -->
<div class="faqContainer">
  <details>
    <summary class="highlight">
      Which screen-sharing software are we using? Zoom?
    </summary>

    Nope, our sessions happen right here on the
    <a data-sveltekit-preload-data href="/classroom">classroom page</a>.
  </details>
  <!-- <details>
    <summary> Can you briefly state your services? </summary>

    <p>
      In terms of personalized service: we offer 1-on-1 tutoring, mock test
      sessions with solution keys, video links, and session notes; see <a
        >/plans</a
      >
      for details.
      <br /><br />
      We are also in the process of creating a
      <a href="https://www.brightowltutoring.com/login">login-based</a>
      service; users will have access to <i>interactive</i> quizzes & exam-question
      video solutions.
    </p>
    <p style="font-size:12pt">
      <b>Note</b>: we <i>only</i> provide online/digital solutions. We are so
      confident in our workflow that we offer
      <a> a free demo session</a> of up to 20 minutes to show it off.
    </p>
  </details> -->

  <details>
    <summary> How do I pay? </summary>
    <p>
      On the <a data-sveltekit-preload-data href="/plans">plans page</a> you have
      two payment modes per service.
    </p>
    <p>
      After booking details have been entered, the "pay now" option generates a
      STRIPE checkout page in which you will be prompted to pay with credit
      card, Apple Pay, Google Pay, etc. A similar process happens for "pay
      later", however we will send a custom STRIPE invoice to the preferred
      email.
    </p>

    <!-- <p>
      We use STRIPE to securely process all transactions — in use by companies
      such as Google, Amazon and Shopify.
    </p> -->
  </details>

  <details>
    <summary> How do I book multiple sessions at once? </summary>
    <p>
      Book a session on the <a>plans</a> page and click "➜ Schedule another event"
      on the confirmation page.
    </p>
    <p>
      Alternatively we can book the remaining dates for you at the beginning /
      end of the live session
    </p>
  </details>

  <details>
    <summary> How do I share homework? </summary>
    <p>
      Click on "Homework" in the navbar and submit, or visit the home page or <a
        data-sveltekit-preload-data
        href="/homework">/homework</a
      > page and submit.
    </p>

    <p>
      <span style="font-size:12pt; font-style:italic">
        For last second submissions, you may also point your homework at the
        webcam during the live session.</span
      >
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
    <summary> How are mock tests/ Mockowl sessions administered? </summary>
    <p>
      After booking a "Mockowl" session on <a
        data-sveltekit-preload-data
        href="/plans">plans</a
      >, the student attends a live session where we will be sharing a Google
      Forms link. Answers to completed questions are discussed and provided
      during session time. An in depth, digital solution key via personal page
      is also available at a premium;
      <span class="italic">
        note: the solution key is updated upon completion of test questions.</span
      >
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
      this initiative we are pleased to offer a 25% discount on the next
      applicable session!
    </p>
  </details>

  <details>
    <summary>
      Is it possible to access all my session content in one place?
    </summary>
    <p>
      Sure can! Contact us directly to set up a personalized page, or click the
      corresponding option as input when booking!
    </p>
  </details>
</div>

<style>
  :root {
    --light-green: rgb(230, 255, 249);
    --green: rgb(89, 208, 174);
    --red: rgb(230, 59, 96);
    --borderRadius: 15px;
  }

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

  a {
    color: var(--red);
  }
  a:hover {
    color: rgb(0, 98, 255);
  }

  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  details {
    border: 0px solid #eee;
    border-radius: var(--borderRadius);
    padding: 0.5em 0.5em 0;
  }

  details:hover {
    background: #ddd;
  }

  :global(body.dark-mode) details:hover {
    background: #211f51;
  }

  summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  details[open] {
    padding: 0.5em;
    background: var(--light-green);
    animation: sweep 0.25s ease-in-out;
    margin-bottom: 10px;
  }

  :global(body.dark-mode) details[open] {
    background: var(--light-green);
    color: black;
  }

  details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
    background-color: var(--green);
    outline: none;
    border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  }

  details[open] > summary.highlight {
    background: var(--red);
    color: white;
  }

  details p {
    /*background-color: rgb(237, 252, 248); */
    padding: 4px;
    margin: 0;
    /*box-shadow: 1px 1px 2px #bbbbbb;*/
  }

  /*<p style="font-size:18px"> */
  details {
    @apply font-Nunito;
  }
</style>
