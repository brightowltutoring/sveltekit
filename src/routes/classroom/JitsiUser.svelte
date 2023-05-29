<script lang="ts">
	export let isAdmin = false;

	import EnableJavascript from '$src/lib/EnableJavascript.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { isPWA } from '$lib/store/clientStore';
	import { inDarkOutOriginal } from '$src/lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { jitsiObject } from './JitsiObject';
	// import './jitsi_external_api';

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

	onMount(async () => {
		changeOpacityTimeOUt = setTimeout(changeOpacityCallback, 1000);
		try {
			options.parentNode = document.querySelector('#meet');

			//@ts-ignore
			api = await new JitsiMeetExternalAPI(domain, options);

			const pwd = 'thnkslv';
			api.addEventListener('participantRoleChanged', function (event: any) {
				if (event.role === 'moderator') {
					api.executeCommand('password', pwd);
					api.executeCommand('toggleLobby', true);
				}

				par = [...api.getParticipantsInfo()];
				// reassignment is necessary to trigger 'par' reactive statement in 'invisibleOnNoParticipants'
				// par?.push(...api.getParticipantsInfo());
				// alert(JSON.stringify(par));
			});
		} catch (error) {
			console.log('onMount for JitsiMeetExternalAPI broken', error);
		}
	});

	// when onMount is async, then the return callback does not execute, hence why onDestroy is necessary
	onDestroy(() => {
		changeOpacityTimeOUt && clearTimeout(changeOpacityTimeOUt);
		// console.log('jitsi unmounted');
	});
</script>

<EnableJavascript />

{#if browser}
	<div
		id="meet"
		class={`opacity-0 ${changeOpacityTo100} relative h-[90vh] w-full -translate-y-36 md:h-[670px] md:-translate-y-10 pwa:h-[85vh] `}
	>
		<!-- {$lessThan768 ? 'right-0 top-10' : 'bottom-5 right-10 '}  -->
		<!-- class={`${invisibleOnNoParticipants}`} -->
		<!-- class={par.length < 1 ? 'opacity-0' : ''} -->
		<button on:click={hangUpBtn}>
			<img
				alt="hangup button"
				class="{!par &&
					'opacity-0'} absolute right-0 top-10 w-[50px] rotate-90 rounded-full bg-[#2a1c44] p-2 transition-transform duration-300 content-[url('/phone.svg')] hover:rotate-0 hover:scale-[1.3] active:bg-red-900 md:bottom-5 md:right-10 md:top-auto"
			/>
		</button>
	</div>
{/if}
<!-- 
<svelte:head>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head> -->
