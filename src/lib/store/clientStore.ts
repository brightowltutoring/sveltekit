import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const isSafari = writable(false);
export const isIOS = writable(false);
export const isPWA = writable(false);
export const isDarkMode = writable(false);
