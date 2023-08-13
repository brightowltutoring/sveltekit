import { UPLOAD_ENDPOINT } from '$env/static/private';
import { sendDummyTextFileToGoogleDrive } from '$src/lib/utils.js';

export async function POST({ request, fetch }) {
	sendDummyTextFileToGoogleDrive('derpa');

	console.log('sveltekit POST function hit at "/api/submit-homework/+server.ts" ');
	try {
		const formData = await request.formData();

		const firstNameAndSize = `firstNameAndSize: ${formData.entries().next().value[1].name}; ${
			formData.entries().next().value[1].size
		}.`;

		console.log('firstNameAndSize', firstNameAndSize);

		if (formData instanceof FormData) {
			const files: File[] = [];
			for (const value of formData.values()) {
				if (value instanceof File) files.push(value);
			}

			let count = 0;
			let filesInfo = '';

			for (let file of files) {
				filesInfo += `${count + 1}. ${file.name} (${file.size} B); `;
				count++;

				let data = new FormData();
				data.append('file', file, file.name);
				await fetch(UPLOAD_ENDPOINT, {
					method: 'POST',
					body: data,
					// headers: {
					// 	'X-Forwarded-Method': 'GET'
					// }
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				});
			}

			let message = `${count} file(s) uploaded successfully: ${filesInfo}. Uploaded to: ${UPLOAD_ENDPOINT} `;

			console.log(message);

			return new Response(
				JSON.stringify({
					success: true,
					message: firstNameAndSize + message
				}),
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
		} else {
			return new Response(JSON.stringify({ error: true, message: 'No form data found.' }), {
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	} catch (error) {
		return new Response(
			JSON.stringify({ error: true, message: 'An error occurred while uploading the file.' }),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
