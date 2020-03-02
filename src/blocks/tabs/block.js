/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import classnames from "classnames";
import attributes from './attributes';
import edit from './edit';

const { __ } = wp.i18n

const {
	registerBlockType,
	registerBlockStyle,
} = wp.blocks

const {
	RichText
} = wp.blockEditor

const { Fragment } = wp.element

registerBlockType( "ubc/tabs", {
	title: 'UBC Tabs Block',
	description: 'Some description',
	icon: 'book-alt',
	keywords: [
		__( "tabs" ),
		__( "accordian" )
	],
	category: 'layout',
	attributes,
	edit,
	save: () => 'test',
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

registerBlockStyle( "ubc/tabs", {
		name: 'default',
		label: 'default',
})
