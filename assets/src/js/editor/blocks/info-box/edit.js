/**
 * WP Dependencies
 */
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const edit = ( {attributes, setAttributes} ) => {
	const blockProps = useBlockProps();
	const {title, description, makeSquare} = attributes;
	/**
	 * Adds inspector control in the sidebar.
	 */
	const controls = (
		<InspectorControls key="info-inspector">
			<Panel>
				<PanelBody
					title={ __( 'Info Box Settings', 'ow-features' ) }
					initialOpen={true}
				>
					<PanelRow>
						<TextControl
							label={ __( 'Title', 'ow-features' ) }
							value={ title }
							onChange={title => setAttributes( {title} )}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={ __( 'Description', 'ow-features' ) }
							value={ description }
							onChange={description => setAttributes( {description} )}
						/>
					</PanelRow>

					<PanelRow>
						<ToggleControl
							label={__( 'Make Square Shape', 'ow-features' )}
							checked={ makeSquare }
							onChange={ () => {
								setAttributes( {makeSquare: ! makeSquare} );
							} }
						/>
					</PanelRow>

				</PanelBody>
			</Panel>
		</InspectorControls>
	);

	return [
		controls,
		<div key='info-box' {...blockProps}>

			{ ! makeSquare && <div className='outer-div'></div>}

			<div className={makeSquare ? 'inner-div square-shape' : 'inner-div'}>
				<div className='title'>
					{title}
				</div>
				<p className='description'>{description}</p>
			</div>
		</div>
	];
};

export default edit;
