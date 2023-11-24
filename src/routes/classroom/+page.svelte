<script lang="ts">
	import JitsiUser from './JitsiUser.svelte';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { disableScrollingOnPage } from '$lib/utils';
	import { page } from '$app/stores';

	disableScrollingOnPage($page.url.pathname);

	const scaleParams = {
		duration: 2000,
		easing: quintOut
	};

	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 1000);

		// document.documentElement.classList.add('classroom');
		// return () => document.documentElement.classList.remove('classroom');
	});
</script>

<!-- {#if mounted} -->
<div in:scale={scaleParams} class="disableScrollOnThisPage">
	<JitsiUser />
</div>
<!-- {/if} -->

<dummy-element />

<!-- <svelte:head>
	<script
		src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
	></script>
</svelte:head> -->

<style>
	/* :global(.dark-mode.classroom) { */
	:global(.dark-mode):has(dummy-element) {
		--bg-color: black;
	}
</style>
