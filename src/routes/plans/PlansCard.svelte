<script lang="ts">
	interface payButton {
		resetter: boolean;
		url: string;
		opacityTW: string;
		text: string;
	}

	import { scale } from 'svelte/transition';
	import PlansButton from './PlansButton.svelte';

	export let inScale = {};

	export let cardText = '';
	export let cardTitle = '';

	export let payNowUrl = '';
	export let payLaterUrl = '';
	export let buttonColor: string;
	// export let btnColorHover = '';

	const payButtons: payButton[] = [
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
</script>

<plans-card
	in:scale={inScale}
	class="group block rounded-xl bg-[#f2f7fa] p-5 text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#262333] dark:hover:shadow-xl"
>
	<p class="py-5 text-center font-Poppins text-4xl">
		<!-- <slot name="cardTitle">cardTitle</slot> -->
		{cardTitle}
	</p>

	{#each payButtons as button}
		<PlansButton
			{button}
			class="{buttonColor} inline-block group-hover:scale-95 group-hover:animate-pulse"
		/>
	{/each}

	<div class="py-4">
		<!-- <slot name="cardText">cardText</slot> -->
		{cardText}
	</div>
</plans-card>

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
