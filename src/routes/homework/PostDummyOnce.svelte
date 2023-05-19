<script lang="ts">
	import { showHomeworkModal, submitOnce$ } from '$lib/store';
	import { postDummyTextFileToGoogleDrive } from '$lib/utils';
	$: $showHomeworkModal && PostDummyOnce();
	let iframeSrc = '';

	// This code sends a dummy .txt file ONCE per session to a designated google drive folder via post request to the 'endpoint' (calls nodejs google cloud function to do this .... logic not here)
	// REASON: to circumvent 'cold start' of file uploader cloud function when user uploads first file (with dropzone)

	// UPDATE: DEC 21,2022: 'PostDummyOnce' also hydrates an iFrame src attribute with google apps script (logic not detailed here) .. which moves the dummy .txt file to a junk google drive folder. A timeout delay is necessary to allow the original 'foo.txt' post request to go through

	// FUTURE GOAL: use google app script or google drive api to directly delete the files ... haven't been successful in creating an app script to do this since the google cloud function is run by a 'google service account' (one which I created no less) and won't allow automated deletions ...

	// PostDummyOnce();

	async function PostDummyOnce() {
		// if (!globalThis.submitOnce) {
		if ($showHomeworkModal === true && $submitOnce$ === false) {
			// globalThis.submitOnce = true;
			// $submitOnce$ = true;
			submitOnce$.set(true);

			postDummyTextFileToGoogleDrive('foo');

			const { PUBLIC_GOOGLE_APP_SCRIPT } = await import('$env/static/public');

			// google is too fast for 1000ms, so using 5000ms
			setTimeout(() => (iframeSrc = PUBLIC_GOOGLE_APP_SCRIPT), 5000);
		}
	}
</script>

<iframe
	title="Executes 'moveNamedFilesToFolder' Google App script via iFrame src"
	style="height: 0vh; width: 0vw"
	src={iframeSrc}
	frameborder="0"
/>
