/**
 * BLOCK: Call To Action
 */
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, Button } = wp.components;
const { RichText, InnerBlocks } = wp.blockEditor;
const { compose } = wp.compose;
const { withSelect } = wp.data;


 const Edit =  props => {
    const { attributes, setAttributes } = props;
    const { tabTitle, tabSelected, blockID } = attributes;
    let innerBlocks = null;
    let allowedBlocks = 'ubc/tab';

    if( !blockID ){
        setAttributes({
            blockID: props.clientId,
        })
    }

    const updateSingleTitle = ( key, text ) => {
        const tabTitleClone = [ ...tabTitle ];
        tabTitleClone[ key ] = text;
        setAttributes({
            tabTitle: tabTitleClone,
        });
    }

    const selectTabContent = key => {
        const elements = document.querySelectorAll(`.tab-content[block-id='${attributes.blockID}'][index='${key}']`);
        const allElements = document.querySelectorAll(`.tab-content[block-id='${attributes.blockID}']`);
        allElements.forEach(element => {
            element.classList.remove('active');
        });
        elements[0].classList.add('active');
    };

    if( blockID ) {
        innerBlocks = tabTitle.map(function(title, key){
            return [ 'ubc/tab', { blockID: attributes.blockID, index: key } ];
        });   
    }

    console.log(innerBlocks);
    return (
        <div className="accordion-tabs js-tabs">
            <ul className="tabs-tab-list" role="tablist">
                { tabTitle.map( ( singleTitle, key ) => {
                    return (    
                        <li role="presentation">
                            {
                                <a 
                                    role="tab" 
                                    id={ `tab${key}` }
                                    aria-control={ `section${key} `}
                                    aria-selected={key===tabSelected}
                                    className="tabs-trigger js-tabs-trigger"
                                    onClick={ () => {
                                        setAttributes({
                                            tabSelected: key,
                                        });
                                        selectTabContent( key );
                                    } }
                                >
                                    <RichText
                                    value={ singleTitle }
                                    onChange={ newContent => updateSingleTitle( key, newContent) }/>
                                </a>
                            }
                        </li>
                    );
                } ) }
            </ul>
            <div class="ubc-tabs-block__content">
                { blockID ? <InnerBlocks 
                    template = { innerBlocks }
                    templateLock = { 'all' }
                    allowedBlocks = { allowedBlocks } /> : null }
            </div>
            <InspectorControls>
                <PanelBody title="My Block Settings" initialOpen={ true }>
                    <PanelRow>My Panel Inputs and Labels</PanelRow>
                </PanelBody>
            </InspectorControls>
        </div>
    );
 };

 export default compose(
    withSelect( ( select, props ) => {
        const { getBlockTypes } = select('core/blocks');
        return {
            getBlockTypes
        };
    } )
 ) (Edit);