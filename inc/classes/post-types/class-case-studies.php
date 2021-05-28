<?php
/**
 * Register Case Studies post type.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Post_Types;

/**
 * Class Case_Studies
 */
class Case_Studies extends Base {

	/**
	 * Slug of post type.
	 *
	 * @var string
	 */
	const SLUG = 'case-study';

	/**
	 * Post type label for internal uses.
	 *
	 * @var string
	 */
	const LABEL = 'Case Studies';

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
				'graphql_single_name' => 'CaseStudy',
				'graphql_plural_name' => 'CaseStudies',
				'show_ui'             => true,
				'public'              => true,
				'has_archive'         => false,
				'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
				'menu_icon'           => 'dashicons-portfolio',
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
			'name'                  => _x( 'Case Study', 'press article', 'ow-features' ),
			'singular_name'         => _x( 'Case Study', 'press article', 'ow-features' ),
			'menu_name'             => _x( 'Case Study', 'admin menu', 'ow-features' ),
			'name_admin_bar'        => _x( 'Case Study', 'add new on admin bar', 'ow-features' ),
			'add_new'               => _x( 'Add New', 'post', 'ow-features' ),
			'add_new_item'          => __( 'Add New Case Study', 'ow-features' ),
			'new_item'              => __( 'New Case Study', 'ow-features' ),
			'edit_item'             => __( 'Edit Case Study', 'ow-features' ),
			'view_item'             => __( 'View Case Study', 'ow-features' ),
			'all_items'             => __( 'All Case Study', 'ow-features' ),
			'search_items'          => __( 'Search Case Study', 'ow-features' ),
			'parent_item_colon'     => __( 'Parent Case Study:', 'ow-features' ),
			'not_found'             => __( 'No Case Study found.', 'ow-features' ),
			'not_found_in_trash'    => __( 'No Case Study found in Trash.', 'ow-features' ),
			'featured_image'        => __( 'Case study logo', 'ow-features' ),
			'set_featured_image'    => __( 'Set case study logo', 'ow-features' ),
			'remove_featured_image' => _x( 'Remove case study logo', 'ow-features' ),
			'use_featured_image'    => _x( 'Use as case study logo', 'ow-features' ),
		];

	}

}
