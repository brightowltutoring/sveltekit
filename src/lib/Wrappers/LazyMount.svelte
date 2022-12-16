<!-- dec14,530pm: havent yet figured out the passed bounded props  -->
<script>
  export let Import = async () => {};
  let Component;

  const getComponent = async () => (Component = await Import());

  import InView from "$lib/Wrappers/InView.svelte";
</script>

<InView onview={getComponent}>
  {#if Component}
    <Component.default />
  {/if}
</InView>
