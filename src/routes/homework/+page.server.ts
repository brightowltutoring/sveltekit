import { submitHomeworkAction as submitHomework } from './submitHomework';
// import { submitHomework } from './submitHomework';

export const prerender = false;

export const actions = {
	default: (event) => submitHomework(event)
};
