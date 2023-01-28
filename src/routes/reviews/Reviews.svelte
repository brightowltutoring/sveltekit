<script>
	// @ts-ignore
	import ReviewCreator from './reviewCreator.svx';
	import { reviews } from './reviews';
</script>

<div class="scale-90">
	<!-- <div
    class="grid grid-cols-dynamic gap-x-10  gap-y-[80vw] sm:gap-y-[55vw] md:gap-y-[65vw] lg:gap-y-[45vw] -translate-y-60 sm:translate-y-0"
  > -->

	<div
		class="grid -translate-y-60 grid-cols-1 gap-x-10 gap-y-[500px] sm:translate-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[700px]"
	>
		{#each reviews as { name, title, date, body }}
			<ReviewCreator {title} {name} {date}>
				{body}
			</ReviewCreator>
		{/each}
	</div>
</div>
