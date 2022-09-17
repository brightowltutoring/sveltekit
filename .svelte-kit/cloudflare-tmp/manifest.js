export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","face-palm.gif","login-bg-video-blurred.mp4","reviews/.DS_Store","reviews/review-ben-bare.webp","reviews/review-efe-bare.webp","reviews/review-miranda-bare.webp","reviews/review-paola-bare.webp","reviews/review-rob-bare.webp","reviews/review-tj-bare.webp","reviews/review-zaara-bare.webp"]),
	mimeTypes: {".gif":"image/gif",".mp4":"video/mp4",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-bfad21d2.js","imports":["_app/immutable/start-bfad21d2.js","_app/immutable/chunks/index-63f99ff6.js","_app/immutable/chunks/singletons-29953ccf.js","_app/immutable/chunks/index-0ab04b87.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
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
				id: "physics",
				pattern: /^\/physics\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 8
			},
			{
				type: 'page',
				id: "samplequiz",
				pattern: /^\/samplequiz\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 9
			},
			{
				type: 'page',
				id: "schools",
				pattern: /^\/schools\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 10
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
