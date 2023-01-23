<script>
	import PlansSection from './PlansSection.svelte';
	let mounted = false;
	import { onMount } from 'svelte';
	onMount(() => (mounted = true));
</script>

{#key mounted}
	<PlansSection />
{/key}

<!-- <PlansSection on:boop={(e) => console.log("😮", e.detail.message)} /> -->

<!-- <PlansSection
  noTransition
  on:boop={(e) => console.log("😮", e.detail.message)}
/> -->
