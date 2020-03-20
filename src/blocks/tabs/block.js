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
	title: 'UBC Tabs Block',
	description: 'Some description',
	icon: 'book-alt',
	keywords: [ __( 'tabs' ), __( 'accordion' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
	styles: [
		{
			name: 'default',
			label: __( 'Default' ),
			isDefault: true,
		},
		{
			name: 'bordered',
			label: __( 'Bordered' ),
			isDefault: false,
		},
	],
} );
