<script>
    import { fly, scale, fade, blur, slide } from 'svelte/transition'
    import { quintOut, elasticOut } from 'svelte/easing';
    import Navitem from './Navitem.svelte'
    import Hamburger from './Hamburger.svelte';
    import { goto } from '$app/navigation'
    import { isXs, isLoggedIn, routes, scrollY, instDeltaY, isDarkMode, fractionScroll } from '$lib/store.js'
    import { spring } from 'svelte/motion';

    let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25})
    let hueRocket = 0;

    $: if( $isLoggedIn ) { hueRocket = $isDarkMode ? 0.75 : 0 }
    $: if( $isLoggedIn && !$isXs ) { scaleRocket.set( 1 + 0.5*Math.sin($scrollY) ) }

    export let mobileHamburgerClosed
    let mobileOpen;
    $: mobileHamburgerClosed = mobileOpen  
    $: $isLoggedIn ? $routes.login.name = '🚀': $routes.login.name = 'Login'
    // $: logoTextColor=`color:hsl(359,100%,${100*$fractionScroll}%)`


    let unique;
    let hamburgerBtn; //for css version of hamburger button only

    let resetLogoClick
    function clickLogo(){
        goto('/')
        resetLogoClick=!resetLogoClick

        for(key in $routes) { $routes[key].isCurrent=false }
 
        $routes.home.isCurrent=true;
    }


    let jankytown='';
    $:if(!$isXs){
        if($scrollY<250)  jankytown = "sm:sticky sm:top-0"
        if($scrollY>250 && $instDeltaY>0)  jankytown = "sm:sticky sm:-top-20"
        if($scrollY>250 && $instDeltaY<0)  jankytown = "sm:sticky sm:top-0"
    }
    

    // $instDeltaY>0 essentially means "currently scrolling down" as $instDeltaY relaxes to 0 shortly.
    // $instDeltaY == 0, jankytown is not updated.

    let btnColor = 'sm:bg-red-300 '
    let btnColorHover = 'sm:hover:bg-red-300'

    import LightDarkMode from '$lib/LightDarkMode.svelte'
</script>



<Hamburger bind:mobileOpen bind:unique />
<!-- <Hamburger {hamburgerBtn} bind:mobileOpen bind:unique /> -->
<!-- TODO: blur causing darked navbar when transitionining on chrome. Still need to find a way to blur the text -->
<!-- backdrop-blur-3xl -->


<logo-and-navbar 
    class="{jankytown} sm:backdrop-blur-3xl z-50  transition-all duration-300 sm:right-0 flex sm:justify-between items-center justify-center sm:w-full h-[85vh] sm:h-16 sm:inline-flex sm:pr-10 sm:pl-10 {!mobileOpen && "hidden"}  " 

    >
    
    {#key resetLogoClick }
    <div class=" translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20
    sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent" 
        in:scale={{duration:1200, easing:elasticOut}} 
        on:mouseup={ clickLogo } >
            THINKSOLVE
    </div>
    {/key}


    <nav>
     {#key unique }
        <ul class="flex flex-col sm:flex-row text-3xl sm:text-lg items-center" 
         >  
           
            {#if $isXs && mobileOpen }
                {#key !$isDarkMode }
                <li in:slide={{duration:600, easing:quintOut}} class="pb-3 ">
                    <LightDarkMode/>
                </li>
                {/key}
            {/if}

            {#each Object.keys($routes) as KEY }
            <li class="py-3 sm:p-1 " 
                style={ (KEY =='login' && $isLoggedIn) && 
                `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)` }
             >
                <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} bind:btnColor={btnColor} bind:btnColorHover={btnColorHover} />
             
            </li>
            {/each}

            {#if !$isXs }
                {#key !$isDarkMode }
                <li in:slide={{duration:600, easing:quintOut}} class="px-3  translate-y-1">
                    <LightDarkMode/>
                </li>
                {/key}
            {/if}
        
        </ul>    
        {/key}
        
    </nav>
    
</logo-and-navbar>







