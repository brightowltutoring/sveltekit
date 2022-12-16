<!-- dec14,530pm: havent yet figured out the passed bounded props  -->
<script>
  let Component;
  import InView from "$lib/Wrappers/InView.svelte";

  export let Import = async () => {};
  // const getComponent = async () => (Component = await Import());
</script>

<InView onview={async () => (Component = await Import())}>
  {#if Component}
    <Component.default {...$$props} />
  {/if}
</InView>
