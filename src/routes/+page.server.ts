import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event: any) => {
		let response = Object.fromEntries(await event.request.formData());
		console.log(response);
	}
};
