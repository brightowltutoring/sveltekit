export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/calcom": [3],
	"/classroom": [4],
	"/faq": [5],
	"/homework": [6],
	"/katex": [7],
	"/login": [8],
	"/mathjax": [10],
	"/math": [9],
	"/physics": [11],
	"/plans": [12],
	"/samplequiz": [13],
	"/schools": [14],
	"/screenshareA": [15],
	"/stripe": [16]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};