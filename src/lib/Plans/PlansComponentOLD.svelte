<!-- TODO: this is unused code -->
<script>
  import PlansCard from "$lib/Plans/PlansCard.svelte";
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
</script>

<!-- The custom-defined 'grid-cols-dynamic' accomplishes and generalizes the logic 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ...' which has to be manually adjusted based on number of grid elements (in this case plans cards) it acts on. See tailwind.config.cjs > 'gridTemplateColumns' for specifications. -->
<div class="grid grid-cols-dynamic px-6 md:m-7">
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

  /* .wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } */
  /* The above grid logic now achieved with '-dynamic' in tailwind.config.cjs */
</style>
