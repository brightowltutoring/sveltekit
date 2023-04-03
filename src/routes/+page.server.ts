import { submitHomework } from './homework/submitHomework';
export const actions = {
	default: (event) => submitHomework(event)
};
