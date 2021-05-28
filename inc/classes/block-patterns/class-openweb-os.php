<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Openweb_OS
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Openweb_OS extends Base {
	use Singleton;

	protected $name = 'openweb-os';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'OpenWeb OS', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"left","align":"wide","style":{"typography":{"fontSize":100}},"className":"ow-openweb-os-description-title"} --><h2 class="alignwide has-text-align-left ow-openweb-os-description-title" style="font-size:100px"> The OpenWebOS</h2><!-- /wp:heading --> <!-- wp:paragraph {"align":"left","style":{"typography":{"fontSize":35}},"className":"ow-openweb-os-description"} --> <p class="has-text-align-left ow-openweb-os-description" style="font-size:35px">OpenWebOS is bringing power back to publishers. It\'s your unified, end-to-end suite for building community, harnessing first-party data, achieving sustainable revenue, and future-proofing your business. It\'s your OS to win on the web.</p><!-- /wp:paragraph --> <!-- wp:image {"id":6895,"sizeSlug":"large","linkDestination":"none","className":"ow-openweb-os-image"} --> <figure class="wp-block-image size-large ow-openweb-os-image"><img src="' . esc_url( ow_features_get_image_path( 'artboard-1-2-a@2x.png' ) ) . '" alt="" class="wp-image-6895" title="OpenWeb OS"/></figure> <!-- /wp:image --></div></div><!-- /wp:group -->',
			)
		);
	}
}
