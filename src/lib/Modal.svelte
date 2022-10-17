<script>
  export let showModal = false;
  //   this variables truthiness is controlled elsewhere (e.g. in navitem component)
  export let bgTint = "bg-[rgba(0,0,0,0.4)]";
</script>

<!-- note this is not a special component .. just an aptly named container -->
<modal-container
  on:click|self={() => {
    showModal = false;
  }}
  class=" fixed w-full h-full flex justify-center items-center z-[50] md:py-4 py-1 md:px-[7%] {showModal
    ? `${bgTint}`
    : 'hidden'}   "
>
  <slot /><!--this is the modal content -->
</modal-container>
