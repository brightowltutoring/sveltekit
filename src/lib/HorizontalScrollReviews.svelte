<script>
	import { reviews } from '../routes/reviews/reviews';

	// @ts-ignore
	import ReviewCreator from '../routes/reviews/reviewCreator.svx';
</script>

<!-- example taken from: https://tailwindcomponents.com/component/horizontal-scroll-card-components -->
<section class="p-auto m-auto my-10 flex flex-col  py-10">
	<div class="hide-scroll-bar flex overflow-x-scroll ">
		<div class="mx-10 flex flex-nowrap md:mx-20 lg:mx-40 ">
			<!-- {#each Array(30) as _, i} -->
			{#each reviews as { name, title, date, body }}
				<div class="inline-block px-3">
					<div
						class="hide-scroll-bar  card  h-[600px] w-96 max-w-sm overflow-hidden overflow-y-scroll rounded-lg p-10 shadow-md transition-shadow duration-300 ease-in-out  hover:shadow-xl"
					>
						<ReviewCreator {title} {name} {date}>
							{body}
						</ReviewCreator>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}

	.card {
		@apply bg-white;
	}

	:global(html.dark-mode) .card {
		@apply bg-[#252333];
	}
</style>
