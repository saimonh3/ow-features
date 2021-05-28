<?php
namespace OW_Features\Features\Inc\Blocks;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Contact_Form
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Blocks
 */
class Contact_Form extends Base {
	use Singleton;

	protected $name = 'contact-form';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	protected function get_block_config(): array {
		return [];
	}
}
