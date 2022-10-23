<script>
  import { isDarkMode } from "$lib/store.js";
  import PlansCard from "$lib/PlansCard.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArray } from "$lib/plansCardArray.js";
  import { onMount } from "svelte";

  // export let data;
  // const { someMessage } = data;
  // console.log("someMessage", someMessage);
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-7 ">
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
          <!-- {#if item.buttonText == "Custom"} -->
          <p><a sveltekit:prefetch href={item.href}>invoice sample</a></p>
          <!-- {/if} -->
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
