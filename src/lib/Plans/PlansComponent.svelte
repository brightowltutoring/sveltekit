<script>
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import InView from "$lib/InView.svelte";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/Plans/plansCardArray";
  import { onMount, createEventDispatcher } from "svelte";
  import { cssToHead, jsToHead, scaleYN } from "$lib/utils";
  let dispatch = createEventDispatcher();

  export let plansCards = plansCardArray;
  // When the importing component has 'zeroTransition = true' this component produces no transition animation for both navbar AND direct navigation

  export let noTransition = false; // when user does include noTransition as a prop then this is rewritten to 'true'

  let ready = noTransition;
  onMount(() => (ready = true));
  // the 'ready' variable logic allows the in:scale div to animate (svelte transition) when going directly to this plans route ..otherwise only works when navigating from another route
</script>

<InView
  once
  margin={"200px"}
  onview={() => {
    console.log("📅");
    jsToHead(
      "calendlyJS",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    cssToHead(
      "calendlyCSS",
      "https://assets.calendly.com/assets/external/widget.css"
    );
  }}
>
  <!-- Can also do 'use:boop' where boop() is a function containing the dispatch logic. -->
  <plans-section
    use={dispatch("boop", { plansCardArray, message: "n i boop" })}
    class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7"
  >
    <!-- class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:px-4 px-10 md:m-7" -->
    {#each plansCards as item, i}
      {#if ready}
        <div
          in:scaleYN={{
            noTransition: noTransition,
            duration: 1000,
            easing: elasticOut,
            delay: 100 * i,
          }}
        >
          <PlansCard
            card={item.card}
            payNowUrl={item.payNowUrl}
            payLaterUrl={item.payLaterUrl}
          >
            <!-- <span slot="buttonText"> {item.buttonText} </span> -->
            <span slot="cardTitle"> {item.cardTitle} </span>

            <span slot="cardText">
              {item.cardText}
            </span>
          </PlansCard>
        </div>
      {/if}
    {/each}
  </plans-section>
</InView>

<!-- <style>
    .dynamic-col {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } 
</style> -->
<!-- The above grid logic now achieved with the custom 'grid-cols-dynamic' as speficifid in tailwind.config.cjs  -->
