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

    $: if( $isLoggedIn && !$isXs ){
        hueRocket = $fractionScroll*10;
        scaleRocket.set(1 + 0.5*Math.sin($scrollY))
        }
    // "Equivaent" code below .. for illustration how I did it before
    // $: {
    //     if($scrollY == 0){ scaleRocket.set(1)}
    //     if($scrollY % 2 == 0 && $scrollY >0 ){ scaleRocket.set(1.3)}
    //     if($scrollY % 2 !==0 && $scrollY >0 ){ scaleRocket.set(1)}
    // }

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


//  this is similar to removing/adding css classes... while still being able to use tailwind
// TODO: doesnt look as good on chrome
let navTranslateY = ""
$:{
    if($scrollY==0 || ($instDeltaY<0) ) navTranslateY = ""
    if($instDeltaY>60) navTranslateY = "translate-y-[-200px] brightness-[99%]"
}
</script>

<Hamburger {hamburgerBtn} bind:mobileOpen bind:unique />

{#key unique }
<logo-and-nav class=" fixed {navTranslateY} transition-transform duration-500 sm:right-0 sm:top-0 flex justify-between items-center w-1/2 sm:w-full right-10 top-32 sm:inline-flex sm:pr-10 sm:pl-10 {!mobileOpen && "hidden"} {$scrollY>0 && "sm:backdrop-blur-3xl"}" >


    {#key resetLogoClick }
    <div class="translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20
    sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110  transition-transform selection:bg-transparent" 
        style:color={logoTextColor}
        in:scale={{duration:1200, easing:elasticOut}} 
        on:mouseup={ clickLogo } >
            THINKSOLVE
    </div>
    {/key}


    <nav class="sm:px-4"
        in:fly={{y:-75,duration:1500, easing: elasticOut}}
        out:fly={{y:-50,duration:250, easing: quintOut}} 
        on:click={_=>{ hamburgerBtn=false }}    
    >

        <ul class="flex flex-col sm:flex-row text-3xl sm:text-lg sm:h-[60px] sm:items-center " 
        style:color={$isXs?"black":logoTextColor} 
        >
            {#each Object.keys($routes) as KEY }
                    <li class="py-3 sm:p-1" 
                        style={ (KEY =='login' && $isLoggedIn) && 
                        `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)` }
                    >
                    <!-- this conditional style eliminate code duplcation as in the alternate solution below
                    (below this each block -->
                        <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} />
                    </li>
            {/each}
        
            <!-- {#each Object.keys($routes) as KEY }
                {#if KEY=='login' && $isLoggedIn }
                    <li class="py-3 sm:p-1" style="transform:scale({$scaleRocket})">
                        <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} />
                    </li>
                {:else }
                    <li class="py-3 sm:p-1">
                        <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} />
                    </li>
                {/if}
            {/each} -->
        </ul>    

    </nav>

</logo-and-nav>
{/key}





