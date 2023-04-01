import { json } from '@sveltejs/kit';
// import fetch from 'node-fetch';

const dummyEndpoint = 'https://jsonplaceholder.typicode.com/todos/2';

export async function GET() {
	// const response = await fetch(dummyEndpoint, { method: 'GET', mode: 'cors' });
	const response = await fetch(dummyEndpoint);
	const data = await response.json();
	return json(data);
	// return json(response);
	// return { body: data };

	// return new Response(200, {body:data})
}
