const { InnerBlocks } = wp.blockEditor;

export default ( props ) => {
	const { index, title, id } = props.attributes;
	return (
		<section
			index={ index + 1 }
			className={ `ubc-accordion-tabs__tabs-panel js-tabs-panel${
				index === 0 ? ' active' : ''
			}` }
			id={ `section-${id}` }
			role="tabpanel"
			aria-labelledby={ `tab-${id}` }
		>
			<div
				className="ubc-accordion-tabs__accordion-trigger js-accordion-trigger"
				aria-controls={ `section-${id}` }
				tabIndex="0"
			>
				{ title }
				<div className="ubc-accordion-tabs__accordion-trigger-icon">
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
