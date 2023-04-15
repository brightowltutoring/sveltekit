<script lang="ts">
	import Transition from '$lib/Wrappers/Transition.svelte';
	import BackgroundVideo from '$lib/BackgroundVideo.svelte';
	import { slide } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { disableScrollingOnPage } from '$lib/utils';
	disableScrollingOnPage($page.url.pathname);
</script>

<!-- annoyingly have to add z-10 since background video interferes with the svelte transitioned text in this section -->

<BackgroundVideo />

<a
	href="/plans"
	class="disableScrollOnThisPage z-10 flex h-[70vh] items-center justify-center text-center"
>
	<div class="z-10 grid grid-rows-1">
		<Transition IN={slide} OPTS={{ duration: 1000, easing: elasticOut }}>
			<div class="pb-4 font-Poppins text-6xl">
				You're on the <span class="gradientTextColor"> App!</span>
			</div>
		</Transition>

		<div class="grid px-6 font-Nunito text-2xl font-thin">the navbar is now your friend 🤝</div>
	</div>
</a>
