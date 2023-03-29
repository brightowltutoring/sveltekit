<script lang="ts">
	import IconSun from '$lib/Icons/IconSun.svelte';
	import IconMoon from '$lib/Icons/IconMoon.svelte';
	import { slide, scale } from 'svelte/transition';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { isDarkMode } from '$lib/store';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

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

	let mounted = false;

	onMount(() => (mounted = true));

	// Will be consumed in IconmMoon.svelte and IconSun.svelte as in:scale transitions. Doing this as a prop to avoid nested wrapping of 'transition' divs
	let transition = { duration: 1000, easing: elasticOut };
</script>

<svelte:head>
	<script>
		// document.documentElement.classList.add(String(initialTheme())); // one liner not liked by lighthouse

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
	<!-- ... For darkmode/lightmode, why do people insist on complex server-side methods involving framework-specific code AND cookies API ?? Cookies offer a custom lifetime, however isn't the desired approach for this boolean theme (dark/light) to 1) initialize with device settings, 2) update with session settings? -->
</svelte:head>

<!-- works without JS ...  but seems like anchor tag url /SSR way is still preferable since the sibling input element has to sit above the icon div elements in order to work (and therefore cannot wrap icons in anchor tag) -->
<!-- <main>
	{#key $isDarkMode}
		<div in:slide={{ duration: 600, easing: quintOut }}>
			<input
				on:click={toggleDarkMode}
				type="checkbox"
				bind:checked={$isDarkMode}
				class="peer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.5] z-10 opacity-0"
			/>

			<div in:scale={{ duration: 1000, easing: elasticOut }} class="hidden peer-checked:block">
				<IconSun />
			</div>
			<div in:scale={{ duration: 1000, easing: elasticOut }} class="block peer-checked:hidden">
				<IconMoon />
			</div>
		</div>
	{/key}
</main> -->

<!-- Breaks without JS -->

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
