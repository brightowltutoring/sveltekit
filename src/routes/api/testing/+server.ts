import { postDummyTextFileToGoogleDrive } from '$lib/utils';
import { json } from '@sveltejs/kit';

const dummyEndpoint = 'https://jsonplaceholder.typicode.com/todos/2';

import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const userAgent = await event.request.headers.get('X-My-PWA-Header');
	console.log(userAgent);
	const headers = event.request.headers;
	console.log('headers', headers);

	const response = await fetch(dummyEndpoint);
	const responseObject = await response.json();

	// TODO: deletable
	postDummyTextFileToGoogleDrive('dummor');

	return json(userAgent, { status: 201 });
	// return json(responseObject, { status: 201 });
	// return json(headers, { status: 201 });
}
// return new Response(JSON.stringify(responseObject), { status: 202 });
