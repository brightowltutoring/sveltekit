<script lang="ts">
	import PlansCard from './PlansCard.svelte';
	import { plansCards } from './plansCardStuff';
	import { elasticOut } from 'svelte/easing';
</script>

<!-- <Transition IN={scale}> -->

<plans-section
	class="mx-2 grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16"
>
	{#each plansCards as { buttonColor, payNowUrl, payLaterUrl, cardTitle, cardText }, i}
		<PlansCard index={i} {buttonColor} {payNowUrl} {payLaterUrl} {cardText} {cardTitle} />
	{/each}
</plans-section>
<!-- <plans-section
	class="mx-2 grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16"
>
	{#each plansCards as { buttonColor, payNowUrl, payLaterUrl, cardTitle, cardText }, i}
		{@const inScale = {
			delay: 100 * i,
			duration: 1000,
			easing: elasticOut
		}}
		<PlansCard {inScale} {buttonColor} {payNowUrl} {payLaterUrl} {cardText} {cardTitle} />
	{/each}
</plans-section> -->

<!-- </Transition> -->
