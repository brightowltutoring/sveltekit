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
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const dictionary = {
	"": [[1], [0], 2],
	"calcom": [[1], [0], 3],
	"faq": [[1], [0], 4],
	"homework": [[1], [0], 5],
	"katex": [[1], [0], 6],
	"login": [[1], [0], 7],
	"math": [[1], [0], 8],
	"mathjax": [[1], [0], 9],
	"physics": [[1], [0], 10],
	"plans": [[1], [0], 11],
	"samplequiz": [[1], [0], 12],
	"schools": [[1], [0], 13],
	"screenshare": [[1], [0], 14],
	"screenshareA": [[1], [0], 15],
	"stripe": [[1], [0], 16]
};