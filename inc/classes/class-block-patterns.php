<?php
/**
 * Registers assets for all blocks, and additional global functionality for gutenberg blocks.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc;

use OW_Features\Features\Inc\Traits\Singleton;
use OW_Features\Features\Inc\Block_Patterns\Publishers_Autonomy;
use OW_Features\Features\Inc\Block_Patterns\Leading_Publishers;
use OW_Features\Features\Inc\Block_Patterns\Publishers_Talk;
use OW_Features\Features\Inc\Block_Patterns\Openweb_OS;
use OW_Features\Features\Inc\Block_Patterns\Hero_Number_One;
use OW_Features\Features\Inc\Block_Patterns\Hero_Number_Two;
use OW_Features\Features\Inc\Block_Patterns\Openweb_OS_Conversations;
use OW_Features\Features\Inc\Block_Patterns\Info_Box;

defined( 'ABSPATH' ) || exit;

/**
 * Class Block_Patterns
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc
 */
class Block_Patterns {
	use Singleton;

	public const CATEGORY_NAME = 'ow-feature-category';

	/**
	 * Block_Patterns constructor.
	 */
	protected function __construct() {
		$this->setup_hooks();
	}

	/**
	 * Setup hooks
	 *
	 * @retun void
	 */
	public function setup_hooks(): void {
		if ( ! function_exists( 'register_block_pattern_category' ) ) {
			return;
		}

		add_action( 'init', [ $this, 'register_category' ] );
		add_action( 'init', [ $this, 'register_patterns' ] );
	}

	/**
	 * Register block pattern category
	 *
	 * @retun void
	 */
	public function register_category(): void {
		register_block_pattern_category(
			self::CATEGORY_NAME,
			[
				'label' => esc_html__( 'OpenWeb', 'ow-features' )
			]
		);
	}

	/**
	 * Register all the block patterns
	 *
	 * @retun void
	 */
	public function register_patterns(): void {
		foreach ( $this->get_patterns() as $pattern_class ) {
			$pattern = $pattern_class::get_instance();
			register_block_pattern( $pattern->get_name(), $pattern->get_config() );
		}
	}

	/**
	 * Get block patterns
	 *
	 * @return array
	 */
	private function get_patterns(): array {
		return apply_filters(
			'ow_features_features_get_block_patterns',
			[
				Publishers_Autonomy::class,
				Leading_Publishers::class,
				Publishers_Talk::class,
				Openweb_OS::class,
				Hero_Number_One::class,
				Hero_Number_Two::class,
				Openweb_OS_Conversations::class,
				Info_Box::class,
			]
		);
	}
}
