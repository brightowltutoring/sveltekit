<script lang="ts">
	import './modified_external_api';
	export let isAdmin = false;
	import EnableJavascript from '$src/lib/EnableJavascript.svelte';
	import { goto } from '$app/navigation';
	import { inDarkOutOriginal } from '$src/lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { jitsiObject } from './JitsiObject';

	import { page } from '$app/stores';
	import { isDarkMode } from '$src/lib/store/clientStore';
	import { get } from 'svelte/store';
	$: ({ data } = $page);

	inDarkOutOriginal();
	// onMount(() => {
	// 	let initiallyInLightmode = !$isDarkMode;
	// 	document.documentElement.classList.add('dark-mode');
	// 	$isDarkMode = true;

	// 	return () => {
	// 		if (initiallyInLightmode) {
	// 			$isDarkMode = false;
	// 			document.documentElement.classList.remove('dark-mode');
	// 		}
	// 	};
	// });

	async function hangUpBtn() {
		await api.dispose();

		goto(data.isPWA ? '/pwa' : '/');
	}

	let { api, par, domain, getOptions } = jitsiObject;
	let options = getOptions(isAdmin);

	let changeOpacityTo100: string;
	let changeOpacityTimeOut: NodeJS.Timeout;

	function changeOpacityCallback() {
		changeOpacityTo100 = 'opacity-100 transition-opacity ease-in-out duration-500';
	}

	onMount(async () => {
		changeOpacityTimeOut = setTimeout(changeOpacityCallback, 1000);
		try {
			options.parentNode = document.querySelector('#meet');

			// @ts-ignore
			api = await new JitsiMeetExternalAPI(domain, options);

			api?.addEventListener('participantRoleChanged', function (event: any) {
				const pwd = 'thnkslv';
				if (event.role === 'moderator') {
					api.executeCommand('password', pwd);
					api.executeCommand('toggleLobby', true);
				}

				par = [...api.getParticipantsInfo()];
			});
		} catch (error) {
			console.log('onMount for JitsiMeetExternalAPI broken', error);
		}
	});

	onDestroy(() => {
		changeOpacityTimeOut && clearTimeout(changeOpacityTimeOut);
		// if (wasMounted) {
		api?.dispose();

		// }
	});
</script>

<EnableJavascript />

<div
	id="meet"
	class={`opacity-0 ${changeOpacityTo100} relative h-[90vh] w-full -translate-y-36 md:h-[670px] md:-translate-y-10 pwa:h-[85vh] `}
>
	<button on:click={hangUpBtn}>
		<img
			alt="hangup button"
			class="{par &&
				'opacity-100'} absolute right-0 top-10 w-[50px] rotate-90 rounded-full bg-[#2a1c44] p-2 opacity-0 transition-transform duration-300 content-[url('/phone.svg')] hover:rotate-0 hover:scale-[1.3] active:bg-red-900 md:bottom-5 md:right-10 md:top-auto"
		/>
	</button>
</div>

<!-- Not sure if this should be here, since already defined in layout.svelte. -->
<!-- On mobile using navbar to navigate to /classroom seems to break the jitsi iframe -->
<!-- <svelte:head>
	<script
		src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
	></script>
</svelte:head> -->
