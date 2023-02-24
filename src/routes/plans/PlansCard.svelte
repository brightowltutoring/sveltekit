<script lang="ts">
	import PlansButton from './PlansButton.svelte';

	export let payNowUrl = '';
	export let payLaterUrl = '';

	const payButtons = [
		{
			resetter: false,
			url: payNowUrl,
			opacityTW: 'bg-opacity-100',
			text: 'Pay Now'
		},
		{
			resetter: false,
			url: payLaterUrl,
			opacityTW: 'bg-opacity-70',
			text: 'Pay Later'
		}
	];

	export let btnColorHover = '';

	export let card: number; /* 1,2,3, */
</script>

<plans-card
	class="group block rounded-xl bg-[#f2f7fa] p-5 text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#262333] dark:hover:shadow-xl"
>
	<p class="py-5 text-center font-Poppins text-4xl">
		<slot name="cardTitle">Classico</slot>
	</p>

	{#each payButtons as button}
		<div class="inline-block group-hover:scale-95 group-hover:animate-pulse ">
			<PlansButton {button} {btnColorHover} {card} />
		</div>
	{/each}

	<div class="py-4">
		<slot name="cardText">default cardText</slot>
	</div>
</plans-card>

<!-- UPDATE (feb23,2023): Using tailwind.config.cjs way of implementing darkmode now (referencing 'html.dark-mode' still), rather than the global svelte styles tag way  -->

<!-- Previously the background color of this component was set with "style={`background:${$elementColor}`}" — i.e. inline css via reactive javascript-string (specifically a derived svelte store variable) — however this would cause 'darkmode flash' when starting with the /plans route (and darkmode saved/set from localStorage).  -->

<!-- <style>
	plans-card {
		background: #f2f7fa;
		@apply hover:shadow-lg;
	}

	:global(html.dark-mode) plans-card {
		background: #262333;
		@apply hover:shadow-xl;
	}
</style> -->
