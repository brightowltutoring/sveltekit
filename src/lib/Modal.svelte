<script>
  // import { scale, fly } from "svelte/transition";
  // import { elasticOut } from "svelte/easing";
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";
  let ready;
</script>

{#if !ready}
  <!-- in:fly={{ delay: 1000, duration: 2000, easing: elasticOut }} -->
  <modal-container
    on:keydown|self={() => {
      showModal = false;
      // ready = !ready;
    }}
    on:click|self={() => {
      showModal = false;
      // ready = !ready;
    }}
    class=" fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] {showModal
      ? `${bgTint}`
      : 'hidden'}   "
  >
    <slot />
  </modal-container>
{/if}
