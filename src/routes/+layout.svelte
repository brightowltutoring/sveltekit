<svelte:window bind:scrollY={$scrollY}  bind:innerWidth={$innerWidth} bind:innerHeight={$windowInnerHeight}/>
<IsLoggedIn/>
<PageTitle/>

<script>
	import '../app.css'
	import PageTitle from '$lib/PageTitle.svelte';
	import IsLoggedIn from '$lib/IsLoggedIn.svelte';
	import Navbar from '$lib/Navbar.svelte'
	import {innerWidth, scrollY, instDeltaY, windowInnerHeight } from '$lib/store.js' 

	let mobileHamburgerClosed = true
</script>


<Navbar bind:mobileHamburgerClosed />

<div class="sm:block {mobileHamburgerClosed && "hidden"}" >
	<slot/>
</div>	
