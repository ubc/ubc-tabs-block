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
	description: __( 'Add accessible tabs of content which convert to accordions on smaller screens.', 'ubc-tabs' ),
	icon: 'portfolio',
	keywords: [ __( 'tabs' ), __( 'ubc-tabs' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
} );
