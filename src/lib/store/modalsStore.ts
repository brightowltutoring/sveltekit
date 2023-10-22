import { writable } from 'svelte/store';

export const contactLinkModalOpen = writable(false);

// // old way to mutually handle modals ... more readable makes more sense the new way
export const navAppModalOpen = writable(false);
export const loginModalOpen = writable(false);
export const homeworkModalOpen = writable(false);

export async function clearNavModals() {
	loginModalOpen.set(false);
	homeworkModalOpen.set(false);
	navAppModalOpen.set(false);
}

// necessary when referencing the keys as strings in custom store below
// export interface Modals {
// 	[key: string]: boolean;
// }
export type Modals = {
	[key: string]: boolean;
};

// Usage
export const modals = createExclusiveModals({
	contactLink: false,
	navApp: false,
	login: false,
	homework: false
});

// modals.open('contactLink'); // Sets contactLink modal to true and all others to false!
// modals.close('contactLink'); // Sets contactLink modal to false only
// modals.closeAll(); // Closes all ... which seems more useful
function createExclusiveModals(modalsObject: Object) {
	const { subscribe, update } = writable(modalsObject);

	return { subscribe, open, close, closeAll };

	function open(modalName: string) {
		update((modals) => {
			for (const key in modals) {
				console.log('open');
				(modals as Modals)[key] = key === modalName;
			}
			return modals;
		});
	}
	function close(modalName: string) {
		update((modals) => {
			console.log('close');
			(modals as Modals)[modalName] = false;
			return modals;
		});
	}
	function closeAll() {
		update((modals) => {
			console.log('closeAll');
			for (const key in modals) {
				(modals as Modals)[key] = false;
			}
			return modals;
		});
	}
}
// // old definitions (creates new objects)
// definitions
// function close(modalName: string) {
// 	set(function (modals: Object) {
// 		const newModals = { ...modals };
// 		//@ts-ignore
// 		newModals[modalName] = false;
// 		return newModals;
// 	});
// }

// function open(modalName: string) {
// 	update((modals) => {
// 		const newModals = {};

// 		Object.keys(modals).forEach((k) => {
// 			//@ts-ignore
// 			newModals[k] = k === modalName;
// 		});

// 		return newModals;
// 	});
// }
