<script>
	import BackgroundVideo from '../../lib/BackgroundVideo.svelte';
	import { slide } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { disableScrollingOnPage } from '$lib/utils';
	disableScrollingOnPage($page.url.pathname);

	let ready = false;
	onMount(() => (ready = true));
</script>

<BackgroundVideo />
<a
	href="/plans"
	class="disableScrollOnThisPage flex h-[70vh] items-center justify-center text-center "
>
	<!-- annoyingly have to add z-10 since background video interferes with this svelte transitioned text -->

	<div class="z-10 grid grid-rows-1">
		{#if ready}
			<div in:slide={{ duration: 500 }} class="pb-4 font-Poppins text-6xl ">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{:else}
			<div class="pb-4 font-Poppins text-6xl ">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{/if}
		<div class="grid px-6 font-Nunito text-2xl font-thin ">the navbar is now your friend 🤝</div>
	</div>
</a>
