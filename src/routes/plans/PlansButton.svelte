<script lang="ts">
	import Modal from '$lib/Wrappers/Modal.svelte';

	export let button;

	const { url, opacityTW, text } = button;

	let showMe = false;
	let src = '';
	let changeOpacityTo100 = '';

	function handlePlansModal(e: MouseEvent, BUTTON_URL: string) {
		src = BUTTON_URL;

		if (e.type === 'click') {
			showMe = true;
			setTimeout(
				() => (changeOpacityTo100 = 'opacity-100 transition-opacity duration-300 ease-in'),
				25
			);
			// setTimeout is necessary since iframe doesnt yet exist ... to do opacity transition
		}
	}
</script>

<Modal body bind:showModal={showMe} bgTW={'bg-[rgba(0,0,0,0.1)]'}>
	<iframe
		title="Thinksolve Plans"
		class="{changeOpacityTo100} fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl md:w-[80%] md:-translate-y-5"
		{src}
	/>
</Modal>

<!-- on:click={Calendly.initPopupWidget({ url: button.url })} -->
<button
	on:click={(e) => handlePlansModal(e, url)}
	on:mouseenter={(e) => handlePlansModal(e, url)}
	class="m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md group-hover:bg-opacity-80 {opacityTW} {$$props.class}"
>
	<span>{text}</span>
</button>
