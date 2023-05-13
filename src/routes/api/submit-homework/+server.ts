import { UPLOAD_ENDPOINT } from '$env/static/private';

export async function POST(event) {
	try {
		const formData = await event.request.formData();

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
				body: data
			});
		}

		let message = `${count} file(s) uploaded successfully: ${filesInfo} `;

		console.log(message);

		return new Response(
			JSON.stringify({
				success: true,
				message: message
			}),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
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
