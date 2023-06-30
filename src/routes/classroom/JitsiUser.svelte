<script lang="ts">
	export let isAdmin = false;

	import EnableJavascript from '$src/lib/EnableJavascript.svelte';
	// import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { isPWA } from '$lib/store/clientStore';
	import { inDarkOutOriginal } from '$src/lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { jitsiObject } from './JitsiObject';
	// import { jitsiObject } from './JitsiObject-old';

	inDarkOutOriginal();

	async function hangUpBtn() {
		await api.dispose();
		goto($isPWA ? '/pwa' : '/');
	}

	let { api, par, domain, getOptions } = jitsiObject;
	let options = getOptions(isAdmin);

	let changeOpacityTo100: string;
	let changeOpacityTimeOUt: NodeJS.Timeout;

	function changeOpacityCallback() {
		changeOpacityTo100 = 'opacity-100 transition-opacity ease-in-out duration-500';
	}

	let wasMounted = false;
	onMount(() => {
		wasMounted = true;
		changeOpacityTimeOUt = setTimeout(changeOpacityCallback, 1000);
		try {
			options.parentNode = document.querySelector('#jaas-container');

			setTimeout(async () => {
				//@ts-ignore
				api = await new JitsiMeetExternalAPI(domain, options);

				// const pwd = 'thnkslv';
				// api.executeCommand('password', pwd);
				// api.executeCommand('toggleLobby', true);

				api.addEventListener(
					'participantRoleChanged',
					function (event: any) {
						const pwd = 'thnkslv';
						if (event.role === 'moderator') {
							api.executeCommand('password', pwd);
							api.executeCommand('toggleLobby', true);
						}

						// alert(JSON.stringify(event));

						par = [...api.getParticipantsInfo()];

						// alert(JSON.stringify(par[0].participantId));

						// api.executeCommand('kickParticipant',
						// 	participantID: par[0].participantID
						// );
					},
					3000
				);
			});
		} catch (error) {
			console.log('onMount for JitsiMeetExternalAPI broken', error);
		}
	});

	onDestroy(() => {
		changeOpacityTimeOUt && clearTimeout(changeOpacityTimeOUt);
		if (wasMounted) {
			api.dispose();

			console.log('jitsi off');
		}
	});
</script>

<EnableJavascript />

<!-- {#if browser} -->
<div
	id="jaas-container"
	class={`opacity-0 ${changeOpacityTo100} relative h-[90vh] w-full -translate-y-36 md:h-[670px] md:-translate-y-10 pwa:h-[85vh] `}
>
	<button on:click={hangUpBtn}>
		<img
			alt="hangup button"
			class="{!par &&
				'opacity-0'} absolute right-0 top-10 w-[50px] rotate-90 rounded-full bg-[#2a1c44] p-2 transition-transform duration-300 content-[url('/phone.svg')] hover:rotate-0 hover:scale-[1.3] active:bg-red-900 md:bottom-5 md:right-10 md:top-auto"
		/>
	</button>
</div>
<!-- {/if} -->

<svelte:head>
	<script
		src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
	></script>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head>
