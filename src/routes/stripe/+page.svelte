<script>
  import { onMount } from "svelte";
  import { PUBLIC_STRIPE_KEY } from "$env/static/public";
  import { fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let slideKey = false;
  let urlSearch;
  let service;
  let extra = false;
  let quantity;
  let email;

  // import { stripeSessionIdGCF } from "$lib/firebase.js";
  // TODO:testing
  import { app } from "$lib/firebase.js";
  import { getFunctions, httpsCallable } from "firebase/functions";
  const functions = getFunctions(app);

  // const stripeSessionIdGCF = httpsCallable(functions, "stripeSessionIdGCF");

  // TODO:testing

  onMount(async () => {
    slideKey = true;

    urlSearch = window.location.search.slice(1); // gets everything after "?" in url
    window.history.replaceState({}, "", `/${btoa(urlSearch)}`); // shows url parameters in base64
    stripeRedirectToCheckout();

    async function stripeRedirectToCheckout() {
      try {
        const USP = new URLSearchParams(urlSearch);

        // OLD CODE:
        // const email = USP.get("email");
        // const quantity = USP.get("quantity");
        // const dollar_hourly_rate = USP.get("dollar_hourly_rate");
        // const extra = USP.get("extra");

        email = USP.get("invitee_email");

        // converts answer_1 from 1.25 hr to 1.25 to 75 .. representing 75 minutes, say
        quantity = USP.get("answer_1").match(/\d+(\.\d{1,2})/)[0] * 60;

        // answer_2 decides to add digital session notes
        if (USP.get("answer_2").toLowerCase().includes("yes")) {
          extra = true;
        }

        // event_type_name sets session as classico or mock
        for (let el of ["classico", "mock"]) {
          if (USP.get("event_type_name").toLowerCase().includes(el)) {
            service = el;
            break;
          }
        }

        if (service && quantity) {
          // create checkout session using url params; get session data
          // don't forget await!
          const stripeSessionIdGCF = await httpsCallable(
            functions,
            "stripeSessionIdGCF"
          );
          const { data } = await stripeSessionIdGCF({
            email,
            extra,
            service,
            quantity,
            // dollar_hourly_rate,
          });

          // create checkout session; Stripe() comes from head script
          Stripe(PUBLIC_STRIPE_KEY).redirectToCheckout({ sessionId: data.id });
        }
      } catch (error) {
        console.log("stripeRedirectToCheckout failed", error);
      }
    }
  });
</script>

<svelte:head>
  <title>Stripe Firebase Demo</title>
  <script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<main>
  {#if slideKey && service && quantity}
    <!-- {#if slideKey && urlSearch.includes("service") && urlSearch.includes("quantity")} -->
    <div
      in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
      class="font-Poppins text-6xl text-center pt-20 animate-bounce loading"
    >
      Just a moment
    </div>
  {/if}
</main>

<style>
  .loading:after {
    content: " . . .";
    animation: dots 1s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    40% {
      color: rgba(0, 0, 0, 0);
    }
  }
</style>
