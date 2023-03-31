import type { RequestEvent } from '@sveltejs/kit';
export async function POST(event: RequestEvent) {
	const formData = await event.request.formData();

	const files = formData.getAll('file') as File[];

	for (let file of files) {
		let data = new FormData();
		data.append('file', file, file.name);

		fetch('https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable', {
			method: 'POST',
			body: data
		});
	}

	console.log('yoo');
	// return new Response(String(101));
	return new Response('Redirect', { status: 303, headers: { Location: '/homework' } });

	// return redirect(status:200, location:'/')
	// Do something with the form data, e.g. save it to a database
}
