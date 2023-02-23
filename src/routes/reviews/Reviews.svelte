<script>
	import { reviews } from './reviews';

	// @ts-ignore
	import ReviewCreator from './reviewCreator.svx';
</script>

<div class="scale-90">
	<div
		class="lg:gap-y-[700px grid -translate-y-60 grid-cols-1 gap-x-10 gap-y-[500px] sm:translate-y-0 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each reviews as { name, title, date, body }}
			<ReviewCreator {title} {name} {date}>
				{body}
			</ReviewCreator>
		{/each}
	</div>
</div>

<!-- <style>
	.scrolling-wrapper {
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.scrolling-wrapper .card {
		display: inline-block;
		width: 800px;
		height: 800px;
	}

	.card {
		border: 2px solid red;
		/* width: 150px;
		height: 75px; */
		background: lightblue;
	}
</style> -->
