/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import classnames from "classnames";
import edit from './edit';
import attributes from './attributes';

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

const {
	RichText
} = wp.blockEditor

const { Fragment } = wp.element
const { InnerBlocks } = wp.blockEditor;

registerBlockType( "ubc/tab", {
	title: 'UBC Tab Block',
	description: 'Some description',
	icon: 'book-alt',
	keywords: [
		__( "tab" ),
		__( "accordian" )
	],
	category: 'layout',
	attributes,
	edit,
	save: () => <InnerBlocks.Content />,
	styles: [
		{
			name: 'default',
			label: __( 'default' ),
			isDefault: true,
		},
		{
			name: 'isolate tabs',
			label: __( 'isolate tabs' ),
			isDefault: false,
		}
	]
} )
