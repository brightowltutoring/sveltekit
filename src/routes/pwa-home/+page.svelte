<script>
	import { slide } from 'svelte/transition';
	import BackgroundVideo from '../BackgroundVideo.svelte';
	import { onMount } from 'svelte';
	// import { browser } from '$app/environment';
	// import { goto } from '$app/navigation';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<BackgroundVideo />

<div class="h-[70vh] flex justify-center items-center text-center ">
	<a href="/plans" class="grid grid-rows-1">
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
	</a>
</div>
