/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/tabs', {
	title: __( 'UBC Tabs Block', 'ubc-tabs' ),
	description: __( 'Some description', 'ubc-tabs' ),
	icon: 'book-alt',
	keywords: [ __( 'tabs' ), __( 'ubc-tabs' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
} );
