<script>
	import { reviews } from '../routes/reviews/reviews';

	// @ts-ignore
	import ReviewCreator from '../routes/reviews/ReviewCreator.svelte';
	// import ReviewCreator from '../routes/reviews/reviewCreator.svx';
</script>

<!-- example taken from: https://tailwindcomponents.com/component/horizontal-scroll-card-components -->

<section
	class="hideScrollBar mt-16 flex overflow-x-scroll rounded-xl bg-[#f0efef] py-5 dark:bg-[#312e44]"
>
	<div class="mx-10 flex gap-x-5 md:mx-20 lg:mx-40">
		<!-- {#each Array(30) as _, i} -->
		{#each reviews as { name, title, date, body }}
			<review-creator-wrapper
				class="hideScrollBar block h-[500px] w-96 max-w-sm overflow-hidden overflow-y-scroll rounded-xl bg-white p-5 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl  dark:bg-[#252333]"
			>
				<ReviewCreator {title} {name} {date}>
					{body}
				</ReviewCreator>
			</review-creator-wrapper>
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
