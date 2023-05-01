/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import { v1 } from './deprecation';
import { v4 as uuidv4 } from 'uuid';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const supports = {};

registerBlockType( 'ubc/tabs', {
	title: __( 'UBC Tabs Block', 'ubc-tabs' ),
	description: __( 'Add accessible tabs of content which convert to accordions on smaller screens.', 'ubc-tabs' ),
	icon: () => {
		return <svg enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32" x="0" /></g><g id="tab"><path d="M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z" /></g></svg>;
	},
	keywords: [ __( 'tabs' ), __( 'ubc-tabs' ) ],
	category: 'layout',
	attributes,
	edit: Edit,
	save: Save,
	deprecated: [
		{
			attributes: {
				tabTitles: {
					type: 'array',
					default: [ 'Tab1', 'Tab2' ],
				},
				initialTabSelected: {
					type: 'number',
					default: 0,
				},
			},
			migrate( props ) {
                return {
					...props,
                    tabs: props.tabTitles.map(( tabTitle ) => {
						return {
							title: tabTitle,
							id: uuidv4()
						};
					}),
					blockInitialized: false
                };
            },
			supports,
			save: v1,
		}
	]
} );
