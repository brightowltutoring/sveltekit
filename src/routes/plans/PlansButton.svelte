<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { payButton } from './plansCardStuff';
	import type { iframeModalType } from '$lib/IframeModal.svelte';
	export let iframeModals = writable<iframeModalType[]>([]);
</script>

<script lang="ts">
	export let button: payButton;
	export let className: string;

	$: thisIndex = $iframeModals.findIndex((el) => el.url === button.url);

	function openPlansModal(e: MouseEvent) {
		e.preventDefault();

		$iframeModals[thisIndex].bool = true;
	}

	function updateIframeModalsOnce(node: HTMLAnchorElement) {
		node.addEventListener('mouseenter', updateIframeModals, { once: true });

		function updateIframeModals() {
			if (thisIndex > -1) return;

			let item: iframeModalType = {
				url: button.url,
				bool: false,
				loading: 'pending',
				name: button.url.split('/thinksolve/')[1].split('?')[0].split('-').join(' ')
			};

			// iframeModals.push(item)
			$iframeModals = [...$iframeModals, item];
		}
	}
</script>

<a
	use:updateIframeModalsOnce
	href={button.url}
	on:click={openPlansModal}
	class="{button.opacityTW} {className}  m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md"
>
	<span>{button.text}</span>
</a>
