<script>
  import PlansCardSchools from "$lib/PlansCardSchools.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { plansCardArraySchools } from "$lib/plansCardArray.js";
</script>

<!-- <div class="font-Poppins text-center sm:text-7xl text-6xl pb-2  ">Plans</div> -->

<!-- in:scale={{ duration: 1000, easing: elasticOut }} -->

<div class="grid grid-cols-1 lg:grid-cols-2  p-7 ">
  {#each plansCardArraySchools as item, i}
    <div in:scale={{ duration: 1000, easing: elasticOut, delay: 100 * i }}>
      <PlansCardSchools card={item.card} schoolUrl={item.schoolUrl}>
        <span slot="buttonText"> Book Date/Time </span>
        <span slot="cardTitle"> {item.cardTitle} </span>

        <span slot="cardText">
          {item.cardText}

          <!-- <p><a sveltekit:prefetch href={item.href}>invoice sample</a></p> -->
        </span>
      </PlansCardSchools>
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
