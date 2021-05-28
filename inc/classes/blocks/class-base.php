<?php
namespace OW_Features\Features\Inc\Blocks;

defined( 'ABSPATH' ) || exit;

/**
 * Class Base
 *
 * @package OW_Features\Features\Inc\Blocks
 *
 * @since 1.1.0
 */
abstract class Base {
	protected $basename = 'ow-feature-block';

	/**
	 * Get block name
	 *
	 * @return string
	 */
	public function get_name(): string {
		return $this->basename . '/' . $this->name;
	}

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		$default_config = [
			'apiVersion'    => 2,
			'editor_script' => 'ow-features-editor',
			'editor_style'  => 'ow-features-editor',
		];

		$config = wp_parse_args( $this->get_block_config(), $default_config );

		return apply_filters( 'ow_features_features_get' . $this->get_name() . '_config', $config );
	}

	abstract protected function get_block_config(): array;
}
