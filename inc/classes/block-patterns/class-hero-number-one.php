<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Hero_Number_One
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Hero_Number_One extends Base {
	use Singleton;

	protected $name = 'hero-number-one';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'Hero Number One', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:columns --><div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/hero-numbers {"title":"100M","description":"of MAU","showIcon":false,"className":"wp-block-ow-feature-block-hero-numbers"} /--></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/hero-numbers {"title":"10Ms","description":"of conversations","showIcon":false,"className":"wp-block-ow-feature-block-hero-numbers"} /--></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/hero-numbers {"title":"1000+","description":"of domains","showIcon":false,"arrowUpward":false,"className":"wp-block-ow-feature-block-hero-numbers"} /--></div><!-- /wp:column --></div><!-- /wp:columns --></div></div><!-- /wp:group -->'
			)
		);
	}
}
