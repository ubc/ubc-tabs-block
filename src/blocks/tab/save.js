const { InnerBlocks } = wp.blockEditor;

export default props => {
    console.log(props.attributes);
    return (
        <section
            block-id={ props.attributes.blockID }
            index={ props.attributes.index }
            class={ `tab-content${ props.attributes.index === 0 ? ' active' : '' }` }
            id={ `section${ props.attributes.index }` }
            role="tabpanel"
            aria-labelledby={ `tab${props.attributes.index}` }
            class="tabs-panel"
        >
            <div
                className="accordeon-trigger js-accordeon-trigger"
                aria-controls={ `section${props.attributes.index}` }
                tabindex="0"
            ></div>
            <div className="content"><InnerBlocks.Content/></div>
        </section>
    );
}