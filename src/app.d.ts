// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
// declare global {
// declare namespace App {
// interface Error {}
// interface Locals {}
// interface PageData {}
// interface Platform {}
// interface globalThis {
// 	submitOnce: boolean;
// }
// }

// 	var submitOnce: boolean;
// }

// Taken from: https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error ... although other ways of typing "on:" custom events can be found on: https://stackoverflow.com/questions/64131176/svelte-custom-event-on-svelte-typescript
declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:click_outside'?: (e: CustomEvent) => void;
	}
}
