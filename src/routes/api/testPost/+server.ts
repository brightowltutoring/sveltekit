import type { RequestEvent } from '@sveltejs/kit';

export async function POST(event: RequestEvent) {
	const formData = await event.request.formData(); // parse the request body as FormData
	let files = formData.getAll('file') as File[];

	console.log('files', files);

	let fileNamesOneString = '';

	// method 1
	const filesLength = files.length;
	files.forEach((file, index) => {
		if (index != filesLength - 1) {
			fileNamesOneString += `${file.name},`;
		} else {
			fileNamesOneString += `${file.name}`;
		}
	});

	// method 2
	let fileNames = files.map((file) => file.name);
	const fileNamesOneString2 = fileNames.join();

	const blob = JSON.stringify(fileNamesOneString);
	// const blob = JSON.stringify(fileNamesOneString2);

	return new Response(blob, { status: 303 });
}
