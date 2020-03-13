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
        aria-controls={`section${props.attributes.index + 1}`}
        tabindex="0"
      >
        {props.attributes.title}
        <div className="accordeon-trigger-icon">
          <span className="label--open">Open</span>
          <span className="label--close">Close</span>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
            <rect
              className="vert"
              height="18"
              width="2"
              fill="currentColor"
              y="1"
              x="9"
            ></rect>
            <rect height="2" width="18" fill="currentColor" y="9" x="1"></rect>
          </svg>
        </div>
      </div>
      <div className="content">
        <InnerBlocks.Content />
      </div>
    </section>
  );
};
