<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import BackgroundVideo from '../BackgroundVideo.svelte';
	// import { goto } from '$app/navigation';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<BackgroundVideo />

<div class="h-[70vh] flex justify-center items-center text-center ">
	<!-- used to use button element with 'on:click={() => goto('/plans')}', however breaks when JS turns off  -->
	<a href="/plans" class="grid grid-rows-1">
		{#key ready}
			<div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>

			<div class="grid px-6 text-2xl font-Nunito font-thin ">the navbar is now your friend 🤝</div>
		{/key}
	</a>
</div>
