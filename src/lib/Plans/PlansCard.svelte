<script>
  // import Modal from "$lib/Wrappers/Modal.svelte";
  import { isDarkMode, elementColor } from "$lib/store";

  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  // let showMe = false;
  // let src;
  // let changeOpacityTo100;

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

  // async function handlePlansModal(BUTTON_URL) {
  //   // src = `${BUTTON_URL}?hide_gdpr_banner=1`;
  //   src = BUTTON_URL;

  //   // src = button.url;
  //   showMe = src.length > 0;
  //   // showMe = true;
  //   setTimeout(() => {
  //     changeOpacityTo100 =
  //       "opacity-100 transition-opacity duration-300 ease-in";
  //   }, 100);
  // }
</script>

<!-- TODO: added dec 15 ... to replace the 'Calendly.initPopupWidget' logic; this modal is switched ON via handlePlansModal() function defined -->
<!-- UPDATE: had to remove this due to iframes and calendly's website clashing with the ability to hide the calendly cookie banner  -->
<!-- <Modal bind:showModal={showMe} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
  <iframe
    title="Thinksolve Plans"
    class="{changeOpacityTo100} opacity-0 w-full fixed bottom-0 md:w-[80vw] h-[90vh] md:-translate-y-5 backdrop-blur-3xl  rounded-xl border-dotted border-gray-500"
    {src}
  />
</Modal> -->

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
    <!-- {#key button.resetter} -->

    <!-- on:mouseover={() => (src = button.url)}
    on:focus={() => (src = button.url)} -->
    <button
      in:scale={{ duration: 600, easing: elasticOut }}
      on:click={() => {
        // handlePlansModal(button.url);
        Calendly.initPopupWidget({ url: button.url });
        // button.resetter = !button.resetter;
      }}
      class=" {buttonColor[
        card
      ]} {btnColorHover} {button.opacityTW}   hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "
    >
      <slot name="buttonText">{button.text}</slot>
    </button>
    <!-- {/key} -->
  {/each}

  <div class="py-4">
    <slot name="cardText">default cardText</slot>
  </div>
</plans-card>
