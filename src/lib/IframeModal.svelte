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

	function iframeLoaded() {
		// setTimeout(() => {
		iframe.loading = 'success';
		console.log(`woohoo loaded ${iframe.url}`);
		// }, 3000);
	}
</script>

<Modal
	close={() => (iframe.isOpen = false)}
	body
	modalOpen={iframe.isOpen}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
>
	<Suspense loading={iframe.loading}>
		<iframe
			class="h-full w-full"
			title="Thinksolve Plans"
			src={iframe.url}
			on:load={iframeLoaded}
		/>
	</Suspense>
</Modal>
