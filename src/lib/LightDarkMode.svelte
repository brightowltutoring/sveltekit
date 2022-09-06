<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { isDarkMode } from '$lib/store.js'
    // import { onMount } from 'svelte';

    let elements=[]

    $:console.log(elements.length);

    function toggleDM() {
        elements=[
            window.document.body,
            // ...document.getElementsByClassName("card"),
            // ...document.getElementsByClassName("cardBtn"),
        ]
       
        for (let el of elements){
            el.classList.toggle('dark-mode')   
        }
        
        $isDarkMode =!$isDarkMode
        // other js variables will dark-mode other elements in the dom
        // doing it with global css is problematic when the elements have
        // yet to be mounted
	}
</script>

{#key $isDarkMode}
<button on:click={toggleDM} in:scale={{duration:1000, easing:elasticOut}} >
    {#if $isDarkMode }  
        <!-- ☾ -->
        <i class="las la-sun hover:scale-110 transition-transform duration-500"></i>
        <!-- <i class="fa-solid fa-sun opacity-70 hover:opacity-100 transition-opacity duration-700"></i> -->
        <!-- <i class="fa fa-sun-o "></i> -->
        <!-- <i href="/sun-solid.svg"></i> -->
        <!-- <i class="fa fa-car"></i> -->
        {:else}             
        <!-- ☼ -->
        <i class="las la-moon hover:scale-110 transition-transform duration-500 "></i>
        
        <!-- <i class="fa fa-car"></i> -->
        <!-- <i class="fa fa-moon-o "></i> -->
        <!-- <i href="/moon-solid.svg"></i>
         -->
        <!-- <i class="fa-solid fa-moon opacity-70 hover:opacity-100 transition-opacity duration-700"></i> -->
    {/if}
</button>
{/key}
