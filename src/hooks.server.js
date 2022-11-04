// import { sequence } from "@sveltejs/kit/hooks";

const urlRedirects = {
  screenshare: "classroom",
  // screenshareA: "",
};

const urlMap = new Map([
  ["screenshare", "classroom"],
  // ["screenshareA", ""],
]);

export const handle = async ({ event, resolve }) => {
  // for (const [key, value] of Object.entries(urlRedirects)) {
  for (const [key, value] of urlMap) {
    if (event.url.pathname === `/${key}`) {
      return Response.redirect(`${event.url.origin}/${value}`, 301);
    }
  }

  return await resolve(event);
};

// // TODO: test
// export async function second({ event, resolve }) {
//   // if (event.url.pathname.startsWith("/plans")) {
//   if (event.url.pathname === "/plans") {
//     return new Response("custom response");
//   }

//   const response = await resolve(event);
//   return response;
// }

// export const handle = sequence(first, second);
