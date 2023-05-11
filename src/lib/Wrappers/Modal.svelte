<script lang="ts">
	// import { browser } from '$app/environment';
	// import { onDestroy } from 'svelte';

	export let showModal = false;
	export let transitionsOff: boolean | null = false;
	export let bgTW: string | undefined = 'bg-[rgba(0,0,0,0.4)]';
	export let all: boolean | undefined = false; // usually false, but when true modal closes when clicked anywhere
	export let body: boolean | undefined = false;
	// default behaviour is to allow navbar through; when user declares 'body' prop then the modal is attached to the document's body ... such as with the calendly modals

	function closeModal() {
		showModal = false;
	}

	function modalDirective(node: HTMLElement) {
		// console.log(`modalDirective called ${node.innerHTML}`); //debugging
		if (!body && !all) return;

		body && document.body.appendChild(node);
		all && node.addEventListener('click', closeModal);

		return {
			destroy() {
				body && node.remove();
				all && node.removeEventListener('click', closeModal);
			}
		};
	}

	// TODO: find out why this isn't logging in the console
	// onDestroy(() => {
	// 	browser && console.log('modal component destroyed');
	// 	console.log('modal component destroyed');
	// });
</script>

{#key body || transitionsOff ? true : showModal}
	<!-- {#key true} -->
	<div
		on:click|self={closeModal}
		on:keypress|self={closeModal}
		use:modalDirective
		class="fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center overflow-x-clip overflow-y-scroll text-center
{showModal && `${bgTW} !flex`} "
	>
		<slot />
		<!-- TODO: BUG: safari has issues with nested onDestroy/onMount .. specifically with clearIntervals and clearTimeouts; using if block instead of key block seems to work without issue.  -->
	</div>
{/key}
