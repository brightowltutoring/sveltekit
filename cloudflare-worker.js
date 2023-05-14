addEventListener('fetch', (event) => {
	const request = event.request;

	if (request.method === 'POST' && request.headers.get('Content-Type') === 'multipart/form-data') {
		const formData = new FormData(request);

		const data = {
			file: formData.get('file')
		};

		fetch(process.env.UPLOAD_ENDPOINT, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	}
});
