<script context="module" lang="ts">
	export type loadStatus = null | 'pending' | 'success' | 'fail';

	export type iframeModalType = {
		url: string;
		isOpen: boolean;
		loading: loadStatus;
		name: string;
	};
</script>

<script lang="ts">
	import Suspense from './Wrappers/Suspense.svelte';

	import Modal from '$lib/Wrappers/Modal.svelte';

	export let iframe: iframeModalType;

	function load_iframe(node: HTMLIFrameElement) {
		node.addEventListener('load', iframeLoaded, { once: true });

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
	modalOpen={iframe.isOpen}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
	on:closeModal={() => (iframe.isOpen = false)}
    >
	<Suspense loading={iframe.loading}>
        <iframe class="h-full w-full" use:load_iframe src={iframe.url} title={iframe.name} />
	</Suspense>
</Modal> -->

<!-- TODO: testing -->
<!-- on:closeModal={() => (iframe.isOpen = false)} -->
<Modal
	close={() => (iframe.isOpen = false)}
	body
	modalOpen={iframe.isOpen}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
>
	<!-- {#if iframe.loading == 'pending'}
		<Loading />
	{/if}
    <iframe
			class:fly-fade={iframe.loading == 'success'}
			class="absolute -bottom-20 z-50 flex h-[90%] w-full items-center justify-center rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl ease-in md:top-40 md:h-full md:w-[80%]"
			title="Thinksolve Plans"
			src={iframe.url}
			use:load_iframe
		/> -->
	<Suspense loading={iframe.loading}>
		<iframe class="h-full w-full" title="Thinksolve Plans" src={iframe.url} use:load_iframe />
	</Suspense>
</Modal>

<!-- <style lang="postcss">
	.fly-fade {
		transition:
			top 0.8s,
			opacity 1.4s;
		top: 0;
		bottom: auto;
		opacity: 1;

		@media only screen and (max-width: 768px) {
			transition:
				bottom 0.8s,
				opacity 1s;
			bottom: 0;
			top: auto;
		}
	}
</style> -->
