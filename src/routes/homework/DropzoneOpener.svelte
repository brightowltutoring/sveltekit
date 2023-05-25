<script lang="ts">
	export let success = false;

	import IconUpload from '$lib/Icons/IconUpload.svelte';
	import { enhance } from '$app/forms';
	import { showHomeworkModal } from '$lib/store/modalsStore';
	// import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';
	const ACTION_API_URL = ['/api/submit-homework', '', '/api/testPost' /* PUBLIC_UPLOAD_ENDPOINT */];

	function showHomeworkModalAndClickDropzone() {
		showHomeworkModal.set(true);
		document.querySelector('.dropzone')?.dispatchEvent(new CustomEvent('click'));
	}
</script>

<button
	on:click={showHomeworkModalAndClickDropzone}
	aria-label="Upload Button Area"
	class="submitArea mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll backdrop-blur-3xl sm:w-[60vw]"
>
	<label for="file" class="w-[60vw]">
		<div class="flex w-[100%] flex-col items-center justify-center">
			<div class="animate-pulse">
				<IconUpload />
			</div>

			<!-- <NoScriptSubmitHomework {success} /> -->
			<noscript>
				<iframe
					name="dummyframe"
					id="dummyframe"
					style="display: none;"
					title="this iframe serves as a janky solution so that the page doesnt redirect after form submission"
				/>

				<form
					use:enhance
					enctype="multipart/form-data"
					method="POST"
					action={ACTION_API_URL[1]}
					target="dummyframe"
					class="flex flex-col items-center justify-center gap-5"
				>
					<label for="file" class="flex items-center justify-center text-lg sm:w-[60vw]">
						<input class="hidden px-5" type="file" name="file" id="file" multiple />
					</label>
					<label
						tabindex="-1"
						for="submit"
						class="border-1 group rounded-lg {success
							? 'bg-emerald-500'
							: 'bg-red-800 '} p-3 text-white transition-colors duration-500 hover:bg-blue-400 focus:animate-wave"
					>
						{success ? 'sent' : 'submit'}

						<input class="hidden" type="submit" value="Submit" id="submit" />
					</label>
				</form>
			</noscript>
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
