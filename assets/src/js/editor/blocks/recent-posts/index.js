/**
 * WP Dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import edit from './edit';

registerBlockType( 'ow-feature-block/recent-posts', {
	apiVersion: 2,
	title: __( 'Recent Posts', 'ow-features' ),
	description: __( 'Recent Posts', 'ow-features' ),
	icon: 'text-page',
	category: 'open-web',
	example: {},
	attributes: {
		headline: {
			type: 'string',
			default: __( 'From the Open Blog', 'ow-features' ),
		},
		categories: {
			type: 'array',
			items: {
				type: 'object',
			}
		},
		selectedAuthor: {
			type: 'number',
		},
		postsToShow: {
			type: 'number',
			default: 4,
		},
		displayPostContent: {
			type: 'boolean',
			default: false,
		},
		displayCategory: {
			type: 'boolean',
			default: true,
		},
		displayPostContentRadio: {
			type: 'string',
			default: 'excerpt',
		},
		excerptLength: {
			type: 'number',
			default: 55,
		},
		displayAuthor: {
			type: 'boolean',
			default: true,
		},
		displayPostDate: {
			type: 'boolean',
			default: true,
		},
		order: {
			type: 'string',
			default: 'desc',
		},
		orderBy: {
			type: 'string',
			default: 'date',
		},
		displayFeaturedImage: {
			type: 'boolean',
			default: true,
		},
		featuredImageSizeSlug: {
			type: 'string',
			default: 'large',
		},
		featuredImageSizeWidth: {
			type: 'number',
			default: null,
		},
		featuredImageSizeHeight: {
			type: 'number',
			default: null,
		},
		addLinkToFeaturedImage: {
			type: 'boolean',
			default: true,
		}
	},
	edit,
} );

