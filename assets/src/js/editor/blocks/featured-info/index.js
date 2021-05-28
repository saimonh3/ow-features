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

const featuredIcon = window?.owFeatures?.featuredInfoIcon;
const featuredImage = window?.owFeatures?.featuredInfoImage;

registerBlockType( 'ow-feature-block/featured-info', {
	apiVersion: 2,
	title: __( 'Featured Info', 'ow-features' ),
	description: __( 'Featured Info', 'ow-features' ),
	icon: 'info-outline',
	category: 'open-web',
	example: {},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.featured-info-block__left__title',
			default: __( 'Featured Info', 'ow-features' )
		},
		description: {
			type: 'string',
			source: 'html',
			selector: '.featured-info-block__left__desc',
			default: __( 'Move from readers to registered users. Leverage best-in-class social experiences, registration funnels, and context-driven monetization while building first-party data to future-proof your businesses.', 'ow-features' )
		},
		mediaId: {
			type: 'number',
			default: 0,
		},
		mediaUrl: {
			type: 'string',
			default: featuredImage,
		},
		iconId: {
			type: 'number',
			default: 0,
		},
		iconUrl: {
			type: 'string',
			default: featuredIcon,
		},
		linkUrl: {
			type: 'string',
			default: '',
		},
		linkTitle: {
			type: 'string',
			default: __( 'Learn more about Experience', 'ow-features' ),
		}
	},
	edit,
	save,
} );
