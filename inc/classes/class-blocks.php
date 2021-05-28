<?php
/**
 * Registers assets for all blocks, and additional global functionality for gutenberg blocks.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc;

use OW_Features\Features\Inc\Traits\Singleton;
use OW_Features\Features\Inc\Blocks\Hero_Numbers;
use OW_Features\Features\Inc\Blocks\Info_Box;
use OW_Features\Features\Inc\Blocks\Featured_Info;
use OW_Features\Features\Inc\Blocks\Recent_Posts;
use OW_Features\Features\Inc\Blocks\Contact_Form;

defined( 'ABSPATH' ) || exit;

/**
 * Class Blocks
 */
class Blocks {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {
		$this->setup_hooks();
	}

	/**
	 * Setup hooks.
	 *
	 * @return void
	 */
	public function setup_hooks() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		add_action( 'init', [ $this, 'register' ] );
		add_filter( 'block_categories', [ $this, 'block_categories' ] );
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_scripts' ] );
	}

	/**
	 * Register all the blocks
	 *
	 * @since 1.1.0
	 *
	 * @retun void
	 */
	public function register(): void {
		foreach ( $this->get_blocks() as $block_class ) {
			$block = $block_class::get_instance();
			register_block_type( $block->get_name(), $block->get_config() );
		}
	}

	/**
	 * Get a list of blocks to registered
	 *
	 * @since 1.1.0
	 *
	 * @return array
	 */
	private function get_blocks(): array {
		return apply_filters(
			'ow_features_features_get_blocks',
			[
				Hero_Numbers::class,
				Info_Box::class,
				Featured_Info::class,
				Recent_Posts::class,
				Contact_Form::class,
			]
		);
	}

	/**
	 * Register block categories
	 *
	 * @param array $categories
	 *
	 * @return array
	 */
	public function block_categories( array $categories ): array {
		$categories[] = [
			'slug'  => 'open-web',
			'title' => __( 'Open Web', 'ow-features' ),
			'icon'  => '',
		];

		return $categories;
	}

	/**
	 * Enqueue scripts.
	 *
	 * @global object $wp_roles Core class used to implement a user roles.
	 *
	 * @return void
	 */
	public function enqueue_scripts() {

		global $wp_roles;

		$asset_config_file = sprintf( '%s/assets/build/assets.php', OW_FEATURES_PATH );
		$vj_exports        = [];

		if ( ! file_exists( $asset_config_file ) ) {
			return;
		}

		$asset_config = require $asset_config_file; // // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable

		if ( empty( $asset_config['js/editor.js'] ) ) {
			return;
		}

		$editor_asset = $asset_config['js/editor.js'];

		$dependencies = ( ! empty( $editor_asset['dependencies'] ) ) ? $editor_asset['dependencies'] : [];
		$version      = ( ! empty( $editor_asset['version'] ) ) ? $editor_asset['version'] : filemtime( $asset_config_file );

		wp_register_script(
			'ow-features-editor',
			OW_FEATURES_URL . '/assets/build/js/editor.js',
			$dependencies,
			$version,
			true
		);

		wp_enqueue_script( 'ow-features-editor' );

		wp_localize_script(
			'ow-features-editor',
			'owFeatures',
			[
				'featuredInfoIcon' => ow_features_get_image_path( 'featured-info-icon.png' ),
				'featuredInfoImage' => ow_features_get_image_path( 'featured-info-image.jpg' ),
			]
		);

		wp_register_style(
			'ow-features-editor',
			OW_FEATURES_URL . '/assets/build/css/editor.css',
			[],
			filemtime( OW_FEATURES_PATH . '/assets/build/css/editor.css' )
		);

		wp_enqueue_style( 'ow-features-editor' );
	}
}
