<script>
  import { isLoggedIn } from "$lib/store";

  export let opacityEase; //added dec 16 to allow easing for the janky lazymounted logincard component in +layout.svelte
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";

  let container;
  import { onMount } from "svelte";
  // without this body append logic, the modal inherits strange padding when used inside other components; originally no issues when using modal at the layout level ... which makes sense as it is the top most level in sveltekit
  onMount(() => document.body.appendChild(container));

  // Dec 16: this opacity easing logic was originally conceived to deal with the asynchronous updating of the logincard.svelte UI + functionality, when $showLoginMdal is truthy (i.e. when login button clicked). This is somewhat janky, however results in perfect lighthouse score, since logincard is loaded (includes firebase modules too).
  // Note: the alternative is MUCH worse if not tinkering with the opacity ... i would have to granularly dynamic import components within logincard
  let changeOpacityTo100;
  $: if (opacityEase && showModal && !$isLoggedIn) {
    setTimeout(() => {
      changeOpacityTo100 =
        "opacity-100 transition-opacity duration-100 ease-in";
    }, 100);
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
