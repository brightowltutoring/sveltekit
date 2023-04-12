<script>
	import BackgroundVideo from '$lib/BackgroundVideo.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { disableScrollingOnPage } from '$lib/utils';
	disableScrollingOnPage($page.url.pathname);

	let ready = false;
	onMount(() => (ready = true));
</script>

<!-- annoyingly have to add z-10 since background video interferes with the svelte transitioned text in this section -->

<BackgroundVideo />
<a
	href="/plans"
	class="disableScrollOnThisPage z-10 flex h-[70vh] items-center justify-center text-center"
>
	<div class="z-10 grid grid-rows-1">
		{#if ready}
			<div in:slide={{ duration: 500 }} class="pb-4 font-Poppins text-6xl">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{:else}
			<div class="pb-4 font-Poppins text-6xl">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		{/if}
		<div class="grid px-6 font-Nunito text-2xl font-thin">the navbar is now your friend 🤝</div>
	</div>
</a>
