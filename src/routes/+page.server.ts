export const actions = {
	default: async (event: any) => {
		let response = Object.fromEntries(await event.request.formData());
		console.log(response);
	}
};
