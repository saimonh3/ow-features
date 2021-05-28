<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Block_Patterns;

defined( 'ABSPATH' ) || exit;

/**
 * Class Base
 *
 * @package OW_Features\Features\Inc\Blocks
 *
 * @since 1.1.0
 */
abstract class Base {
	protected $category = Block_Patterns::CATEGORY_NAME;

	public function get_name(): string {
		return $this->category . '/' . $this->name;
	}

	abstract public function get_config(): array;
}
