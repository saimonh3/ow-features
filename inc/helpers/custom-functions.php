<?php
/**
 * OW_Features features custom functions.
 *
 * @package ow-features
 */

/**
 * An extension to get_template_part function to allow variables to be passed to the template.
 *
 * @param  string $slug file slug like you use in get_template_part without php extension.
 * @param  array  $variables pass an array of variables you want to use in array keys.
 *
 * @return void
 */
function ow_features_get_template_part( $slug, $variables = [] ) {

	$template         = sprintf( '%s.php', $slug );
	$located_template = '';

	if ( file_exists( OW_FEATURES_PATH . '/' . $template ) ) {
		$located_template = OW_FEATURES_PATH . '/' . $template;
	} else {
		$located_template = locate_template( $template, false, false );
	}

	if ( '' === $located_template ) {
		return;
	}
	if ( ! empty( $variables ) && is_array( $variables ) ) {
		extract( $variables, EXTR_SKIP ); // phpcs:ignore -- Used as an exception as there is no better alternative.
	}
	include $located_template; // phpcs:ignore

}

/**
 * Set relationship field filters.
 *
 * @param array $args Query Arguments.
 *
 * @return mixed
 */
function ow_features_filter_relationship_field( $args ) {

	$args['orderby']     = 'date';
	$args['order']       = 'DESC';
	$args['post_status'] = 'publish';

	return $args;

}

add_filter( 'acf/fields/relationship/query', 'ow_features_filter_relationship_field' );

/**
 * Add color palette support.
 *
 * @param array $init Init Settings array.
 *
 * @return mixed
 */
function ow_features_color_palette( $init ) {

	$custom_colours = '
		"000000", "Black",
		"0058fe", "Blue",
		"ff3cfe", "Pink",
		"00e600", "Green",
		"fe4f00", "Orange",
		"7b7f83", "Gray",
		"f1e9e7", "Peach"
	';

	$init['textcolor_map'] = sprintf( '[%s]', $custom_colours );

	$init['textcolor_rows'] = 1;

	return $init;
}

add_filter( 'tiny_mce_before_init', 'ow_features_color_palette' );

/**
 * Get image path
 *
 * @param string $image_name
 *
 * @return string
 */
function ow_features_get_image_path( string $image_name ): string {
	return OW_FEATURES_IMAGES_URI . '/' . $image_name;
}
