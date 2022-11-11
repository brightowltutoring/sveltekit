<script>
  import PlansCardObserver from "$lib/Plans/PlansCardObserver.svelte";
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import { scale, fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
  import { onMount } from "svelte";

  function scaleYN(node, args) {
    return args.hasTransition ? scale(node, args) : null;
    // This conditionally returns scale or no transition
    // Alternatively can use the following code to produce the same effect:
    //  <div
    //     in:scale={{
    //       duration: hasTransition ? 0 : 1000,
    //       delay: hasTransition ? 0 : 100 * i,
    //       easing: elasticOut,
    //     }}
    //     >
    //   </div>
  }

  export let plansCards = plansCardArray; //TODO: would be nice to send this to the parent component

  // When the importing component has 'zeroTransition = true' this component produces no transition animation for both navbar AND direct navigation
  export let hasTransition = true;
  // default true; if false then two lines below keep ready as 'true'

  let ready = !hasTransition;
  onMount(() => (ready = true));
  // the 'ready' variable logic allows the in:scale div to animate (svelte transition) when going directly to this plans route ..otherwise only works when navigating from another route
  // NOTE: the intersection observer component 'PlansCardObserver' also has to be "ready-ed" in, otherwise the button doesn't become 'hydrated' as intended
</script>

{#if ready}
  <PlansCardObserver />
{/if}

<!-- OLD CODE: 
  <div
  class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:px-4 px-10 md:m-7"
> -->
<!--  .. I have to add back in grid-cols-1 as the custom 'grid-cols-dynamic' doesnt seem to take care of this case (the cards are not centered and the svelte transition rattles) -->
<div class="grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7">
  {#each plansCards as item, i}
    {#if ready}
      <div
        in:scaleYN={{
          hasTransition: hasTransition,
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
</div>

<!-- <style>
    .dynamic-col {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } 
</style> -->
<!-- The above grid logic now achieved with the custom 'grid-cols-dynamic' as speficifid in tailwind.config.cjs  -->
