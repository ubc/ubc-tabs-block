/**
 * BLOCK: Call To Action
 */

const { InnerBlocks } = wp.blockEditor;

const Save = ( props ) => {
	const { attributes } = props;
	const { tabTitle, tabSelected, blockID } = attributes;

	return (
		<section className="accordion-tabs js-tabs">
			<ul className="tabs-tab-list" role="tablist">
				{ tabTitle.map( ( singleTitle, key ) => {
					return (
						<li role="presentation" key={ key }>
							{
								<a
									role="tab"
									id={ `tab${ key + 1 }` }
									aria-controls={ `section${ key + 1 } ` }
									aria-selected={ key === tabSelected }
									className="tabs-trigger js-tabs-trigger"
									href={ `#section${ key + 1 }` }
								>
									{ singleTitle }
								</a>
							}
						</li>
					);
				} ) }
			</ul>
			{ blockID ? <InnerBlocks.Content /> : null }
		</section>
	);
};

export default Save;
