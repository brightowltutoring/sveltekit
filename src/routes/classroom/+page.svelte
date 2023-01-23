<script lang="ts">
	import { browser } from '$app/environment';
	import EnableJavascript from '$lib/EnableJavascript.svelte';

	import JitsiUser from './JitsiUser.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { isDarkMode } from '$lib/store';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// this is to decide in onDestroy to reset to lightmode when navigating away from '/classroom', or to remain in darkmode ... provided darkmode was on before navigating to

	let wasDarkModeLS = browser && sessionStorage.getItem('isDarkMode');

	let mounted = false;

	onMount(() => {
		mounted = true;
		$isDarkMode = true;
		document.documentElement.classList.add('dark-mode');
	});
	onDestroy(() => {
		if (wasDarkModeLS === 'false' || null) {
			$isDarkMode = false;
			document.documentElement.classList.remove('dark-mode');
		}
	});
</script>

<EnableJavascript />

<!-- key-mounted logic ensures transition works when direct-linking to '/classroom' -->
<!-- if-browser logic is now required since <JitsiUser /> doesn't invoke jitsi_api.js locally (previously did and had to set SSR false in +page.ts of this route), but rather this is loaded externally in head script in +layout.svelte, With defer attribute. This results in better performance when loading the external jitsi iframe (also allows noscript <EnableJavascript /> component ) -->
{#if browser}
	{#key mounted}
		<div
			in:scale={{
				duration: 2000,
				easing: quintOut
			}}
		>
			<JitsiUser />
		</div>
	{/key}
{/if}

<!-- <svelte:head>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head> -->
