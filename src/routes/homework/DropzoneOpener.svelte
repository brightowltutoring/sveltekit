<script lang="ts">
	import IconUpload from '$lib/Icons/IconUpload.svelte';
	import { showHomeworkModal } from '$lib/store';
	// import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

	import NoScriptSubmitHomework from './NoScriptSubmitHomework.svelte';

	function openShowHomeworkModal() {
		$showHomeworkModal = true;
		document.querySelector('.dropzone')?.dispatchEvent(new CustomEvent('click'));
	}
</script>

<button
	aria-label="Upload Button Area"
	on:click={openShowHomeworkModal}
	class="submitArea group relative mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll text-3xl backdrop-blur-3xl sm:w-[60vw]"
>
	<div class="flex flex-col items-center justify-center">
		<!-- <div class="overlay animate-pulse"> -->
		<div class="animate-pulse">
			<IconUpload />
		</div>

		<!-- <div class="overlay z-50"> -->
		<div class="z-50">
			<NoScriptSubmitHomework />
		</div>
	</div>
</button>

<style>
	.overlay {
		@apply absolute left-0 top-0 h-[100%] w-[100%];
	}
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
