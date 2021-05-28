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
class Sticky_Argument_Schema {

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
		add_action( 'graphql_register_types', [ $this, 'add_sticky_where_argument' ] );

		/**
		 * Filters
		 */
		add_filter( 'graphql_post_object_connection_query_args', [ $this, 'add_sticky_argument_condition' ], 10, 5 );

	}

	/**
	 * Function to register WPGraphql field.
	 *
	 * @param TypeRegistry $type_registry Instance of the TypeRegistry
	 *
	 * @return void
	 */
	public function add_sticky_where_argument( $type_registry ) {

		register_graphql_field(
			'RootQueryToPostConnectionWhereArgs',
			'onlySticky',
			[
				'type'        => 'boolean',
				'description' => esc_html__( 'The ID of the post object to filter by', 'ow-features' ),
			]
		);

	}

	/**
	 * Function to add custom argument condition in WP_Query args.
	 *
	 * @param array       $query_args Query arguments.
	 * @param mixed       $source     The source that's passed down the GraphQL queries
	 * @param array       $args       The inputArgs on the field
	 * @param AppContext  $context    The AppContext passed down the GraphQL tree
	 * @param ResolveInfo $info       The ResolveInfo passed down the GraphQL tree
	 *
	 * @return array
	 */
	public function add_sticky_argument_condition( $query_args, $source, $args, $context, $info ) {

		// Add condition if onlySticky argument is set.
		if (
			! empty( $args['where'] ) &&
			isset( $args['where']['onlySticky'] )
		) {

			$sticky_posts = get_option( 'sticky_posts', [] );

			if ( true === $args['where']['onlySticky'] && ! empty( $sticky_posts ) ) {
				$query_args['post__in'] = $sticky_posts;
			} elseif ( ! empty( $sticky_posts ) ) {
				$query_args['post__not_in'] = $sticky_posts;
			}
		}

		return $query_args;

	}

}