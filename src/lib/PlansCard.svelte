<script>
  import CalendlyJsandCss from "./CalendlyJsandCSS.svelte";
  import {
    isDarkMode,
    light,
    light_darkened,
    dark,
    dark_lightened,
  } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let resetBtn = false;
  let resetBtn2 = false;
  export let payNowUrl = "";
  export let payLaterUrl = "";

  // function resetBtnValue() {
  //   // hoverTransform = "rotateX(0deg)) scale(1)"
  //   Calendly.initPopupWidget({ url: `${payNowUrl}` });
  // }

  export let btnColorHover = "";
  $: cardColor = $isDarkMode ? dark_lightened : light_darkened;

  // let hoverTransform = "rotateX(0deg)) scale(1)"

  export let card; /* 1,2,3, */

  let buttonColor = {
    1: "bg-[rgb(45,165,214)]" /* blue */,
    2: "bg-[rgb(244,77,77)]" /* red */,
    3: "bg-[rgb(254,164,92)]" /* yellow */,
  };
</script>

<CalendlyJsandCss />

<!-- <div class="shadow-xl rounded-xl w-[10] min-w-fit p-10 m-4 text-center duration-300 group"
     style={`background:${cardColor}; transform:perspective(1000px) ${hoverTransform};`}
     on:mouseover={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:focus={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:mouseout={()=>{hoverTransform = "rotateX(0deg) "}}
     on:blur={()=>{hoverTransform = "rotateX(0deg) "}} -->
<div
  class="cardCSS shadow-md {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group"
  style={`background:${cardColor}`}
>
  <div class="py-6 text-5xl font-Poppins">
    <slot name="cardTitle">Classico</slot>
  </div>

  {#key resetBtn}
    <button
      in:scale={{ duration: 600, easing: elasticOut }}
      on:click={() => {
        resetBtn = !resetBtn;
        Calendly.initPopupWidget({ url: `${payNowUrl}` });
        // resetBtnValue();
      }}
      class=" {buttonColor[
        card
      ]} {btnColorHover}  hover:shadow-md hover:scale-105 duration-300 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white"
    >
      <slot name="buttonText">Pay Now</slot>
    </button>
  {/key}

  {#key resetBtn2}
    <button
      in:scale={{ duration: 600, easing: elasticOut }}
      on:click={() => {
        resetBtn2 = !resetBtn2;
        Calendly.initPopupWidget({ url: `${payLaterUrl}` });
        // resetBtnValue();
      }}
      class=" {buttonColor[
        card
      ]} {btnColorHover} bg-opacity-70  hover:shadow-md hover:scale-105 duration-300 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-70'
        : 'group-hover:bg-opacity-70'} text-xl text-white"
    >
      <slot name="buttonText">Pay Later</slot>
    </button>
  {/key}

  <!-- {#key resetBtn}
    <button
      in:scale|self={{ duration: 600, easing: elasticOut }}
      on:click={resetBtnValue}
      class=" {buttonColor[
        card
      ]} {btnColorHover}  hover:shadow-md duration-300 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white"
    >
      <slot name="buttonText">default button Text</slot>
    </button>
  {/key} -->

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
  <!-- <p class="py-2 text-2xl">
        <slot name="cardTitle"></slot>
    </p> -->
</div>

<style>
  .cardCSS {
    transform: perspective(1000px) rotateX(12deg);
    /* transform: perspective(1000px) rotateX(0deg); */
    /* transition: transform 0.3s ease 0s; */
    /* transition: 500ms; */
    z-index: 10;
    -webkit-transform: translateZ(-1px);
  }

  .cardCSS:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.02);
    /* transform: perspective(1000px) rotateX(12deg) scale(1.02); */
  }
</style>
