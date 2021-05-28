<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Publishers_Autonomy
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Publishers_Autonomy extends Base {
	use Singleton;

	protected $name = 'publishers-autonomy';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'Publishers Autonomy', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group {"align":"wide"} --><div class="wp-block-group alignwide"><div class="wp-block-group__inner-container"><!-- wp:image {"align":"center","id":6972,"sizeSlug":"large","linkDestination":"none","className":"ow-publishers-autonomy-logo"} --><div class="wp-block-image ow-publishers-autonomy-logo"><figure class="aligncenter size-large"><img src="' . esc_url( ow_features_get_image_path( 'logo-mobile-footer@2x.png' ) ) . '" alt="" class="wp-image-6972"/></figure></div><!-- /wp:image --><!-- wp:heading {"textAlign":"center","align":"wide","style":{"typography":{"fontSize":96}},"className":"ow-publishers-autonomy-title"} --><h2 class="alignwide has-text-align-center ow-publishers-autonomy-title" style="font-size:96px">Powering publisher autonomy.</h2><!-- /wp:heading --><!-- wp:paragraph {"align":"center","className":"ow-publishers-autonomy-description","fontSize":"30-18"} --><p class="has-text-align-center ow-publishers-autonomy-description has-30-18-font-size">We’re improving how–and where–we talk to each other online. We help publishers to gain independence from the social media giants by fueling millions of high-quality conversations across thousands of communities with more than one hundred million monthly users. Together, we’re bringing power back to the web.</p><!-- /wp:paragraph --><!-- wp:image {"id":6977,"sizeSlug":"large","linkDestination":"none","className":"ow-publishers-autonomy-image"} --><figure class="wp-block-image size-large ow-publishers-autonomy-image"><img src="' . esc_url( ow_features_get_image_path( 'artboard-1-2-a@2x.png' ) ) . '" alt="" class="wp-image-6977"/></figure><!-- /wp:image --></div></div><!-- /wp:group -->'
			)
		);
	}
}
