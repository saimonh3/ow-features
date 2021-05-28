/**
 * WP Dependencies
 */
import {useBlockProps, InspectorControls, RichText} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import ReactHubspotForm from '../../components/react-hubspot-form';
import { Fragment } from '@wordpress/element';
import {Panel, PanelBody, PanelRow, TextControl} from '@wordpress/components';

const edit = ( { attributes, setAttributes } ) => {
	const blockProps = useBlockProps();

	const {
		title,
		portalId,
		formId,
	} = attributes;

	/**
	 * Adds inspector control on the sidebar.
	 */
	const controls = (
		<InspectorControls>
			<Panel>
				<PanelBody
					title={ __( 'Contact Form Settings', 'ow-features' ) }
					initialOpen={true}
				>
					<PanelRow>
						<TextControl
							label={ __( 'Hubspot Portal ID', 'ow-features' ) }
							value={ portalId }
							onChange={ portalId => setAttributes( {portalId} )}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Hubspot Form ID', 'ow-features' ) }
							value={ formId }
							onChange={ formId => setAttributes( {formId} )}
						/>
					</PanelRow>

				</PanelBody>
			</Panel>
		</InspectorControls>
	);

	return (
		<Fragment>
			{controls}
			<div {...blockProps}>
				<RichText
					className='contact-form__title contact-form__item'
					tagName='h2'
					value={ title }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Heading...' ) }
				/>

				<div className='contact-form__fields contact-form__item'>
					<ReactHubspotForm
						portalId={portalId}
						formId={formId}
						tagName="Contact_Submit"
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default edit;
