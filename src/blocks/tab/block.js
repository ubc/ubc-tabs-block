/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import Edit from './edit';
import attributes from './attributes';
import Save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/tab', {
	parent: [ 'ubc/tabs' ],
	title: 'UBC Tab Block',
	description: __( 'Add accessible tabs of content which convert to accordions on smaller screens.' ),
	icon: 'book-alt',
	keywords: [ __( 'tab' ), __( 'accordion' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
} );
