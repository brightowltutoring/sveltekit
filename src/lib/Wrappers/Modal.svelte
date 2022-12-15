<script>
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";

  // without this body append logic, the modal inherits padding on when used inside various nested routes; originally no issues when using modal at the layout level ... which makes sense as it is the top most level in sveltekit
  import { onMount } from "svelte";
  let container;
  onMount(() => {
    document.body.appendChild(container);
  });
</script>

<!-- md:py-4 py-1 md:px-[7%] z-50-->
<button
  bind:this={container}
  class="fixed top-0 left-0 w-full h-full grid place-items-center  {showModal
    ? `${bgTint} `
    : 'hidden'} overflow-y-scroll overflow-x-clip"
  on:click|self={() => (showModal = false)}
>
  <!-- {#if showModal} -->
  <slot />
  <!-- {/if} -->
</button>
