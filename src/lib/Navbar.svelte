<script>
    import { fly, slide, scale, /* fade, blur, crossfade */ } from 'svelte/transition'
    import { quintOut, elasticOut, sineOut } from 'svelte/easing';
    import Navitem from './Navitem.svelte'
    import Hamburger from './Hamburger.svelte';
    import { goto } from '$app/navigation'
    import { fractionScroll, isXs, customEase, isLoggedIn } from '$lib/store.js'

    export let mobileHamburgerClosed

    let allBtnColor = 'sm:bg-[rgba(69,140,117,0.8)]'
    let allBtnColorHover = 'hover:sm:bg-[rgba(69,140,117,0.5)]'


    // reactive "login" name
    $: navBar = {
        mobileOpen:false,
        item:
        [
            {
                name: "Home",
                href: "/",
                isClicked: true,
                btnColor: allBtnColor ,
                btnColorHover: allBtnColorHover,
            },
            {
                name: "Plans",
                href: "/plans",
                isClicked: false,
                btnColor: allBtnColor ,
                btnColorHover: allBtnColorHover,
            },
            {
                name: "Etc",
                href: "/etc",
                isClicked: false,
                btnColor: allBtnColor ,
                btnColorHover: allBtnColorHover,
            },
            {
                name: `${$isLoggedIn ? "🚀": "Login"}`,
                href: "/login" ,
                isClicked: false,
                btnColor: allBtnColor ,
                btnColorHover: allBtnColorHover,
            },
           
        ]
    }
    
    let mobileOpen;
    $: mobileOpen = navBar.mobileOpen   
    $: mobileHamburgerClosed = navBar.mobileOpen

    let unique;
    let hamburgerBtn; //for css version of hamburger button only

    let logo
    let resetLogoClick
    function clickLogo(){
        goto('/')
        resetLogoClick=!resetLogoClick
        navBar.item.forEach((el)=>{
            el.isClicked=false;
        })

        navBar.item[0].isClicked=true;
        // window.location.href='/';
    }


    // $: logoTextColor=`hsl(0,0%,${10*(1-$fractionScroll)}%)`
    // hsl(359deg 100% 50%)
    $: logoTextColor=`hsl(359,100%,${100*$fractionScroll}%)`
    // $: logoTextColor=`hsl(0,0%,${100*$fractionScroll}%)`


</script>


<Hamburger {hamburgerBtn} bind:mobileOpen={navBar.mobileOpen} bind:unique />

{#key unique }
<navbar class="flex justify-between items-center w-1/2 sm:w-full fixed right-10 top-32 sm:right-0 sm:top-0 sm:inline-flex {!mobileOpen && "hidden"} backdrop-blur-3xl sm:py-5 sm:px-20">
     
    {#key resetLogoClick }
    <div class="translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20
    sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110  transition-transform selection:bg-transparent" 
        style:color={logoTextColor}
        in:scale={{duration:1200, easing:elasticOut}}
        on:mouseup={ clickLogo } >
            THINKSOLVE
    </div>
    {/key}

    
 
    <!--  in:fly={{y:-75,duration:1500, easing: elasticOut}}
        out:fly={{y:-50,duration:250, easing: quintOut}} 
        out:fly={{y:-50,duration:200, easing: customEase}}
    -->
    <nav class="sm:px-4"
        in:fly={{y:-75,duration:1500, easing: elasticOut}}
        out:fly={{y:-50,duration:250, easing: quintOut}} 
        on:click={_=>{ hamburgerBtn=false }}    
     >
     <!-- style:color={$isXs?"black":logoTextColor}  -->
        <ul class="flex flex-col sm:flex-row text-3xl sm:text-lg sm:h-[60px] sm:items-center " 
        style:color={$isXs?"black":logoTextColor} 
        >
            {#each navBar.item as el }
            <li class="py-3 sm:p-1">
                <Navitem href={el.href} content={el.name} bind:bool={el.isClicked} {navBar} bind:mobileOpen={navBar.mobileOpen} btnColor={el.btnColor} btnColorHover={el.btnColorHover} />
                <!-- <Navitem href={el.href} content={el.name} bind:bool={el.isClicked} {navBar} bind:mobileOpen={navBar.mobileOpen} /> -->
            </li>
            {/each}
            
        </ul>    
    </nav>

</navbar>
{/key}



