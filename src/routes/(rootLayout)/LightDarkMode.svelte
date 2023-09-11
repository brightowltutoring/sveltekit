<script lang="ts">
	import IconSun from '$lib/Icons/IconSun.svelte';
	import IconMoon from '$lib/Icons/IconMoon.svelte';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { isDarkMode } from '$lib/store/clientStore';
	import { browser } from '$app/environment';

	// initialize darkmode state
	browser && isDarkMode.set(prefersDarkMode());

	// reactively set sessionStorage darkmode
	$: browser && sessionStorage.setItem('isDarkMode', String($isDarkMode));

	function toggleDarkMode() {
		isDarkMode.update((v) => !v);
		document.documentElement.classList.toggle('dark-mode');
	}

	function prefersDarkMode() {
		if (sessionStorage.getItem('isDarkMode') === 'true') return true;
		if (sessionStorage.getItem('isDarkMode') === 'false') return false;
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
		return false;
	}
</script>

<svelte:head>
	<script lang="ts">
		document.documentElement.classList.toggle('dark-mode', prefersDarkMode());
		function prefersDarkMode() {
			if (sessionStorage.getItem('isDarkMode') === 'true') return true;
			if (sessionStorage.getItem('isDarkMode') === 'false') return false;
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
			return false;
		}
	</script>
</svelte:head>

<main class="fadeInFromNone px-2">
	{#key $isDarkMode}
		<button on:click={toggleDarkMode} in:scale={{ duration: 1000, easing: elasticOut }}>
			{#if $isDarkMode}
				<IconSun />
			{:else}
				<IconMoon />
				<!-- attrs={{
						'aria-label': 'Moony'
					}} -->
			{/if}
		</button>
	{/key}
</main>
