import TabsContext from '../tabs/context';
const { InnerBlocks } = wp.blockEditor;
const { useContext, useEffect } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const Edit = ( props ) => {
	const { getBlockTypes, setAttributes, attributes } = props;
	const { index } = attributes;
	const { currentTabSelected, tabs, tabTitles } = useContext( TabsContext );
	// Tab block does not allowed tabs block or tab block to be nested inside.
	const allowedBlocks = getBlockTypes()
		.map( ( block ) => {
			return block.name;
		} )
		.filter( ( blockName ) => {
			return blockName !== 'ubc/tabs' && blockName !== 'ubc/tab';
		} );

	/**
	 * Reset current tab block position index and title if tab titles array from parent block changed. triggered by moveUp, moveDown, Remove actions in the parent block.
	 * Make sure child block always know what's their correct index and title in the parent block.
	 */
	useEffect( () => {
		const newIndex = tabs.findIndex( ( clientId ) => {
			return clientId === props.clientId;
		} );
		if ( index === newIndex ) {
			setAttributes( {
				title: tabTitles[ index ],
			} );
		} else {
			setAttributes( {
				index: newIndex,
			} );
		}
	}, [ tabTitles, tabs, props.clientId, index ] );

	return currentTabSelected === index ? (
		<section
			index={ index + 1 }
			className="wp-block-ubc-tab ubc-accordion-tabs__tabs-panel"
			id={ `section${ index + 1 }` }
			role="tabpanel"
			aria-labelledby={ `tab${ index + 1 }` }
		>
			<div className="content is-open" aria-hidden>
				<InnerBlocks
					templateLock={ false }
					allowedBlocks={ allowedBlocks }
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender />
					) }
				/>
			</div>
		</section>
	) : null;
};

export default compose( [
	withSelect( ( select ) => {
		const { getBlockTypes } = select( 'core/blocks' );
		return {
			getBlockTypes,
		};
	} ),
] )( Edit );
