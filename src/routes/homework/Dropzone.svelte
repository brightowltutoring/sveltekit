<script lang="ts">
	export let textSizeTW = 'text-3xl';
	export let dimensionsTW = 'w-[65vw] sm:w-[60vw] h-[60vh]';
	export let brightnessTW = 'brightness-100';

	import './dropzone.css';
	import IconUploadGradient from '$lib/Icons/IconUploadGradient.svelte';
	import { homeworkModalOpen, modals } from '$lib/store/modalsStore';
	import { useInView } from '$lib/utils';
	import {
		dropzonePopUpOnce,
		getIframeSrcAndPostDummyOnce,
		hydrateDropzoneDomEls
	} from './Dropzone';

	let iframeSrc: string | undefined = undefined;

	const updateIframeSrc = async () => (iframeSrc = await getIframeSrcAndPostDummyOnce());

	$: $modals.homework && (dropzonePopUpOnce(), updateIframeSrc());
	// $: $homeworkModalOpen && (dropzonePopUpOnce(), updateIframeSrc());
	// $: $homeworkModalOpen  && dropzonePopUpOnce();
	// $: $homeworkModalOpen  && updateIframeSrc();
</script>

<!-- The one-time hydration of this iframe submits a dummy file to google drive, with the goal to circumvent cold-start of google drive cloud function -->
<iframe
	title="Executes 'moveNamedFilesToFolder' Google App script via iFrame src"
	style="height: 0vh; width: 0vw"
	src={iframeSrc}
	frameborder="0"
/>

<!-- <PostDummyOnce /> -->

<!-- <InView single onview={(target) => hydrateDropzoneDomEls(target)} once margin={'0px'}> -->
<form
	use:useInView={{ onview: (target) => hydrateDropzoneDomEls(target) }}
	method="post"
	class="dropzone flex flex-wrap items-center justify-center backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} group mx-auto overflow-y-scroll"
>
	<div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
		<IconUploadGradient />
	</div>
</form>

<!-- </InView> -->

<style>
	/* removes white background on uploaded images  */
	:global(.dropzone .dz-preview.dz-image-preview) {
		background-color: transparent !important;
	}

	:root {
		--light-box-shadow-color: #ddd;
		--dark-box-shadow-color: #1d1c43;
		--box-shadow-inset: 10px;
	}
	form {
		box-shadow: inset 0 calc(-1 * var(--box-shadow-inset)) var(--box-shadow-inset)
			var(--light-box-shadow-color);
		border-radius: 50px;
		border-color: transparent;
		background-color: transparent;
	}

	:global(html.dark-mode) form {
		box-shadow: inset 0 calc(-1 * var(--box-shadow-inset)) var(--box-shadow-inset)
			var(--dark-box-shadow-color);
	}
</style>
