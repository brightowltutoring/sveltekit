import type { RequestEvent } from '@sveltejs/kit';
import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

export async function submitHomework(event: RequestEvent) {
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
}

// alternate method for populating files array
// let filez: FormDataEntryValue[] = [];
// formData.forEach((value: FormDataEntryValue) => {
// 	filez = [...filez, value];
// });
// console.log('filez', filez);
