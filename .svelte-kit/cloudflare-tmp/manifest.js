export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","facepalm.gif","favicon.png","iconmonstr-twitter-1.svg","icons/apple-icon-180.png","icons/apple-splash-1125-2436.jpg","icons/apple-splash-1136-640.jpg","icons/apple-splash-1170-2532.jpg","icons/apple-splash-1179-2556.jpg","icons/apple-splash-1242-2208.jpg","icons/apple-splash-1242-2688.jpg","icons/apple-splash-1284-2778.jpg","icons/apple-splash-1290-2796.jpg","icons/apple-splash-1334-750.jpg","icons/apple-splash-1536-2048.jpg","icons/apple-splash-1620-2160.jpg","icons/apple-splash-1668-2224.jpg","icons/apple-splash-1668-2388.jpg","icons/apple-splash-1792-828.jpg","icons/apple-splash-2048-1536.jpg","icons/apple-splash-2048-2732.jpg","icons/apple-splash-2160-1620.jpg","icons/apple-splash-2208-1242.jpg","icons/apple-splash-2224-1668.jpg","icons/apple-splash-2388-1668.jpg","icons/apple-splash-2436-1125.jpg","icons/apple-splash-2532-1170.jpg","icons/apple-splash-2556-1179.jpg","icons/apple-splash-2688-1242.jpg","icons/apple-splash-2732-2048.jpg","icons/apple-splash-2778-1284.jpg","icons/apple-splash-2796-1290.jpg","icons/apple-splash-640-1136.jpg","icons/apple-splash-750-1334.jpg","icons/apple-splash-828-1792.jpg","icons/logotest.png","icons/manifest-icon-192.maskable.png","icons/manifest-icon-512.maskable.png","login-bg-video-blurred.mp4","manifest.json","phone.svg","reviews/.DS_Store","reviews/review-ben-bare.webp","reviews/review-efe-bare.webp","reviews/review-miranda-bare.webp","reviews/review-paola-bare.webp","reviews/review-rob-bare.webp","reviews/review-tj-bare.webp","reviews/review-zaara-bare.webp","robots.txt","star.webp","starOLD.webp","tesla-svgrepo-com.svg"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".mp4":"video/mp4",".json":"application/json",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-c8f57a91.js","imports":["_app/immutable/start-c8f57a91.js","_app/immutable/chunks/index-abd81730.js","_app/immutable/chunks/singletons-5fd8dedb.js","_app/immutable/chunks/index-f3ce743b.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[]},
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
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calcom",
				pattern: /^\/calcom\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/classroom",
				pattern: /^\/classroom\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/homework",
				pattern: /^\/homework\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/katex",
				pattern: /^\/katex\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/mathjax",
				pattern: /^\/mathjax\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/math",
				pattern: /^\/math\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/physics",
				pattern: /^\/physics\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/samplequiz",
				pattern: /^\/samplequiz\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/schools",
				pattern: /^\/schools\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/screenshareA",
				pattern: /^\/screenshareA\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/stripe",
				pattern: /^\/stripe\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
