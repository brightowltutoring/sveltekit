<script lang="ts">
	import IconSun from '$lib/Icons/IconSun.svelte';
	import IconMoon from '$lib/Icons/IconMoon.svelte';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { isDarkMode } from '$lib/store/clientStore';
	import { browser } from '$app/environment';

	// initialize darkmode state
	browser && ($isDarkMode = prefersDarkMode());

	// reactively set localStorage darkmode
	$: browser && localStorage.setItem('isDarkMode', String($isDarkMode));

	function toggleDarkMode() {
		$isDarkMode = !$isDarkMode;
		document.documentElement.classList.toggle('dark-mode');
	}

	function prefersDarkMode() {
		if (localStorage.getItem('isDarkMode') === 'true') return true;
		if (localStorage.getItem('isDarkMode') === 'false') return false;

		// if sessionStorage doesn't exist, then defaults to matchMedia logic
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
		return false;
	}
</script>

<svelte:head>
	<script lang="ts">
		document.documentElement.classList.toggle('dark-mode', prefersDarkMode());
		function prefersDarkMode() {
			if (localStorage.getItem('isDarkMode') === 'true') return true;
			if (localStorage.getItem('isDarkMode') === 'false') return false;
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
			return false;
		}

		// localStorage.getItem('isDarkMode') === 'true'
		// 	? document.documentElement.classList.add('dark-mode')
		// 	: localStorage.getItem('isDarkMode') === 'false'
		// 	? document.documentElement.classList.remove('dark-mode')
		// 	: window.matchMedia('(prefers-color-scheme: dark)').matches &&
		// 	  document.documentElement.classList.add('dark-mode');
	</script>
</svelte:head>

<main class="fadeInFromNone px-2">
	{#key $isDarkMode}
		<button on:click={toggleDarkMode} in:scale={{ duration: 1000, easing: elasticOut }}>
			{#if $isDarkMode}
				<IconSun />
			{:else}
				<IconMoon />
			{/if}
		</button>
	{/key}
</main>
