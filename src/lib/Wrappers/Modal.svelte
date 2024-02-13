<script lang="ts">
	// import { createEventDispatcher, onMount } from 'svelte';

	export let close = () => {
		modalOpen = false;
	};
	export let modalOpen = false;
	export let transitionsOff: boolean | null = false;
	export let bgTW: string | undefined = 'bg-[rgba(0,0,0,0.4)]';
	export let all: boolean | undefined = false; // usually false, but when true modal closes when clicked anywhere
	export let body: boolean | undefined = false;
	// default behaviour is to allow navbar through; when user declares 'body' prop then the modal is attached to the document's body ... such as with the calendly modals

	// let dispatch = createEventDispatcher();
	function closeModal(event: KeyboardEvent | MouseEvent) {
		// i.e. close modal if slot parent (|self) OR escape key is clicked

		if (event.currentTarget === event.target || (event as KeyboardEvent).key == 'Escape') {
			// dispatch('closeModal');
			close();
		}
	}

	function modalDirective(node: HTMLElement) {
		document.addEventListener('keydown', closeModal);
		node.addEventListener('click', closeModal);

		// if (!body && !all) return;

		body && document.body.appendChild(node);

		return {
			destroy() {
				body && node.remove();
				node.removeEventListener('click', closeModal);
				document.removeEventListener('keydown', closeModal);
			}
		};
	}
</script>

<!-- on:keydown={closeModal} -->
<!-- on:click={closeModal} -->
<!-- role="button" -->
<!-- tabindex="0" -->
{#key body || transitionsOff ? true : modalOpen}
	<modal-container
		use:modalDirective
		class="fixed left-0 top-0 -z-50 hidden h-full w-full items-center justify-center overflow-x-clip overflow-y-scroll text-center {modalOpen &&
			`${bgTW} z-50 !flex`} 
"
	>
		<slot />
	</modal-container>
{/key}
