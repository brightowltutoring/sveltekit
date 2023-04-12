<script lang="ts">
	import Modal from '$lib/Wrappers/Modal.svelte';
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';

	let contactLink: HTMLElement;
	let contactLinkClicked = false;
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
		<a href="/faq" class="pwa:hidden">faq &nbsp; | &nbsp;</a>
		<span bind:this={contactLink}> contact </span>
	</span>
</div>

<Modal showModal={contactLinkClicked} bgTW={'backdrop-blur-3xl'}>
	<ul
		in:scale={{
			duration: 1500,
			easing: elasticOut
		}}
		class="flex flex-col gap-y-2 bg-gradient-to-r from-teal-700 via-rose-700 to-pink-700 bg-clip-text text-center font-Poppins text-3xl text-transparent dark:from-teal-200 dark:via-rose-300 dark:to-pink-200 sm:text-5xl"
	>
		<li>Email:</li>
		<li class="p-5">thinksolve.io@gmail.com</li>
	</ul>
</Modal>
