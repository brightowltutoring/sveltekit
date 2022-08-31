<script>
    import { fade, fly, scale, slide, blur} from 'svelte/transition';
    import { elasticOut, quintOut } from 'svelte/easing';
    import { isXs } from '$lib/store.js'

    export let href, content, bool, navBar, mobileOpen, btnColor, btnColorHover

    let anchort

    let unique

    function clickOnNavLinks(){
        navBar.item.forEach((el)=>{
            el.isClicked=false
        })

        bool=!bool 
        unique=!unique // to reanimate the non-mobile links

        $isXs && (mobileOpen =!mobileOpen )
        // only when in mobile mode can the mobile menu be toggled ... 
        // otherwise clicking navlinks in desktop mode, say, will also 
        // alter the mobile menu
    }
</script>

<!-- TODO: what is selection?? -->
<!-- selection:bg-transparent hover:text-btred active:border-b-2 active:border-btred -->
{#key unique }   
<a  in:slide={{ duration:800, easing: elasticOut }} 
    href={href}
    on:click={ clickOnNavLinks }
    class = "{ bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-3 sm:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent { `${btnColorHover}`} sm:hover:text-white sm:hover:rounded sm:hover:py-1  sm:hover:px-3 duration-300"
    
    > {content}
</a>
{/key}


<!--    bind:this={anchort}
    on:mouseover={()=>{anchort.style.background= btnColor}}
    on:focus={()=>{anchort.style.background=btnColor}}
    on:mouseout={()=>{anchort.style.background=""}}
    on:blur={()=>{anchort.style.background=""}} -->
<!-- ${btnColor} ${btnColorHover} -->



<!-- class = { bool && `sm:border-b-1 sm:text-white  sm:rounded sm:px-4 sm:py-1 "} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent 
     sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300 sm:bg-[hsl(240,86%,80%)] sm:hover:bg-[hsl(240,86%,70%)]`} -->



     <!-- class = "{ bool && `${btnColor} sm:border-b-1 sm:text-white  sm:rounded sm:px-4 sm:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent 
    {btnColorHover} sm:hover:rounded sm:hover:py-1  sm:hover:px-3 duration-300" -->


    <!-- Original -->
    <!--  class = "{ bool && "sm:border-b-1 sm:text-white sm:bg-[hsl(240,86%,80%)]   sm:rounded sm:px-4 sm:py-1"} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent 
     sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300 sm:hover:bg-[hsl(240,86%,70%)]}" -->