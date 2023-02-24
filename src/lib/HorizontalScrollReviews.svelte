<script>
	import { reviews } from '../routes/reviews/reviews';

	// @ts-ignore
	import ReviewCreator from '../routes/reviews/ReviewCreator.svelte';
	// import ReviewCreator from '../routes/reviews/reviewCreator.svx';
</script>

<!-- example taken from: https://tailwindcomponents.com/component/horizontal-scroll-card-components -->

<!-- hideScrollBar -->
<section
	class="mt-16 flex overflow-x-scroll rounded-xl bg-[#f0efef] py-5 scrollbar-hide dark:bg-[#312e44]"
>
	<div class="mx-10 flex gap-x-5 md:mx-20 lg:mx-40">
		<!-- {#each Array(30) as _, i} -->
		{#each reviews as { name, title, date, body }, index}
			{@const scrollToNextCard = () => {
				document
					.getElementById(`card_${(index + 1) % reviews.length}`)
					?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}}
			<!-- hideScrollBar   -->
			<!-- w-96 -->
			<div
				id={`card_${index}`}
				on:click={scrollToNextCard}
				class="h-[70vh] w-[85vw] max-w-sm overflow-hidden overflow-y-scroll scroll-smooth rounded-xl bg-white p-5 px-10 shadow-md transition-shadow duration-300 ease-in-out scrollbar-hide hover:shadow-xl dark:bg-[#252333]"
			>
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
