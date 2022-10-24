<script>
  import { onMount } from "svelte";
  import { stripeSessionIdGCF } from "$lib/firebase.js";
  import { STRIPE_PUBLIC_KEY } from "$env/static/private";
  import { fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let slideKey = false;
  let urlSearch;

  onMount(() => {
    slideKey = true;

    urlSearch = window.location.search.slice(1); // gets everything after "?" in url
    window.history.replaceState({}, "", `/${btoa(urlSearch)}`); // shows url parameters in base64

    stripeRedirectToCheckout(); // calling this within onMount is similar to listening to DOMContentLoaded

    async function stripeRedirectToCheckout() {
      try {
        const USP = new URLSearchParams(urlSearch);

        const email = USP.get("email");
        const extra = USP.get("extra");
        const service = USP.get("service");
        const quantity = USP.get("quantity");

        if (service && quantity) {
          // create checkout session using url params; get session data
          const { data } = await stripeSessionIdGCF({
            email,
            extra,
            service,
            quantity,
          });

          // create checkout session; Stripe() comes from head script
          Stripe(STRIPE_PUBLIC_KEY).redirectToCheckout({ sessionId: data.id });
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
