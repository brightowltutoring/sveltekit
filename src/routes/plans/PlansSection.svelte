<script>
	// import InView from "$lib/Wrappers/InView.svelte";
	import PlansCard from './PlansCard.svelte';
	import { elasticOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	//  slide ,fade, fly,
	import { plansCardArray } from './plansCardArray';
	import { onMount } from 'svelte';
	// import { onMount, createEventDispatcher } from "svelte";
	// import { cssToHead, jsToHead } from "$lib/utils";
	// let dispatch = createEventDispatcher();

	// export let plansCards = plansCardArray;

	// export let noTransition = false; // when user does include noTransition as a prop then this is rewritten to 'true'
	// let ready = noTransition;
	// onMount(() => (ready = true));
	// the 'ready' variable logic allows the in:scale div to animate (svelte transition) when going directly to this plans route ..otherwise only works when navigating from another route
	// function addCalendlyCSSandJS() {
	//   console.log("📅");
	//   jsToHead(
	//     "calendlyJS",
	//     "https://assets.calendly.com/assets/external/widget.js"
	//   );
	//   cssToHead(
	//     "calendlyCSS",
	//     "https://assets.calendly.com/assets/external/widget.css"
	//   );
	// }

	// This 'boop-function' dispatches a 'boop-event' when called; below, it's called as soon as the element is created with 'use:boop'.  An alternative to 'use:boop' logic is 'use={ dispatch("boop", OBJECT) }' ... but I think the former is more html-readable
	// function boop() {
	//   dispatch("boop", { plansCardArray, message: "n i boop" });
	// }

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<!-- <InView once margin={"200px"} onview={addCalendlyCSSandJS}> -->
<!-- use:boop -->
<!-- lg:pb-32 lg:pt-10 -->
<plans-section
	class="grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-dynamic sm:overflow-visible lg:px-16 "
>
	<!-- {#if ready} -->

	<!-- {#key mounted} -->
	{#each plansCardArray as { card, payNowUrl, payLaterUrl, cardTitle, cardText }, i}
		<div
			in:scale={{
				delay: 100 * i,
				duration: 1000,
				easing: elasticOut
			}}
		>
			<PlansCard {card} {payNowUrl} {payLaterUrl}>
				<span slot="cardTitle"> {cardTitle} </span>
				<span slot="cardText"> {cardText} </span>
			</PlansCard>
		</div>
	{/each}
	<!-- {/key} -->
	<!-- {/if} -->
</plans-section>
<!-- </InView> -->

<!-- <style>
    .dynamic-col {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } 
</style> -->
<!-- The above grid logic now achieved with the custom 'grid-cols-dynamic' as specific id in tailwind.config.cjs  -->

<!-- <svelte:head>
  <script
    type="text/javascript"
    src="https://assets.calendly.com/assets/external/widget.js"
    async
  ></script>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
</svelte:head> -->
