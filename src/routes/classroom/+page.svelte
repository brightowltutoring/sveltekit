<script lang="ts">
	import JitsiUser from './JitsiUser.svelte';
	import EnableJavascript from '$lib/EnableJavascript.svelte';

	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { isDarkMode } from '$lib/store';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { disableScrollingOnPage } from '$lib/utils';

	disableScrollingOnPage($page.url.pathname);
	onMount(turnOnDarkMode);
	onDestroy(returnInitialDarkModeState);

	let mounted = false;
	function turnOnDarkMode() {
		mounted = true;
		isDarkMode.set(true);

		document.documentElement.classList.add('dark-mode');
	}

	let initiallyInLightmode = browser && (sessionStorage.getItem('isDarkMode') === 'false' || null);
	function returnInitialDarkModeState() {
		if (initiallyInLightmode) {
			isDarkMode.set(false);

			document.documentElement.classList.remove('dark-mode');
		}
	}
</script>

<EnableJavascript />

<!-- key-mounted logic ensures transition works when direct-linking to '/classroom' -->
<!-- if-browser logic is now required since <JitsiUser /> doesn't invoke jitsi_api.js locally (previously did and had to set SSR false in +page.ts of this route), but rather this is loaded externally in head script in +layout.svelte, With defer attribute. This results in better performance when loading the external jitsi iframe (also allows noscript <EnableJavascript /> component ) -->
{#if browser}
	{#key mounted}
		<div
			class="disableScrollOnThisPage"
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
