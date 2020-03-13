const { InnerBlocks } = wp.blockEditor;

export default props => {
  return (
    <section
      block-id={props.attributes.blockID}
      index={props.attributes.index + 1}
      className={`tabs-panel js-tabs-panel tab-content${
        props.attributes.index === 0 ? " active" : ""
      }`}
      id={`section${props.attributes.index + 1}`}
      role="tabpanel"
      aria-labelledby={`tab${props.attributes.index + 1}`}
    >
      <div
        className="accordeon-trigger js-accordeon-trigger"
        aria-controls={`section${props.attributes.index}`}
        tabindex="0"
      ></div>
      <div className="content" aria-hidden>
        <InnerBlocks templateLock={false} />
      </div>
    </section>
  );
};
