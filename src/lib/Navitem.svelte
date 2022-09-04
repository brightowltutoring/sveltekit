<script>
    import { slide } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { page } from '$app/stores'
    import { isXs } from '$lib/store.js'

    export let href, content, bool, mobileOpen, btnColor, btnColorHover, routes

    // this allows going back and button click matching with route
    // could've done this in if/else but the boolean nature here made it unnecessary
    $: for (let key in routes ){
            let condition = (key == $page.routeId) || ($page.routeId.length == 0 && key == 'home')
            routes[key].isCurrent = condition 
        } 
     
    let unique

    function clickOnNavLinks(){
        // on each click, clears rest of button clicks
        for (let key in routes ){
            routes[key].isCurrent=false;
        }

        //sets button click to corresponding route 
        bool=!bool 

        unique=!unique // to reanimate the non-mobile links

        $isXs && (mobileOpen =!mobileOpen )
     
    }
</script>


{#key unique }   
<a  in:slide={{ duration:800, easing: elasticOut }} 
    href={href}
    on:click={ clickOnNavLinks }
    class = "{ bool && `${btnColor} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent { `${btnColorHover}`}  sm:hover:rounded sm:hover:py-1  sm:hover:px-3 duration-300"
    
    
    > {content}
</a>
{/key}


<style>
    
</style>