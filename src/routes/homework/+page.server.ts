// export  function load(){

// }

import { submitHomework } from './submitHomework';
export const actions = {
	default: (event) => submitHomework(event)
};
