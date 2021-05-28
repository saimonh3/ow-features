/**
 * WP Dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import TestimonialsEdit from './edit';

registerBlockType( 'ow-feature-block/testimonials', {
	title: __( 'Testimonials', 'ow-features' ),
	description: __( 'List of testimonials', 'ow-features' ),
	icon: 'format-status',
	category: 'open-web',
	supports: {
		alignWide: true,
	},
	example: {},
	attributes: {
		testimonials: {
			type: 'array',
			default: [],
		},
		pageLinkText: {
			type: 'string',
			default: ''
		},
		pageLink: {
			type: 'string',
			default: ''
		},
	},
	edit: TestimonialsEdit,
} );
