<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap" rel="stylesheet">

	{#each Object.keys($routes) as key }
        {#if $page.routeId == "" }
            <title>{ $routes.home.title }  </title>
        {:else if $page.routeId == key }
            <title>{ $routes[ key ].title } </title>
		{/if}
	{/each}
</svelte:head>

<svelte:window bind:scrollY={$scrollY}  bind:innerWidth={$innerWidth} bind:innerHeight={$windowInnerHeight}
on:resize={setScrollYMax} on:popstate={ clearTimeout($redirectAfterLoginTimeOut) } />

<!-- <IsLoggedIn/> -->

<script>
	import Navbar from '$lib/Navbar.svelte'
	import { innerWidth, scrollY, windowInnerHeight, scrollYMax, isLoggedIn, redirectAfterLoginTimeOut, routes } from '$lib/store.js' 	
	import { page } from '$app/stores'	
	import '../app.css'
	// import IsLoggedIn from '$lib/IsLoggedIn.svelte'
	import { onMount } from 'svelte'
	import { onAuthStateChanged } from "firebase/auth"
	import { auth } from '$lib/firebase.js'

	let mobileHamburgerClosed = true

	function setScrollYMax(){
		$scrollYMax = document.body.scrollHeight - $windowInnerHeight;
	}

	onMount( ()=>{
		setScrollYMax();

		onAuthStateChanged( auth, user => {
			if( user ) {
				$isLoggedIn = true
				console.log("$isLoggedIn",$isLoggedIn)
			}                           
			else {
				$isLoggedIn = false
				console.log("$isLoggedIn",$isLoggedIn)
			}
		})
	})
</script>

<Navbar bind:mobileHamburgerClosed />

<div class="sm:block {mobileHamburgerClosed && "hidden"} h-[400vh]" >
	<slot/>
</div>	

