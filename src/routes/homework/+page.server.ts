// export  function load(){

// }

// import { submitHomework } from './submitHomework';
export const actions = {
	// default: (event) => submitHomework(event)
	default: async ({ request }) => {
		const formData = await request.formData();

		const files = formData.getAll('file') as File[];

		for (let file of files) {
			let data = new FormData();
			data.append('file', file, file.name);

			// handle these with promise all
			fetch(
				'https://us-central1-thinksolve-app.cloudfunctions.net/postToGoogleDriveGCF/formidable',
				{
					method: 'POST',
					body: data
				}
			);
		}
	}
};
