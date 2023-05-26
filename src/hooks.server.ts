export async function handle({ event, resolve }) {
	event.locals.haventLoggedOut = Boolean(event.cookies.get('haventLoggedOut'));

	let response = await resolve(event);
	return response;
}
