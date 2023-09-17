<script lang="ts">
	interface payButton {
		resetter: boolean;
		url: string;
		opacityTW: string;
		text: string;
	}

	import PlansButton from './PlansButton.svelte';
	// import PlansButton from './PlansButton-experimental.svelte';
	import { scale } from 'svelte/transition';

	export let inScale = {};

	export let cardText = '';
	export let cardTitle = '';

	export let payNowUrl = '';
	export let payLaterUrl = '';
	export let buttonColor: string;

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
			opacityTW: 'bg-opacity-80',
			text: 'Pay Later'
		}
	];
</script>

<plans-card
	in:scale|global={inScale}
	class="group block rounded-xl bg-[#f2f7fa] p-5 text-center shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#262333] dark:hover:shadow-xl"
>
	<p class="py-5 text-center font-Poppins text-4xl">
		{cardTitle}
	</p>

	{#each payButtons as button}
		<PlansButton
			{button}
			class="{buttonColor} inline-block group-hover:scale-95 group-hover:animate-pulse"
		/>
	{/each}

	<div class="py-4">
		{cardText}
	</div>
</plans-card>
