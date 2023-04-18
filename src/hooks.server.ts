import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const redirectOldUrls: Handle = async ({ event, resolve }) => {
	const urlRedirects = {
		screenshare: 'classroom',
		'pwa-home': 'pwa'
		// pwa: 'pwa-home'
	};

	for (const [key, value] of Object.entries(urlRedirects)) {
		if (event.url.pathname === `/${key}`) {
			return Response.redirect(`${event.url.origin}/${value}`, 302);
		}
	}

	return await resolve(event);
};

// Updatee: https://www.okupter.com/blog/sveltekit-fix-duplicate-metatags-issue gives the answer:
//      Disable HTML minification for the domain from Cloudflare dashboard (Speed > Optimization > Auto Minify).
// Update: with this function off things work normally in vercel but with cloudflare and JS on the meta tags are persisted

// Old: Needed with Seo.svelte way of implementing SEO. Taken from 'https://github.com/sveltejs/svelte/issues/7444'
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

export const handle = sequence(redirectOldUrls /* metaTagFixWhenSSR */);
