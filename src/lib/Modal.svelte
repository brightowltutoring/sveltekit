<script>
  export let showModal = false;
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";
</script>

<!-- flex justify-center items-center  -->

<!-- <modal-container -->
<!-- {#key showModal} -->
<button
  on:click|self={() => (showModal = false)}
  class="fixed w-full h-full grid place-items-center z-50 md:py-4 py-1 md:px-[7%] {showModal
    ? `${bgTint} `
    : 'hidden'}  overflow-y-scroll overflow-x-clip"
>
  <slot />
</button>
<!-- {/key} -->

<!-- switched from 'hidden' to opacity-0... otherwise tailwind animations aren't working on this
 -->
