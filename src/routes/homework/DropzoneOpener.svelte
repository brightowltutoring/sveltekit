<script lang="ts">
	import IconUpload from '$lib/Icons/IconUpload.svelte';
	import { showHomeworkModal } from '$lib/store';
	// import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

	import NoScriptSubmitHomework from './NoScriptSubmitHomework.svelte';

	function openShowHomeworkModal() {
		$showHomeworkModal = true;
		document.querySelector('.dropzone')?.dispatchEvent(new CustomEvent('click'));
	}

	export let success = false;
</script>

<button
	on:click={openShowHomeworkModal}
	aria-label="Upload Button Area"
	class="submitArea mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll backdrop-blur-3xl sm:w-[60vw]"
>
	<!-- group relative  -->
	<!-- this file refers to the input file inside <NoScriptSubmitHomework />  -->
	<label for="file" class="w-[60vw]">
		<div class="flex w-[100%] flex-col items-center justify-center">
			<div class="animate-pulse">
				<IconUpload />
			</div>

			<NoScriptSubmitHomework {success} />
		</div>
	</label>
</button>

<style>
	:root {
		--light-box-shadow-color: #ddd;
		--dark-box-shadow-color: #1d1c43;
	}
	.submitArea {
		box-shadow: inset 0 -10px 10px var(--light-box-shadow-color);
		border-radius: 50px;
		border-color: transparent;
		background-color: transparent;
		cursor: pointer;
	}

	:global(html.dark-mode) .submitArea {
		box-shadow: inset 0 -10px 10px var(--dark-box-shadow-color);
	}
</style>
