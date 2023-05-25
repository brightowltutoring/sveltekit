import { derived, get, writable } from 'svelte/store';

export const lastScrollY = writable(0);
export const scrollY = writable(0);

let delayedScrollY = get(scrollY);
let delayedScrollTimeout: NodeJS.Timeout | undefined;
export const instDeltaY = derived(scrollY, ($scrollY) => {
	if (delayedScrollTimeout) clearTimeout(delayedScrollTimeout);

	delayedScrollTimeout = setTimeout(() => (delayedScrollY = $scrollY), 50);
	// inside derived store '$scrollY' is the same as 'get(scrollY)'

	return $scrollY - delayedScrollY;
});
