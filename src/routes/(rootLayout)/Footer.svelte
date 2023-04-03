<script lang="ts">
	export let contactLinkClicked = false; // this variable is bound to corresponding modal in +layout.svelte
	import { onMount } from 'svelte';

	let contactLink: HTMLElement;
	let contactLinkTimeout: ReturnType<typeof setTimeout>;

	onMount(() => document.addEventListener('click', handleContactLinkClicked));

	//This could also be done without 'let contactLink' and with 'e.target.id', but I believe this way scopes everything to this component, whereas the vanilla way could have a id name collision
	function handleContactLinkClicked(e: MouseEvent | TouchEvent) {
		if (e.target === contactLink) {
			contactLinkClicked = true;
			contactLinkTimeout = setTimeout(() => {
				contactLinkClicked = false;
			}, 4000);
		} else {
			contactLinkClicked = false;
			clearTimeout(contactLinkTimeout);
		}
	}
</script>

<div class="mb-10 mt-20 flex flex-row items-center justify-center gap-x-1 text-sm pwa:mb-3">
	<span class="bg-gradient-to-l from-blue-500 to-pink-600 bg-clip-text text-transparent">
		<a data-sveltekit-preload-data href="/faq" class="pwa:hidden">faq &nbsp; | &nbsp;</a>
		<span bind:this={contactLink}> contact </span>
	</span>
</div>
