<script>
  import Modal from "$lib/Wrappers/Modal.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let buttonColor = {
    1: "bg-[rgb(244,77,77)]" /* red */,
    2: "bg-[rgb(254,164,92)]" /* yellow */,
    3: "bg-[rgb(45,165,214)]" /* blue */,
  };

  export let btnColorHover = "";

  export let card; /* 1,2,3, */
  export let button;
  let showMe = false;
  let src = "";
  let changeOpacityTo100;

  async function handlePlansModal(BUTTON_URL) {
    src = BUTTON_URL;

    showMe = true;
    setTimeout(() => {
      changeOpacityTo100 =
        "opacity-100 transition-opacity duration-200 ease-in";
    }, 50);
  }
</script>

<!-- With modal inside this button component, each calendly modal plan's state is preserved! No unnecessary reloading of content -->
<Modal bind:showModal={showMe} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
  <iframe
    title="Thinksolve Plans"
    class="{changeOpacityTo100} opacity-0 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl  rounded-xl border-dotted border-gray-500"
    {src}
  />
</Modal>

<button
  in:scale={{ duration: 600, easing: elasticOut }}
  on:mouseover={() => (src = button.url)}
  on:focus={() => (src = button.url)}
  on:click={() => {
    handlePlansModal(button.url);
    // Calendly.initPopupWidget({ url: button.url });
    // button.resetter = !button.resetter;
  }}
  class="hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white {buttonColor[
    card
  ]} {btnColorHover} {button.opacityTW}"
>
  <slot name="buttonText">{button.text}</slot>
</button>
