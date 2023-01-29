<script>
	import {
		// isDarkMode,
		showHomeworkModal
	} from '$lib/store';
	// $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
</script>

<!-- style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent" -->
<button
	on:click={() => ($showHomeworkModal = true)}
	class="submitArea group mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll text-3xl backdrop-blur-3xl sm:w-[60vw]"
>
	<div class="font-Nunito text-2xl group-hover:animate-pulse">Drop it like it's 🔥</div>
</button>

<!-- noscript submit homework -->
<noscript>
	<iframe
		name="dummyframe"
		id="dummyframe"
		style="display: none;"
		title="this iframe serves as a janky solution so that the page doesnt redirect after form submission"
	/>
	<form
		target="dummyframe"
		enctype="multipart/form-data"
		method="POST"
		action="https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable"
	>
		<!-- <button class="rounded border-1 bg-red-800 p-3 text-white hover:bg-blue-400" type="submit"
			>Submit</button
		> -->

		<input
			class="border-1 rounded bg-red-800 p-3 text-white hover:bg-blue-400  focus:bg-indigo-700"
			type="submit"
			value="Submit"
		/>

		<label
			for="file"
			class="submitArea group mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll text-3xl backdrop-blur-3xl sm:w-[60vw]"
		>
			<div class="font-Nunito text-2xl group-hover:animate-pulse">Drop it like it's 🔥</div>
			<!-- <input class="hidden" type="file" name="file" id="file" required multiple /> -->
			<input type="file" name="file" id="file" required />
		</label>
	</form>
</noscript>

<!-- noscript submit homework -->
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
