<script lang="ts">
	export let title = 'Great physics tutor!!';
	export let name = 'Thomas Finn';
	export let date = '2022-06-08';
	import { isDarkMode } from '$lib/store/clientStore';
	import { scrollY } from '$lib/store/scrollStore';
	import { spring } from 'svelte/motion';

	const ORIGINAL_SPRING_VALUE = 0;
	const sineSpring = spring(ORIGINAL_SPRING_VALUE);
	$: $scrollY, sineSpringSetter();

	let timeout: NodeJS.Timeout;
	function sineSpringSetter() {
		if (timeout) clearTimeout(timeout);
		if (!$isDarkMode) return;

		sineSpring.set(0.3 * Math.sin($scrollY));

		timeout = setTimeout(() => {
			sineSpring.set(ORIGINAL_SPRING_VALUE);
		}, 1500);
	}

	// $: if ($isDarkMode) {
	// 	sineSpring.set(Math.sin($scrollY), { soft: 1 });
	// }
</script>

<review-card class="prose relative block dark:prose-invert md:pb-[5vw]">
	<review-card-contents class="absolute">
		<h1>{title}</h1>

		<div class="flex flex-row">
			{#each Array(5) as _}
				<img
					style={`filter:hue-rotate(${$sineSpring}turn)`}
					class="flickerWhenDarkMode h-10 w-10 transition-transform duration-200 ease-in hover:scale-110"
					src="/star.webp"
					alt="star"
				/>
				<!-- <Star /> -->
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

<style>
	:global(html.dark-mode) .flickerWhenDarkMode {
		animation: flickerWhenDarkMode 1.5s infinite;
	}
	@keyframes flickerWhenDarkMode {
		50% {
			filter: hue-rotate(0.06turn);
		}
	}
</style>
