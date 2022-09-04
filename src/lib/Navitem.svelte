<script>
    import { fade, fly, scale, slide, blur} from 'svelte/transition';
    import { elasticOut, quintOut } from 'svelte/easing';
    import { page } from '$app/stores'
    import { isXs } from '$lib/store.js'

    $:{     

        for (let key in routes ){
        // for (let key of routesKeys){
            if( $page.routeId == key || ( $page.routeId.length == 0 && key == 'home')) {
                routes[key].isCurrent = true        
            }
            else routes[key].isCurrent = false
        }
        // forEach is possible too 
     }


    export let href, content, bool, mobileOpen, btnColor, btnColorHover, routes

    let unique

    function clickOnNavLinks(){


        
        // on each click, clears rest of button clicks
        Object.keys(routes).forEach(key=>{
            routes[key].isCurrent=false;
        })

        //sets button click to corresponding route 
        bool=!bool 

        unique=!unique // to reanimate the non-mobile links

        $isXs && (mobileOpen =!mobileOpen )
     
    }
</script>

<!-- class = "{ bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-3 sm:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent { `${btnColorHover}`} sm:hover:text-white sm:hover:rounded sm:hover:py-1  sm:hover:px-3 duration-300" -->
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