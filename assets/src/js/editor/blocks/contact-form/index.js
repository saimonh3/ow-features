/**
 * WP Dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import edit from './edit';

registerBlockType( 'ow-feature-block/contact-form', {
	apiVersion: 2,
	title: __( 'Contact Form', 'ow-features' ),
	description: __( 'Contact Form', 'ow-features' ),
	icon: 'buddicons-pm',
	category: 'open-web',
	example: {},
	attributes: {
		title: {
			type: 'string',
			default: __( 'Quality Conversations', 'ow-features' )
		},
		portalId: {
			type: 'string',
			default: '5731985',
		},
		formId: {
			type: 'string',
			default: '7b7241c1-3c38-4235-b002-a4772b18294b'
		}
	},
	edit,
} );
