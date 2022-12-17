<!-- dec14,530pm: havent yet figured out the passed bounded props  -->
<script>
  import InView from "$lib/Wrappers/InView.svelte";

  export let Import = async () => {};
  let Component;
  const getComponent = async () => (Component = await Import());
</script>

<InView onview={getComponent}>
  {#if Component}
    <Component.default {...$$props} />
  {/if}
</InView>

<!-- ALTERNATIVE: using svelte:component ... I find it less readable -->
<!-- 
<script>
  export let Import = async () => {};
  let Component;

  const getComponent = async () => (Component = (await Import()).default);

  import InView from "$lib/Wrappers/InView.svelte";
</script>

<InView onview={getComponent}>
  <svelte:component this={Component} {...$$props} />
</InView>  
-->
