<!-- dec14,530pm: havent yet figured out the passed bounded props  -->
<script>
  export let Import = async () => {};
  let Component;

  // const getComponent = async () => (Component = (await Import()).default);
  const getComponent = async () => (Component = await Import());

  import InView from "$lib/Wrappers/InView.svelte";
</script>

<InView onview={getComponent}>
  <svelte:component this={Component.default} {...$$props} />
</InView>
