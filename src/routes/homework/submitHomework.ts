import type { RequestEvent } from '@sveltejs/kit';
import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';
import { UPLOAD_ENDPOINT } from '$env/static/private';

export async function submitHomeworkAction(event: RequestEvent) {
	// const UPLOAD_ENDPOINT = PUBLIC_UPLOAD_ENDPOINT;

	console.log('submitHomeworkAction action; currently using "private" upload endpoint');

	try {
		const formData = await event.request.formData();

		const files: File[] = [];
		for (const value of formData.values()) {
			if (value instanceof File) files.push(value);
		}

		let count = 0;
		let filesInfo = '';

		for (let file of files) {
			filesInfo += `${count + 1}. ${file.name} (${file.size} B); `;
			count++;

			let data = new FormData();
			data.append('file', file, file.name);
			await fetch(UPLOAD_ENDPOINT, {
				method: 'POST',
				body: data
			});
		}

		let message = `${count} file(s) uploaded successfully: ${filesInfo}. Uploaded to: ${UPLOAD_ENDPOINT} `;

		console.log(message, event.url.pathname);

		return { success: true };
	} catch (error) {
		console.log('error', error);
		return { error: error };
	}
}

export async function submitHomework(event: RequestEvent) {
	console.log('submitHomework action hit');
	const formData = await event.request.formData();

	const files = formData.getAll('file') as File[];

	// OLD METHOD: fetch is called "in series", so code is slower
	// TODO: UPDATE: cannot tell if it is actually slower
	// for (let file of files) {
	// 	let data = new FormData();
	// 	data.append('file', file, file.name);

	// 	// handle these with promise all
	// 	// fetch('https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable', {
	// 	fetch(PUBLIC_UPLOAD_ENDPOINT, {
	// 		method: 'POST',
	// 		body: data
	// 	});
	// }

	// NEW METHOD:  all fetches done "in parallel" with Promise.all logic
	uploadInParallel().catch((e) => console.log('This upload failed', e));

	async function uploadInParallel() {
		const uploadsTodo = files.map((file) => {
			try {
				uploadSingle(file);
			} catch (error) {
				error;
				console.log('error', error);
			}
		});

		return await Promise.all(uploadsTodo);
	}

	async function uploadSingle(file: File) {
		let data = new FormData();
		data.append('file', file, file.name);
		fetch(PUBLIC_UPLOAD_ENDPOINT, {
			method: 'POST',
			body: data
		});
	}
	return { success: true };
}

// alternate method for populating files array
// let filez: FormDataEntryValue[] = [];
// formData.forEach((value: FormDataEntryValue) => {
// 	filez = [...filez, value];
// });
// console.log('filez', filez);
