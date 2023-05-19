<script>
	import { browser } from '$app/environment';
	import EnableJavascript from '$lib/EnableJavascript.svelte';

	import JitsiUser from '../classroom/JitsiUser.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { isDarkMode } from '$lib/store';

	let wasDarkModeLS = browser && sessionStorage.getItem('isDarkMode');
	onMount(() => {
		isDarkMode.set(true);
		// $isDarkMode = true;
		document.documentElement.classList.add('dark-mode');
	});
	onDestroy(() => {
		if (wasDarkModeLS === 'false') {
			isDarkMode.set(false);
			// $isDarkMode = false;
			document.documentElement.classList.remove('dark-mode');
		}
	});
</script>

<EnableJavascript />

{#if browser}
	<JitsiUser admin />
{/if}

<!-- <svelte:head>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head> -->
