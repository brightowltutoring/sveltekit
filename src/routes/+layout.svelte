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
on:resize={ setScrollYMax } on:popstate={ clearRedirectStuff } />


<script>
	import '../app.css'
	import Navbar from '$lib/Navbar.svelte'
	import { isXs, instDeltaY, innerWidth, scrollY, windowInnerHeight, scrollYMax, isLoggedIn, redirectAfterLoginTimeOut, redirectSetInterval, routes } from '$lib/store.js' 	
	import { page } from '$app/stores'	
	import { onMount } from 'svelte'
	import { auth } from '$lib/firebase.js'
	import { onAuthStateChanged } from "firebase/auth"

	let mobileHamburgerClosed = true

	function setScrollYMax(){
		$scrollYMax = document.body.scrollHeight - $windowInnerHeight;
	}
	
	function clearRedirectStuff(){
		clearTimeout($redirectAfterLoginTimeOut);
		clearInterval($redirectSetInterval)
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

	
	let jankytown='';
    $:if(!$isXs){
        if($scrollY==0)  jankytown = " top-0"
        if($scrollY>250 && $instDeltaY>0)  jankytown = "backdrop-blur-md  -top-20"
        if($scrollY>250 && $instDeltaY<0)  jankytown = "backdrop-blur-3xl top-0"
    }
    
</script>

<!-- if controlling padding here, then the hiding nav effect only works if defined here 
... Used to have the code in Navbar.svelte itself
-->
<div class="px-[4%] sm:px-[7%] pt-2 sticky {jankytown} z-50 duration-300">
	<Navbar bind:mobileHamburgerClosed />
</div>

<div class=" h-[400vh] px-[4%] sm:px-[7%] pt-20 sm:block  { (mobileHamburgerClosed && $isXs) && "hidden opacity-0"} transition-all duration-500" >
	<slot/>
</div>	
