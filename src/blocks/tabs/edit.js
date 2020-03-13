/**
 * BLOCK: Call To Action
 */
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, Button } = wp.components;
const { RichText, InnerBlocks } = wp.blockEditor;

const Edit = ( props ) => {
	const { attributes, setAttributes, isSelected } = props;
	const { tabTitle, tabSelected, blockID } = attributes;
	const allowedBlocks = 'ubc/tab';

	// Set block ID to current block ID that assigned by WordPress when the block was created initially.
	if ( ! blockID ) {
		setAttributes( {
			blockID: props.clientId,
		} );
	}

	const getInnerBlockTemplates = () => {
		if ( ! blockID ) {
			return;
		}
		return tabTitle.map( function( title, key ) {
			return [ 'ubc/tab', { blockID: attributes.blockID, index: key, title } ];
		} );
	};

	const updateSingleTitle = ( key, text ) => {
		const tabTitleClone = [ ...tabTitle ];
		tabTitleClone[ key ] = text;
		setAttributes( {
			tabTitle: tabTitleClone,
		} );
	};

	const isFirst = (index) => {
		return index === 0;
	};

	const isLast = (index) => {
		return index === tabTitle.length-1;
	};

	const initializeTabs = () => {
		const element = document.getElementById(blockID);
		new AccordionTabs(element);
	};

	initializeTabs()

	return (
		<section className="accordion-tabs js-tabs" id={blockID}>
			<Button
				onClick={ ( event ) => {
					setAttributes({
					tabTitle: [...tabTitle, "title"]
					}) 
				}}
			>
				Add Tab
			</Button>
			<ul className="tabs-tab-list" role="tablist">
				{ tabTitle.map( ( singleTitle, key ) => {
					return (
						<li role="presentation" key={ key }>
							<Button
								onClick={ ( event ) => {
									setAttributes({
									tabTitle: tabTitle.filter((title, index) => key != index)
									}) 
								}}
							>
								Remove
							</Button>
							{(!isLast(key) && tabTitle.length > 1) ? 
								<Button
									onClick={ ( event ) => {
										const newTabTitle = [...tabTitle];
										console.log(newTabTitle);
										[newTabTitle[key], newTabTitle[key+1]] = [newTabTitle[key+1], newTabTitle[key]];
										setAttributes({
										tabTitle: newTabTitle
										});
									}}
								>
									Next
								</Button>
							: null
							}
							
							{(!isFirst(key) && tabTitle.length > 1) ? 
								<Button
									onClick={ ( event ) => {
										const newTabTitle = [...tabTitle];
										console.log(newTabTitle);
										[newTabTitle[key-1], newTabTitle[key]] = [newTabTitle[key], newTabTitle[key-1]];
										setAttributes({
										tabTitle: newTabTitle
										});
									}}
								>
									Previous
								</Button>
							: null
							}
							{
								<>
									<RichText
										value={ singleTitle }
										onChange={ ( newContent ) =>
											updateSingleTitle( key, newContent )
										}
									/>
									<a
										role="tab"
										id={ `tab${ key }` }
										aria-controls={ `section${ key } ` }
										aria-selected={ key === tabSelected }
										className={ `tabs-trigger js-tabs-trigger ${
											isSelected ? '' : 'hidden'
										}` }
										href={ `#section${ key + 1 }` }
										onClick={ ( event ) => event.preventDefault() }
									>
										Select
									</a>
								</>
							}
						</li>
					);
				} ) }
			</ul>
			{ blockID ? (
				<InnerBlocks
					template={ getInnerBlockTemplates() }
					templateLock={ 'all' }
					allowedBlocks={ allowedBlocks }
				/>
			) : null }
			<InspectorControls>
				<PanelBody title="My Block Settings" initialOpen={ true }>
					<PanelRow>My Panel Inputs and Labels</PanelRow>
				</PanelBody>
			</InspectorControls>
		</section>
	);
};

export default Edit;
