<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let showModal = false;
	export let transitionsOff: boolean | null = false;
	export let bgTW: string | undefined = 'bg-[rgba(0,0,0,0.4)]';
	export let all: boolean | undefined = false; // usually false, but when true modal closes when clicked anywhere
	export let body: boolean | undefined = false;
	// default behaviour is to allow navbar through; when user declares 'body' prop then the modal is attached to the document's body ... such as with the calendly modals

	let dispatch = createEventDispatcher();

	function closeModal() {
		// showModal = false;
		dispatch('close');
		// clearNavModals();
	}

	function modalDirective(node: HTMLElement) {
		if (!body && !all) return;
		console.log('modal');

		body && document.body.appendChild(node);
		all && node.addEventListener('click', closeModal);

		return {
			destroy() {
				body && node.remove();
				all && node.removeEventListener('click', closeModal);
			}
		};
	}
</script>

{#key body || transitionsOff ? true : showModal}
	<div
		role="button"
		tabindex="0"
		on:keypress|self={closeModal}
		on:click|self={closeModal}
		use:modalDirective
		class="fixed left-0 top-0 -z-50 hidden h-full w-full items-center justify-center overflow-x-clip overflow-y-scroll text-center {showModal &&
			`${bgTW} z-50 !flex`} 
"
	>
		<slot />
	</div>
{/key}
