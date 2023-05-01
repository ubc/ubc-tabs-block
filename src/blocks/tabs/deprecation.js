/**
 * BLOCK: Call To Action
 */
import WPSanitizeTitle from '../helper';
const { InnerBlocks } = wp.blockEditor;

export const v1 = ( props ) => {
	const { attributes } = props;
	const { tabTitles, initialTabSelected, className } = attributes;
	return (
		<section
			className={ `ubc-accordion-tabs ${ className ? className : '' }` }
			data-selected-tab={ initialTabSelected }
		>
			<ul className="ubc-accordion-tabs__tab-list" role="tablist">
				{ tabTitles.map( ( singleTitle, key ) => {
					const id = singleTitle.toLowerCase().replace( / /g, '-' );
					return (
						<li id={ id } role="presentation" key={ key }>
							{
								<a
									role="tab"
									id={ WPSanitizeTitle( singleTitle ) }
									aria-controls={ `section${ key + 1 } ` }
									aria-selected={ key === initialTabSelected }
									className="ubc-accordion-tabs__tabs-trigger js-tabs-trigger"
									href={ `#section${ key + 1 }` }
								>
									{ singleTitle }
								</a>
							}
						</li>
					);
				} ) }
			</ul>
			<InnerBlocks.Content />
		</section>
	);
};
