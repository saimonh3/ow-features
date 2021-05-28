<?php
/**
 * Register Webinar post type.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Post_Types;

/**
 * Class Webinars
 */
class Webinars extends Base {

	/**
	 * Slug of post type.
	 *
	 * @var string
	 */
	const SLUG = 'webinar';

	/**
	 * Post type label for internal uses.
	 *
	 * @var string
	 */
	const LABEL = 'Webinars';

	/**
	 * To get argument to register custom post type.
	 *
	 * @return array Args to register post type.
	 */
	public function get_args() {

		$args = parent::get_args();
		$args = ( ! empty( $args ) && is_array( $args ) ) ? $args : [];

		unset( $args['taxonomies'] );

		return array_merge(
			$args,
			[
				'show_in_rest'        => true,
				'show_in_graphql'     => true,
				'graphql_single_name' => 'Webinar',
				'graphql_plural_name' => 'Webinars',
				'show_ui'             => true,
				'public'              => true,
				'has_archive'         => false,
				'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
				'menu_icon'           => 'dashicons-format-video',
			]
		);
	}

	/**
	 * To get list of labels for post type.
	 *
	 * @return array
	 */
	public function get_labels() {

		return [
			'name'                  => _x( 'Webinar', 'press article', 'ow-features' ),
			'singular_name'         => _x( 'Webinar', 'press article', 'ow-features' ),
			'menu_name'             => _x( 'Webinar', 'admin menu', 'ow-features' ),
			'name_admin_bar'        => _x( 'Webinar', 'add new on admin bar', 'ow-features' ),
			'add_new'               => _x( 'Add New', 'post', 'ow-features' ),
			'add_new_item'          => __( 'Add New Webinar', 'ow-features' ),
			'new_item'              => __( 'New Webinar', 'ow-features' ),
			'edit_item'             => __( 'Edit Webinar', 'ow-features' ),
			'view_item'             => __( 'View Webinar', 'ow-features' ),
			'all_items'             => __( 'All Webinar', 'ow-features' ),
			'search_items'          => __( 'Search Webinar', 'ow-features' ),
			'parent_item_colon'     => __( 'Parent Webinar:', 'ow-features' ),
			'not_found'             => __( 'No Webinar found.', 'ow-features' ),
			'not_found_in_trash'    => __( 'No Webinar found in Trash.', 'ow-features' ),
			'featured_image'        => __( 'Webinar logo', 'ow-features' ),
			'set_featured_image'    => __( 'Set webinar logo', 'ow-features' ),
			'remove_featured_image' => _x( 'Remove webinar logo', 'ow-features' ),
			'use_featured_image'    => _x( 'Use as webinar logo', 'ow-features' ),
		];

	}

}
