<script>
import { scale } from 'svelte/transition';
import { elasticOut} from 'svelte/easing';

    let isDark = false
    
    function toggleDM() {
		window.document.body.classList.toggle('dark-mode');
        isDark =!isDark
	}
</script>

{#key isDark}
<button on:click={toggleDM} in:scale={{duration:1000, easing:elasticOut}} >
    {#if isDark }
    ☼
    {:else}
    ☾
    {/if}
</button>
{/key}

<!-- <style>
	
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #f7f7f7;
	}
</style> -->