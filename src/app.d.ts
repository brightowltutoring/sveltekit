// See https://kit.svelte.dev/docs/types#app for more (Locals, Error, PageData, Platform)
declare namespace App {
	interface Locals {
		haventLoggedOut: boolean;
	}
}

// Taken from: https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error ... although other ways of typing "on:" custom events can be found on: https://stackoverflow.com/questions/64131176/svelte-custom-event-on-svelte-typescript
// declare namespace svelteHTML {
// 	interface HTMLAttributes<T> {
// 		'on:click_outside'?: (e: CustomEvent) => void;
// 	}
// }
