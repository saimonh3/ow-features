<?php
/**
 * Register Testimonial post type.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Post_Types;

/**
 * Class Testimonials
 */
class Testimonials extends Base {

	/**
	 * Slug of post type.
	 *
	 * @var string
	 */
	const SLUG = 'testimonial';

	/**
	 * Post type label for internal uses.
	 *
	 * @var string
	 */
	const LABEL = 'Testimonial';

	/**
	 * To register action/filters.
	 *
	 * @return void
	 */
	protected function setup_hooks() {

		parent::setup_hooks();
		add_action( 'manage_' . self::SLUG . '_posts_columns', [ $this, 'table_columns' ] );
		add_action( 'manage_' . self::SLUG . '_posts_custom_column', [ $this, 'table_column_contents' ], 10, 2 );
	}

	/**
	 * To get argument to register custom post type.
	 *
	 * @return array Args to register post type.
	 */
	public function get_args() {

		return [
			'menu_position'   => 6,
			'show_in_rest'    => true,
			'show_in_graphql' => false,
			'show_ui'         => true,
			'public'          => false,
			'has_archive'     => false,
			'supports'        => [ 'custom-fields' ],
			'menu_icon'       => 'dashicons-format-status',
		];
	}

	/**
	 * To get list of labels for post type.
	 *
	 * @return array
	 */
	public function get_labels() {

		return [
			'name'               => _x( 'Testimonials', 'testimonial', 'ow-features' ),
			'singular_name'      => _x( 'Testimonial', 'testimonial', 'ow-features' ),
			'menu_name'          => _x( 'Testimonials', 'admin menu', 'ow-features' ),
			'name_admin_bar'     => _x( 'Testimonials', 'add new on admin bar', 'ow-features' ),
			'add_new'            => _x( 'Add New', 'post', 'ow-features' ),
			'add_new_item'       => __( 'Add New Testimonial', 'ow-features' ),
			'new_item'           => __( 'New Testimonial', 'ow-features' ),
			'edit_item'          => __( 'Edit Testimonial', 'ow-features' ),
			'view_item'          => __( 'View Testimonial', 'ow-features' ),
			'all_items'          => __( 'All Testimonial', 'ow-features' ),
			'search_items'       => __( 'Search Testimonials', 'ow-features' ),
			'parent_item_colon'  => __( 'Parent Testimonial:', 'ow-features' ),
			'not_found'          => __( 'No Testimonial found.', 'ow-features' ),
			'not_found_in_trash' => __( 'No Testimonial found in Trash.', 'ow-features' ),
		];
	}

	/**
	 * Custom table columns in admin list table
	 *
	 * @param array $posts_columns An associative array of column headings.
	 *
	 * @return array
	 */
	public function table_columns( $posts_columns ) {

		return [
			'cb'          => $posts_columns['cb'],
			'author_name' => __( 'Author Name', 'ow-features' ),
			'date'        => $posts_columns['date'],
		];
	}

	/**
	 * Content in custom column in admin list table
	 *
	 * @param string $column_name The name of the column to display.
	 * @param int    $post_id     The current post ID.
	 *
	 * @return void
	 */
	public function table_column_contents( $column_name, $post_id ) {

		if ( 'author_name' === $column_name ) {
			$author_name = get_post_meta( $post_id, 'author_name', true );
			$author_name = $author_name ? $author_name : __( '(not set)', 'ow-features' );
			$edit_link   = get_edit_post_link( $post_id );

			$link = sprintf( '<a href="%1$s"><strong>%2$s</strong></a>', $edit_link, $author_name );
			echo wp_kses(
				$link,
				[
					'a'      => [
						'href' => true,
					],
					'strong' => true,
				]
			);
		}
	}
}
