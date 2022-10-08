<!-- Note: this component doesnt appear to work with sveltes SSR
  ... works on manual page load/ reload though
  ... this link https://svelte.dev/repl/a3c995ae11b149c5b51f954d1061a5a2?version=3.42.1
   shows that head script is loaded last ... hence why stripe isn't defined
-->
<script>
  import { createStripeCheckout } from "$lib/firebase.js";
  import { onMount } from "svelte";
  import * as NV from "$env/static/private";
  import { scale, slide, fly, fade, blur } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";

  let slideKey = false;
  let stripeCreateCheckout;
  let urlSearch;

  onMount(() => {
    slideKey = true;
    const stripe = Stripe(NV.STRIPE_PUBLIC_KEY);
    const btn = document.getElementById("btn");

    urlSearch = window.location.search.slice(1);
    // TODO: shows url parameters in base64
    // window.history.replaceState({}, "", `/stripe?${btoa(urlSearch)}`);
    window.history.replaceState({}, "", `/${btoa(urlSearch)}`);

    stripeCreateCheckout = () => {
      let qtyFromUrl = new URLSearchParams(urlSearch).get("quantity");
      let quantity =
        qtyFromUrl || document.getElementById("inputQuantity").value;

      let email = new URLSearchParams(urlSearch).get("email");
      let extra = new URLSearchParams(urlSearch).get("extra");
      let service = new URLSearchParams(urlSearch).get("service");

      // stripe checkout session created using url params
      if (service && quantity) {
        createStripeCheckout({
          quantity: quantity,
          email: email,
          extra: extra,
          service: service,
        }).then((response) => {
          stripe.redirectToCheckout({ sessionId: response.data.id });
        });
      }
    };

    // btn.addEventListener("click", stripeCreateCheckout);

    // self executing function ... domcontentloaded doesnt really work with svelte
    (() => stripeCreateCheckout())();
  });
</script>

<svelte:head>
  <title>Stripe Firebase Demo</title>
  <script src="https://js.stripe.com/v3/"></script>
</svelte:head>
<!-- on:load={stripeCreateCheckout}></script> -->

<main>
  <div class="container pt-20">
    <!-- <input type="number" value="1" id="inputQuantity" /> -->
    <!-- <button id="btn">checkout</button> -->
    {#if slideKey && urlSearch.includes("service") && urlSearch.includes("quantity")}
      <p
        in:fly={{ y: -400, duration: 1000, easing: elasticOut }}
        class="font-Poppins text-6xl text-center "
      >
        Just a moment...
      </p>
      <!-- {:else}
      <p class="font-Poppins text-5xl text-center ">Session Expired</p> -->
    {/if}
  </div>
</main>
