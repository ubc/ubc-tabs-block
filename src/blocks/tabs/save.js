/**
 * BLOCK: Call To Action
 */
const { InnerBlocks } = wp.blockEditor;

const Save = ( props ) => {
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
									id={ `tab${ key + 1 }` }
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

export default Save;
