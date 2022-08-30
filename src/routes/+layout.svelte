<svelte:window bind:scrollY={$scrollY}  bind:innerWidth={$innerWidth} bind:innerHeight={$windowInnerHeight}/>

<script>

	import '../app.css'
	import Navbar from '$lib/Navbar.svelte'
	import {innerWidth, scrollY, scrollYMax, instDeltaY, bgColour, windowInnerHeight } from '$lib/store.js'
	let pageColor = bgColour.about  

	let mobileHamburgerClosed = true

	
	$: atMinScroll = ( $scrollY == 0 )
	$: atMaxScroll = ( $scrollY == $scrollYMax )

	const hideCondition = delta => delta > 10  
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




<!-- <div class="block { showCondition(snapShotDeltaY) && "block"} { hideCondition(snapShotDeltaY) && "hidden"} "> -->
<div class="{ extendedShowCondition && "opacity-100" } { extendedHideCondition && "opacity-0"} ">
	<Navbar bind:mobileHamburgerClosed />
</div>

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

<div class="sm:block {mobileHamburgerClosed && "hidden"}" >
	<slot  />
</div>	









