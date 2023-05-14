// export const prerender = false;

// import { submitHomework } from './homework/submitHomework';
import { submitHomeworkAction as submitHomework } from './homework/submitHomework';

export const actions = {
	default: (event) => submitHomework(event)
};
