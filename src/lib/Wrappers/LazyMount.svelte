<!-- dec14,530pm: havent yet figured out the passed bounded props  -->
<script>
  //   export let Path = import("$lib/Footer.svelte");
  export let Import = () => alert("importante");

  let Component;

  const getComponent = async () => {
    // setTimeout(async () => {
    Component = await Import();
    // }, 1000);
  };

  //   export let contactLinkClicked;
  export let X = "";

  import InView from "$lib/Wrappers/InView.svelte";
</script>

<!-- this wrapper is useful, so long as not needing to pass bounded variables -->


<InView onview={getComponent}>
  {#if Component}
    <!-- <svelte:component this={Component.default} bind:contactLinkClicked /> -->
    <!-- <svelte:component this={Component.default} bind:X /> -->
    <Component.default bind:X />
  {/if}
</InView>
