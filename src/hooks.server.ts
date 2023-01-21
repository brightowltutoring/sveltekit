import type { Handle } from '@sveltejs/kit';

const urlRedirects = {
	screenshare: 'classroom'
	// login: "login",
};

// const urlMap = new Map([
//   ["screenshare", "classroom"],
//   ["login", "login2"],
// ]);

export const redirectOldUrls: Handle = async ({ event, resolve }) => {
	// export const handle = async ({ event, resolve }) => {
	for (const [key, value] of Object.entries(urlRedirects)) {
		// for (const [key, value] of urlMap) {
		if (event.url.pathname === `/${key}`) {
			return Response.redirect(`${event.url.origin}/${value}`, 302);
		}
	}

	return await resolve(event);
};

// This hook function — with 'transformPage' updated to 'transformPageChunk' — as provided by mihaon on 'https://github.com/sveltejs/svelte/issues/7444' fixes duplicate meta tags when starting with an SSR loaded page; I first surmised this could be a SSR/SSG-related issue  when starting with non-SSR route '/classroom' and no meta tag duplication persisted upon route changes
// export const handle = async ({ event, resolve }) => {
// export async function metaTagFixWhenSSR({ event, resolve }) {
export const metaTagFixWhenSSR = (async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html
				.replace(/<link\s+rel="canonical"[^>]*>/, '')
				.replace(/<meta\s+name="description"[^>]*>/, '')
				.replace(/<meta\s+name="keywords"[^>]*>/, '')
				.replace(/<meta\s+property="og:url"[^>]*>/, '')
				.replace(/<meta\s+property="og:title"[^>]*>/, '')
				.replace(/<meta\s+property="og:image"[^>]*>/, '')
				.replace(/<meta\s+property="og:description"[^>]*>/, '');
		}
	});

	return response;
}) satisfies Handle;

import { sequence } from '@sveltejs/kit/hooks';
export const handle = sequence(redirectOldUrls, metaTagFixWhenSSR);
