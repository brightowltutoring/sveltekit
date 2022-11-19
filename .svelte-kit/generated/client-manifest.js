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
	() => import('./nodes/14')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/classroom": [3],
	"/faq": [4],
	"/homework": [5],
	"/katex": [6],
	"/login": [7],
	"/mathjax": [9],
	"/math": [8],
	"/physics": [10],
	"/plans": [11],
	"/samplequiz": [12],
	"/screenshareA": [13],
	"/stripe": [14]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};