<svelte:window bind:scrollY={$scrollY}  bind:innerWidth={$innerWidth} bind:innerHeight={$windowInnerHeight}/>
<IsLoggedIn/>
<PageTitle/>

<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import IsLoggedIn from '$lib/IsLoggedIn.svelte';
	import '../app.css'
	import Navbar from '$lib/Navbar.svelte'
	import {innerWidth, scrollY, scrollYMax, instDeltaY, windowInnerHeight } from '$lib/store.js' 

	let mobileHamburgerClosed = true

	
	$: atMinScroll = ( $scrollY == 0 )
	$: atMaxScroll = ( $scrollY == $scrollYMax )

	const hideCondition = delta => delta > 60  
	const showCondition = delta =>  delta < -10
	
	let snapShotDeltaY 
	$: {
		if( hideCondition($instDeltaY) ) snapShotDeltaY = $instDeltaY
		if( showCondition($instDeltaY) ) snapShotDeltaY = $instDeltaY
	} 

	$: extendedShowCondition = showCondition(snapShotDeltaY) || atMinScroll 
	// $: extendedShowCondition = showCondition(snapShotDeltaY) || atMinScroll || atMaxScroll
	$: extendedHideCondition = hideCondition(snapShotDeltaY) 
    

</script>

<!-- <Navbar bind:mobileHamburgerClosed /> -->
<div class="{ extendedShowCondition && "opacity-100 " } { extendedHideCondition && "opacity-0  "} duration-300 ">
	<Navbar bind:mobileHamburgerClosed />
</div>

<div class="sm:block {mobileHamburgerClosed && "hidden"} " >
	<slot/>
</div>	







<!-- <div class="block { showCondition(snapShotDeltaY) && "block"} { hideCondition(snapShotDeltaY) && "hidden"} "> -->


	








<!-- TODO: this logic is somehow janky -->
<!-- {#if extendedShowCondition}
	<div class="opacity-100 ">
		<Navbar bind:mobileHamburgerClosed />
	</div>
{:else if extendedHideCondition }
	<div class="opacity-0 ">
		<Navbar bind:mobileHamburgerClosed />
	</div>
{/if} -->











