const { InnerBlocks } = wp.blockEditor;

export default props => {
  console.log(props.attributes);
  return (
    <section
      block-id={props.attributes.blockID}
      index={props.attributes.index + 1}
      class={`tab-content${props.attributes.index === 0 ? " active" : ""}`}
      id={`section${props.attributes.index + 1}`}
      role="tabpanel"
      aria-labelledby={`tab${props.attributes.index + 1}`}
      class="tabs-panel js-tabs-panel"
    >
      <div
        className="accordeon-trigger js-accordeon-trigger"
        aria-controls={`section${props.attributes.index + 1}`}
        tabindex="0"
      ></div>
      <div className="content">
        <InnerBlocks.Content />
      </div>
    </section>
  );
};
