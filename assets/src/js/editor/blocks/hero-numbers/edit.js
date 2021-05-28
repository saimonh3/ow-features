/**
 * WP Dependencies
 */
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {Fragment} from '@wordpress/element';
import {
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

/**
 * Internal Dependencies
 */
import {UpArrowIcon} from '../../../icons';

const edit = ( {attributes, setAttributes } ) => {
	const blockProps = useBlockProps();
	const {title, description, showTopBar, showIcon, arrowUpward} = attributes;

	/**
	 * Adds inspector control in the sidebar.
	 */
	const controls = (
		<InspectorControls key="hero-inspector">
			<Panel>
				<PanelBody
					title={ __( 'Hero number settings', 'ow-features' ) }
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
						<TextControl
							label={ __( 'Description', 'ow-features' ) }
							value={ description }
							onChange={description => setAttributes( {description} )}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Toggle Top Bar', 'ow-features' )}
							checked={ showTopBar }
							onChange={ () => {
								setAttributes( {showTopBar: ! showTopBar} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Toggle Icon', 'ow-features' )}
							checked={ showIcon }
							onChange={ () => {
								setAttributes( {showIcon: ! showIcon} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__( 'Toggle Arrow Direction', 'ow-features' )}
							checked={ arrowUpward }
							onChange={ () => {
								setAttributes( {arrowUpward: ! arrowUpward} );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);

	const className = classNames( {
		'title': true,
		'border-top': showTopBar,
		'arrow-downward': ! arrowUpward,
	} );

	return (
		<Fragment>
			{controls}
			<div key='hero-number' {...blockProps}>
				<div className={ className }>
					{showIcon && <UpArrowIcon />}
					{title}
				</div>
				<p className='description'>{description}</p>
			</div>
		</Fragment>
	);
};

export default edit;
