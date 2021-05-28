<?php
/**
 * Register Press Article post type.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Post_Types;

/**
 * Class Press_Article
 */
class Press_Article extends Base {

	/**
	 * Slug of post type.
	 *
	 * @var string
	 */
	const SLUG = 'press-article';

	/**
	 * Post type label for internal uses.
	 *
	 * @var string
	 */
	const LABEL = 'Press Article';

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
				'show_in_rest'        => false,
				'show_in_graphql'     => true,
				'graphql_single_name' => 'PressArticle',
				'graphql_plural_name' => 'PressArticles',
				'show_ui'             => true,
				'public'              => false,
				'has_archive'         => false,
				'supports'            => [ 'title', 'thumbnail', 'page-attributes' ],
				'menu_icon'           => 'dashicons-welcome-write-blog'
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
			'name'                  => _x( 'Press Article', 'press article', 'ow-features' ),
			'singular_name'         => _x( 'Press Article', 'press article', 'ow-features' ),
			'menu_name'             => _x( 'Press Article', 'admin menu', 'ow-features' ),
			'name_admin_bar'        => _x( 'Press Article', 'add new on admin bar', 'ow-features' ),
			'add_new'               => _x( 'Add New', 'post', 'ow-features' ),
			'add_new_item'          => __( 'Add New Press Article', 'ow-features' ),
			'new_item'              => __( 'New Press Article', 'ow-features' ),
			'edit_item'             => __( 'Edit Press Article', 'ow-features' ),
			'view_item'             => __( 'View Press Article', 'ow-features' ),
			'all_items'             => __( 'All Press Article', 'ow-features' ),
			'search_items'          => __( 'Search Press Article', 'ow-features' ),
			'parent_item_colon'     => __( 'Parent Press Article:', 'ow-features' ),
			'not_found'             => __( 'No Press Article found.', 'ow-features' ),
			'not_found_in_trash'    => __( 'No Press Article found in Trash.', 'ow-features' ),
			'featured_image'        => __( 'Article Logo', 'ow-features' ),
			'set_featured_image'    => __( 'Set article logo', 'ow-features' ),
			'remove_featured_image' => _x( 'Remove article logo', 'ow-features' ),
			'use_featured_image'    => _x( 'Use as article logo', 'ow-features' ),
		];

	}

}
