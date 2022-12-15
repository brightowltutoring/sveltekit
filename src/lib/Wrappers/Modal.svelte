<script>
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";
  // export let bod = false;

  // TODO: update only needed 'top-0 left-0' instead of appending to body
  // without this body append logic, the modal inherits padding on when used inside various nested routes; originally no issues when using modal at the layout level ... which makes sense as it is the top most level in sveltekit
  // let container;
  // import { onMount } from "svelte";
  // onMount(() => {
  //   // bod && document.body.appendChild(container);
  // });
</script>

<!-- md:py-4 py-1 md:px-[7%] z-50 -->
<!-- bind:this={container} -->
<button
  class="z-50 top-0 left-0 fixed w-full h-full grid place-items-center  {showModal
    ? `${bgTint} `
    : 'hidden'} overflow-y-scroll overflow-x-clip"
  on:click|self={() => (showModal = false)}
>
  <!-- {#if showModal} -->
  <slot />
  <!-- {/if} -->
</button>
