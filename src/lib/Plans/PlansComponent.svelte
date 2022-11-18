<script>
  // import HydratePlansCard from "$lib/Plans/HydratePlansCard.svelte";
  // {#if ready}
  //   <HydratePlansCard />
  // {/if}
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import InView from "$lib/InView.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
  import { onMount, createEventDispatcher } from "svelte";
  import { cssToHead, jsToHead } from "$lib/utils.js";
  let dispatch = createEventDispatcher();

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

  export let plansCards = plansCardArray;
  // When the importing component has 'zeroTransition = true' this component produces no transition animation for both navbar AND direct navigation
  export let hasTransition = true;
  // default true; if false then two lines below keep ready as 'true'

  // let ready = true;
  let ready = !hasTransition;
  onMount(() => (ready = true));
  // the 'ready' variable logic allows the in:scale div to animate (svelte transition) when going directly to this plans route ..otherwise only works when navigating from another route
</script>

<InView
  once
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
  margin={"200px"}
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
