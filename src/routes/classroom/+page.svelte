<script lang="ts">
	import JitsiUser from './JitsiUser.svelte';
	import { disableScrollingOnPage } from '$lib/utils';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { page } from '$app/stores';

	disableScrollingOnPage($page.url.pathname);

	const scaleParams = {
		duration: 2000,
		easing: quintOut
	};
</script>

<div in:scale={scaleParams} class="disableScrollOnThisPage">
	<JitsiUser />
</div>
