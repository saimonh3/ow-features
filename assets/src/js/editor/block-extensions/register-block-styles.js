/**
 * Register block styles.
 *
 * @package ow-features
 */

/**
 * WordPress dependencies.
 */
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Button styles.
 *
 * @type {array}
 */
const quoteStyles = [
	{
		name: 'no-border',
		label: __( 'No Border', 'ow-features' ),
		isDefault: true, // Doesn't work, @see https://github.com/WordPress/gutenberg/issues/11451
	},
];

/**
 * Register styles.
 *
 * @return {void}
 */
const register = () => {
	quoteStyles.forEach( buttonStyle => registerBlockStyle( 'core/quote', quoteStyles ) );

	registerBlockStyle( 'core/list', {
		name: 'arrow',
		label: __( 'Arrow', 'ow-features' ),
	} );
};

/**
 * Unregister styles.
 *
 * @return {void}
 */
const unregister = () => {
	unregisterBlockStyle( 'core/quote', 'large' );
};

/**
 * Register and unregister styles on dom ready.
 */
wp.domReady( () => {
	register();
	unregister();
} );
