<script>
    import { fly, scale /* fade, blur, crossfade */ } from 'svelte/transition'
    import { quintOut, elasticOut } from 'svelte/easing';
    import Navitem from './Navitem.svelte'
    import Hamburger from './Hamburger.svelte';
    import { goto } from '$app/navigation'
    import { isXs, isLoggedIn, routes, scrollY, instDeltaY, fractionScroll, scrollYMax 
    } from '$lib/store.js'
    import { spring } from 'svelte/motion';

    let scaleRocket = spring(2, { stiffness: 0.1, damping: 0.25})
    let hueRocket=0;

    // !isXs not crucial ... but just doesnt execute code while mobile
    $: if( $isLoggedIn && !$isXs ){
        hueRocket = $fractionScroll*10;
        scaleRocket.set(1 + 0.5*Math.sin($scrollY))
    }


    export let mobileHamburgerClosed
    let mobileOpen;
    $: mobileHamburgerClosed = mobileOpen  
    $: $isLoggedIn ? $routes.login.name = '🚀': $routes.login.name = 'Login'
    $: logoTextColor=`hsl(359,100%,${100*$fractionScroll}%)`


    let unique;
    let hamburgerBtn; //for css version of hamburger button only

    let resetLogoClick
    function clickLogo(){
        goto('/')
        resetLogoClick=!resetLogoClick
 
        Object.keys($routes).forEach(key=>{
            $routes[key].isCurrent=false;
        })
        $routes.home.isCurrent=true;
    }


    let jankytown='';
    $:{
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



<Hamburger {hamburgerBtn} bind:mobileOpen bind:unique />
<!-- TODO: blur causing darked navbar when transitionining on chrome. Still need to find a way to blur the text -->

{#key unique }
<logo-and-nav class="{jankytown} backdrop-blur-3xl transition-all duration-700 sm:right-0 flex sm:justify-between items-center justify-center sm:w-full h-screen sm:h-16 sm:inline-flex sm:pr-10 sm:pl-10 {!mobileOpen && "hidden"}  " >


    {#key resetLogoClick }
    <div class=" translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20
    sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent" 
        style:color={logoTextColor}
        in:scale={{duration:1200, easing:elasticOut}} 
        on:mouseup={ clickLogo } >
            THINKSOLVE
    </div>
    {/key}


    <!-- <nav class="sm:px-4" -->
    <nav on:click={_=>{ hamburgerBtn=false }}    
         in:fly={{y:-75,duration:1500, easing: elasticOut}}
         out:fly={{y:-50,duration:250, easing: quintOut}} 
    >

        <ul class="flex flex-col sm:flex-row text-3xl sm:text-lg sm:items-center text-center" 
         >
            
            {#each Object.keys($routes) as KEY }
            <li class="py-3 sm:p-1" 
                style={ (KEY =='login' && $isLoggedIn) && 
                `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)` }
             >
                <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} bind:btnColor={btnColor} bind:btnColorHover={btnColorHover} />
                <!-- <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} /> -->
            </li>
            {/each}
            <li class="px-3 ">
                <LightDarkMode/>
            </li>
        
        </ul>    

    </nav>

</logo-and-nav>
{/key}





