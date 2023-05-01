/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import Edit from './edit';
import attributes from './attributes';
import Save from './save';
import { v1 } from './deprecation';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const supports = {};

registerBlockType( 'ubc/tab', {
	parent: [ 'ubc/tabs' ],
	title: 'UBC Tab Block',
	description: __( 'Add accessible tabs of content which convert to accordions on smaller screens.' ),
	icon: () => {
		return <svg enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" x="0" /></g><g id="tab"><path d="M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z" /></g></svg>;
	},
	keywords: [ __( 'tab' ), __( 'accordion' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes,
			migrate() {
                return {
                    id: '123',
                };
            },
			supports,
			save: v1,
		}
	]
} );
