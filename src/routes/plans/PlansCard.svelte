<script context="module">
	let prevTimesMounted = 0;
</script>

<script lang="ts">
	import PlansButton from './PlansButton.svelte';
	// import PlansButton from './PlansButton-old.svelte';
	import { scale } from 'svelte/transition';
	import type { payButton } from './plansCardStuff';

	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { sleep } from '$src/lib/utils';

	export let index = 0;
	// export let inScale = {};

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

	let showTransitionOnce = prevTimesMounted == 0 && $page.route.id === '/plans';
	let toggle = false;
	onMount(() => {
		if (showTransitionOnce) {
			prevTimesMounted++;
			toggle = true;
		}
	});
</script>

{#key toggle}
	<plans-card
		in:scale|global={{
			delay: showTransitionOnce ? 100 * index : 0,
			duration: showTransitionOnce ? 1000 : 0,
			easing: elasticOut
		}}
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
{/key}
