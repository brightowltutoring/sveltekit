<script lang="ts">
	import { onMount } from 'svelte';

	export let all = false; // usually false, but when true modal closes when clicked anywhere
	export let showModal = false;
	export let bgTint = 'bg-[rgba(0,0,0,0.4)]';
	export let body = false;
	// default behaviour is to allow navbar through; when user declares 'body' prop then the modal is attached to the document's body ... such as with the calendly modals

	// let container: HTMLButtonElement;
	let container: HTMLElement;

	// This is mainly a fix for the custom calendly iframe modal (in PlansButton.svelte) .. i.e. without appending the modal to the document body then the modal inherits strange padding and starts glitching
	body && onMount(() => document.body.appendChild(container));

	// Returns ability to close modal by clicking the entire container WITH content. So far only used when clicking the contact link in the footer and closing the fullscreen modal
	all && onMount(() => container.addEventListener('click', closeModal));

	function closeModal() {
		showModal = false;
	}
</script>

<!-- the svelte '|self' modifier makes only the wrapper of the slot clickable -->

<!-- The logincard component flashes through this modal component when the element below is a button; using a div works fine (apart from 'keypress' a11y complains of svelte). Previously I was using a custom <LazyMount> component to dynamically import the LoginCard component in GlobalModals.svelte in order to avoid the flash. -->
<!-- <div class="hidden"> -->

<div
	on:keypress={closeModal}
	on:click|self={closeModal}
	bind:this={container}
	class=" fixed top-0 left-0 z-50 hidden h-full w-full items-center justify-center overflow-x-clip overflow-y-scroll text-center 
		{showModal && `${bgTint} !flex`}"
>
	<slot />
</div>
