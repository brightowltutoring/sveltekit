<script lang="ts">
  import PlansButton from "$lib/Plans/PlansButton.svelte";

  export let payNowUrl = "";
  export let payLaterUrl = "";

  const payButtons = [
    {
      resetter: false,
      url: payNowUrl as string,
      opacityTW: "bg-opacity-100",
      text: "Pay Now",
    },
    {
      resetter: false,
      url: payLaterUrl as string,
      opacityTW: "bg-opacity-70",
      text: "Pay Later",
    },
  ];

  export let btnColorHover = "";

  export let card: number; /* 1,2,3, */
</script>

<!-- {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} -->
<plans-card
  class="block shadow-md hover:scale-105 rounded-xl m-1 p-7 text-center duration-300 group "
>
  <!-- style={`background:${$elementColor}`} -->
  <p class="text-4xl font-Poppins py-5 text-center">
    <slot name="cardTitle">Classico</slot>
  </p>

  {#each payButtons as button}
    <div class="inline-block group-hover:animate-pulse group-hover:scale-95 ">
      <PlansButton {button} {btnColorHover} {card} />
    </div>
  {/each}

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
</plans-card>

<!-- Previously the background color of this component was set with "style={`background:${$elementColor}`}" — i.e. inline css via reactive javascript-string (specifically a derived svelte store variable) — however this would cause 'darkmode flash' when starting with the /plans route (and darkmode saved/set from localStorage).  -->
<style>
  plans-card {
    background: rgb(242, 247, 250);
    @apply hover:shadow-lg;
  }

  :global(html.dark-mode) plans-card {
    background: rgb(38, 35, 51);
    @apply hover:shadow-xl;
  }
</style>
