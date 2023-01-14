<script lang="ts">
	import InView from '$lib/Wrappers/InView.svelte';

	// TODO: e.g. the passed Import prop has the form '() => import('/path/to/component.svelte')', e.g. to handle lazy loading of components ... still haven't determined if there is a more descriptive type than below
	export let Import: () => Promise<{ default: any }>;

	let Component: any;
	const getComponent = async () => (Component = await Import());
</script>

<!-- dec14,530pm: havent yet figured out the passed bounded props  -->

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
