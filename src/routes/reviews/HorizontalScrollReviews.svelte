<script lang="ts">
	import { reviews } from './reviews';

	// @ts-ignore
	import ReviewCreator from './ReviewCreator.svelte';

	const reviewsLength: number = reviews.length;

	function horizScroll(index: number, to = 'right') {
		let targetIndex = to === 'left' ? index - 1 : index + 1;

		if (targetIndex < 0) targetIndex += reviewsLength;

		document
			.getElementById(`card_${targetIndex % reviewsLength}`)
			?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
</script>

<!-- example taken from: https://tailwindcomponents.com/component/horizontal-scroll-card-components -->

<section
	class="mt-16 flex overflow-x-scroll rounded-xl bg-[#f0efef] py-5 scrollbar-hide dark:bg-[#312e44] {$$props.class}"
>
	<div class="mx-10 flex gap-x-5 md:mx-20 lg:mx-40">
		<!-- {#each Array(30) as _, i} -->
		{#each reviews as { name, title, date, body }, index}
			<!-- hideScrollBar   -->
			<!-- w-96 -->
			<div
				id={`card_${index}`}
				class="relative h-[70vh] w-[85vw] max-w-sm overflow-hidden overflow-y-scroll scroll-smooth rounded-xl bg-white p-5 px-10 shadow-md transition-shadow duration-300 ease-in-out scrollbar-hide hover:shadow-xl dark:bg-[#252333]"
			>
				<a
					href={`#card_${index + 1}`}
					on:click|preventDefault={() => horizScroll(index, 'right')}
					aria-label="right horizontal scroll to next review card"
					class="edgeCardClick right-0"
				/>
				<a
					href={`#card_${index - 1}`}
					aria-label="left horizontal scroll to next review card"
					on:click|preventDefault={() => horizScroll(index, 'left')}
					class="edgeCardClick left-0"
				/>
				<ReviewCreator {title} {name} {date}>
					{body}
				</ReviewCreator>
			</div>
		{/each}
	</div>
</section>

<!-- Using tailwind.config.cjs way of implementing darkmode now (referencing 'html.dark-mode' still), rather than the global svelte styles tag way -->
<!-- <style>
	:global(html.dark-mode) review-creator-wrapper {
		@apply bg-[#252333];
	}

	:global(html.dark-mode) section {
		@apply bg-[#312e44];
	}
</style> -->

<style>
	.edgeCardClick {
		@apply absolute top-0 z-10 h-full w-16 rounded-full;
	}
</style>
