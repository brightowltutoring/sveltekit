import { sql } from '$lib/server/database';

export async function handle({ event, resolve }) {
	const [User] = await sql`
			SELECT *
			FROM "User"
            WHERE "User".id = 1234
		`;

	event.locals.user = User;
	let response = await resolve(event);

	return response;
}
