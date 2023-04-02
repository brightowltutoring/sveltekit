import { postDummyTextFileToGoogleDrive } from '$lib/utils';
import { json } from '@sveltejs/kit';

// TODO: remove later

// import fetch from 'node-fetch';

const dummyEndpoint = 'https://jsonplaceholder.typicode.com/todos/2';

export async function GET() {
	const response = await fetch(dummyEndpoint);
	const responseObject = await response.json();

	// TODO: deletable
	postDummyTextFileToGoogleDrive('dummor');

	// return new Response(JSON.stringify(responseObject), { status: 202 });
	return json(responseObject, { status: 201 });
}
