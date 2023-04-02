import type { RequestEvent } from '@sveltejs/kit';

export async function POST(event: RequestEvent) {
	const formData = await event.request.formData();
	let files = formData.getAll('file') as File[];

	let fileNames = files.map((file) => file.name);
	const fileNamesOneString2 = fileNames.join(', ');

	console.log(fileNamesOneString2);

	const blob = fileNamesOneString2;
	return new Response(JSON.stringify(blob), { status: 303 });
}
// console.log('files', files);

// method 1
// let fileNamesOneString = '';
// const filesLength = files.length;
// files.forEach((file, index) => {
// 	if (index != filesLength - 1) {
// 		fileNamesOneString += `${file.name},`;
// 	} else {
// 		fileNamesOneString += `${file.name}`;
// 	}
// });

// const blob = JSON.stringify(fileNamesOneString);

// return new Response(blob, { status: 303 });
// }
