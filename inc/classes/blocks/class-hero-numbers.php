<?php
namespace OW_Features\Features\Inc\Blocks;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Hero_Numbers
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Blocks
 */
class Hero_Numbers extends Base {
	use Singleton;

	protected $name = 'hero-numbers';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	protected function get_block_config(): array {
		return [];
	}
}
