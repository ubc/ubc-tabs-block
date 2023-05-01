/**
 * BLOCK: Tabs
 */
import TabsContext from './context';
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, Button, ButtonGroup } = wp.components;
const { RichText, InnerBlocks } = wp.blockEditor;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;
const { useState, useEffect } = wp.element;
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

/**
 * This component create editor UI for tabs block.
 * A tabs block contains two parts
 * 	- Tabs, an array of tab titles associated with attribute 'tabs'
 *  - Tab content, an array of child tab block rendered by innderblock template.
 * Tab titles and Tab content are complete seprate. For example, action such as move tab position or delete a tab will envolve actions for both tab title and tab content.
 * @param {object} props block props.
 */
const Edit = ( props ) => {
	const {
		attributes,
		setAttributes,
		removeBlock,
		onMoveUp,
		onMoveDown,
		childTabIds,
		isSelected,
		rootId,
		insertBlock,
	} = props;
	const { tabs, initialTabSelected, className, blockInitialized } = attributes;
	// Keep current selected tab in editor as a state defaults to initialSelected tab attribute.
	const [ currentTabSelected, setCurrentTabSelected ] = useState(
		initialTabSelected ? initialTabSelected : 0
	);
	const allowedBlocks = [ 'ubc/tab' ];

	useEffect(() => {
		if ( ! blockInitialized ) {
			setAttributes({
				blockInitialized: true,
				tabs: cloneDeep(tabs)
			});
		}
	}, []);

	/**
	 * Render innerblocks { tab blocks } based on the length of tab titles array.
	 */
	const getInnerBlockTemplates = () => {
		return tabs.map( function( tab, key ) {
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
	 * @param {string} title new title to be updated.
	 */
	const updateSingleTabTitle = ( key, title ) => {
		const tabsClone = cloneDeep(tabs);
		tabsClone[ key ].title = title;
		setAttributes( {
			tabs: tabsClone,
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
		return index === tabs.length - 1;
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
						// move tab title up inside tab titles array
						const newTab = cloneDeep(tabs);
						[ newTab[ key - 1 ], newTab[ key ] ] = [
							newTab[ key ],
							newTab[ key - 1 ],
						];
						setAttributes( {
							tabs: newTab,
						} );
						// Move the actual tab block up
						onMoveUp( key );
						// Move focus as well to make sure action does not cause different tab to be selected.
						setCurrentTabSelected( key - 1 );
					} }
					disabled={ isFirst( key ) || tabs.length <= 1 }
				>
					<span className="dashicons dashicons-arrow-left-alt2"></span>
				</Button>

				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						// Move tab title down inside tab titles array
						const newTab = cloneDeep(tabs);
						[ newTab[ key ], newTab[ key + 1 ] ] = [
							newTab[ key + 1 ],
							newTab[ key ],
						];
						setAttributes( {
							tabs: newTab,
						} );
						// Move the actual tab block down
						onMoveDown( key );
						// Move focus as well to make sure action does not cause different tab to be selected.
						setCurrentTabSelected( key + 1 );
					} }
					disabled={ isLast( key ) || tabs.length <= 1 }
				>
					<span className="dashicons dashicons-arrow-right-alt2"></span>
				</Button>

				<Button
					onClick={ ( event ) => {
						event.preventDefault();
						// Remove tab title from tab titles array
						const remainingTabs = tabs.filter(
							( title, index ) => key !== index
						);
						setAttributes( {
							tabs: remainingTabs,
						} );
						// Remove the actual tab block
						removeBlock( key );
						// Set focus to the first tab of the remaining tabs
						if ( remainingTabs.length !== 0 ) {
							setCurrentTabSelected( 0 );
						}
					} }
				>
					<span className="dashicons dashicons-trash"></span>
				</Button>

				<Button
					onClick={ async ( event ) => {
						event.preventDefault();

						// Create the tab block and insert at the end of the root block.
						await insertBlock(
							wp.blocks.createBlock( 'ubc/tab', { index: childTabIds.length } ),
							childTabIds.length,
							rootId
						);

						// Add a new title into the title array.
						setAttributes( {
							tabs: [ ...tabs, {
								title: 'Tab',
								id: uuidv4()
							} ],
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
				{ tabs.map( ( singleTab, key ) => {
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
									key === currentTabSelected ? ' is-selected' : ''
								}` }
								onClick={ ( event ) => {
									event.preventDefault();
									setCurrentTabSelected( key );
								} }
							>
								<RichText
									value={ singleTab.title }
									onChange={ ( newContent ) => updateSingleTabTitle( key, newContent ) }
								/>
							</button>
						</li>
					);
				} ) }
			</ul>
			<TabsContext.Provider
				value={ {
					currentTabSelected,
					childTabIds,
					tabs,
				} }
			>
				<InnerBlocks
					template={ getInnerBlockTemplates() }
					templateLock={ false }
					allowedBlocks={ allowedBlocks }
					renderAppender={ false }
				/>
			</TabsContext.Provider>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
					<PanelRow>Initial tab selected</PanelRow>
					<ButtonGroup style={ { marginTop: '10px' } }>
						{ tabs.map( ( tab, index ) => {
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
									{ tab.title }
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
			// Get an array of child blocks( tab blocks ) client ID in order.
			childTabIds: getBlockOrder( ownProps.clientId ),
			rootId: ownProps.clientId,
		};
	} ),
	withDispatch( ( dispatch, { childTabIds, clientId } ) => {
		const { removeBlock, moveBlocksDown, moveBlocksUp, insertBlock } = dispatch(
			'core/block-editor'
		);
		return {
			/**
			 * Move specific tab block down, switch position with next tab block.
			 * @param {integer} index position index in the child tab blocks array.
			 */
			onMoveDown( index ) {
				moveBlocksDown( [ childTabIds[ index ] ], clientId );
			},
			/**
			 * Move specific tab block up, switch position with previous tab block.
			 * @param {integer} index position index in the child tab blocks array.
			 */
			onMoveUp( index ) {
				moveBlocksUp( [ childTabIds[ index ] ], clientId );
			},
			/**
			 * Remove specific tab block.
			 * @param {integer} index position index in the child tab blocks array.
			 */
			removeBlock( index ) {
				removeBlock( childTabIds[ index ] );
			},
			insertBlock,
		};
	} ),
] )( Edit );
