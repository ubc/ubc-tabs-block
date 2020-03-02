const { InnerBlocks } = wp.blockEditor;

export default props => {
    console.log(props.attributes);
    return (
        <section
            block-id={ props.attributes.blockID }
            index={ props.attributes.index }
            class={ `tab-content${ props.attributes.index === 0 ? ' active' : '' }` }
        >
            <InnerBlocks templateLock={ false } />
        </section>
    );
}