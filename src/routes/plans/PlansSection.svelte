<script>
	import PlansCard from './PlansCard.svelte';
	import { plansCardArray } from './plansCardArray';

	import { elasticOut } from 'svelte/easing';

	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => (mounted = true));
</script>

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

<!-- <PlansCard {buttonColor} {payNowUrl} {payLaterUrl}>
	<span slot="cardTitle"> {cardTitle} </span>
	<span slot="cardText"> {cardText} </span>
</PlansCard>  -->
