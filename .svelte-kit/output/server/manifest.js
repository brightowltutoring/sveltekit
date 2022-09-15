export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4","reviews/.DS_Store","reviews/review-ben-bare.webp","reviews/review-efe-bare.webp","reviews/review-miranda-bare.webp","reviews/review-paola-bare.webp","reviews/review-rob-bare.webp","reviews/review-tj-bare.webp","reviews/review-zaara-bare.webp"]),
	mimeTypes: {".mp4":"video/mp4",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-74430641.js","imports":["_app/immutable/start-74430641.js","_app/immutable/chunks/index-d43d80ed.js","_app/immutable/chunks/singletons-7337a325.js","_app/immutable/chunks/index-5cb55e0e.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "faq",
				pattern: /^\/faq\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "jitsi",
				pattern: /^\/jitsi\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "math",
				pattern: /^\/math\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			},
			{
				type: 'page',
				id: "math2",
				pattern: /^\/math2\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "mdtest",
				pattern: /^\/mdtest\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 8
			},
			{
				type: 'page',
				id: "plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 9
			},
			{
				type: 'page',
				id: "samplequiz",
				pattern: /^\/samplequiz\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 10
			},
			{
				type: 'page',
				id: "schools",
				pattern: /^\/schools\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 11
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
