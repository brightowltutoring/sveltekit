<!-- Note: this component doesnt appear to work with sveltes SSR
  ... works on manual page load/ reload though
  ... this link https://svelte.dev/repl/a3c995ae11b149c5b51f954d1061a5a2?version=3.42.1
   shows that head script is loaded last ... hence why stripe isn't defined
-->
<script>
  import { stripeSessionIdGCF } from "$lib/firebase.js";
  import { onMount } from "svelte";
  import { STRIPE_PUBLIC_KEY } from "$env/static/private";
  import { fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let slideKey = false;
  let urlSearch;

  onMount(() => {
    slideKey = true;

    urlSearch = window.location.search.slice(1); // gets everything after "?" in url
    window.history.replaceState({}, "", `/${btoa(urlSearch)}`); // shows url parameters in base64

    (() => stripeRedirectToCheckout())();
    // this self-executing expression within onMount is essentially the same as listening
    // for "DOMContentLoaded" event  ... but within the non-vanilla paradigm of Svelte

    async function stripeRedirectToCheckout() {
      try {
        const email = new URLSearchParams(urlSearch).get("email");
        const extra = new URLSearchParams(urlSearch).get("extra");
        const service = new URLSearchParams(urlSearch).get("service");
        const quantity = new URLSearchParams(urlSearch).get("quantity");

        // calls cSC() and Stripe() functions, conditionally;
        // being a cloud function, cSC() should be called minimally
        if (service && quantity) {
          const response = await stripeSessionIdGCF({
            email,
            extra,
            service,
            quantity,
          });
          const stripe = Stripe(STRIPE_PUBLIC_KEY);
          stripe.redirectToCheckout({ sessionId: response.data.id });
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
  {#if slideKey && urlSearch.includes("service") && urlSearch.includes("quantity")}
    <div
      in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
      class="font-Poppins text-6xl text-center pt-20 animate-bounce loading"
    >
      Just a moment
    </div>
    <!-- {:else}
    <p class="font-Poppins text-5xl text-center ">Session Expired</p> -->
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
