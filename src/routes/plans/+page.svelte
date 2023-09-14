<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	// import Transition from '$lib/Wrappers/Transition.svelte';
	import PlansCard from './PlansCard.svelte';
	import { plansCardArray } from './plansCardArray';

	import { elasticOut } from 'svelte/easing';

	$: stripeUrl = $page.data.stripeUrl;
</script>

{#if stripeUrl}
	<a href={stripeUrl}>pay now</a>
	<form method="POST" use:enhance>
		<button formaction="?/deleteSession">delete session</button>
	</form>
{/if}

<!-- <Transition IN={scale}> -->

<plans-section
	class="mx-2 grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16"
>
	{#each plansCardArray as { buttonColor, payNowUrl, payLaterUrl, cardTitle, cardText }, i}
		{@const inScale = {
			delay: 100 * i,
			duration: 1000,
			easing: elasticOut
		}}
		<PlansCard {inScale} {buttonColor} {payNowUrl} {payLaterUrl} {cardText} {cardTitle} />
	{/each}
</plans-section>
<!-- </Transition> -->
