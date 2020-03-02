/**
 * BLOCK: Call To Action
 */

const { InnerBlocks } = wp.blockEditor;

 const Save =  props => {
    const { attributes } = props;
    const { tabTitle, tabSelected, blockID } = attributes;

    
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
                                >
                                    { singleTitle }
                                </a>
                            }
                        </li>
                    );
                } ) }
            </ul>
            { blockID ? <InnerBlocks.Content/> : null }
        </div>
    );
 };

 export default Save;