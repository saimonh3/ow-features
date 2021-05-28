<?php
namespace OW_Features\Features\Inc\Blocks;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Info_Box
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Blocks
 */
class Info_Box extends Base {
	use Singleton;

	protected $name = 'info-box';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	protected function get_block_config(): array {
		return [];
	}
}
