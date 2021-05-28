/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Button styles.
 *
 * @type {array}
 */
const buttonStyles = [
	{
		name: 'btn',
		label: __( 'Default', 'ow-features' ),
		isDefault: true, // Doesn't work, @see https://github.com/WordPress/gutenberg/issues/11451
	},
	{
		name: 'btn-large',
		label: __( 'Large', 'ow-features' )
	},
	{
		name: 'btn-with-arrow',
		label: __( 'With Arrow', 'ow-features' )
	},
	{
		name: 'btn-small',
		label: __( 'Small', 'ow-features' )
	},
	{
		name: 'btn-plain',
		label: __( 'Plain', 'ow-features' )
	},
	{
		name: 'btn-link',
		label: __( 'Link', 'ow-features' )
	}
];

export {
	buttonStyles,
};
