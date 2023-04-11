<script lang="ts">
	import Modal from '$lib/Wrappers/Modal.svelte';

	// import type { payButton } from './PlansCard.svelte';

	// export let button: payButton;
	export let button;

	const { url, opacityTW, text } = button;

	let showMe = false;
	let src = '';
	let changeOpacityTo100 = '';

	// function handlePlansModal(e: MouseEvent | FocusEvent, BUTTON_URL: string) {
	function handlePlansModal(e: MouseEvent, BUTTON_URL: string) {
		src = BUTTON_URL;

		// if (e.type === 'click' || e.type === 'focus') {
		if (e.type === 'click') {
			showMe = true;
			setTimeout(
				() => (changeOpacityTo100 = 'opacity-100 transition-opacity duration-300 ease-in'),
				25
			);
			// setTimeout is necessary since iframe doesnt yet exist. I.e. a css transition requires the element to exist, in this case create at opacity-0 and then change to opacity-100 after delay, hopefully when already created.
		}
	}
</script>

<!-- Each button has an associated iframe modal, which need only be populated once .. unlike the native behaviour of calendly's popup widget function which resets a common modal and whose functionality has to be imported from external source. -->

<!-- without this bind the modal breaks from the intended behaviour!! I think this has to do with boolean not being a store variable ... since the setting of "showMe = false" happens inside Modal.svelte -->
<Modal body bind:showModal={showMe} bgTW={'bg-[rgba(0,0,0,0.1)]'}>
	<iframe
		title="Thinksolve Plans"
		class="{changeOpacityTo100} fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 opacity-0 backdrop-blur-3xl md:w-[80%] md:-translate-y-5"
		{src}
	/>
</Modal>

<!-- on:click={Calendly.initPopupWidget({ url: button.url })} -->
<!-- on:focus={(e) => handlePlansModal(e, url)} -->
<button
	on:click={(e) => handlePlansModal(e, url)}
	on:mouseenter={(e) => handlePlansModal(e, url)}
	class="m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md group-hover:bg-opacity-80 {opacityTW} {$$props.class}"
>
	<!-- <slot name="buttonText">{text}</slot> -->
	<span>{text}</span>
</button>
