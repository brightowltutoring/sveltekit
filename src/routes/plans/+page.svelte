<script>
	import PlansSection from './PlansSection.svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#key mounted}
	<PlansSection />
{/key}
