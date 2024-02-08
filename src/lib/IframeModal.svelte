<script context="module" lang="ts">
	export type loadStatus = null | 'pending' | 'success' | 'fail';

	export type iframeModalType = {
		url: string;
		bool: boolean;
		loading: loadStatus;
		name: string;
	};
</script>

<script lang="ts">
	// import type { loadStatus } from '$src/utils/types';
	import Modal from '$lib/Wrappers/Modal.svelte';
	import Loading from './Loading.svelte';
	// import Suspense from '$lib/Wrappers/Suspense.svelte';

	export let iframe: iframeModalType;

	function load_iframe(node: HTMLIFrameElement) {
		// node.addEventListener('load', iframeLoaded, { once: true });
		iframeLoaded();
		// TODO: revert

		return {
			destroy() {
				node.addEventListener('load', iframeLoaded, { once: true });
			}
		};

		function iframeLoaded() {
			iframe.loading = 'success';
			// console.log(`woohoo loaded ${iframe.url}`);
		}
	}
</script>

<!-- TODO: original -->
<!-- <Modal
	body
	modalOpen={iframe.bool}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
	on:closeModal={() => (iframe.bool = false)}
    >
	<Suspense loading={iframe.loading}>
        <iframe class="h-full w-full" use:load_iframe src={iframe.url} title={iframe.name} />
	</Suspense>
</Modal> -->

<!-- TODO: testing -->
<Modal
	on:closeModal={() => (iframe.bool = false)}
	body
	modalOpen={iframe.bool}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
>
	{#if !iframe.loading}
		<Loading />
	{/if}

	<iframe
		class="opacity-0 transition-opacity duration-300 ease-in {iframe.loading &&
			'opacity-100'} fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 backdrop-blur-3xl md:w-[80%] md:-translate-y-5"
		title="Thinksolve Plans"
		src={iframe.url}
	/>
</Modal>
