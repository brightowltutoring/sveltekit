<script>
  import { isLoggedIn } from "$lib/store";

  export let opacityEase; //added dec 16 to allow easing for the janky lazymounted logincard component in +layout.svelte
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";

  let container;
  import { onMount } from "svelte";
  // without this body append logic, the modal inherits strange padding when used inside other components; originally no issues when using modal at the layout level ... which makes sense as it is the top most level in sveltekit
  onMount(() => document.body.appendChild(container));

  //added dec 16 to allow easing for the janky lazymounted logincard component in +layout.svelte
  let changeOpacityTo100;
  $: if (opacityEase && showModal && !$isLoggedIn) {
    setTimeout(() => {
      changeOpacityTo100 =
        "opacity-100 transition-opacity duration-300 ease-in";
    }, 50);
  } else {
    changeOpacityTo100 = "opacity-100 transition-opacity";
  }
</script>

<!-- md:py-4 py-1 md:px-[7%] z-50 -->
<!-- grid place-items-center  --><!-- grid centering breaks on safari .. -->

<button
  bind:this={container}
  class="opacity-0 {changeOpacityTo100} z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center  {showModal
    ? `${bgTint} `
    : 'hidden'} overflow-y-scroll overflow-x-clip"
  on:click|self={() => (showModal = false)}
>
  <slot />
</button>
