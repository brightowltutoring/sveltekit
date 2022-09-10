export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const dictionary = {
	"": [[1], [0], 2],
	"katex": [[1], [0], 3],
	"katex3": [[1], [0], 4],
	"katexBroken": [[1], [0], 5],
	"login": [[1], [0], 6],
	"mathjax": [[1], [0], 7],
	"plans": [[1], [0], 8]
};