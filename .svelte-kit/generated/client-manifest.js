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
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const dictionary = {
	"": [[1], [0], 2],
	"faq": [[1], [0], 3],
	"jitsi": [[1], [0], 4],
	"login": [[1], [0], 5],
	"math": [[1], [0], 6],
	"physics": [[1], [0], 7],
	"plans": [[1], [0], 8],
	"reviews": [[1], [0], 9],
	"samplequiz": [[1], [0], 10],
	"schools": [[1], [0], 11]
};