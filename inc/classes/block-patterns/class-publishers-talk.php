<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Hero
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Publishers_Talk extends Base {
	use Singleton;

	protected $name = 'publishers-talk';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'Publishers Talk', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} --><div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:heading {"style":{"typography":{"fontSize":96}},"className":"ow-publishers-talk-title"} --><h2 class="ow-publishers-talk-title" style="font-size:96px">We help publishers thrive by getting your audience to stay and talk.</h2><!-- /wp:heading --></div><!-- /wp:column --><!-- wp:column {"width":"33.33%"} --><div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:paragraph {"className":"ow-publishers-talk-description","fontSize":"30-18"} --><p class="ow-publishers-talk-description has-30-18-font-size">Move from readers to registered users. Leverage best-in-class social experiences, registration funnels, and context-driven monetization while building first-party data to future-proof your businesses.</p><!-- /wp:paragraph --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:image {"align":"wide","id":6989,"sizeSlug":"full","linkDestination":"none","className":"ow-publishers-talk-image is-style-default"} --><figure class="wp-block-image alignwide size-full ow-publishers-talk-image is-style-default"><img src=" ' . esc_url( ow_features_get_image_path( 'publishers-talk.png' ) ) . ' " alt="" class="wp-image-6989"/></figure><!-- /wp:image --></div></div><!-- /wp:group -->'
			)
		);
	}
}
