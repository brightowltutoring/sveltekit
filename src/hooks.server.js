const urlRedirects = {
  screenshare: "classroom",
  // screenshareA: "",
};

const urlMap = new Map([
  ["screenshare", "classroom"],
  // ["screenshareA", ""],
]);

export async function redirectOldUrls({ event, resolve }) {
  // export const handle = async ({ event, resolve }) => {
  // for (const [key, value] of Object.entries(urlRedirects)) {
  for (const [key, value] of urlMap) {
    if (event.url.pathname === `/${key}`) {
      return Response.redirect(`${event.url.origin}/${value}`, 301);
    }
  }

  return await resolve(event);
}

// // TODO: test
// export async function second({ event, resolve }) {
//   // if (event.url.pathname.startsWith("/plans")) {
//   if (event.url.pathname === "/plans") {
//     return new Response("custom response");
//   }

//   const response = await resolve(event);
//   return response;
// }

// As suggested by mihaon on 'https://github.com/sveltejs/svelte/issues/7444', this is a dirty fix to remove duplicate meta tags  ... which I also discovered was an issue with SSR pages
export async function metaTagFixWhenSSR({ event, resolve }) {
  let response = await resolve(event, {
    transformPage: ({ html }) => {
      return html
        .replace(/<link\s+rel="canonical"[^>]*>/, "")
        .replace(/<meta\s+name="description"[^>]*>/, "")
        .replace(/<meta\s+name="keywords"[^>]*>/, "")
        .replace(/<meta\s+property="og:url"[^>]*>/, "")
        .replace(/<meta\s+property="og:title"[^>]*>/, "")
        .replace(/<meta\s+property="og:image"[^>]*>/, "")
        .replace(/<meta\s+property="og:description"[^>]*>/, "");
    },
  });

  return response;
}

import { sequence } from "@sveltejs/kit/hooks";
export const handle = sequence(redirectOldUrls, metaTagFixWhenSSR);
