<svelte:window bind:scrollY={$scrollY}  bind:innerWidth={$innerWidth} bind:innerHeight={$windowInnerHeight}
on:resize={setScrollYMax} on:popstate={ clearTimeout($redirectAfterLoginTimeOut) } />

<IsLoggedIn/>
<PageTitle/>

<script>
	import '../app.css'
	import PageTitle from '$lib/PageTitle.svelte'
	import IsLoggedIn from '$lib/IsLoggedIn.svelte'
	import Navbar from '$lib/Navbar.svelte'
	import { onMount } from 'svelte'
	import { innerWidth, scrollY, windowInnerHeight, scrollYMax, redirectAfterLoginTimeOut
		// instDeltaY, routes
	} from '$lib/store.js' 	

	onMount( setScrollYMax )
	function setScrollYMax(){
		$scrollYMax = document.body.scrollHeight - $windowInnerHeight;
	}
	
	let mobileHamburgerClosed = true
</script>

<Navbar bind:mobileHamburgerClosed />

<div class="sm:block {mobileHamburgerClosed && "hidden"} h-[400vh]" >
	<slot/>
</div>	

