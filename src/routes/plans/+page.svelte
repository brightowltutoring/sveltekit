<script>
  // annoying that I have to import this component here and in layout, otherwise doesnt work as expected
  import PlansCardObserver from "$lib/Plans/PlansCardObserver.svelte";
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
</script>

<PlansCardObserver />

<!-- class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-5 m-2 md:m-7 bg-red-400 " -->
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 md:m-7">
  {#each plansCardArray as item, i}
    <div in:scale={{ duration: 1000, easing: elasticOut, delay: 100 * i }}>
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
  {/each}
</div>

<style>
  a {
    color: var(--anchor);
  }
  a:hover {
    color: var(--anchor_hover);
  }
</style>
