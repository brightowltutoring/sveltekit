export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const dictionary = {
	"": [[1], [0], 2],
	"faq": [[1], [0], 3],
	"login": [[1], [0], 4],
	"math": [[1], [0], 5],
	"math3": [[1], [0], 6],
	"plans": [[1], [0], 7]
};