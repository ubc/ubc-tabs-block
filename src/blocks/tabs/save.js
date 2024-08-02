/**
 * BLOCK: Call To Action
 */
const { InnerBlocks } = wp.blockEditor;

const Save = ( props ) => {
	const { attributes } = props;
	const { tabs, initialTabSelected, className } = attributes;
	return (
		<section
			className={ `ubc-accordion-tabs ${ className ? className : '' }` }
			data-selected-tab={ initialTabSelected }
		>
			<ul className="ubc-accordion-tabs__tab-list" role="tablist">
				{ tabs.map( ( singleTab, key ) => {
					return (
						<li role="presentation" key={ key }>
							{
								<a
									role="tab"
									aria-controls={ `section-${key}` }
									aria-selected={ key === initialTabSelected }
									className="ubc-accordion-tabs__tabs-trigger js-tabs-trigger"
									href={ `#section-${key}` }
								>
									{ singleTab.title }
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
