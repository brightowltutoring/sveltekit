<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let inProp: any;

	let ready = false;
	onMount(() => (ready = true));

	const inTrans = (node: HTMLElement, args?: any) => {
		return ready && inProp(node, args);
	};
</script>

{#key ready}
	<div in:inTrans>
		<slot />
	</div>
{/key}
