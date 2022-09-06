<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import { isDarkMode } from '$lib/store.js'


    $: console.log("$isDarkMode",$isDarkMode);
  

    function toggleDM() {
        let elements = [
            window.document.body,
            ...document.getElementsByClassName("card"),
            ...document.getElementsByClassName("cardBtn"),
        ]

        for (let el of elements){
            el.classList.toggle('dark-mode')   
        }
        
        $isDarkMode =!$isDarkMode
	}
</script>

{#key $isDarkMode}
<button on:click={toggleDM} in:scale={{duration:1000, easing:elasticOut}} >
    {#if $isDarkMode }   ☾
    {:else}              ☼
    {/if}
</button>
{/key}
