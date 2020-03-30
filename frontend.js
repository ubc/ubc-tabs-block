/**
 * Styles and scripts that goes to the frontend
 */

import './src/blocks/tabs/style.scss';
import 'a11y-accordion-tabs';

if ( window.location.hash ) {
	const hash = window.location.hash.substring( 1 );
	let element = document.getElementById( hash );
	if ( element ) {
		let count = 0;
		while ( ( element = element.previousSibling ) !== null ) {
			count++;
		}
		const tabs = document.getElementsByClassName( 'wp-block-ubc-tabs' );
		tabs[ 0 ].dataset.selectedTab = count;
	}
}
const tabs = document.querySelectorAll( '.wp-block-ubc-tabs' );
// eslint-disable-next-line no-undef
tabs.forEach( ( tab ) => new AccordionTabs( tab ) );
