<?php
/**
 * Testimonial REST Controller
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Rest_Controllers;

use WP_REST_Server;
use WP_REST_Controller;
use OW_Features\Features\Inc\Post_Types\Testimonials as Testimonial_Post_Type;

/**
 * REST Controller Class
 */
class Testimonials extends WP_REST_Controller {

	/**
	 * REST namespace
	 *
	 * @var string
	 */
	protected $namespace = 'ow-features/v1';

	/**
	 * REST endpoint
	 *
	 * @var string
	 */
	protected $base = 'testimonials';

	/**
	 * Class constructor
	 */
	public function __construct() {
		$this->register_routes();
	}

	/**
	 * Register routes
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->base,
			[
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'get_items' ],
					'permission_callback' => '__return_true',
				],
			]
		);
	}

	/**
	 * Get testimonials
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 *
	 * @return \WP_REST_Response
	 */
	public function get_items( $request ) {
		$args = [
			'post_type'      => Testimonial_Post_Type::SLUG,
			'posts_per_page' => 100,
			'fields'         => 'ids',
		];

		$posts = get_posts( $args );

		$testimonials = [];

		if ( ! empty( $posts ) ) {
			foreach ( $posts as $post_id ) {
				$testimonials[] = [
					'id'                     => $post_id,
					'author_name'            => get_post_meta( $post_id, 'author_name', true ),
					'author_designation'     => get_post_meta( $post_id, 'author_designation', true ),
					'author_profile_picture' => wp_get_attachment_image_src( get_post_meta( $post_id, 'author_profile_picture', true ), 'full' ),
					'logo'                   => wp_get_attachment_image_src( get_post_meta( $post_id, 'logo', true ), 'full' ),
					'content'                => get_post_meta( $post_id, 'content', true ),
				];
			}
		}

		return rest_ensure_response( $testimonials );
	}
}
