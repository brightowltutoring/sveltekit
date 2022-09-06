<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { isDarkMode } from '$lib/store.js'
    import { onMount } from 'svelte';

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
    {#if $isDarkMode }   ☾
    {:else}              ☼
    {/if}
</button>
{/key}
