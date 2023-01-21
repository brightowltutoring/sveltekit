<script lang="ts">
	import { isRunningStandalone } from '$lib/utils';
	export let contactLinkClicked = false; // this variable is bound to corresponding modal in +layout.svelte

	let contactLinkTimeout: ReturnType<typeof setTimeout>;

	function handleContactLinkClicked(e: { target: HTMLInputElement }) {
		if (e.target.id !== 'contactLink') {
			contactLinkClicked = false;
			clearTimeout(contactLinkTimeout);
		}
		if (e.target.id === 'contactLink') {
			contactLinkClicked = true;
			contactLinkTimeout = setTimeout(() => {
				contactLinkClicked = false;
			}, 4000);
		}
	}

	import { onMount } from 'svelte';

	let runningStandalone: boolean;

	onMount(async () => {
		// using event delegation logic to do X when target is clicked and do Y when not-target is clicked ... previously had to implement this with store variables and manually resetting logic ... TODO: possibly refactor the resetting logic use this
		// @ts-ignore
		document.addEventListener('click', handleContactLinkClicked);
		runningStandalone = await isRunningStandalone();
	});
</script>

<div
	class=" text-sm mt-20 {runningStandalone
		? 'mb-32'
		: 'mb-10'} flex justify-center items-center flex-row gap-x-1"
>
	<span class="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600">
		{#if !isRunningStandalone()}
			<a data-sveltekit-preload-data href="/faq">faq</a>
			&nbsp; | &nbsp;
		{/if}
		<span id="contactLink"> contact </span>
	</span>
</div>
