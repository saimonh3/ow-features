/**
 * WP Dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import edit from './edit';

registerBlockType( 'ow-feature-block/hero-numbers', {
	apiVersion: 2,
	title: __( 'Hero Numbers', 'ow-features' ),
	description: __( 'Set your hero numbers', 'ow-features' ),
	icon: 'money-alt',
	category: 'open-web',
	example: {},
	attributes: {
		title: {
			type: 'string',
			default: __( '23.24%', 'ow-features' ),
		},
		description: {
			type: 'string',
			default: __( 'Lift in time on site', 'ow-features' ),
		},
		showTopBar: {
			type: 'boolean',
			default: true,
		},
		showIcon: {
			type: 'boolean',
			default: true,
		},
		arrowUpward: {
			type: 'boolean',
			default: true,
		}
	},
	edit,
} );
