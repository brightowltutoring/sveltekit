import type { RequestEvent } from '@sveltejs/kit';
// import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

export async function submitHomework(event: RequestEvent) {
	const formData = await event.request.formData();

	const files = formData.getAll('file') as File[];
	// console.log('files', files);

	// handle these with promise all
	for (let file of files) {
		let data = new FormData();
		data.append('file', file);

		// handle these with promise all
		fetch('https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable', {
			// fetch(PUBLIC_UPLOAD_ENDPOINT, {
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
