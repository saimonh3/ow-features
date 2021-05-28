<?php
namespace OW_Features\Features\Inc\Blocks;

use OW_Features\Features\Inc\Traits\Singleton;
use WP_REST_Response;
use WP_Post;

defined( 'ABSPATH' ) || exit;

/**
 * Class Recent_Posts
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Blocks
 */
class Recent_Posts extends Base {
	use Singleton;

	protected $name = 'recent-posts';

	/**
	 * Recent_Posts constructor.
	 */
	public function __construct() {
		add_filter( 'rest_prepare_post', [ $this, 'attach_category_names' ], 10, 2 );
	}

	/**
	 * Attach category names to post response
	 *
	 * @param WP_REST_Response $response
	 *
	 * @return WP_REST_Response
	 */
	public function attach_category_names( WP_REST_Response $response ): WP_REST_Response {
		$cat_ids   = ! empty( $response->data['categories'] ) ? $response->data['categories'] : [];
		$cat_names = array_map(
			static function( $id ) {
				return get_cat_name( $id );
			},
			$cat_ids
		);

		$response->data['category_names'] = $cat_names;

		return $response;
	}

	/**
	 * Get block config
	 *
	 * @return array
	 */
	protected function get_block_config(): array {
		return [];
	}
}
