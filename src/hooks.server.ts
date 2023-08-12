// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
// import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

export async function handle({ event, resolve }) {
	event.locals.haventLoggedOut = Boolean(event.cookies.get('haventLoggedOut'));

	// event.locals.supabase = createSupabaseServerClient({
	//   supabaseUrl: PUBLIC_SUPABASE_URL,
	//   supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
	//   event,
	// })

	// event.locals.getSession = async () => await event.locals.supabase.auth.getSession().data.session

	let response = await resolve(event);
	// let response = await resolve(event, {
	//   filterSerializedResponseHeaders(name) {
	//     return name === 'content-range'
	//   },
	// })
	return response;
}
