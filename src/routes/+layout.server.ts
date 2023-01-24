// this component is the first time i am toying with sveltekit's cookie API; currently have my own simple implementation via a 'cookeh' object function factory in utils.ts

// import type { LayoutServerLoad } from './$types';

export const load = async ({ cookies }) => {
	// cookies.set('testCookie', 'true');

	const haventLoggedOut = cookies.get('haventLoggedOut');
	// console.log('haventLoggedOut', haventLoggedOut);

	// const testCookie = cookies.get('testCookie');

	return {
		haventLoggedOut
		// testCookie
	};
};
// satisfies LayoutServerLoad;
