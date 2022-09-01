<script>
    import { fly, slide, scale, /* fade, blur, crossfade */ } from 'svelte/transition'
    import { quintOut, elasticOut, sineOut } from 'svelte/easing';
    import Navitem from './Navitem.svelte'
    import Hamburger from './Hamburger.svelte';
    import { goto } from '$app/navigation'
    import { fractionScroll, isXs, customEase, isLoggedIn, routes, 
        moduloScale,
        scrollY, scrollYMax, startScrollY 
    } from '$lib/store.js'


    // import { page } from '$app/stores'
    // $:{
    //     Object.keys($routes).forEach( KEY =>{
                
    //             if( KEY == $page.routeId ) {
    //                 $routes[KEY].isCurrent = true
    //             }
    //             else if( KEY =='home' && $page.routeId.length == 0 ) {
    //                 $routes[KEY].isCurrent = true
    //             }
    //             else $routes[KEY].isCurrent = false
    //     })
    // }

    // $: for( let KEY of Object.keys($routes)) {
    //     if($page.routeId == KEY) {
    //         $routes[KEY].isCurrent = true
    //     }
    //     else $routes[KEY].isCurrent = false
    // }


    export let mobileHamburgerClosed
    let mobileOpen;
    $: mobileHamburgerClosed = mobileOpen  
    $: $isLoggedIn ? $routes.login.name = '🚀': $routes.login.name = 'Login'
    $: logoTextColor=`hsl(359,100%,${100*$fractionScroll}%)`

    // TODO: for pulsing rocket .. moduleScroll is {#key} for scale transition below
    let moduloScroll
    setInterval(()=>{
        moduloScroll = $scrollY
    },1000)
    // $: console.log(moduloScroll);


    let unique;
    let hamburgerBtn; //for css version of hamburger button only

    let logo
    let resetLogoClick
    function clickLogo(){
        goto('/')
        resetLogoClick=!resetLogoClick
 
        Object.keys($routes).forEach(key=>{
            $routes[key].isCurrent=false;
        })
        $routes.home.isCurrent=true;
    }
</script>


<Hamburger {hamburgerBtn} bind:mobileOpen bind:unique />

{#key unique }
<navbar class="flex justify-between items-center w-1/2 sm:w-full fixed right-10 top-32 sm:right-0 sm:top-0 sm:inline-flex {!mobileOpen && "hidden"} backdrop-blur-3xl sm:py-5 sm:pr-10 sm:pl-10  ">
    <!-- -->
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
            <!-- {#if KEY=='login' && $isLoggedIn }
                    {#key moduloScroll }
                    <li class="py-3 sm:p-1" in:moduloScale >
                        <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} />
                    </li>
                    {/key}
                {:else } -->
                    <li class="py-3 sm:p-1">
                        <Navitem bind:mobileOpen href={$routes[KEY].href} content={$routes[KEY].name} bind:bool={$routes[KEY].isCurrent} bind:routes={$routes} btnColor={$routes[KEY].btnColor} btnColorHover={$routes[KEY].btnColorHover} />
                    </li>
                <!-- {/if} -->
            {/each}
          
        </ul>    

        
    </nav>

</navbar>
{/key}



