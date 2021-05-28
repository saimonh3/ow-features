<?php
/**
 * Content_Raw_Schema class.
 *
 * Registers GraphQL schemas.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Schemas;

use OW_Features\Features\Inc\Traits\Singleton;

/**
 * Class Content_Raw_Schema
 */
class Content_Raw_Schema {

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
		 * Action
		 */

		// Register Header Type and Field.
		add_action( 'graphql_register_types', [ $this, 'register_content_raw_field' ] );
	}

	/**
	 * Register content raw field
	 */
	public function register_content_raw_field() {

		register_graphql_field(
			'Page',
			'contentRaw',
			[
				'description' => __( 'Get header', 'ow-features' ),
				'type'        => 'String',
				'resolve'     => function ( $post ) {
					$page = get_post( $post->ID );
					return $page->post_content;
				},
			]
		);

	}

}
