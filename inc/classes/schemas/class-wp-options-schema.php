<?php
/**
 * Sticky_Argument_Schema class.
 *
 * Registers GraphQL schemas.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Schemas;

use OW_Features\Features\Inc\Traits\Singleton;

/**
 * Class Sticky_Argument_Schema
 */
class WP_Options_Schema {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {
		$this->setup_hooks();
	}

	/**
	 * To setup action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {

		/**
		 * Actions
		 */
		add_action( 'graphql_register_types', [ $this, 'register_wp_options_type' ] );
		add_action( 'graphql_register_types', [ $this, 'register_wp_options_field' ] );


	}

	/**
	 * Register WP options type.
	 *
	 * @return void
	 */
	public function register_wp_options_type() {

		register_graphql_object_type(
			'WP_OPTIONS',
			[
				'description' => esc_html__( 'Load WordPress options', 'ow-features' ),
				'fields' => [
					'stickyPosts' => [
						'type'        => [
							'list_of' => 'ID',
						],
						'description' => esc_html__( 'Load WordPres sticky posts ids', 'ow-features' ),
					],
				],
			]
		);

	}

	/**
	 * Register WP options field.
	 *
	 * @return void
	 */
	public function register_wp_options_field() {

		register_graphql_field(
			'RootQuery',
			'wpOptions',
			[
				'description' => __( 'Get WP sticky ids', 'ow-features' ),
				'type'        => 'WP_OPTIONS',
				'resolve'     => function() {

					return [
						'stickyPosts' => get_option( 'sticky_posts', [] ),
					];

				}
			]
		);

	}

}
