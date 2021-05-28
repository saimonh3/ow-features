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
class Leading_Publishers extends Base {
	use Singleton;

	protected $name = 'leading-publishers';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'Leading Publishers', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":82}},"className":"ow-leading-publishers-title"} --><h2 class="has-text-align-center ow-leading-publishers-title" style="font-size:82px">We\'re trusted by the world\'s leading publishers</h2><!-- /wp:heading --><!-- wp:gallery {"ids":[7140,6848,6849,6850,6851,6852,6853,6854,6855,6856,6857,7142],"columns":4,"imageCrop":false,"linkTo":"none","className":"ow-leading-publishers-brands"} --><figure class="wp-block-gallery columns-4  ow-leading-publishers-brands"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'aol-copy@3x.png' ) ) . '" alt="" data-id="7140" data-link="" class="wp-image-7140"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'refinery-logo@3x.png' ) ) . '" alt="" data-id="6848" data-link="" class="wp-image-6848"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'huff-post-logo@3x.png' ) ) . '" alt="" data-id="6849" data-link="" class="wp-image-6849"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'msn@3x.png' ) ) . '" alt="" data-id="6850" data-link="" class="wp-image-6850"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'salon-com-logo-vector-copy@3x.png' ) ) . '" alt="" data-id="6851" data-link="" class="wp-image-6851"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'techcrunch-logo-copy-2@3x.png' ) ) . '" alt="" data-id="6852" data-link="" class="wp-image-6852"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'apartment-therapy-logo@3x.png' ) ) . '" alt="" data-id="6853" data-link="" class="wp-image-6853"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'marketwatch-logo@3x.png' ) ) . '" alt="" data-id="6854" data-link="" class="wp-image-6854"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'foxnews-logo@3x.png' ) ) . '" alt="" data-id="6855" data-link="" class="wp-image-6855"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'skysport-logo@3x.png' ) ) . '" alt="" data-id="6856" data-link="" class="wp-image-6856"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'hearst-logo@3x.png' ) ) . '" alt="" data-id="6857" data-link="" class="wp-image-6857"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . esc_url( ow_features_get_image_path( 'meredith-logo@3x.png' ) ) . '" alt="" data-id="7142" data-full-url="http://ow.test/wp-content/uploads/2021/04/msn@3x-1.png" data-link="http://ow.test/frontpage-by-gutenberg-block/msn3x-1/#main" class="wp-image-7142"/></figure></li></ul></figure><!-- /wp:gallery --></div></div><!-- /wp:group -->'
			)
		);
	}
}
