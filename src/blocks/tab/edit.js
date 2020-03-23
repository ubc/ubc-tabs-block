import TabsContext from '../tabs/context';
const { InnerBlocks } = wp.blockEditor;
const { useContext, useEffect } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const Edit = ( props ) => {
	const { getBlockTypes, setAttributes, attributes } = props;
	const { index } = attributes;
	const { currentTabSelected, tabs, tabTitles } = useContext( TabsContext );
	const allowedBlocks = getBlockTypes()
		.map( ( block ) => {
			return block.name;
		} )
		.filter( ( blockName ) => {
			return blockName !== 'ubc/tabs' && blockName !== 'ubc/tab';
		} );

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
	}, [ tabTitles ] );

	return currentTabSelected === index ? (
		<section
			index={ index + 1 }
			className="wp-block-ubc-tab ubc-accordion-tabs__tabs-panel"
			id={ `section${ index + 1 }` }
			role="tabpanel"
			aria-labelledby={ `tab${ index + 1 }` }
		>
			<div className="content is-open" aria-hidden>
				<InnerBlocks templateLock={ false } allowedBlocks={ allowedBlocks } />
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
