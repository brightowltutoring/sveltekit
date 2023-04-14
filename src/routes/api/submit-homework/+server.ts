// import { json, fail } from '@sveltejs/kit';
import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

const ENDPOINT = [PUBLIC_UPLOAD_ENDPOINT];

import type { RequestEvent } from '@sveltejs/kit';

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