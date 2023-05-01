/**
 * BLOCK: Call To Action - Attributes
 */

import { v4 as uuidv4 } from 'uuid';

const attributes = {
	index: {
		type: 'number',
		default: null
	},
	title: {
		type: 'string',
		default: 'Tab'
	},
	id: {
		type: 'string',
		default: uuidv4()
	}
};

export default attributes;
