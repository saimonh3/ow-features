<?php
namespace OW_Features\Features\Inc\Blocks;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Featured_Info
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Blocks
 */
class Featured_Info extends Base {
	use Singleton;

	protected $name = 'featured-info';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	protected function get_block_config(): array {
		return [];
	}
}
