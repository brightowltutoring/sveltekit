<script>
  import { isDarkMode, elementColor } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  export let payNowUrl = "";
  export let payLaterUrl = "";

  const payButtons = [
    {
      resetter: false,
      url: payNowUrl,
      opacityTW: "bg-opacity-100",
      text: "Pay Now",
    },
    {
      resetter: false,
      url: payLaterUrl,
      opacityTW: "bg-opacity-70",
      text: "Pay Later",
    },
  ];

  export let btnColorHover = "";

  export let card; /* 1,2,3, */

  let buttonColor = {
    1: "bg-[rgb(244,77,77)]" /* red */,
    2: "bg-[rgb(254,164,92)]" /* yellow */,
    3: "bg-[rgb(45,165,214)]" /* blue */,
  };
</script>

<plans-card
  class="cardIdentifier block shadow-md hover:scale-105 {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} rounded-xl m-1 p-7 text-center duration-300 group"
  style={`background:${$elementColor}`}
>
  <p class="text-4xl font-Poppins py-5 text-center">
    <slot name="cardTitle">Classico</slot>
  </p>

  {#each payButtons as button}
    {#key button.resetter}
      <button
        in:scale={{ duration: 600, easing: elasticOut }}
        on:click={() => {
          Calendly.initPopupWidget({ url: `${button.url}` });
          button.resetter = !button.resetter;
        }}
        class=" {buttonColor[
          card
        ]} {btnColorHover} {button.opacityTW}   hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "
      >
        <slot name="buttonText">{button.text}</slot>
      </button>
    {/key}
  {/each}

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
</plans-card>
