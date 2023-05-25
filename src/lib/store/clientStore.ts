import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);
export const isSafari = writable(false);
export const isDarkMode = writable(false);
