/**
 * WP Dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import edit from './edit';
import save from './save';

registerBlockType( 'ow-feature-block/info-box', {
	apiVersion: 2,
	title: __( 'Info Box', 'ow-features' ),
	description: __( 'Info Box', 'ow-features' ),
	icon: 'info',
	category: 'open-web',
	example: {},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.title',
			default: __( 'Quality Conversations', 'ow-features' )
		},
		description: {
			type: 'string',
			source: 'html',
			selector: '.description',
			default: __( 'High-quality, civil discussions that attract users and create value.', 'ow-features' )
		},
		makeSquare: {
			type: 'boolean',
			default: false
		},
	},
	edit,
	save,
} );
