import { db } from '$lib/server/database';

export async function handle({ event, resolve }) {
	const query = `
		SELECT *
		FROM "User"
		WHERE "User".id = 1234
	`;

	const [User] = (await db.query(query)).rows;
	// const [User] = await executeQuery(query);

	event.locals.user = User;
	let response = await resolve(event);

	return response;
}
