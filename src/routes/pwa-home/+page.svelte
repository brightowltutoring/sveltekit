<script>
	import BackgroundVideo from '../BackgroundVideo.svelte';
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
	class="disableScrollOnThisPage h-[70vh] flex justify-center items-center text-center "
>
	<div class="grid grid-rows-1">
		{#if ready}
			<div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{:else}
			<div class="text-6xl font-Poppins pb-4 ">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{/if}
		<div class="grid px-6 text-2xl font-Nunito font-thin ">the navbar is now your friend 🤝</div>
	</div>
</a>
