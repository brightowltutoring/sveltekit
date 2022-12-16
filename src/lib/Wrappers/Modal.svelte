<script>
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";
  // export let bod = false;

  // without this body append logic, the modal inherits strange padding when used inside other components; originally no issues when using modal at the layout level ... which makes sense as it is the top most level in sveltekit
  let container;
  import { onMount } from "svelte";
  onMount(() => {
    document.body.appendChild(container);
  });

  // let changeOpacityTo100;
  // $: if (showModal) {
  //   setTimeout(() => {
  //     changeOpacityTo100 =
  //       "opacity-100 transition-opacity duration-1000 ease-in";
  //   }, 1000);
  // }
</script>

<!-- md:py-4 py-1 md:px-[7%] z-50 -->
<!-- {changeOpacityTo100} opacity-0 -->
<button
  bind:this={container}
  class="  z-50 top-0 left-0 fixed w-full h-full grid place-items-center  {showModal
    ? `${bgTint} `
    : 'hidden'} overflow-y-scroll overflow-x-clip"
  on:click|self={() => (showModal = false)}
>
  <!-- <div class="{changeOpacityTo100} opacity-0"> -->
  <slot />
  <!-- </div> -->
</button>
