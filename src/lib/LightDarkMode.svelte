<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';

    let isDark = false

    function toggleDM() {
		window.document.body.classList.toggle('dark-mode');
        isDark =!isDark
	}
</script>

{#key isDark}
<button on:click={toggleDM} in:scale={{duration:1000, easing:elasticOut}} >
    {#if isDark } ☼
    {:else}       ☾
    {/if}
</button>
{/key}
