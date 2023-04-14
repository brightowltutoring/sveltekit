import { slide } from 'svelte/transition';
let ready = false;

export function KTransition(node: HTMLElement, args?: any) {
	// ready = true;
	args = { duration: 5000 };
	// return ready && slide(node, args);
	return slide(node, args);
}

export function slider(node: HTMLElement, { X = 0, Y = -100, duration = 300 }) {
	ready = true;
	return {
		X,
		Y,
		// easing,
		duration,

		css: (t, u) =>
			ready &&
			` transform: translate(${X * u}px, ${Y * u}px);
        opacity: ${t};
      `
	};
}
