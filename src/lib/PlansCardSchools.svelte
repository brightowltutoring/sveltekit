<script>
  import CalendlyJsandCss from "./CalendlyJsandCSS.svelte";
  import { isDarkMode, elementColor } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let resetBtn = false;
  // let resetBtn2 = false;
  export let schoolUrl = "";
  // export let payLaterUrl = "";

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
  class="block hover:scale-105 shadow-md {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group"
  style={`background:${$elementColor}`}
>
  <p class="py-6 text-5xl font-Poppins">
    <slot name="cardTitle">Classico</slot>
  </p>

  {#key resetBtn}
    <button
      in:scale={{ duration: 600, easing: elasticOut }}
      on:click={() => {
        resetBtn = !resetBtn;
        Calendly.initPopupWidget({ url: `${schoolUrl}` });
      }}
      class=" {buttonColor[
        card
      ]} {btnColorHover}  hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
    >
      <slot name="buttonText">buttonText</slot>
    </button>
  {/key}

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
