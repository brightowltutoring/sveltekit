import Dropzone from 'dropzone';
import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';
import { showHomeworkModal } from '$lib/store/modalsStore';
import { get, writable } from 'svelte/store';

const popUpOnceBoolean$ = writable(false);
const submitOnce$ = writable(false);

let dropzone: any;

export async function hydrateDropzoneDomEls(target: Element | HTMLElement) {
	console.log('drop it like its 🌶️');

	dropzone = new Dropzone(target as HTMLElement, {
		url: PUBLIC_UPLOAD_ENDPOINT,
		acceptedFiles: '.heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc'
	});

	dropzoneHandleErroredUploads();
}

// Collect 'errored' files, which are of the acceptable type ... and reprocess files when internet comes back.
// Tested use cases: internet cuts out mid-upload, and internet off when upload started.
function dropzoneHandleErroredUploads() {
	let filesToRetry: Array<any> = [];
	dropzone.on('error', (file: any) => file.accepted && filesToRetry.push(file));

	dropzone.on('queuecomplete', () => {
		setTimeout(() => showHomeworkModal.set(false), 1000);
	});

	window?.addEventListener('online', () => {
		if (filesToRetry.length > 0) {
			for (const file of filesToRetry) {
				dropzone.processFile(file);

				// removes error mark css after the files have been processed
				file.previewElement.querySelector('.dz-error-mark').style.visibility = 'hidden';
				// removes error message css after the files have been processed
				file.previewElement.querySelector('.dz-error-message').style.visibility = 'hidden';
			}

			// reset collected files array when done
			filesToRetry.length == 0;
		}
	});
}

export function dropzonePopUpOnce() {
	if (get(popUpOnceBoolean$) === true) return;

	popUpOnceBoolean$.set(true);
	setTimeout(dispatchClickOnDropzone, 75);

	function dispatchClickOnDropzone() {
		return document.querySelector('.dropzone')!.dispatchEvent(new CustomEvent('click'));
	}
}

// based on previous function 'PostDummyOnce()'
export async function getIframeSrcAndPostDummyOnce() {
	if (get(showHomeworkModal) === true && get(submitOnce$) === false) {
		submitOnce$.set(true);
		postDummyTextFileToGoogleDrive('foo');

		let iframeSrc = '';

		return new Promise<string>((resolve) => {
			setTimeout(async () => {
				const { PUBLIC_GOOGLE_APP_SCRIPT } = await import('$env/static/public');
				iframeSrc = PUBLIC_GOOGLE_APP_SCRIPT;
				resolve(iframeSrc);
			}, 5000);
		});
	}
}

async function postDummyTextFileToGoogleDrive(name: string) {
	// const { PUBLIC_UPLOAD_ENDPOINT } = await import('$env/static/public');
	const data = new FormData();
	const file = new File([`${name}`], `${name}.txt`, {
		type: 'text/plain'
	});
	data.append('file', file);

	await fetch(PUBLIC_UPLOAD_ENDPOINT, {
		method: 'POST',
		body: data
	});
}
