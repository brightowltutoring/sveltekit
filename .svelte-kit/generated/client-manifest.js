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
	() => import('./nodes/15')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/classroomA": [4],
	"/classroom": [3],
	"/faq": [5],
	"/homework": [6],
	"/katex": [7],
	"/login": [8],
	"/math-ssg": [10],
	"/mathjax": [11],
	"/math": [9],
	"/physics": [12],
	"/plans": [13],
	"/samplequiz": [14],
	"/stripe": [15]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};