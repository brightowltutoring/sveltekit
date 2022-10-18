<script>
  import CalendlyJsandCss from "./CalendlyJsandCSS.svelte";
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
    1: "bg-[rgb(45,165,214)]" /* blue */,
    2: "bg-[rgb(244,77,77)]" /* red */,
    3: "bg-[rgb(254,164,92)]" /* yellow */,
  };
</script>

<CalendlyJsandCss />

<card
  class="block shadow-md hover:scale-105 {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group"
  style={`background:${$elementColor}`}
>
  <p class="py-6 text-5xl font-Poppins">
    <slot name="cardTitle">Classico</slot>
  </p>

  {#each payButtons as button}
    {#key button.resetter}
      <button
        in:scale={{ duration: 600, easing: elasticOut }}
        on:click={() => {
          button.resetter = !button.resetter;
          Calendly.initPopupWidget({ url: `${button.url}` });
        }}
        class=" {buttonColor[
          card
        ]} {btnColorHover} {button.opacityTW}  hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "
      >
        <slot name="buttonText">{button.text}</slot>
      </button>
    {/key}
  {/each}

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
</card>

<style>
  .card {
    transform: perspective(1000px) rotateX(12deg);
    /* transform: perspective(1000px) rotateX(0deg); */
    /* transition: transform 0.3s ease 0s; */
    /* transition: 500ms; */
    z-index: 10;
    -webkit-transform: translateZ(-1px);
  }

  .card:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.02);
    /* transform: perspective(1000px) rotateX(12deg) scale(1.02); */
  }
</style>
