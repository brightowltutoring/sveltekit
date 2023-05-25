import { writable } from 'svelte/store';

export const contactLinkClicked = writable(false);
export const navAppClicked = writable(false);
export const showLoginModal = writable(false);
export const showHomeworkModal = writable(false);

export async function clearNavModals() {
	showLoginModal.set(false);
	showHomeworkModal.set(false);
	navAppClicked.set(false);
}
