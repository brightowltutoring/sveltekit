import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// import { routesObj } from '$lib/store';
// const availableRouteString = String(Object.keys(routesObj));

export const redirectOldUrls: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;

	const urlRedirects = {
		// screenshare: 'classroom',
		'pwa-home': 'pwa'
	};

	for (const [key, value] of Object.entries(urlRedirects)) {
		if (pathname === `/${key}`) {
			return Response.redirect(`${event.url.origin}/${value}`, 302);
		}
	}

	// if (availableRouteString.includes(pathname)) return Response.redirect(`🍌`, 302);
	console.log(` event.url: ${event.url} `);

	return await resolve(event);
};

// Update: https://www.okupter.com/blog/sveltekit-fix-duplicate-metatags-issue gives the answer:
//      Disable HTML minification for the domain from Cloudflare dashboard (Speed > Optimization > Auto Minify).
// This explains why meta tags were not duplicated in Vercel deployment

// Taken from 'https://github.com/sveltejs/svelte/issues/7444'
export const metaTagFixWhenSSR: Handle = async ({ event, resolve }) => {
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
};

// export const handle = sequence(redirectOldUrls /* , metaTagFixWhenSSR */);
