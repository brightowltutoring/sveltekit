// import { json, fail } from '@sveltejs/kit';
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

// export async function POST(event: RequestEvent) {
// return new Response('sucess', { status: 303 });
// const requestJson = await event.request.json();

// const responseBody = { message: 'Homework submitted successfully', data: requestJson };
// const responseInit = { status: 200, headers: { 'Content-Type': 'application/json' } };
// const response = new Response(JSON.stringify(responseBody), responseInit);

// return response;
// }

// const formData = await event.request.formData();
// const files = formData.getAll('file') as File[];

// console.log('filesq', files);
// return json(300);

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

export async function POST(event: RequestEvent) {
	try {
		const formData = await event.request.formData();
		// const files = formData.getAll('file') as File[];

		const files: File[] = [];
		for (const [name, value] of formData.entries()) {
			if (value instanceof File) {
				files.push(value);
			}
		}

		// console.log('files', files);
		// console.log('event.request.headers)', event.request.headers);

		for (let file of files) {
			console.log('file.name', file.name);
			let data = new FormData();
			data.append('file', file, file.name);
			await fetch(ENDPOINT[0], {
				method: 'POST',
				body: data
			});
		}

		// const requests = files.map(async (file) => {
		// 	if (!file.name) {
		// 		return Promise.resolve(null);
		// 	}
		// 	const data = new FormData();

		// 	data.append('file', file, file.name);
		// 	return fetch(ENDPOINT[0], {
		// 		method: 'POST',
		// 		body: data
		// 	}).catch((err) => {
		// 		console.log(`Error uploading ${file.name}: ${err}`);
		// 		return null;
		// 	});
		// });

		// starts the concurrent fetches chain in a non-breaking way
		// (await Promise.all(requests)).filter((res) => res !== null);

		return new Response('Redirect', { status: 303, headers: { Location: '/' } });
	} catch (error) {
		const errorMessage = `An error occured with the /api/submit-homework/+server.ts code:\n\n ${error}\n`;
		console.log(errorMessage);
		return new Response(errorMessage, { status: 500 });
	}
}
