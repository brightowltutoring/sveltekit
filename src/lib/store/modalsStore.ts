import { writable } from 'svelte/store';

export const contactLinkClicked = writable(false);
export const navAppClicked = writable(false);
export const loginModalOpen = writable(false);
export const showHomeworkModal = writable(false);

export async function clearNavModals() {
	loginModalOpen.set(false);
	showHomeworkModal.set(false);
	navAppClicked.set(false);
}
