<script>
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

<!-- <CalendlyJsandCss /> -->

<plans-card
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
        Calendly.initPopupWidget({ url: `${schoolUrl}` });
        resetBtn = !resetBtn;
      }}
      class=" {buttonColor[
        card
      ]} {btnColorHover}  hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
    >
      <slot name="buttonText">buttonText</slot>
    </button>
  {/key}

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
</plans-card>
