/**
 * BLOCK: Tabs
 */
import TabsContext from './context';
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, Button, ButtonGroup } = wp.components;
const { RichText, InnerBlocks } = wp.blockEditor;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { useState } = wp.element;

const Edit = ( props ) => {
	const {
		attributes,
		setAttributes,
		removeBlock,
		onMoveUp,
		onMoveDown,
		tabs,
		isSelected,
	} = props;
	const { tabTitles, initialTabSelected, className } = attributes;
	const [ currentTabSelected, setCurrentTabSelected ] = useState(
		initialTabSelected
	);
	const allowedBlocks = 'ubc/tab';

	/**
	 * Render innerblocks { tab blocks } based on number of tabs exist.
	 */
	const getInnerBlockTemplates = () => {
		return tabTitles.map( function( title, key ) {
			return [
				'ubc/tab',
				{
					index: key,
				},
			];
		} );
	};

	/**
	 * Abstracted setter for tab title based on index in the tab titles array
	 *
	 * @param {number} key index of the tab in the array.
	 * @param {string} text new title to be updated.
	 */
	const updateSingleTitle = ( key, text ) => {
		const tabTitlesClone = [ ...tabTitles ];
		tabTitlesClone[ key ] = text;
		setAttributes( {
			tabTitles: tabTitlesClone,
		} );
	};

	/**
	 * Check if it is the first tab in the array.
	 *
	 * @param {number} index index of the tab in the array
	 * @return {boolean} if index is the first in the array.
	 */
	const isFirst = ( index ) => {
		return index === 0;
	};

	/**
	 * Check if it is the last tab in the array.
	 *
	 * @param {number} index index of the tab in the array
	 * @return {boolean} if index is the last in the array.
	 */
	const isLast = ( index ) => {
		return index === tabTitles.length - 1;
	};

	/**
	 * Render Toolbar buttons including re-order, remove, add, etc for each tab
	 *
	 * @param {number} key index of the tab.
	 */
	const renderToolbar = ( key ) => {
		return currentTabSelected === key ? (
			<div className="ubc-accordion-tabs__tab-toolbar">
				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						const newTabTitles = [ ...tabTitles ];
						[ newTabTitles[ key - 1 ], newTabTitles[ key ] ] = [
							newTabTitles[ key ],
							newTabTitles[ key - 1 ],
						];
						onMoveUp( key );
						setAttributes( {
							tabTitles: newTabTitles,
						} );
						setCurrentTabSelected( key - 1 );
					} }
					disabled={ isFirst( key ) || tabTitles.length <= 1 }
				>
					<span className="dashicons dashicons-arrow-left-alt2"></span>
				</Button>

				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						const newTabTitles = [ ...tabTitles ];
						[ newTabTitles[ key ], newTabTitles[ key + 1 ] ] = [
							newTabTitles[ key + 1 ],
							newTabTitles[ key ],
						];
						onMoveDown( key );
						setAttributes( {
							tabTitles: newTabTitles,
						} );
						setCurrentTabSelected( key + 1 );
					} }
					disabled={ isLast( key ) || tabTitles.length <= 1 }
				>
					<span className="dashicons dashicons-arrow-right-alt2"></span>
				</Button>

				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						const remainingTabs = tabTitles.filter(
							( title, index ) => key !== index
						);
						// Remove the innerblock for the tab
						removeBlock( key );
						// Remove the title for the tab
						setAttributes( {
							tabTitles: remainingTabs,
						} );
						// Set focus to the first tab of the remaining tabs
						if ( remainingTabs.length === 0 ) {
						}
					} }
				>
					<span className="dashicons dashicons-trash"></span>
				</Button>

				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						setAttributes( {
							tabTitles: [ ...tabTitles, 'Tab' ],
						} );
					} }
				>
					<span
						className="dashicons dashicons-plus"
						style={ { marginTop: '3px' } }
					></span>
				</Button>
			</div>
		) : null;
	};

	return (
		<section className={ `ubc-accordion-tabs ${ className ? className : '' }` }>
			<ul className="ubc-accordion-tabs__tab-list" role="tablist">
				{ tabTitles.map( ( singleTitle, key ) => {
					return (
						<li role="presentation" key={ key }>
							{ isSelected ? renderToolbar( key ) : null }
							<button
								role="tab"
								id={ `tab${ key }` }
								aria-controls={ `section${ key } ` }
								aria-selected={ key === currentTabSelected }
								href={ `#section${ key + 1 }` }
								className={ `ubc-accordion-tabs__button${
									key === currentTabSelected ? ' is-active' : ''
								}` }
								onClick={ ( event ) => {
									event.preventDefault();
									setCurrentTabSelected( key );
								} }
							>
								<RichText
									value={ singleTitle }
									onChange={ ( newContent ) => updateSingleTitle( key, newContent ) }
								/>
							</button>
						</li>
					);
				} ) }
			</ul>
			<TabsContext.Provider
				value={ {
					currentTabSelected,
					tabs,
					tabTitles,
				} }
			>
				<InnerBlocks
					template={ getInnerBlockTemplates() }
					templateLock={ 'all' }
					allowedBlocks={ allowedBlocks }
				/>
			</TabsContext.Provider>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
					<PanelRow>Initial tab selected</PanelRow>
					<ButtonGroup style={ { marginTop: '10px' } }>
						{ tabTitles.map( ( tabTitle, index ) => {
							return (
								<Button
									onClick={ ( event ) => {
										event.preventDefault();
										setAttributes( {
											initialTabSelected: index,
										} );
									} }
									key={ index }
									isPrimary={ initialTabSelected === index }
									isDefault={ initialTabSelected !== index }
								>
									{ tabTitle }
								</Button>
							);
						} ) }
					</ButtonGroup>
				</PanelBody>
			</InspectorControls>
		</section>
	);
};

export default compose( [
	withSelect( ( select, ownProps ) => {
		const { getBlockOrder } = select( 'core/block-editor' );
		return {
			tabs: getBlockOrder( ownProps.clientId ),
		};
	} ),
	withDispatch( ( dispatch, { tabs, clientId } ) => {
		const { removeBlock, moveBlocksDown, moveBlocksUp } = dispatch(
			'core/block-editor'
		);
		return {
			onMoveDown( index ) {
				moveBlocksDown( tabs[ index ], clientId );
			},
			onMoveUp( index ) {
				moveBlocksUp( tabs[ index ], clientId );
			},
			removeBlock( index ) {
				removeBlock( tabs[ index ] );
			},
		};
	} ),
] )( Edit );
