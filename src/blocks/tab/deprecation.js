const { InnerBlocks } = wp.blockEditor;

// 1. Because in version 1.0.0 a11y-accordion-tabs fixed the typo from accordeon to accirdion. We need to apply similliar fix to make it work.
export const v1 =  ( props ) => {
	const { index, title } = props.attributes;
	return (
		<section
			index={ index + 1 }
			className={ `ubc-accordion-tabs__tabs-panel js-tabs-panel${
				index === 0 ? ' active' : ''
			}` }
			id={ `section${ index + 1 }` }
			role="tabpanel"
			aria-labelledby={ `tab${ index + 1 }` }
		>
			<div
				className="ubc-accordion-tabs__accordion-trigger js-accordeon-trigger"
				aria-controls={ `section${ index + 1 }` }
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
