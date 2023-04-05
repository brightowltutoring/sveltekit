<script lang="ts">
	import IconSun from '$lib/Icons/IconSun.svelte';
	import IconMoon from '$lib/Icons/IconMoon.svelte';
	import { slide, scale } from 'svelte/transition';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { isDarkMode } from '$lib/store';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));

	// Initialize $isDarkMode using client-side settings via 'initialTheme()';
	// Note: 'initialTheme()' declaration AND dark-mode css initialization done in head of document (see <svelte:head> below)

	// initialize AND reactively set sessionStorage
	$: $isDarkMode, browser && sessionStorage.setItem('isDarkMode', $isDarkMode.toString());
	browser && ($isDarkMode = initialTheme() === 'dark-mode');

	function toggleDarkMode() {
		$isDarkMode = !$isDarkMode;
		document.documentElement.classList.toggle('dark-mode');
	}

	function initialTheme() {
		if (sessionStorage.getItem('isDarkMode') === 'true') return 'dark-mode';
		if (sessionStorage.getItem('isDarkMode') === 'false' || null) return '';
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark-mode';
		return '';
	}
</script>

<svelte:head>
	<script>
		initialTheme() === ''
			? document.documentElement.classList.remove('dark-mode')
			: document.documentElement.classList.add('dark-mode');

		function initialTheme() {
			if (sessionStorage.getItem('isDarkMode') === 'true') return 'dark-mode';
			if (sessionStorage.getItem('isDarkMode') === 'false') return '';
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark-mode';
			return '';
		}
	</script>
</svelte:head>

<main class="fadeInFromNone px-2">
	{#key $isDarkMode}
		<button on:click={toggleDarkMode} in:slide={{ duration: 600, easing: quintOut }}>
			<div in:scale={{ duration: 1000, easing: elasticOut }}>
				{#if $isDarkMode}
					<IconSun />
				{:else}
					<IconMoon />
				{/if}
			</div>
		</button>
	{/key}
</main>
