<script lang="ts">
	export let title = 'Great physics tutor!!';
	export let name = 'Thomas Finn';
	export let date = '2022-06-08';

	import InView from '$lib/Wrappers/InView.svelte';
	import { isDarkMode } from '$lib/store/clientStore';
	import { scrollY } from '$lib/store/scrollStore';
	import { spring } from 'svelte/motion';

	let sineSpring = spring(0, { stiffness: 0.1, damping: 0.25 });

	$: if ($isDarkMode) {
		sineSpring.set(1 - 0.07 * Math.sin(30 * $scrollY));
	} else {
		sineSpring.set(0);
	}

	function hydrateStar(target: Element) {
		if (target instanceof HTMLImageElement) {
			target.src = '/star.webp';
			target.classList.remove('opacity-0');
			console.log('💫');
		}
	}
</script>

<review-card class="prose relative block dark:prose-invert md:pb-[5vw]">
	<review-card-contents class="absolute">
		<h1>{title}</h1>

		<div class="flex flex-row">
			<!-- {#each Array(5) as _} -->
			{#each { length: 5 } as _}
				<InView single once onview={hydrateStar}>
					<img
						style={`filter:hue-rotate(${$sineSpring}turn)`}
						class="h-10 w-10 opacity-0 transition-opacity duration-300 ease-in hover:scale-125"
						src=""
						alt="star"
					/>
				</InView>
			{/each}
		</div>

		<div class="italic">on {date}</div>

		<div class="py-3">
			<slot />
		</div>

		<div class="absolute bottom-0 right-0 -my-10 mx-5 py-3 font-bold">
			{name}
		</div>
	</review-card-contents>
</review-card>
