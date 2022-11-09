<script>
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
</script>

<!-- <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-7 "> -->
<!-- <div class="grid grid-cols-1 lg:grid-cols-2 "> -->
<div class="grid grid-cols-1 lg:grid-cols-2 px-6 md:m-7">
  <!-- {#each [...plansCardArray].splice(0, 2) as item, i} -->
  {#each plansCardArray.slice(0, 2) as item, i}
    <div>
      <!-- <div in:scale={{ duration: 1000, easing: elasticOut, delay: 100 * i }}> -->
      <PlansCard
        card={item.card}
        payNowUrl={item.payNowUrl}
        payLaterUrl={item.payLaterUrl}
      >
        <!-- <span slot="buttonText"> {item.buttonText} </span> -->
        <span slot="cardTitle"> {item.cardTitle} </span>

        <span slot="cardText">
          {item.cardText}
          <!-- <p><a data-sveltekit-prefetch href={item.href}>invoice sample</a></p> -->
          <!-- <p><a sveltekit:prefetch href={item.href}>invoice sample</a></p> -->
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
