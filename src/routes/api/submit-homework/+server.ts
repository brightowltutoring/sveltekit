import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

const ENDPOINT = [
	'https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable',
	PUBLIC_UPLOAD_ENDPOINT
];

import type { RequestEvent } from '@sveltejs/kit';

// TODO: currently un-downloaded these .. btw this whole logic provided by gpt
// import fetch from 'node-fetch';
// import FormData from 'form-data';
// import { Readable } from 'readable-stream';

export async function POST(event: RequestEvent) {
	// const formData = await event.request.formData();
	// const files = formData.getAll('file') as File[];

	// const form = new FormData();

	// for (const file of files) {
	// 	form.append('file', file, { filename: file.name });
	// }

	// for (let i = 0; i < files.length; i++) {
	// 	const file = files[i];
	// 	const stream = Readable.from(fs.createReadStream(file.path));
	// 	form.append('files', stream, { filename: file.name });
	// }

	// await fetch(ENDPOINT[0], {
	// 	method: 'POST',
	// 	body: formData,
	// 	headers: form.getHeaders()
	// });

	try {
		const formData = await event.request.formData();
		const files = formData.getAll('file') as File[];

		// console.log('event.request.headers)', event.request.headers);

		for (let file of files) {
			let data = new FormData();
			data.append('file', file, file.name);
			fetch(ENDPOINT[0], {
				method: 'POST',
				body: data
			});
		}
		console.log('files', files);

		return new Response('Redirect', { status: 303, headers: { Location: '/homework' } });
	} catch (error) {
		const errorMessage = `An error occured with the /api/submit-homework/+server.ts code:\n\n ${error}\n`;
		console.log(errorMessage);
		return new Response(errorMessage, { status: 500 });
	}

	// return redirect(status:200, location:'/')
	// Do something with the form data, e.g. save it to a database
}
