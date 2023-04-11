<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let transitionsOff: boolean | null = false;

	export let all: boolean | undefined = false; // usually false, but when true modal closes when clicked anywhere
	export let showModal = false;
	export let bgTW: string | undefined = 'bg-[rgba(0,0,0,0.4)]';
	export let body: boolean | undefined = false;
	// default behaviour is to allow navbar through; when user declares 'body' prop then the modal is attached to the document's body ... such as with the calendly modals

	// let container: HTMLButtonElement;
	let container: HTMLElement;

	// This is mainly a fix for the custom calendly iframe modal (in PlansButton.svelte) .. i.e. without appending the modal to the document body then the modal inherits strange padding and starts glitching

	if (body) {
		onMount(() => document.body.appendChild(container));
		onDestroy(() => container?.remove());
	}

	// Returns ability to close modal by clicking the entire container WITH content. So far only used when clicking the contact link in the footer and closing the fullscreen modal
	if (all) {
		onMount(() => container.addEventListener('click', closeModal));
		onDestroy(() => container?.removeEventListener('click', closeModal));
	}

	function closeModal() {
		showModal = false;
	}
</script>

<!-- the svelte '|self' modifier makes only the wrapper of the slot clickable -->

<div
	on:keypress|self={closeModal}
	on:click|self={closeModal}
	bind:this={container}
	class="fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center overflow-x-clip overflow-y-scroll text-center
				{showModal && `${bgTW} !flex`}"
>
	{#if transitionsOff || body}
		<slot />
	{:else}
		{#key showModal}
			<slot />
		{/key}
	{/if}
</div>
