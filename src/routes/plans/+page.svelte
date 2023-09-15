<script lang="ts">
	import { scale } from 'svelte/transition';
	import PlansCard from './PlansCard.svelte';
	import { plansCardArray } from './plansCardArray';
	import { enhance } from '$app/forms';
	import { elasticOut } from 'svelte/easing';
	import { page } from '$app/stores';

	// $: ({
	// 	data: { stripeCheckoutUrl }
	// } = $page);

	$: stripeCheckoutUrl = $page.data.stripeCheckoutUrl;
	$: showElement = $page.url.pathname.includes('/plans') && stripeCheckoutUrl;
</script>

{#if showElement}
	<div class="topRightCornerPage" in:scale|global={{ duration: 1000, easing: elasticOut }}>
		<a href={stripeCheckoutUrl} class=" bg-teal-500 p-3 rounded-md relative cursor-pointer">
			<form
				class="absolute hover:scale-125 -top-1 -right-1 flex justify-center place-items-center bg-rose-300 rounded-full p-1 w-5 h-5 duration-1000"
				method="POST"
				use:enhance
				in:scale|global={{ delay: 300, duration: 1000, easing: elasticOut }}
			>
				<button formaction="?/deleteSession">𝕏</button>
			</form>
			<span> Check Out </span>
		</a>
	</div>
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

<style lang="postcss">
	.topRightCornerPage {
		@apply absolute top-10 right-10 z-50;
	}
</style>
