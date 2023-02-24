<script>
	import { isDarkMode, scrollY } from '$lib/store';
	import InView from '$lib/Wrappers/InView.svelte';

	export let title = 'Great physics tutor!!';
	export let name = 'Thomas Finn';

	export let date = '2022-06-08';

	// TODO: this breaks on ios simulator ... specifically doesnt respect the 'lightmode' restriction

	import { spring } from 'svelte/motion';
	let sineSpring = spring(0, { stiffness: 0.1, damping: 0.25 });

	$: if ($isDarkMode) {
		sineSpring.set(1 - 0.07 * Math.sin(30 * $scrollY));
	} else {
		sineSpring.set(0);
	}

	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => (mounted = true));
</script>

<!-- <article class="prose relative {$isDarkMode && "prose-invert"} md:pb-[5vw] ">   -->
<review-card class="prose relative block dark:prose-invert md:pb-[5vw]">
	<!-- darkmode now handled in styles section -->

	<review-card-contents class="absolute">
		<h1>{title}</h1>

		<div class="flex flex-row">
			{#each Array(5) as _, i}
				<InView
					single
					once
					onview={(target) => {
						console.log('💫');
						target.classList.remove('opacity-0');
						target.src = '/star.webp';
					}}
				>
					<img
						src=""
						class="opacity-0 transition-opacity duration-300 ease-in hover:scale-125"
						alt="star"
						style={`width:40px; height:40px; filter:hue-rotate(${$sineSpring}turn) `}
					/>

					<!-- filter:hue-rotate(${$sineSpring}turn)  -->
				</InView>
			{/each}
		</div>

		<div class="italic">on {date}</div>

		<div class="py-3">
			<slot />
		</div>

		<div class="absolute right-0 bottom-0 -my-10 mx-5 py-3 font-bold">
			{name}
		</div>
	</review-card-contents>
</review-card>

<!-- UPDATE (feb23,2023): Using tailwind.config.cjs way of implementing darkmode now (referencing 'html.dark-mode' still), rather than the global svelte styles tag way  -->
<!-- <style>
	:global(html.dark-mode) review-card {
		@apply prose-invert;
	}
</style> -->
