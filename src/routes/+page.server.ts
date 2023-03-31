import { submitHomework } from './homework/submitHomework';
export const actions = {
	// default: async (event: any) => {
	// 	let response = Object.fromEntries(await event.request.formData());
	// 	console.log(response);
	// },
	default: (event) => submitHomework(event)
};
