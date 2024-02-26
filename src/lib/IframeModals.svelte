<!-- <script context="module" lang="ts">
	export type loadStatus = null | 'pending' | 'success' | 'fail';

	export type iframeModalType = {
		url: string;
		isOpen: boolean;
		loading: loadStatus;
		name: string;
	};
</script> -->

<script lang="ts">
	import Modal from '$lib/Wrappers/Modal.svelte';
	import Suspense from './Wrappers/Suspense.svelte';
	import { iframeModals } from '$routes/plans/PlansButton.svelte';
	import type { iframeModalType } from './IframeModal.svelte';

	function load_iframe(node: HTMLIFrameElement, iframe: iframeModalType) {
		node.addEventListener('load', iframeLoaded, { once: true });

		return {
			destroy() {
				node.removeEventListener('load', iframeLoaded);
			}
		};
		function iframeLoaded() {
			// setTimeout(() => {
			iframe.loading = 'success';
			console.log(`woohoo loaded ${iframe.url}`);
			// }, 2000);
		}
	}
</script>

{#each $iframeModals as iframe}
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
				use:load_iframe={iframe}
			/>
			<!-- on:load={() => iframeLoaded(iframe)} -->
		</Suspense>
	</Modal>
{/each}
